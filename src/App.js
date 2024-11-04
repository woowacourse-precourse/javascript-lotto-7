import {Random, Console} from '@woowacourse/mission-utils'
import Lotto from "./Lotto.js";

const winPriceString = ["2,000,000,000", "30,000,000", "1,500,000", "50,000", "5,000"];
const winPriceNumber = [2000000000, 30000000, 1500000, 50000, 5000];
const firRankMatch = 6;
const maxRank = 5, secRankMatch = 5;

const moneyUnit = 1000;

class App {
  async run() {

    let correctInput = false;

    let totalMoney = 0;
    while(!correctInput){
      totalMoney = await Console.readLineAsync("구매할 금액을 입력해주세요.\n");
      if(totalMoney % moneyUnit !== 0){
        Console.print("[ERROR] 구입 금액은 1000원 단위여야 합니다.");
        continue;
      }
      correctInput = true;
    }

    const lottoCount = totalMoney / moneyUnit;
    Console.print(`${lottoCount}개를 구매했습니다.`);

    const lottoNumber = [];
    for(let i = 0; i < lottoCount; i++){
      lottoNumber.push(new Lotto(Random.pickUniqueNumbersInRange(1,45,6)));
    }

    lottoNumber.map((lotto)=>{
      const output = Object.values(lotto.getNumber()).join(', ');
      Console.print(`[${output}]`);
    })
    Console.print("");

    correctInput = false;
    let winString = "";
    //while(!correctInput){
      winString = await Console.readLineAsync("당첨 번호를 입력해주세요 : ");
      const winNumber = winString.split(',');

      winNumber.map((num)=>{
        num = Number.parseInt(num);
      })
      const winLotto = new Lotto(winNumber);
    //}

    const bonusNumber = await Console.readLineAsync("보너스 번호를 입력해주세요 : ");

    if(isNaN(bonusNumber)){
      throw new Error("[ERROR] : 로또 번호는 숫자여야합니다.")
    }

    const minNum = 1;
    const maxNum = 45;
    winNumber.map((winNum)=>{
      if(winNum === bonusNumber){
        throw new Error("[ERROR] : 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
      }
      if(bonusNumber < minNum || bonusNumber > maxNum){
        throw new Error(`[ERROR] : 보너스 번호는 ${minNum}부터 ${maxNum}까지의 숫자여야 합니다.`);
      }
    })

    Console.print("당첨 통계\n---");

    const winList = new Array(maxRank).fill(0);
    lottoNumber.map((lotto)=>{
      const rank = convertMatchCountToRank(lotto, winLotto, bonusNumber);
      if(rank <= maxRank){
        winList[rank-1]++;
      }

    });

    let result = "";
    let earnMoney = 0;

    winList.map((winEntry,index)=>{
      let matchBonus = " ";
      const rank = index + 1;
      let matchCount = convertRankToMatchCount(rank);
      if(matchCount === -secRankMatch){
        matchBonus = ", 보너스 볼 일치 ";
        matchCount = secRankMatch;
      }
      earnMoney += winPriceNumber[index]*winEntry;

      const resultEntry = `${matchCount}개 일치${matchBonus}(${winPriceString[index]}원) - ${winEntry}개`;
      result = resultEntry + "\n" + result;
    })
    Console.print(result);

    Console.print(`총 수익률은 ${calRevenueRate(totalMoney, earnMoney)}%입니다.`);
  }
}

function calRevenueRate(costMoney, earnMoney){
  const RevenueRate = (earnMoney / costMoney) * 100;
  return RevenueRate.toFixed(1);
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
