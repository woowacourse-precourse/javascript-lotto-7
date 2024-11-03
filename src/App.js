import Input from "./view/Input.js";

class App {
  async run() {
    const userInput = new Input();
    await userInput.getPurchaseAmount();
    await userInput.getLottoNumber();
    await userInput.getBonusNumber();
  }
}

export default App;
