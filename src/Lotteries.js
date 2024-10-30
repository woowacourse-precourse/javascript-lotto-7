class Lotteries {
  #lotteries;

  constructor(lotteryNotes) {
    const { minimumRangeValue, maximumRangeValue, pickingNumber } =
      defaultSettings.randomRangeValue;

    this.#lotteries = Array.from({ length: lotteryNotes }, () => {
      const numbers = Random.pickUniqueNumbersInRange(
        minimumRangeValue,
        maximumRangeValue,
        pickingNumber,
      );
      return new Lotto(numbers.sort((a, b) => a - b));
    });
  }
}
