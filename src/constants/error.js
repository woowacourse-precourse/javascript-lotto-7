export const ERROR_MESSAGE = Object.freeze({
  lotto: {
    number: '[ERROR] 로또 번호는 6개여야 합니다.',
    range: '[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.',
    duplicate: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  },
  price: {
    notNumber: '[ERROR] 로또 구입 금액은 숫자로 입력해주세요.',
    invaildAmountUnit: '[ERROR] 로또 구입 금액은 1,000 단위로 입력해주세요.',
  },
  winningNumbers: {
    length: '[ERROR] 당첨 번호는 6개여야 합니다.',
    notNumber: '[ERROR] 로또 당첨 번호는 숫자를 입력해주세요.',
    range: '[ERROR] 로또 당첨 번호는 1~45 사이의 숫자를 입력해주세요.',
    duplicate: '[ERROR] 로또 당첨 번호는 중복되지 않는 숫자로 입력해주세요.',
  },
  bonusNumber: {
    notNumber: '[ERROR] 보너스 번호는 숫자로 입력해주세요.',
    range: '[ERROR] 보너스 번호는 1~45 사이의 숫자를 입력해주세요.',
    duplicate:
      '[ERROR] 보너스 번호는 당첨 번호에서 나오지 않은 번호로 입력해주세요.',
  },
});
