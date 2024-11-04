import UserInput from "./UserInput.js";

class App {
  #userInput;

  constructor() {
    this.#userInput = new UserInput();
  }

  async run() {
    const amount = await this.#userInput.getUserInput("purchaseAmount");
    const numbers = await this.#userInput.getUserInput("winningNumber");
    const bonus = await this.#userInput.getUserInput("bonusNumber");
  }
}

export default App;
