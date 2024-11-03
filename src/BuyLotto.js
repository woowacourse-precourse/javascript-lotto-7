import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";
import Lotto from "./Lotto.js";

export default class BuyLotto {
  #validator;
  #inputPrice;
  #winningLotto = [];
  #bonusNumber = 0;
  #purchaseAmount = 0;
  #purchasedLotto = [];
  #PRICE_OF_A_LOTTO = 1000;
  #PRICE_PROMPT = "구입금액을 입력해 주세요.";
  #WINNING_NUMBER_PROMPT = "당첨 번호를 입력해 주세요.";
  #BONUS_NUMBER_PROMPT = "보너스 번호를 입력해 주세요.";
  #PURCHASE_LOTTO_PROMPT = "개를 구매했습니다.";
  #EMPTY_STRING = "";

  constructor() {
    this.#validator = new Validator();
    let input;
  }

  async enterLottoPrice() {
    try {
      Console.print(this.#PRICE_PROMPT);
      this.#inputPrice = await Console.readLineAsync("");
      Console.print(this.#EMPTY_STRING);
      this.#validator.validatePrice(this.#inputPrice, this.#PRICE_OF_A_LOTTO);
      this.#getAmountOfLotto(this.#inputPrice);
      await this.enterWinningNumber();
    } catch (error) {
      Console.print(error.message);
      await this.enterLottoPrice();
    }
  }

  async enterWinningNumber() {
    try{
      Console.print(this.#WINNING_NUMBER_PROMPT);
      this.input = await Console.readLineAsync("");
      this.#validator.validateWinningNumber(this.input);
      this.#winningLotto = new Lotto(this.input.split(",").map(Number));
      Console.print(this.#EMPTY_STRING);
      await this.enterBonusNumber();
    }catch (error) {
      Console.print(error.message);
      await this.enterWinningNumber();
    }
    
  }

  async enterBonusNumber() {
    try{
      Console.print(this.#BONUS_NUMBER_PROMPT);
      this.input = await Console.readLineAsync("");
      this.#validator.validateBonusNumnber(this.input);
      this.#bonusNumber = Number(this.input);
      Console.print(this.#EMPTY_STRING);
    }catch (error) {
      Console.print(error.message);
      await this.enterBonusNumber();
    }
    
  }

  #getAmountOfLotto(price) {
    this.#purchaseAmount = Number(price) / this.#PRICE_OF_A_LOTTO;
    this.#generateLottoTickets(this.#purchaseAmount);
  }

  #generateLottoTickets(purchaseAmount) {
    for (let i = 0; i < purchaseAmount; i += 1) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
      this.#purchasedLotto.push(randomNumber);
      this.#validator.validateDuplicateNumber(randomNumber);
    }
    this.#printLottoNumbers(purchaseAmount);
  }

  #printLottoNumbers(purchaseAmount) {
    Console.print(`${purchaseAmount}${this.#PURCHASE_LOTTO_PROMPT}`);
    this.#purchasedLotto.forEach((array) => {
      const sortedArray = this.#sortLottoNumbers(array);
      Console.print(`[${sortedArray.join(", ")}]`);
    });
    Console.print(this.#EMPTY_STRING);
  }

  #sortLottoNumbers(array) {
    return array.slice().sort((a, b) => a - b);
  }

  getPurchasedLotto() {
    return this.#purchasedLotto;
  }
  getWinningLotto() {
    return this.#winningLotto;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }
}
