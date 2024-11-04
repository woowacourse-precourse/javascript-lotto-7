import { validatePurchaseAmount, validateUserWinningNumber, validateBonusNumber } from './errorHandling.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { inputMoney } from './inputMoney.js';
import { inputWinningNumber } from './inputWinningNumber.js';
import { inputBonusNumber } from './inputBonusNumber.js';

// 필드, 생성자, 메소드 순서대로 정의해야함

class Lotto {
  constructor() {
    this.purchaseAmount = 0;
    this.ticketCount = 0;
    this.lottoNumbers = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  // 구입 금액을 입력받아 초기화
  async initialize() {
    await this.inputAndValidatePurchaseAmount();
    this.ticketCount = this.#calculateTicketCount();
    this.printTicketCount();
    this.generateLottos();
    this.printLottos();

    await this.inputAndValidateWinningNumbers();
    await this.inputAndValidateBonusNumber();
  }

  // 1. 구입 금액을 입력받고 검증
  async inputAndValidatePurchaseAmount() {
    const amount = await inputMoney();
    try {
      validatePurchaseAmount(amount);
      this.purchaseAmount = Number(amount);
    } catch (error) {
      Console.print(error.message);
    }
  }

  // 2. 구입 금액으로 로또 개수 계산
  #calculateTicketCount() {
    return Math.floor(this.purchaseAmount / 1000);
  }

  // 3. 구매한 로또 개수를 출력
  printTicketCount() {
    Console.print(`\n${this.ticketCount}개를 구매했습니다.`);
  }

  // 4-1. 랜덤 함수를 활용하여 중복 없이 6자리씩 로또를 생성
  generateLottos() {
    this.lottoNumbers = Array.from({ length: this.ticketCount }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6)
    );
  }

  // 4-2. 구매 개수만큼 로또들을 출력
  printLottos() {
    this.lottoNumbers.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  // 5. 당첨 번호를 입력받고 검증
  async inputAndValidateWinningNumbers() {
    const winningNumberInput = await inputWinningNumber();
    try {
      validateUserWinningNumber(winningNumberInput);
      this.winningNumbers = winningNumberInput.split(',').map(Number);
    } catch (error) {
      Console.print(error.message);
    }
  }

  // 6. 보너스 번호를 입력받고 검증
  async inputAndValidateBonusNumber() {
    const bonusNumberInput = await inputBonusNumber();
    try {
      validateBonusNumber(bonusNumberInput, this.winningNumbers);
      this.bonusNumber = Number(bonusNumberInput);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default Lotto;
