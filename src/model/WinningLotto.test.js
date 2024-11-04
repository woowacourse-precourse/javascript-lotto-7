import WinningLotto from './WinningLotto';
import Lotto from './Lotto';
describe('당첨 로또 클래스 테스트', () => {
  test('당첨 로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7], 6);
    }).toThrow('[ERROR]');
  });

  test('당첨 로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5], 8);
    }).toThrow('[ERROR]');
  });

  //   test('보너스 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
  //     console.log(new WinningLotto([1, 2, 3, 4, 5, 6], 70));
  //     expect(() => {
  //       new WinningLotto([1, 2, 3, 4, 5, 6], 140);
  //     }).toThrow('[ERROR]');
  //   });

  // test('4개 당첨', () => {
  //   const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 8);
  //   const lotto = new Lotto([1, 2, 3, 4, 9, 10]);
  //   expect(winningLotto.getWinningResult(lotto.getNumbers())).toBe(4);
  // });
});
