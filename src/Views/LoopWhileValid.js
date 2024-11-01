import BuyPriceInput from './BuyPriceInput.js';

const LoopWhileValid = {
  getBuyPrice: async () => {
    while (true) {
      const userInput = await BuyPriceInput.get();
      if (BuyPriceInput.validate(userInput)) return Number(userInput);
    }
  },
};

export default LoopWhileValid;
