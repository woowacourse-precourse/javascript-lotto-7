import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("로또 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("로또 번호가 배열 형식으로 출력되는지 확인", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);

    const app = new App();
    await app.run();

    // 로또 구입 메시지 확인
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("8개를 구매했습니다."));

    // 로또 번호 배열의 형식과 구조 확인
    logSpy.mock.calls.forEach((call) => {
      const [output] = call;
      if (Array.isArray(output)) {
        // 배열 길이가 6인지 확인
        expect(output.length).toBe(6);
        // 모든 요소가 숫자인지 확인
        output.forEach((num) => expect(typeof num).toBe("number"));
      }
    });
  });
});