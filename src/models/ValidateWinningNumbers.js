class ValidateWinningNumbers {
  validateWinningNumbersFormat(input) {
    const winningNumbersRegex = /^(\d+,){5}\d+$/;

    if (!winningNumbersRegex.test(input)) {
      throw new Error(
        '[ERROR] 쉼표(,)로 구분된 6개의 숫자만 입력이 가능합니다.',
      );
    }
  }
}

export default ValidateWinningNumbers;
