import LottoGame from "./Controller/LottoGameController";
import CreateModel from "./Model/CreateModel";
import Input from "./View/InputView";
import Output from "./View/OutputView";
import MyLotto from "./Model/MyLotto";

class App {
  async play() {
    const createModel = new CreateModel();
    const input = new Input();
    const output = new Output();
    const myLotto = new MyLotto(output);
    const lottoGame = new LottoGame(createModel, input, output. myLotto);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
