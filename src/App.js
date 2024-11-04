import { Console } from "@woowacourse/mission-utils";
import InputValue from "./InputValue.js";
import PurchaseMoney from "./PurchaseMoney.js";
import LottoGenerator from "./LottoGenerator.js";
import OutputValue from "./OutputValue.js";
import Lotto from "./Lotto.js";
import BonusLotto from "./BonusLotto.js";
import calculateWinningStatistics from "./CalculateWinningStatistic.js";

class App {
  purchaseMoney;
  ticketList;
  winningNumbers;
  bonusNumber;

  async run() {
    await this.inputPurchaseMoney();
    this.outputLottoTickets();
    await this.inputWinningNumbers();
    await this.inputBonusNumber();
  }

  async inputPurchaseMoney() {
    while (true) {
      try {
        this.purchaseMoney = await InputValue.purchaseMoney();
        new PurchaseMoney(this.purchaseMoney);
        return this.purchaseMoney;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  // 로또 티켓 수량과 로또 티켓 리스트
  outputLottoTickets() {
    const lottoData = new LottoGenerator(this.purchaseMoney);
    const { lottoQuantity, ticketList } = lottoData.getLottoData();
    this.ticketList = ticketList;

    OutputValue.printLottoSummary(lottoQuantity, ticketList);
  }

  async inputWinningNumbers() {
    while (true) {
      try {
        this.winningNumbers = await InputValue.winningNumbers();
        new Lotto(this.winningNumbers);
        return this.winningNumbers;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async inputBonusNumber() {
    while (true) {
      try {
        this.bonusNumber = await InputValue.bonusNumber();
        new BonusLotto(this.bonusNumber, this.winningNumbers);
        return this.bonusNumber;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  outputCheckWinning() {
    const winningStatisticsList = calculateWinningStatistics(
      this.ticketList,
      this.winningNumbers,
      this.bonusNumber
    );
  }
}

export default App;
