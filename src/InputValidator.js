class InputValidator {
  static validateNumbers(numbers, count) {
    if (
      !Array.isArray(numbers) ||
      numbers.length !== count
    ) {
      throw new Error(
        `[ERROR] 번호는 ${count}개여야 합니다.`
      );
    }
    numbers.forEach((num) => {
      if (
        num < 1 ||
        num > 45 ||
        Number.isNaN(num)
      ) {
        throw new Error(
          "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
        );
      }
    });
  }
}

export default InputValidator;
