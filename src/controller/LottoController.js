import { LottoView } from "../view/LottoView.js";
import { LottoService } from "../service/LottoService.js";

export class LottoController {
  static async start() {

    const amount = await LottoView.getPurchaseAmount();
    const lottos = LottoService.purchaseLotto(amount);
    LottoView.printLottos(lottos);

    const winningNumbers = await LottoView.getWinningNumbers();
    const bonusNumber = await LottoView.getBonusNumber();

    const results = LottoService.calculateWinnings(lottos, winningNumbers, bonusNumber);
    LottoView.printResults(results);
  }
}