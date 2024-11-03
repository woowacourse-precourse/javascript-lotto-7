/* eslint-disable max-lines-per-function */
/* eslint-disable arrow-body-style */

import { MissionUtils } from "@woowacourse/mission-utils";
import { Publisher } from "../Publisher.js";

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

describe('로또 발행기관 테스트', () => {

    mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
    ]);
    const publisher = new Publisher();
    const purchaseQuantity = 3;
    const lottos = publisher.generateLotto(purchaseQuantity);
    const lottoNumbers = lottos.getLottoNumbers();
    test('로또 발급 테스트', () => {
        expect(lottoNumbers).toEqual([
            [8, 21, 23, 41, 42, 43],
            [3, 5, 11, 16, 32, 38],
            [7, 11, 16, 35, 36, 44],
        ]);
    });
    test.each([
        //1등: 6개 일치
        [[8, 21, 23, 41, 42, 43], 40, [0, 0, 0, 0, 1]],
        //2등: 5개 + 보너스 일치
        [[8, 21, 23, 41, 42, 1], 43, [0, 0, 0, 1, 0]],
        //3등: 5개 일치
        [[8, 21, 23, 41, 42, 1], 40, [0, 0, 1, 0, 0]],
        //4등: 4개 일치
        [[8, 21, 23, 41, 2, 1], 40, [0, 1, 0, 0, 0]],
        //5등: 3개 일치
        [[8, 21, 23, 3, 2, 1], 40, [1, 0, 0, 0, 0]],
        //미당첨: 2개 일치
        [[8, 21, 4, 3, 2, 1], 40, [0, 0, 0, 0, 0]],
        //미당첨: 1개 일치
        [[8, 5, 4, 3, 2, 1], 40, [0, 0, 0, 0, 0]],
        //미당첨: 0개 일치
        [[6, 5, 4, 3, 2, 1], 40, [0, 0, 0, 0, 0]],
    ])('로또 결과 기록 테스트', (winningNumbers, bonusNumber, expectedCounts) => {
        publisher.setLottoNumber(winningNumbers, bonusNumber);
        const record = publisher.getWinningRecord(lottoNumbers);
        
        const expectedRecord = record.map(item => item.count);
        expect(expectedCounts).toEqual(expectedRecord);
    });
});
