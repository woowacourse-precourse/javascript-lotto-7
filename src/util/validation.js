import { INPUT_CONFIG, LOTTO_CONFIG, RANDOM_CONFIG } from '../constant/config.js';

const success = {
  success: true,
  message: '',
};

export const lottoAmountValidator = {
  isPriceInteger: (input) => {
    const check = Number(input) >= 0;

    if (!check) {
      return { success: false, message: '구매 금액이 유효하지 않습니다.' };
    }

    return success;
  },

  isPriceDivideByUnit: (input) => {
    const check = Number(input) % LOTTO_CONFIG.PRICE === 0;

    if (!check) {
      return {
        success: false,
        message: `구매 금액은 ${LOTTO_CONFIG.PRICE}원 단위로 입력해주세요.`,
      };
    }

    return success;
  },
};

export const lottoNumbersValidator = {
  isLottoNumbersSplitByDelimiter: (input) => {
    const numbers = input.split(INPUT_CONFIG.DELIMITER);

    if (numbers.length === 1) {
      return {
        success: false,
        message: `당첨 번호는 ${INPUT_CONFIG.DELIMITER} 기준으로 구분해주세요`,
      };
    }

    return success;
  },

  isLottoNumbersValidLength: (input) => {
    const numbers = input.split(INPUT_CONFIG.DELIMITER);

    if (numbers.length !== RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT) {
      return {
        success: false,
        message: `${RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT}개의 당첨번호를 입력해주세요.`,
      };
    }

    return success;
  },

  isLottoNumbersInRange: (input) => {
    const numbers = input.split(INPUT_CONFIG.DELIMITER).map(Number);

    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < RANDOM_CONFIG.START_NUMBER || numbers[i] > RANDOM_CONFIG.END_NUMBER) {
        return {
          success: false,
          message: `당첨 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값으로 입력해주세요.`,
        };
      }
    }

    return success;
  },

  isLottoNumbersDuplicated: (input) => {
    const numbers = input.split(INPUT_CONFIG.DELIMITER).map(Number);
    const numberSet = new Set(numbers);

    if (numbers.length !== numberSet.size) {
      return {
        success: false,
        message: '당첨 번호는 중복될 수 없습니다.',
      };
    }

    return success;
  },
};

export const lottoBonusNumberValidator = {
  isLottoBonusNumberValid: (input) => {
    const bonusNumber = Number(input);

    if (bonusNumber < 0 || Number.isNaN(bonusNumber)) {
      return {
        success: false,
        message: '보너스 번호가 유효하지 않습니다.',
      };
    }

    return success;
  },

  isLottoBonusNumberInRange: (input) => {
    const bonusNumber = Number(input);

    if (bonusNumber < RANDOM_CONFIG.START_NUMBER || bonusNumber > RANDOM_CONFIG.END_NUMBER) {
      return {
        success: false,
        message: `당첨 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값으로 입력해주세요.`,
      };
    }

    return success;
  },

  isLottoBonusNumberDuplicated: (input, lottoNumbers) => {
    if (lottoNumbers.includes(Number(input))) {
      return {
        success: false,
        message: '보너스 번호는 로또 당첨 번호와 중복될 수 없습니다.',
      };
    }

    return success;
  },
};

export const lottoValidator = {
  isLottoNumbersDuplicated: (numbers) => {
    const numberSet = new Set(numbers);

    if (numberSet.size !== numbers.length) {
      return {
        success: false,
        message: '로또 번호는 중복될 수 없습니다.',
      };
    }

    return success;
  },

  isLottoNumbersInRange: (numbers) => {
    numbers.forEach((number) => {
      if (number < RANDOM_CONFIG.START_NUMBER || number > RANDOM_CONFIG.END_NUMBER) {
        return {
          success: false,
          message: `로또 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값이어야 합니다.`,
        };
      }
    });

    return success;
  },

  isLottoNumbersValidLength: (numbers) => {
    if (numbers.length !== RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT) {
      return {
        success: false,
        message: `로또 번호는 ${RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT}개여야 합니다.`,
      };
    }

    return success;
  },
};
