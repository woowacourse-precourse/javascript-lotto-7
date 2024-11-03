export const Utils = {
  convertWinningNumberToArray(numbers) {
    return numbers.split(",").map((x) => Number(x));
  },

  convertBonusNumberToNumber(number) {
    return Number(number);
  },
};
