import { Random, Console, MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async run() {
    // 로또 구입금액 숫자 입력 받기
    const inputlottospurchase = await Console.readLineAsync(
      '구입금액을 입력해 주세요.\n'
    );
    
    // 입력값을 숫자로 변환
    const purchaseAmount = parseInt(inputlottospurchase, 10);

    // 로또 구입금액 입력 유효 검사에 따른 에러 처리
    try {
      this.VALID_LOTTO_PURCHASE(purchaseAmount);
    } catch (error) {
      Console.print(error.message);
      return; 
    }

    // 로또 발행 개수 
    const LOTTO_QUANTITY = Math.floor(purchaseAmount / 1000); 
    Console.print(`\n${LOTTO_QUANTITY}개를 구매했습니다.`);

    // 로또 번호 발행
    const lottoTickets = [];
    for (let i = 0; i < LOTTO_QUANTITY; i++) {
      const lotto = Lotto.generatedLottoNumbers();
      lottoTickets.push(lotto.getNumbers());
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    }

    // 당첨 번호 입력 받기
    let winningNumbers; 
    try {
      const inputWinningNumbers = await Console.readLineAsync(
        '\n당첨 번호를 입력해 주세요.\n'
      );

      winningNumbers = inputWinningNumbers.split(',')
      .map(num => parseInt(num, 10)).filter(num => !isNaN(num));

      // 당첨 번호 유효 검사
      Lotto.validWinningNumbers(winningNumbers); 
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      return;
    }
    
    // 당첨 보너스 번호 입력 받기
    let bonusNumber;
    try {
      const inputBonusNumbers = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );

      // 당첨 보너스 번호 유효 검사 및 보너스 번호 할당
      bonusNumber = Lotto.validBonusNumber(inputBonusNumbers, winningNumbers);  // 수정된 부분
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      return;
    }

    // 당첨 결과 및 출력
    this.CALCULATE_RESULTS(lottoTickets, winningNumbers, bonusNumber, purchaseAmount);
  }

  // 로또금액 입력 받은 숫자 유효검사
  VALID_LOTTO_PURCHASE(purchaseAmount) {
    if (!purchaseAmount) 
      throw new Error('로또 구입 금액을 입력해주세요.');
    if (isNaN(purchaseAmount) === true)
      throw new Error('로또 구입 금액은 숫자만 입력해주세요.');
    if (purchaseAmount <= 0)
      throw new Error('로또 구입 금액은 양수만 입력해주세요.');
    if (purchaseAmount % 1000 !== 0)
      throw new Error('로또 구입 금액은 1000원 단위로 입력해주세요.');
  }

  // 결과 계산 
  CALCULATE_RESULTS(lottoTickets, winningNumbers, bonusNumber, purchaseAmount) {
    const PRIZE_TABLE = { 
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+BONUS": 30000000,
      6: 2000000000 };

    const RESULTS = { 
      6: 0,
      "5+BONUS": 0,
      5: 0, 
      4: 0,
      3: 0 };

    let totalPrize = 0;

    lottoTickets.forEach(ticket => {
      const matchCount = ticket.filter(num => winningNumbers.includes(num)).length;
      const hasBonus = ticket.includes(bonusNumber);

      if (matchCount === 6) RESULTS[6]++;
      else if (matchCount === 5 && hasBonus) RESULTS["5+BONUS"]++;
      else if (matchCount === 5) RESULTS[5]++;
      else if (matchCount === 4) RESULTS[4]++;
      else if (matchCount === 3) RESULTS[3]++;
    });

    // 당첨 금액 합산
    totalPrize = 0;

    for (let key in RESULTS) {
      const count = RESULTS[key];
      const prize = PRIZE_TABLE[key];
      totalPrize += count * prize;
    }

    // 수익률 계산
    const PROFIT_RATE = ((totalPrize / purchaseAmount) * 100).toFixed(1);

    // 당첨 결과 출력
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${RESULTS[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${RESULTS[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${RESULTS[5]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${RESULTS["5+BONUS"]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${RESULTS[6]}개`);
    Console.print(`총 수익률은 ${PROFIT_RATE}%입니다.`);
  }
}

export default App;
