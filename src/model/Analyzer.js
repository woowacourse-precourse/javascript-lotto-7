import { prizeMap } from '../config/prizeMap.js';
import {LOTTO} from '../constants/lotto.js';
import Rank from './Rank.js';

class Analyzer { 
  static analyze(purchaseAmount, winninNumber, lottos){
    const evaluateResult = lottos.map((lotto)=>new Rank(winninNumber.test(lotto)));
    const revenue = Analyzer.#getEvenue(evaluateResult);

    return {
      rateOfReturn: Analyzer.#getRateOfReturn(purchaseAmount, revenue),
      rankFrequency:Analyzer.#calculateRankFrequency(evaluateResult),
    }
  }

  static #getEvenue(prizes){
    return prizes.reduce((sum, rank) => {
      return (prizeMap.get(rank.value) ?? 0) + sum;
    }, 0);
  }

  static #getRateOfReturn(purchaseAmount, revenue){
    return Number(((revenue / purchaseAmount.amount) * 100).toFixed(1));
  }

  static #calculateRankFrequency(ranks){
    const rankMap = {};
    ranks.forEach((rank) => {
      if (rank.value !== LOTTO.NO_LUCK_RANK) { 
        rankMap[rank.value] = (rankMap[rank.value] ?? 0) + 1;
      }
    });

    return rankMap;
  }
}


export default Analyzer;