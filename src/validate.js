import { ERR_MSG } from './error.js';

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

   static validateBonusNumber(bonusNumber) {
      if (bonusNumber < 1 || bonusNumber > 45) {
         throw new Error(ERR_MSG.ERR_NUMBERS_RANGE);
      }
   }
}
