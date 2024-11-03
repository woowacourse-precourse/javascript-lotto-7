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
      this.validlottospurchase(purchaseAmount);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }

    // 로또 발행 개수 
    const lottoQuantity = inputlottospurchase / 1000;
    Console.print(`\n${lottoQuantity}개를 구매했습니다.`);

    // 로또 번호 발행
    const lottoTickets = [];
    for (let i = 0; i < lottoQuantity; i++) {
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

      winningNumbers = inputWinningNumbers.split(',').map(num => parseInt(num, 10));

      // 당첨 번호 유효 검사
      Lotto.validWinningNumbers(winningNumbers);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }
    
    // 당첨 보너스 번호 입력 받기
    let bonusNumber;
    try {
      const inputBonusNumbers = await Console.readLineAsync(
        '\n보너스 번호를 입력해 주세요.\n'
      );

      // 당첨 보너스 번호 유효 검사
      Lotto.validBonusNumber(inputBonusNumbers, winningNumbers);
    } catch (error) {
      throw new Error(`[ERROR] ${error.message}`);
    }

    
  }


  // 로또금액 입력 받은 숫자 유효검사
  validlottospurchase(purchaseAmount) {
    if (!purchaseAmount) 
      throw new Error('로또 구입 금액을 입력해주세요.');
    if (isNaN(purchaseAmount))
      throw new Error('로또 구입 금액은 숫자만 입력해주세요.');
    if (purchaseAmount <= 0)
      throw new Error('로또 구입 금액은 양수만 입력해주세요.');
    if (purchaseAmount % 1000 !== 0)
      throw new Error('로또 구입 금액은 1000원 단위로 입력해주세요.');
  }

  // 결과 계산 
  calculateResults(lottoTickets, winningNumbers, bonusNumber, purchaseAmount) {
    const prizeTable = { 
      3: 5000,
      4: 50000,
      5: 1500000,
      "5+bonus": 30000000,
      6: 2000000000 };

    const results = { 
      6: 0,
      "5+bonus": 0,
      5: 0, 
      4: 0,
      3: 0 };

    let totalPrize = 0;

    lottoTickets.forEach(ticket => {
      const matchCount = ticket.filter(num => winningNumbers.includes(num)).length;
      const hasBonus = ticket.includes(bonusNumber);

      if (matchCount === 6) results[6]++;
      else if (matchCount === 5 && hasBonus) results["5+bonus"]++;
      else if (matchCount === 5) results[5]++;
      else if (matchCount === 4) results[4]++;
      else if (matchCount === 3) results[3]++;
    });

}


export default App;