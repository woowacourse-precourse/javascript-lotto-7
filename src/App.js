import { Console, Random } from '@woowacourse/mission-utils';

// 입력 모듈

async function getPurchaseAmount() {
  let input = '';
  while (true) {
    input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    if (validatePurchaseAmount(input)) break;
    Console.print('[ERROR] 구입금액은 1,000원 단위여야 합니다.');
  }
  return Number(input);
}

async function getWinningNumbers() {
  let input = '';
  while (true) {
    input = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');
    if (validateWinningNumbers(input)) break;
    Console.print(
      '[ERROR] 당첨 번호는 6개의 숫자와 쉼표로 이루어져야 하며, 각각의 숫자는 1~45 사이의 숫자여야 합니다.'
    );
  }
  return parseWinningNumbers(input);
}

async function getBonusNumber() {
  let input = '';
  while (true) {
    input = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
    if (validateBonusNumber(input)) break;
    Console.print('[ERROR] 보너스 번호는 1~45 사이의 숫자여야 합니다.');
  }
  return Number(input);
}

// 생성 모듈

function generateLottos(amount) {
  let array = [];
  for (let i = 0; i < amount; i++) {
    array.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
  }
  return array;
}

// 처리 모듈

function parseWinningNumbers(input) {
  return input
    .split(',')
    .map((e) => Number(e))
    .sort((a, b) => a - b);
}

// 출력 모듈

function printLottos(lottos) {
  Console.print(`\n${lottos.length}개를 구매했습니다.`);
  lottos.forEach((el) => {
    Console.print(el);
  });
}

function printResult(lottos, myLotto, bonusNumber) {
  Console.print('\n당첨 통계\n---\n');
}

// 검사 모듈

function validatePurchaseAmount(input) {
  const num = Number(input);
  if (!isNaN(num) && num % 1000 === 0 && num > 0) return true;
}

function validateWinningNumbers(input) {
  const numbers = parseWinningNumbers(input);
  if (
    !numbers.some((x) => isNaN(x)) &&
    numbers.length === 6 &&
    numbers.every((x) => x > 0 && x < 46)
  )
    return true;
}

function validateBonusNumber(input) {
  const number = Number(input);
  if (!isNaN(number) && number >= 1 && number <= 45) return true;
}

class App {
  async run() {
    let seedMoney = await getPurchaseAmount();
    let amountOfLottos = seedMoney / 1000;
    let lottos = generateLottos(amountOfLottos);
    printLottos(lottos);
    let winningNumbers = await getWinningNumbers();
    let bonusNumber = await getBonusNumber();
  }
}

export default App;
