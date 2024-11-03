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
  test("로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("정상적인 로또 번호가 주어지면 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  test("정렬된 로또 번호가 올바르게 반환된다.", () => {
    const lotto = new Lotto([6, 5, 4, 3, 2, 1]);
    expect(lotto.getlottoList()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("로또 당첨 결과 테스트", () => {
  test.each([
    [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], 7, 1], // 1등
    [[1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 6], 7, 2], // 2등
    [[1, 2, 3, 4, 5, 8], [1, 2, 3, 4, 5, 6], 7, 3], // 3등
    [[1, 2, 3, 4, 10, 11], [1, 2, 3, 4, 5, 6], 7, 4], // 4등
    [[1, 2, 3, 10, 11, 12], [1, 2, 3, 4, 5, 6], 7, 5], // 5등
    [[1, 2, 9, 10, 11, 12], [1, 2, 3, 4, 5, 6], 13, 6] // 당첨 제외
  ])("getWinResult(%j, %j, %d) returns %d", (lottoNumbers, winNumbers, bonusNumber, expected) => {
    const lotto = new Lotto(lottoNumbers);
    expect(lotto.getWinResult(winNumbers, bonusNumber)).toBe(expected);
  });
});
