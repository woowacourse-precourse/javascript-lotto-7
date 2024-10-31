import { MissionUtils } from '@woowacourse/mission-utils';


async function getCashInHand(){
const message =
      '구입금액을 입력해 주세요.\n';
    const cash = await MissionUtils.Console.readLineAsync(message);
    return cash;
}


function cashValidation(string){
  const number = parseFloat(string);
  if(isNaN(number))return false;
  const isNotDivided = (number % 1000) !== 0;
  if(isNotDivided) return false;
  return true;
}

/**
 * 
 * @param {*} lottos
 */
function printLottoPurchase(lottos){
  const lottosNumber = lottos.length;
  MissionUtils.Console.print(`${lottosNumber}개를 구매했습니다.
`);

}

class App {
  async run() {
    const cash = await getCashInHand();
    cashValidation(cash);

  }
}

export default App;
