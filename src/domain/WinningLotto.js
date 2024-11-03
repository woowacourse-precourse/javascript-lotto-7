import Lotto from "./Lotto.js";
import LOTTO_CONFIG from "../static/LottoConfig.js";

class WinningLotto {
 #lotto;
 #bonusNumber;

 constructor(numbers, bonusNumber) {
   this.#lotto = new Lotto(numbers);
   this.#bonusNumber = bonusNumber;
 }

 static createInitialResults() {
   return { 3: 0, 4: 0, 5: 0, "5+": 0, 6: 0 };
 }

 processResult(results, lotto) {
   const matchCount = lotto.match(this.#lotto.getNumbers());
   this.#updateWinningRank(results, matchCount, lotto);
 }

 #updateWinningRank(results, matchCount, lotto) {
   if (matchCount === 6) {
     results[6]++;
     return;
   }
   if (matchCount === 5 && lotto.contains(this.#bonusNumber)) {
     results["5+"]++;
     return;
   }
   if (matchCount >= 3) {
     results[matchCount]++;
   }
 }

 static calculateTotalPrize(results) {
   const prizes = this.#getPrizes(results);
   return this.#sumPrizes(prizes);
 }

 static #getPrizes(results) {
   return [
     [results[3], LOTTO_CONFIG.prize.THREE],
     [results[4], LOTTO_CONFIG.prize.FOUR],
     [results[5], LOTTO_CONFIG.prize.FIVE],
     [results["5+"], LOTTO_CONFIG.prize.FIVE_BONUS],
     [results[6], LOTTO_CONFIG.prize.SIX],
   ];
 }

 static #sumPrizes(prizes) {
   return prizes.reduce((sum, [count, prize]) => sum + (count * prize), 0);
 }
}

export default WinningLotto;