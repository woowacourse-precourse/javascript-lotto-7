import WinningLotto from '../src/model/WinningLottoModel.js';

describe('WinningLotto 클래스 테스트', () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const winningLotto = new WinningLotto(numbers);
  test('당첨 번호 저장하기', () => {
    expect(winningLotto.getNumbers()).toEqual(numbers);
  });

  test('보너스 번호 저장하기', () => {
    const bonusNumber = 30;
    winningLotto.setBonusNumber(bonusNumber);
    expect(winningLotto.getBonusNumber()).toEqual(bonusNumber);
  });
});
