import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  
 describe('당첨 여부 확인 테스트', () => {
  test('6개 번호가 모두 일치하면 1등이다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const result = lotto.checkWinningStatus([1, 2, 3, 4, 5, 6], 7);
    
    expect(result.matchCount).toBe(6);
    expect(result.hasBonus).toBe(false);
  });

  test('5개 번호와 보너스 번호가 일치하면 2등이다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
    const result = lotto.checkWinningStatus([1, 2, 3, 4, 5, 6], 7);
    
    expect(result.matchCount).toBe(5);
    expect(result.hasBonus).toBe(true);
  });

  test('5개 번호가 일치하면 3등이다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 10]);
    const result = lotto.checkWinningStatus([1, 2, 3, 4, 5, 6], 7);
    
    expect(result.matchCount).toBe(5);
    expect(result.hasBonus).toBe(false);
  });

  test('4개 번호가 일치하면 4등이다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 10, 11]);
    const result = lotto.checkWinningStatus([1, 2, 3, 4, 5, 6], 7);
    
    expect(result.matchCount).toBe(4);
    expect(result.hasBonus).toBe(false);
  });

  test('3개 번호가 일치하면 5등이다', () => {
    const lotto = new Lotto([1, 2, 3, 10, 11, 12]);
    const result = lotto.checkWinningStatus([1, 2, 3, 4, 5, 6], 7);
    
    expect(result.matchCount).toBe(3);
    expect(result.hasBonus).toBe(false);
  });

  test('2개 이하의 번호가 일치하면 꽝이다', () => {
    const lotto = new Lotto([1, 2, 10, 11, 12, 13]);
    const result = lotto.checkWinningStatus([1, 2, 3, 4, 5, 6], 7);
    
    expect(result.matchCount).toBe(2);
    expect(result.hasBonus).toBe(false);
  });
});
});
