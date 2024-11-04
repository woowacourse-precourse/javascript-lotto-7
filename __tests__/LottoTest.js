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

describe("Lotto 클래스의 static 메서드 checkLottoResult 테스트", () => {
  let prizeLotto;
  let bonusNumber;

  beforeAll(() => {
    // 당첨 번호와 보너스 번호 설정
    prizeLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    bonusNumber = 7;
  });

  test("1등: 6개 번호가 모두 일치할 때", () => {
    const userLotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(Lotto.checkLottoResult(userLotto, prizeLotto, bonusNumber)).toBe(1);
  });

  test("2등: 5개 번호가 일치하고 보너스 번호도 일치할 때", () => {
    const userLotto = new Lotto([1, 2, 3, 4, 5, 7]);
    expect(Lotto.checkLottoResult(userLotto, prizeLotto, bonusNumber)).toBe(2);
  });

  test("3등: 5개 번호만 일치할 때", () => {
    const userLotto = new Lotto([1, 2, 3, 4, 5, 8]);
    expect(Lotto.checkLottoResult(userLotto, prizeLotto, bonusNumber)).toBe(3);
  });

  test("4등: 4개 번호가 일치할 때", () => {
    const userLotto = new Lotto([1, 2, 3, 4, 8, 9]);
    expect(Lotto.checkLottoResult(userLotto, prizeLotto, bonusNumber)).toBe(4);
  });

  test("5등: 3개 번호가 일치할 때", () => {
    const userLotto = new Lotto([1, 2, 3, 10, 11, 12]);
    expect(Lotto.checkLottoResult(userLotto, prizeLotto, bonusNumber)).toBe(5);
  });

  test("낙첨: 2개 이하의 번호만 일치할 때", () => {
    const userLotto = new Lotto([1, 2, 10, 11, 12, 13]);
    expect(Lotto.checkLottoResult(userLotto, prizeLotto, bonusNumber)).toBe(6);
  });
});