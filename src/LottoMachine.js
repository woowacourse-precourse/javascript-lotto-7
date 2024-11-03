import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { getEarningRate, printResult } from './Result.js';

class LottoMachine {
  #purchase = 0;
  #lottoCount = 0;
  #winningNumbers = [];
  #bonusNumber;
  #lottos = [];
  #resultCount = [0, 0, 0, 0, 0];
  #earningRate = 0;

  async play() {
    await this.setPurchase();                               // 구입 금액 입력
    this.setLottoCount();                                   // 로또 개수 구하기
    this.makeLotto();                                       // 로또 발행
    await this.setWinningNumbers();                         // 당첨 번호 입력
    await this.setBonusNumber();                            // 보너스 번호 입력

    for (let i = 0; i < this.#lottoCount; i++) {            // 당첨 확인
      this.checkMatch(this.#lottos[i], this.#resultCount);
    }

    this.#earningRate = getEarningRate(this.#resultCount, this.#purchase);
    printResult(this.#resultCount, this.#earningRate);      // 결과 출력
  }

  // 구입 금액 입력
  async setPurchase() {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.#validatePurchase(input);
    this.#purchase = input;
  }

  #validatePurchase(purchase) {
    if (isNaN(purchase)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    }
    if (purchase % 1000 !== 0) {
      throw new Error('[ERROR] 구입 금액은 1000으로 나누어 떨어져야 합니다.');
    }
  }

  setLottoCount() {
    this.#lottoCount = this.#purchase / 1000;
    Console.print(`\n${this.#lottoCount}개를 구매했습니다.`);
  }

  // 로또 발행
  makeLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      let numbers = this.getRandomNumber();
      numbers.sort((a, b) => a - b);

      const newLotto = new Lotto(numbers);
      newLotto.printNumbers();
      this.#lottos.push(newLotto.getNumbers());
    }
  }

  getRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  // 당첨 번호 입력
  async setWinningNumbers() {
    const input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const numbers = input.split(',').map(Number);
    this.#validateWinningNumbers(numbers);
    this.#winningNumbers = numbers;
  }

  #validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.filter((num) => isNaN(num)).length > 0) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
    if (numbers.filter((num) => num < 1 || num > 45).length > 0) {
      throw new Error('[ERROR] 로또 번호의 범위는 1~45까지입니다.');
    }
    if (numbers.filter((num, index) => numbers.indexOf(num) !== index).length > 0) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }

  async setBonusNumber() {
    let input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    this.#validateBonusNumber(input);
    input = parseInt(input);
    this.#bonusNumber = input;
  }

  #validateBonusNumber(bonus) {
    if (isNaN(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 숫자여야 합니다.');
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error('[ERROR] 보너스 번호의 범위는 1~45까지입니다.');
    }
    if (this.#winningNumbers.includes(bonus)) {
      throw new Error('[ERROR] 보너스 번호는 중복이 없어야 합니다.');
    }
  }

  checkMatch(myNumbers, resultCount) {
    // 일치 개수 구하기
    const matchCount = this.isMatch(myNumbers);
    // 보너스 일치하는지 구하기
    const bonusMatch = this.isBonus(myNumbers);

    if (matchCount == 6) {
      resultCount[0]++;
    } else if (matchCount == 5 && bonusMatch) {
      resultCount[1]++;
    } else if (matchCount == 5 && !bonusMatch) {
      resultCount[2]++;
    } else if (matchCount == 4) {
      resultCount[3]++;
    } else if (matchCount == 3) {
      resultCount[4]++;
    }
  }

  isMatch(myNumbers) {
    let matchCount = 0;
    for (let i = 0; i < 6; i++) {
      if (this.#winningNumbers.includes(myNumbers[i])) {
        matchCount++;
      }
    }
    return matchCount;
  }

  isBonus(myNumbers) {
    if (myNumbers.includes(this.#bonusNumber)) {
      return true;
    }
    return false;
  }
}

export default LottoMachine;
