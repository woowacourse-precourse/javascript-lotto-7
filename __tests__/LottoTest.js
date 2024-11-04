import Lotto from "../src/lotto/class/Lotto";
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from "../src/lotto/constants";
import { getLogSpy, mockQuestions } from "./ApplicationTest";

describe("Lotto 클래스 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현

  test("로또 1장의 번호가 6개를 초과하면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 1장의 번호가 6개 미만이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 최소 범위보다 낮으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([LOTTO_NUMBER_MIN - 1, 5, 6, 7, 8, 9]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 최대 범위보다 높으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([LOTTO_NUMBER_MAX + 1, 5, 6, 7, 8, 9]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test.each(["a", {}, true, () => {}, NaN])(
    "모든 로또 번호는 숫자가 아니면(%s) 예외가 발생한다.",
    (notNumber) => {
      expect(() => {
        new Lotto([notNumber, 1, 2, 3, 4, 5]);
      }).toThrow("[ERROR]");
    }
  );

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test.each([
    ["숫자 사이에 콤마가 없으면 예외가 발생한다.", "1-2,3,4,5,6"],
    [
      "사용자가 잘못된 값을 입력하면 정상적인 값을 받을 때까지 반복한다.",
      [
        "1-2,3,4,5,6",
        "1,,2,3,4,5,6",
        "0,1,2,3,4,5",
        "1,2,3,4,5",
        "NaN,1,2,3,4,5",
      ],
    ],
  ])("%s", async (_, INPUTS) => {
    // given
    const PASS_NUMBERS = "1,2,3,4,5,6";
    const logSpy = getLogSpy();

    mockQuestions([...INPUTS, PASS_NUMBERS]);

    // when
    await Lotto.createWinningNumbers();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
