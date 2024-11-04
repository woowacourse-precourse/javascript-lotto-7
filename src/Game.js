import { CONDITION, INPUT, LOTTO, OUTPUT, PRIZE, PRIZE_RATE, RESULT } from "./util/constant.js";
import Purchase from "./Purchase.js";
import { readUserInput } from "./util/input.js";
import Lotto from "./Lotto.js";
import { Console } from "@woowacourse/mission-utils";
import { formatPercentage, generateLottoNumbers } from "./util/general.js";
import Validate from "./ValidateInput.js";

class Game {

  static async startGame() {
    try {
      // validate purchase amount and generate lottos
      const inputAmount = await readUserInput(INPUT.PURCHASE_AMOUNT);
      const amount = new Purchase(inputAmount);
      const tickets = amount.getTicketCount();
      const generatedTickets = this.#buyLotto(tickets);

      // validate winning numbers
      const inputWinningNumbers = await readUserInput(INPUT.WINNING_NUMBERS);
      const winningNumbers = Validate.validateWinningNumbers(inputWinningNumbers);

      // validate bonus numbers
      const inputBonusNumber = await readUserInput(INPUT.BONUS_NUMBER);
      const bonusNumber = Validate.validateBonus(inputBonusNumber, winningNumbers);

      // match winning numbers and purchased lotto numbers
      const result = this.#matchNumbers(generatedTickets, winningNumbers, bonusNumber);
      this.#printResults(result, inputAmount);

    } catch (error) {
      Console.print(error.message);
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
      const formattedNumbers = `[${numbers.join(", ")}]`;
      Console.print(formattedNumbers);
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

    const result = this.#rank(resultList);
    return result;
  };

  static #rank(resultList) {
    const rankCounts = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    resultList.forEach(([point, bonusPoint]) => {
      if (point === CONDITION.FIRST_PLACE) rankCounts.first++;
      if (point === CONDITION.THIRD_PLACE && bonusPoint) rankCounts.second++;
      if (point === CONDITION.THIRD_PLACE) rankCounts.third++;
      if (point === CONDITION.FOURTH_PLACE) rankCounts.fourth++;
      if (point === CONDITION.FIFTH_PLACE) rankCounts.fifth++;
    });

    return rankCounts;
  }

  static #printResults(result, inputAmount) {
    Console.print(RESULT(result));
    const { first, second, third, fourth, fifth } = result;
    const prizeMoney =
      (first * PRIZE.FIRST_PLACE) +
      (second * PRIZE.SECOND_PLACE) +
      (third * PRIZE.THIRD_PLACE) +
      (fourth * PRIZE.FOURTH_PLACE) +
      (fifth * PRIZE.FIFTH_PLACE);

    const prizeRate = formatPercentage(inputAmount, prizeMoney);
    Console.print(PRIZE_RATE(prizeRate));

  }
};

export default Game;
