export default class BuyLotto {
  #price = 0;
  #PRICE_PROMPT = "구입금액을 입력해 주세요.";
  #EMPTY_STRING = "";

  async enterLottoPrice() {
    Console.print(this.#PRICE_PROMPT);
    this.#price = await Console.readLineAsync("");
    Console.print(this.#EMPTY_STRING);
  }
}
