import InputValidator from './InputValidator.js';

const Parser = {
  parseNumber: (input) => {
    InputValidator.isEmpty(input);
    InputValidator.isNumber(input);
    return Number(input);
  },
  parseNumberArray: (inputArray) => {
    InputValidator.isEmpty(inputArray);
    return inputArray
      .trim()
      .split(',')
      .map((inputWinningNumbers) => Parser.parseNumber(inputWinningNumbers));
  },
};

export default Parser;
