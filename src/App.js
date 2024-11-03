import LottoGame from "./Controller/LottoGameController";
import CreateModel from "./Model/CreateModel";
import Input from "./View/InputView";
import Output from "./View/OutputView";

class App {
  async play() {
    const createModel = new CreateModel();
    const input = new Input();
    const output = new Output();
    const lottoGame = new LottoGame(createModel, input, output);
    await lottoGame.lottoGamePlay();
  }
}

export default App;
