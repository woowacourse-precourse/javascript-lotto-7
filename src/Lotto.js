import ValidateNumber from './controller/ValidateNumber.js';
import { NUMBER_ERROR_MESSAGES } from './contents/InputErrorMessages.js';

class Lotto {
  #numbers; // 당첨 번호

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
  }

  // 당첨번호 검증
  #validate(numbers) {
    //로또 번호 개수
    ValidateNumber.checkArrayLength(
      numbers,
      6,
      NUMBER_ERROR_MESSAGES.winningNumberGuid,
    );
    //중복 확인
    ValidateNumber.checkForDuplicates(
      numbers,
      NUMBER_ERROR_MESSAGES.dupicateNumber,
    );
    // 당첨번호 영역 확인
    numbers.forEach((num) => {
      ValidateNumber.validateNumber(
        num,
        NUMBER_ERROR_MESSAGES.winningNumberGuid,
      );
    });
    return numbers;
  }

  // 당첨 번호 반환
  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
