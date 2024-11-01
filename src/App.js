import LottoBuyer from './LottoBuyer.js';
import LottoCompany from './LottoCompany.js';
import LottoShop from './LottoShop.js';

class App {
  #lottoBuyer;
  #lottoShop;
  #lottoCompany;

  constructor() {
    this.#lottoBuyer = new LottoBuyer();
    this.#lottoShop = new LottoShop();
    this.#lottoCompany = new LottoCompany();
  }

  async run() {
    await this.#lottoBuyer.purchaseLottos(this.#lottoShop);

    await this.#lottoCompany.draw();

    this.#lottoBuyer.checkWinningLotto(this.#lottoCompany);

    this.#lottoBuyer.calculateReturn();
  }
}

export default App;
