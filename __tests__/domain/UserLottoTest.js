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
    const SIZE = 3;

    // when
    const userLotto = new UserLotto(PAYMENT).getUserLotto();

    // then
    expect(userLotto.length).toBe(SIZE);
  });

  test('발행되는 로또는 각각 중복되지 않는 6개 숫자로 이루어져 있다.', () => {
    // given
    const PAYMENT = 1000;
    const SIZE = 6;

    // when
    const userLotto = new UserLotto(PAYMENT).getUserLotto();

    // then
    expect(userLotto[0].length).toBe(SIZE);
  });

  test('2,000원을 지불하여 로또를 구입하면 중복되지 않는 6개의 숫자 로또 2개가 발행된다.', () => {
    // given
    const PAYMENT = 2000;
    const RANDOMS = [
      [1, 2, 3, 4, 5, 6],
      [40, 41, 42, 43, 44, 45],
    ];

    mockRandoms(RANDOMS);

    // when
    const userLotto = new UserLotto(PAYMENT).getUserLotto();

    // then
    expect(userLotto).toStrictEqual(RANDOMS);
  });
});
