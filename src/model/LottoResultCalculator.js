import { countWinnings } from '../util/util.js';
import { LOTTO_PRIZE } from '../config/numberConfig.js';


class LottoResultCalculator {

    compareWithWinningNumbers(randomNumbers, winningNumbers) {
      const remainingNumbers = randomNumbers.map(array => {
        return array.filter(num => !winningNumbers.includes(num)); // chat GPT : map, filter, includes
      }).filter(array => array.length > 0 && array.length < 6);
      
      const firstPlaceWinning = randomNumbers.map(array => {
        return array.filter(num => winningNumbers.includes(num));
      }).filter(array => array.length === 6);
      return {
        remainingNumbers,
        firstPlaceWinning
      };
    }
  
    compareWithBonusNumber (initialRemainingNumbers, bonusNumber) {
      const finalRemainingNumbers = initialRemainingNumbers.map(array =>{
        return array.filter(num => num !== bonusNumber);
      });
      return finalRemainingNumbers;
    }
  
    calculateWinningRank (randomNumbers, winningNumbers, bonusNumber) {
      const firstPlaceWinning = this.compareWithWinningNumbers(randomNumbers, winningNumbers).firstPlaceWinning;
      const initialRemainingNumbers = this.compareWithWinningNumbers(randomNumbers, winningNumbers).remainingNumbers;
      const finalRemainingNumbers = this.compareWithBonusNumber(initialRemainingNumbers,bonusNumber);
  
      const firstPlaceWinningCount = firstPlaceWinning.map(array => array.length);
      const winningCount = finalRemainingNumbers.map(array => array.length);
  
      const rankCounts = {
        first : countWinnings(firstPlaceWinningCount,6),
        second : countWinnings(winningCount,0),
        third : countWinnings(winningCount,1),
        fourth : countWinnings(winningCount,2),
        fifth : countWinnings(winningCount,3)
      };// 일일이 상수로 저장함 => chat GPT : 객체로 저장
      return rankCounts;
    }
  
    calculateProfitRate (amount, rankCounts) {
      const totalPrize = Object.entries(rankCounts).reduce((total, [key, count])=> {
        return total + count * LOTTO_PRIZE[key.toUpperCase()];
      }, 0); // 일일이 호출해서 LOTTO_PRIZE와 더함 => chat GPT : Object.entries / toUpperCase를 이용해 value 매칭
      const profitRate = Number(((totalPrize / amount) * 100).toFixed(1)).toLocaleString();
      return profitRate;
    }
}
export default LottoResultCalculator;