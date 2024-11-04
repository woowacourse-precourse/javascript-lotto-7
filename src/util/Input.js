import {Console} from "@woowacourse/mission-utils";
import {validAmount, validBonus} from "./Validator.js";
import Lotto from "../Lotto.js";

export const amountInput = async (content) => {
    while (true) {
        try {
            const amount = await Console.readLineAsync(content);
            validAmount(amount);
            return amount;
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const bonusInput = async (content, winning) => {
    while (true) {
        try {
            const bonus = await Console.readLineAsync(content);
            validBonus(bonus, winning);
            return bonus;
        } catch (error) {
            Console.print(error.message);
        }
    }
}

export const winningInput = async (content) => {
    while (true) {
        try {
            const winning = await Console.readLineAsync(content);
            const lotto = new Lotto(winning);
            return lotto.winningNumbers;
        } catch (error) {
            Console.print(error.message);
        }
    }
}