import Lotto from "../src/models/Lotto";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

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

  test("로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, "test", 4, "6", 5]);
    }).toThrow("[ERROR]");
  });

  test("join 메서드를 사용하면 로또 번호 배열을 대괄호와 함께', '로 연결시킨다.", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.join()).toBe("[1, 2, 3, 4, 5, 6]");
  });

  test("print 메서드를 사용하면 문자열화된 로또 번호를 프롬프트창에 표시한다.", () => {
    const logSpy = getLogSpy();
    const expectedLog = "[1, 2, 3, 4, 5, 6]";

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.print();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedLog));

    logSpy.mockRestore();
  });
});
