import LottoSystem from './LottoSystem.js';

class App {
  #lottoSystem;

  async run() {
    this.#lottoSystem = new LottoSystem();
    await this.#lottoSystem.run();
  }
}

export default App;