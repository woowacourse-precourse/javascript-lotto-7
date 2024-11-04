import Lotto from '../src/Lotto';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 번호의 개수가 6개가 아니면 예외 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호가 6자리보다 많이 생성됨!');

    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow('[ERROR] 로또 번호가 6자리보다 적게 생성됨!');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 로또 번호에 중복된 값이 있음!');
  });

  test('로또 번호를 출력한다.', () => {
    expect(() => {
      const logSpy = getLogSpy();
      const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
      
      lotto.printNumbers();

      expect(logSpy).toHaveBeenCalledWith('[1, 2, 3, 4, 5, 6]');
    });
  });

  test('로또 당첨 결과를 반환한다.', () => {
    const correctNumbers = [13, 14, 15, 16, 17, 18];
    const bonusNumber = 12;

    const fifth = new Lotto([13, 14, 15, 1, 2, 3]);
    const fourth = new Lotto([13, 14, 15, 16, 1, 2]);
    const third = new Lotto([13, 14, 15, 16, 17, 1]);
    const second = new Lotto([12, 13, 14, 15, 16, 17]);
    const first = new Lotto([13, 14, 15, 16, 17, 18]);
    
    expect(fifth.lottoResult(correctNumbers, bonusNumber)).toBe(5);
    expect(fourth.lottoResult(correctNumbers, bonusNumber)).toBe(4);
    expect(third.lottoResult(correctNumbers, bonusNumber)).toBe(3);
    expect(second.lottoResult(correctNumbers, bonusNumber)).toBe(2);
    expect(first.lottoResult(correctNumbers, bonusNumber)).toBe(1);
  });
});
