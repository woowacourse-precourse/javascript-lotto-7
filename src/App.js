import Input from "./inputInfo.js";

class App {
  async run() {
    let price = new Input();
    price.inputPrice();
  }
}

export default App;
