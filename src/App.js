import WoowahanInput from "./woowahanInput.js";
import { bonusNumberValidator, buyMoneyValidator, winInputValidator, winNumberValidator } from "./utils/validators.js";
import LottoStore from "./LottoStore.js";
import { GameOutput } from "./woowahanOutput.js";

class App {
  async run() {
    const lottoStore = new LottoStore();

    let isBuyMoneyValidate = true;
    let isWinNumberValidate = true;
    let isBonusNumberValidate = true;
    let buyMoney = 0;
    let winNumber = [];
    let bonusNumber = 0;

    while (isBuyMoneyValidate) {
      buyMoney = await WoowahanInput.getBuyMoney();
      isBuyMoneyValidate = !buyMoneyValidator(buyMoney);
    }

    const lottoTicketCount = lottoStore.getLottoTicketCount(buyMoney);

    GameOutput.printLottoTicketCount(lottoTicketCount);

    const lottos = lottoStore.generateLottos();

    while (isWinNumberValidate) {
      const winInput = await WoowahanInput.getWinNumber();
      winNumber = winInput.split(',').map(Number);
      if (!winInputValidator(winNumber)) continue;
      isWinNumberValidate = winNumber.some((number) => !winNumberValidator(number));
    }

    while (isBonusNumberValidate) {
      const inputBonus = await WoowahanInput.getBonusNumber();
      bonusNumber = Number(inputBonus);
      isBonusNumberValidate = !bonusNumberValidator(bonusNumber);
    }

    GameOutput.printWinningStatistics();

    lottoStore.checkLotto(lottos, winNumber, bonusNumber);
    const earn = lottoStore.resultRankingAnnounce();

    GameOutput.printTotalReturn(earn, buyMoney);
  }
}

export default App;
