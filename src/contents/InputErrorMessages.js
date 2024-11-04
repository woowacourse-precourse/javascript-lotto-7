export const INPUT_ERROR_MESSAGES = Object.freeze({
  missingMoney:
    '[ERROR] : 금액이 입력되지 않았습니다. 1000 단위의 정수로 입력해주세요.\n',
  nonNumericInput:
    '[ERROR] : 문자는 입력할 수 없습니다. 1000 단위의 정수로 입력해주세요.\n',
  notUnits1000Won:
    '[ERROR] : 잘못된 숫자 입력입니다. 1000 단위의 정수로 입력해주세요.\n',
});

export const NUMBER_ERROR_MESSAGES = Object.freeze({
  winningNumberGuid:
    '[ERROR] : 쉼표(,)로 구분하여 1 ~ 45 사이의 정수를 5개 입력해 주세요. \n',
  BonusNumberGuid: '[ERROR] : 1 ~ 45 사이의 정수를 1개 입력해 주세요.\n',
  dupicateNumber: '[ERROR] : 중복된 수를 입력하실 수 없습니다.\n',
  dupicateWinnig: '[ERROR] : 당첨번호와 중복될 수 없습니다.',
});
