import {API_FORECAST_URL} from '../shared/constants.ts';
interface IForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
  };
}
interface IForecastDays {
  forecastday: IForecastDay[];
}

export interface IForecastOutput {
  date: string;
  maxTemp: number;
  minTemp: number;
}

const responseConverter = ({forecastday}: IForecastDays): IForecastOutput[] => {
  return forecastday.map(dayResponse => {
    const {
      date,
      day: {maxtemp_c, mintemp_c},
    } = dayResponse;
    return {
      date: date,
      maxTemp: Math.round(maxtemp_c),
      minTemp: Math.round(mintemp_c),
    };
  });
};

export const getForecastWeatherByCity = async (city: string, days: number) => {
  try {
    const response = await fetch(`${API_FORECAST_URL}&q=${city}&days=${days}`);
    const {forecast} = await response.json();

    return responseConverter(forecast);
  } catch (error) {
    console.log(error);
  }
};
