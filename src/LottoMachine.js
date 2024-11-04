import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import RankedPrize from './RankedPrize.js';

class LottoMachine {
  #amount;

  #lottos;

  #winningNumbers;

  #bonusNumber;

  #resultRankMap;

  #yield;

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

  get yield() {
    return this.#yield;
  }

  async start() {
    await this.#inputPurchaseAmount();
    await this.#inputWinningNumbers();
    await this.#inputBonusNumber();
    this.#rankLottoResult();
    this.#calculateYieldRate();
    this.#printResult();
  }

  async #inputPurchaseAmount() {
    const amount =
      await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (!/^[0-9]+$/.test(amount)) {
      throw new Error('[ERROR] 로또 구입금액은 숫자만 입력할 수 있습니다.');
    }
    if (Number(amount) % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입금액은 1000 원 단위로 입력해야 합니다.',
      );
    }
    this.#amount = Number(amount);
    this.#generateLottos();
  }

  #generateLottos() {
    const lottoCnt = this.#amount / 1000;
    for (let i = 0; i < lottoCnt; i += 1) {
      const randomValue = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6,
      );
      this.#lottos.push(new Lotto(randomValue));
    }
    this.#printLottos();
  }

  #printLottos() {
    MissionUtils.Console.print(`\n${this.#lottos.length}개를 구매했습니다.`);
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
    const input = await MissionUtils.Console.readLineAsync(
      '\n당첨 번호를 입력해 주세요.\n',
    );
    const inputNumbersArr = input.split(',').map((el) => Number(el));
    LottoMachine.#validateFormat(input);
    LottoMachine.#validateNoDuplicates(inputNumbersArr);
    LottoMachine.#validateRange(inputNumbersArr);
    this.#winningNumbers = inputNumbersArr;
  }

  async #inputBonusNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      '\n보너스 번호를 입력해 주세요.\n',
    );
    const bonusArr = [...this.#winningNumbers, Number(input)];
    LottoMachine.#validateNoDuplicates(bonusArr);
    this.#bonusNumber = Number(input);
  }

  #rankLottoResult() {
    this.initialMap();
    const lottos = this.#lottos;
    const resultMap = this.#resultRankMap;
    for (let i = 0; i < lottos.length; i += 1) {
      const lotto = lottos[i];
      lotto.countMatchNumber(this.#winningNumbers, this.#bonusNumber);
      resultMap.set(lotto.rank, resultMap.get(lotto.rank) + 1);
    }
  }

  #calculateYieldRate() {
    let sum = 0;
    const lottos = this.#lottos;
    for (let i = 0; i < lottos.length; i += 1) {
      const lottoRank = lottos[i].rank;
      if (lottoRank !== undefined) {
        sum += RankedPrize[lottoRank];
      }
    }
    const percent = (sum / Number(this.#amount)) * 100;
    this.#yield = Math.round(percent * 10) / 10;
  }

  async inputPurchaseAmountTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputPurchaseAmount();
  }

  async inputWinningNumbersTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputWinningNumbers();
  }

  async inputBonusNumberTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#inputBonusNumber();
  }

  #printResult() {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    this.#printCalculateResult();
  }

  #printCalculateResult() {
    const MESSAGE_ARR = [
      '3개 일치 (5,000원) - ',
      '4개 일치 (50,000원) - ',
      '5개 일치 (1,500,000원) - ',
      '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
      '6개 일치 (2,000,000,000원) - ',
    ];
    for (let i = 5; i > 0; i -= 1) {
      MissionUtils.Console.print(
        `${MESSAGE_ARR[MESSAGE_ARR.length - i]}${this.#resultRankMap.get(i)}개`,
      );
    }
    MissionUtils.Console.print(`총 수익률은 ${this.#yield}%입니다.`);
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

  calculateYieldRateTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#calculateYieldRate();
  }

  setAmountTestMethod(amount) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    this.#amount = amount;
  }

  setResultRankMapTestMethod(map) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    this.#resultRankMap = map;
  }

  setYieldTestMethod(value) {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    this.#yield = value;
  }

  printResultTestMethod() {
    if (process.env.NODE_ENV !== 'test') {
      throw new Error('테스트코드에서만 접근가능');
    }
    return this.#printResult();
  }
}

export default LottoMachine;
