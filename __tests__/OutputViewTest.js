import { Console } from '@woowacourse/mission-utils';
import Lotto from '../src/components/Lotto/Lotto.js';
import printGeneratedList from '../src/utils/OutputView.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('printGeneratedList 함수 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('로또 리스트 출력 테스트', () => {
    const lottoList = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];

    printGeneratedList(lottoList);

    expect(Console.print).toHaveBeenNthCalledWith(1, '');
    expect(Console.print).toHaveBeenNthCalledWith(2, '2개를 구매했습니다.');
    expect(Console.print).toHaveBeenNthCalledWith(3, '[1, 2, 3, 4, 5, 6]');
    expect(Console.print).toHaveBeenNthCalledWith(4, '[7, 8, 9, 10, 11, 12]');
    expect(Console.print).toHaveBeenNthCalledWith(5, '');
  });
});
