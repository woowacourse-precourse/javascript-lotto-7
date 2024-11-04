// 당첨 여부를 계산하는 역할
import { PRIZE_TABLE } from "./Constants";

class LottoResult {
    constructor() {
        this.rankCounts = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };
        this.totalProfit = 0;
    }

    calculateRank(purchasedLottos, winningNumbers, bonusNumber){
        purchasedLottos.forEach(lotto => {
            const matchCount = this.countMatchingNumbers(lotto.getNumbers(), winningNumbers); //matchcount
            const isBonusMatched = lotto.getNumbers().includes(bonusNumber); //isBonusMatched

            const rank = this.getRank(matchCount, isBonusMatched);
            if(rank) {
                this.rankCounts[rank] += 1;
                this.totalProfit += this.getPrize(rank);
            }
        });
    }

    countMatchingNumbers(lottoNumbers, winningNumbers) {
        return lottoNumbers.filter(num => winningNumbers.includes(num)).length; //includes() 포함되어 있는 지 확인
    } // 매칭된 수 반환

    getRank(matchCount,isBonusMatched){
        if(matchCount === 6) return 1;
        if(matchCount === 5 && isBonusMatched) return 2;
        if(matchCount === 5) return 3;
        if(matchCount === 4) return 4;
        if(matchCount === 3) return 5;
        return null;
    }

    getPrize(rank) {
        return PRIZE_TABLE[rank] || 0;
    }

    calculateProfit(purchaseAmount) {
        const profitRate = (this.totalProfit / purchadeAmount) * 100;
        return profitRate.toFixed(1); // 소수점 1자리까지 반올림
    }

    getStatistics(){
        return {
            rankCounts: this.rankCounts,
            totalProfit: this.totalProfit,
        };
    }

}

export default LottoResult;