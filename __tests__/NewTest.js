import App from "../src/App";
import Lotto from "../src/Lotto";
import { Console, Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
    Console: {
        readLineAsync: jest.fn(),
        print: jest.fn(),
    },
    Random: {
        pickUniqueNumbersInRange: jest.fn(),
    },
}));

describe("App 클래스 테스트", () => {
    let app;

    beforeEach(() => {
        app = new App();
    });

    test("구입 금액 입력 테스트", async () => {
        Console.readLineAsync.mockResolvedValueOnce("5000");
        const money = await app.moneyInput();
        expect(money).toBe(5000);
    });

    test("구입 금액 유효성 검사 테스트", () => {
        expect(() => app.validateMoney("abc")).toThrow("[ERROR] 입력 금액이 1000으로 나누어지지 않습니다.");
        expect(() => app.validateMoney("1500")).toThrow("[ERROR] 입력 금액이 1000으로 나누어지지 않습니다.");
        expect(app.validateMoney("2000")).toBe(2000);
    });

    test("당첨 번호 입력 테스트", async () => {
        Console.readLineAsync.mockResolvedValueOnce("1,2,3,4,5,6");
        const winnerLotto = await app.winnerLottoInput();
        expect(winnerLotto).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("당첨 번호 유효성 검사 테스트", () => {
        expect(() => app.validateWinnerLotto([1, 2, 3, 4, 5])).toThrow("[ERROR] 당첨 번호는 6개여야 합니다.");
        expect(() => app.validateWinnerLotto([1, 2, 3, 4, 5, 46])).toThrow("[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.");
        expect(() => app.validateWinnerLotto([1, 2, 3, 4, 5, 5])).toThrow("[ERROR] 당첨 번호에 중복된 숫자가 있습니다.");
    });

    test("보너스 번호 입력 테스트", async () => {
        Console.readLineAsync.mockResolvedValueOnce("7");
        const bonusNumber = await app.bonusNumberInput([1, 2, 3, 4, 5, 6]);
        expect(bonusNumber).toBe(7);
    });

    test("보너스 번호 유효성 검사 테스트", () => {
        expect(() => app.validateBonusNumber("abc", [1, 2, 3, 4, 5, 6])).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        expect(() => app.validateBonusNumber(46, [1, 2, 3, 4, 5, 6])).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
        expect(() => app.validateBonusNumber(5, [1, 2, 3, 4, 5, 6])).toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
    });

    test("로또 생성 테스트", () => {
        Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
        const lotto = app.generateLotto();
        expect(lotto).toBeInstanceOf(Lotto);
        expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("로또 여러 개 생성 테스트", () => {
        Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
        const lottos = app.generateLottos(3);
        expect(lottos).toHaveLength(3);
        lottos.forEach(lotto => {
            expect(lotto).toBeInstanceOf(Lotto);
            expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
        });
    });

    test("로또 출력 테스트", () => {
        const lottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([7, 8, 9, 10, 11, 12])];
        app.printLottos(lottos);
        expect(Console.print).toHaveBeenCalledWith("\n2개를 구매했습니다.");
        expect(Console.print).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]");
        expect(Console.print).toHaveBeenCalledWith("[7, 8, 9, 10, 11, 12]");
    });

    test("통계 계산 테스트", () => {
        const lottos = [new Lotto([1, 2, 3, 4, 5, 6]), new Lotto([1, 2, 3, 4, 5, 7]), new Lotto([1, 2, 3, 4, 5, 8])];
        const statistics = app.calculateStatistics(lottos, [1, 2, 3, 4, 5, 6], 7);
        expect(statistics).toEqual({
            first: 1,
            second: 1,
            third: 1,
            fourth: 0,
            fifth: 0,
        });
    });
});