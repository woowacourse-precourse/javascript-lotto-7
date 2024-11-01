import Input from "./inputInfo.js";

class App {
  async run() {
    let price = new Input();
    await price.inputPrice();
  }
}

export default App;
