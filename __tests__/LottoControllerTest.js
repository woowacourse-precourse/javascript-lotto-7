import LottoModel from '../src/model/LottoModel.js';
import LottoController from '../src/controller/LottoController.js';
import Lotto from '../src/Lotto.js';
import { Console } from '@woowacourse/mission-utils';

describe('로또 컨트롤러 클래스 테스트', () => {
  let lottoModel;
  let lottoController;
  const randomLottoNumbers = new Lotto([1, 2, 3, 4, 5, 6]);

  beforeEach(() => {
    lottoModel = new LottoModel();
    lottoController = new LottoController(lottoModel);
  });

  test.each([
    [[1, 12, 13, 14, 15, 16], 7, 1, 0], // 1개
    [[1, 2, 13, 14, 15, 16], 7, 2, 0], // 2개
    [[1, 2, 3, 14, 15, 16], 7, 3, 0], // 3개
    [[1, 2, 3, 4, 15, 16], 7, 4, 0], // 4개
    [[1, 2, 3, 4, 5, 16], 7, 5, 0], // 5개
    [[1, 2, 3, 4, 5, 16], 6, 5, 1], // 5개 + 1개
    [[1, 2, 3, 4, 5, 6], 7, 6, 0], // 6개
  ])(
    '로또 번호와 당첨 번호가 일치하는 경우들',
    (pickLottoNumbers, pickBonusNumber, expectedMatchCount, expectedBonusCount) => {
      lottoModel.setPickLottoNumber(pickLottoNumbers);
      lottoModel.setPickBonusNumber(pickBonusNumber);

      lottoModel.getRandomLottoNumbers = jest.fn().mockReturnValue([randomLottoNumbers]);

      const compareResult = lottoController.compareLottoNumber();

      expect(compareResult.lottoNumberMatchCount[0]).toBe(expectedMatchCount);
      expect(compareResult.bonusNumberMatchCount[0]).toBe(expectedBonusCount);
    }
  );

  test('당첨 번호가 없을 경우', () => {
    lottoModel.setPickLottoNumber([7, 8, 9, 10, 11, 12]);
    lottoModel.setPickBonusNumber(13);

    lottoModel.getRandomLottoNumbers = jest.fn().mockReturnValue([randomLottoNumbers]);

    const compareResult = lottoController.compareLottoNumber();

    const expectedLottoNumberMatchCount = 0;
    const expectedBonusNumberMatchCount = 0;

    expect(compareResult.lottoNumberMatchCount[0]).toBe(expectedLottoNumberMatchCount);
    expect(compareResult.bonusNumberMatchCount[0]).toBe(expectedBonusNumberMatchCount);
  });

  test.each([
    [[1, 12, 13, 14, 15, 16], 7, { 3: 0, 4: 0, 5: 0, '5+': 0, 6: 0 }], // 1개
    [[1, 2, 13, 14, 15, 16], 7, { 3: 0, 4: 0, 5: 0, '5+': 0, 6: 0 }], // 2개
    [[1, 2, 3, 14, 15, 16], 7, { 3: 1, 4: 0, 5: 0, '5+': 0, 6: 0 }], // 3개
    [[1, 2, 3, 4, 15, 16], 7, { 3: 0, 4: 1, 5: 0, '5+': 0, 6: 0 }], // 4개
    [[1, 2, 3, 4, 5, 16], 7, { 3: 0, 4: 0, 5: 1, '5+': 0, 6: 0 }], // 5개
    [[1, 2, 3, 4, 5, 16], 6, { 3: 0, 4: 0, 5: 0, '5+': 1, 6: 0 }], // 5개 + 1개
    [[1, 2, 3, 4, 5, 6], 7, { 3: 0, 4: 0, 5: 0, '5+': 0, 6: 1 }], // 6개
  ])('당첨 통계 테스트', (pickLottoNumbers, pickBonusNumbers, expectedStatistics) => {
    lottoModel.setPickLottoNumber(pickLottoNumbers);
    lottoModel.setPickBonusNumber(pickBonusNumbers);

    lottoModel.getRandomLottoNumbers = jest.fn().mockReturnValue([randomLottoNumbers]);

    const compareResult = lottoController.compareLottoNumber();
    const calculateStatistics = lottoController.calculateStatistics();

    expect(calculateStatistics).toEqual(expectedStatistics);
  });
});
