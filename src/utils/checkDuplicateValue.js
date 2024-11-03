export const checkDuplicateValueInArray = (array) => {
  const uniqueValues = new Set(array);

  return array.length > uniqueValues.size;
};
