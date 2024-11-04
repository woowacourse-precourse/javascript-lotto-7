import Lotto from '../src/Lotto.js';
import { validateBonusNumber } from '../src/utils/validateLottoNumbers.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test.each([
    {
      numbers: [0, 2, 3, 4, 5, 6],
      errorMessage: '[ERROR] 1~45의 숫자를 입력하셔야 됩니다.',
    },
    {
      numbers: [1, 2, 3, 4, 5, 46],
      errorMessage: '[ERROR] 1~45의 숫자를 입력하셔야 됩니다.',
    },
    {
      numbers: [1, 2, 3, 4, 5, 1.5],
      errorMessage: '[ERROR] 소수는 입력할 수 없습니다.',
    },
    {
      numbers: [1, 2, 3, 4, 5, -6],
      errorMessage: '[ERROR] 음수는 입력할 수 없습니다.',
    },
  ])(
    '유효하지 않은 로또 번호($numbers)로 생성 시 에러 메시지 출력',
    ({ numbers, errorMessage }) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(errorMessage);
    },
  );
});

describe('보너스 번호 예외 처리 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  test('보너스 번호가 로또 번호와 중복될 경우 예외가 발생한다.', async () => {
    const bonusNumber = 3;

    expect(() => {
      validateBonusNumber(winningNumbers, bonusNumber);
    }).toThrow('[ERROR] 입력하신 당첨 번호와 보너스 당첨 번호가 중복됩니다.');
  });

  test.each([
    {
      bonusNumber: 0,
      errorMessage: '[ERROR] 1~45의 숫자를 입력하셔야 됩니다.',
    },
    {
      bonusNumber: 46,
      errorMessage: '[ERROR] 1~45의 숫자를 입력하셔야 됩니다.',
    },
    { bonusNumber: 1.5, errorMessage: '[ERROR] 소수는 입력할 수 없습니다.' },
    { bonusNumber: -5, errorMessage: '[ERROR] 음수는 입력할 수 없습니다.' },
  ])(
    '유효하지 않은 보너스 번호($bonusNumber)로 설정 시 에러 메시지 출력',
    ({ bonusNumber, errorMessage }) => {
      expect(() => {
        validateBonusNumber(winningNumbers, bonusNumber);
      }).toThrow(errorMessage);
    },
  );
});
