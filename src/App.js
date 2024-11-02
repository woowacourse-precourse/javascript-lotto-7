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

async function getTargetLottoArray() {
  const message = '\n당첨 번호를 입력해 주세요.\n';
  const numbers = await MissionUtils.Console.readLineAsync(message);
  const stringArray = numbers.split(',');
  return stringArray.map(str => parseInt(str, 10));
}

async function getBonusNumber() {
  const message = '\n보너스 번호를 입력해주세요.\n';
  const number = await MissionUtils.Console.readLineAsync(message);
  return number;
}

// 한개의 배열과 당첨배열을 비교하고 몇개 일치했는지 반환하는 함수
function getMatchNumber(curLotto, targetLotto) {
  let matchNumber = 0;
  for (let i = 0; i < curLotto.length; i += 1) {
    if (targetLotto[i] === curLotto[i]) matchNumber += 1;
  }
  return matchNumber;
}

function isIncludeBonusNumber(bonusNumber, lotto) {
  return lotto.filter(number => number === bonusNumber);
}

// 여러개의 로또들을 받고 몇개 당첨됐는지 object로 정리하는 함수
function getAllNumberWon(lottos, targetLotto, bonusNumber) {
  const lottosNumber = Object.keys(lottos).length;
  const allLottoMatchNumber = {};
  for (let i = 0; i < lottosNumber; i += 1) {
    const curMatchNumber = getMatchNumber(lottos[i], targetLotto);
    allLottoMatchNumber[i] = curMatchNumber;
    allLottoMatchNumber.bonus = isIncludeBonusNumber(bonusNumber, lottos[i]);
  }
  return allLottoMatchNumber;
}

function printWinningStatistics() {
  MissionUtils.Console.print('당첨 통계');
  MissionUtils.Console.print('---');
}

class App {
  async run() {
    const cash = await getCashInHand();
    cashValidation(cash);
    const lottos = createLottos(cash);
    printLottoPurchase(lottos);

    const targetLotto = await getTargetLottoArray();
    const bonusNumber = await getBonusNumber();
    const winStatistics = getAllNumberWon(lottos, targetLotto, bonusNumber);
    console.log(winStatistics);
  }
}

export default App;
