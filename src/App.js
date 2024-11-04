import Input from "./Input.js";
import Output from "./Output.js";
import {
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  LOTTO_NUMBERS_LENGTH,
} from "./constants/lotto.js";
import generateNumbers from "./utils/generateNumbers.js";

class App {
  async run() {
    const ticketCount = await Input.inputPurchaseAmount();

    Output.printTicketCount(ticketCount);
    for (let i = 0; i < ticketCount; i++) {
      const numbers = generateNumbers(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        LOTTO_NUMBERS_LENGTH
      );
      Output.printLottoNumbers(numbers);
    }

    const winningNumbers = await Input.inputWinningNumbers();
  }
}

export default App;
