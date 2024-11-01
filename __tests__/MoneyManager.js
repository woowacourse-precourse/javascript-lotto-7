import MoneyManager from '../src/controller/MoneyManager';
import { INPUT_PRINT_MESSAGES } from '../src/contents/InputPrintMessages';
describe('MoneyManager 클래스 예외 테스트', () => {
  test.each([
    {
      input: undefined,
      description: '금액이 입력되지 않았을 때 예외 발생',
      expectedError: INPUT_PRINT_MESSAGES.money,
    },
    {
      input: '.',
      description: '문자가 입력되었을 때 예외 발생',
      expectedError: INPUT_PRINT_MESSAGES.winning_number,
    },
    {
      input: 1200,
      description: '1000원 단위가 아닐 때 예외 발생',
      expectedError: INPUT_PRINT_MESSAGES.bonus_number,
    },
  ])('$description', ({ input, expectedError }) => {
    expect(() => {
      new MoneyManager(input);
    }).toThrow('[ERROR]: ', expectedError);
  });
});
