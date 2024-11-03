export const LOTTO_MESSAGES = {
  input: {
    money: '구입금액을 입력해 주세요.\n',
    lottoNumber : '당첨 번호를 입력해 주세요.\n',
    bonusNumber: '보너스 번호를 입력해 주세요.\n'
  },
  error: {
    numberCountNotSix: '[ERROR] 로또 번호는 6개여야 합니다.',
    duplicatedNumber: '[ERROR] 중복 숫자는 사용할 수 없습니다.',
    numberRangeOver: '[ERROR] 1~45 사이의 숫자만 입력해야 합니다.',
    inputNaN: '[ERROR] 숫자만 입력할 수 있습니다.',
    BonusNumberIsInLotto: '[ERROR] 당첨 번호와 보너스 번호는 중복될 수 없습니다.',
    BonusCountNotOne: '[ERROR] 보너스 번호는 1개 입력해야 합니다.',
    priceUnderThousands: '[ERROR] 최소 1,000원 이상 입력해야 합니다.',
    priceNotMultipleOfThousands: '[ERROR] 입력값이 1,000원 단위로 나누어 떨어지지 않습니다.',
    canNotUseDecimal: '[ERROR] 소숫점을 입력할 수 없습니다.',
  }
}
