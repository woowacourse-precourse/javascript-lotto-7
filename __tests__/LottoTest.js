import Lotto from "../src/models/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
  });

  test("로또 번호가 1부터 45 사이의 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
  });

  test("로또 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("유효한 로또 번호로 객체가 정상적으로 생성된다.", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual(numbers);
  });

  test("로또 번호는 정렬된 상태로 반환된다.", () => {
    const numbers = [6, 3, 1, 4, 5, 2];
    const lotto = new Lotto(numbers);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  describe("당첨 번호 매칭 테스트", () => {
    test("당첨 번호와 보너스 번호 매칭이 정상적으로 동작한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const result = lotto.match([1, 2, 3, 7, 8, 9], 6);

      expect(result).toEqual({
        matchCount: 3,
        matchBonus: true
      });
    });

    test("모든 번호가 일치하는 경우를 정확히 판단한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const result = lotto.match([1, 2, 3, 4, 5, 6], 7);

      expect(result).toEqual({
        matchCount: 6,
        matchBonus: false
      });
    });

    test("일치하는 번호가 없는 경우를 정확히 판단한다.", () => {
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      const result = lotto.match([7, 8, 9, 10, 11, 12], 13);

      expect(result).toEqual({
        matchCount: 0,
        matchBonus: false
      });
    });
  });
});