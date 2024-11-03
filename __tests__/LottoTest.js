import Lotto from "../src/Lotto";

const RANK_CASES = [
	["1, 2, 3, 4, 5, 6", "7", "1rank"],
	["1, 2, 3, 4, 5, 7", "6", "2rank"],
	["1, 2, 3, 4, 5, 7", "8", "3rank"],
	["1, 2, 3, 4, 7, 8", "6", "4rank"],
	["1, 2, 3, 10, 11, 12", "6", "5rank"],
	["1, 12, 13, 14, 17, 18", "6", undefined],
];

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
	test.each(RANK_CASES)(
		"등수 결과 테스트",
		(winningNumber, bonusNumber, rank) => {
			const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
			const result = lotto.checkWinning(winningNumber, bonusNumber);

			expect(result).toEqual(rank);
		}
	);
});
