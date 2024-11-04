import LottoSystem from './LottoSystem';

class App {
  #lottoSystem;

  async run() {
    this.#lottoSystem = new LottoSystem();
    this.#lottoSystem.run();
  }
}

export default App;
