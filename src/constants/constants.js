export const INPUT_MESSAGE = {
  inputPurchaseAmount : "구입 금액을 입력해 주세요.\n",
  inputWinningNumbers : "\n당첨 번호를 입력해 주세요.\n",
  inputBonusNumber : "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  printPurchaseNumber : (count) => `\n${count}개 구매했습니다.`,
  printWinningStatistics : "\n당첨 통계\n---",
  printFifth : (count) => `3개 일치 (5,000원) - ${count}개`,
  printFourth : (count) => `4개 일치 (50,000원) - ${count}개`,
  printThird : (count) => `5개 일치 (1,500,000원) - ${count}개`,
  printSecond : (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
  printFirst : (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
  printRateReturn : (rate) => `총 수익률은 ${rate}%입니다.`,
};

const ERROR_PREFIX = "[ERROR]";

export const ERROR_MESSAGE = {
  purchaseError : `${ERROR_PREFIX} 구입 금액은 1000으로 나누어 떨어지는 수 입니다.`,
  purchaseRangeError : `${ERROR_PREFIX} 구입 금액 범위는 양수인 정수입니다.`,
  lottoLengthError : `${ERROR_PREFIX} 당첨 번호는 6개여야 합니다.`,
  lottoDuplicatedError : `${ERROR_PREFIX} 당첨 번호는 중복될 수 없습니다.`,
  lottoRangeError : `${ERROR_PREFIX} 당첨 번호의 범위는 1~45 폐구간 입니다.`,
  lottoTypeError : `${ERROR_PREFIX} 당첨 번호는 자연수입니다.`,
  bonusDuplicatedError : `${ERROR_PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
  bonusRangeError : `${ERROR_PREFIX} 보너스 번호의 범위는 1~45 폐구간 입니다.`,
  bonusTypeError : `${ERROR_PREFIX} 보너스 번호는 자연수입니다.`,
};