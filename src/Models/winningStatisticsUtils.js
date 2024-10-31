import { Console } from '@woowacourse/mission-utils';

let threeMatches = 0;
let fourMatches = 0;
let fiveMatches = 0;
let fiveMatchesAndBonus = 0;
let SixMatches = 0;

// TODO: 리펙토링 - 출력하는건 outputView.js로 옮기기 -> 메게변수 3개 써도 되는지 확인
const produceStatistics = (winningNumbers, bonusNumber, lottoList) => {
  const winningNumPlusBonusNum = winningNumbers;
  winningNumPlusBonusNum.push(Number(bonusNumber));

  lottoList.forEach((element) => {
    if (element.filter((it) => winningNumbers.includes(it)).length === 3) {
      threeMatches += 1;
    }
    if (element.filter((it) => winningNumbers.includes(it)).length === 4) {
      fourMatches += 1;
    }
    if (element.filter((it) => winningNumbers.includes(it)).length === 5) {
      fiveMatches += 1;
    }
    if (element.filter((it) => winningNumPlusBonusNum.includes(it)).length === 5) {
      fiveMatchesAndBonus += 1;
    }
    if (element.filter((it) => winningNumbers.includes(it)).length === 6) {
      SixMatches += 1;
    }
  });
  // TODO: 리펙토링 - 출력하는건 outputView.js로 옮기기
  Console.print(``);
  Console.print(`당첨 통계`);
  Console.print(`---`);
  Console.print(`3개 일치 (5,000원) - ${threeMatches}개`);
  Console.print(`4개 일치 (50,000원) - ${fourMatches}개`);
  Console.print(`5개 일치 (1,500,000원) - ${fiveMatches}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveMatchesAndBonus}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${SixMatches}개`);
};

const calculateWinningAmount = () => {
  const winningAmount =
    threeMatches * 5000 +
    fourMatches * 50000 +
    fiveMatches * 1500000 +
    fiveMatchesAndBonus * 30000000 +
    SixMatches * 2000000000;

  return winningAmount;
};

export { produceStatistics, calculateWinningAmount };
