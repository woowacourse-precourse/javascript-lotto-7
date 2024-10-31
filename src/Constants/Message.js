const INPUT_MESSAGE = {
  purchaseMoney: '구입금액을 입력해 주세요.',
  winningNumber: '당첨 번호를 입력해 주세요.',
  bonusNumber: '보너스 번호를 입력해 주세요.',
};

const OUTPUT_MESSAGE = {
  purchaseQuantity: '개를 구매했습니다.',
  winningStatistics: '당첨 통계',
  divisionLine: '---',
  fifthWinner: '3개 일치 (5,000원) - ',
  fourthWinner: '4개 일치 (50,000원) - ',
  thirdWinner: '5개 일치 (1,500,000원) - ',
  secondWinner: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  firstWinner: '6개 일치 (2,000,000,000원) - ',
};

const PREFIX_ERROR = '[ERROR]';

const BASIC_ERROR = {
  invalidMoney: `${PREFIX_ERROR} 1,000원 단위로 입력해 주십시오.`,
  invalidInput: `${PREFIX_ERROR} 숫자를 입력해 주십시오.`,
  invalidNumber: `${PREFIX_ERROR} 1~45 사이의 숫자를 입력해 주십시오`,
};

const WINNING_NUMBER_ERROR = {
  invalidSeparator: `${PREFIX_ERROR} ,(쉼표)로 구분해 주십시오.`,
  invalidlength: `${PREFIX_ERROR} 6개의 숫자를 입력해 주십시오.`,
};

const BOUNS_NUMBER_ERROR = {
  invalidlength: `${PREFIX_ERROR} 1개의 숫자를 입력해 주십시오.`,
};

export {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  BASIC_ERROR,
  WINNING_NUMBER_ERROR,
  BOUNS_NUMBER_ERROR,
};
