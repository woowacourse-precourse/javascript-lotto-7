import LottoController from "../src/controllers/LottoController.js";
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

describe("LottoController 클래스 로또 미션 전체 테스트", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

    test("로또 정상 기능 테스트", async () => {
        const logSpy = getLogSpy();

        mockRandoms([
            [4, 10, 21, 29, 39, 42],
            [3, 9, 22, 25, 42, 44],
            [7, 20, 28, 31, 32, 40],
            [4, 6, 7, 9, 34, 36],
            [4, 8, 30, 32, 34, 45],
            [4, 7, 10, 25, 27, 32],
            [2, 4, 24, 29, 38, 39],
            [1, 19, 32, 36, 38, 43],
            [8, 9, 13, 33, 34, 36],
            [2, 6, 13, 20, 23, 42]
        ]);
        mockQuestions(["10000", "1,3,4,7,35,45", "36"]);

        const lottoController = new LottoController();
        await lottoController.lottoProcess();

        const logs = [
            "10개를 구매했습니다.",
            "[4, 10, 21, 29, 39, 42]",
            "[3, 9, 22, 25, 42, 44]",
            "[7, 20, 28, 31, 32, 40]",
            "[4, 6, 7, 9, 34, 36]",
            "[4, 8, 30, 32, 34, 45]",
            "[4, 7, 10, 25, 27, 32]",
            "[2, 4, 24, 29, 38, 39]",
            "[1, 19, 32, 36, 38, 43]",
            "[8, 9, 13, 33, 34, 36]",
            "[2, 6, 13, 20, 23, 42]",
            "3개 일치 (5,000원) - 0개",
            "4개 일치 (50,000원) - 0개",
            "5개 일치 (1,500,000원) - 0개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "6개 일치 (2,000,000,000원) - 0개",
            "총 수익률은 0.0%입니다.",
        ];

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });

    test("로또 정상 기능 테스트_2", async () => {
        const logSpy = getLogSpy();

        mockRandoms([
            [4, 10, 21, 29, 39, 42],
            [3, 9, 22, 25, 42, 44],
            [7, 20, 28, 31, 32, 40],
            [4, 6, 7, 9, 34, 36],
            [4, 8, 30, 32, 34, 45],
        ]);
        mockQuestions(["5000", "4,10,21,29,39,42", "36"]);

        const lottoController = new LottoController();
        await lottoController.lottoProcess();

        const logs = [
            "5개를 구매했습니다.",
            "[4, 10, 21, 29, 39, 42]",
            "[3, 9, 22, 25, 42, 44]",
            "[7, 20, 28, 31, 32, 40]",
            "[4, 6, 7, 9, 34, 36]",
            "[4, 8, 30, 32, 34, 45]",
            "3개 일치 (5,000원) - 0개",
            "4개 일치 (50,000원) - 0개",
            "5개 일치 (1,500,000원) - 0개",
            "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
            "6개 일치 (2,000,000,000원) - 1개",
            "총 수익률은 40000000.0%입니다.",
        ];

        logs.forEach((log) => {
            expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
    });
});
  