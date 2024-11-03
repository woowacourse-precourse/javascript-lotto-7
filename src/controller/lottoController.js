import { Console } from "@woowacourse/mission-utils";
import InputValidate from "../utils/InputValidate.js";
import LottoModel from "../model/lottoModel.js";
import LottoView from "../view/lottoView.js";
import { DELIMITER, MESSAGE } from "../constants/message.js";

class LottoController{
  constructor() {
    this.error = new InputValidate();
    this.model = new LottoModel();
    this.view = new LottoView();
  }

  async play() {
    await this.issueLotto();
    this.getInformation();
  }

  async issueLotto() {
    const userPrice = await this.inputPrice(); //금액 입력.
    this.getLottoList(userPrice);

    const winningNumber = await this.inputWinningNumber(); // 당첨번호 입력
    this.model.setWinningNumber(winningNumber);

    const bonusNumber = await this.inputBonusNumber(); // 보너스 숫자.
    this.model.setBonusNumber(bonusNumber);
  }

  getInformation() {
    this.model.setWinningStatistics();
    this.view.printResultMessage();
    this.view.printUserRank(this.model.getStatistics());
    const profit = this.model.calculateProfit();
    this.view.printProfit(profit);
  }

  async inputPrice() {
    let isValid = false;
    let price;
    do {
      price = await Console.readLineAsync(MESSAGE.INPUT_PRICE);
      isValid = this.validateUserPrice(price);
    } while (!isValid);
    return price;
  }

  validateUserPrice(price) {
    const validationMessage = this.error.priceInputValidate(price);
    if(validationMessage){
      Console.print(validationMessage);
      return false;
    } 
    return true;
  }

  getLottoList(userPrice) {
    this.model.setPrice(userPrice);
    this.model.generateLottoNumber();
    const lottoList = this.model.getLottoList();
    this.view.printLottoList(lottoList);
  }

  async inputWinningNumber() {
    let isValid = false;
    let WinningNumber;
    do {
      WinningNumber = await Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBER);
      isValid = this.validateWinningNumber(WinningNumber.split(DELIMITER.COMMA));
    } while (!isValid)
    return WinningNumber.split(DELIMITER.COMMA).map(Number);
  }

  validateWinningNumber(numbers) {
    const validationMesssage = this.error.lottoNumberValidate(numbers);
    if(validationMesssage) {
      Console.print(validationMesssage);
      return false;
    }
    return true;
  }

  async inputBonusNumber() {
    let bonusNumber;
    let isValid = false;
    do {
      bonusNumber = await Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
      isValid = this.validateBonusNumber(bonusNumber);
    } while (!isValid)
    return Number(bonusNumber);
  }

  validateBonusNumber(bonusNumber) {
    const vlaidationMessage = this.error.bonusNumberValidate(bonusNumber, this.model.getWinningNumber());
    if(vlaidationMessage) {
      Console.print(vlaidationMessage);
      return false;
    }
    return true;
  }
}

export default LottoController;