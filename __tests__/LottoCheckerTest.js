import Lotto from "../src/Lotto";
import LottoChecker from "../src/LottoChecker";

describe("LottoChecker 테스트", () => {
    test("로또 일치 개수 확인", () => {
        const lottos = [
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([1, 2, 3, 7, 8, 9]),
        ];
        const winningNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;

        const results = LottoChecker.checkLotto(lottos, winningNumbers, bonusNumber);

        expect(results[0].matchedCount).toBe(6);
        expect(results[0].hasBonus).toBe(false);
        expect(results[1].matchedCount).toBe(3);
        expect(results[1].hasBonus).toBe(true);
    });
});
