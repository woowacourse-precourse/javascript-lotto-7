export const lottoValidator = {
  validatePurchasePrice: (price) => {
    if (Number.isSafeInteger(price) && price > 0 && price % 1000 === 0) {
      return;
    }

    throw new Error(
      "[ERROR] : 로또 구입 가격은 1000으로 나누어 떨어지는 0보다 큰 정수로 입력해주세요.\n"
    );
  },
};
