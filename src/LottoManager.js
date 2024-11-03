import { Console, Random } from '@woowacourse/mission-utils';

class LottoManager {
  #winnigNumbersArray;

  #bonusNumber;

  #lottosCount;

  #lottosArray;

  #price;

  #matchedCountArray;

  #matchedCountPerMatchOption;

  constructor(winnigNumbersArray, bonusNumber, price) {
    this.#winnigNumbersArray = winnigNumbersArray;
    this.#bonusNumber = bonusNumber;
    this.#lottosCount = this.#getLottoCount(price);
    this.#lottosArray = this.#getLottosArray(this.#lottosCount);
    this.#price = price;
    this.#matchedCountArray = this.#getMatchedCountInLottos();
    this.#matchedCountPerMatchOption = this.#getMatchedCountPerMatchOption();
  }

  // TODO: 추가 기능 구현
  printResult() {
    const sortedLottosArray = this.#getSortedLottosArray();

    this.#print(`\n${this.#lottosCount}개를 구매했습니다.`);
    this.#printLottos(sortedLottosArray);

    this.#print('\n당첨 통계\n---');
    this.#printWinningResult();
    this.#printRateOfReturn();
  }

  #getMatchedCountInLottos() {
    const matchedCountArray = [];

    this.#lottosArray.forEach((lotto) => {
      const { totalMatchedCount, isBonusMatched } = this.#getMatchedCountInLotto(lotto);

      matchedCountArray.push({ totalMatchedCount, isBonusMatched });
    });

    return matchedCountArray;
  }

  #getMatchedCountInLotto(lotto) {
    const matchedCount = this.#getMatchedCount(lotto);
    const isBonusMatched = lotto.includes(this.#bonusNumber);
    const totalMatchedCount = this.#getTotalMatchedCount(matchedCount, isBonusMatched);

    return { totalMatchedCount, isBonusMatched };
  }

  #getMatchedCount(lotto) {
    return lotto.filter((number) => this.#winnigNumbersArray.includes(number)).length;
  }

  #getTotalMatchedCount(matchedCount, isBonusMatched) {
    if (isBonusMatched) {
      return matchedCount + 1;
    }

    return matchedCount;
  }

  #getMatchedCountPerMatchOption() {
    const matchOptions = [
      { count: 3, isBonus: false, prize: 5000 },
      { count: 4, isBonus: false, prize: 50_000 },
      { count: 5, isBonus: false, prize: 1_500_000 },
      { count: 5, isBonus: true, prize: 30_000_000 },
      { count: 6, isBonus: false, prize: 2_000_000_000 },
    ];

    const matchedCountPerMatchOption = [];

    matchOptions.forEach(({ count, isBonus, prize }) => {
      const matchedCount = this.#matchedCountArray.filter(
        ({ totalMatchedCount, isBonusMatched }) => totalMatchedCount === count && isBonusMatched === isBonus,
      ).length;

      matchedCountPerMatchOption.push({ count, matchedCount, isBonus, prize });
    });

    return matchedCountPerMatchOption;
  }

  #printWinningResult() {
    const matchResults = [];

    this.#matchedCountPerMatchOption.forEach(({ count, matchedCount, isBonus, prize }) => {
      const formatedPrice = this.#formatPrice(prize);
      if (isBonus) {
        matchResults.push(`${count}개 일치, 보너스 볼 일치 (${formatedPrice}) - ${matchedCount}개`);
        return;
      }

      matchResults.push(`${count}개 일치 (${formatedPrice}) - ${matchedCount}개`);
    });

    this.#print(matchResults.join('\n'));
  }

  #printRateOfReturn() {
    const totalPrize = this.#matchedCountPerMatchOption.reduce((acc, cur) => {
      const { matchedCount, prize } = cur;

      return acc + matchedCount * prize;
    }, 0);

    const rateOfReturnPercent = (totalPrize / this.#price) * 100;
    const rateOfReturn = rateOfReturnPercent.toFixed(1);

    this.#print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  #formatPrice(price) {
    return `${price.toLocaleString()}원`;
  }

  #print(message) {
    Console.print(message);
  }

  #printLottos() {
    this.#print(
      this.#lottosArray
        .map((lotto) => lotto.join(', '))
        .map((lotto) => `[${lotto}]`)
        .join('\n'),
    );
  }

  #getSortedLottosArray() {
    const sortedLottosArray = [];

    this.#lottosArray.forEach((lottos) => {
      const sorted = [...lottos].sort((a, b) => a - b);

      sortedLottosArray.push(sorted);
    });

    return sortedLottosArray;
  }

  #getLottoCount(price) {
    return Math.floor(price / 1000);
  }

  #getLottosArray(lottoCount) {
    const lottos = [];

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.#getUniqueRandomNumbersArray();
      lottos.push(lotto);
    }

    return lottos;
  }

  #getUniqueRandomNumbersArray() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

export default LottoManager;
