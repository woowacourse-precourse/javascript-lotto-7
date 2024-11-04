import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGES = {
  INVALID_AMOUNT: "[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.",
  INVALID_LOTTO_NUMBERS: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  INVALID_BONUS_NUMBER: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
  NOT_A_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
  INVALID_CHARACTER: "[ERROR] 공백, 문자, 쉼표 이외의 다른 기호를 사용하지 마세요.",
  EXCEEDS_LIMIT: "[ERROR] 로또 번호는 6개까지만 입력할 수 있습니다.",
  EMPTY_INPUT: "[ERROR] 값을 입력해 주세요.",
  FORMAT_ERROR: "[ERROR] 형식에 맞게 입력해 주세요. (예: 1,2,3,4,5,6)"
};

const InputHandler = {
  async getPurchaseAmount() {
    while (true) {
      try {
        const amount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        if (!amount) {
          throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
        }

        const parsedAmount = parseInt(amount, 10);
        if (isNaN(parsedAmount)) {
          throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
        }
        if (parsedAmount % 1000 !== 0) {
          throw new Error(ERROR_MESSAGES.INVALID_AMOUNT);
        }
        return parsedAmount;
      } catch (error) {
        Console.print(error.message); // 오류 메시지 출력
      }
    }
  },

  async getWinningNumbers() {
    while (true) {
      try {
        const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        if (!input) {
          throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
        }

        // 형식 검증: 숫자와 쉼표만 허용
        if (/[^0-9,\s]/.test(input)) {
          throw new Error(ERROR_MESSAGES.INVALID_CHARACTER);
        }

        const numbers = input.split(",").map(num => num.trim()).map(Number);

        // 유효성 검사
        if (numbers.length !== 6) {
          throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }
        if (!this.isValidLottoNumbers(numbers)) {
          throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBERS);
        }
        
        return numbers;
      } catch (error) {
        Console.print(error.message); // 오류 메시지 출력
      }
    }
  },

  async getBonusNumber(winningNumbers) {
    while (true) {
        try {
            const bonus = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
            if (!bonus) {
                throw new Error(ERROR_MESSAGES.EMPTY_INPUT);
            }

            const bonusNumber = parseInt(bonus, 10);
            if (isNaN(bonusNumber)) {
                throw new Error(ERROR_MESSAGES.NOT_A_NUMBER);
            }
            if (!this.isValidLottoNumber(bonusNumber)) {
                throw new Error(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
            }

            // winningNumbers가 정의되어 있는지 확인
            if (winningNumbers && winningNumbers.includes(bonusNumber)) {
                throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
            }

            return bonusNumber;
        } catch (error) {
            Console.print(error.message); // 오류 메시지 출력
        }
    }
},

  isValidLottoNumbers(numbers) {
    return (
      numbers.length === 6 &&
      numbers.every(this.isValidLottoNumber) &&
      new Set(numbers).size === numbers.length // 중복된 숫자가 없을 경우
    );
  },

  isValidLottoNumber(number) {
    return Number.isInteger(number) && number >= 1 && number <= 45;
  }
};

export default InputHandler;