import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../src/Lotto";

describe("로또 기능 테스트", () => {
  test("로또 번호가 오름차순으로 정렬되어 출력된다", () => {
    const numbers = [6, 5, 4, 3, 2, 1];
    const lotto = new Lotto(numbers);

    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    lotto.printNumberArray();
    expect(logSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
  });

  test("당첨 등수를 정확히 판단한다", () => {
    const testCases = [
      {
        numbers: [1, 2, 3, 4, 5, 6],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expected: 1, // 1등: 6개 모두 일치
      },
      {
        numbers: [1, 2, 3, 4, 5, 7],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expected: 2, // 2등: 5개 일치 + 보너스
      },
      {
        numbers: [1, 2, 3, 4, 5, 8],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expected: 3, // 3등: 5개 일치
      },
      {
        numbers: [1, 2, 3, 4, 7, 8],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expected: 4, // 4등: 4개 일치
      },
      {
        numbers: [1, 2, 3, 7, 8, 9],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expected: 5, // 5등: 3개 일치
      },
      {
        numbers: [1, 2, 7, 8, 9, 10],
        winningNumbers: [1, 2, 3, 4, 5, 6],
        bonusNumber: 7,
        expected: 0, // 미당첨: 2개 이하 일치
      },
    ];

    testCases.forEach(({ numbers, winningNumbers, bonusNumber, expected }) => {
      const lotto = new Lotto(numbers);
      const actual = lotto.getLevel(winningNumbers, bonusNumber);
      expect(actual).toBe(expected);
    });
  });
});

describe("로또 클래스 예외 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "a"]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, NaN]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
});
