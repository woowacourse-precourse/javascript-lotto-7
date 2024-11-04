import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../src/controllers/LottoGames';

describe('로또게임 클래스 테스트', () => {
  test('구입 금액이 1,000원 단위가 아니면 예외가 발생한다.', () => {
    const lottoGame = new LottoGame();

    expect(() => {
      lottoGame.purchaseLottos(1500);
    }).toThrow('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');

    expect(() => {
      lottoGame.purchaseLottos(250);
    }).toThrow('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
  });

  test('유효한 구입 금액을 입력하면 로또 개수를 정확히 계산하여 생성한다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseLottos(5000);

    const lottos = lottoGame.getLottos();
    expect(lottos.length).toBe(5);
  });

  test('로또가 1~45 범위 내의 중복되지 않는 6개의 숫자로 생성된다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseLottos(2000);

    const lottos = lottoGame.getLottos();
    lottos.forEach((lotto) => {
      const numbers = lotto.getNumbers();
      expect(numbers.length).toBe(6);
      expect(new Set(numbers).size).toBe(6); // 중복 없는지 확인
      expect(numbers.every((num) => num >= 1 && num <= 45)).toBe(true); // 범위 확인
    });
  });

  test('로또 발행 결과가 출력된다.', () => {
    const lottoGame = new LottoGame();
    const logSpy = jest.spyOn(Console, 'print');

    lottoGame.purchaseLottos(3000);

    expect(logSpy).toHaveBeenCalledWith('3개를 구매했습니다.');
    expect(logSpy).toHaveBeenCalledTimes(4);

    lottoGame.getLottos().forEach((lotto, index) => {
      const numbers = lotto.getNumbers().join(', ');
      expect(logSpy).toHaveBeenCalledWith(`[${numbers}]`);
    });
  });
});
