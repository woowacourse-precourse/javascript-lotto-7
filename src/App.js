import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  constructor() {
    this.numbers = [];
  }

  async getPurchaseAmount() {
    const purchaseAmount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    if (!this.validatePurchaseAmount(purchaseAmount)) {
      return;
    }

    return parseInt(purchaseAmount);
  }

  validatePurchaseAmount(purchaseAmount) {
    if (isNaN(parseInt(purchaseAmount)) || purchaseAmount.trim() === '') {
      throw new Error('[ERROR] 구입 금액은 숫자로 입력해 주세요.');
    }

    if (parseInt(purchaseAmount) % 1000 !== 0) {
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
    const lottoNumbers = numbers.split(',').map((number) => parseInt(number));
    const lotto = new Lotto(lottoNumbers);
    const bonusNumber = await this.getBonusNumber(); // 보너스 번호 입력 받기
  }

  async getBonusNumber() {
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');

    if (
      isNaN(parseInt(bonusNumber)) ||
      bonusNumber.trim() === '' ||
      parseInt(bonusNumber) < 1 ||
      parseInt(bonusNumber) > 45
    ) {
      throw new Error('[ERROR] 1 ~ 45 사이의 숫자로 입력해 주세요.');
    }

    return parseInt(bonusNumber);
  }

  async run() {
    const purchaseAmount = await this.getPurchaseAmount();
    const amount = this.createLottoNumbers(purchaseAmount);
    const winningNumbers = await this.getWinningNumbers();
  }
}

export default App;
