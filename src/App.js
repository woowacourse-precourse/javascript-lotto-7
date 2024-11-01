import InputHandler from "./inputHandler.js";

class App {
  async run() {
    const cost = await InputHandler.getCost();
    InputHandler.validateCost(cost);
  }
}

export default App;
