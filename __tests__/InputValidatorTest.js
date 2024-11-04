import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("입력값 검증 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const mockInputAndExpectError = async (inputs, errorMessage) => {
    // given
    const logSpy = getLogSpy();
    const inputArray = Array.isArray(inputs) ? inputs : [inputs];
    mockInput(inputArray);

    // when
    const app = new App();
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(errorMessage));
  };

  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };

  const mockInput = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    inputs.forEach((input) => {
      MissionUtils.Console.readLineAsync.mockImplementationOnce(() =>
        Promise.resolve(input),
      );
    });
  };

  test("구매 금액 검증", async () => {
    // 숫자가 아닌 입력
    await mockInputAndExpectError("abc", "[ERROR]");

    // 1000원 단위가 아닌 금액
    await mockInputAndExpectError("1500", "[ERROR]");

    // 음수 금액
    await mockInputAndExpectError("-1000", "[ERROR]");

    // 0원 금액
    await mockInputAndExpectError("0", "[ERROR]");
  });

  test("당첨 번호 검증", async () => {
    // 잘못된 쉼표 형식
    await mockInputAndExpectError(["1000", "1,,2,3,4,5,6"], "[ERROR]");
    await mockInputAndExpectError(["1000", ",1,2,3,4,5,6"], "[ERROR]");
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6,"], "[ERROR]");

    // 공백 포함
    await mockInputAndExpectError(["1000", "1, 2, 3, 4, 5, 6"], "[ERROR]");

    // 숫자 아님
    await mockInputAndExpectError(["1000", "a,2,3,4,5,6"], "[ERROR]");

    // 중복된 당첨 번호
    await mockInputAndExpectError(["1000", "1,1,2,3,4,5"], "[ERROR]");

    // 빈 값 검증
    await mockInputAndExpectError(["1000", ""], "[ERROR]");
    await mockInputAndExpectError(["1000", " "], "[ERROR]");

    // 숫자 개수 부족
    await mockInputAndExpectError(["1000", "1,2,3,4,5"], "[ERROR]");

    // 숫자 범위 검증
    await mockInputAndExpectError(["1000", "0,1,2,3,4,5"], "[ERROR]");
    await mockInputAndExpectError(["1000", "1,2,3,4,5,46"], "[ERROR]");
  });

  test("보너스 번호 검증", async () => {
    // 숫자 아님
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", "a"], "[ERROR]");

    // 범위 벗어남
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", "46"], "[ERROR]");
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", "0"], "[ERROR]");

    // 당첨 번호와 중복
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", "1"], "[ERROR]");

    // 빈 값 검증
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", ""], "[ERROR]");
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", " "], "[ERROR]");

    // 여러 숫자 입력
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", "1,2"], "[ERROR]");

    // 공백 포함
    await mockInputAndExpectError(["1000", "1,2,3,4,5,6", " 1 "], "[ERROR]");
  });
});
