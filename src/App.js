import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const priceString = await this.readPriceString();
    this.validatePriceString(priceString);
    const price = Number(priceString);

    const lottoCount = this.getLottoCount(price);
    const lottosArray = this.getLottosArray(lottoCount);
    const sortedLottosArray = this.getSortedLottosArray(lottosArray);

    this.print(`\n${lottoCount}개를 구매했습니다.`);
    this.printLottos(sortedLottosArray);

    const winningNumbersString = await this.readWinningNumbersString();
    const winnigNumbersArray = this.getWinningNumberArray(winningNumbersString);

    const bonusNumberString = await this.readBonusNumberString();
    const bounusNumber = Number(bonusNumberString);

    const matchedCountArray = this.getMatchedCountInLottos(sortedLottosArray, winnigNumbersArray, bounusNumber);
    const matchedCountPerMatchOption = this.getMatchedCountPerMatchOption(matchedCountArray);

    this.print('\n당첨 통계\n---');
    this.printWinningResult(matchedCountPerMatchOption);
    this.printRateOfReturn(matchedCountPerMatchOption, price);
  }

  readPriceString() {
    return Console.readLineAsync('구입금액을 입력해 주세요.\n');
  }

  readWinningNumbersString() {
    return Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
  }

  getWinningNumberArray(numbersString) {
    return numbersString.split(',').map(Number);
  }

  readBonusNumberString() {
    return Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  }

  getUniqueRandomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  getLottoCount(price) {
    return Math.floor(price / 1000);
  }

  getLottosArray(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.getUniqueRandomNumbersArray();
      lottos.push(lotto);
    }

    return lottos;
  }

  print(message) {
    Console.print(message);
  }

  printLottos(lottosArray) {
    this.print(
      lottosArray
        .map((lotto) => lotto.join(', '))
        .map((lotto) => `[${lotto}]`)
        .join('\n'),
    );
  }

  getSortedLottosArray(lottosArray) {
    const sortedLottosArray = [];

    lottosArray.forEach((lottos) => {
      const sorted = [...lottos].sort((a, b) => a - b);

      sortedLottosArray.push(sorted);
    });

    return sortedLottosArray;
  }

  getMatchedCountInLottos(lottosArray, winnigNumbersArray, bounusNumber) {
    const matchedCountArray = [];

    lottosArray.forEach((lotto) => {
      const { totalMatchedCount, isBonusMatched } = this.getMatchedCountInLotto(
        lotto,
        winnigNumbersArray,
        bounusNumber,
      );

      matchedCountArray.push({ totalMatchedCount, isBonusMatched });
    });

    return matchedCountArray;
  }

  getMatchedCountInLotto(lotto, winnigNumbersArray, bounusNumber) {
    const matchedCount = this.getMatchedCount(lotto, winnigNumbersArray);
    const isBonusMatched = lotto.includes(bounusNumber);
    const totalMatchedCount = this.getTotalMatchedCount(matchedCount, isBonusMatched);

    return { totalMatchedCount, isBonusMatched };
  }

  getMatchedCount(lotto, winnigNumbersArray) {
    return lotto.filter((number) => winnigNumbersArray.includes(number)).length;
  }

  getTotalMatchedCount(matchedCount, isBonusMatched) {
    if (isBonusMatched) {
      return matchedCount + 1;
    }

    return matchedCount;
  }

  getMatchedCountPerMatchOption(matchedCountArray) {
    const matchOptions = [
      { count: 3, isBonus: false, prize: 5000 },
      { count: 4, isBonus: false, prize: 50_000 },
      { count: 5, isBonus: false, prize: 1_500_000 },
      { count: 5, isBonus: true, prize: 30_000_000 },
      { count: 6, isBonus: false, prize: 2_000_000_000 },
    ];

    const matchedCountPerMatchOption = [];

    matchOptions.forEach(({ count, isBonus, prize }) => {
      const matchedCount = matchedCountArray.filter(
        ({ totalMatchedCount, isBonusMatched }) => totalMatchedCount === count && isBonusMatched === isBonus,
      ).length;

      matchedCountPerMatchOption.push({ count, matchedCount, isBonus, prize });
    });

    return matchedCountPerMatchOption;
  }

  printWinningResult(matchedCountPerMatchOption) {
    const matchResults = [];

    matchedCountPerMatchOption.forEach(({ count, matchedCount, isBonus, prize }) => {
      const formatedPrice = this.formatPrice(prize);
      if (isBonus) {
        matchResults.push(`${count}개 일치, 보너스 볼 일치 (${formatedPrice}) - ${matchedCount}개`);
        return;
      }

      matchResults.push(`${count}개 일치 (${formatedPrice}) - ${matchedCount}개`);
    });

    this.print(matchResults.join('\n'));
  }

  printRateOfReturn(matchedCountPerMatchOption, price) {
    const totalPrize = matchedCountPerMatchOption.reduce((acc, cur) => {
      const { matchedCount, prize } = cur;

      return acc + matchedCount * prize;
    }, 0);

    const rateOfReturn = Math.floor((totalPrize / price) * 100).toFixed(1);

    this.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  validatePriceString(priceString) {
    if (!Number(priceString)) {
      throw new Error('[ERROR] 구매 금액이 숫자가 아닙니다.');
    }
  }

  formatPrice(price) {
    return `${price.toLocaleString()}원`;
  }
}

export default App;
