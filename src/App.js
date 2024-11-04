import UserInput from "./UserInput.js";

class App {
  async run() {
    const userInput = new UserInput();
    const input = await userInput.inputPrice();
  }
}

export default App;
