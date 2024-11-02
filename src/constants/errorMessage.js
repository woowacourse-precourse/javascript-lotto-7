export const ERROR_MESSAGES = Object.freeze({
  purchaseAmount: '구입 금액은 양의 정수여야 합니다.',
  lottoNumbers: {
    invalidArray: '로또 번호는 6개의 숫자로 구성된 배열이어야 합니다.',
    duplicateNumbers:
      '로또 번호는 중복되지 않는 6개의 숫자로 구성되어야 합니다.',
    outOfRange: '로또 번호는 1에서 45 사이의 정수여야 합니다.',
  },
  bonusNumber: {
    outOfRange: '보너스 번호는 1에서 45 사이의 정수여야 합니다.',
    duplicateWithLotto: '보너스 번호는 로또 번호와 중복될 수 없습니다.',
  },
});
