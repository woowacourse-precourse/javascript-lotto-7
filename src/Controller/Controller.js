import { generateLottoTickets } from "../Services/generateLottoTickets.js";
import { calculateWinningResult } from "../Services/calculateWinningResult.js";
import { calculateLottoYield } from "../Services/calculateLottoYield.js";
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
  }

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

  async getValidatedPrice() {
    const price = await this.ioService.getUserInput(
      this.systemMessages.askUserAmount
    );
    return validatePrice(price);
  }

  getTickets(validatedPrice) {
    const { ticketCount, tickets } = generateLottoTickets(validatedPrice);
    this.ioService.displayTicketCount(ticketCount);
    this.ioService.displayLottoTickets(tickets);
    return tickets;
  }

  async getValidatedWinningNumber() {
    const winningNumber = await this.ioService.getUserInput(
      this.systemMessages.askUserLottoNumber
    );
    return validateWinningNumbers(winningNumber);
  }

  async getValidatedBonusNumber(validatedWinningNumber) {
    const bonusNumber = await this.ioService.getUserInput(
      this.systemMessages.askUserBonusNumber
    );
    return validateBonusNumber(bonusNumber, validatedWinningNumber);
  }

  getWinningResult(tickets, validatedWinningNumber, validatedBonusNumber) {
    return calculateWinningResult(
      tickets,
      validatedWinningNumber,
      validatedBonusNumber
    );
  }

  displayResults(winningResult, validatedPrice) {
    this.ioService.displayWinningResult(winningResult);
    const lottoYield = calculateLottoYield(winningResult, validatedPrice);
    this.ioService.displayLottoYield(lottoYield);
  }
}

export default Controller;
