import Lotto from '../Domain/Lotto.js';
import LottoNumberGenerateService from './LottoNumberGenerateService.js';

class LottoTicketService {
  #lottos;
  #lottoCount;

  constructor() {
    this.lottoNumberGenerateService = new LottoNumberGenerateService();
    this.#lottos = [];
    this.#lottoCount = null;
  }

  generateLottoTickets(purchaseAmount) {
    this.calculateLottoCount(purchaseAmount);

    for (let i = 0; i < this.#lottoCount; i++) {
      const lottoNumbers =
        this.lottoNumberGenerateService.generateUniqueLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  calculateLottoCount(purchaseAmount) {
    this.#lottoCount = purchaseAmount / 1000;
  }

  getLottos() {
    return { lottoCount: this.#lottoCount, lottos: this.#lottos };
  }
}

export default LottoTicketService;
