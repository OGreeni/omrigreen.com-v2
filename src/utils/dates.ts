export const formatDateString = (dateString: string) => {
  return dateString.split('T')[0]?.split('-').reverse().join('-');
};
