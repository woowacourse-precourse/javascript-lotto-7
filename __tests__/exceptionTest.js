import Exception from "../src/exceptionHandling";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const validateError = (price) => {
  const logSpy = getLogSpy();
  const exception = new Exception();
  exception.validatePrice(price);
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("로또 게임에 대한 테스트", () => {
  test("[입력 테스트]구입 금액이 1000 단위가 아니면 예외가 발생한다.", () => {
    validateError(1234);
  });

  test("[입력 테스트]구입 금액을 공백으로 작성하면 예외가 발생한다.", () => {
    validateError("");
  });

  test("[입력 테스트]구입 금액을 공백으로 작성하면 예외가 발생한다.", () => {
    validateError(-1000);
  });
});
