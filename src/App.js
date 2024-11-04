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

export default App;
