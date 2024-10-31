import { Console } from "@woowacourse/mission-utils";
import InputValidate from "../utils/InputValidate.js";
import LottoModel from "../model/lottoModel.js";
import LottoView from "../view/lottoView.js";

class LottoController{
  constructor() {
    this.error = new InputValidate();
    this.model = new LottoModel();
    this.view = new LottoView();
  }

  async play() {
    const userPrice = await this.inputPrice();
    this.getLottoList(userPrice);
    const winningNumber = await this.inputWinningNumber();
    this.model.setWinningNumber(winningNumber);
  }

  async inputPrice() {
    let isValid = false;
    let price;
    do {
      price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
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
      WinningNumber = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
      isValid = this.validateWinningNumber(WinningNumber.split(','));
    } while (!isValid)
    return WinningNumber.split(',');
  }

  validateWinningNumber(numbers) {
    const validateMesssage = this.error.lottoNumberValidate(numbers);
    if(validateMesssage) {
      Console.print(validateMesssage);
      return false;
    }
    return true;
  }
}

export default LottoController;