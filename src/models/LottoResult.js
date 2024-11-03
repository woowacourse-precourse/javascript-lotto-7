class LottoResult {
  static calculateWinningLottoNumber(lottoList, winningNumbers, bonusNumber) {
    const winningLottoNumber = [0, 0, 0, 0, 0];
    lottoList.forEach((lotto) => {
      const matches = winningNumbers.filter((num) =>
        lotto.includes(num),
      ).length;
      if (matches === 3) winningLottoNumber[0] += 1;
      if (matches === 4) winningLottoNumber[1] += 1;
      if (matches === 5) winningLottoNumber[2] += 1;
      if (matches === 6) winningLottoNumber[4] += 1;
      if (matches === 5 && lotto.includes(bonusNumber))
        winningLottoNumber[3] += 1;
    });
    return winningLottoNumber;
  }

  static calculateRateOfReturn(purchaseAmount, winningLottoNumber) {
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    const totalPrize = winningLottoNumber.reduce(
      (sum, count, index) => sum + count * prizeMoney[index],
      0,
    );

    return ((totalPrize / purchaseAmount) * 100).toFixed(1);
  }
}

export default LottoResult;
