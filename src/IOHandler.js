import { LOTTO_MESSAGES, LOTTO_RESULT_MESSAGES_MAP } from "./constants/index.js";

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

  printLottoPurchaseCount = (count) => {
    this.outputHandler("\n" + count + LOTTO_MESSAGES.BUY_LOTTO);
  };

  printLottoNumbers = (lottoNumbers) => {
    const result = lottoNumbers.map((numbers) => `[${numbers.join(", ")}]`);
    this.outputHandler(result.join("\n"));
  };

  printPurchaseCountAndLottoNumbers = (lottoNumbers) => {
    this.printLottoPurchaseCount(lottoNumbers.length);
    this.printLottoNumbers(lottoNumbers);
  };

  getWinningNumbers = async () => {
    const winningNumber = await this.inputHandler(LOTTO_MESSAGES.INPUT_WINNING_NUMBER);
    return winningNumber.split(",").map(Number);
  };

  getBonusNumber = async () => {
    const bonusNumber = await this.inputHandler(LOTTO_MESSAGES.INPUT_BONUS_NUMBER);
    return Number(bonusNumber);
  };

  printLottoResult = (lottoResult) => {
    const result = Array.from(lottoResult).map(([key, count]) => {
      const message = LOTTO_RESULT_MESSAGES_MAP.get(key);
      return message + count + "개";
    });
    this.outputHandler(result.join("\n"));
  };

  printRevenueRate = (revenueRate) => {
    const formatRevenueRate = revenueRate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
    });
    this.outputHandler(`총 수익률은 ${formatRevenueRate}%입니다.`);
  };

  printResultAndRevenueRate = (lottoResult, revenueRate) => {
    this.outputHandler(LOTTO_MESSAGES.RESULT_LOTTO);
    this.printLottoResult(lottoResult);
    this.printRevenueRate(revenueRate);
  };
}

export default IOHandler;
