import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

const MESSAGES = Object.freeze({
  INFO: {
    START_PROGRAM: '프로그램이 시작되었습니다.\n',
    PURCHASE_QUANTITY: '{count}개를 구매했습니다.',
    WINNING_STATISTICS: '당첨 통계',
    DASH_SYMBOL: '---',
    LINE_BREAK: '',
  },
  INPUT: {
    PURCHASE_AMOUNT: '구입 금액을 입력해주세요.\n',
    WINNING_NUMBERS: '당첨 번호를 입력해주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해주세요.\n',
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
  PRIZE: {
    MATCH_3: '3개 일치 (5,000원) - {count}개',
    MATCH_4: '4개 일치 (50,000원) - {count}개',
    MATCH_5: '5개 일치 (1,500,000원) - {count}개',
    MATCH_5_WITH_BONUS: '5개 일치, 보너스 볼 일치 (30,000,000원) - {count}개',
    MATCH_6: '6개 일치 (2,000,000,000원) - {count}개',
  },
  RATE_OF_RETURN: '총 수익률은 {rate}%입니다.',
});

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

export class LottoValidator {
  static validatePurchaseAmount(input) {
    const purchaseAmount = Parser.parseNumber(input);
    InputValidator.isNaturalNumber(purchaseAmount);
    InputValidator.isDivisibleByThousand(purchaseAmount);
    return purchaseAmount;
  }
  static validateWinningNumbers(inputArray) {
    const winningNumber = inputArray.map((input) => {
      const number = Parser.parseNumber(input);
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
  static validateGeneratedLottoNumber(inputArray) {
    inputArray.forEach((number) => {
      InputValidator.isLottoRangeNumber(number);
      InputValidator.isNaturalNumber(number);
    });
    InputValidator.isWinningLength(inputArray);
    InputValidator.isSameNumber(inputArray);
  }
}

const calculatePurchaseNumber = (purchaseAmount) => {
  return purchaseAmount / 1000;
};

const calculateRateOfReturn = (purchaseAmount, winningLottoNumber) => {
  let isWinningPrize = 0;
  isWinningPrize += winningLottoNumber[0] * 5000;
  isWinningPrize += winningLottoNumber[1] * 50000;
  isWinningPrize += winningLottoNumber[2] * 1500000;
  isWinningPrize += winningLottoNumber[3] * 30000000;
  isWinningPrize += winningLottoNumber[4] * 2000000000;

  const rateOfReturn = (isWinningPrize / purchaseAmount) * 100;
  return rateOfReturn.toFixed(1);
};

const Main = async () => {
  Console.print(MESSAGES.INFO.START_PROGRAM);

  const inputPurchaseAmount = await Console.readLineAsync(
    MESSAGES.INPUT.PURCHASE_AMOUNT,
  );
  const purchaseAmount =
    LottoValidator.validatePurchaseAmount(inputPurchaseAmount);
  Console.print(MESSAGES.INFO.LINE_BREAK);
  const purchaseNumber = calculatePurchaseNumber(purchaseAmount);
  Console.print(
    MESSAGES.INFO.PURCHASE_QUANTITY.replace('{count}', purchaseNumber),
  );

  let lottoList = [];
  const pushLotto = (n) => {
    for (let i = 0; i < n; i++) {
      const lotto = new Lotto();
      lottoList.push(lotto.getLotto());
    }
  };
  pushLotto(purchaseNumber);
  lottoList.forEach((item) => Console.print(item));

  Console.print(MESSAGES.INFO.LINE_BREAK);

  const inputWinningNumbers = await Console.readLineAsync(
    MESSAGES.INPUT.WINNING_NUMBERS,
  );
  const arrayWinningNumbers = inputWinningNumbers.trim().split(',');
  const winningNumbers =
    LottoValidator.validateWinningNumbers(arrayWinningNumbers);
  Console.print(MESSAGES.INFO.LINE_BREAK);
  const inputBonusNumber = await Console.readLineAsync(
    MESSAGES.INPUT.BONUS_NUMBER,
  );
  Console.print(MESSAGES.INFO.LINE_BREAK);
  Console.print(MESSAGES.INFO.WINNING_STATISTICS);
  Console.print(MESSAGES.INFO.DASH_SYMBOL);

  const bonusNumber = LottoValidator.validateBonusNumber(inputBonusNumber);
  winningNumbers.push(bonusNumber);

  let winningLottoNumber = [0, 0, 0, 0, 0];
  lottoList.forEach((lotto) => {
    const distinctLotto = winningNumbers.filter((x) => lotto.includes(x));
    if (lotto.length - distinctLotto.length === 3) {
      winningLottoNumber[0] += 1;
    } else if (lotto.length - distinctLotto.length === 2) {
      winningLottoNumber[1] += 1;
    } else if (lotto.length - distinctLotto.length === 1) {
      winningLottoNumber[2] += 1;
    } else if (lotto.length - distinctLotto.length === 0) {
      if (lotto.includes(bonusNumber)) {
        winningLottoNumber[3] += 1;
      } else if (!lotto.includes(bonusNumber)) {
        winningLottoNumber[4] += 1;
      }
    }
  });
  Console.print(
    MESSAGES.PRIZE.MATCH_3.replace('{count}', winningLottoNumber[0]),
  );
  Console.print(
    MESSAGES.PRIZE.MATCH_4.replace('{count}', winningLottoNumber[1]),
  );
  Console.print(
    MESSAGES.PRIZE.MATCH_5.replace('{count}', winningLottoNumber[2]),
  );
  Console.print(
    MESSAGES.PRIZE.MATCH_5_WITH_BONUS.replace('{count}', winningLottoNumber[3]),
  );
  Console.print(
    MESSAGES.PRIZE.MATCH_6.replace('{count}', winningLottoNumber[4]),
  );

  const rateOfReturn = calculateRateOfReturn(
    purchaseAmount,
    winningLottoNumber,
  );
  Console.print(MESSAGES.RATE_OF_RETURN.replace('{rate}', rateOfReturn));
};

export default Main;
