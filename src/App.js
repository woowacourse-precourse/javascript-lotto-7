import LottoBuyer from './LottoBuyer.js';
import LottoShop from './LottoShop.js';

class App {
  #lottoBuyer;
  #lottoShop;

  constructor() {
    this.#lottoBuyer = new LottoBuyer();
    this.#lottoShop = new LottoShop();
  }

  async run() {
    await this.#lottoBuyer.purchaseLottos();

    await this.#lottoShop.draw();

    this.#lottoBuyer.checkWinningLotto(this.#lottoShop);

    this.#lottoBuyer.calculateReturn();
  }
}

export default App;
