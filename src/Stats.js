import PRIZES from './constants';

class Stats {
  totalPrize;
  earningRatio;

  constructor(amount, lottos, lottoNumber, bonusNumber) {
    this.totalPrize = 0;
    this.amount = amount;
    this.lottos = [...lottos];
    this.lottoNumber = lottoNumber;
    this.bonusNumber = bonusNumber;
    this.prizeCount = new Map(
      ['1', 0],
      ['2', 0],
      ['3', 0],
      ['4', 0],
      ['5', 0],
      ['0', 0],
    );

    this.countEachPrize();
    this.calculateEarningRatio();
  }

  countEachPrize() {
    this.lottos.forEach((element) => {
      const prize = element.checkPrize(this.lottoNumber, this.bonusNumber);
      const count = get(prize);
      this.prizeCount.set(prize, count + 1);

      const prizeToNum = Number(prize);
      this.totalPrize =
        this.totalPrize + Number(PRIZES[prizeToNum].split(',').join(''));
    });
  }

  calculateEarningRatio() {
    this.earningRatio =
      Math.round((Number(this.totalPrize) / Number(this.amount)) * 10) / 10;
  }
}

export default Stats;
