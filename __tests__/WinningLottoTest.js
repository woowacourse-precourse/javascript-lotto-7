import WinningLotto from '../src/WinningLotto';
import { ERROR_MESSAGES } from '../src/constants/messages';

const expectWinningLottoInstance = (winningLotto, numbers) => {
  expect(winningLotto.getNumbers()).toEqual(numbers);
  expect(winningLotto.getBonusNumber()).toBeNull();
};

const expectValidBonusNumber = (winningLotto, validBonus) => {
  winningLotto.setBonusNumber(validBonus);
  expect(winningLotto.getBonusNumber()).toBe(validBonus);
};

const expectInvalidBonusNumber = (winningLotto, bonusNumber, error) => {
  expect(() => {
    winningLotto.setBonusNumber(bonusNumber);
  }).toThrow(error);
};

describe.each([
  { numbers: [1, 2, 3, 4, 5, 6], validBonus: 7, duplicateNumber: 6 },
  { numbers: [15, 26, 33, 35, 40, 44], validBonus: 1, duplicateNumber: 15 },
  { numbers: [8, 28, 30, 35, 38, 41], validBonus: 15, duplicateNumber: 38 },
])(
  'WinningLotto 생성 및 보너스 번호 유효성 테스트 - 로또 번호: $numbers',
  ({ numbers, validBonus, duplicateNumber }) => {
    let winningLotto;
    beforeEach(() => {
      winningLotto = new WinningLotto(numbers);
    });

    test('정상적으로 생성', () => expectWinningLottoInstance(winningLotto, numbers));
    test('[유효한 보너스 번호 설정]', () => expectValidBonusNumber(winningLotto, validBonus));
    test.each([
      { bonusNumber: duplicateNumber, error: ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER },
      { bonusNumber: 46, error: ERROR_MESSAGES.INVALID_LOTTO_RANGE },
      { bonusNumber: 0, error: ERROR_MESSAGES.INVALID_LOTTO_RANGE },
    ])('[유효하지 않은 보너스 번호 설정]', ({ bonusNumber, error }) => {
      expectInvalidBonusNumber(winningLotto, bonusNumber, error);
    });
  },
);
