import Input from "./Input.js";

class App {
  async run() {
    const userInput = new Input();
    await userInput.getPurchaseAmount();
    await userInput.getLottoNumber();
  }
}

export default App;
