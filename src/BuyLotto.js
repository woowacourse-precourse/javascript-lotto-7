export default class BuyLotto {
  #price = 0;
  #winningNumber = [];
  #bonusNumber = 0;
  #PRICE_PROMPT = "구입금액을 입력해 주세요.";
  #WINNING_NUMBER_PROMPT = "당첨 번호를 입력해 주세요.";
  #BONUS_NUMBER_PROMPT = "보너스 번호를 입력해 주세요.";
  #EMPTY_STRING = "";

  async enterLottoPrice() {
    Console.print(this.#PRICE_PROMPT);
    this.#price = await Console.readLineAsync("");
    Console.print(this.#EMPTY_STRING);
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
}
