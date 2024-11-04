import { MissionUtils } from "@woowacourse/mission-utils";
import LottoPurchaseController from "../src/controller/LottoPurchaseController.js";
import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import LottoCollection from "../src/model/LottoCollection.js";

const inputView = new InputView();
const outputView = new OutputView();
const lottoCollection = new LottoCollection();

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

const runTest = async (questions, logs) => {
  const logSpy = getLogSpy();

  mockQuestions(questions);

  const lottoPurchaseController = new LottoPurchaseController(
    inputView,
    outputView,
    lottoCollection
  );
  await lottoPurchaseController.startPurchaseLotto();

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

describe("로또 발행 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test("성공 테스트 - 로또 금액에 맞는 로또 개수 출력", async () => {
    await runTest(["5000"], ["5개를 구매했습니다."]);
  });

  test("성공 테스트 - 로또 숫자 출력 테스트", async () => {
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ]);
    const questions = ["3000"];

    const logs = [
      "3개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
    ];
    await runTest(questions, logs);
  });
});
