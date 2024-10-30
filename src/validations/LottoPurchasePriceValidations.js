const validateNumber = (lottoPurchasePrice) => {
  if (isNaN(lottoPurchasePrice)) {
    throw new Error('[ERROR] 로또 구입 금액이 숫자가 아닙니다. 다시 입력해주세요.');
  }
};

const validateInteger = (lottoPurchasePrice) => {
  if (!Number.isInteger(lottoPurchasePrice)) {
    throw new Error('[ERROR] 로또 구입 금액이 정수가 아닙니다. 다시 입력해주세요.');
  }
};

const validateLottoAmountRange = (lottoPurchasePrice) => {
  if (lottoPurchasePrice < 1_000 || lottoPurchasePrice > 2_000_000_000) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 이상 2,000,000,000원 이하로 입력해 주세요.');
  }
};

const validateIsThousandUnit = (lottoPurchasePrice) => {
  if (lottoPurchasePrice % 1_000 !== 0) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해 주세요.');
  }
};

const LottoPurchasePriceValidations = (lottoPurchasePrice) => {
  validateNumber(lottoPurchasePrice);
  validateInteger(lottoPurchasePrice);
  validateLottoAmountRange(lottoPurchasePrice);
  validateIsThousandUnit(lottoPurchasePrice);
};

export default LottoPurchasePriceValidations;
