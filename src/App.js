import { Console, Random } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  let input = '';
  while (true) {
    input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (validatePurchaseAmount(input)) break;
    Console.print('[ERROR] 구입금액은 1,000원 단위여야 합니다!!');
  }
  return Number(input);
}

function validatePurchaseAmount(input) {
  const num = Number(input);
  if (!isNaN(num) && num % 1000 === 0 && num > 0) return true;
}

class App {
  async run() {
    let seedMoney = await getPurchaseAmount();
  }
}

export default App;
