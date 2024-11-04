import { MissionUtils } from "@woowacourse/mission-utils"
import { isInteger } from "./validator.js"
import { MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT, PRICE } from "./constants/lottoRules.js"
import Lotto from "./Lotto.js"
import ERROR_MESSAGE from "./constants/errorMessages.js"

const ASK_PAYMENT_MESSAGE = '구입금액을 입력해 주세요.\n'
const ASK_WINNING_NUMBERS_MESSAGE = '\n당첨 번호를 입력해 주세요.\n'
const ASK_BOUNS_NUMBER_MESSAGE = '\n보너스 번호를 입력해 주세요.\n'

const LottoMachine = {
  score: {
    THREE_MATCHES: 0,
    FOUR_MATCHES: 0,
    FIVE_MATCHES: 0,
    FIVE_BONUS_MATCHES: 0,
    SIX_MATCHES: 0,
  },

  async askPayment() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_PAYMENT_MESSAGE);
      LottoMachine.isValidPayment(input);
      this.quantity = Number(input) / PRICE;
      MissionUtils.Console.print(`\n${this.quantity}개를 구매했습니다.`);

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await LottoMachine.askPayment();
    }
  },

  isValidPayment(input) {
    isInteger(input);
    if (input < PRICE) throw Error(ERROR_MESSAGE.PAYMENT_IS_UNDER_PRICE);
    if ((input % PRICE) !== 0) throw Error(ERROR_MESSAGE.PAYMENT_IS_NOT_PRICE_PER_UNIT);
  },

  // 당첨 번호 입력
  async askWinningNumbers() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_WINNING_NUMBERS_MESSAGE);
      const winningNumbers = input.split(',').map((element) => {
        isInteger(element);
        return Number(element);
      })
      this.winningNumbers = new Lotto(winningNumbers)

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await LottoMachine.askWinningNumbers();
    }
  },

  // 보너스 번호 입력
  async askBonusNumber() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_BOUNS_NUMBER_MESSAGE);
      isInteger(input);
      Lotto.isValidNumber(input);
      if (this.winningNumbers.numbers.includes(Number(input))) throw Error(ERROR_MESSAGE.NUMBERS_ARE_REPEATED)
      this.bonusNumber = Number(input);

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await LottoMachine.askBonusNumber();
    }
  },

  // 로또 번호 발행
  getLottoNumber() {
    this.lottoList = Array.from({ length: this.quantity }, () =>
      new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(MIN_NUMBER, MAX_NUMBER, NUMBER_COUNT))
    );
    this.sortLotto();
    this.printLotto();
  },

  // 로또 번호 정렬
  sortLotto() {
    this.lottoList.map(lotto =>
      lotto.numbers.sort((a, b) => a - b)
    );
  },

  // 로또 번호 출력
  printLotto() {
    this.lottoList.forEach(lotto =>
      MissionUtils.Console.print(`[${lotto.numbers.join(', ')}]`)
    );
  },

  // 당첨 내역 집계
  getResult() {
    this.lottoList.forEach((lotto) => {
      this.countScore(lotto);
    });
    this.countProfit();
    this.printScore();
  },

  // 당첨 내역 확인
  countScore(lotto) {
    // 당첨 번호와 일치하는 로또 번호의 개수
    const matches = lotto.numbers.filter(number =>
      this.winningNumbers.numbers.includes(number)
    ).length;

    // 보너스 번호가 당첨 번호에 포함되는지 여부
    const bonus = lotto.numbers.some((element) =>
      element == this.bonusNumber
    );
    if (matches === 6) return this.score.SIX_MATCHES += 1;
    if (matches === 5 && bonus) return this.score.FIVE_BONUS_MATCHES += 1;
    if (matches === 5) return this.score.FIVE_MATCHES += 1;
    if (matches === 4) return this.score.FOUR_MATCHES += 1;
    if (matches === 3) return this.score.THREE_MATCHES += 1;
  },

  // 수익률 계산
  countProfit() {
    const profit = Math.round(
      ((5000 * this.score.THREE_MATCHES) + (50000 * this.score.FOUR_MATCHES)
      + (1500000 * this.score.FIVE_MATCHES) + (30000000 * this.score.FIVE_BONUS_MATCHES)
      + (2000000000 * this.score.SIX_MATCHES)) // 총 수익
      / (this.quantity * PRICE) * 100 * 10) / 10;
    this.profit = profit;
  },

  // 당첨 내역 및 수익률 출력
  printScore(score = this.score) {
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

}

export default LottoMachine;
