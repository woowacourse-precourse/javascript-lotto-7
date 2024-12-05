export const limitMaxDigitNum = (
  inputNumber,
  limitMaxDigits,
  errorMessage
) => {
  if (
    limitMaxDigits !== undefined &&
    !(inputNumber.toString().length <= limitMaxDigits)
  ) {
    throw new Error(errorMessage);
  }
};
