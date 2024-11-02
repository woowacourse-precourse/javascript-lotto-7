import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async run() {
    const price = await this.getPrice();

    const lottoCount = this.getLottoCount(price);
    const issuedLottos = this.getIssuedLottos(lottoCount);
    this.printIssuedLottos(lottoCount, issuedLottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);

    Console.print('당첨 통계');
    Console.print('---');
    let lottoPrizeManager = {
      3: {
        count: 0,
        reward: 5000,
      },
      4: {
        count: 0,
        reward: 50000,
      },
      5: {
        count: 0,
        reward: 1500000,
      },
      '5 + bonus': {
        count: 0,
        reward: 30000000,
      },
      6: {
        count: 0,
        reward: 2000000000,
      },
    };

    this.countMatchingNumbers(
      lottoPrizeManager,
      issuedLottos,
      winningNumbers,
      bonusNumber
    );
    const roi = this.calculateROI(lottoPrizeManager, price);

    Console.print(`3개 일치 (5,000원) - ${lottoPrizeManager[3].count}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoPrizeManager[4].count}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoPrizeManager[5].count}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoPrizeManager['5 + bonus'].count}개`
    );
    Console.print(
      `6개 일치 (2,000,000,000원) - ${lottoPrizeManager[6].count}개`
    );

    Console.print(`총 수익률은 ${roi}%입니다.`);
  }

  async getPrice() {
    while (true) {
      try {
        const price = await this.inputPrice();
        this.checkPriceError(price);
        Console.print('');
        return price;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputPrice() {
    return parseInt(await Console.readLineAsync('구입금액을 입력해 주세요.\n'));
  }

  checkPriceError(price) {
    if (price % 1000 !== 0) {
      throw new Error(
        '[ERROR] 로또 구입 금액은 1000원 단위만 입력 가능합니다.'
      );
    }
  }

  getLottoCount(price) {
    return price / 1000;
  }

  getIssuedLottos(lottoCount) {
    let issuedLottos = [];
    for (let i = 0; i < lottoCount; i++) {
      issuedLottos.push(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
          (a, b) => a - b
        )
      );
    }
    return issuedLottos;
  }

  printIssuedLottos(lottoCount, issuedLottos) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
    for (let i = 0; i < lottoCount; i++) {
      Console.print(`[${issuedLottos[i].join(', ')}]`);
    }
    Console.print('');
  }

  async getWinningNumbers() {
    while (true) {
      try {
        const winningNumbers = await this.inputWinningNumbers();
        this.checkWinningNumbersError(winningNumbers);
        Console.print('');
        return winningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputWinningNumbers() {
    return (await Console.readLineAsync('당첨 번호를 입력해 주세요.\n'))
      .split(',')
      .map(Number);
  }

  checkWinningNumbersError(winningNumbers) {
    if (winningNumbers.some((number) => number < 1 || number > 45)) {
      throw new Error(
        '[ERROR] 로또 번호는 1-45 사이의 숫자로 이루어져야 합니다.'
      );
    }
  }

  async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const bonusNumber = await this.inputBonusNumber();
        this.checkBonusNumberError(bonusNumber, winningNumbers);
        Console.print('');
        return bonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async inputBonusNumber() {
    return parseInt(
      await Console.readLineAsync('보너스 번호를 입력해 주세요.\n')
    );
  }

  checkBonusNumberError(bonusNumber, winningNumbers) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(
        '[ERROR] 로또 번호는 1-45 사이의 숫자로 이루어져야 합니다.'
      );
    }
    if (winningNumbers.some((number) => number === bonusNumber)) {
      throw new Error(
        '[ERROR] 당첨 번호 6개와 보너스 번호는 중복이 불가능합니다.'
      );
    }
  }

  countMatchingNumbers(
    lottoPrizeManager,
    issuedLottos,
    winningNumbers,
    bonusNumber
  ) {
    for (let i = 0; i < issuedLottos.length; i++) {
      const compareNumbers = winningNumbers.filter((number) =>
        issuedLottos[i].includes(number)
      );
      const matchCount = compareNumbers.length;
      if (issuedLottos[i].includes(bonusNumber) && matchCount === 5) {
        ++lottoPrizeManager['5 + bonus'].count;
      } else if (matchCount > 2) {
        ++lottoPrizeManager[matchCount].count;
      }
    }
  }

  calculateROI(lottoPrizeManager, price) {
    let totalProfit = 0;
    for (let [key, value] of Object.entries(lottoPrizeManager)) {
      if (value !== 0) {
        totalProfit += value.reward * value.count;
      }
    }

    return ((totalProfit / price) * 100).toFixed(1);
  }
}

export default App;
