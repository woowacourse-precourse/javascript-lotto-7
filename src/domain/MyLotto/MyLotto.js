import Lotto from "../../Lotto.js";
import generateLotto from "../utils/generateLotto.js";
import Matcher from "./Matcher.js";

class MyLotto extends Lotto {
  #matchResult;

  static create() {
    const myLotto = generateLotto();
    return new MyLotto(myLotto);
  }

  matchMyLotto(winningLotto) {
    this.#matchResult = new Matcher(this.numbers, winningLotto);
  }

  get matchResult() {
    return this.#matchResult;
  }
}

export default MyLotto;
