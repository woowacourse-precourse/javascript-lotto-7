import { InputHandler } from "./InputHandler.js";
import { inValidMessages, viewMessages } from "../constant/message.js";
import { LOTTO_PRICE } from "../constant/constants.js";

export class PriceInputHandler {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async readPrice() {
    const price = await this.#inputHandler.readNumber(viewMessages.price);
    this.#validate(price);
    return price;
  }

  #validate(price) {
    this.#validateDivisible(price);
  }

  #validateDivisible(price) {
    if (price % LOTTO_PRICE !== 0) throw new Error(inValidMessages.priceUnit);
  }
}