import { LottoView } from "../view/LottoView.js";

export class LottoController {
  static async start() {

    const amount = await LottoView.getPurchaseAmount();
    //const tickets = LottoService.purchaseTickets(amount);
    //LottoView.printTickets(tickets);

    const winningNumbers = await LottoView.getWinningNumbers();
    const bonusNumber = await LottoView.getBonusNumber();

    //const results = LottoService.calculateWinnings(tickets, winningNumbers, bonusNumber);
    //LottoView.printResults(results);
  }
}