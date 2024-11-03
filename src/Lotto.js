import { ERR_MSG } from './constants.js';

export default class Lotto {
   #numbers;

   constructor(numbers) {
      this.#validate(numbers);
      this.#numbers = numbers;
   }

   #validate(numbers) {
      if (numbers.length !== 6) {
         throw new Error(ERR_MSG.ERR_NUMBERS_COUNT);
      }
      this.checkDuplicateNumbers(numbers); // 중복 체크 추가
   }

   checkDuplicateNumbers(numbers) {
      if (new Set(numbers).size !== numbers.length) {
         throw new Error(ERR_MSG.ERR_DUPLICATE_NUMBERS);
      }
   }

   getNumbers() {
      return this.#numbers;
   }
}
