import UserInput from "./UserInput.js";

class App {
  async run() {
    const userInput = new UserInput();
    const price = await userInput.inputPrice();
    const winNum = await userInput.inputWinningNumbers();
  }
}

export default App;
