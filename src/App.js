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

function generateLottos(amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    array.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
  }
  return array;
}

function printLottos(lottos) {
  Console.print(`\n${lottos.length}개를 구매했습니다.\n`);
  lottos.forEach((el) => {
    Console.print(el);
  });
}

function validatePurchaseAmount(input) {
  const num = Number(input);
  if (!isNaN(num) && num % 1000 === 0 && num > 0) return true;
}

class App {
  async run() {
    let seedMoney = await getPurchaseAmount();
    let amountOfLottos = seedMoney / 1000;
    let lottos = generateLottos(amountOfLottos);
    printLottos(lottos);
  }
}

export default App;
