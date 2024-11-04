import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    await this.GenerateLottoResult();
    const WIN_LOTTO_NUM = await this.InputWinLotto();
    const BONUS_NUM = await this.InputBonus();

    const lotto = new Lotto(WIN_LOTTO_NUM);
    const USER_LOTTOS = this.USER_LOTTOS; // 사용자 로또 묶음을 저장
    const MATCH_CNT = lotto.CalculateCount(USER_LOTTOS, BONUS_NUM); // 채점 진행
    lotto.PrintResult(this.USER_COST, MATCH_CNT);
  }

  // 인풋 로직 (1) : 구입 금액
  async InputCost() {
    let userCost;
    // test 확인해보니, 유효한 입력이 들어올떄까지 인풋받아야 함
    while (true) {
      userCost = await Console.readLineAsync("구입 금액을 입력해 주세요: ");
      // 금액은 1,000원 단위
      if (this.isValidCost(userCost)) {
        break;
      }
    }
    this.USER_COST = Number(userCost); // 구입 금액 숫자변환
    const LOTTO_CNT = Math.floor(this.USER_COST / 1000); // 구매할 로또 개수
    Console.print(`\n${LOTTO_CNT}개를 구매했습니다.`);
    return LOTTO_CNT;
  }
  // 유효성 검사
  isValidCost(cost) {
    if (isNaN(cost) || cost % 1000 !== 0) {
      Console.print("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
      return false;
    }
    return true;
  }

  // 인풋 로직 (2) : 당첨 번호
  async InputWinLotto() {
    const INPUT_WIN_NUM = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요."
    );
    const INPUT_WIN_NUM_LIST = INPUT_WIN_NUM.split(",").map(Number);
    this.validateWinNumbers(INPUT_WIN_NUM_LIST);
    return INPUT_WIN_NUM_LIST;
  }
  // 유효성 검사
  validateWinNumbers(numbers) {
    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  // 인풋 로직 (3) : 보너스 번호
  async InputBonus() {
    const INPUT_BONUS_NUM = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요: "
    );
    // 입력값이 숫자로 변환할 수 있는지 확인하고 길이가 1인지 확인
    const BONUS_NUM = Number(INPUT_BONUS_NUM);
    this.validateBonusNumber(BONUS_NUM, INPUT_BONUS_NUM);
    return Number(BONUS_NUM);
  }
  // 유효성 검사
  validateBonusNumber(num, input) {
    if (
      isNaN(num) ||
      input.includes(",") ||
      input.trim() === "" ||
      num < 1 ||
      num > 45
    ) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45 사이의 단일 숫자여야 합니다."
      );
    }
  }

  // 사용자가 구매한 로또 번호 리스트
  async GenerateLottoResult() {
    const LOTTO_CNT = await this.InputCost();
    this.USER_LOTTOS = []; // 사용자 로또 리스트를 여기에 저장

    for (let i = 0; i < LOTTO_CNT; i++) {
      const RANDOM_LOTTO = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const formattedLotto = `[${RANDOM_LOTTO.join(", ")}]`;
      Console.print(formattedLotto);

      this.USER_LOTTOS.push(RANDOM_LOTTO); // 사용자 로또 목록 저장
    }
  }
}

export default App;
