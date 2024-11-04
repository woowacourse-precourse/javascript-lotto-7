import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/Input.js";

const mockQuestions = (inputs) => {
	MissionUtils.Console.readLineAsync = jest.fn();

	MissionUtils.Console.readLineAsync.mockImplementation(() => {
		const input = inputs.shift();

		return Promise.resolve(input);
	});
};

describe("구입금액 입력 테스트", () => {
	let input;
	const SUCCESS_CASE = ["1000", "2000", "100000", "11000"];
	const FAIL_CASE = ["1r", "100", "1000000", "1234"];
	beforeEach(() => {
		input = new Input();
		jest.clearAllMocks();
	});

	test.each(SUCCESS_CASE)("구입금액 입력 성공", async (money) => {
		// given
		mockQuestions([money]);

		// when
		const RESULT = await input.getLottoMoney();

		// then
		expect(RESULT).toEqual(Number(money));
	});

	test.each(FAIL_CASE)("구입금액 입력 실패", async (money) => {
		// given
		mockQuestions([money]);

		// when, then
		await expect(input.getInputMoney()).rejects.toThrow("[ERROR]");
	});
});

describe("당첨 번호 테스트", () => {
	let input;
	const SUCCESS_CASE = ["1,2,3,4,5,6", "1,45,22,33,8,9"];
	const FAIL_CASE = ["1", "11,11,2,4,5,7,8", "1,2,3,4,5,6,7", "1!2!3!4!5!6"];
	beforeEach(() => {
		input = new Input();
		jest.clearAllMocks();
	});

	test.each(SUCCESS_CASE)("당첨 번호 입력 성공", async (number) => {
		// given
		mockQuestions([number]);

		// when
		const RESULT = await input.getInputWinningNumber();

		// then
		expect(RESULT).toEqual(number);
	});

	test.each(FAIL_CASE)("당첨 번호 입력 실패", async (number) => {
		// given
		mockQuestions([number]);

		// when, then
		await expect(input.getInputWinningNumber()).rejects.toThrow("[ERROR]");
	});
});

describe("보너스 번호 테스트", () => {
	let input;
	const SUCCESS_CASE = [
		["1,2,3,4,5,6", "7"],
		["7,8,9,10,11,12", "45"],
	];
	const FAIL_CASE = [
		["1,2,3,4,5,6", "6"],
		["1,2,3,4,5,6", "48"],
	];
	beforeEach(() => {
		input = new Input();
		jest.clearAllMocks();
	});

	test.each(SUCCESS_CASE)(
		"보너스 번호 입력 성공",
		async (winningNumber, bonusNumber) => {
			// given
			mockQuestions([bonusNumber]);

			// when
			const RESULT = await input.getInputBonusNumber(winningNumber);

			// then
			expect(RESULT).toEqual(bonusNumber);
		}
	);
	test.each(FAIL_CASE)(
		"보너스 번호 입력 실패",
		async (winningNumber, bonusNumber) => {
			// given
			mockQuestions([bonusNumber]);

			// when, then
			await expect(input.getInputBonusNumber(winningNumber)).rejects.toThrow(
				"[ERROR]"
			);
		}
	);
});
