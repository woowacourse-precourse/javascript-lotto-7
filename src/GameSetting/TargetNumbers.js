import Validation from "./Utils/Validation";

class TargetNumbers {
  #numbers;

  constructor(input) {
    let numbers = this.#stringToList(input);
    this.#numbers = this.#validate(numbers);
  }

  #validate(numbers) {
    // 숫자 인지 검사
    let validatedNumbers = numbers.map((number) =>
      Validation.inputNaturalNumber(number)
    );

    // numbers 길이 검사
    Validation.numbersLength(validatedNumbers);

    // numbers 중복성 검사
    Validation.numbersDuplicate(validatedNumbers);

    // 1-45인지 검사
    for (let number of validatedNumbers) {
      Validation.numberRange(number);
    }

    return validatedNumbers;
  }

  #stringToList(input) {
    return input.split(",").map((number) => number.trim());
  }

  getTargetNumbers() {
    return this.#numbers;
  }
}

export default TargetNumbers;
