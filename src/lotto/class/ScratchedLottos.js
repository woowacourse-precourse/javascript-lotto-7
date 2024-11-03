import { Random } from "@woowacourse/mission-utils";
import {
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  NUMBER_COUNT_BY_LOTTO,
} from "./lotto/constants.js";
import LottoIO from "./LottoIO.js";
import { isNumber } from "./utils.js";

class ScratchedLottos {
  #lottos;

  constructor(lottos) {
    ScratchedLottos.#validate(lottos);
    this.#lottos = lottos;
  }

  static create(lottosCount) {
    while (true) {
      try {
        return new ScratchedLottos(this.#scratch(lottosCount));
      } catch ({ message }) {
        LottoIO.print(message || "알 수 없는 에러");
      }
    }
  }

  get lottos() {
    return [...this.#lottos];
  }

  static #validate(lottoNumbers) {
    lottoNumbers.forEach((numbers) => {
      if (numbers.some((n) => !isNumber(n))) {
        LottoIO.throwError("구매한 로또의 모든 번호는 숫자입니다.");
      }
    });
  }

  static #scratch(count) {
    return Array.from({ length: count }, () =>
      Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        NUMBER_COUNT_BY_LOTTO
      ).sort((a, b) => a - b)
    );
  }

  print() {
    LottoIO.print("");
    LottoIO.print(`${this.lottos.length}개를 구매했습니다.`);

    this.lottos.forEach((lotto) => {
      LottoIO.print(JSON.stringify(lotto).replaceAll(",", ", "));
    });

    LottoIO.print("");
  }
}

export default ScratchedLottos;
