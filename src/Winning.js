class Winning {
  gradeArray;

  constructor(lottos, winningLottoNumber) {
    this.matchCount = 0;
    this.lottos = lottos;
    this.bonusNumber = winningLottoNumber[6];
    winningLottoNumber.pop();
    this.winningLotto = winningLottoNumber;

    this.findWinningLottos(lottos);
  }

  findWinningLottos(lottos) {
    this.gradeArray = new Array(6).fill(0);
    lottos.forEach((lotto) => {
      this.gradeArray[this.findWinningCycle(lotto)]++;
    });
  }

  findWinningCycle(lotto) {
    lotto.forEach((num) => {
      if (this.winningLotto.indexOf(num) > -1) this.matchCount++;
    });

    if (this.matchCount === 5)
      if (this.winningLotto.indexOf(this.bonusNumber) > -1) return 2;

    return this.getGrade(this.matchCount);
  }

  getGrade(agreementCount) {
    switch (agreementCount) {
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
  }
}

export default Winning;
