import App from "../src/App.js";

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
		const result = await app.calculateLottoCount(money);

		// then
		expect(result).toBe(count);
	});
});
