import { Random } from '@woowacourse/mission-utils';
import { MATCH_COUNT, PRIZE_AMOUNT, VALUES } from './constants/Values.js';
import Lotto from './Lotto.js';

class LottoStore {
  #lottos;

  #statistics;

  constructor(amount) {
    this.#lottos = [];
    this.#purchaseLottos(Number(amount));
    this.#statistics = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
  }

  #generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      VALUES.lottoMinNumber,
      VALUES.lottoMaxNumber,
      VALUES.lottoLength,
    ).sort((a, b) => a - b);
  }

  #purchaseOneLotto() {
    const lottoNumbers = this.#generateLottoNumbers();
    this.#lottos.push(new Lotto(lottoNumbers));
  }

  #purchaseLottos(amount) {
    const quantity = amount / VALUES.amountUnit;
    for (let i = 0; i < quantity; i += 1) {
      this.#purchaseOneLotto();
    }
  }

  getLottoNumbers() {
    return this.#lottos.map((lotto) => lotto.getNumber());
  }

  #draw(winningNumber, bonusNumber) {
    this.#lottos.forEach((lotto) => {
      const { matchCount, matchBonus } = lotto.draw(winningNumber, bonusNumber);
      const prize = MATCH_COUNT[matchCount];
      if (matchCount < VALUES.prizeLeastCount) return;
      if (matchCount === VALUES.matchBonusCount) {
        this.#statistics[prize[+matchBonus]] += 1;
        return;
      }
      this.#statistics[prize] += 1;
    });
  }

  getLottoResult(winningNumber, bonusNumber) {
    this.#draw(winningNumber, bonusNumber);
    return this.#statistics;
  }

  getEarningRate() {
    const amount = this.#lottos.length * VALUES.amountUnit;
    const earningAmount = Object.entries(this.#statistics).reduce((acc, [prize, quantity]) => {
      return acc + PRIZE_AMOUNT[prize] * quantity;
    }, 0);
    const earningRate = (Math.round((earningAmount / amount) * 1000) / 10).toLocaleString();
    const regex = /[.]/;
    if (!regex.test(earningRate)) return `${earningRate}.0`;
    return earningRate;
  }
}

export default LottoStore;
