import { Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    try {
      const purchaseAmount = await this.getPurchaseAmount();
      // Console.print(`구입금액은 ${purchaseAmount}원입니다.`);

      const lottoTickets = this.generateLottoTickets(purchaseAmount);
      this.printLottoTickets(lottoTickets);

      const winningNumbers = await this.getWinningNumbers();
      // Console.print(`당첨 번호는 ${winningNumbers.join(", ")}입니다.`);

      const bonusNumber = await this.getBonusNumber(winningNumbers);
      // Console.print(`보너스 번호는 ${bonusNumber}입니다.`);

      // 로또 결과 계산
      

      // 결과 출력
      
    } catch (error) {
      // 예외가 발생하면 오류 메시지를 출력
      Console.print(error.message);
    }
  }

  async getPurchaseAmount() {
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const amount = parseInt(input, 10);
    
    if (isNaN(amount) || amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount;
  }

  generateLottoTickets(amount) {
    const ticketCount = amount / 1000;
    const tickets = [];
    // 구매한 금액에 따라 로또 티켓을 생성
    for (let i = 0; i < ticketCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }

  printLottoTickets(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => Console.print(`[${ticket.getNumbers().join(", ")}]`));
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const numbers = input.split(",").map(Number); //TODO : ,가 아닌 경우에 대한 예외 처리
    
    // 입력된 당첨 번호의 유효성 확인 (총 6개, 1~45 범위의 숫자)
    if (numbers.length !== 6 || numbers.some((num) => isNaN(num) || num < 1 || num > 45) || new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않는 숫자 6개여야 합니다.");
    }
    return numbers;
  }

  async getBonusNumber(winningNumbers) {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    const bonusNumber = parseInt(input, 10);

    // 입력된 보너스 번호의 유효성 확인 (1~45 범위의 숫자, 당첨 번호와 중복되지 않음)
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자이며, 당첨 번호와 중복되지 않아야 합니다.");
    }
    return bonusNumber;
  }
}

export default App;
