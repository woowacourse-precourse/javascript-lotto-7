import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import rank from './rankInfo.js';

class LottoMachine {
  #amount;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #resultRankMap;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
    this.#winningNumbers = 0;
    this.#bonusNumber = 0;
  }

  initialMap() {
    this.#resultRankMap = new Map();
    for (let i = 1; i <= 5; i += 1) {
      this.#resultRankMap.set(i, 0);
    }
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

  get bonusNumber() {
    return this.#bonusNumber;
  }

  get rankResultMap() {
    return this.#resultRankMap;
  }

  async start() {
    await this.#inputPurchaseAmount();
    await this.#inputWinningNumbers();
    await this.#inputBonusNumber();
    this.#rankLottoResult();
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

  async #inputBonusNumber() {
    const input =
      await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.');
    const bonusArr = [...this.#winningNumbers, Number(input)];
    LottoMachine.#validateNoDuplicates(bonusArr);
    this.#bonusNumber = Number(input);
  }

  #rankLottoResult() {
    this.initialMap();
    const lottos = this.#lottos;
    for (let i = 0; i < lottos.length; i += 1) {
      const lotto = lottos[i];
      const matchCnt = this.#countMatchNumber(lotto);
      this.#updateResultMap(
        matchCnt,
        lotto.numbers.includes(this.#bonusNumber),
      );
    }
  }

  #updateResultMap(matchCnt, isBonusNumberMatch) {
    const resultMap = this.#resultRankMap;
    let resultRank = rank[matchCnt];
    if (matchCnt === 5 && isBonusNumberMatch) {
      resultRank = 2;
    }
    resultMap.set(resultRank, resultMap.get(resultRank) + 1);
  }

  #countMatchNumber(lotto) {
    const lottoNumbers = lotto.numbers;
    let cnt = 0;
    for (let i = 0; i < lottoNumbers.length; i += 1) {
      if (this.#winningNumbers.includes(lottoNumbers[i])) {
        cnt += 1;
      }
    }
    return cnt;
  }

  inputPurchaseAmountTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputPurchaseAmount();
  }

  inputWinningNumbersTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputWinningNumbers();
  }

  inputBonusNumberTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputBonusNumber();
  }

  setLottosTestMethod(lottos) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    this.#lottos = lottos;
  }

  rankLottoResultTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#rankLottoResult();
  }
}

export default LottoMachine;
