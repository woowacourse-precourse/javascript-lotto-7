import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  static ERROR_MESSAGE = {
    NUMBER_INPUT_ERROR: '올바른 숫자를 입력해주세요!',
    NUMBER_NOT_INTEGER_ERROR: '숫자는 정수만 올 수 있습니다!',
    MONEY_INPUT_MINIMUM_ERROR: '0이상의 숫자를 입력해주세요!',
    MONEY_INPUT_DIVISIBILITY_ERROR:
      '1000으로 나누어 떨어지는 숫자를 입력해주세요!',
    LOTTO_NUMBER_INPUT_ERROR: '쉼표(,)로 구분되는 올바른 숫자를 입력해주세요!',
    LOTTO_NUMBER_COUNT_ERROR: '쉼표(,)로 구분되는 6개의 숫자를 입력해주세요!',
    LOTTO_NUMBER_RANGE_ERROR:
      '쉼표(,)로 구분되는 1~45사이의 숫자를 입력해주세요!',
    LOTTO_NUMBER_DUPLICATION_ERROR: '로또 번호는 중복될 수 없습니다!',
    BONUS_NUMBER_RANGE_ERROR: '1~45사이의 숫자를 입력해주세요!',
    BONUS_NUMBER_DUPLICATION_ERROR:
      '보너스 번호는 로또 번호와 중복될 수 없습니다!',
  };

  async run() {
    const lottoCount = await this.inputMoney();
    const lottos = this.getLotto(lottoCount);
    this.printLottos(lottos);
    const lottoNumber = await this.inputLottoNumber();
    const bonusNumber = await this.inputBonusNumber(lottoNumber);
  }

  async inputBonusNumber(lottoNumber) {
    const bonusNumberInput = await this.input('보너스 번호를 입력해 주세요.');
    return this.parseBonusNumber(bonusNumberInput, lottoNumber);
  }

  parseBonusNumber(bonusNumberInput, lottoNumber) {
    this.validateBonusNumber(bonusNumberInput, lottoNumber);
    const bonusNumber = Number(bonusNumberInput);
    return bonusNumber;
  }

  validateBonusNumber(bonusNumberInput, lottoNumber) {
    const bonusNumber = Number(bonusNumberInput);
    if (bonusNumberInput === '' || Number.isNaN(bonusNumber)) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.NUMBER_INPUT_ERROR}`);
    }
    if (bonusNumber > 45 || bonusNumber < 1) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR}`);
    }
    if (lottoNumber.findIndex(number => number === bonusNumber) !== -1) {
      throw Error(
        `[Error] ${App.ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR}`,
      );
    }
    if (!Number.isInteger(bonusNumber)) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.NUMBER_NOT_INTEGER_ERROR}`);
    }
  }

  async inputLottoNumber() {
    const lottoNumberInput = await this.input('당첨 번호를 입력해 주세요.');
    return this.parseLottos(lottoNumberInput);
  }

  parseLottos(lottoNumberInput) {
    const lottoNumber = lottoNumberInput
      .split(',')
      .map(number => Number(number));
    this.validateLotto(lottoNumber);
    return lottoNumber;
  }

  validateLotto(lottoNumber) {
    if (lottoNumber.some(number => Number.isNaN(number))) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.LOTTO_NUMBER_INPUT_ERROR}`);
    }
    if (lottoNumber.length !== 6) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.LOTTO_NUMBER_COUNT_ERROR}`);
    }
    if (lottoNumber.some(number => number < 1 || number > 45)) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR}`);
    }
    if (this.hasDuplicateNumber(lottoNumber)) {
      throw Error(
        `[Error] ${App.ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATION_ERROR}`,
      );
    }
    if (lottoNumber.some(number => !Number.isInteger(number))) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.NUMBER_NOT_INTEGER_ERROR}`);
    }
  }

  hasDuplicateNumber(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size !== numbers.length;
  }

  getLotto(lottoCount) {
    const lottos = [];
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i += 1) {
      lottos.push(this.getRandomLottoNumber());
    }
    this.sortLotto(lottos);
    return lottos;
  }

  sortLotto(lottos) {
    lottos.forEach(lotto => lotto.sort((a, b) => a - b));
    return lottos;
  }

  printLottos(lottos) {
    lottos.forEach(lotto => Console.print(lotto));
    Console.print('');
  }

  getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async inputMoney() {
    const moneyInput = await this.input('구입금액을 입력해 주세요.');
    return this.parseMoney(moneyInput);
  }

  parseMoney(moneyInput) {
    this.validateMoney(moneyInput);
    const money = Number(moneyInput);
    return this.calculateLottoCount(money);
  }

  validateMoney(moneyInput) {
    const money = Number(moneyInput);
    if (moneyInput === '' || Number.isNaN(money)) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.NUMBER_INPUT_ERROR}`);
    }
    if (money < 0) {
      throw Error(`[Error] ${App.ERROR_MESSAGE.MONEY_INPUT_MINIMUM_ERROR}`);
    }
    if (money % 1000 !== 0) {
      throw Error(
        `[Error] ${App.ERROR_MESSAGE.MONEY_INPUT_DIVISIBILITY_ERROR}`,
      );
    }
  }

  calculateLottoCount(money) {
    return money / 1000;
  }

  async input(msg) {
    const input = await Console.readLineAsync(`${msg}\n`);
    return input;
  }
}

export default App;
