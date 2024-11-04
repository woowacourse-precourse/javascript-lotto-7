class Winning {
  gradeArray;

  constructor(lottos, winningLottoNumber, bonusNumber) {
    this.matchCount = 0;
    this.lottos = lottos;
    this.bonusNumber = bonusNumber;
    this.winningLotto = winningLottoNumber;

    this.findWinningLottos();
  }

  findWinningLottos() {
    this.gradeArray = new Array(6).fill(0);
    this.lottos.forEach((lotto) => {
      this.gradeArray[this.findWinningCycle(lotto)]++;
      this.matchCount = 0;
    });
  }

  findWinningCycle(lotto) {
    lotto.forEach((num) => {
      if (this.winningLotto.indexOf(num) > -1) this.matchCount++;
    });

    if (this.matchCount === 5)
      if (lotto.indexOf(this.bonusNumber) > -1) return 2;

    return this.getGrade();
  }

  getGrade() {
    switch (this.matchCount) {
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
