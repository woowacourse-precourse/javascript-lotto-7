import { LottoBuyer, LottoCompany } from './objects/index.js';

class App {
  #lottoBuyer;
  #lottoCompany;

  constructor() {
    this.#lottoBuyer = new LottoBuyer();
    this.#lottoCompany = new LottoCompany();
  }

  async run() {
    await this.#lottoBuyer.purchaseLottos();

    await this.#lottoCompany.draw();

    this.#lottoBuyer.checkWinningLotto(this.#lottoCompany);

    this.#lottoBuyer.calculateReturn();
  }
}

export default App;
