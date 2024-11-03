import { Console } from "@woowacourse/mission-utils";
import PaymentValidator from "./validators/PaymentValidator";
import LottoValidator from "./validators/LottoValidator";
import LottoTicketsGenerator from "./LottoTicketsGenerator";
import WinningCalculator from "./WinningCalculator";
import PRIZE_TABLE from "./constants/lottoPrizeTable";

class Lotto {
  #numbers;

  constructor() {
    this.#numbers = {
      winningNumbers: null,
      bonusNumber: null,
    };
  }

  async start() {
    const ticketAmount = await this.purchasedTicketAmount();
    const tickets = this.printTickets(ticketAmount);
    await this.getWinningSet();
    this.calculateTotalResult(tickets);
  }

  async purchasedTicketAmount() {
    const paymentAmount = await this.getPaymentAmount();
    return this.calculateTicketAmount(paymentAmount);
  }
  async getPaymentAmount() {
    while(true) {
      try {
        const paymentAmount = await Console.readLineAsync("구입 금액을 입력해주세요(로또 1장 당 1000원)");
        PaymentValidator.checkThousandUnit(paymentAmount);
        return paymentAmount;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }
  calculateTicketAmount(paymentAmount) {
    return paymentAmount / 1000;
  }

  generateTickets(ticketAmount) {
    const ticketGenerator = new LottoTicketsGenerator(ticketAmount);
    return ticketGenerator.tickets;
  }
  printTickets(ticketAmount) {
    const generatedLottoTickets = this.generateTickets(ticketAmount);
    Console.print(`${ticketAmount}개를 구매했습니다.`);
    generatedLottoTickets.forEach((ticket) => {
      Console.print(`[${ticket.join(", ")}]`);
    })
    return generatedLottoTickets;
  }

  async getWinningSet() {
    this.#numbers.winningNumbers = await this.getLottoNumbers();
    this.#numbers.bonusNumber = await this.getBonusNumber();
  }
  async getLottoNumbers() {
    while(true) {
      try {
        const rawLottoNumbers = await Console.readLineAsync("당첨 번호를 입력해주세요(쉼표로 구분하여 입력)");
        const parsedLottoNumbers = rawLottoNumbers.split(",").map(num => Number(num.trim()));
        LottoValidator.validateLottoNumbers(parsedLottoNumbers);
        return parsedLottoNumbers;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }
  async getBonusNumber() {
    while(true) {
      try {
        const rawbonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요");
        const bonusNumber = Number(rawbonusNumber);
        LottoValidator.checkEachNumber(bonusNumber);
        return bonusNumber;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }

  calculateTotalResult(tickets) {
    const {rankResult, profit, rateOfReturn} = this.calculateWinning(tickets);
    this.printResult(rankResult, profit, rateOfReturn)
  }
  calculateWinning(tickets) {
    const calculator = new WinningCalculator(this.#numbers, tickets);
    return calculator.result;
  }
  printResult(rankResult, profit, rateOfReturn) {
    Console.print("당첨 통계\n---");

    Object.keys(PRIZE_TABLE).forEach((key) => {
      const { matched, prize } = PRIZE_TABLE[key];
      const count = rankResult[key];
    
      if (key === 'second') {
        Console.print(`${matched}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${count}개`);
      } else {
        Console.print(`${matched}개 일치 (${prize.toLocaleString()}원) - ${count}개`);
      }
    });
    Console.print(`총 수익은 ${profit}원입니다.`)
    Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }
}

export default Lotto;
