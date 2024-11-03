import { Console } from "@woowacourse/mission-utils";
import LottoGame from "./Controller/LottoGameController.js";
import CreateModel from "./Model/CreateModel.js";
import Input from "./View/InputView.js";
import Output from "./View/OutputView.js";
import MyLotto from "./Model/MyLotto.js";
import Result from "./Model/Result.js";

class App {
  async run() {
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
