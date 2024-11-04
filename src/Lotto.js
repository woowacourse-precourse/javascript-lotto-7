import { validatePurchaseAmount } from './errorHandling.js';
import { Console, Random } from '@woowacourse/mission-utils';
import { inputMoney } from './inputMoney.js';

// 필드, 생성자, 메소드 순서대로 정의해야함

class Lotto {
  constructor() {
    this.purchaseAmount = 0;
    this.ticketCount = 0;
    this.lottoNumbers = []; // 구매한 로또 번호들을 저장할 배열
  }

  // 구입 금액을 입력받아 초기화하는 함수
  async initialize() {
    const amount = await inputMoney();
    this.purchaseAmount = this.#validatePurchaseAmount(amount);
    this.ticketCount = this.#calculateTicketCount();
    this.printTicketCount();
    this.generateLottos();
    this.printLottos();
  }

  // 구입 금액 검증 및 초기화
  #validatePurchaseAmount(amount) {
    validatePurchaseAmount(amount);
    return Number(amount);
  }

  // 구입 금액으로 로또 개수 계산
  #calculateTicketCount() {
    return Math.floor(this.purchaseAmount / 1000);
  }

  // (1) 랜덤 함수를 활용하여 중복 없이 6자리씩 로또를 생성
  generateLottos() {
    this.lottoNumbers = Array.from({ length: this.ticketCount }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6)
    );
  }

  // 구매한 로또 개수를 출력
  printTicketCount() {
    Console.print(`\n${this.ticketCount}개를 구매했습니다.`);
  }

  // (2) 구매 개수만큼 로또들을 출력
  printLottos() {
    this.lottoNumbers.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }
}

export default Lotto;