import LottoGame from './models/LottoGame.js';
import LottoMachine from './models/LottoMachine.js';

class App {
  async run() {
    const lottoGame = new LottoGame(new LottoMachine());
    lottoGame.play();
  }
}

export default App;
