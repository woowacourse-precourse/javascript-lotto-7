import { Console, Random } from '@woowacourse/mission-utils';
import {
  validateLottoBuyPrice,
  validateLottoAnswerNumbers,
  validateLottoBonusNumber,
} from './validateFunctions.js';
import Lotto from './Lotto.js';

const prompt = async (message, validation, rest) => {
  const input = await Console.readLineAsync(message);
  if (validation(input, rest)) {
    return input;
  }
  return prompt(message, validation, rest);
};

const ONE_LOTTO_PRICE = 1000;
const makeLottoCount = (lottoBuyPrice) =>
  Number(lottoBuyPrice) / ONE_LOTTO_PRICE;

const LottoWinningPrice = Object.freeze({
  3: 5_000,
  4: 50_000,
  5: 1_500_000,
  5.5: 30_000_000,
  6: 2_000_000_000,
});
const LottoWinningPriceChar = Object.freeze({
  3: '5,000',
  4: '50,000',
  5: '1,500,000',
  5.5: '30,000,000',
  6: '2,000,000,000',
});

class App {
  constructor() {
    this.lottoBuyPrice = null;
    this.lottoCount = null;
    this.myLottos = null;
    this.lottoAnswerNumbers = null;
    this.lottoBonusNumber = null;
    this.lottoWinningResult = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
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
      '구입금액을 입력해 주세요.\n',
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
      '당첨 번호를 입력해 주세요.\n',
      validateLottoAnswerNumbers,
    );
    Console.print('');

    this.lottoAnswerNumbers = lottoAnswerNumbers.split(',').map(Number);
  }

  async getLottoBonusNumber() {
    const lottoBonusNumber = await prompt(
      '보너스 번호를 입력해 주세요.\n',
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
        this.lottoWinningResult['5.5'] += 1;
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
    Console.print('당첨 통계');
    Console.print('---');
    this.printLottoWinningCount();
    this.printRateOfReturn();
  }

  printLottoWinningCount() {
    const keys = ['3', '4', '5', '5.5', '6'];
    keys.forEach((key) => {
      if (key === '5.5') {
        Console.print(
          `5개 일치, 보너스 볼 일치 (${LottoWinningPriceChar[key]}원) - ${this.lottoWinningResult[key]}개`,
        );
        return;
      }
      Console.print(
        `${key}개 일치 (${LottoWinningPriceChar[key]}원) - ${this.lottoWinningResult[key]}개`,
      );
    });
  }

  printRateOfReturn() {
    Console.print(
      `총 수익률은 ${((this.winningMoney / this.lottoBuyPrice) * 100).toFixed(1)}%입니다.`,
    );
  }
}

export default App;
