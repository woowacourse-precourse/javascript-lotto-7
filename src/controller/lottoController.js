import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_EACH_AMOUNT,
  WINNING_FIFTH_PRIZE,
  WINNING_FIRST_PRIZE,
  WINNING_FOURTH_PRIZE,
  WINNING_SECOND_PRIZE,
  WINNING_THIRD_PRIZE,
} from "../constants.js";
import Lotto from "../Lotto.js";

class LottoController {
  #Lottos;
  #lottoTotalNumber;
  #winningCountArr = [0, 0, 0, 0, 0];
  #winningPrizeArr = [
    WINNING_FIFTH_PRIZE,
    WINNING_FOURTH_PRIZE,
    WINNING_THIRD_PRIZE,
    WINNING_SECOND_PRIZE,
    WINNING_FIRST_PRIZE,
  ];

  constructor(lottoAmount) {
    this.#lottoTotalNumber = lottoAmount / LOTTO_EACH_AMOUNT;
    this.#Lottos = [];

    for (let i = 0; i < this.#lottoTotalNumber; i++) {
      const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      this.#Lottos.push(new Lotto(randomNumber));
    }
  }

  getLottoTotalNumber() {
    return this.#lottoTotalNumber;
  }

  getAllLottos() {
    return this.#Lottos;
  }

  calculateWinningLottos(winningLotto, bonusNumber) {
    this.#Lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const lottoMatchCount = lottoNumbers.filter((number) =>
        winningLotto.includes(number)
      );
      const bonusMatch = lottoNumbers.includes(bonusNumber);
    });
  }
}

export default LottoController;
