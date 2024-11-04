import Lotto from './Lotto.js';
import MissionUtils from '@woowacourse/mission-utils';

class App {
  async run() {}
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

export default App;
