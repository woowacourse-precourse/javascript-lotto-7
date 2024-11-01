class LottoCheck {
  constructor(lottodata, winner, bonus) {
    this.lottodata = lottodata;
    this.winner = winner;
    this.bonus = bonus;
    this.arr = { 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };
    this.Check();
  }
  Check() {
    this.lottodata.forEach((lotto) => {
      const numbers = lotto.getLotto();
      let cnt = 0;
      let bonus = 0;
      this.winner.forEach((win) => {
        if (numbers.includes(win)) {
          cnt += 1;
        }
      });
      if (numbers.includes(this.bonus)) bonus = 1;

      if (this.arr.hasOwnProperty(cnt)) {
        this.arr[cnt] += 1;
        if (cnt === 5 && bonus === 1) {
          this.arr["bonus"] = 1;
        }
      }
    });
  }
  Sum() {
    const total =
      this.arr[3] * 5000 +
      this.arr[4] * 50000 +
      this.arr[5] * 1500000 +
      this.arr["bonus"] * 30000000 +
      this.arr[6] * 2000000000;

    return total;
  }
  CheckResult() {
    return this.arr;
  }
}
export default LottoCheck;
