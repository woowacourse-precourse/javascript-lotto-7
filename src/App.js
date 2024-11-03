import { Console } from "@woowacourse/mission-utils";
import LottoGame from "./Controller/LottoGameController";
import CreateModel from "./Model/CreateModel";
import Input from "./View/InputView";
import Output from "./View/OutputView";
import MyLotto from "./Model/MyLotto";
import Result from "./model/Result";

class App {
  async play() {
    const createModel = new CreateModel();
    const input = new Input();
    const output = new Output();
    const myLotto = new MyLotto(output);
    const result = new Result();
    const lottoGame = new LottoGame(createModel, input, output.myLotto, result);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
