import Lotto from "../Lotto.js";
import PurchasedLottoModel from "../model/purchasedLottoModel.js";
import LottoView from "../view/LottoView.js";

export default class LottoController {
  constructor() {
    this.view = new LottoView();
    this.purchasedLotto = null;
  }

  async startLotto() {
    const purchaseAmount = await this.view.getPurchaseAmount();

    // 로또 구입하기
    this.purchasedLotto = new PurchasedLottoModel(purchaseAmount);

    const lottoCount = this.purchasedLotto.calculateLottoCount();
    this.view.showPurchasedLottoCount(lottoCount);

    // 구입한 로또 보여주기
    const purchasedLottos = this.purchasedLotto.getPurchasedLottos();
    this.view.showPurchasedLottos(purchasedLottos);

    // 당첨 번호 입력 받기
    const winningLottoInput = await this.view.getWinningLottoNumbers();
    const winningLottoNumbers = winningLottoInput.split(",").map(Number);
    const winningLotto = new Lotto(winningLottoNumbers);
  }
}
