import Lotto from '../Domain/Lotto.js';
import LottoNumberGenerateService from './LottoNumberGenerateService.js';

class LottoTicketService {
  #lottos;

  constructor() {
    this.#lottos = [];
    this.lottoNumberGenerateService = new LottoNumberGenerateService();
  }

  generateLottoTickets(purchaseAmount) {
    for (let i = 0; i < purchaseAmount / 1000; i++) {
      const lottoNumbers =
        this.lottoNumberGenerateService.generateUniqueLottoNumbers();
      const lotto = new Lotto(lottoNumbers);
      this.#lottos.push(lotto);
    }
  }

  getLottos() {
    return this.#lottos;
  }
}

export default LottoTicketService;
