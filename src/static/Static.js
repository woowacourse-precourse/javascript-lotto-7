const PRINT_MESSAGE = Object.freeze({
    input: {
      purchaseAmount: "구입금액을 입력해 주세요.\n",
      winningNumbers: "\n당첨 번호를 입력해 주세요.\n",
      bonusNumber: "\n보너스 번호를 입력해 주세요.\n"
    },
    output: {
      purchaseCount: (count) => `\n${count}개를 구매했습니다.`,
      statisticsHeader: "\n당첨 통계\n---",
      matchResult: {
        three: (count) => `3개 일치 (5,000원) - ${count}개`,
        four: (count) => `4개 일치 (50,000원) - ${count}개`,
        five: (count) => `5개 일치 (1,500,000원) - ${count}개`,
        fiveBonus: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
        six: (count) => `6개 일치 (2,000,000,000원) - ${count}개`
      },
      profitRate: (rate) => `총 수익률은 ${rate}%입니다.`
    }
   });
   
   const ERROR_MESSAGE = Object.freeze({
    lotto: {
      INVALID_LENGTH: "[ERROR] 로또 번호는 6개여야 합니다.",
      INVALID_RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
      DUPLICATE_NUMBER: "[ERROR] 로또 번호에 중복된 숫자가 있을 수 없습니다.",
      INVALID_TYPE: "[ERROR] 로또 번호는 숫자여야 합니다."
    },
    purchase: {
      NOT_NUMBER: "[ERROR] 구입 금액은 숫자여야 합니다.",
      INVALID_UNIT: "[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.",
      NOT_POSITIVE: "[ERROR] 구입 금액은 0보다 커야 합니다."
    },
    winningNumbers: {
      INVALID_FORMAT: "[ERROR] 쉼표(,)로 구분된 6개의 숫자를 입력해 주세요.",
      NOT_NUMBERS: "[ERROR] 당첨 번호는 숫자만 입력 가능합니다.",
      DUPLICATE: "[ERROR] 당첨 번호에 중복된 숫자가 있을 수 없습니다."
    },
    bonus: {
      NOT_NUMBER: "[ERROR] 보너스 번호는 숫자여야 합니다.",
      INVALID_RANGE: "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
      DUPLICATE: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다."
    }
   });
   
   const LOTTO_CONFIG = Object.freeze({
    price: {
      UNIT: 1000
    },
    numbers: {
      LENGTH: 6,
      MIN: 1,
      MAX: 45
      
    },
    prize: {
      THREE: 5000,
      FOUR: 50000,
      FIVE: 1500000,
      FIVE_BONUS: 30000000,
      SIX: 2000000000
    }
   });
   
   export { PRINT_MESSAGE, ERROR_MESSAGE, LOTTO_CONFIG };