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

  test('로또 구매 개수가 올바르게 출력된다.', () => {
    const lottoCount = '8';
    const expectedMessage = `${lottoCount} ${OUTPUT_MESSAGE.LOTTO_PURCHASE_MESSAGE}`;
    OutputView.printPurchaseAmount(lottoCount);

    expect(Console.print).toHaveBeenCalledWith(expectedMessage);
  });

  test('구매한 로또의 번호들이 올바르게 출력된다.', () => {
    const lottos = [1, 2, 3, 4, 5, 6];
    const expectedMessage = '[1,2,3,4,5,6]';
    OutputView.printLottoTicket(lottos);

    expect(Console.print).toHaveBeenCalledWith(expectedMessage);
  });
});
