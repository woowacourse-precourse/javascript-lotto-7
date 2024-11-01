import MoneyManager from '../src/controller/MoneyManager';
import { INPUT_ERROR_MESSAGES } from '../src/contents/InputErrorMessages';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('MoneyManager 클래스 예외 테스트', () => {
  test.each([
    {
      input: undefined,
      description: '금액이 입력되지 않았을 때 예외 발생',
      expectedError: `[ERROR] : ${INPUT_ERROR_MESSAGES.missingMoney}`,
    },
    {
      input: 'a',
      description: '문자가 입력되었을 때 예외 발생',
      expectedError: `[ERROR] : ${INPUT_ERROR_MESSAGES.nonNumericInput}`,
    },
    {
      input: '1200',
      description: '1000원 단위가 아닐 때 예외 발생',
      expectedError: `[ERROR] : ${INPUT_ERROR_MESSAGES.notUnts1000Won}`,
    },
  ])('$description', ({ input, expectedError }) => {
    expect(() => {
      new MoneyManager(input);
    }).toThrow(expectedError);
  });
});
