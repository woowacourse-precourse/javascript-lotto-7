export const MONEY_MESSAGES = Object.freeze({
  question: '구입금액을 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 구입금액을 입력하지 않았습니다.',
    notDevide: '[ERROR] 구입금액은 1000원 단위여야 합니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
  },
});

export const WINNING_NUMBER_MESSAGE = Object.freeze({
  question: '당첨 번호를 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 당첨 번호를 입력하지 않았습니다.',
    notDuplcate: '[ERROR] 중복된 값이 있습니다.',
    notOver6: '[ERROR] 숫자는 6개여야 합니다.',
  },
});

export const BONUS_NUMBER_MESSAGE = Object.freeze({
  question: '보너스 번호를 입력해 주세요.\n',
  error: {
    notBlank: '[ERROR] 보너스 번호를 입력하지 않았습니다.',
    notNumber: '[ERROR] 숫자를 입력해주세요.',
    notInRange: '[ERROR] 번호의 범위는 1 ~ 45 이어야 합니다.',
  },
});
