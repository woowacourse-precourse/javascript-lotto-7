class Validation {
  validateNumber(input) {
    const userInput = Number(input);

    if (Number.isNaN(userInput)) throw new Error("숫자를 입력해주세요.");
    return userInput;
  }

  isNumberInRange(input) {
    if (input < 1 && input > 45)
      throw new Error("입력값은 1과 45 사이의 숫자여야 합니다.");
    return true;
  }
}

export default Validation;
