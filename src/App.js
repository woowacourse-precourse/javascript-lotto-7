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
// 함수 내부에서 object 수정하는거 나중에 리팩토링 해야함.
function addBonusNumber(matchNumber, bonusNumber, lotto, winStatistics) {
  const haveBonus = lotto.filter(number => number === bonusNumber);
  if (matchNumber === 5 && haveBonus) {
    winStatistics.bonus += 1;
    winStatistics[5] -= 1;
  }
}

// 여러개의 로또들을 받고 몇개 당첨됐는지 object로 정리하는 함수
function getAllNumberWon(lottos, targetLotto, bonusNumber) {
  const lottosNumber = Object.keys(lottos).length;
  const winStatistics = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };
  for (let i = 0; i < lottosNumber; i += 1) {
    const curMatchNumber = getMatchNumber(lottos[i], targetLotto);
    winStatistics[curMatchNumber] += 1;
    addBonusNumber(curMatchNumber, bonusNumber, lottos[i], winStatistics);
  }
  return winStatistics;
}

function printWinningStatistics(winStatistics) {
  MissionUtils.Console.print('당첨 통계');
  MissionUtils.Console.print('---');
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${winStatistics[3]}개`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${winStatistics[4]}개`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winStatistics[5]}개`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winStatistics.bonus}개`,
  );
  MissionUtils.Console.print(
    `6개 일치 (2,000,000,000원) - ${winStatistics[6]}개`,
  );
}

// 이부분 상수로 만들어서 for문으로 간략화 시킬수있을듯
function getGetCash(winStatistics) {
  let curCash = 0;
  curCash += winStatistics[3] * 5000;
  curCash += winStatistics[4] * 50000;
  curCash += winStatistics[5] * 1500000;
  curCash += winStatistics.bonus * 30000000;
  curCash += winStatistics[6] * 2000000000;
  return curCash;
}

function getRateOfReturn(buyCash, getCash) {
  if (getCash === 0) return 0;
  const rateOfReturn = ((getCash / buyCash) * 100).toFixed(1);
  return rateOfReturn;
}

function printRateOfReturn(rateOfReturn) {
  MissionUtils.Console.print(`총 수익률은 ${rateOfReturn}%입니다.`);
}
class App {
  async run() {
    const buyCash = await getCashInHand();
    cashValidation(buyCash);
    const lottos = createLottos(buyCash);
    printLottoPurchase(lottos);

    const targetLotto = await getTargetLottoArray();
    const bonusNumber = await getBonusNumber();
    const winStatistics = getAllNumberWon(lottos, targetLotto, bonusNumber);
    printWinningStatistics(winStatistics);
    const getCash = getGetCash(winStatistics);
    const rateOfReturn = getRateOfReturn(buyCash, getCash);
    printRateOfReturn(rateOfReturn);
  }
}

export default App;
