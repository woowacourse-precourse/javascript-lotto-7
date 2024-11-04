import { Console } from "@woowacourse/mission-utils";
import Validator from "../Validator.js"

const InputView = {
    async readMoneyPaid() {
        while (true) {
            try {
                const moneyPaid = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
                Validator.validateMoneyPaid(moneyPaid);
                return moneyPaid;
            } catch (error) {
                Console.print(error);
            }
        }
    },

    async readWinningNumbers() {
        while (true) {
            try {
                const inputWinningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
                const winningNumbers = inputWinningNumbers.split(",").map(number => Number(number));
                Validator.validateWinningNumbers(winningNumbers);
                return winningNumbers;
            } catch (error) {
                Console.print(error);
            }
        }
    }
}

export default InputView;