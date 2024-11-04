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
    }
}

export default InputView;