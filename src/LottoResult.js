class LottoResult {
    constructor(winningNumbers, bonusNumber) {
        this.winningNumbers = winningNumbers;
        this.bonusNumber = bonusNumber;
    }

    getPrize(lotto) {
        const matchedNumbers = lotto.getNumbers().filter(number =>
            this.winningNumbers.includes(number)
        );
        const matchCount = matchedNumbers.length;
        const isBonusMatched = lotto.getNumbers().includes(this.bonusNumber);

        if (matchCount === 6) return { rank: 1, prize: 2000000000 };
        if (matchCount === 5 && isBonusMatched) return { rank: 2, prize: 30000000 };
        if (matchCount === 5) return { rank: 3, prize: 1500000 };
        if (matchCount === 4) return { rank: 4, prize: 50000 };
        if (matchCount === 3) return { rank: 5, prize: 5000 };
        return { rank: 0, prize: 0 };
    }
}
  
export default LottoResult;
