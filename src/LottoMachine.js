import { MissionUtils } from "@woowacourse/mission-utils"
import { isInteger } from "./validator.js"
import { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT, PRICE } from "./constants/lottoRules.js"
import Lotto from "./Lotto.js"
import ERROR_MESSAGE from "./constants/errorMessages.js"

const ASK_PAYMENT_MESSAGE = '\n구입금액을 입력해 주세요.\n'
const ASK_WINNING_NUMBERS_MESSAGE = '\n당첨 번호를 입력해 주세요.\n'
const ASK_BOUNS_NUMBER_MESSAGE = '\n보너스 번호를 입력해 주세요.\n'

const LottoMachine = Object.seal({
  quantity: 0,
  lottoList: [],
  winningNumbers: {},
  bonusNumber: 0,
  score: Object.seal({
    THREE_MATCHES: 0,
    FOUR_MATCHES: 0,
    FIVE_MATCHES: 0,
    FIVE_BONUS_MATCHES: 0,
    SIX_MATCHES: 0,
  }),
  profit: 0,

  async askPayment() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_PAYMENT_MESSAGE);
      this.isValidPayment(input);
      this.quantity = Number(input) / PRICE;

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await this.askPayment();
    }
  },

  isValidPayment(input) {
    isInteger(input);
    if (Number(input) < PRICE) throw Error(ERROR_MESSAGE.PAYMENT_IS_UNDER_PRICE);
    if ((Number(input) % PRICE) !== 0) throw Error(ERROR_MESSAGE.PAYMENT_IS_NOT_PRICE_PER_UNIT);
  },

  async askWinningNumbers() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_WINNING_NUMBERS_MESSAGE);
      this.winningNumbers = new Lotto(this.stringToNumbers(input))

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await this.askWinningNumbers();
    }
  },

  stringToNumbers(string) {
    return string.split(',').map((element) => {
      isInteger(element);
      return Number(element);
    })
  },

  async askBonusNumber() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_BOUNS_NUMBER_MESSAGE);
      this.isValidBonusNumber(input);
      this.bonusNumber = Number(input);

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await this.askBonusNumber();
    }
  },

  isValidBonusNumber(input) {
    isInteger(input);
    Lotto.isValidNumber(input);
    if (this.winningNumbers.getNumbers().includes(Number(input)))
      throw Error(ERROR_MESSAGE.NUMBERS_ARE_REPEATED)
  },

  getLottoNumber() {
    this.lottoList = Array.from({ length: this.quantity }, () =>
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT))
    );
    this.sortLotto();
    this.printLotto();
  },

  sortLotto() {
    this.lottoList.map(lotto =>
      lotto.getNumbers().sort((a, b) => a - b)
    );
  },

  printLotto() {
    MissionUtils.Console.print(`\n${this.quantity}개를 구매했습니다.`);
    this.lottoList.forEach(lotto =>
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  },

  getResult() {
    this.lottoList.forEach((lotto) => {
      this.countScore(lotto);
    });
    this.countProfit();
    this.printScoreProfit();
  },

  countScore(lotto) {
    // 당첨 번호와 일치하는 로또 번호의 개수
    const matches = lotto.getNumbers().filter(number =>
      this.winningNumbers.getNumbers().includes(number)
    ).length;

    // 보너스 번호가 당첨 번호에 포함되는지 여부
    const bonus = lotto.getNumbers().some((element) =>
      element == this.bonusNumber
    );
    if (matches === 6) return this.score.SIX_MATCHES += 1;
    if (matches === 5 && bonus) return this.score.FIVE_BONUS_MATCHES += 1;
    if (matches === 5) return this.score.FIVE_MATCHES += 1;
    if (matches === 4) return this.score.FOUR_MATCHES += 1;
    if (matches === 3) return this.score.THREE_MATCHES += 1;
  },

  countProfit() {
    const profit = Math.round(
      ((5000 * this.score.THREE_MATCHES) + (50000 * this.score.FOUR_MATCHES)
        + (1500000 * this.score.FIVE_MATCHES) + (30000000 * this.score.FIVE_BONUS_MATCHES)
        + (2000000000 * this.score.SIX_MATCHES)) // 총 수익
      / (this.quantity * PRICE) * 100 * 10) / 10;
    this.profit = profit;
  },

  printScoreProfit(score = this.score) {
    const str = `
당첨 통계
---
3개 일치 (5,000원) - ${score.THREE_MATCHES}개
4개 일치 (50,000원) - ${score.FOUR_MATCHES}개
5개 일치 (1,500,000원) - ${score.FIVE_MATCHES}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${score.FIVE_BONUS_MATCHES}개
6개 일치 (2,000,000,000원) - ${score.SIX_MATCHES}개
총 수익률은 ${this.profit}%입니다.`
    MissionUtils.Console.print(str)
  },

});

export default LottoMachine;
