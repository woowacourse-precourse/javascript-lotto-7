import {Random, Console} from '@woowacourse/mission-utils'
import Lotto from "./Lotto.js";

const winPrice = ["2,000,000,000", "30,000,000", "1,500,000", "50,000", "5,000"];
const firRankMatch = 6;
const maxRank = 5, secRankMatch = 5;

const moneyUnit = 1000;

class App {
  async run() {
    const totalMoney = await Console.readLineAsync("구매할 금액을 입력해주세요 : ");

    const lottoCount = totalMoney / moneyUnit;

    /*
    const lottoNumber = [];
    for(let i = 0; i < lottoCount; i++){
      lottoNumber.push(new Lotto(Random.pickUniqueNumbersInRange(1,45,6)));
    }
    */

    const lottoNumber = [new Lotto([1,2,3,4,5,6]),
    new Lotto([45, 43, 42, 41, 40, 39]),
      new Lotto([5,6,4,2,7,8]), new Lotto([2,3,4,5,6,7]),
      new Lotto([4,5,6,7,8,9])];

    lottoNumber.map((lotto)=>{
      Console.print(lotto.getNumber());
    })
    Console.print("");

    const winString = await Console.readLineAsync("당첨 번호를 입력해주세요 : ");
    const winNumber = winString.split(',');

    winNumber.map((num)=>{
      num = Number.parseInt(num);
    })

    const winLotto = new Lotto(winNumber);

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요 : ");

    Console.print("당첨 통계\n---");

    const winList = new Array(maxRank).fill(0);
    lottoNumber.map((lotto)=>{
      const rank = convertMatchCountToRank(lotto, winLotto, bonusNumber);
      if(rank <= maxRank){
        winList[rank-1]++;
      }

    });

    let result = "";
    winList.map((winEntry,index)=>{
      let matchBonus = " ";
      const rank = index + 1;
      let matchCount = convertRankToMatchCount(rank);
      if(matchCount === -secRankMatch){
        matchBonus = ", 보너스 볼 일치";
        matchCount = secRankMatch;
      }
      const resultEntry = `${matchCount}개 일치${matchBonus}(${winPrice[index]}원) - ${winEntry}개\n`;

      result = result + resultEntry;
    })
    Console.print(result);

    Console.print("총 수익률은 입니다.");

  }
}

function convertRankToMatchCount(rank){
  const tool = 8;
  const secWin = 2;
  const firWin = 1;

  let matchCount =  tool - rank;
  if(rank === secWin)
    return -5;//일단 5등처리
  if(rank === firWin)
    return 6;

  return matchCount;
}

function convertMatchCountToRank(lotto, winLotto, bonusNumber){
  const tool = 8;
  let matchCount = lotto.isLottoWin(lotto, winLotto);

  if(matchCount === firRankMatch){
    matchCount++;
  }
  if(matchCount === secRankMatch && lotto.isBonus(bonusNumber)){
    matchCount++;
  }

  return (tool - matchCount);
}

export default App;
