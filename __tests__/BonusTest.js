import Bonus from "../src/lotto/class/Bonus";
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from "../src/lotto/constants";
import { getLogSpy, mockQuestions } from "./ApplicationTest";

describe("Bonus 클래스 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현

  test.each(["a", {}, true, () => {}, NaN])(
    "보너스 번호는 숫자가 아니면(%s) 에러가 발생한다.",
    (notNumber) => {
      expect(() => {
        new Bonus(notNumber);
      }).toThrow("[ERROR]");
    }
  );

  test("보너스 번호가 최소 범위보다 낮으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(LOTTO_NUMBER_MIN - 1);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 최대 범위보다 높으면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(LOTTO_NUMBER_MAX + 1);
    }).toThrow("[ERROR]");
  });

  test("보너스 번호는 로또 번호와 중복되면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  test("사용자가 잘못된 값을 입력하면 정상적인 값을 받을 때까지 반복한다.", async () => {
    // given
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
    const PASS_NUMBER = "10";
    const INPUTS = ["1", "0", "-1", "문자", "NaN", "46"];
    const logSpy = getLogSpy();

    mockQuestions([...INPUTS, PASS_NUMBER]);

    // when
    await Bonus.createForLotto(LOTTO_NUMBERS);

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
