class InputParser {
  static parsePurchaseAmount(input) {
    if (input.trim() === '') {
      return null;
    }
    return Number(input);
  }
}

export default InputParser;
