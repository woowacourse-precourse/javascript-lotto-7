import { MissionUtils } from "@woowacourse/mission-utils";
import LottoGame from "../src/domain/LottoGame.js";

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

describe("LottoGame 클래스 테스트", () => {
  test("로또 구입 테스트", async () => {
    const logSpy = getLogSpy();

    mockRandoms([
      [2, 7, 13, 20, 32, 39],
      [1, 2, 3, 16, 23, 37],
      [2, 5, 13, 22, 27, 43],
      [1, 8, 13, 24, 30, 33],
      [2, 3, 11, 19, 29, 34],
    ]);
    mockQuestions(["5000", "1,2,3,4,5,6", "8"]);

    // when
    const lottoGame = new LottoGame();
    await lottoGame.play();

    // then
    expect(logSpy).toHaveBeenCalledWith('5개를 구매했습니다.');
  });
});
