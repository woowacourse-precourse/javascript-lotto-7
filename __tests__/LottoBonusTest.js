import LottoBonus from '../src/domain/LottoBonus.js';
import { COMMON_ERRORS, VALIDATION_ERRORS } from '../src/constants/constants.js';

describe('보너스 번호 클래스 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  const exceptionTestCases = [
    ['보너스 번호가 숫자가 아닌 경우 예외가 발생한다.', 'a', COMMON_ERRORS.NUMBER],
    ['보너스 번호가 정수가 아닌 경우 예외가 발생한다.', 1.1, COMMON_ERRORS.INTEGER],
    ['보너스 번호가 1 이상 45 이하가 아닌 경우 예외가 발생한다.', 46, COMMON_ERRORS.RANGE],
    ['보너스 번호가 로또 번호와 중복된 숫자인 경우 예외가 발생한다.', 1, VALIDATION_ERRORS.BONUS_NUMBER.DUPLICATE],
  ];

  it.each(exceptionTestCases)('%s', (_, bonusNumber, errorMessage) => {
      expect(() => new LottoBonus(bonusNumber, winningNumbers)).toThrow(errorMessage);
  });

  test('보너스 번호가 올바른 경우 getBonusNumber()를 통해 보너스 번호를 반환한다.', () => {
    // given
    const bonusNumber = 7;
    
    // when
    const lottoBonus = new LottoBonus(bonusNumber, winningNumbers);
    const result = lottoBonus.getBonusNumber();

    // then
    expect(result).toEqual(bonusNumber);
  });
});
