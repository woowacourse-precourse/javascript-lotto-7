class LottoMatcher {
  #winningNumber;

  #bonusNumber;

  constructor(winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;
  }

  getWinningLottos(lottoNumberList) {
    return lottoNumberList.reduce(
      (acc, lottoNumbers) => {
        const { matchCount, isContainBounusNumber } =
          this.#compareLottoToWinningNumber(lottoNumbers);
        if (matchCount === 6) acc[1] += 1;
        if (matchCount === 5 && isContainBounusNumber) acc[2] += 1;
        if (matchCount === 5) acc[3] += 1;
        if (matchCount === 4) acc[4] += 1;
        if (matchCount === 3) acc[5] += 1;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    );
  }

  #compareLottoToWinningNumber(lottoNumbers) {
    const [matchCount, isContainBounusNumber] = this.#winningNumber.reduce(
      (acc, cur) => {
        if (lottoNumbers.includes(cur)) acc[0] += 1;
        return acc;
      },
      [0, lottoNumbers.includes(this.#bonusNumber)],
    );

    return { matchCount, isContainBounusNumber };
  }
}

export default LottoMatcher;
