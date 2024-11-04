import { winNumberMatcher, getFilteredMatchList } from "../../../src/feature/match/getMatchCount.js";

describe('구매 내역, 당첨 번호, 보너스 번호 결과 리스트 생성 기능 테스트', 
  () => {
    test(`하나의 구매 내역에 대한 결과 값 { matchCount : 5, bonusNumberContaining : false}
      구매 내역: [15, 22, 24, 39, 43, 45]
      당첨 번호: [15, 22, 24, 39, 43, 44]
      보너스 번호: 1`, 
      () => {
        // given
        const lottoList = [[15, 22, 24, 39, 43, 45]];
        const winNumber = [15, 22, 24, 39, 43, 44];
        const bonusNumber = 1;

        // when
        const result = winNumberMatcher(lottoList, winNumber, bonusNumber);
        const singleResult = result[0];

        // then
        expect(singleResult[0]).toBe(5);
        expect(singleResult[1]).toBe(false);
      });

      test('구매 리스트에 대한 결과 리스트 반환', () => {
        // given
        const lottoList = [
        [2, 3, 13, 14, 15, 44],
        [1, 2, 9, 20, 25, 40],
        [14, 17, 21, 36, 38, 45],
        [2, 7, 11, 12, 23, 24],
        [1, 2, 4, 5, 6, 43],
        [4, 8, 17, 27, 32, 42],
        [2, 8, 11, 12, 18, 26],
        [5, 7, 24, 29, 30, 36],
        [2, 8, 19, 21, 22, 29],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 6, 7],
        [2, 3, 4, 5, 6, 7]
      ];

        const winNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;
        const expectedResult = [
          [2, false],
          [2, false],
          [0, false],
          [1, false],
          [5, false],
          [1, false],
          [1, false],
          [1, false],
          [1, false],
          [6, false],
          [5, true],
          [5, true],
        ];

        // when
        const result = winNumberMatcher(lottoList, winNumbers, bonusNumber);
        // then
        result.forEach((lotto, index) => {
          expect(lotto).toEqual(expectedResult[index])
        });
      });

      test('구매 리스트에서 3개 이상 일치하는 배열 생성', () => {
        // given
        const lottoList = [
        [2, 3, 13, 14, 15, 44],
        [1, 2, 9, 20, 25, 40],
        [14, 17, 21, 36, 38, 45],
        [2, 7, 11, 12, 23, 24],
        [1, 2, 4, 5, 6, 43],
        [4, 8, 17, 27, 32, 42],
        [2, 8, 11, 12, 18, 26],
        [5, 7, 24, 29, 30, 36],
        [2, 8, 19, 21, 22, 29],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 6, 7],
        [2, 3, 4, 5, 6, 7],
        [1, 2, 30, 31, 32, 33],
        [2, 3, 34, 35, 36, 37],
        [4, 5, 7, 38, 39, 40],
        [1, 2, 3, 41, 42, 43],
        [3, 4, 5, 6, 44, 45]
      ];

        const winNumbers = [1, 2, 3, 4, 5, 6];
        const bonusNumber = 7;
        const expectedResult = [
          [5, false],
          [6, false],
          [5, true],
          [5, true],
          [3, false],
          [4, false]
        ];

        // when
        const result = getFilteredMatchList(lottoList, winNumbers, bonusNumber);
        // then
        result.forEach((lotto, index) => {
          expect(lotto).toEqual(expectedResult[index])
        });
      });
})