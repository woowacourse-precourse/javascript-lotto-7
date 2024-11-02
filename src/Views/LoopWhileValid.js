import BasicNumbersInput from './BasicNumbersInput.js';
import BonusNumberInput from './BonusNumberInput.js';
import BuyPriceInput from './BuyPriceInput.js';
import OutputPrint from './OutputPrint.js';

const LoopWhileValid = {
  getBuyPrice: async () => {
    while (true) {
      const userInput = await BuyPriceInput.get();
      if (BuyPriceInput.validate(userInput)) {
        OutputPrint.blankLine();
        return BuyPriceInput.parse(userInput);
      }
      OutputPrint.blankLine();
    }
  },

  getBasicNumbers: async () => {
    while (true) {
      const userInput = await BasicNumbersInput.get();
      if (BasicNumbersInput.validate(userInput)) {
        OutputPrint.blankLine();
        return BasicNumbersInput.parse(userInput);
      }
      OutputPrint.blankLine();
    }
  },

  getBonusNumbers: async (basicNumbers) => {
    while (true) {
      const userInput = await BonusNumberInput.get();
      if (BonusNumberInput.validate(userInput, basicNumbers)) {
        OutputPrint.blankLine();
        return BonusNumberInput.parse(userInput);
      }
      OutputPrint.basicNumbers(basicNumbers);
      OutputPrint.blankLine();
    }
  },
};

export default LoopWhileValid;
