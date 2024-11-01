import { INPUT } from "./util/constant.js";
import Purchase from "./Purchase.js";
import { readUserInput } from "./util/input.js";

class Game {
  static async startGame() {
    try {
      const inputAmount = new Purchase(await readUserInput(INPUT.PURCHASE_AMOUNT));
      const tickets = inputAmount.getTicketCount();
    } catch (error) {
      console.error(error.message);
    };
  };
}

export default Game;