import { Random } from '@woowacourse/mission-utils';
import LottoService from '../src/service/LottoService.js';
import { RANK_PRICE, RANK_NAME } from '../src/constant/system.js';
import WinningLottoModel from '../src/model/WinningLottoModel.js';

function mockRandomRange() {
  Random.pickUniqueNumbersInRange = jest.fn();

  Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
}

describe('LottoService 클래스 테스트', () => {
  let lottoService;
  let price;
  let numberString;
  let bonusNumber;

  beforeEach(() => {
    numberString = '1,2,3,4,5,6';
    bonusNumber = 10;
    price = 5000;
    lottoService = new LottoService();
    mockRandomRange();

    lottoService.createUserModel(price);
    lottoService.createWinningLottoModel(numberString);
    lottoService.setBonusNumber(bonusNumber);
  });

  test('유저 모델 생성', () => {
    const spy = jest.spyOn(Random, 'pickUniqueNumbersInRange');

    expect(spy).toHaveBeenCalledTimes(5);
  });

  test('로또 정보 가져오기', () => {
    const expected = {
      lottoLength: 5,
      lottoNumbersArray: Array.from({ length: 5 }, () => [1, 2, 3, 4, 5, 6]),
    };

    expect(lottoService.getLottosInformation()).toEqual(expected);
  });

  test('정답 로또 모델 생성', () => {
    expect(lottoService.winningLottoModel).toBeInstanceOf(WinningLottoModel);
  });

  test('보너스 번호 입력', () => {
    lottoService = new LottoService();
    const bonusNumber = 7;
    lottoService.createUserModel(price);
    lottoService.createWinningLottoModel(numberString);

    const spy = jest.spyOn(lottoService.winningLottoModel, 'setBonusNumber');

    lottoService.setBonusNumber(bonusNumber);

    expect(spy).toHaveBeenCalledWith(bonusNumber);
  });

  test('로또 당첨 등수 계산', () => {
    Random.pickUniqueNumbersInRange = jest.fn();
    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([1, 2, 3, 4, 5, 7])
      .mockReturnValueOnce([1, 2, 3, 4, 5, 10])
      .mockReturnValueOnce([20, 2, 39, 10, 6, 5])
      .mockReturnValueOnce([1, 2, 3, 23, 40, 6])
      .mockReturnValueOnce([40, 30, 20, 23, 10, 6]);

    const price = 6000;
    const numberString = '1,2,3,4,5,6';
    const bonusNumber = 10;
    const expected = new Map(Object.values(RANK_NAME).map((rank) => [rank, 1]));

    let lottoService = new LottoService();

    lottoService.createUserModel(price);
    lottoService.createWinningLottoModel(numberString);
    lottoService.setBonusNumber(bonusNumber);

    expect(lottoService.calculateWinningStatistics()).toEqual(expected);
  });

  test('수익률 계산', () => {
    const rankMap = new Map(Object.values(RANK_NAME).map((rank) => [rank, 0]));
    rankMap.set(RANK_NAME.SIX, 5);

    const rate = lottoService.getRateOfReturn(rankMap);

    expect(rate).toEqual(
      (((RANK_PRICE[RANK_NAME.SIX] * 5) / price) * 100).toFixed(1),
    );
  });
});
