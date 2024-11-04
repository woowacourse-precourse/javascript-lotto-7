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

  test("로또 번호가 유효 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => new Lotto([0, 2, 3, 4, 5, 6])).toThrow('[ERROR]')
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow('[ERROR]')
  });

  test("로또 번호가 올바르게 정렬되어 저장된다.", () => {
    const lotto = new Lotto([6, 2, 3, 1, 5, 4]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("toString 메서드가 올바른 문자열을 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.toString()).toBe("[1, 2, 3, 4, 5, 6]");
  });

  test("getNumbers 메서드가 번호 배열을 올바르게 반환한다.", () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(lottoNumbers);
    expect(lotto.getNumbers()).toEqual(lottoNumbers);
  });
});
