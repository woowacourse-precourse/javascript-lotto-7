import { ERR_MSG } from './constants.js';

export class Validator {
   static validatePurchaseAmount(amount) {
      if (isNaN(amount) || amount <= 0) {
         throw new Error(ERR_MSG.ERR_PURCHASE_AMOUNT);
      }
      if (amount % 1000 !== 0) {
         throw new Error(ERR_MSG.ERR_AMOUNT_UNITS);
      }
   }

   static validateWinningNumber(winningNumbers) {
      const numbers = winningNumbers.split(',').map(Number);
      this.validateLottoNumbers(numbers);
      this.checkDuplicateNumbers(numbers);
      return numbers;
   }

   static validateLottoNumbers(numbers) {
      if (numbers.length !== 6) {
         throw new Error(ERR_MSG.ERR_NUMBERS_COUNT);
      }
      numbers.forEach((num) => {
         if (isNaN(num)) {
            throw new Error(ERR_MSG.ERR_PURCHASE_AMOUNT);
         }
         if (num < 1 || num > 45) {
            throw new Error(ERR_MSG.ERR_NUMBERS_RANGE);
         }
      });
   }

   static checkDuplicateNumbers(numbers) {
      if (new Set(numbers).size !== numbers.length) {
         throw new Error(ERR_MSG.ERR_DUPLICATE_NUMBERS); // 중복 번호에 대한 에러 메시지
      }
   }

   static validateBonusNumber(bonusNumber) {
      if (isNaN(bonusNumber)) {
         throw new Error(ERR_MSG.ERR_PURCHASE_AMOUNT);
      }
      if (bonusNumber.length > 1) {
         throw new Error(ERR_ONLYONE_NUMBER);
      }
      if (bonusNumber < 1 || bonusNumber > 45) {
         throw new Error(ERR_MSG.ERR_NUMBERS_RANGE);
      }
   }
}
