import {API_CURRENT_URL} from '../shared/constants.ts';
interface ILocation {
  country: string;
  name: string;
  localtime: string;
}
interface ICurrent {
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
  };
}
interface IResponse {
  location: ILocation;
  current: ICurrent;
}

export interface ICurrentWeatherOutput {
  country: string;
  place: string;
  date: string;
  isDay: boolean;
  temperature: number;
  description: string;
  icon: string;
}

const responseConverter = (response: IResponse): ICurrentWeatherOutput => {
  const {location, current} = response;
  const {country, name, localtime} = location;
  const {condition, temp_c, is_day} = current;

  return {
    country,
    place: name,
    date: localtime,
    isDay: !!is_day,
    temperature: Math.round(temp_c),
    description: condition.text,
    icon: `https:${condition.icon}`,
  };
};

export const getCurrentWeatherByCity = async (city: string) => {
  try {
    const response = await fetch(`${API_CURRENT_URL}&q=${city}`);
    const json = await response.json();
    if (json?.error) {
      return json.error;
    }
    return responseConverter(json);
  } catch (error) {
    console.log(error);
  }
};
