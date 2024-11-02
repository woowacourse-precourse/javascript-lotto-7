import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const purchaseAmount = await Console.readLineAsync(
      "구입금액을 입력해 주세요\n"
    );
    if (purchaseAmount === 0) {
      throw new Error("[ERROR]: 구입 금액은 0을 입력할 수 없습니다.");
    }
    if (purchaseAmount < 0) {
      throw new Error("[ERROR]: 구입 금액은 음수를 입력할 수 없습니다.");
    }
    if (purchaseAmount % 1000 !== 0 && purchaseAmount !== 0) {
      throw new Error("[ERROR]: 구입 금액은 1,000원 단위로 입력 가능합니다.");
    }
    if (purchaseAmount === "") {
      throw new Error("[ERROR]: 구입 금액에 빈 문자열을 입력할 수 없습니다.");
    }

    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    const winningNumber = winningNumbers.split(",");
    if (winningNumber.length !== 6) {
      throw new Error(
        "[ERROR]: 당첨 번호 입력은 6개의 숫자를 입력해야 합니다."
      );
    }
    const winningNumberSet = new Set();

    winningNumber.forEach((num) => {
      const number = Number(num);

      if (isNaN(number)) {
        throw new Error("[ERROR]: 숫자만 입력가능합니다.");
      }
      if (!Number.isInteger(number)) {
        throw new Error("[ERROR]: 정수가 아닌 수는 입력할 수 없습니다.");
      }
      if (number < 1 || number > 45) {
        throw new Error("[ERROR]: 로또 번호는 1부터 45사이의 숫자여야 합니다.");
      }
      if (winningNumberSet.has(number)) {
        throw new Error("[ERROR]: 당첨 번호는 중복될 수 없습니다.");
      }

      winningNumberSet.add(number);
    });

    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    if (winningNumberSet.has(Number(bonusNumber))) {
      throw new Error("[ERROR]: 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }
}

export default App;
