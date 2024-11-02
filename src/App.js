import InputView from './InputView.js';

class App {
  #inputs;
  constructor() {
    this.#inputs = new InputView();
  }

  async run() {
    const money = await this.#inputs.processMoney();
  }
}

export default App;
