import Lotto from "../src/domain/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
    
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5.5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호는 오름차순으로 정렬되어 반환된다.", () => {
    const lotto = new Lotto([6, 3, 5, 1, 2, 4]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("당첨 번호와 일치하는 번호의 개수를 반환한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 7, 8, 9];
    expect(lotto.match(winningNumbers)).toBe(3);
  });

  test("보너스 번호가 포함되어 있는지 확인한다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.contains(6)).toBe(true);
    expect(lotto.contains(7)).toBe(false);
  });

  test("빈 배열이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 null이나 undefined가 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, null, 4, 5]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 2, 3, undefined, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 문자열이 포함되면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, '4', 5, 6]);
    }).toThrow("[ERROR]");
  });

  test("음수가 포함된 로또 번호는 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, -1, 4, 5]);
    }).toThrow("[ERROR]");
  });

});