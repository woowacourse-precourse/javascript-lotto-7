import { INPUT_CONFIG, LOTTO_CONFIG, PRIZE_CONFIG } from './constant/config.js';
import { handleErrors } from './error/handleError.js';
import LottoStore from './model/LottoStore.js';
import { print, readLine } from './util/console.js';
import { lottoAmountValidator, lottoBonusNumberValidator, lottoNumbersValidator } from './util/validation.js';

class App {
  #lottoStore;

  async run() {
    await this.#readPurchaseAmount();
    this.#printPurchaseLotto();
    await this.#readLottoNumbers();
    this.#printResult();
  }

  async #readPurchaseAmount() {
    const amount = await readLine('구입금액을 입력해 주세요.\n', (input) =>
      handleErrors([
        () => lottoAmountValidator.isPriceInteger(input),
        () => lottoAmountValidator.isPriceDivideByUnit(input),
      ]),
    );

    this.#lottoStore = new LottoStore(amount / LOTTO_CONFIG.PRICE);
  }

  #printPurchaseLotto() {
    const lottoList = this.#lottoStore.getLottoList();

    print(`\n${lottoList.length}개를 구매했습니다.`);

    lottoList.forEach((numbers) => {
      print(`[${numbers.join(', ')}]`);
    });
  }

  async #readLottoNumbers() {
    const lottoNumbers = await readLine('\n당첨 번호를 입력해 주세요.\n', (input) =>
      handleErrors([
        () => lottoNumbersValidator.isLottoNumbersSplitByDelimiter(input),
        () => lottoNumbersValidator.isLottoNumbersInRange(input),
        () => lottoNumbersValidator.isLottoNumbersValidLength(input),
        () => lottoNumbersValidator.isLottoNumbersDuplicated(input),
      ]),
    );
    const parsedLottoNumbers = lottoNumbers.split(INPUT_CONFIG.DELIMITER).map(Number);

    await this.#readLottoBonusNumbers(parsedLottoNumbers);
  }

  async #readLottoBonusNumbers(lottoNumbers) {
    const lottoBonusNumber = await readLine('\n보너스 번호를 입력해 주세요.\n', (input) =>
      handleErrors([
        () => lottoBonusNumberValidator.isLottoBonusNumberValid(input),
        () => lottoBonusNumberValidator.isLottoBonusNumberInRange(input),
        () => lottoBonusNumberValidator.isLottoBonusNumberDuplicated(input, lottoNumbers),
      ]),
    );

    this.#lottoStore.setWinningNumbers(lottoNumbers, Number(lottoBonusNumber));
  }

  #printResult() {
    const { result, sum, amount } = this.#lottoStore.compare();

    print('\n당첨 통계\n---');
    result.forEach(([rank, amount]) => {
      print(
        `${PRIZE_CONFIG[PRIZE_CONFIG.length - rank].description} (${PRIZE_CONFIG[PRIZE_CONFIG.length - rank].prize.toLocaleString()}원) - ${amount}개`,
      );
    });
    print(`총 수익률은 ${((sum / (amount * LOTTO_CONFIG.PRICE)) * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
