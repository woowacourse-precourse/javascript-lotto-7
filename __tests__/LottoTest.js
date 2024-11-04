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
  // 예외 테스트: 로또 번호가 범위를 벗어날 때
  test("로또 번호가 1에서 45의 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  // 예외 테스트: 보너스 번호 검증
  test("보너스 번호가 유효하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      Lotto.validateBonus("abc", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 숫자여야 합니다.");

    expect(() => {
      Lotto.validateBonus(50, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");

    expect(() => {
      Lotto.validateBonus(5, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.");
  });

  // 기능 테스트: 로또 번호가 올바르게 생성되는지 확인
  test("로또 번호가 1부터 45 사이의 고유한 6개 숫자로 생성된다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  // 기능 테스트: 당첨 번호와의 일치 개수를 반환하는 기능 확인
  test("로또 번호와 비교할 때 일치하는 번호 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.matchCount([1, 2, 3, 7, 8, 9])).toBe(3);
  });

  // 기능 테스트: 보너스 번호 존재 여부 확인
  test("로또 번호에 보너스 번호가 포함되어 있는지 확인한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.hasBonus(3)).toBe(true);
    expect(lotto.hasBonus(7)).toBe(false);
  });
});
