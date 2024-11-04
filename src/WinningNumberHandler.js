import { Console } from "@woowacourse/mission-utils";

class WinningNumberHandler {
    static async getWinningNumbers() {
        const winningNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const numbers = winningNumbers.split(",").map(Number);
        if (numbers.length !== 6 || new Set(numbers).size !== 6) {
            throw new Error("[ERROR] 당첨 번호는 중복 없이 6개여야 합니다.");
        }
        return numbers;
    }

    static async getBonusNumber() {
        const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const number = parseInt(bonusNumber, 10);
        if (isNaN(number) || number < 1 || number > 45) {
            throw new Error("[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.");
        }
        return number;
    }
}

export default WinningNumberHandler;
