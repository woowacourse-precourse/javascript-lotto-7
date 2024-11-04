import Lotto from './Lotto.js';
import MissionUtils from '@woowacourse/mission-utils';

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
}

// 1. 로또 구입 금액 입력 처리
async readLottoPurchaseAmount(){
  const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
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
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottos.push(new Lotto(numbers.sort((a, b) => a - b))); //오름차순 정렬
  }

  return lottos;
}

// 발행된 로또 번호 출력
displayLottoNumbers(lottos){
  MissionUtils.Console.print(`${lottos.length}개를 구매했습니다.`);
  lottos.forEach(lotto => {
    MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
  });
}

// 3. 당첨 번호 및 보너스 번호 입력 처리
async readWinningNumbers(){
  const winningNumbersInput = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  const winningNumbers = winningNumbersInput.split(',').map(Number);

  // 당첨 번호, 보너스 번호 예외 처리
  this.validateWinningNumbers(winningNumbers);

  const bonusNumberInput = await MissionUtils.Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  const bonusNumber = Number(bonusNumberInput);

  if(bonusNumber < 1 || bonusNumber > 45){
    throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  }
    
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

// 4. 당첨 통계 계산
calculateWinnings(lottos, winningNumbers, bonusNumber) {
  const statistics = {
    3: 0,
    4: 0,
    5: 0,
    5 + 'b': 0, // 보너스 번호와 함께 5개 일치
    6: 0,
  };

  lottos.forEach(lotto => {
    const matches = lotto.getNumbers().filter(num => winningNumbers.includes(num)).length;
    
    if (matches === 6) {
      statistics[6]++;
    } else if (matches === 5 && lotto.getNumbers().includes(bonusNumber)) {
      statistics[5 + 'b']++;
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
    5 + 'b': 30000000,
    6: 2000000000,
  };

  Object.entries(statistics).forEach(([key, count]) => {
    if (count > 0) {
      MissionUtils.Console.print(`${key}개 일치 (${prizeMoney[key]}원) - ${count}개`);
    }
  });

  const totalWinnings = Object.entries(statistics).reduce((sum, [key, count]) => {
    return sum + (prizeMoney[key] || 0) * count;
  }, 0);

  // 수익률 계산
  const profitRate = ((totalWinnings / totalAmount) * 100).toFixed(1);
  MissionUtils.Console.print(`총 수익률은 ${profitRate}%입니다.`);
}


export default App;
