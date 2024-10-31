import App from "../src/App.js";
import { read, print } from "../src/lib/utils.js";
import Lotto from "../src/Lotto";
import { mockQuestions, mockRandoms, getLogSpy } from "../src/lib/testUtils.js";

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

const handlePrice = (input) => {
  const parsedInput = Number(input);

  while (true) {
    if (parsedInput < 1000) {
      print("[ERROR] 금액이 부족합니다.");
      return false;
    }
    if (parsedInput > 100000) {
      print("[ERROR] 100000보다 큰 수는 입력할 수 없습니다.");
      return false;
    }
    if (isNaN(parsedInput)) {
      print("[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.");
      return false;
    }

    return true;
  }
};

const handleLottoNumbers = (input) => {
  let parsedInputArray = input
    .split(",")
    .filter(Boolean)
    .map((num) => Number(num));

  while (true) {
    if (parsedInputArray.length !== 6) {
      print("[ERROR] 로또 번호는 6개만 입력할 수 있습니다.");
      return false;
    }

    if (parsedInputArray.length !== new Set(parsedInputArray).size) {
      print("[ERROR] 중복된 번호는 입력할 수 없습니다.");
      return false;
    }

    if (parsedInputArray.some((num) => num > 45 || num < 1)) {
      print("[ERROR] 로또 번호는 1부터 45까지의 수만 입력할 수 있습니다.");
      return false;
    }

    if (parsedInputArray.some((num) => isNaN(num))) {
      print("[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.");
      return false;
    }
    return true;
  }
};

const handleBonusNumber = (lottoNumbers, input) => {
  const parsedInput = Number(input);

  while (true) {
    if (isNaN(parsedInput)) {
      print("[ERROR] 숫자 이외의 문자는 입력할 수 없습니다.");
      return false;
    }

    if (parsedInput > 45 || parsedInput < 1) {
      print("[ERROR] 보너스 번호는 1부터 45까지의 수만 입력할 수 있습니다.");
      return false;
    }

    if (lottoNumbers.includes(parsedInput)) {
      print("[ERROR] 로또 번호에 이미 있는 번호는 입력할 수 없습니다.");
      return false;
    }
    return true;
  }
};

describe("로또 구입 금액 입력 테스트", () => {
  const PASS_CASE = [
    [["8000"], "8000"],
    [["3500"], "3500"],
  ];

  const ERROR_CASE = [
    [["300"], "[ERROR] 금액이 부족합니다."],
    [["100001"], "[ERROR] 100000보다 큰 수는 입력할 수 없습니다."],
    [["3000!"], "[ERROR] 숫자 이외의 문자는 입력할 수 없습니다."],
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
    [["1,2,3,4,5,6,7"], "[ERROR] 로또 번호는 6개만 입력할 수 있습니다."],
    [["1,2,3,4,,,7"], "[ERROR] 로또 번호는 6개만 입력할 수 있습니다."],
    [["1,13,15,27,33,33"], "[ERROR] 중복된 번호는 입력할 수 없습니다."],
    [
      ["1,13,15,27,33,47"],
      "[ERROR] 로또 번호는 1부터 45까지의 수만 입력할 수 있습니다.",
    ],
    [["1,13,15,27,33,34!"], "[ERROR] 숫자 이외의 문자는 입력할 수 없습니다."],
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
    [["1,2"], "[ERROR] 숫자 이외의 문자는 입력할 수 없습니다."],
    [["142"], "[ERROR] 보너스 번호는 1부터 45까지의 수만 입력할 수 있습니다."],
    [["15"], "[ERROR] 로또 번호에 이미 있는 번호는 입력할 수 없습니다."],
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
      handleBonusNumber([15, 16, 17, 18, 19, 20], consoleInput);

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
