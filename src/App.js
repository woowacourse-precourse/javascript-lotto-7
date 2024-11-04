import { Console, Random } from '@woowacourse/mission-utils';
import {
  validateLottoBuyPrice,
  validateLottoAnswerNumbers,
  validateLottoBonusNumber,
} from './validation/validateFunctions.js';
import Lotto from './Lotto.js';
import {
  ONE_LOTTO_PRICE,
  LottoWinningPrice,
  LottoWinningPriceChar,
  PROMPT_MESSAGES,
  LOTTO_WINNING_KEYS_IN_ORDER,
  LOTTO_WINNING_KEYS,
} from './constants.js';

const prompt = async (message, validation, rest) => {
  const input = await Console.readLineAsync(message);
  if (validation(input, rest)) {
    return input;
  }
  return prompt(message, validation, rest);
};

const makeLottoCount = (lottoBuyPrice) =>
  Number(lottoBuyPrice) / ONE_LOTTO_PRICE;

class App {
  constructor() {
    this.lottoBuyPrice = null;
    this.lottoCount = null;
    this.myLottos = null;
    this.lottoAnswerNumbers = null;
    this.lottoBonusNumber = null;
    this.lottoWinningResult = {
      [LOTTO_WINNING_KEYS.MATCH_3]: 0,
      [LOTTO_WINNING_KEYS.MATCH_4]: 0,
      [LOTTO_WINNING_KEYS.MATCH_5]: 0,
      [LOTTO_WINNING_KEYS.MATCH_BONUS]: 0,
      [LOTTO_WINNING_KEYS.MATCH_6]: 0,
    };
    this.winningMoney = 0;
  }

  async run() {
    await this.getLottoBuyPrice();
    this.getLottoCount();
    this.makeLottos();

    this.printMyLottos();
    await this.getLottoAnswerNumbers();
    await this.getLottoBonusNumber();

    this.getLottoWinningResult();
    this.getLottoWinningTotalMoney();

    this.printLottoResult();
  }

  async getLottoBuyPrice() {
    const lottoBuyPrice = await prompt(
      PROMPT_MESSAGES.buyPrice,
      validateLottoBuyPrice,
    );
    this.lottoBuyPrice = Number(lottoBuyPrice);
  }

  getLottoCount() {
    const lottoCount = makeLottoCount(this.lottoBuyPrice);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    this.lottoCount = Number(lottoCount);
  }

  makeLottos() {
    this.myLottos = Array.from({ length: this.lottoCount }, () => {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b,
      );
      return new Lotto(lotto);
    });
  }

  printMyLottos() {
    for (let i = 0; i < this.lottoCount; i++) {
      Console.print(`[${this.myLottos[i].getLottoNumbers().join(', ')}]`);
    }
    Console.print('');
  }

  async getLottoAnswerNumbers() {
    const lottoAnswerNumbers = await prompt(
      PROMPT_MESSAGES.winningNumbers,
      validateLottoAnswerNumbers,
    );
    Console.print('');

    this.lottoAnswerNumbers = lottoAnswerNumbers.split(',').map(Number);
  }

  async getLottoBonusNumber() {
    const lottoBonusNumber = await prompt(
      PROMPT_MESSAGES.bonusNumber,
      validateLottoBonusNumber,
      this.lottoAnswerNumbers,
    );
    Console.print('');

    this.lottoBonusNumber = Number(lottoBonusNumber);
  }

  getLottoWinningResult() {
    const results = this.myLottos.map((myLotto) =>
      myLotto.getLottoResult(this.lottoAnswerNumbers, this.lottoBonusNumber),
    );
    results.forEach(({ matchCount, isBonusMatch }) => {
      if (matchCount < 3) {
        return;
      }
      if (isBonusMatch && matchCount === 5) {
        this.lottoWinningResult[LOTTO_WINNING_KEYS.MATCH_BONUS] += 1;
        return;
      }
      this.lottoWinningResult[matchCount] += 1;
    });
  }

  getLottoWinningTotalMoney() {
    Object.entries(this.lottoWinningResult).forEach(([key, value]) => {
      this.winningMoney += LottoWinningPrice[key] * value;
    });
  }

  printLottoResult() {
    Console.print(PROMPT_MESSAGES.lottoResultTitle);
    Console.print(PROMPT_MESSAGES.lottoResultDivider);
    this.printLottoWinningCount();
    this.printRateOfReturn();
  }

  printLottoWinningCount() {
    const keys = LOTTO_WINNING_KEYS_IN_ORDER;
    keys.forEach((key) => {
      if (key === 'MATCH_BONUS') {
        Console.print(
          `5개 일치, 보너스 볼 일치 (${LottoWinningPriceChar[LOTTO_WINNING_KEYS[key]]}원) - ${this.lottoWinningResult[LOTTO_WINNING_KEYS[key]]}개`,
        );
        return;
      }
      Console.print(
        `${LOTTO_WINNING_KEYS[key]}개 일치 (${LottoWinningPriceChar[LOTTO_WINNING_KEYS[key]]}원) - ${this.lottoWinningResult[LOTTO_WINNING_KEYS[key]]}개`,
      );
    });
  }

  printRateOfReturn() {
    Console.print(
      `${PROMPT_MESSAGES.rateOfReturnPrefix}${((this.winningMoney / this.lottoBuyPrice) * 100).toFixed(1)}${PROMPT_MESSAGES.rateOfReturnSuffix}`,
    );
  }
}

export default App;
