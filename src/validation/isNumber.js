export const isNumber = function (inputValue, errorMessage) {
  const isValid = !isNaN(Number(inputValue));
  if (!isValid) throw new Error(errorMessage);
};
