import {
  getInput,
  printLottoTickets,
  printWinningResult,
  printLottoYield,
} from "../View/View.js";
import { generateLottoTickets } from "../Services/GenerateLottery.js";
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

    const price = await getInput(askUserAmount);
    const validatedPrice = validatePrice(price);

    const { ticketCount, tickets } = generateLottoTickets(validatedPrice);
    const ioService = new IOService();
    ioService.printTicketCount(ticketCount);
    ioService.printTickets(tickets);

    const winningNumber = await getInput(askUserLottoNumber);
    const validatedWinningNumber = validateWinningNumbers(winningNumber);

    const bonusNumber = await getInput(askUserBonusNumber);
    const validatedBonusNumber = validateBonusNumber(
      bonusNumber,
      validatedWinningNumber
    );

    // const winningResult = calculateWinningResult(
    //   lottoTickets,
    //   validatedWinningNumber,
    //   validatedBonusNumber
    // );
    // printWinningResult(winningResult);

    // const lottoYield = calculateLottoYield(winningResult);
    // printLottoYield(lottoYield);
  }
}

export default Controller;
