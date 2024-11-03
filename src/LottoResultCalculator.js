class LottoResultCalculator{
    constructor(){
        this.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        this.totalPrize = 0;
        this.returnOfRate = 0;
    }

    static PRIZE_MONEY = {
        1: 2000000000,
        2: 30000000,
        3: 1500000,
        4: 50000,
        5: 5000,
    };

    calculateResults(winningNums, bonusNum, lottos){
        lottos.forEach((lottoNumbers) => {
            const rank = this.getRank(lottoNumbers, winningNums, bonusNum);
            if(rank !== 0){
                this.results[rank] += 1;
                this.totalPrize += this.PRIZE_MONEY[rank];
            }
        });
    }

    getRank(lottoNumbers, winnigNums, bonusNum){
        const matchedCount = lottoNumbers.filter(num => winnigNums.includes(num)).length;
        const hasBonus = lottoNumbers.includes(bonusNum);

        if(matchedCount === 6) return 1;
        if(matchedCount === 5 && hasBonus) return 2;
        if(matchedCount === 5) return 3;
        if(matchedCount === 4) return 4;
        if(matchedCount === 3) return 5;

        return 0;
    }

    calculateRate(purchaseAmount){
        this.returnOfRate = this.totalPrize / purchaseAmount * 100;
    }

    printLottoResult(){
        Console.print(`3개 일치 (5,000원) - ${this.results[5]}개`);
        Console.print(`4개 일치 (50,000원) - ${this.results[4]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${this.results[3]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.results[2]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${this.results[1]}개`);
    }

    printReturnOfRate(){
        Console.print(`총 수익률은 ${this.returnOfRate}%입니다.`);
    }
}

export default LottoResultCalculator;