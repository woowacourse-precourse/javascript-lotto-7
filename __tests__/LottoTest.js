import App from "../src/App.js";
import { read } from "../src/lib/utils.js";
import Lotto from "../src/Lotto";
import { mockQuestions, mockRandoms, getLogSpy } from "../src/lib/testUtils.js";
import {
  PRICE_ERROR,
  LOTTO_NUM_ERROR,
  BONUS_NUM_ERROR,
  ONLY_NUM_ERROR,
} from "../src/lib/error.js";

import {
  handlePrice,
  handleLottoNumbers,
  handleBonusNumber,
} from "../src/lib/validation.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 숫자가 아닌 문자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "!"]);
    }).toThrow("[ERROR]");
  });
});

describe("로또 구입 금액 입력 테스트", () => {
  const PASS_CASE = [
    [["8000"], "8000"],
    [["3500"], "3500"],
  ];

  const ERROR_CASE = [
    [["300"], PRICE_ERROR.less],
    [["100001"], PRICE_ERROR.over],
    [["3000!"], ONLY_NUM_ERROR],
  ];

  test.each(PASS_CASE)("로또 구입 금액 패스 테스트", async (input, message) => {
    mockQuestions(input);
    const consoleInput = await read();

    expect(consoleInput).toEqual(message);
  });

  test.each(ERROR_CASE)("로또 구입 금액 에러 테스트", async (input, error) => {
    const logSpy = getLogSpy();

    mockQuestions(input);
    const consoleInput = await read();
    handlePrice(consoleInput);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(error));
  });
});

describe("로또 번호 입력 테스트", () => {
  const PASS_CASE = [
    [["1,2,3,4,5,6"], "1,2,3,4,5,6"],
    [["1,13,15,27,33,22"], "1,13,15,27,33,22"],
  ];

  const ERROR_CASE = [
    [["1,2,3,4,5,6,7"], LOTTO_NUM_ERROR.length],
    [["1,2,3,4,,,7"], LOTTO_NUM_ERROR.length],
    [["1,13,15,27,33,33"], LOTTO_NUM_ERROR.duplicated],
    [["1,13,15,27,33,47"], LOTTO_NUM_ERROR.range],
    [["1,13,15,27,33,34!"], ONLY_NUM_ERROR],
  ];

  test.each(PASS_CASE)("로또 번호 입력 패스 테스트", async (input, message) => {
    mockQuestions(input);
    const consoleInput = await read();

    expect(consoleInput).toEqual(message);
  });

  test.each(ERROR_CASE)("로또 번호 입력 에러 테스트", async (input, error) => {
    const logSpy = getLogSpy();

    mockQuestions(input);
    const consoleInput = await read();
    handleLottoNumbers(consoleInput);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(error));
  });
});

describe("보너스 번호 입력 테스트", () => {
  const PASS_CASE = [
    [["1"], "1"],
    [["45"], "45"],
  ];

  const ERROR_CASE = [
    [["1,2"], ONLY_NUM_ERROR],
    [["142"], LOTTO_NUM_ERROR.range],
    [["15"], BONUS_NUM_ERROR.duplicated],
  ];

  test.each(PASS_CASE)(
    "보너스 번호 입력 패스 테스트",
    async (input, message) => {
      mockQuestions(input);
      const consoleInput = await read();

      expect(consoleInput).toEqual(message);
    }
  );

  test.each(ERROR_CASE)(
    "보너스 번호 입력 에러 테스트",
    async (input, error) => {
      const logSpy = getLogSpy();

      mockQuestions(input);
      const consoleInput = await read();
      handleBonusNumber(["15", "16", "17", "18", "19", "20"], consoleInput);

      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(error));
    }
  );
});

describe("로또 결과 테스트", () => {
  const mockLottos = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 7],
    [1, 2, 8, 9, 10, 11],
  ];
  const mockInputs = ["3300", "1,2,3,4,5,6", "7"];

  test("당첨 통계 테스트", async () => {
    const logSpy = getLogSpy();

    mockRandoms(mockLottos);
    mockQuestions(mockInputs);

    const app = new App();
    await app.run();

    const logs = [
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
      "6개 일치 (2,000,000,000원) - 1개",
      "총 수익률은 61515151.52%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
