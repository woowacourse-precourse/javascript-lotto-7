import { Console, Random } from '@woowacourse/mission-utils';

async function getPurchaseAmount() {
  const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return Number(input);
}

class App {
  async run() {
    let seedMoney = await getPurchaseAmount();
  }
}

export default App;
