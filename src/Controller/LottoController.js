import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import Validator from "../Model/Validator.js";
import AutoGenerate from "../Model/AutoGenerate.js";
import Winning from "../Model/Winning.js";
import calculateProfit from "../Model/calculateProfit.js";

class LottoController {
    #inputView;
    #outputView;
    winning;

    constructor() {
        this.#inputView = new InputView();
        this.#outputView = new OutputView();
    }

    async run() {
        const { BUDGET, TICKETS } = await this.#buy();
        const { WINNIG_NUMBERS, BONUS_NUMBER } = await this.#draw();
        this.winning = new Winning(WINNIG_NUMBERS, BONUS_NUMBER, TICKETS.lotto_tickets);
        this.#win(this.winning.numbers, this.winning.bonus, this.winning.tickets, this.winning.ranks);
        this.#profit(this.winning.ranks, BUDGET);
    }

    async #buy() {
        const BUDGET = await this.#getValidBudget();
        const TICKETS = new AutoGenerate(BUDGET);
        this.#outputView.printTickets(TICKETS.lotto_tickets);

        return { BUDGET, TICKETS };
    }

    async #getValidBudget() {
        while (true) {
            let input = await this.#inputView.readBudget();

            try {
                input = Validator.budgetValidate(input);

                return input;

            } catch (error) {
                this.#outputView.printError(error);
            }
        }
    }

    async #draw() {
        const WINNIG_NUMBERS = await this.#getValidNumbers();
        const BONUS_NUMBER = await this.#getValidBonus(WINNIG_NUMBERS);

        return { WINNIG_NUMBERS, BONUS_NUMBER };
    }

    async #getValidNumbers() {
        let input = await this.#inputView.readWinnig();

        input = input.split(",");
        input.forEach((element, idx) => {
            input[idx] = Number(input);
        })

        return input;

    }

    async #getValidBonus(numbers) {
        let input = await this.#inputView.readBonus();

        return Number(input);

    }

    #win(numbers, bonus, tickets, ranks) {
        this.winning.applyTickets(numbers, bonus, tickets, ranks);
        this.#outputView.printMatch(ranks);
    }

    #profit(ranks, amount) {
        const PROFIT_RATE = calculateProfit(ranks, amount);
        this.#outputView.printProfit(PROFIT_RATE);
    }

}

export default LottoController;