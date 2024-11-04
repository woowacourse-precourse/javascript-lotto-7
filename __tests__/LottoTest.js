import Lotto from '../src/Lotto.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호 6개 생성.', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(input);
    expect(lotto.getLottoNumbers()).toBe(input);
  });

  test('로또 번호 6개 출력.', () => {
    const logSpy = getLogSpy();

    const input = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(input);

    lotto.showLottoNumbers();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining('[1, 2, 3, 4, 5, 6]'),
    );
  });
});
