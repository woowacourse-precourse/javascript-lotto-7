import LottoGame from '../src/domain/LottoGame.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';
import { LOTTO_CONDITION } from '../src/constants/constants.js';

describe('로또 게임 테스트', () => {
  const tickets = 3;
  let lottoGame;

  beforeEach(() => {
    lottoGame = new LottoGame();
    lottoGame.setLotto(tickets);
  });

  test(`${tickets}장의 로또에 숫자 배열 길이가 ${LOTTO_CONDITION.length}개가 맞는지 확인한다.`, () => {
    const lottos = lottoGame.getLotto();

    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Array);
      expect(lotto).toHaveLength(LOTTO_CONDITION.length);
    });
  });
});
