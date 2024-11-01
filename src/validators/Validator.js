const ERROR_MESSAGE = {
  COST: {
    NOT_NUM: '[ERROR] 구입 금액은 숫자만 입력해주세요',
    UNIT: '[ERROR] 구입 금액은 1000단위 입니다.',
  },
  SUCCESS_NUM: {
    LEN: '[ERROR] 당첨 번호는 6개만 입력해주세요',
    NOT_NUM: '[ERROR] 당첨 번호는 숫자만 입력해주세요',
    RANGE: '[ERROR] 당첨 번호는 1~45이내로 입력해주세요',
  },
  BONUS_NUM: {
    NOT_NUM: '[ERROR] 보너스 번호는 숫자만 입력해주세요',
    RANGE: '[ERROR] 보너스 번호는 1~45이내로 입력해주세요',
  },
};

class Validator {
  validateInputCost(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.COST.NOT_NUM);
    }
    if (Number(input) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE.COST.UNIT);
    }
  }

  validateSuccessNum(input) {
    const successNumList = input.split(',');
    if (successNumList.length !== 6) {
      throw new Error(ERROR_MESSAGE.SUCCESS_NUM.LEN);
    }
    successNumList.forEach((elem) => {
      if (!isNaN(elem)) {
        throw new Error(ERROR_MESSAGE.SUCCESS_NUM.NOT_NUM);
      }
      if (Number(elem) < 1 || Number(elem) > 45) {
        throw new Error(ERROR_MESSAGE.SUCCESS_NUM.RANGE);
      }
    });
  }
  validateBonusNum(input) {
    if (isNaN(input)) {
      throw new Error(ERROR_MESSAGE.BONUS_NUM.NOT_NUM);
    }
    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error(ERROR_MESSAGE.BONUS_NUM.RANGE);
    }
  }
}

export default Validator;
