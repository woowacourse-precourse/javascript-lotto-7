import { Console } from "@woowacourse/mission-utils";
import LottoGame from "./controller/LottoGameController.js";
import CreateModel from "./model/CreateModel.js";
import Input from "./view/InputView.js";
import Output from "./view/OutputView.js";
import MyLotto from "./model/MyLotto.js";
import Result from "./model/Result.js";

class App {
  async play() {
    const createModel = new CreateModel();
    const input = new Input();
    const output = new Output();
    const myLotto = new MyLotto(output);
    const result = new Result();

    const lottoGame = new LottoGame(createModel, input, output, myLotto, result);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
