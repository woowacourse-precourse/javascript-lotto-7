export const lottoValidator = {
  validatePurchasePrice(price) {
    if (Number.isSafeInteger(price) && price > 0 && price % 1000 === 0) {
      return;
    }

    throw new Error(
      "[ERROR] : 로또 구입 가격은 1000으로 나누어 떨어지는 0보다 큰 정수로 입력해주세요.\n"
    );
  },
  validateWinningNumberList(winningNumberList) {
    this.validateLengthBy(winningNumberList);
    this.validateWinningNumberBy(winningNumberList);
    this.validateDuplicatedBy(winningNumberList);
  },
  validateLengthBy(winningNumberList) {
    const VALID_WINNING_NUMBER_LENGTH = 6;

    if (winningNumberList.length === VALID_WINNING_NUMBER_LENGTH) {
      return;
    }

    throw new Error("[ERROR] : 당첨 번호는 6개 입력해주세요.\n");
  },
  validateWinningNumberBy(winningNumberList) {
    if (winningNumberList.every(this.isValidWinningNumber.bind(this))) {
      return;
    }

    throw new Error("[ERROR] : 당첨 번호는 1~45 사이의 정수로 입력해주세요.\n");
  },
  isValidWinningNumber(number) {
    return Number.isSafeInteger(number) && this.isInRange(number);
  },
  isInRange(number) {
    const MAX_WINNING_NUMBER = 45;
    const MIN_WINNING_NUMBER = 1;

    return number >= MIN_WINNING_NUMBER && number <= MAX_WINNING_NUMBER;
  },
  validateDuplicatedBy(winningNumberList) {
    if (new Set(winningNumberList).size === winningNumberList.length) {
      return;
    }

    throw new Error("[ERROR] : 중복된 숫자를 입력할 수 없습니다.\n");
  },
};
