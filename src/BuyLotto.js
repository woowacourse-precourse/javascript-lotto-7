import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

export default class BuyLotto {
  #inputPrice = 0;
  #winningNumber = [];
  #bonusNumber = 0;
  #purchaseAmount = 0;
  #PRICE_OF_A_LOTTO = 1000;
  #PRICE_PROMPT = "구입금액을 입력해 주세요.";
  #WINNING_NUMBER_PROMPT = "당첨 번호를 입력해 주세요.";
  #BONUS_NUMBER_PROMPT = "보너스 번호를 입력해 주세요.";
  #EMPTY_STRING = "";

  async enterLottoPrice() {
    Console.print(this.#PRICE_PROMPT);
    this.#inputPrice = await Console.readLineAsync("");
    Console.print(this.#EMPTY_STRING);
    this.#getAmountOfLotto(this.#inputPrice);
    const validator = new Validator();
    validator.priceValidate(this.#inputPrice , this.#PRICE_OF_A_LOTTO)
  }

  async enterWinningNumber() {
    let input;
    Console.print(this.#WINNING_NUMBER_PROMPT);
    input = await Console.readLineAsync("");
    this.#winningNumber = input.split(",").map(Number);
    Console.print(this.#EMPTY_STRING);
  }

  async enterBonusNumber() {
    Console.print(this.#BONUS_NUMBER_PROMPT);
    this.#bonusNumber = await Console.readLineAsync("");
    Console.print(this.#EMPTY_STRING);
  }

  #getAmountOfLotto(price) {
    this.#purchaseAmount = Number(price) / this.#PRICE_OF_A_LOTTO;
  }
}
