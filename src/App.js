import { inputCash, inputWinningNumbers, inputBonusNumbers } from "./utils/inputView.js";

class App {
  async run() {
    const cash = await inputCash();
    const winningNumbers = await inputWinningNumbers();
    const BonusNumbers = await inputBonusNumbers();
  }
}

export default App;
