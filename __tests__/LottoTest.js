import Lotto from '../src/Lotto';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe('로또 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('로또 번호의 개수가 6개가 아니면 예외 발생.', () => {
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

  test('로또 번호를 출력', () => {
    expect(() => {
    const logSpy = getLogSpy();

    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    lotto.printNumbers();

    expect(logSpy).toHaveBeenCalledWith("[1, 2, 3, 4, 5, 6]")
    })
  })

});
