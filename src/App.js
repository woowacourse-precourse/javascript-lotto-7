import UserInput from "./UserInput.js";
import Lotto from "./Lotto.js";

class App {
  async run() {
    const userInput = new UserInput();
    const price = await userInput.inputPrice();
    const winNum = await userInput.inputWinningNumbers();
    const lotto = new Lotto(winNum);
  }
}

export default App;
