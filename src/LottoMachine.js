import { MissionUtils } from "@woowacourse/mission-utils"
import { isInteger } from "./validator.js"
import Lotto from "./Lotto.js"

const ASK_PAYMENT_MESSAGE = '구입금액을 입력해 주세요.\n'
const ASK_WINNING_NUMBERS_MESSAGE = '\n당첨 번호를 입력해 주세요.\n'
const ASK_BOUNS_NUMBER_MESSAGE = '\n보너스 번호를 입력해 주세요.\n'

const PRICE = 1000;

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
    if (input < PRICE) throw Error(`[ERROR] ${PRICE}원 이상의 금액을 입력해주세요.`);
    if ((input % PRICE) !== 0) throw Error(`[ERROR] 구매 금액은 ${PRICE}원 단위로 입력해주세요.`);
  },

  // 당첨 번호 입력
  async askWinningNumbers() {
    try {
      const input = await MissionUtils.Console.readLineAsync(ASK_WINNING_NUMBERS_MESSAGE);
      const winningNumbers = input.split(',').map((element) => {
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
      Lotto.isValidNumber(input);
      if (this.winningNumbers.numbers.includes(Number(input))) throw Error('[ERROR] 보너스 번호가 중복됨')
      this.bonusNumber = Number(input);

    } catch (err) {
      MissionUtils.Console.print(err.message);
      return await LottoMachine.askBonusNumber();
    }
  },

  // 로또 번호 발행
  getLottoNumber() {
    const lottoList = []
    for (let i = 0; i < this.quantity; i++) {
      lottoList.push(new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)));
      lottoList[i].numbers.sort(LottoMachine.asc);
      LottoMachine.printList(lottoList[i]);
    }
    this.lottoList = lottoList;
  },

  // 로또 번호 정렬
  asc(a, b) { return a - b; },

  // 로또 번호 출력
  printList(list) {
    MissionUtils.Console.print(`[${list.numbers.join(', ')}]`);
  },

  // 당첨 내역 확인
  countScore(score = this.score, len, bonus) {
    if (len === 6) return score.SIX_MATCHES += 1;
    if (len === 5 && bonus) return score.FIVE_BONUS_MATCHES += 1;
    if (len === 5) return score.FIVE_MATCHES += 1;
    if (len === 4) return score.FOUR_MATCHES += 1;
    if (len === 3) return score.THREE_MATCHES += 1;
  },

  // 당첨 내역 및 수익률 집계
  getResult() {
    for (let i = 0; i < this.lottoList.length; i++) {
      const result = this.lottoList[i].numbers.filter(list => this.winningNumbers.numbers.includes(list))
      const isBonus = this.lottoList[i].numbers.some((element) => {
        return element == this.bonusNumber;
      });
      this.countScore(this.score, result.length, isBonus);
    }
    this.printScore();
  },

  // 당첨 내역 및 수익률 출력
  printScore(score = this.score) {
    const profit = Math.round(((5000 * score.THREE_MATCHES) + (50000 * score.FOUR_MATCHES)
      + (1500000 * score.FIVE_MATCHES) + (30000000 * score.FIVE_BONUS_MATCHES)
      + (2000000000 * score.SIX_MATCHES)) / (this.quantity * PRICE) * 100 * 10) / 10;
    const str = `
당첨 통계
---
3개 일치 (5,000원) - ${score.THREE_MATCHES}개
4개 일치 (50,000원) - ${score.FOUR_MATCHES}개
5개 일치 (1,500,000원) - ${score.FIVE_MATCHES}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${score.FIVE_BONUS_MATCHES}개
6개 일치 (2,000,000,000원) - ${score.SIX_MATCHES}개
총 수익률은 ${profit}%입니다.`
    MissionUtils.Console.print(str)
  },

}

export default LottoMachine;
