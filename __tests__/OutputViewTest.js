import { Console } from '@woowacourse/mission-utils';
import OutputView from '../src/view/OuputView';
import { MATCH_OUTPUT_MESSAGE } from '../src/constant/ouputMessage';

describe('OuputView 클래스 테스트', () => {
  const spy = jest.spyOn(Console, 'print');

  beforeEach(() => {
    spy.mockClear();
  });

  test('로또 정보 출력', () => {
    const lottoLength = 3;
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [5, 6, 7, 13, 23, 33],
    ];

    OutputView.printLottosInformation({ lottoLength, lottoNumbers });

    lottoNumbers.forEach((numbers) => {
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(numbers.join(', ')),
      );
    });
  });

  test('당첨 통계 출력', () => {
    const lottoRankMap = new Map([
      [3, 1],
      [4, 3],
      [5, 1],
      ['5+', 0],
    ]);

    const lottoRanks = Array.from(lottoRankMap.values());
    OutputView.printWinningStatistics(lottoRankMap);

    Object.values(MATCH_OUTPUT_MESSAGE).forEach((message, index) => {
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(`${message} - ${lottoRanks[index]}개`),
      );
    });
  });
});
