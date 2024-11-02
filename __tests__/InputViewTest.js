import InputView from '../src/InputView.js';

import { mockQuestions, getLogSpy } from '../src/utils/testUtil.js';

describe('InputView 클래스 테스트', () => {
  let inputView;
  let logSpy;

  beforeEach(() => {
    inputView = new InputView();
    logSpy = getLogSpy();
  });

  test.each([['1000k'], ['100']])(
    '로또 구입 금액 입력 예외 테스트: %s',
    async (purchasePrice) => {
      mockQuestions([purchasePrice, '1000']);

      await inputView.readPurchasePrice();

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    }
  );

  test.each([
    ['1,2,4,5'],
    ['1!,2,3,4,5,6'],
    ['0,1,2,3,4,5'],
    ['1,2,3,4,5,46'],
    ['1,1,2,3,4,5'],
  ])('로또 당첨 번호 입력 예외 테스트: %s', async (winningNumbers) => {
    mockQuestions([winningNumbers, '1,2,3,4,5,6']);

    await inputView.readWinningNumbers();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test.each([['10s'], ['0'], ['46'], ['1']])(
    '보너스 번호 입력 예외 테스트: %s',
    async (bonusNumber) => {
      mockQuestions([bonusNumber, '7']);

      await inputView.readBonusNumber([1, 2, 3, 4, 5, 6]);

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
    }
  );
});
