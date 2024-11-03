import { MissionUtils } from "@woowacourse/mission-utils";
import {
  generateLottoNumbers,
  getRandomLottoNumbers,
  loopPrintLottoNumbers,
  printResult,
  getMatchCount,
} from "../src/util/lotto-util.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 유틸 함수 테스트", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test.each([
    {
      input: 1,
      lottoNumbers: [[6, 3, 4, 2, 1, 5]],
      response: [[1, 2, 3, 4, 5, 6]],
    },
    {
      input: 2,
      lottoNumbers: [
        [6, 3, 4, 2, 1, 5],
        [45, 24, 12, 7, 38, 4],
      ],
      response: [
        [1, 2, 3, 4, 5, 6],
        [4, 7, 12, 24, 38, 45],
      ],
    },
  ])("로또 번호 제네레이트 테스트 %o", ({ input, lottoNumbers, response }) => {
    mockRandoms(lottoNumbers);
    const result = generateLottoNumbers(input);

    expect(result).toEqual(response);
  });

  test("로또 번호 생성 테스트", () => {
    const lottoNumbers = [[1, 2, 3, 4, 5, 6]];
    mockRandoms(lottoNumbers);
    const result = getRandomLottoNumbers();

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("loopPrintLottoNumbers 테스트", () => {
    const lottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [4, 7, 12, 24, 38, 45],
    ];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    const count = 2;
    logSpy.mockClear();

    loopPrintLottoNumbers(count, lottoNumbers);

    const logs = [
      "2개를 구매했습니다.",
      "[1, 2, 3, 4, 5, 6]",
      "[4, 7, 12, 24, 38, 45]",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("printResult 테스트", () => {
    const lottoNumbers = "1,2,3,4,5,6";
    const bonusNumber = 15;
    const generatedLottoNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 5, 6, 38, 45],
    ];

    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();

    printResult(lottoNumbers, bonusNumber, generatedLottoNumbers);

    const logs = [
      "3개 일치 (5,000원) - 0개",
      "4개 일치 (50,000원) - 1개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 1개",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    {
      generatedLotto: [1, 2, 3, 4, 5, 6],
      lottoNumbers: "7,8,9,19,21,45",
      response: 0,
    },
    {
      generatedLotto: [1, 2, 3, 4, 5, 6],
      lottoNumbers: "1,2,3,4,5,6",
      response: 6,
    },
    {
      generatedLotto: [1, 2, 3, 4, 5, 6],
      lottoNumbers: "1,2,3,4,5,7",
      response: 5,
    },
  ])(
    "getMatchCount 테스트 %o",
    ({ generatedLotto, lottoNumbers, response }) => {
      const count = getMatchCount(generatedLotto, lottoNumbers);

      expect(count).toBe(response);
    }
  );
});
