import { Random } from '@woowacourse/mission-utils';

export default class LotteryFactory {
  #factorySettings;

  #Lotto;

  constructor(Lotto, factorySettings) {
    this.#Lotto = Lotto;
    this.#factorySettings = factorySettings;
  }

  #createLotto() {
    const { minimumRangeValue, maximumRangeValue, pickingNumber } =
      this.#factorySettings.randomRangeValue;
    const numbers = Random.pickUniqueNumbersInRange(
      minimumRangeValue,
      maximumRangeValue,
      pickingNumber,
    );
    return new this.#Lotto(numbers.sort((a, b) => a - b));
  }

  createLotteries(lotteryNotes) {
    return Array.from({ length: lotteryNotes }, () => this.#createLotto());
  }
}
