import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Utils from "../Utils.js";

class LottoGame {
  #lotto = [];

  async play() {
    await this.#createLotto();
  }

  async #createLotto() {
    const inputPrice = await InputView.readLinePrice();
    const getLottoCount = (number) => number / 1000;
    const lottoCount = getLottoCount(inputPrice);

    await this.#generateLotto(lottoCount);
    OutputView.printLotto(this.#lotto, lottoCount);

    const { trimLotto, parseLottoNumber } = await InputView.readLineNumber();
    const parseBonusNumber = await InputView.readLineBonusNumber();
  }

  async #generateLotto(lottoCount) {
    const lotto = Utils.range(lottoCount, []).map(() => {
     return this.#getRandomLottoNumber();
    });
    this.#lotto.push(lotto);
  }

  getLotto() {
    return this.#lotto;
  }

  #getRandomLottoNumber() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #getSortNumber(array) {
    return array.sort(a - b);
  }
}

export default LottoGame;
