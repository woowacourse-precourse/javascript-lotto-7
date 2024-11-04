import ConsoleInput from "./presentation/ConsoleInput.js";
import ConsoleOutput from "./presentation/ConsoleOutput.js";
import LottoService from "./application/LottoService.js";

class App {
  #LottoService;

  constructor() {
    this.#LottoService = new LottoService(ConsoleInput, ConsoleOutput);
  }
  async run() {
    await this.#LottoService.play();
  }
}

export default App;
