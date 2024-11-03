const ERROR = '[ERROR]';

const MESSAGES = Object.freeze({
  purchaseAmount: '1,000원 단위로 값을 입력해 주세요.\n',
  winningNumbers: '6개의 번호를 쉼표로 구분하여 정확히 입력해 주세요.\n',
  bonusNumber: '1개의 숫자로 입력해 주세요.\n',
});

export const ERROR_MESSAGES = Object.freeze({
  purchaseAmount: {
    EMPTY_INPUT: `\n${ERROR} 구입금액이 입력되지 않았습니다.\n${MESSAGES.purchaseAmount}`,
    UNIT_PRICE: `\n${ERROR} 입력하신 금액 단위가 올바르지 않습니다.\n${MESSAGES.purchaseAmount}`,
  },

  winningNumbers: {
    EMPTY_INPUT: `\n${ERROR} 당첨 번호가 입력되지 않았습니다.\n${MESSAGES.winningNumbers}`,
    NUMBER_LENGTH: `\n${ERROR} 입력하신 당첨번호의 개수가 6개가 아닙니다.\n${MESSAGES.winningNumbers}`,
    NUMBER_RANGE: `\n${ERROR} 입력하신 당첨번호 중 1부터 45 범위를 벗어난 숫자가 있습니다.\n${MESSAGES.winningNumbers}`,
    COMMA_COUNT: `\n${ERROR} 입력하신 당첨번호들이 쉼표(,)로 구분 되어있지 않습니다.\n${MESSAGES.winningNumbers}`,
    UNIQUE_NUMBER: `\n${ERROR} 입력하신 당첨번호 중 중복된 숫자가 있습니다.\n${MESSAGES.winningNumbers}`,
  },

  bonusNumber: {
    EMPTY_INPUT: `\n${ERROR} 보너스 번호가 입력되지 않았습니다.\n${MESSAGES.bonusNumber}`,
    NUMBER_TYPE: `\n${ERROR} 입력하신 보너스 번호가 숫자 형식이 아닙니다.\n${MESSAGES.bonusNumber}`,
    NUMBER_RANGE: `\n${ERROR} 입력하신 보너스 번호는 1에서 45 사이의 숫자가 아닙니다.\n${MESSAGES.bonusNumber}`,
  },
});