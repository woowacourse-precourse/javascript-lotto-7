import { Console } from "@woowacourse/mission-utils";
import WoowahanInput from "./woowahanInput.js";
import { bonusNumberValidator, buyMoneyValidator, winInputValidator, winNumberValidator } from "./utils/validators.js";
import LottoStore from "./LottoStore.js";
import { GameOutput } from "./woowahanOutput.js";

class App {
  async run() {
    const lottoStore = new LottoStore();
    const winPrize = [5000, 50000, 1500000, 2000000000];
    const bonusPrize = 30000000;

    let isBuyMoneyValidate = true;
    let isWinNumberValidate = true;
    let isBonusNumberValidate = true;
    let buyMoney = 0;
    let winNumber = [];
    let bonusNumber = 0;
    let earn = 0;

    while (isBuyMoneyValidate) {
      buyMoney = await WoowahanInput.getBuyMoney();
      isBuyMoneyValidate = !buyMoneyValidator(buyMoney)
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

    const winRanking = lottoStore.getWinRanking();
    const fiveEqualWithBonusCount = lottoStore.getFiveEqualWithBonusCount();

    for (let n = 0; n < 4; n++) {
      Console.print(`${n + 3}개 일치 (${winPrize[n].toLocaleString()}원) - ${winRanking[n]}개`);
      earn += winRanking[n] * winPrize[n];
      if (n === 2) {
        Console.print(`5개 일치, 보너스 볼 일치 (${bonusPrize.toLocaleString()}원) - ${fiveEqualWithBonusCount}개`);
        earn += fiveEqualWithBonusCount * bonusPrize;
      }
    }

    GameOutput.printTotalReturn(earn, buyMoney);
  }
}

export default App;
