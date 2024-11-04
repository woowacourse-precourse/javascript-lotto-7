class Parser {
  parsePurchaseAmount(input) {
    return Number(input);
  }

  parseNumbers(input) {
    return input.split(",").map((num) => Number(num.trim()));
  }

  parseBonusNumber(input) {
    return Number(input.trim());
  }
}

export default Parser;
