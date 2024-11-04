import LottoBonus from '../src/classes/LottoBonus';

describe('로또 보너스 번호 클래스 테스트', () => {
  let winningNumber;

  beforeEach(() => {
    winningNumber = [1, 2, 3, 4, 5, 6];
  });

  test('보너스 번호가 0이라면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBonus(0, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 음수라면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBonus(-1, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBonus(46, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 당첨 번호에 포함되어있으면 예외가 발생한다.', () => {
    expect(() => {
      new LottoBonus(1, winningNumber);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 문자열이라면 예외가 발생 한다.', () => {
    expect(() => {
      new LottoBonus('a', winningNumber);
    }).toThrow('[ERROR]');

    expect(() => {
      new LottoBonus('1', winningNumber);
    }).toThrow('[ERROR]');
  });

  test('정상적인 보너스 번호 입력하면 객체가 생성 된다.', () => {
    const bonusNumber = 7;
    const lottoBonus = new LottoBonus(bonusNumber, winningNumber);

    expect(lottoBonus.bonusNumber).toBe(bonusNumber);
  });
});
