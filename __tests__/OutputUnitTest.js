import { MissionUtils } from "@woowacourse/mission-utils";
import Output from "../src/Output.js";

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();
	return logSpy;
};

describe("출력 단위 테스트", () => {
	let output;

	beforeEach(() => {
		output = new Output();
		jest.clearAllMocks();
	});

	test("로또 구매 개수 출력", () => {
		// given
		const INPUT = 6;
		const RESULT = ["6개를 구매했습니다."];

		const logSpy = getLogSpy();

		// when
		output.printLottoCount(INPUT);

		//then
		RESULT.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});

	test("로또 번호 출력", () => {
		// given
		const INPUT = [1, 2, 3, 4, 5, 6];
		const RESULT = "[1, 2, 3, 4, 5, 6]";

		const logSpy = getLogSpy();

		// when
		output.printLottoNumbers(INPUT);

		// then
		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(RESULT));
	});

	test("당첨 등수 출력", () => {
		// given
		const INPUT = {
			"5rank": 1,
			"4rank": 1,
			"3rank": 1,
			"2rank": 1,
			"1rank": 1,
		};
		const RESULT = [
			"3개 일치 (5,000원) - 1개",
			"4개 일치 (50,000원) - 1개",
			"5개 일치 (1,500,000원) - 1개",
			"5개 일치, 보너스 볼 일치 (30,000,000원) - 1개",
			"6개 일치 (2,000,000,000원) - 1개",
		];

		const logSpy = getLogSpy();

		// when
		output.printWinningCount(INPUT);

		// then
		RESULT.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});

	test("총 수익률 출력", () => {
		// given
		const INPUT = Number(100).toFixed(1);
		const RESULT = "총 수익률은 100.0%입니다.";

		const logSpy = getLogSpy();

		// when
		output.printWinningRate(INPUT);

		// then
		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(RESULT));
	});
});
