import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    // 1. 로또 구입 금액 입력 처리
    const purchaseAmount = await this.readLottoPurchaseAmount();
    
    // 2. 로또 번호 발행
    const lottos = this.generateLottoNumbers(purchaseAmount);
    this.displayLottoNumbers(lottos);

    // 3. 당첨 번호 및 보너스 번호 입력 처리
    const { winningNumbers, bonusNumber } = await this.readWinningNumbers();
    
    // 4. 당첨 통계 계산
    const statistics = this.calculateWinnings(lottos, winningNumbers, bonusNumber);
    this.printStatistics(statistics, purchaseAmount);
  }

  // 1. 로또 구입 금액 입력 처리
  async readLottoPurchaseAmount(){
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const purchaseAmount = parseInt(amount, 10);

    // 로또 구입 금액 예외 처리
    if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
      throw new Error("[ERROR] 구입 금액은 양수여야 합니다.");
    }
    if (purchaseAmount % 1000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
    }

    return purchaseAmount;
  }

  // 2. 로또 번호 발행
  generateLottoNumbers(amount){
    const lottoCount = amount / 1000;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(numbers.sort((a, b) => a - b))); //오름차순 정렬
    }

    return lottos;
  }

  // 발행된 로또 번호 출력
  displayLottoNumbers(lottos){
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => {
      Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  }

  // 3. 당첨 번호 및 보너스 번호 입력 처리
  async readWinningNumbers(){
    const winningNumbersInput = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    const winningNumbers = winningNumbersInput.split(',').map(Number);

    // 당첨 번호, 보너스 번호 예외 처리
    this.validateWinningNumbers(winningNumbers);

    const bonusNumberInput = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    const bonusNumber = Number(bonusNumberInput);

    this.validateBonusNumber(bonusNumber, winningNumbers);
      
    return {winningNumbers, bonusNumber};
  }

  // 당첨 번호 유효성 검사
  validateWinningNumbers(winningNumbers){
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }
    if (!winningNumbers.every(num => num >= 1 && num <= 45)) {
      throw new Error("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(winningNumbers).size !== winningNumbers.length) {
      throw new Error("[ERROR] 당첨 번호는 중복될 수 없습니다.");
    }
  }

  // 보너스 번호 유효성 검사
  validateBonusNumber(bonusNumber, winningNumbers) {
    if (!bonusNumber) {
      throw new Error("[ERROR] 보너스 번호를 입력해야 합니다.");
    }

    if (isNaN(bonusNumber) || bonusNumber <= 0) {
      throw new Error("[ERROR] 보너스 번호는 양수여야 합니다.");
    }

    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    }
  }

  // 4. 당첨 통계 계산
  calculateWinnings(lottos, winningNumbers, bonusNumber) {
    const statistics = {
      3: 0,
      4: 0,
      5: 0,
      '5b': 0, // 보너스 번호와 함께 5개 일치
      6: 0,
    };

    lottos.forEach(lotto => {
      const matches = lotto.getNumbers().filter(num => winningNumbers.includes(num)).length;
      
      if (matches === 6) {
        statistics[6]++;
      } else if (matches === 5 && lotto.getNumbers().includes(bonusNumber)) {
        statistics['5b']++;
      } else if (matches === 5) {
        statistics[5]++;
      } else if (matches === 4) {
        statistics[4]++;
      } else if (matches === 3) {
        statistics[3]++;
      }
    });

    return statistics;
  }

  // 당첨 통계 출력
  printStatistics(statistics, totalAmount) {
    const prizeMoney = {
      3: 5000,
      4: 50000,
      5: 1500000,
      '5b': 30000000,
      6: 2000000000,
    };

    Console.print('\n당첨 통계');
    Console.print('---');
    
    for (let i = 3; i <= 5; i++) {
      const count = statistics[i];
      const prize = prizeMoney[i];
      Console.print(`${i}개 일치 (${prize.toLocaleString()}원) - ${count}개`);
    }

    const bonusCount = statistics['5b'];
    Console.print(`5개 일치, 보너스 볼 일치 (${prizeMoney['5b'].toLocaleString()}원) - ${bonusCount}개`);

    const count6 = statistics[6];
    Console.print(`6개 일치 (${prizeMoney[6].toLocaleString()}원) - ${count6}개`);

    const totalWinnings = Object.entries(statistics).reduce((sum, [key, count]) => {
      return sum + (prizeMoney[key] || 0) * count;
    }, 0);

    // 수익률 계산
    const profitRate = ((totalWinnings / totalAmount) * 100).toFixed(1);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }
}

export default App;
