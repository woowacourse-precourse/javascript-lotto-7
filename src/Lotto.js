import { Console } from "@woowacourse/mission-utils";
import { requestValidInput } from "./utils/inputUtils";
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

  get numberSet() {
    return this.#numbers;
  }

  async purchasedTicketAmount() {
    const paymentAmount = await this.getPaymentAmount();
    return this.calculateTicketAmount(paymentAmount);
  }
  async getPaymentAmount() {
    return requestValidInput(
      "구입 금액을 입력해주세요(로또 1장 당 1000원)",
      PaymentValidator.checkThousandUnit
    )
  }
  calculateTicketAmount(paymentAmount) {
    return paymentAmount / 1000;
  }

  printTickets(ticketAmount) {
    const generatedLottoTickets = this.generateTickets(ticketAmount);
    Console.print(`${ticketAmount}개를 구매했습니다.`);
    generatedLottoTickets.forEach((ticket) => {
      Console.print(`[${ticket.join(", ")}]`);
    })
    return generatedLottoTickets;
  }
  generateTickets(ticketAmount) {
    const ticketGenerator = new LottoTicketsGenerator(ticketAmount);
    return ticketGenerator.tickets;
  }

  async getWinningSet() {
    const winningNumbers = await this.getLottoNumbers();
    const bonusNumber = await this.getBonusNumber(winningNumbers);
    this.#numbers.winningNumbers = winningNumbers;
    this.#numbers.bonusNumber = bonusNumber;
  }
  async getLottoNumbers() {
    return requestValidInput(
      "당첨 번호를 입력해주세요(쉼표로 구분하여 입력)",
      LottoValidator.validateLottoNumbers,
      this.transformLottoNumbers
    )
  }
  async getBonusNumber(winning) {
    return requestValidInput(
      "보너스 번호를 입력해주세요",
      (input) => LottoValidator.validateBonusNumber(winning, input),
      this.transformBonusNumber,
    )
  }
  transformLottoNumbers(rawNumbers) {
    return rawNumbers
      .split(",")
      .map(num => Number(num.trim()))
      .sort((a, b) => a - b);
  }
  transformBonusNumber(rawNumber) {
    return Number(rawNumber);
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
