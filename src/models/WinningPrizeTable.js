class WinningPrizeTable {
    constructor(checkNumber) {
        this.winningPrizeTable = {
            '3개 일치 (5,000원)': 0,
            '4개 일치 (50,000원)': 0,
            '5개 일치 (1,500,000원)': 0,
            '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
            '6개 일치 (2,000,000,000원)': 0,
        };        
        this.checkNumber = checkNumber;
    }

    updateWinningPrizeTable() {
        this.checkNumber.checkNumbers();
        const results = this.getMatchingResult();

        results.forEach(result => {
            if (result[0] === 3) this.winningPrizeTable['3개 일치 (5,000원)'] += 1;
            if (result[0] === 4) this.winningPrizeTable['4개 일치 (50,000원)'] += 1;
            if (result[0] === 5 && !result[1]) this.winningPrizeTable['5개 일치 (1,500,000원)'] += 1;
            if (result[0] === 5 && result[1]) this.winningPrizeTable['5개 일치, 보너스 볼 일치 (30,000,000원)'] += 1;
            if (result[0] === 6) this.winningPrizeTable['6개 일치 (2,000,000,000원)'] += 1;
        });
    }

    getMatchingResult() {
        return this.checkNumber.matchingResult;
    }
}

export default WinningPrizeTable;
