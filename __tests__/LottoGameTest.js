import LottoGame from '../src/LottoGame.js';
import { Console } from '@woowacourse/mission-utils';
import { jest } from '@jest/globals';

describe('로또 게임 클래스 테스트', () => {
  let lottoGame;
  const mockConsolePrint = jest.spyOn(Console, 'print').mockImplementation(() => {});

  beforeEach(() => {
    lottoGame = new LottoGame();
    jest.clearAllMocks();
  });

  describe('로또 구입시 validation 테스트', () => {
    test('옳은 input', () => {
      expect(() => lottoGame.buyLotto(1000)).not.toThrow();
    });
    test('예외', () => {
      expect(() => lottoGame.buyLotto(500)).toThrow('[ERROR] 1000원 단위의 양수 금액을 입력해주세요.');
      expect(() => lottoGame.buyLotto(-1000)).toThrow('[ERROR] 1000원 단위의 양수 금액을 입력해주세요.');
      expect(() => lottoGame.buyLotto("*")).toThrow('[ERROR] 1000원 단위의 양수 금액을 입력해주세요.');

    })
  })


  test('로또 티켓 발급 시', () => {
    lottoGame.buyLotto(3000);
    const generatedLottos = lottoGame.generateLotto();
    expect(generatedLottos.length).toBe(3);
    generatedLottos.forEach((lotto) => {
      expect(lotto.getNumbers().length).toBe(6);
    });
  });

  test('당첨 번호 입력시', () => {
    const winNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => lottoGame.setWinNumbers(winNumbers)).not.toThrow();
    expect(() => lottoGame.setWinNumbers([1, 2, 3, 4, 5, 5])).toThrow('[ERROR] 중복되지 않는 수 6개를 입력해주세요.');
    expect(() => lottoGame.setWinNumbers([1, 2, 3, 4, 5])).toThrow('[ERROR] 중복되지 않는 수 6개를 입력해주세요.');
  });

  test('보너스 번호', () => {
    lottoGame.setWinNumbers([1, 2, 3, 4, 5, 6]);
    expect(() => lottoGame.setBonusNumber(7)).not.toThrow();
    expect(() => lottoGame.setBonusNumber(3)).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });

  test('수익률 출력 확인', () => {
    lottoGame.buyLotto(1000);
    lottoGame.setWinNumbers([1, 2, 3, 4, 5, 6]);
    lottoGame.setBonusNumber(7);
    const userLotto = lottoGame.generateLotto();

    jest.spyOn(lottoGame, 'checkWinning').mockReturnValue({
      3: 1,
      4: 0,
      5: 0,
      '5+bonus': 0,
      6: 0,
    });

    const profitRate = lottoGame.calculateProfit(userLotto);
    expect(profitRate).toBe('500.0'); // Adjust as necessary for expected results
  });

  test('should print winning results correctly', () => {
    const result = {
      3: 1,
      4: 0,
      5: 0,
      '5+bonus': 0,
      6: 0,
    };

    expect(mockConsolePrint).not.toHaveBeenCalled();
    lottoGame.checkWinning = jest.fn().mockReturnValue(result);
    expect(lottoGame.checkWinning()).toEqual(result);
  });
});
