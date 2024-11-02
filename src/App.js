import Input from "../src/Input.js";

class App {
  async run() {
    const money = await Input.getMoney();
  }
}

export default App;
