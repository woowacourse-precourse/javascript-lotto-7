import { countMatches } from "./utils/countMatches";
import PRIZE_TABLE from "./constants/lottoPrizeTable";
import { LOTTO_RULES_CONSTANTS } from "./constants/lottoRules";

class WinningCalculator {
  #rankResult
  
  constructor(winningSet, generatedTickets) {
    this.winningNumbers = winningSet.winningNumbers;
    this.bonusNumbers = winningSet.bonusNumber;

    if(!Array.isArray(generatedTickets[0])) {
      this.generatedTickets = [generatedTickets];
    } else {
      this.generatedTickets = generatedTickets;
    }

    this.#rankResult = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };
    this.recordResult();
  }

  get result() {
    const totalProfit = this.caculateTotalProfit();
    const rateOfReturn = this.getRateOfReturn();
    return {
      rankResult: this.#rankResult,
      profit: totalProfit,
      rateOfReturn: rateOfReturn,
    };
  }

  recordResult() {
    for(let i = 0 ; i < this.generatedTickets.length ; i++) {
      this.recordSingleLotto(this.generatedTickets[i]);
    }
  }
  recordSingleLotto(generatedNumbers) {
    const count = this.countMatchedNumbers(generatedNumbers);
    this.assignRankToResult(count, generatedNumbers);
    
  }
  countMatchedNumbers(generatedNumbers) {
    return countMatches(this.winningNumbers, generatedNumbers);
  }
  assignRankToResult(count, generatedNumbers) {
    if(count === LOTTO_RULES_CONSTANTS.bonus_check_count) {
      if(this.isBonusMatched(generatedNumbers)){
        this.#rankResult.second++;
        return;
      }
      this.#rankResult.third++;
      return;
    }
    
    const prizeRank = Object.keys(PRIZE_TABLE).find(key => PRIZE_TABLE[key].matched === count);
    if (prizeRank) {
      this.#rankResult[prizeRank]++;
    }
  }
  isBonusMatched(generated) {
    return generated.includes(this.bonusNumbers);
  }

  getRateOfReturn() {
    const totalProfit = this.caculateTotalProfit();
    const rateOfReturn = this.calculateRateOfReturn(totalProfit);
    return rateOfReturn.toFixed(LOTTO_RULES_CONSTANTS.rate_decimal_point);
  }

  calculateRateOfReturn(totalProfit) {
    return totalProfit / (this.generatedTickets.length * LOTTO_RULES_CONSTANTS.ticket_price) 
    * LOTTO_RULES_CONSTANTS.percentage_multiplier;
  }

  caculateTotalProfit() {
    const totalProfit = Object.keys(PRIZE_TABLE).reduce(
      (acc, key) => acc + PRIZE_TABLE[key].prize * this.#rankResult[key], 0
    );
    return totalProfit;
  }
}

export default WinningCalculator;