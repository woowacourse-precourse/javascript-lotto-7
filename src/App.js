import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.numbers = [];
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (!this.validatePurchaseAmount(Number(purchaseAmount))) {
      return;
    }

    return purchaseAmount;
  }

  validatePurchaseAmount(purchaseAmount) {
    if (purchaseAmount % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액을 1,000원 단위로 입력해 주세요.');
    }

    return true;
  }

  createLottoNumbers(purchaseAmount) {
    // 발행할 로또 수 계산
    const amount = purchaseAmount / 1000;

    // 로또 수 만큼 랜덤 숫자 만들기
    for (let i = 0; i < amount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      this.numbers = [...this.numbers, numbers];
    }

    Console.print(`${amount}개를 구매했습니다.\n${this.numbers.map((number) => `[${number.join(', ')}]`).join('\n')}`);
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    const lottoNumbers = numbers.split(',').map((number) => Number(number));
    const lotto = new Lotto(lottoNumbers);
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const amount = this.createLottoNumbers(purchaseAmount);
    const winningNumbers = await this.getWinningNumbers();
  }
}

export default App;
