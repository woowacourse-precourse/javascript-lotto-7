import { Console } from '@woowacourse/mission-utils';
import OutputView from '../src/view/OuputView';
import { RANK_OUTPUT_MESSAGE } from '../src/constant/ouputMessage';

describe('OuputView 클래스 테스트', () => {
  const spy = jest.spyOn(Console, 'print');

  beforeEach(() => {
    spy.mockClear();
  });

  test('로또 정보 출력', () => {
    const lottoLength = 3;
    const lottoNumbersArray = [
      [1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7],
      [5, 6, 7, 13, 23, 33],
    ];

    OutputView.lottosInformation({ lottoLength, lottoNumbersArray });

    lottoNumbersArray.forEach((lottoNumbers) => {
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(lottoNumbers.join(', ')),
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
    OutputView.winningStatistics(lottoRankMap);

    Object.values(RANK_OUTPUT_MESSAGE).forEach((message, index) => {
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(`${message} - ${lottoRanks[index]}개`),
      );
    });
  });
});
