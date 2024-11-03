import { MissionUtils } from '@woowacourse/mission-utils';
import ERROR_MESSAGE from '../src/constant/errorMessage.js';
import Lotto from '../src/model/Lotto.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 6, 7])).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test.each([
    [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    [[1, 2, 3, 4, 5], ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    [[1, 2, 3, 4, 5, 5], ERROR_MESSAGE.LOTTO_NUM_DUPLICATION],
    [[1, 2, 'a', 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_TYPE],
    [[0, 2, 3, 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[1, 2, 3, 4, 5, 46], ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[1.1, 2, 3, 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_TYPE],
    [['1', '2', '3   ', '4', ' 5', '45'], ERROR_MESSAGE.LOTTO_NUM_TYPE],
  ])('로또 생성 Lotto.create() 예외 처리 테스트', (numbers, errorMessage) => {
    mockRandoms([numbers]);

    expect(() => Lotto.create()).toThrow(errorMessage);
  });
});
