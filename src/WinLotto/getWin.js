const getGrade = (winNumber) => {
  //5개번호 + 보너스 번호 2등은 해당 함수에서 등수 내지 않음
  switch (winNumber) {
    case 6:
      return 1;
    case 5:
      return 3;
    case 4:
      return 4;
    case 3:
      return 5;
    default:
      return;
  }
};

const getWinCycle = (lotto, winLotto, bonusNumber) => {
  let winNumber = 0;

  lotto.forEach((num) => {
    if (winLotto.indexOf(num) > -1) winNumber++;
  });

  if (winNumber === 5) {
    if (lotto.indexOf(bonusNumber) > -1) return 2;
  }

  return getGrade(winNumber);
};

export const getWin = (lottos, winLotto, bonusNumber) => {
  const gradeArr = new Array(6).fill(0);
  lottos.forEach((lotto) => {
    gradeArr[getWinCycle(lotto, winLotto, bonusNumber)]++;
  });

  return gradeArr;
};
