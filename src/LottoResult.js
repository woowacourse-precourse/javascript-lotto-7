class LottoResult {
  #lottoList;
  #winningLotto;
  #bonusNumber;
  #result = [0, 0, 0, 0, 0]; // 5등 (3개 일치) -> 1등 (6개 일치) 순서
  #prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];

  constructor(lottoList, winningLotto, bonusNumber) {
    this.#lottoList = lottoList; // Lotto[]
    this.#winningLotto = winningLotto; // number[]
    this.#bonusNumber = bonusNumber; // number
    this.#calculate();
  }

  #calculate() {
    // LottoList 순회 -> 각 로또 순회 -> 각 번호가 WinningLotto 안에 포함이 되었는가 계산, 또는 보너스 번호와 일치하는가
    for (const lotto of this.#lottoList) {
      let matchNum = 0; // 당첨 번호 일치 개수
      let isBonusMatch = false; // 보너스 번호 일치 여부
      for (const num of lotto.getLotto()) {
        if (this.#winningLotto.includes(num)) {
          matchNum += 1;
        }
        if (this.#bonusNumber === num) {
          isBonusMatch = true;
        }
      }
      this.#saveResult(matchNum, isBonusMatch);
    }
  }

  #saveResult(matchNum, isBonusMatch) {
    // 각 로또마다 결과 저장
    switch (matchNum) {
      case 3:
        this.#result[0]++;
        break;
      case 4:
        this.#result[1]++;
        break;
      case 5:
        if (isBonusMatch) {
          this.#result[3]++;
          return;
        }
        this.#result[2]++;
        break;
      case 6:
        this.#result[4]++;
        break;
      default:
        break;
    }
  }

  getLottoResult() {
    return this.#result;
  }

  getReturnRate() {
    let profit = 0;
    const lottoPrice = this.#lottoList.length * 1000;
    this.#result.forEach((result, index) => {
      profit += result * this.#prizeMoney[index];
    });

    return ((profit / lottoPrice) * 100).toFixed(1);
  }
}

export default LottoResult;
