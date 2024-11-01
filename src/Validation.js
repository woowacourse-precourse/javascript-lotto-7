class Validation {
  validateNumber(input) {
    const userInput = Number(input);

    if (Number.isNaN(userInput))
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    return userInput;
  }

  isNumberInRange(input) {
    if (input < 1 && input > 45)
      throw new Error("[ERROR] 입력값은 1과 45 사이의 숫자여야 합니다.");
    return true;
  }

  isMoneyDividedBy1000(input) {
    if (input % 1000)
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위로 입력받습니다.");
    return true;
  }
}

export default Validation;
