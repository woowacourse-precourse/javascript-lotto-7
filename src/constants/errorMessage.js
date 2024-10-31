const PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  PROPER_LOTTO_NUMBERS: `${PREFIX} 로또 번호는 6개여야 합니다.`,
  DUPLICATE_LOTTO_NUMERS: `${PREFIX} 로또 번호는 중복될 수 없습니다.`,
  BETWEEN_1_TO_45_NUMBERS: `${PREFIX} 로또 번호의 숫자 범위는 1~45 입니다.`,
  EMPTY_NUMBERS: `${PREFIX} 로또 번호는 빈 수일 수 없습니다.`,
  NOT_CONTAIN_STRING_NUMBERS: `${PREFIX} 로또 번호는 문자가 들어갈 수 없습니다.`,
  CONTAIN_WINNING_NUMBER: `${PREFIX} 보너스 번호는 당첨 번호와 중복될 수 없습니다.`,
};

export default ERROR_MESSAGE;
