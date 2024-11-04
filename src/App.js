import LottoService from "./LottoService.js";
import LottoMatchChecker from "./LottoMatchChecker.js";
import PurchaseManager from "./PurchaseManager.js";
import LottoIssuer from "./LottoIssuer.js";
import WinningStatsManager from "./WinningStatsManager.js";
import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PRICE } from "./constants.js";
import LottoView from "./LottoView.js";
import LottoController from "./LottoController.js";
import LottoValidator from "./LottoValidator.js";

class App {
  async run() {
    const purchaseManager = new PurchaseManager(LOTTO_PRICE);
    const lottoMatchChecker = new LottoMatchChecker();
    const lottoIssuer = new LottoIssuer();
    const winningStatsManager = new WinningStatsManager();
    const lottoView = new LottoView(Console);
    const lottoService = new LottoService(purchaseManager, lottoMatchChecker, lottoIssuer, winningStatsManager);
    const lottoValidator = new LottoValidator();
    const lottoController = new LottoController(lottoService, lottoView, lottoValidator);
    await lottoController.init();
  }
}

export default App;
