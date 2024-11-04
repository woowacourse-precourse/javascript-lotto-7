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

  describe("Lotto 클래스 유효성 검사 테스트", () => {
    // 1. 유효한 로또 번호 테스트
    test("유효한 번호로 Lotto 인스턴스를 생성하면 예외가 발생하지 않는다.", () => {
      const validNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => new Lotto(validNumbers)).not.toThrow();
    });

    // 2. 6개 미만 또는 초과 번호 입력 테스트
    test("6개 미만 또는 초과 번호로 Lotto 인스턴스를 생성하면 예외가 발생한다.", () => {
      expect(() => new Lotto([1, 2, 3, 4, 5])).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
      expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
    });

    // 3. 중복된 번호 테스트
    test("중복된 번호로 Lotto 인스턴스를 생성하면 예외가 발생한다.", () => {
      expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow("[ERROR] 로또 번호는 중복될 수 없습니다.");
    });

    // 4. 1~45 범위를 벗어난 번호 테스트
    test("1~45 범위를 벗어난 번호로 Lotto 인스턴스를 생성하면 예외가 발생한다.", () => {
      expect(() => new Lotto([0, 1, 2, 3, 4, 5])).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    });
  });
});
