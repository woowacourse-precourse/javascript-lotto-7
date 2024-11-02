import OutputView from '../src/view/OutputView.js';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../src/constants/messages.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('OutputView 클래스 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('', () => {
    const lottoCount = '8';
    const expectedMessage = `${lottoCount} ${OUTPUT_MESSAGE.LOTTO_PURCHASE_MESSAGE}`;
    OutputView.printPurchaseAmount(lottoCount);

    expect(Console.print).toHaveBeenCalledWith(expectedMessage);
  });
});
