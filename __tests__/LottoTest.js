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

  test("로또 번호에 1 미만 또는 45 초과의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("로또 번호를 정상적으로 생성하고 출력한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    console.log = jest.fn();
    lotto.printNumbers();
    expect(console.log).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
  });

  test("로또 당첨 번호와 일치하는 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.checkWinNumbers(winNumbers)).toBe(3);
  });

  test("일치하는 숫자 수와 보너스 여부에 따라 상금을 계산한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.calculatePrize(3)).toBe(5000);
    expect(lotto.calculatePrize(4)).toBe(50000);
    expect(lotto.calculatePrize(5, false)).toBe(1500000);
    expect(lotto.calculatePrize(5, true)).toBe(30000000);
    expect(lotto.calculatePrize(6)).toBe(2000000000);
    expect(lotto.calculatePrize(2)).toBe(0);
  });
});
