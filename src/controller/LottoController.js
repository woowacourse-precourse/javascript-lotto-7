import { LottoView } from "../view/LottoView.js";
import { LottoService } from "../service/LottoService.js";
import Lotto from "../model/Lotto.js";

export class LottoController {
  static async start() {

    const amount = await LottoView.getPurchaseAmount();
    const lottos = LottoService.purchaseLotto(amount);
    LottoView.printLottos(lottos);

    const winningNumbers = await LottoView.getWinningNumbers();
    const lotto = new Lotto(winningNumbers); // Lotto 객체 생성 시 유효성 검사 수행
    const bonusNumber = await LottoView.getBonusNumber();

    const results = LottoService.calculateWinnings(lottos, winningNumbers, bonusNumber);
    LottoView.printResults(results);
  }
}