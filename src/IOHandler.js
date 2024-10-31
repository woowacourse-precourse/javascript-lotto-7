import { LOTTO_MESSAGES } from "./constants/index.js";

class IOHandler {
  inputHandler;
  outputHandler;

  constructor(console) {
    this.inputHandler = console.readLineAsync;
    this.outputHandler = console.print;
  }

  retryUntilValid = async (getInputAsync, validateInput) => {
    while (true) {
      try {
        const input = await getInputAsync();
        validateInput(input);
        return input;
      } catch (error) {
        this.outputHandler(error.message);
      }
    }
  };

  getLottoPrice = async () => {
    const price = await this.inputHandler(LOTTO_MESSAGES.INPUT_LOTTO_PRICE);
    return Number(price);
  };
}

export default IOHandler;
