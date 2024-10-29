import { Console, Random } from '@woowacourse/mission-utils';

const MESSAGES = {
  INFO: {
    PURCHASE_AMOUNT: '구입 금액을 입력해주세요.',
    WINNING_NUMBERS: '당첨 번호를 입력해주세요.',
    BONUS_NUMBER: '보너스 번호를 입력해주세요.',
  },
  ERROR: {
    IS_EMPTY: '[ERROR] 입력값이 비었습니다.',
    NOT_NUMBER: '[ERROR] 숫자를 입력해주세요.',
    NOT_NATURAL_NUMBER: '[ERROR] 자연수를 입력해주세요.',
    NOT_DIVISIBLE_BY_THOUSAND: '[ERROR] 1000의 배수를 입력해주세요.',
  },
};

const InputValidator = {
  isEmpty: (input) => {
    if (input === null || input.trim().length === 0 || !input) {
      throw new Error(MESSAGES.ERROR.IS_EMPTY);
    }
  },
  isNumber: (input) => {
    if (isNaN(Number(input))) {
      throw new Error(MESSAGES.ERROR.NOT_NUMBER);
    }
  },
  isNaturalNumber: (input) => {
    if (!Number.isInteger(input) || Number(input) <= 0) {
      throw new Error(MESSAGES.ERROR.NOT_NATURAL_NUMBER);
    }
  },
  isDivisibleByThousand: (input) => {
    if (input % 1000 !== 0) {
      throw new Error(MESSAGES.ERROR.NOT_DIVISIBLE_BY_THOUSAND);
    }
  },
};

const Parser = {
  parseNumber: (input) => {
    InputValidator.isEmpty(input);
    InputValidator.isNumber(input);
    return Number(input);
  },
};

class LottoValidator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = Parser.parseNumber(input);
    InputValidator.isNaturalNumber(purchaseAmount);
    InputValidator.isDivisibleByThousand(purchaseAmount);

    return purchaseAmount;
  }
}

const calculatePurchaseNumber = (purchaseAmount) => {
  return purchaseAmount / 1000;
};

const Main = async () => {
  Console.print('프로그램 시작!');

  const inputPurchaseAmount = await Console.readLineAsync(
    MESSAGES.INFO.PURCHASE_AMOUNT,
  );
  const purchaseAmount =
    LottoValidator.validatePurchaseAmount(inputPurchaseAmount);

  const winningNumbers = await Console.readLineAsync(
    MESSAGES.INFO.WINNING_NUMBERS,
  );
  const bonusNumber = await Console.readLineAsync(MESSAGES.INFO.BONUS_NUMBER);

  const purchaseNumber = calculatePurchaseNumber(purchaseAmount);
  Console.print(`${purchaseNumber}개를 구매했습니다.`);
};

export default Main;
