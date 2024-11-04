export const range = (count, value) => {
  return Array(count).fill(value || '');
}

export const getParsingNumber = (array) => {
  return array.map((el) => parseInt(el, 10));
}
