import { NUMBER_ERROR_MESSAGES } from '../src/contents/InputErrorMessages.js';
import BonusNumber from '../src/controller/BonusNumber.js';

describe('BonusNumber 클래스 예외 테스트', () => {
  test.each([
    {
      input: '',
      description: '번호가 입력되지 않았을 때 예외 발생',
      expectedError: `${NUMBER_ERROR_MESSAGES.BonusNumberGuid}`,
    },
    {
      input: 'a',
      description: '문자가 입력되었을 때 예외 발생',
      expectedError: `${NUMBER_ERROR_MESSAGES.BonusNumberGuid}`,
    },
    {
      input: '50',
      description: '1~45사이의 숫자가 아닐 때 예외 발생',
      expectedError: `${NUMBER_ERROR_MESSAGES.BonusNumberGuid}`,
    },
  ])('$description', ({ input, expectedError }) => {
    expect(() => {
      new BonusNumber(input);
    }).toThrow(expectedError);
  });

  test('당첨번호와 겹치는면 예외', () => {
    expect(() => {
      new BonusNumber(5, [1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(NUMBER_ERROR_MESSAGES.dupicateWinnig);
  });
});
