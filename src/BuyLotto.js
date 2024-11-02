import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

export default class BuyLotto {
  #validator;
  #inputPrice = 0;
  #winningNumber = [];
  #bonusNumber = 0;
  #purchaseAmount = 0;
  #purchasedLotto = [];
  #PRICE_OF_A_LOTTO = 1000;
  #PRICE_PROMPT = "구입금액을 입력해 주세요.";
  #WINNING_NUMBER_PROMPT = "당첨 번호를 입력해 주세요.";
  #BONUS_NUMBER_PROMPT = "보너스 번호를 입력해 주세요.";
  #EMPTY_STRING = "";

  constructor() {
    this.#validator = new Validator();
    let input;
  }

  async enterLottoPrice() {
    Console.print(this.#PRICE_PROMPT);
    this.#inputPrice = await Console.readLineAsync("");
    Console.print(this.#EMPTY_STRING);
    this.#getAmountOfLotto(this.#inputPrice);
    this.#validator.validatePrice(this.#inputPrice, this.#PRICE_OF_A_LOTTO);
    await this.enterWinningNumber();
  }

  async enterWinningNumber() {
    Console.print(this.#WINNING_NUMBER_PROMPT);
    this.input = await Console.readLineAsync("");
    this.#validator.validateWinningNumber(this.input);
    this.#winningNumber = this.input.split(",").map(Number);
    Console.print(this.#EMPTY_STRING);
    await this.enterBonusNumber();
  }

  async enterBonusNumber() {
    Console.print(this.#BONUS_NUMBER_PROMPT);
    this.input = await Console.readLineAsync("");
    this.#validator.validateBonusNumnber(this.input);
    this.#bonusNumber = Number(this.input);
    Console.print(this.#EMPTY_STRING);
  }

  #getAmountOfLotto(price) {
    this.#purchaseAmount = Number(price) / this.#PRICE_OF_A_LOTTO;
    this.#getLottoNumbers(this.#purchaseAmount);
  }

  #getLottoNumbers(purchaseAmount) {
    for (let i = 0; i < purchaseAmount; i += 1) {
      let randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#purchasedLotto.push(randomNumber);
      this.#validator.validateDuplicateNumber(randomNumber);
    }
    this.#printLottoNumbers(purchaseAmount);
  }

  #printLottoNumbers(purchaseAmount) {
    Console.print(`${purchaseAmount}개를 구매했습니다.`);
    this.#purchasedLotto.forEach((array) => {
      const sortedArray = this.#sortLottoNumbers(array);
      Console.print(sortedArray);
    });
    Console.print(this.#EMPTY_STRING);
  }

  #sortLottoNumbers(array) {
    return array.slice().sort((a, b) => a - b);
  }
  
}
