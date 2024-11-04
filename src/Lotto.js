import { Console } from "@woowacourse/mission-utils";
import { requestValidInput } from "./utils/inputUtils";
import PaymentValidator from "./validators/PaymentValidator";
import LottoValidator from "./validators/LottoValidator";
import LottoTicketsGenerator from "./LottoTicketsGenerator";
import WinningCalculator from "./WinningCalculator";
import { INPUT_MESSAGES, OUTPUT_MESSAGES } from "./constants/messages";
import { LOTTO_RULES_CONSTANTS } from "./constants/lottoRules";
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
      INPUT_MESSAGES.purchase_prompt,
      PaymentValidator.checkThousandUnit
    )
  }
  calculateTicketAmount(paymentAmount) {
    return paymentAmount / LOTTO_RULES_CONSTANTS.ticket_price;
  }

  printTickets(ticketAmount) {
    const generatedLottoTickets = this.generateTickets(ticketAmount);
    Console.print(OUTPUT_MESSAGES.purchasedAmount(ticketAmount));
    generatedLottoTickets.forEach((ticket) => {
      Console.print(`[${ticket.join(`${LOTTO_RULES_CONSTANTS.lotto_number_delimiter} `)}]`);
    });
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
      INPUT_MESSAGES.winning_numbers_prompt,
      LottoValidator.validateLottoNumbers,
      this.transformLottoNumbers
    )
  }
  async getBonusNumber(winning) {
    return requestValidInput(
      INPUT_MESSAGES.bonus_number_prompt,
      (input) => LottoValidator.validateBonusNumber(winning, input),
      this.transformBonusNumber,
    )
  }
  transformLottoNumbers(rawNumbers) {
    return rawNumbers
      .split(LOTTO_RULES_CONSTANTS.lotto_number_delimiter)
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
    Console.print(OUTPUT_MESSAGES.output_header);

    Object.keys(PRIZE_TABLE).forEach((key) => {
      const { matched, prize } = PRIZE_TABLE[key];
      const count = rankResult[key];
      Console.print(OUTPUT_MESSAGES.eachRankResult(key, matched, prize, count))
    });
    Console.print(OUTPUT_MESSAGES.totalProfit(profit));
    Console.print(OUTPUT_MESSAGES.totalRate(rateOfReturn));
  }
}


export default Lotto;
