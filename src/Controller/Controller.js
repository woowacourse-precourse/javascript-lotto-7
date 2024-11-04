import { generateLottoTickets } from "../Services/GenerateLottery.js";
import { calculateWinningResult } from "../Services/calculateWinningResult.js";
import { calculateLottoYield } from "../Services/calculateLottoYield.js";
import {
  validatePrice,
  validateWinningNumbers,
  validateBonusNumber,
} from "../Validation/index.js";
import IOService from "../Services/IOService.js";
import defaultSettings from "../Config/DefaultSettings.js";

// Controller에서 전체 로직을 처리

class Controller {
  async run() {
    const { askUserAmount, askUserLottoNumber, askUserBonusNumber } =
      defaultSettings.systemMessages;
    const ioService = new IOService();

    const price = await ioService.getUserInput(askUserAmount);
    const validatedPrice = validatePrice(price);

    const { ticketCount, tickets } = generateLottoTickets(validatedPrice);
    ioService.displayTicketCount(ticketCount);
    ioService.displayLottoTickets(tickets);

    const winningNumber = await ioService.getUserInput(askUserLottoNumber);
    const validatedWinningNumber = validateWinningNumbers(winningNumber);

    const bonusNumber = await ioService.getUserInput(askUserBonusNumber);
    const validatedBonusNumber = validateBonusNumber(
      bonusNumber,
      validatedWinningNumber
    );

    const winningResult = calculateWinningResult(
      tickets,
      validatedWinningNumber,
      validatedBonusNumber
    );
    ioService.displayWinningResult(winningResult);

    const lottoYield = calculateLottoYield(winningResult, validatedPrice);
    ioService.displayLottoYield(lottoYield);
  }
}

export default Controller;
