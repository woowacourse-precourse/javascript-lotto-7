import { purchase } from "./Purchase.js";

class App {
  async run() {
    purchase(1000, 10000);
  }
}

export default App;
