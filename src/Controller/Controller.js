import LottoTicketGenerator from "../Services/LottoTicketsGenerator.js";
import WinningResultCalculator from "../Services/WinningResultCalculator.js";
import LottoYieldCalculator from "../Services/LottoYieldCalculator.js";
import {
  validatePrice,
  validateWinningNumbers,
  validateBonusNumber,
} from "../Validation/index.js";
import IOService from "../Services/IOService.js";
import defaultSettings from "../Config/DefaultSettings.js";

class Controller {
  constructor() {
    this.ioService = new IOService();
    this.systemMessages = defaultSettings.systemMessages;
    this.ticketGenerator = new LottoTicketGenerator();
    this.resultCalculator = new WinningResultCalculator();
    this.yieldCalculator = new LottoYieldCalculator();
  }

  // 전체 로직을 실행하는 메서드
  async run() {
    const validatedPrice = await this.getValidatedPrice();
    const tickets = this.getTickets(validatedPrice);
    const validatedWinningNumber = await this.getValidatedWinningNumber();
    const validatedBonusNumber = await this.getValidatedBonusNumber(
      validatedWinningNumber
    );
    const winningResult = this.getWinningResult(
      tickets,
      validatedWinningNumber,
      validatedBonusNumber
    );
    this.displayResults(winningResult, validatedPrice);
  }

  // 가격 입력 및 유효성 검사를 수행하는 메서드
  async getValidatedPrice() {
    const price = await this.ioService.getUserInput(
      this.systemMessages.askUserAmount
    );
    return validatePrice(price);
  }

  // 티켓 수와 내용을 생성하여 반환하는 메서드
  getTickets(validatedPrice) {
    const { ticketCount, tickets } =
      this.ticketGenerator.generateLottoTickets(validatedPrice);
    this.ioService.displayTicketCount(ticketCount);
    this.ioService.displayLottoTickets(tickets);
    return tickets;
  }

  // 당첨 번호 입력 및 유효성 검사를 수행하는 메서드
  async getValidatedWinningNumber() {
    const winningNumber = await this.ioService.getUserInput(
      this.systemMessages.askUserLottoNumber
    );
    return validateWinningNumbers(winningNumber);
  }

  // 보너스 번호 입력 및 유효성 검사를 수행하는 메서드
  async getValidatedBonusNumber(validatedWinningNumber) {
    const bonusNumber = await this.ioService.getUserInput(
      this.systemMessages.askUserBonusNumber
    );
    return validateBonusNumber(bonusNumber, validatedWinningNumber);
  }

  // 당첨 결과 계산을 수행하는 메서드
  getWinningResult(tickets, validatedWinningNumber, validatedBonusNumber) {
    return this.resultCalculator.calculate(
      tickets,
      validatedWinningNumber,
      validatedBonusNumber
    );
  }

  // 최종 결과 및 수익률을 출력하는 메서드
  displayResults(winningResult, validatedPrice) {
    this.ioService.displayWinningResult(winningResult);
    const lottoYield = this.yieldCalculator.calculate(
      winningResult,
      validatedPrice
    );
    this.ioService.displayLottoYield(lottoYield);
  }
}

export default Controller;
