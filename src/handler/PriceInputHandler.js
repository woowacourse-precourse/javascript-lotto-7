import { InputHandler } from "./InputHandler.js";
import { viewMessages } from "../constant/message.js";

export class PriceInputHandler {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async readPrice() {
    return await this.#inputHandler.readNumber(viewMessages.price);
  }
}
