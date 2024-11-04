import { Random } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

import { lottoInfo } from "./Static/const.js";

class Game {
  constructor() {}

  static buyLotto() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(numbers);
  }

  static getResult(lottos, winningLotto, bonusNumber) {
    const result = new Map(
      Object.keys(lottoInfo)
        .reverse()
        .map((rank) => [rank, 0])
    );

    for (const lotto of lottos) {
      const rank = Game.#evaluateRank(lotto, winningLotto, bonusNumber);

      if (rank) {
        result.set(rank, result.get(rank) + 1);
      }
    }

    return result;
  }

  static #evaluateRank(lotto, winningLotto, bonusNumber) {
    const lottoNumbers = lotto.getNumbers();

    const matchList = lottoNumbers.filter((number) =>
      winningLotto.getNumbers().includes(number)
    );

    const hasBonus =
      matchList.length === 5 && lottoNumbers.includes(bonusNumber);

    return Game.#getRank(matchList.length, hasBonus);
  }

  static #getRank(matchCount, hasBonus) {
    return Object.entries(lottoInfo).find(
      ([_, info]) => info.match === matchCount && info.hasBonusBall === hasBonus
    )?.[0];
  }
}

export default Game;
