const COMMON_MESSAGES = {
  INPUT: {
    LOTTO_PRICE: Object.freeze("구입금액을 입력해주세요."),
    LOTTO_NUMBER: Object.freeze("당첨 번호를 입력해 주세요."),
    BONUS_NUMBER: Object.freeze("보너스 번호를 입력해 주세요."),
  },
  WINNING_STATISTICS: Object.freeze("당첨 통계\n---"),
};

const DEFAULT_ERROR_MESSAGE = "[ERROR]";
const ERROR_MESSAGES = {
  PRICE: {
    WRONG: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 구입 금액은 1000원 단위여야 합니다.`
    ),
    NOT_ENOUGH: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 구입 금액이 부족합니다.`
    ),
    EMPTY: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 구입 금액을 입력해주세요.`
    ),
    NOT_NUMBER: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 구입 금액은 숫자여야 합니다.`
    ),
  },
  LOTTO: {
    EMPTY: Object.freeze(`${DEFAULT_ERROR_MESSAGE} 로또 번호를 입력해 주세요.`),
    WRONG_LENGTH: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 번호는 6개여야 합니다.`
    ),
    WRONG_TYPE: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 번호는 숫자여야 합니다.`
    ),
    WRONG_NUMBER: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 번호는 1부터 45까지의 숫자여야 합니다.`
    ),
    DUPLICATED: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 로또 번호는 중복되지 않아야 합니다.`
    ),
    DELIMITER: {
      CONSECUTIVE: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 로또 번호 사이에는 쉼표(,)가 연속해서 나올 수 없습니다.`
      ),
      START_OR_END: Object.freeze(
        `${DEFAULT_ERROR_MESSAGE} 로또 번호는 쉼표(,)로 시작하거나 끝나면 안됩니다.`
      ),
    },
  },
  BONUS: {
    EMPTY: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 보너스 번호를 입력해 주세요.`
    ),
    NOT_NUMBER: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 보너스 번호는 숫자여야 합니다.`
    ),
    WRONG: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 보너스 번호는 1부터 45까지의 숫자여야 합니다.`
    ),
    DUPLICATED: Object.freeze(
      `${DEFAULT_ERROR_MESSAGE} 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`
    ),
  },
};

const EXECUTE_MESSAGE = {
  LOTTO_RECEIPT: (count) => Object.freeze(`로또 ${count}개를 구매했습니다.`),
  STATISTIC_PRIZE: ({ matchingNumber, price, count, isBonus }) =>
    Object.freeze(
      `${matchingNumber}개 일치${
        isBonus ?? ", 보너스 볼 일치"
      } (${price}원) - ${count}개`
    ),
  TOTAL_PRIZE_RATE: (rate) => Object.freeze(`총 수익률은 ${rate}%입니다.`),
};
