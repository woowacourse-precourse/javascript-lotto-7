import { INPUT, LOTTO, OUTPUT } from "./util/constant.js";
import Purchase from "./Purchase.js";
import { readUserInput } from "./util/input.js";
import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { generateLottoNumbers } from "./util/general.js";
import Validate from "./ValidateInput.js";

class Game {

  static async startGame() {
    try {
      // validate purchase amount and generate lottos
      const inputAmount = new Purchase(await readUserInput(INPUT.PURCHASE_AMOUNT));
      const tickets = inputAmount.getTicketCount();
      const generatedTickets = this.#buyLotto(tickets);

      // validate winning numbers
      const inputWinningNumbers = await readUserInput(INPUT.WINNING_NUMBERS);
      const winningNumbers = Validate.validateWinningNumbers(inputWinningNumbers);

      // validate bonus numbers
      const inputBonusNumber = await readUserInput(INPUT.BONUS_NUMBER);
      const bonusNumber = Validate.validateBonus(inputBonusNumber, winningNumbers);

      // match winning numbers and purchased lotto numbers
      this.#matchNumbers(generatedTickets, winningNumbers, bonusNumber);

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
    return purchasedLottos;
  };

  static #printPurchasedLotto(tickets, lottoNumbers) {
    Console.print(OUTPUT.PURCHASED_TICKETS(tickets));
    lottoNumbers.forEach((numbers) => {
      Console.print(numbers);
    });
  };

  static #matchNumbers(ticketNumbers, winningNumbers, bonusNumber) {
    const resultList = [];

    ticketNumbers.forEach((eachNumbers) => {
      let point = 0;
      let bonusPoint = 0;

      winningNumbers.forEach((numbers) => {
        const number = Number(numbers);
        if (eachNumbers.includes(number)) {
          point++;
        }
      })

      if (eachNumbers.includes(bonusNumber)) {
        bonusPoint = 1;
      }

      resultList.push([point, bonusPoint]);
    });

    this.#rank(resultList);
  };

  static #rank(resultList) {
    console.log(resultList);
  }
};

export default Game;
