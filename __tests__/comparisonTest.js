import {describe, expect, test, beforeEach} from "@jest/globals";
import Comparison from "../src/service/Comparision.js";
import Lotto from "../src/Lotto.js";
import { errorMessage } from "../src/constant/errorMessage.js";


describe('Comparison 클래스 테스트', () => {
    const validWinningNumbers = [1, 2, 3, 4, 5, 6];
    const validBonusNumber = 7;

    describe("올바른 인스턴스 생성", () => {
        test("유효한 당첨 번호와 보너스 번호로 인스턴스 생성되어야 한다.", () => {
            expect(() => {
                new Comparison(validWinningNumbers, validBonusNumber);
            }).not.toThrow();
        });

        test("보너스 번호가 당첨 번호와 중복되면 에러가 발생해야 한다.", () => {
            expect(() => {
                new Comparison(validWinningNumbers, 1);
            }).toThrow(errorMessage.duplicateLottoNumbers);
        });

        test("보너스 번호가 1보다 작으면 에러가 발생해야 한다.", () => {
            expect(() => {
                new Comparison(validWinningNumbers, 0);
            }).toThrow(errorMessage.invalidCountLottoNumbers);
        });

        test("보너스 번호가 45보다 크면 에러가 발생해야 한다.", () => {
            expect(() => {
                new Comparison(validWinningNumbers, 46);
            }).toThrow(errorMessage.invalidCountLottoNumbers);
        });
    });
});

describe("로또 번호 비교 테스트", () => {
    let comparison;

    const validWinningNumbers = [1, 2, 3, 4, 5, 6];
    const validBonusNumber = 7;

    beforeEach(() => {
        comparison = new Comparison(validWinningNumbers, validBonusNumber);
    });

    test("1등: 6개 번호 일치해야 한다.", () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
        const result = comparison.compareWithLotto(lotto);

        expect(result.matchCount).toBe(6);
        expect(result.matchBonus).toBe(false);
        expect(result.rank).toBe(1);
    });

    test("2등: 5개 번호와 보너스 번호 일치해야 한다.", () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 7]);
        const result = comparison.compareWithLotto(lotto);

        expect(result.matchCount).toBe(5);
        expect(result.matchBonus).toBe(true);
        expect(result.rank).toBe(2);
    });

    test("3등: 5개 번호 일치해야 한다.", () => {
        const lotto = new Lotto([1, 2, 3, 4, 5, 8]);
        const result = comparison.compareWithLotto(lotto);

        expect(result.matchCount).toBe(5);
        expect(result.matchBonus).toBe(false);
        expect(result.rank).toBe(3);
    });

    test("4등: 4개 번호 일치해야 한다.", () => {
        const lotto = new Lotto([1, 2, 3, 4, 8, 9]);
        const result = comparison.compareWithLotto(lotto);

        expect(result.matchCount).toBe(4);
        expect(result.rank).toBe(4);
    });

    test("5등: 3개 번호 일치해야 한다.", () => {
        const lotto = new Lotto([1, 2, 3, 8, 9, 10]);
        const result = comparison.compareWithLotto(lotto);

        expect(result.matchCount).toBe(3);
        expect(result.rank).toBe(5);
    });

    test("낙첨: 2개 이하 번호 일치해야 한다.", () => {
        const lotto = new Lotto([1, 2, 8, 9, 10, 11]);
        const result = comparison.compareWithLotto(lotto);

        expect(result.matchCount).toBe(2);
        expect(result.rank).toBe(0);
    });
});