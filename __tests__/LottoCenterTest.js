import LottoCenter from '../src/LottoCenter.js';

describe('LottoCenter 클래스 테스트', () => {
  let lottoCenter;

  beforeEach(() => {
    lottoCenter = new LottoCenter();
  });

  test.each([
    {
      lottos: [[1, 2, 3, 4, 5, 6]],
      winningNumbers: '1,2,3,4,5,6',
      bonusNumber: '7',
      result: [1],
    },
    {
      lottos: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 9, 10, 11],
      ],
      winningNumbers: '1,2,3,4,5,6',
      bonusNumber: '7',
      result: [1, 5],
    },
    {
      lottos: [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 9, 10, 11],
        [1, 2, 3, 4, 5, 7],
      ],
      winningNumbers: '1,2,3,4,5,6',
      bonusNumber: '7',
      result: [1, 5, 2],
    },
  ])(
    '구매한 로또와 당첨 번호를 비교해 당첨 결과를 가져온다.',
    ({ lottos, winningNumbers, bonusNumber, result }) => {
      lottoCenter.setWinningNumbers(winningNumbers, bonusNumber);
      const winningRanks = lottoCenter.getWinningRanks(lottos);

      expect(winningRanks).toEqual(result);
    },
  );
});
