import Winning from '../src/Winning';

describe('WinnintTest 클래스 테스트', () => {
  test('여러개의 로또 중 당첨 로또의 등수 갯수를 출력하는 테스트', () => {
    const lottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
    ];
    const winningLottoNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const winning = new Winning(lottos, winningLottoNumber, bonusNumber);

    expect(winning.gradeArray).toEqual([0, 1, 1, 1, 0, 0]);
  });
});
