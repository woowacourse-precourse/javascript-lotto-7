class WinningResult {
  async result(winningNumbers, lottos, bonusNumber) {
    const countMap = { 3: 0, 4: 0, 5: 0, "5+bonus": 0, 6: 0 };

    lottos.forEach((lotto) => {
      const matchCount = lotto.filter((num) =>
        winningNumbers.includes(num)
      ).length;
      if (matchCount === 5 && lotto.includes(bonusNumber)) {
        countMap["5+bonus"] += 1;
      } else if (countMap[matchCount] !== undefined) {
        countMap[matchCount] += 1;
      }
    });

    return countMap;
  }
}

export default WinningResult;
