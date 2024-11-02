import { Console } from "@woowacourse/mission-utils";
import PaymentValidator from "./validators/PaymentValidator";
import LottoValidator from "./validators/LottoValidator";
import LottoTicketsGenerator from "./LottoTicketsGenerator";

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
    const generatedTickets = this.printTickets(ticketAmount);
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
        const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요");
        return bonusNumber;
      } catch(error) {
        Console.print(error.message);
      }
    }
  }
}

export default Lotto;
