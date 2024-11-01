import { Random } from '@woowacourse/mission-utils';
import LottoService from '../src/service/LottoService.js';

import { RANK_PRICE, PRICE_RANGE, SEPARATOR } from '../src/constant/system.js';

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
    lottoService = new LottoService();
    price = 5000;
    numberString = '1,2,3,4,5,6';
    bonusNumber = 10;
    mockRandomRange();

    lottoService.createUserModel(price);
    lottoService.createWinningLottoModel(numberString);
    lottoService.appendBonusNumber(bonusNumber);
  });

  test('유저 모델 생성', () => {
    const spy = jest.spyOn(Random, 'pickUniqueNumbersInRange');

    expect(spy).toHaveBeenCalledTimes(price / PRICE_RANGE.MIN);
  });

  test('로또 정보 가져오기', () => {
    const expected = {
      lottoLength: price / PRICE_RANGE.MIN,
      lottoNumbersArray: Array.from({ length: price / PRICE_RANGE.MIN }, () => [
        1, 2, 3, 4, 5, 6,
      ]),
    };

    expect(lottoService.getLottosInformation()).toEqual(expected);
  });

  test('정답 로또 모델 생성', () => {
    const numbers = numberString
      .split(SEPARATOR)
      .map((number) => Number(number));

    expect(lottoService.winningLottoModel.getNumbers()).toEqual(numbers);
  });

  test('보너스 번호 입력', () => {
    expect(lottoService.winningLottoModel.getBonusNumber()).toEqual(
      bonusNumber,
    );
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
    const expected = new Map([
      [3, 1],
      [4, 1],
      [5, 1],
      ['5+', 1],
      [6, 1],
    ]);

    let lottoService = new LottoService();

    lottoService.createUserModel(price);
    lottoService.createWinningLottoModel(numberString);
    lottoService.appendBonusNumber(bonusNumber);

    expect(lottoService.getStatistics()).toEqual(expected);
  });

  test('수익률 계산', () => {
    const rankObject = new Map([
      [3, 0],
      [4, 1],
      [5, 1],
      ['5+', 0],
      [6, 0],
    ]);
    const price = 5000;

    const rate = lottoService.getRateOfReturn(rankObject, price);

    expect(rate).toEqual(
      (((RANK_PRICE.FOUR + RANK_PRICE.FIVE) / price) * 100).toFixed(1),
    );
  });
});
