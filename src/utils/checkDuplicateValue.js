export const hasDuplicates = (array) => {
  const uniqueValues = new Set(array);

  return array.length > uniqueValues.size;
};

export const isDuplicateInArray = (array, value) => {
  return array.includes(value);
};
