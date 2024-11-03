import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Output from "../src/Output.js";

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

describe("App 단위 테스트", () => {
	let app;
	let output;
	const COUNT_CASES = [
		[100000, 100],
		[1000, 1],
		[50000, 50],
	];
	const RANDOM_NUMBERS = [
		[1, 2, 3, 4, 5, 6],
		[7, 8, 9, 10, 11, 12],
		[13, 14, 15, 16, 17, 18],
	];

	test.each(COUNT_CASES)("로또 구매 개수 계산", async (money, count) => {
		//when
		app = new App();
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
		output = new Output();
		output.printLottoCount(INPUT);

		RESULT.forEach((output) => {
			expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
		});
	});

	beforeEach(() => {
		mockRandoms([RANDOM_NUMBERS]);
	});

	test("로또 번호 랜덤 생성", async () => {
		// given
		const LOTTO_COUNT = 6;

		// when
		app = new App();
		const LOTTOS = await app.getRandomNumbers();

		// then
		LOTTOS.forEach((lotto) => {
			expect(lotto).toHaveLength(LOTTO_COUNT);
		});
		LOTTOS.forEach((lotto, index) => {
			expect(lotto).toEqual(RANDOM_NUMBERS[index]);
		});
	});

	test("로또 번호 출력", () => {
		// given
		const INPUT = [1, 2, 3, 4, 5, 6];
		const RESULT = "[1, 2, 3, 4, 5, 6]";

		const logSpy = getLogSpy();

		// when
		output = new Output();
		output.printLottoNumbers(INPUT);

		// then
		expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(RESULT));
	});

	test("당첨 등수 계산", async () => {
		// given
		const WINNING_NUMBER = "1,2,3,4,5,6";
		const LOTTO_NUMBERS = [
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 6, 12],
			[1, 2, 3, 4, 5, 11],
			[1, 2, 3, 4, 11, 12],
			[1, 2, 3, 10, 11, 12],
		];
		const BONUS_NUMBER = 6;
		const RESULT = {
			"5rank": 1,
			"4rank": 1,
			"3rank": 1,
			"2rank": 1,
			"1rank": 1,
		};

		// when
		app = new App();
		app.getWinningCount(WINNING_NUMBER, LOTTO_NUMBERS, BONUS_NUMBER);

		// then
		expect(RESULT).toEqual(app.winningMap);
	});
});
