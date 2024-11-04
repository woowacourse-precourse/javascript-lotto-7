import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7], 8);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5], 7);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("로또 번호가 1부터 45 사이의 범위를 벗어나면 예외가 발생한다.", () => {
    const outOfRangeNumbers = [0, 46, 47, 50, 100];
    outOfRangeNumbers.forEach((number) => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, number], 45);
      }).toThrow("[ERROR]");
    });
  });

  test("로또 번호가 음수이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, -2, -13], 45);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 숫자가 아닌 경우 예외가 발생한다.", () => {
    const isNotNumber = ["a", "b", "c3", "345abc"];
    isNotNumber.forEach((string) => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, string], 45);
      }).toThrow("[ERROR]");
    });
  });

  test("로또 번호 개수가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4], 45);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 3, 5, 5], 45);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 소수가 들어간 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 3.4, 23.8, 16.98673], 45);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 여러개인 경우", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6], [7, 8]);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 string이거나 범위에서 벗어난 경우", () => {
    const isNotNumber = ["a", "b", 0, 46, -12];
    isNotNumber.forEach((string) => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6], string);
      }).toThrow("[ERROR]");
    });
  });
});
