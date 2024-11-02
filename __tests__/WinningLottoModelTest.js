import WinningLottoModel from '../src/model/WinningLottoModel.js';

describe('WinningLotto 클래스 테스트', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const wnningLottoModel = new WinningLottoModel(numbers);
  wnningLottoModel.setBonusNumber(7);

  test('로또 등수 계산', () => {
    const lottosNumber = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [2, 3, 4, 5, 6, 8],
      [3, 4, 5, 6, 7, 8],
      [4, 5, 6, 7, 8, 9],
    ];

    const results = [6, '5+', 5, 4, 3];

    results.forEach((result, index) => {
      expect(wnningLottoModel.calculateRank(lottosNumber[index])).toEqual(
        result,
      );
    });
  });
});
