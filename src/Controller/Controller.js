import {
  getInput,
  printLottoTickets,
  printWinningResult,
  printLottoYield,
} from "../View/View.js";
import { generateLottoTickets } from "../Services/GenerateLottery.js";
import { validatePrice } from "../Validation/Validation.js";
import IOService from "../Services/IOService.js";
import SYSTEM_MESSAGES from "../Model/SystemMessages.js";

// Controller에서 전체 로직을 처리

class Controller {
  async run() {
    const price = await getInput(SYSTEM_MESSAGES.ASK_PRICE);
    const validatedPrice = validatePrice(price);

    const { ticketCount, tickets } = generateLottoTickets(validatedPrice);
    const ioService = new IOService();
    ioService.printTicketCount(ticketCount);
    ioService.printTickets(tickets);

    const winningNumber = await getInput(SYSTEM_MESSAGES.ASK_WINNING_NUMBER);
    const validatedWinningNumber = validateWinnigNumber(winningNumber);

    const bonusNumber = await getInput(SYSTEM_MESSAGES.ASK_BONUS_NUMBER);
    const validatedBonusNumber = validateBonusNumber(bonusNumber);

    const winningResult = calculateWinningResult(
      lottoTickets,
      validatedWinningNumber,
      validatedBonusNumber
    );
    printWinningResult(winningResult);

    const lottoYield = calculateLottoYield(winningResult);
    printLottoYield(lottoYield);
  }
}

export default Controller;
