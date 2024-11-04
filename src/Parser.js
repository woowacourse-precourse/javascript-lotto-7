import ErrorCollection from "./ErrorCollection.js";

class Parser {
  parsePurchaseAmount(input) {
    const amount = Number(input);
    const errorCollection = new ErrorCollection();

    errorCollection.checkPurchaseAmountInteger(amount);
    errorCollection.checkPurchaseAmountPositive(amount);
    errorCollection.checkPurchaseAmountDivisibility(amount);

    return amount;
  }

  parseNumbers(input) {
    return input.split(",").map((num) => Number(num.trim()));
  }

  parseBonusNumber(input) {
    return Number(input.trim());
  }
}

export default Parser;
