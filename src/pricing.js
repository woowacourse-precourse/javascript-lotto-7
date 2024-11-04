//수익률 계산하기


class EarningsCalculator {
    constructor(lottoSpent, lottoWinning) {
        this.lottoSpent = lottoSpent;
        this.lottoWinning = lottoWinning;
    }

    calculateRate() {
        return ((this.lottoWinning / this.lottoSpent) * 100).toFixed(1); 
    }
}

export default EarningsCalculator;
