class Prize {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getMatchedCount(numbers, winningNumbers) {
    const matchedNumbersCount = numbers.reduce((acc, number) => {
      if (winningNumbers.includes(number)) {
        return acc + 1;
      }
      return acc;
    }, 0);

    return matchedNumbersCount;
  }
}

export default Prize;
