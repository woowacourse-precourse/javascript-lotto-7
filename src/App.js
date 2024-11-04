import { Lotto } from './Lotto.js';

class App {
  async run() {
    const winningNumbers = Lotto.generateRandomNumbers();
    const bonusNumber = Lotto.generateBonusNumber(winningNumbers);

    console.log('당첨 번호:', winningNumbers);
    console.log('보너스 번호:', bonusNumber);
  }
}

export default App;
