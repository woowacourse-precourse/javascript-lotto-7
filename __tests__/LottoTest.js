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

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("로또 등수 출력 확인", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let result1 = lotto.checkWinNum([1, 2, 3, 4, 5, 7], 7);
    let result2 = lotto.checkWinNum([1, 10, 11, 12, 13, 14], 8);
    expect(result1).toEqual(3);
    expect(result2).toEqual(-1);
  })

  test("로또 당첨금 계산 확인", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    let returnRate1 = lotto.calculateMoney([1, 0, 0,0,0], 8000);
    let returnRate2 = lotto.calculateMoney([1, 1, 0,0,0], 50000);
    expect(returnRate1).toEqual(62.5);
    expect(returnRate2).toEqual(110);

  })
});
