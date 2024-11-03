import { Console } from "@woowacourse/mission-utils";
import WoowahanInput from "./woowahanInput.js";
import { bonusNumberValidator, buyMoneyValidator, winInputValidator, winNumberValidator } from "./utils/validators.js";
import LottoStore from "./LottoStore.js";
import { GameOutput } from "./woowahanOutput.js";
import { CONSTANT } from "./utils/constants.js";

class App {
  async run() {
    const lottoStore = new LottoStore();

    let buyMoney = CONSTANT.START;
    let isWinNumberValidate = true;
    let isBonusNumberValidate = true;
    let winNumber = [];
    let bonusNumber = 0;

    while (!buyMoneyValidator(buyMoney)) {
      buyMoney = await WoowahanInput.getBuyMoney();
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
    const winRanking = Array(4).fill(0);
    let fiveEqualWithBonusCount = 0;

    function lottoCriteria(winNumber, bonusNumber, lottoNumber) {
      const matchCount = lottoNumber.filter(num => winNumber.includes(num)).length;
      const hasBonus = lottoNumber.includes(bonusNumber);

      if (matchCount === 6) {
        winRanking[3]++;
        return
      }
      if (matchCount === 5 && hasBonus) {
        fiveEqualWithBonusCount++;
        return
      }
      if (matchCount >= 3) {
        winRanking[matchCount - 3]++;
        return
      }
    }

    lottos.forEach((lotto) => {
      lottoCriteria(winNumber, bonusNumber, lotto.getNumbers());
    });

    const winPrize = [5000, 50000, 1500000, 2000000000];
    const bonusPrize = 30000000;
    let earn = 0;

    for (let n = 0; n < 4; n++) {
      Console.print(`${n + 3}개 일치 (${winPrize[n].toLocaleString()}원) - ${winRanking[n]}개`);
      earn += winRanking[n] * winPrize[n];
      if (n === 2) {
        Console.print(`5개 일치, 보너스 볼 일치 (${bonusPrize.toLocaleString()}원) - ${fiveEqualWithBonusCount}개`);
        earn += fiveEqualWithBonusCount * bonusPrize;
      }
    }

    Console.print(`총 수익률은 ${(earn / Number(buyMoney) * 100).toFixed(1)}%입니다.`);
  }
}

export default App;
