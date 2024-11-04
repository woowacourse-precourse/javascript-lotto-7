import { MissionUtils } from '@woowacourse/mission-utils';
import UserLotto from '../../src/domain/UserLotto';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 발행 기능 테스트', () => {
  test('3,000원을 지불하면 로또 3개가 발행된다.', () => {
    // given
    const PAYMENT = 3000;
    const SIZE = '3';

    // when
    const { lottoCount } = new UserLotto(PAYMENT).getUserLottoInfo();

    // then
    expect(lottoCount).toBe(SIZE);
  });

  test('발행되는 로또는 각각 중복되지 않는 6개 숫자로 이루어져 있다.', () => {
    // given
    const PAYMENT = 1000;
    const LENGTH = 6;

    // when
    const { userLotto } = new UserLotto(PAYMENT).getUserLottoInfo();

    // then
    expect(userLotto[0].length).toBe(LENGTH);
  });

  test('2,000원을 지불하여 로또를 구입하면 중복되지 않는 6개의 숫자 로또 2개가 오름차순으로 발행된다.', () => {
    // given
    const PAYMENT = 2000;
    const SIZE = '2';
    const RANDOMS = [
      [5, 1, 3, 6, 2, 4],
      [40, 27, 17, 30, 20, 37],
    ];
    const OUTPUT = [
      [1, 2, 3, 4, 5, 6],
      [17, 20, 27, 30, 37, 40],
    ];
    const STRING = `[1, 2, 3, 4, 5, 6]\n[17, 20, 27, 30, 37, 40]`;

    mockRandoms(RANDOMS);

    // when
    const { userLotto, lottoDetails, lottoCount } = new UserLotto(
      PAYMENT,
    ).getUserLottoInfo();

    // then
    expect(lottoCount).toBe(SIZE);
    expect(lottoDetails).toBe(STRING);
    expect(userLotto).toStrictEqual(OUTPUT);
  });
});
