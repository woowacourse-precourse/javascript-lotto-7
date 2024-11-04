import MoneyManager from '../src/controller/MoneyManager';
import { MONEY_ERROR_MESSAGES } from '../src/contents/InputErrorMessages';

describe('MoneyManager 클래스 예외 테스트', () => {
  test.each([
    {
      input: '',
      description: '금액이 입력되지 않았을 때 예외 발생',
      expectedError: `${MONEY_ERROR_MESSAGES.missingAmount}`,
    },
    {
      input: 'a',
      description: '문자가 입력되었을 때 예외 발생',
      expectedError: `${MONEY_ERROR_MESSAGES.nonNumericInput}`,
    },
    {
      input: '1200',
      description: '1000원 단위가 아닐 때 예외 발생',
      expectedError: `${MONEY_ERROR_MESSAGES.invalidUnit}`,
    },
  ])('$description', ({ input, expectedError }) => {
    expect(() => {
      new MoneyManager(input);
    }).toThrow(expectedError);
  });
});

describe('MoneyManager 클래스 기능 테스트', () => {
  test.each([{ input: '4000', expectedNum: 4 }])(
    '로또 티켓 장 수 계산',
    ({ input, expectedNum }) => {
      const moneyManager = new MoneyManager(input); // 인스턴스 생성
      expect(moneyManager.getLottoTicketCount()).toBe(expectedNum); // 로또 티켓 장수 확인
    },
  );
});
