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
  test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호가 유효하면 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("로또 번호가 오름차순으로 정렬된다.", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("로또 번호가 당첨 번호와 일치하는 개수 1를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(1);
  });

  test("로또 번호가 보너스 번호와 일치하는 경우 2를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 45], 6)).toBe(2);
  });

  test("로또 번호가 당첨 번호와 5개 일치하는 경우 3를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(3);
  });

  test("로또 번호가 당첨 번호와 4개 일치하는 경우 4를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 7, 8]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(4);
  });

  test("로또 번호가 당첨 번호와 3개 일치하는 경우 5를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 7, 8, 9]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(5);
  });

  test("로또 번호가 당첨 번호와 2개 이하 일치하는 경우 6를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 7, 8, 9, 10]);
    expect(lotto.getRank([1, 2, 3, 4, 5, 6], 7)).toBe(6);
  });
});
