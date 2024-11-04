import Lotto from "../../Lotto.js";
import generateLotto from "../utils/generateLotto.js";

class MyLotto extends Lotto {
  static create() {
    const myLotto = generateLotto();
    return new MyLotto(myLotto);
  }
}

export default MyLotto;
