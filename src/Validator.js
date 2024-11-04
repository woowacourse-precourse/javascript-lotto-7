import { LOTTO_RULES, MESSAGES } from "./Constants.js";

class Validator {
  
  // 구입 금액 
  static validateAmount(amount) {
    if (isNaN(amount) || amount <= 0 || amount % LOTTO_RULES.TICKET_PRICE !== 0) {
      throw new Error(MESSAGES.ERROR_INVALID_AMOUNT);
    }
  }

  // 번호 개수 
  static validateTicketSize(numbers) {
    if (numbers.length !== LOTTO_RULES.NUMBERS_PER_TICKET) {
      throw new Error(MESSAGES.ERROR_INVALID_WINNING_NUMBERS);
    }
  }

  // 번호 범위 
  static validateNumberRange(numbers, isBonus = false) {
    const isValidRange = numbers.every(
      (num) => num >= LOTTO_RULES.NUMBER_RANGE.MIN && num <= LOTTO_RULES.NUMBER_RANGE.MAX
    );
    if (!isValidRange) {
      if (isBonus) {
        throw new Error(MESSAGES.ERROR_INVALID_BONUS_NUMBER_RANGE);
      } else {
        throw new Error(MESSAGES.ERROR_INVALID_WINNING_NUMBERS);
      }
    }
  }

  // 번호 중복 
  static validateUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(MESSAGES.ERROR_INVALID_WINNING_NUMBERS);
    }
  }
}

export default Validator;
