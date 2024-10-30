import Exception from "../src/exceptionHandling";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 게임에 대한 테스트", () => {
  test("[입력 테스트]구입 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    const logSpy = getLogSpy();

    const exception = new Exception();
    exception.validatePrice(1234);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });
});
