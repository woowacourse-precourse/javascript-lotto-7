import { MissionUtils } from '@woowacourse/mission-utils';
import UserLotto from '../src/Model/UserLotto.js';
import { ERROR_MSG } from '../src/constants/constants.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('유저 로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('구매 금액이 1000원 단위로 입력되지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new UserLotto(1001);
    }).toThrow(ERROR_MSG.priceMisalign);
  });

  test.each([
    [-1, ERROR_MSG.outOfAmountRange],
    [0, ERROR_MSG.outOfAmountRange],
    [99999999999999999999, ERROR_MSG.outOfAmountRange],
  ])('구매 금액이 Range를 벗어날 경우 예외가 발생한다.', (purchasedAmount, errorMsg) => {
    expect(() => {
      new UserLotto(purchasedAmount);
    }).toThrow(errorMsg);
  });

  test('구매 금액만큼 로또를 추첨한 뒤 배열 형식으로 출력한다.', () => {
    // given
    const purchasedAmount = 3000;
    const userLotto = new UserLotto(purchasedAmount);
    const LOTTO_NUMBERS = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
    ];
    mockRandoms(LOTTO_NUMBERS);

    // when
    userLotto.draw();

    // expect
    expect(userLotto.getNumbers()).toEqual(LOTTO_NUMBERS);
  });
});
