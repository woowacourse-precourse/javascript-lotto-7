import App from "../src/App";
import Lotto from "../src/Lotto";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runException = async (input) => {
  // given
  const logSpy = getLogSpy();

  const RANDOM_NUMBERS_TO_END = [1, 2, 3, 4, 5, 6];
  const INPUT_NUMBERS_TO_END = ["1000", "1,2,3,4,5,6", "7"];

  mockRandoms([RANDOM_NUMBERS_TO_END]);
  mockQuestions([input, ...INPUT_NUMBERS_TO_END]);

  // when
  const app = new App();
  await app.run();

  // then
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
};

describe("로또 발매기 예외 처리 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("로또 구입 금액이 1,000원 단위가 아닌 경우", async () => {
    await runException("1500"); // 1000원 단위가 아님
    await runException("999"); // 1000원 미만
  });

  test("로또 번호가 6개가 아닌 경우", async () => {
    await runException("1,2,3,4,5"); // 5개 입력
    await runException("1,2,3,4,5,6,7"); // 7개 입력
  });

  test("보너스 번호가 당첨 번호와 중복되는 경우", async () => {
    await runException("1,2,3,4,5,6,6"); // 보너스 번호 중복
  });

  test("구입 금액, 당첨 번호, 보너스 번호에 숫자가 아닌 값이 포함된 경우", async () => {
    await runException("abc"); // 구입 금액이 숫자가 아닌 경우
    await runException("1,2,3,4,5,abc"); // 당첨 번호에 숫자가 아닌 값 포함
    await runException("7,1,2,3,4,5,a"); // 보너스 번호가 숫자가 아닌 경우
  });
});
