import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../src/View/InputView.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe('InputView 테스트', () => {
  let inputView;

  beforeEach(() => {
    jest.restoreAllMocks();
    inputView = new InputView();
  });

  test('구매 금액 입력', async () => {
    const OUTPUT = 10000;
    mockQuestions(['10000']);

    const purchaseAmount = await inputView.requestPurchaseAmount();
    expect(purchaseAmount).toBe(OUTPUT);
  });

  test('당첨 번호 입력', async () => {
    const OUTPUT = [1, 2, 3, 4, 5, 6];
    mockQuestions(['1,2,3,4,5,6']);

    const purchaseAmount = await inputView.requestWinningNum();
    expect(purchaseAmount).toEqual(OUTPUT);
  });

  test('보너스 번호 입력', async () => {
    const OUTPUT = [7];
    mockQuestions(['7']);

    const purchaseAmount = await inputView.requestBonusNum();
    expect(purchaseAmount).toEqual(OUTPUT);
  });
});
