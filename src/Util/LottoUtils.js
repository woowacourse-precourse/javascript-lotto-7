export const LottoUtils = {
  floatingNumbers(totalEarning) {
    return totalEarning.toFixed(1);
  },
  sortingRandomNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  },
};
