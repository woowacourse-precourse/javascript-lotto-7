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
    NOT_LOTTO_RANGE:
      '[ERROR] 로또 당첨 번호는 1부터 45까지의 자연수를 입력해주세요.',
    NOT_WINNING_LENGTH: '[ERROR] 당첨 번호는 6개를 입력해야합니다.',
    IS_SAME_NUMBER: '[ERROR] 당첨 번호 입력에 중복된 숫자가 있습니다.',
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
  isLottoRangeNumber: (input) => {
    if (input < 1 || input > 45) {
      throw new Error(MESSAGES.ERROR.NOT_LOTTO_RANGE);
    }
  },
  isWinningLength: (inputArray) => {
    if (inputArray.length !== 6) {
      throw new Error(MESSAGES.ERROR.NOT_WINNING_LENGTH);
    }
  },
  isSameNumber: (inputArray) => {
    const distinctNumber = new Set(inputArray);
    if (distinctNumber.size !== inputArray.length) {
      throw new Error(MESSAGES.ERROR.IS_SAME_NUMBER);
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
  static validateWinningNumbers(inputArray) {
    const winningNumber = inputArray.map((input) => {
      const number = Parser.parseNumber(input);
      InputValidator.isLottoRangeNumber(number);
      InputValidator.isNaturalNumber(number);
      InputValidator.isLottoRangeNumber(number);
      return number;
    });
    InputValidator.isWinningLength(winningNumber);
    InputValidator.isSameNumber(winningNumber);
    return winningNumber;
  }
  static validateBonusNumber(input) {
    const bonusNumber = Parser.parseNumber(input);
    InputValidator.isLottoRangeNumber(bonusNumber);
    InputValidator.isNaturalNumber(bonusNumber);
    InputValidator.isLottoRangeNumber(bonusNumber);
    return bonusNumber;
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

  const inputWinningNumbers = await Console.readLineAsync(
    MESSAGES.INFO.WINNING_NUMBERS,
  );

  const arrayWinningNumbers = inputWinningNumbers.trim().split(',');
  const winningNumbers =
    LottoValidator.validateWinningNumbers(arrayWinningNumbers);

  const inputBonusNumber = await Console.readLineAsync(
    MESSAGES.INFO.BONUS_NUMBER,
  );

  const bonusNumber = LottoValidator.validateBonusNumber(inputBonusNumber);
  winningNumbers.push(bonusNumber);

  const purchaseNumber = calculatePurchaseNumber(purchaseAmount);
  Console.print(`${purchaseNumber}개를 구매했습니다.`);
  Console.print(`당첨번호: ${winningNumbers}`);
};

export default Main;
