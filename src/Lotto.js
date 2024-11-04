import { Console, Random } from '@woowacourse/mission-utils';

import { validatePurchaseAmount } from './error/validatePurchaseAmount.js';
import { validateUserWinningNumber } from './error/validateUserWinningNumber.js';
import { validateBonusNumber } from './error/validateBonusNumber.js';

import { inputMoney } from './view/inputMoney.js';
import { inputWinningNumber } from './view/inputWinningNumber.js';
import { inputBonusNumber } from './view/inputBonusNumber.js';

// 필드, 생성자, 메소드 순서대로 정의해야함

class Lotto {
  constructor() {
    this.purchaseAmount = 0;
    this.ticketCount = 0;
    this.lottoNumbers = [];
    this.winningNumbers = [];
    this.bonusNumber = 0;
    this.winningStatistics = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
    this.profitRate = 0;
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
    this.calculateWinningStatistics();
    this.printWinningStatistics();
    this.calculateProfitRate();
    this.printProfitRate();
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

  // 7-1. 당첨 통계 계산
  calculateWinningStatistics() {
    this.lottoNumbers.forEach((lotto) => {
      const matchCount = lotto.filter((num) => this.winningNumbers.includes(num)).length;
      const hasBonus = lotto.includes(this.bonusNumber);

      if (matchCount === 6) {
        this.winningStatistics[6]++;
      } else if (matchCount === 5 && hasBonus) {
        this.winningStatistics[5.5]++; // 보너스 일치하는 경우
      } else if (matchCount === 5) {
        this.winningStatistics[5]++;
      } else if (matchCount === 4) {
        this.winningStatistics[4]++;
      } else if (matchCount === 3) {
        this.winningStatistics[3]++;
      }
    });
  }

  // 7-2. 당첨 통계 출력
  printWinningStatistics() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.winningStatistics[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.winningStatistics[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.winningStatistics[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.winningStatistics[5.5]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.winningStatistics[6]}개`);
  }

  // 8-1. 수익률 계산 함수
  calculateProfitRate() {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      5.5: 30000000,
      6: 2000000000,
    };

    let totalPrize = 0;
    for (const [match, count] of Object.entries(this.winningStatistics)) {
      const matchKey = parseFloat(match);
      totalPrize += count * prizeMoney[matchKey];
    }

    // 수익률 = 총 당첨금 / 구입 금액
    this.profitRate = (totalPrize / this.purchaseAmount).toFixed(1);
  }

  // 8-2. 수익률 출력 함수
  printProfitRate() {
    Console.print(`\n총 수익률은 ${this.profitRate}%입니다.`);
  }
}

export default Lotto;