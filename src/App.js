import { MissionUtils } from '@woowacourse/mission-utils';

async function getCashInHand() {
  const message = '구입금액을 입력해 주세요.\n';
  const cash = await MissionUtils.Console.readLineAsync(message);
  return cash;
}

function cashValidation(string) {
  const number = parseFloat(string);
  if (Number.isNaN(number)) return false;
  const isNotDivided = number % 1000 !== 0;
  if (isNotDivided) return false;
  return true;
}

// 구매금액 입력 받고, 복권들 object 반환
function createLottos(cash) {
  const numberOfLotto = cash / 1000;
  const lottos = {};
  for (let i = 0; i < numberOfLotto; i += 1) {
    const noSorted = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottos[i] = noSorted.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  }
  return lottos;
}

function printLottoPurchase(lottos) {
  const lottosNumber = Object.keys(lottos).length;
  MissionUtils.Console.print(`\n${lottosNumber}개를 구매했습니다.`);
  for (let i = 0; i < lottosNumber; i += 1) {
    MissionUtils.Console.print(lottos[i]);
  }
}

async function getWinningNumber() {
  const message = '당첨 번호를 입력해 주세요.\n';
  const numbers = await MissionUtils.Console.readLineAsync(message);
}

class App {
  async run() {
    const cash = await getCashInHand();
    cashValidation(cash);
    const lottos = createLottos(cash);
    printLottoPurchase(lottos);

    getWinningNumber();
  }
}

export default App;
