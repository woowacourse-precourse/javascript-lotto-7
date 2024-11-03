import { MissionUtils } from '@woowacourse/mission-utils';
import OutputView from '../src/View/OutView.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('InputView 테스트', () => {
  let outputView;

  beforeEach(() => {
    jest.restoreAllMocks();
    outputView = new OutputView();
  });

  test('구매 금액 입력', async () => {
    const OUTPUT = 10000;
    mockQuestions(['10000']);

    const purchaseAmount = await inputView.requestPurchaseAmount();
    expect(purchaseAmount).toBe(OUTPUT);
  });
});
