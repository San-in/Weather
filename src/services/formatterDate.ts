export const formatterDate = (date: string): string => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
};
