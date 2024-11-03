import LottoGame from './models/LottoGame.js';
import LottoMachine from './models/LottoMachine.js';
import LottoWinningNumbers from './models/LottoWinningNumbers.js';

class App {
  async run() {
    const lottoGame = new LottoGame(
      new LottoMachine(),
      new LottoWinningNumbers(),
    );
    lottoGame.play();
  }
}

export default App;
