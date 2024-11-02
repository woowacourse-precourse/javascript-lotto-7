import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoMachine {
  #amount;

  #lottos;

  #winningNumbers;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
  }

  get amount() {
    return this.#amount;
  }

  get lottos() {
    return this.#lottos;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  async start() {
    await this.#inputPurchaseAmount();
    await this.#inputWinningNumbers();
  }

  async #inputPurchaseAmount() {
    const amount =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.');
    if (amount % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입금액은 1000 원 단위로 입력해야 합니다.',
      );
    }
    this.#amount = amount;
    this.#generateLottos();
  }

  #generateLottos() {
    const lottoCnt = this.#amount / 1000;
    for (let i = 0; i < lottoCnt; i += 1) {
      this.#lottos.push(
        new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)),
      );
    }
    this.#printLottos();
  }

  #printLottos() {
    MissionUtils.Console.print(`${this.#lottos.length}개를 구매했습니다.`);
    for (let i = 0; i < this.#lottos.length; i += 1) {
      const lottoStr = this.#lottos[i].numbers
        .sort((a, b) => a - b)
        .toString()
        .replaceAll(',', ', ');
      MissionUtils.Console.print(`[${lottoStr}]`);
    }
  }

  static #validateFormat(numbers) {
    if (!/^[0-9,]+$/.test(numbers)) {
      throw new Error('[ERROR] 숫자 또는 , 이외의 문자는 허용되지 않습니다.');
    }
  }

  static #validateNoDuplicates(numbers) {
    const TOTAL_LOTTO_CNT = 45;
    const checked = Array(TOTAL_LOTTO_CNT + 1).fill(false);
    for (let i = 0; i < numbers.length; i += 1) {
      const num = Number(numbers[i]);
      if (checked[num]) {
        throw new Error('[ERROR] 중복 숫자는 허용되지 않습니다.');
      }
      checked[num] = true;
    }
  }

  static #validateRange(numbers) {
    const TOTAL_LOTTO_CNT = 45;
    for (let i = 0; i < numbers.length; i += 1) {
      const num = Number(numbers[i]);
      if (num <= 0 || num > TOTAL_LOTTO_CNT) {
        throw new Error('[ERROR] 숫자의 범위는 1~45 입니다.');
      }
    }
  }

  async #inputWinningNumbers() {
    const input =
      await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.');
    const inputNumbersArr = input.split(',').map((el) => Number(el));
    LottoMachine.#validateFormat(input);
    LottoMachine.#validateNoDuplicates(inputNumbersArr);
    LottoMachine.#validateRange(inputNumbersArr);
    this.#winningNumbers = inputNumbersArr;
  }

  InputPurchaseAmountTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputPurchaseAmount();
  }

  InputWinningNumbersTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputWinningNumbers();
  }
}

export default LottoMachine;
