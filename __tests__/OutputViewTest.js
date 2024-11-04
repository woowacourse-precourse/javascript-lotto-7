import { Console } from '@woowacourse/mission-utils';
import OutputView from '../src/view/OutputView';
import { RANK_OUTPUT_MESSAGE } from '../src/constant/outputMessage';

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
      ['5등', 1],
      ['4등', 3],
      ['3등', 1],
      ['2등', 0],
      ['1등', 0],
    ]);

    OutputView.winningStatistics(lottoRankMap);

    lottoRankMap.forEach((count, rankName) => {
      expect(spy).toHaveBeenCalledWith(
        expect.stringContaining(
          `${RANK_OUTPUT_MESSAGE[rankName]} - ${count}개`,
        ),
      );
    });
  });
});
