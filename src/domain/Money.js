import LOTTO_CONFIG from "../static/LottoConfig.js";

class Money {
 #amount;

 constructor(amount) {
   this.#amount = amount;
 }

 calculateLottoCount() {
   return Math.floor(this.#amount / LOTTO_CONFIG.price.UNIT);
 }

 static calculateTotalAmount(lottoCount) {
   return lottoCount * LOTTO_CONFIG.price.UNIT;
 }

 static calculateRate(prize, amount) {
   return ((prize / amount) * 100).toFixed(1);
 }
}

export default Money;