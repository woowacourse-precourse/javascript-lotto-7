import { InputHandler } from "./InputHandler.js";
import { viewMessages } from "../constant/message.js";

export class LottoNumberInputHandler {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async readWinningNumbers() {
    return await this.#inputHandler.readNumbers(viewMessages.winning);
  }

  async readBonusNumber() {
    return await this.#inputHandler.readNumber(viewMessages.bonus);
  }
}
