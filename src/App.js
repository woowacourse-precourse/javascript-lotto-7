import { InputHandler } from "./handler/InputHandler.js";
import { RepeatHandler } from "./handler/RepeatHandler.js";

class App {
  #inputHandler;
  #repeatHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#repeatHandler = new RepeatHandler();
  }

  async run() {
    const input = await this.#repeatHandler.repeatUntilSuccess(async () => await this.#inputHandler.readNumber());
    console.log(input);
  }
}

export default App;
