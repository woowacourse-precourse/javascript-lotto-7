import { MissionUtils } from "@woowacourse/mission-utils";
import Input from "../src/Input";

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
