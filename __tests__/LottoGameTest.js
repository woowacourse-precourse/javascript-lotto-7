import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../src/LottoGame';

describe('로또게임 클래스 테스트', () => {
  const QUANTITY = 3;

  test('로또 구매 내역 출력 테스트', () => {
    const lottoGame = new LottoGame(QUANTITY);
    jest.spyOn(Console, 'print');

    lottoGame.displayLottos();

    expect(Console.print).toHaveBeenCalledWith(
      `\n${QUANTITY}개를 구매했습니다.`
    );
    expect(Console.print).toHaveBeenCalledTimes(QUANTITY + 1);
  });
});
