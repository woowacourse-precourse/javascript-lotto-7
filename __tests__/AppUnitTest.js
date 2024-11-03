import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Output from "../src/Output.js";

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();
	return logSpy;
};

describe("App 단위 테스트", () => {
	// given
	const COUNT_CASES = [
		[100000, 100],
		[1000, 1],
		[50000, 50],
	];

	test.each(COUNT_CASES)("로또 구매 개수 계산", async (money, count) => {
		//when
		const app = new App();
		const RESULT = await app.calculateLottoCount(money);

		// then
		expect(RESULT).toBe(count);
	});

	test("로또 구매 개수 출력", () => {
		// given
		const INPUT = 6;
		const RESULT = ["6개를 구매했습니다."];

		const logSpy = getLogSpy();

		// when
		const output = new Output();
		output.printLottoCount(INPUT);

		RESULT.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});
});
