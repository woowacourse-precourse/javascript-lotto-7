import { lottoInputView } from "./InputView.js";

export class LottoController {
  async play() {
    const input = await lottoInputView.readPrice();
  }
}
