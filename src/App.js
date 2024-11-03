import Input from "./input.js";

class App {
  async run() {
    const userInput = new Input();
    const inputMoney = await userInput.getMoney();
  }
}

export default App;
