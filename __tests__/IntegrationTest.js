import { Console, Random } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockInputs = (inputs) => {
  Console.readLineAsync = jest.fn(() => {
    const targetInput = inputs.shift();
    return Promise.resolve(targetInput);
  });
};

const mockRandomNumbers = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickUniqueNumbersInRange);
};

const getPrintLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    mockInputs(["2000", "1,2,3,4,5,6", "7"]);
    mockRandomNumbers([
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ]);

    const logs = [
      "2개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[7, 8, 9, 10, 11, 12]",
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 100,000,000.0%입니다.",
    ];
    const logSpy = getPrintLogSpy();

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log, index) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
