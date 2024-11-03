// model
import Lotto from "../Lotto.js";
import CalculateTotalReturn from "../model/CalculateTotalReturn.js";
import PurchasedLottoModel from "../model/purchasedLottoModel.js";
import RankingModel from "../model/RankingModel.js";

// util
import ValidatePurchaseAmount from "../utils/ValidatePurchaseAmount.js";

// view
import LottoView from "../view/LottoView.js";

export default class LottoController {
  #purchaseAmount = 0;

  #purchasedLotto = null;

  constructor() {
    this.view = new LottoView();
  }

  async startLotto() {
    await this.getPurchaseAmount();

    // 로또 구입하기
    this.#purchasedLotto = new PurchasedLottoModel(this.#purchaseAmount);

    const lottoCount = this.#purchasedLotto.calculateLottoCount();
    this.view.showPurchasedLottoCount(lottoCount);

    // 구입한 로또 보여주기
    const purchasedLottos = this.#purchasedLotto.getPurchasedLottos();
    this.view.showPurchasedLottos(purchasedLottos);

    // 당첨 번호 입력 받기
    const winningLottoInput = await this.view.getWinningLottoNumbers();
    const winningLottoNumbers = winningLottoInput.split(",").map(Number);
    const winningLotto = new Lotto(winningLottoNumbers);

    // 보너스 번호 입력 받기
    const winningBonusInput = await this.view.getWinningLottoBonusNumbers();

    // 당첨 내역
    const rankingModel = new RankingModel(
      purchasedLottos,
      winningLottoNumbers,
      winningBonusInput
    );

    // 당첨 내역 결과
    const rankingCount = rankingModel.countMatch();

    // 당첨 내역 출력
    this.view.showWinningStatistics(rankingCount);

    // 총 수익률 계산
    const totalReturnRate = new CalculateTotalReturn(
      this.#purchaseAmount,
      rankingCount
    ).calculateReturnRate();

    // 총 수익률 출력
    this.view.showTotalReturnRate(totalReturnRate);
  }

  async getPurchaseAmount() {
    const purchaseAmount = await this.view.getPurchaseAmount();
    try {
      ValidatePurchaseAmount.validate(purchaseAmount);
      this.#purchaseAmount = purchaseAmount;
    } catch (error) {
      this.view.printError(error.message);
      await this.getPurchaseAmount();
    }
  }
}
