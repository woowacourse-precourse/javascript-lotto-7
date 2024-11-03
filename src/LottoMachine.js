import { Console, Random } from '@woowacourse/mission-utils';
import { 
  THREE_MATCH_AMOUNT,
  FOUR_MATCH_AMOUNT,
  FIVE_MATCH_AMOUNT,
  BONUS_MATCH_AMOUNT,
  SIX_MATCH_AMOUNT,
} from './constant.js';
import Lotto from './Lotto.js';

class LottoMachine {
  #lottos = [];
  #winningNumber;
  #bonusNumber;
  #lottoResult = {};
  #paid;

  async run() {
    await this.makeInfiniteFunction(this.sellLotto.bind(this));
    this.makeLottos(this.#paid / 1000);
    this.printLottoCount();
    this.printSalesLottos();
    await this.makeInfiniteFunction(this.inputWinningNumber.bind(this));
    await this.makeInfiniteFunction(this.inputBonusNumber.bind(this));
    this.calculateLottoResult();
    this.printResult();
    this.printRateOfReturn();
  }

  async sellLotto() {
    const paid = await Console.readLineAsync('구매금액을 입력해 주세요.\n');
    this.validatePurchaseAmount(paid);
    this.#paid = Number(paid);
  }

  async inputWinningNumber() {
    const winningNumber = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    this.validateWinningNumber(winningNumber);
    this.#winningNumber = this.splitAndMapNumbers(winningNumber).sort((a, b) => a - b);
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
    this.validateBonusNumber(bonusNumber, this.#winningNumber);
    this.#bonusNumber = Number(bonusNumber);
  }

  makeLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  makeLottos(count) {
    for (let i = 0; i < count; i += 1) {
      this.#lottos.push(new Lotto(this.makeLottoNumbers()));
    }
  }

  printLottoCount() {
    Console.print(`${this.#lottos.length}개를 구매했습니다.`);
  }

  printSalesLottos() {
    this.#lottos.forEach((lotto) => 
      Console.print(`[${lotto.getNumbers().join(', ')}]`)
    );
  }

  printResult() {
    Console.print('당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (${THREE_MATCH_AMOUNT.toLocaleString()}원) - ${this.#lottoResult[3] ?? 0}개`);
    Console.print(`4개 일치 (${FOUR_MATCH_AMOUNT.toLocaleString()}원) - ${this.#lottoResult[4] ?? 0}개`);
    Console.print(`5개 일치 (${FIVE_MATCH_AMOUNT.toLocaleString()}원) - ${this.#lottoResult[5] ?? 0}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (${BONUS_MATCH_AMOUNT.toLocaleString()}원) - ${this.#lottoResult[7] ?? 0}개`);
    Console.print(`6개 일치 (${SIX_MATCH_AMOUNT.toLocaleString()}원) - ${this.#lottoResult[6] ?? 0}개`);
  }

  calculateLottoResult() {
    this.#lottos.forEach((lotto) => {
      const correctCount = lotto.getCorrectCount(this.#winningNumber, this.#bonusNumber);
      if (correctCount in this.#lottoResult) {
        this.#lottoResult[correctCount] += 1;
      } else {
        this.#lottoResult[correctCount] = 1;
      }
    });
  }

  calculateRateOfReturn() {
    const profit = Object.entries(this.#lottoResult).reduce((acc, [key, value]) => {
      switch (parseInt(key, 10)) {
        case 3:
          return acc + value * THREE_MATCH_AMOUNT;
        case 4:
          return acc + value * FOUR_MATCH_AMOUNT;
        case 5:
          return acc + value * FIVE_MATCH_AMOUNT;
        case 6:
          return acc + value * SIX_MATCH_AMOUNT;
        case 7:
          return acc + value * BONUS_MATCH_AMOUNT;
        default:
          return acc;
      }
    }, 0);
    return (profit / this.#paid) * 100;
  }

  printRateOfReturn() {
    const rateOfReturn = this.calculateRateOfReturn();
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  validatePurchaseAmount(amount) {
    if (Number.isNaN(Number(amount))) {
      throw new Error('[ERROR] 구매 금액은 숫자만 입력할 수 있습니다.');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 구매 금액은 천원 단위로 입력해 주세요.');
    }
    if (amount < 1000) {
      throw new Error('[ERROR] 최소 한 장 이상 구매해 주세요.');
    }
  }

  validateWinningNumber(winningNumber) {
    const numbers = this.splitAndMapNumbers(winningNumber);
    const uniqueNumbers = new Set(numbers);

    if (numbers.length !== uniqueNumbers.size) {
      throw new Error('[ERROR] 당첨번호는 중복되지 않아야 합니다.');
    }

    for (const number of numbers) {
      if (isNaN(number) || number < 1 || number > 45) {
        throw new Error('[ERROR] 당첨번호는 1과 45 사이의 숫자여야 합니다.');
      }
    }
  }

  validateBonusNumber(bonusNumber, lottoNumbers) {
    if (Number.isNaN(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 숫자는 숫자만 입력할 수 있습니다.');
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 보너스 숫자는 1과 45 사이의 숫자여야 합니다.');
    }
    if (lottoNumbers.includes(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 숫자는 로또 번호와 겹치지 않아야 합니다.');
    }
  }

  splitAndMapNumbers(input) {
    return input.split(',').map(Number);
  }

  async makeInfiniteFunction(func) {
    while (true) {
      try {
        await func();
        break;
      } catch (e) {
        Console.print(e.message);
      }  
    }
  }
}

export default LottoMachine;
