import BasicNumbersInput from './BasicNumbersInput.js';
import BonusNumberInput from './BonusNumberInput.js';
import BuyPriceInput from './BuyPriceInput.js';
import OutputPrint from './OutputPrint.js';

// func[], number[] => string
const LoopWhileValid = {
  async getValidatedInput(inputModule, validateArgs = []) {
    try {
      const userInput = await inputModule.get();
      if (inputModule.validate(userInput, ...validateArgs)) {
        OutputPrint.blankLine();
        return inputModule.parse(userInput);
      }
    } catch (error) {
      OutputPrint.error(error.message);
      OutputPrint.blankLine();
      return this.getValidatedInput(inputModule, validateArgs);
    }
  },

  getBuyPrice: async function () {
    return this.getValidatedInput(BuyPriceInput);
  },

  getBasicNumbers: async function () {
    return this.getValidatedInput(BasicNumbersInput);
  },

  getBonusNumbers: async function (basicNumbers) {
    return this.getValidatedInput(BonusNumberInput, [basicNumbers]);
  },
};

export default LoopWhileValid;
