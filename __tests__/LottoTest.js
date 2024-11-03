import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1보다 작거나 45보다 크면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45 사이의 중복되지 않은 6개일 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });

  describe("로또 번호 생성 및 검증 시나리오 테스트", () => {
    test("정상적인 로또 번호로 객체 생성", () => {
      const lotto = new Lotto([10, 15, 20, 25, 30, 35]);
      expect(lotto.getNumbers()).toEqual([10, 15, 20, 25, 30, 35]);
    });

    test("정렬된 로또 번호를 반환한다.", () => {
      const lotto = new Lotto([35, 10, 20, 15, 30, 25]);
      expect(lotto.getNumbers()).toEqual([10, 15, 20, 25, 30, 35]);
    });
  });

  describe("경계 값 테스트", () => {
    test("로또 번호가 1인 경우 예외가 발생하지 않는다.", () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });

    test("로또 번호가 45인 경우 예외가 발생하지 않는다.", () => {
      expect(() => {
        new Lotto([40, 41, 42, 43, 44, 45]);
      }).not.toThrow();
    });
  });
});
