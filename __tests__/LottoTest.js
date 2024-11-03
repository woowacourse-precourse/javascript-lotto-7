import Lotto from '../src/Lotto';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호의 개수가 6개 미만일 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호가 숫자가 아닌 경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6j']);
    }).toThrow('[ERROR]');
  });

  test('로또 상금 정보가 정의되어 있다.', () => {
    const WINNINGS = [
      { rank: 5, basicCount: 3, bonusCount: 0, prize: 5000 },
      { rank: 4, basicCount: 4, bonusCount: 0, prize: 50000 },
      { rank: 3, basicCount: 5, bonusCount: 0, prize: 1500000 },
      { rank: 2, basicCount: 5, bonusCount: 1, prize: 30000000 },
      { rank: 1, basicCount: 6, bonusCount: 0, prize: 2000000000 },
    ];
    const winnings = Lotto.getWinnings();

    expect(winnings).toEqual(WINNINGS);
  });

  test('당첨 번호, 보너스 볼 번호를 가지고 당첨 유무를 확인한다.', () => {
    const WINNINGS = [
      { rank: 5, basicCount: 3, bonusCount: 0, prize: 5000 },
      { rank: 4, basicCount: 4, bonusCount: 0, prize: 50000 },
      { rank: 3, basicCount: 5, bonusCount: 0, prize: 1500000 },
      { rank: 2, basicCount: 5, bonusCount: 1, prize: 30000000 },
      { rank: 1, basicCount: 6, bonusCount: 0, prize: 2000000000 },
    ];
    const [WINNING_NUMBERS, BONUS_NUMBER] = ['1,2,3,4,5,6', '7'];
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const win = lotto.win(WINNING_NUMBERS, BONUS_NUMBER);

    expect(win).toEqual(WINNINGS[4]);
  });

  test('당첨 순위를 가지고 당첨 정보를 제공한다.', () => {
    const WINNINGS = [
      { rank: 5, basicCount: 3, bonusCount: 0, prize: 5000 },
      { rank: 4, basicCount: 4, bonusCount: 0, prize: 50000 },
      { rank: 3, basicCount: 5, bonusCount: 0, prize: 1500000 },
      { rank: 2, basicCount: 5, bonusCount: 1, prize: 30000000 },
      { rank: 1, basicCount: 6, bonusCount: 0, prize: 2000000000 },
    ];

    expect(Lotto.getWinningByRank(1)).toEqual(WINNINGS[4]);
  });
});
