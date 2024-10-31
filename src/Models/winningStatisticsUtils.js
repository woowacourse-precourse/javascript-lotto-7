import { Console } from '@woowacourse/mission-utils';

const matchCounts = {
  threeMatches: 0,
  fourMatches: 0,
  fiveMatches: 0,
  fiveMatchesAndBonus: 0,
  sixMatches: 0,
};

// TODO: 리펙토링 - 출력하는건 outputView.js로 옮기기 -> 메게변수 3개 써도 되는지 확인
const countLottoWinning = (winningNumbers, lottoList, getWinningNumPlusBonusNum) => {
  lottoList.forEach((element) => {
    const matchFilter = element.filter((it) => winningNumbers.includes(it)).length;
    for (let i = 3; i < 7; i += 1) {
      const arr = i - 3;
      if (matchFilter === i) {
        matchCounts[Object.keys(matchCounts)[arr]] += 1;
      }
    }

    if (element.filter((it) => getWinningNumPlusBonusNum.includes(it)).length === 5) {
      matchCounts[Object.keys(matchCounts)[3]] += 1;
    }
  });
};

const getWinningNumPlusBonus = (winningNum, bonusNum) => {
  const getWinningNumPlusBonusNum = winningNum;
  getWinningNumPlusBonusNum.push(Number(bonusNum));

  return getWinningNumPlusBonusNum;
};

const produceStatistics = (winningNum, bonusNumber, lottoList) => {
  const getWinningNumPlusBonusNum = getWinningNumPlusBonus(winningNum, bonusNumber);

  countLottoWinning(winningNum, lottoList, getWinningNumPlusBonusNum);

  // TODO: 리펙토링 - 출력하는건 outputView.js로 옮기기
  Console.print(``);
  Console.print(`당첨 통계`);
  Console.print(`---`);
  Console.print(`3개 일치 (5,000원) - ${matchCounts.threeMatches}개`);
  Console.print(`4개 일치 (50,000원) - ${matchCounts.fourMatches}개`);
  Console.print(`5개 일치 (1,500,000원) - ${matchCounts.fiveMatches}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCounts.fiveMatchesAndBonus}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${matchCounts.sixMatches}개`);
};

const calculateWinningAmount = () => {
  const winningAmount =
    matchCounts.threeMatches * 5000 +
    matchCounts.fourMatches * 50000 +
    matchCounts.fiveMatches * 1500000 +
    matchCounts.fiveMatchesAndBonus * 30000000 +
    matchCounts.sixMatches * 2000000000;

  return winningAmount;
};

export { produceStatistics, calculateWinningAmount };
