import { INPUT, LOTTO, OUTPUT } from "./util/constant.js";
import Purchase from "./Purchase.js";
import { readUserInput } from "./util/input.js";
import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { generateLottoNumbers } from "./util/general.js";
import ValidateInput from "./ValidateInput.js";

class Game {

  static async startGame() {
    try {
      const inputAmount = new Purchase(await readUserInput(INPUT.PURCHASE_AMOUNT));
      const tickets = inputAmount.getTicketCount();
      this.#buyLotto(tickets);
      const inputWinningNumbers = new ValidateInput(await readUserInput(INPUT.WINNING_NUMBERS));
      const winningNumbers = inputWinningNumbers.getLottoNumbers();
    } catch (error) {
      console.error(error.message);
    };
  };

  static #buyLotto(tickets) {
    const purchasedLottos = [];
    for (let i = 0; i < tickets; i++) {
      const lottoNumbers = new Lotto(generateLottoNumbers(
        LOTTO.MIN_NUMBER,
        LOTTO.MAX_NUMBER,
        LOTTO.COUNT
      ));
      purchasedLottos.push(lottoNumbers.getNumbers());
    };
    this.#printPurchasedLotto(tickets, purchasedLottos);
  };

  static #printPurchasedLotto(tickets, lottoNumbers) {
    Console.print(OUTPUT.PURCHASED_TICKETS(tickets));
    lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  };
};

export default Game;