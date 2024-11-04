import WinningNumber from "./model/WinningNumber.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import Consumer from "./model/Consumer.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  constructor() {
    // const inputView = new InputView();
  }
  run() {
    const consumer = new Consumer(InputView.getPriceInput());
    OutputView.printLottoTicket(consumer);
    const mainNumber = InputView.getWinningNumber();
    const bonusNumber = InputView.getBonusNumber(mainNumber);
    const winningnumber = new WinningNumber(mainNumber, bonusNumber);
    consumer.setLottoResult(winningnumber);
    OutputView.printResult(consumer);
  }
}
export default Controller;
