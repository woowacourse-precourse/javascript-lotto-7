import BasicNumbersInput from './BasicNumbersInput.js';
import BonusNumberInput from './BonusNumberInput.js';
import BuyPriceInput from './BuyPriceInput.js';
import OutputPrint from './OutputPrint.js';

const LoopWhileValid = {
  getBuyPrice: async () => {
    try {
      const userInput = await BuyPriceInput.get();
      if (BuyPriceInput.validate(userInput)) {
        OutputPrint.blankLine();
        return BuyPriceInput.parse(userInput);
      }
    } catch (error) {
      OutputPrint.error(error.message);
      OutputPrint.blankLine();
      return LoopWhileValid.getBuyPrice();
    }
  },

  getBasicNumbers: async () => {
    try {
      const userInput = await BasicNumbersInput.get();
      if (BasicNumbersInput.validate(userInput)) {
        OutputPrint.blankLine();
        return BasicNumbersInput.parse(userInput);
      }
    } catch (error) {
      OutputPrint.error(error.message);
      OutputPrint.blankLine();
      return LoopWhileValid.getBasicNumbers();
    }
  },

  getBonusNumbers: async (basicNumbers) => {
    try {
      const userInput = await BonusNumberInput.get();
      if (BonusNumberInput.validate(userInput, basicNumbers)) {
        OutputPrint.blankLine();
        return BonusNumberInput.parse(userInput);
      }
    } catch (error) {
      OutputPrint.error(error.message);
      OutputPrint.blankLine();
      return LoopWhileValid.getBonusNumbers(basicNumbers);
    }
  },
};

export default LoopWhileValid;
