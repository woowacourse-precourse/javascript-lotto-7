const validateNumber = (price) => {
  if (isNaN(price)) {
    throw new Error('[ERROR] 로또 구입 금액이 숫자가 아닙니다. 다시 입력해주세요.');
  }
};

const validateInteger = (price) => {
  if (!Number.isInteger(price)) {
    throw new Error('[ERROR] 로또 구입 금액이 정수가 아닙니다. 다시 입력해주세요.');
  }
};

const validateLottoAmountRange = (price) => {
  if (price < 1_000 || price > 2_000_000_000) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 이상 2,000,000,000원 이하로 입력해 주세요.');
  }
};

const validateIsThousandUnit = (price) => {
  if (price % 1_000 !== 0) {
    throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위로 입력해 주세요.');
  }
};

const LottoPurchasePriceValidations = (price) => {
  validateNumber(price);
  validateInteger(price);
  validateLottoAmountRange(price);
  validateIsThousandUnit(price);
};

export default LottoPurchasePriceValidations;
