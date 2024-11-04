import { Calculate } from '../src/Calculate.js';
import { MissionUtils } from '@woowacourse/mission-utils';

describe('Calculate 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
  };

  describe('당첨 결과 계산 테스트', () => {
    test('모든 번호가 일치하는 경우 (1등)', () => {
      // given
      const lottoList = [[1, 2, 3, 4, 5, 6]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('6개 일치 (2,000,000,000원) - 1개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('총 수익률은 200000000.0%입니다.'),
      );
    });

    test('5개 일치 + 보너스 번호 일치하는 경우 (2등)', () => {
      // given
      const lottoList = [[1, 2, 3, 4, 5, 7]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        ),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('총 수익률은 3000000.0%입니다.'),
      );
    });

    test('5개 일치하는 경우 (3등)', () => {
      // given
      const lottoList = [[1, 2, 3, 4, 5, 8]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('5개 일치 (1,500,000원) - 1개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('총 수익률은 150000.0%입니다.'),
      );
    });

    test('4개 일치하는 경우 (4등)', () => {
      // given
      const lottoList = [[1, 2, 3, 4, 8, 9]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('4개 일치 (50,000원) - 1개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('총 수익률은 5000.0%입니다.'),
      );
    });

    test('3개 일치하는 경우 (5등)', () => {
      // given
      const lottoList = [[1, 2, 3, 8, 9, 10]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('3개 일치 (5,000원) - 1개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('총 수익률은 500.0%입니다.'),
      );
    });

    test('2개 이하 일치하는 경우 (미당첨)', () => {
      // given
      const lottoList = [[1, 2, 8, 9, 10, 11]];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('3개 일치 (5,000원) - 0개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('총 수익률은 0.0%입니다.'),
      );
    });

    test('여러 장의 로또 결과 계산', () => {
      // given
      const lottoList = [
        [1, 2, 3, 4, 5, 6], // 1등
        [1, 2, 3, 4, 5, 7], // 2등
        [1, 2, 3, 4, 5, 8], // 3등
        [1, 2, 3, 8, 9, 10], // 5등
      ];
      const winningLotto = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;
      const calculate = new Calculate(lottoList, winningLotto, bonusNumber);
      const logSpy = getLogSpy();

      // when
      calculate.printResults();

      // then
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('6개 일치 (2,000,000,000원) - 1개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          '5개 일치, 보너스 볼 일치 (30,000,000원) - 1개',
        ),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('5개 일치 (1,500,000원) - 1개'),
      );
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining('3개 일치 (5,000원) - 1개'),
      );
    });
  });
});
