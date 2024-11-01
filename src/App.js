import InputHandler from "./inputHandler.js";
import OutputHandler from "./outputHandler.js";

class App {
  async run() {
    const cost = await InputHandler.getCost();
    InputHandler.validateCost(cost);

    OutputHandler.print(cost);
  }
}

export default App;
