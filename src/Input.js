import { INPUT_MESSAGE } from "./constants/message.js";

class Input {
  static async getPurchaseAmount() {
    const purchaseAmountInput = await Console.readLineAsync(
      INPUT_MESSAGE.PURCHASE_AMOUNT
    );

    return { purchaseAmount: Number(purchaseAmountInput) };
  }

  static async getLottoNumber() {
    const lottoNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.LOTTO_NUMBER
    );

    const myLottoNumbers = new Set(lottoNumberInput.split(",").map(Number));

    return { myLottoNumbers };
  }

  static async getBonusNumber() {
    const bonusNumberInput = await Console.readLineAsync(
      INPUT_MESSAGE.BONUS_NUMBER
    );

    return { bonusNumber: Number(bonusNumberInput) };
  }
}

export default Input;
