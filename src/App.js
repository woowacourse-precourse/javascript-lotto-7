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
    const money = await this.inputMoney();
    const lottoCount = this.calculateLottoCount(money);
    const lottos = this.getLotto(lottoCount);
    this.printLottos(lottos);
    const lottoNumber = await this.inputLottoNumber();
    const bonusNumber = await this.inputBonusNumber(lottoNumber);
    const winningNumber = { lottoNumber, bonusNumber };
    const winning = this.compareLotto(winningNumber, lottos);
    this.calculateStatistics(winning, money);
  }

  calculateStatistics(winning, money) {
    const amount = {
      3: 5000,
      4: 50000,
      5: 1500000,
      6: 2000000000,
      7: 30000000,
    };
    let totalAmount = 0;
    const matchCount = Object.keys(winning);
    matchCount.forEach(count => {
      if (winning[count] > 0) {
        totalAmount += amount[count] * winning[count];
      }
    });
    const rate = ((totalAmount / money) * 100).toFixed(1);
    this.printStatistics(winning, rate);
  }

  printStatistics(winning, rate) {
    Console.print('\n당첨 통계');
    Console.print('---');
    Console.print(`3개 일치 (5,000원) - ${winning['3']}개`);
    Console.print(`4개 일치 (50,000원) - ${winning['4']}개`);
    Console.print(`5개 일치 (1,500,000원) - ${winning['5']}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winning['7']}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${winning['6']}개`);
    Console.print(`총 수익률은 ${rate}%입니다.`);
  }

  compareLotto(winningNumber, lottos) {
    const matchCount = lottos.map(lotto => {
      const match = lotto.filter(number =>
        winningNumber.lottoNumber.includes(number),
      ).length;
      if (match === 5 && lotto.includes(winningNumber.bonusNumber)) {
        return 7;
      }
      return match;
    });
    return this.calculateWinning(matchCount);
  }

  calculateWinning(matchCount) {
    const winning = { 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 };
    matchCount.forEach(count => {
      if (count in winning) {
        winning[count] += 1;
      }
    });
    return winning;
  }

  async inputBonusNumber(lottoNumber) {
    return this.input('보너스 번호를 입력해 주세요.', input =>
      this.parseBonusNumber(input, lottoNumber),
    );
  }

  parseBonusNumber(bonusNumberInput, lottoNumber) {
    this.validateBonusNumber(bonusNumberInput, lottoNumber);
    const bonusNumber = Number(bonusNumberInput);
    return bonusNumber;
  }

  validateBonusNumber(bonusNumberInput, lottoNumber) {
    const bonusNumber = Number(bonusNumberInput);
    if (bonusNumberInput === '' || Number.isNaN(bonusNumber)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.NUMBER_INPUT_ERROR}`);
    }
    if (bonusNumber > 45 || bonusNumber < 1) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.BONUS_NUMBER_RANGE_ERROR}`);
    }
    if (lottoNumber.findIndex(number => number === bonusNumber) !== -1) {
      throw Error(
        `[ERROR] ${App.ERROR_MESSAGE.BONUS_NUMBER_DUPLICATION_ERROR}`,
      );
    }
    if (!Number.isInteger(bonusNumber)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.NUMBER_NOT_INTEGER_ERROR}`);
    }
  }

  async inputLottoNumber() {
    return this.input('당첨 번호를 입력해 주세요.', input =>
      this.parseLottos(input),
    );
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
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.LOTTO_NUMBER_INPUT_ERROR}`);
    }
    if (lottoNumber.length !== 6) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.LOTTO_NUMBER_COUNT_ERROR}`);
    }
    if (lottoNumber.some(number => number < 1 || number > 45)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.LOTTO_NUMBER_RANGE_ERROR}`);
    }
    if (this.hasDuplicateNumber(lottoNumber)) {
      throw Error(
        `[ERROR] ${App.ERROR_MESSAGE.LOTTO_NUMBER_DUPLICATION_ERROR}`,
      );
    }
    if (lottoNumber.some(number => !Number.isInteger(number))) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.NUMBER_NOT_INTEGER_ERROR}`);
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
    lottos.forEach(lotto => Console.print(`[${lotto.join(', ')}]`));
    Console.print('');
  }

  getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  inputMoney() {
    return this.input('구입금액을 입력해 주세요.', input =>
      this.parseMoney(input),
    );
  }

  parseMoney(moneyInput) {
    this.validateMoney(moneyInput);
    return Number(moneyInput);
  }

  validateMoney(moneyInput) {
    const money = Number(moneyInput);
    if (moneyInput === '' || Number.isNaN(money)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.NUMBER_INPUT_ERROR}`);
    }
    if (money < 0) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.MONEY_INPUT_MINIMUM_ERROR}`);
    }
    if (money % 1000 !== 0) {
      throw Error(
        `[ERROR] ${App.ERROR_MESSAGE.MONEY_INPUT_DIVISIBILITY_ERROR}`,
      );
    }
  }

  calculateLottoCount(money) {
    return money / 1000;
  }

  async input(msg, parseFunction) {
    while (true) {
      try {
        const input = await Console.readLineAsync(`${msg}\n`);
        return parseFunction(input);
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
