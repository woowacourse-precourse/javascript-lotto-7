import { Calculator } from "../src/service/Calculator.js";
import { Lotto } from "../src/Lotto.js";
import { Comparison } from "../src/service/Comparision.js";
import { boardMessage } from "../src/constant/boardMessage.js";
import { describe, test, expect, beforeEach } from "@jest/globals";

describe('Calculator 클래스 테스트', () => {
    let calculator;
    let comparison;

    beforeEach(() => {
        calculator = new Calculator();
        comparison = new Comparison([1, 2, 3, 4, 5, 6], 7);
    });

    describe('로또 게임 결과 계산', () => {
        test('1등 당첨 결과를 정확히 계산해야 한다', () => {
            const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];  // 1등 당첨 번호
            const results = calculator.calculateGameResults(lottos, comparison);

            expect(results.statistics.first.count).toBe(1);
            expect(results.statistics.first.prize).toBe(boardMessage.FIRST);
            expect(results.statistics.second.count).toBe(0);
            expect(results.statistics.third.count).toBe(0);
            expect(results.statistics.fourth.count).toBe(0);
            expect(results.statistics.fifth.count).toBe(0);
        });

        test('2등 당첨 결과를 정확히 계산해야 한다', () => {
            const lottos = [new Lotto([1, 2, 3, 4, 5, 7])];  // 2등 당첨 번호
            const results = calculator.calculateGameResults(lottos, comparison);

            expect(results.statistics.first.count).toBe(0);
            expect(results.statistics.second.count).toBe(1);
            expect(results.statistics.second.prize).toBe(boardMessage.SECOND);
        });

        test('여러 등수가 섞인 결과를 정확히 계산해야 한다', () => {
            const lottos = [
                new Lotto([1, 2, 3, 4, 5, 6]),  // 1등
                new Lotto([1, 2, 3, 4, 5, 7]),  // 2등
                new Lotto([1, 2, 3, 4, 5, 8]),  // 3등
                new Lotto([1, 2, 3, 4, 8, 9]),  // 4등
                new Lotto([1, 2, 3, 8, 9, 10])  // 5등
            ];

            const results = calculator.calculateGameResults(lottos, comparison);

            expect(results.statistics.first.count).toBe(1);
            expect(results.statistics.second.count).toBe(1);
            expect(results.statistics.third.count).toBe(1);
            expect(results.statistics.fourth.count).toBe(1);
            expect(results.statistics.fifth.count).toBe(1);
        });
    });

    describe('수익률 관련 처리', () => {
        test('수익률을 정확히 계산해야 한다', () => {
            const lottos = [new Lotto([1, 2, 3, 4, 5, 6])];  // 1등 당첨
            const results = calculator.calculateGameResults(lottos, comparison);

            const expectedProfitRate = (boardMessage.FIRST / 1000) * 100;
            expect(results.profitRate).toBe(expectedProfitRate);
        });

        test('당첨금이 없을 때 수익률이 0이어야 한다', () => {
            const lottos = [new Lotto([7, 8, 9, 10, 11, 12])];  // 미당첨
            const results = calculator.calculateGameResults(lottos, comparison);

            expect(results.profitRate).toBe(0);
        });
    });

    describe('예외 상황 처리', () => {
        test('빈 로또 배열을 처리할 수 있어야 한다', () => {
            const lottos = [];
            const results = calculator.calculateGameResults(lottos, comparison);

            expect(results.statistics.first.count).toBe(0);
            expect(results.statistics.second.count).toBe(0);
            expect(results.statistics.third.count).toBe(0);
            expect(results.statistics.fourth.count).toBe(0);
            expect(results.statistics.fifth.count).toBe(0);
            expect(results.profitRate).toBe(0);
        });

        test('여러 장의 로또를 처리할 수 있어야 한다', () => {
            const lottos = Array(5).fill(new Lotto([7, 8, 9, 10, 11, 12]));  // 5장의 미당첨 로또
            const results = calculator.calculateGameResults(lottos, comparison);

            expect(results.statistics.first.count).toBe(0);
            expect(results.statistics.second.count).toBe(0);
            expect(results.statistics.third.count).toBe(0);
            expect(results.statistics.fourth.count).toBe(0);
            expect(results.statistics.fifth.count).toBe(0);
            expect(results.profitRate).toBe(0);
        });
    });
});