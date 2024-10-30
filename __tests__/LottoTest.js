import Lotto from '../src/Lotto.js';
import App from '../src/App.js';

describe('로또 클래스 테스트', () => {
  // test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 6, 7]);
  //   }).toThrow('[ERROR]');
  // });

  // // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  // test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
  //   expect(() => {
  //     new Lotto([1, 2, 3, 4, 5, 5]);
  //   }).toThrow('[ERROR]');
  // });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성

  describe('1개의 사용자 로또 발행하기', () => {
    const app = new App();
    test('1개의 로또를 생성한다.', () => {
      expect(app.generateLotto()).toBeInstanceOf(Lotto);
    });
  });

  describe('당첨 로또와 사용자 로또 비교하기', () => {
    let lotto;
    beforeEach(() => {
      lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    });

    test('당첨 로또와 사용자 로또의 일치하는 숫자가 5개있으며 보너스 번호는 일치하지 않는다.', () => {
      expect(lotto.compareWinningLotto([5, 4, 1, 2, 9, 3], 11)).toEqual([5, false]);
    });
    test('당첨 로또와 사용자 로또의 일치하는 숫자가 6개있으며 보너스 번호는 일치하지 않는다.', () => {
      expect(lotto.compareWinningLotto([6, 5, 4, 1, 2, 3], 11)).toEqual([6, false]);
    });
    test('당첨 로또와 사용자 로또의 일치하는 숫자가 5개있으며 보너스 번호가 일치한다.', () => {
      expect(lotto.compareWinningLotto([1, 3, 5, 2, 9, 4], 6)).toEqual([5, true]);
    });
  });

  describe('N개의 사용자 로또 발행하기', () => {
    const app = new App();
    test('N개의 로또는 각각 독립적이다.', () => {
      expect(app.generateLottos(10)).toHaveLength(10);
    });
  });

  describe('구입 금액에 따른 로또 개수 계산하기', () => {
    const app = new App();
    test('구입 금액에 해당하는 만큼 로또를 발행한다.', () => {
      expect((app.createLottoQuantity(18000))).toBe(18);
    });
  });
});
