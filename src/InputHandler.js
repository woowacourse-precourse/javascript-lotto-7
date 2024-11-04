import { Console } from "@woowacourse/mission-utils";

class InputHandler {
    static async getPurchaseAmount() {
        const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        if (amount % 1000 !== 0) {
            throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
        }
        return parseInt(amount, 10);
    }
}

export default InputHandler;