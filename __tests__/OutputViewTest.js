import OutputView from '../src/views/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

describe('OutputView 테스트', () => {
  beforeEach(() => {
    jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  // 테스트 케이스 1: 로또 구매 수량 출력 기능을 테스트
  test('로또 구매 수량 출력 테스트', () => { 
    OutputView.displayLottoCount(8);
    expect(Console.print).toHaveBeenCalledWith('8개를 구매했습니다.');
  });
  // 테스트 케이스 2: 로또 번호 출력 기능을 테스트
  test('로또 번호 출력 테스트', () => {
    const lottos = [
      { getNumbers: () => [1, 2, 3, 4, 5, 6] },
      { getNumbers: () => [7, 8, 9, 10, 11, 12] },
    ];
    OutputView.displayLottoNumbers(lottos);
    expect(Console.print).toHaveBeenCalledWith('[1, 2, 3, 4, 5, 6]');
    expect(Console.print).toHaveBeenCalledWith('[7, 8, 9, 10, 11, 12]');
  });
});
