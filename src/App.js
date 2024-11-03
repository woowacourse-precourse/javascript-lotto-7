import Input from "./Input.js";

class App {
  async run() {
    const userInput = new Input();
    await userInput.getPurchaseAmount();
  }
}

export default App;
