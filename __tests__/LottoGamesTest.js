import { Console } from '@woowacourse/mission-utils';
import LottoGame from '../src/controllers/LottoGames';
import Lotto from '../src/Lotto';

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
      expect(new Set(numbers).size).toBe(6);
      expect(numbers.every((num) => num >= 1 && num <= 45)).toBe(true);
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

  test('당첨 번호와 보너스 번호가 중복 없이 1-45 범위 내에 있는지 확인', () => {
    const lottoGame = new LottoGame();

    const validWinningNumbers = [1, 2, 3, 4, 5, 6];
    const validBonusNumber = 7;

    expect(() => {
      lottoGame.setWinningNumbers(validWinningNumbers, validBonusNumber);
    }).not.toThrow();

    const { winningNumbers, bonusNumber } = lottoGame.getWinningNumbers();
    expect(winningNumbers).toEqual(validWinningNumbers);
    expect(bonusNumber).toBe(validBonusNumber);
  });

  test('당첨 번호와 보너스 번호가 중복되면 예외가 발생한다.', () => {
    const lottoGame = new LottoGame();
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 6;

    expect(() => {
      lottoGame.setWinningNumbers(winningNumbers, bonusNumber);
    }).toThrow('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });

  test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
    const lottoGame = new LottoGame();
    const invalidWinningNumbers = [1, 2, 3, 4, 5];
    const bonusNumber = 6;

    expect(() => {
      lottoGame.setWinningNumbers(invalidWinningNumbers, bonusNumber);
    }).toThrow('[ERROR] 당첨 번호는 6개여야 합니다.');
  });

  test('당첨 번호 또는 보너스 번호가 1~45 범위를 벗어나면 예외가 발생한다.', () => {
    const lottoGame = new LottoGame();

    const invalidWinningNumbers = [0, 2, 3, 4, 5, 6];
    const validBonusNumber = 7;
    expect(() => {
      lottoGame.setWinningNumbers(invalidWinningNumbers, validBonusNumber);
    }).toThrow('[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다.');

    const validWinningNumbers = [1, 2, 3, 4, 5, 6];
    const invalidBonusNumber = 46;
    expect(() => {
      lottoGame.setWinningNumbers(validWinningNumbers, invalidBonusNumber);
    }).toThrow('[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.');
  });

  test('당첨 번호와 보너스 번호를 기준으로 로또 등수를 정확히 계산한다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseLottos(3000);
    lottoGame.setWinningNumbers([1, 2, 3, 4, 5, 6], 7);

    const mockLottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
    ];

    lottoGame.lottos = mockLottos.map((numbers) => new Lotto(numbers));

    lottoGame.checkResults();
    const results = lottoGame.getResults();

    expect(results[1]).toBe(1);
    expect(results[2]).toBe(1);
    expect(results[3]).toBe(1);
    expect(results[4]).toBe(0);
    expect(results[5]).toBe(0);
  });

  test('당첨 결과가 올바르게 출력된다.', () => {
    const lottoGame = new LottoGame();
    lottoGame.purchaseLottos(3000);
    lottoGame.setWinningNumbers([1, 2, 3, 4, 5, 6], 7);

    const logSpy = jest.spyOn(Console, 'print');
    const mockLottos = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
    ];

    lottoGame.lottos = mockLottos.map((numbers) => new Lotto(numbers));

    lottoGame.checkResults();
    lottoGame.printResults();

    expect(logSpy).toHaveBeenCalledWith('당첨 통계');
    expect(logSpy).toHaveBeenCalledWith('---');
    expect(logSpy).toHaveBeenCalledWith('3개 일치 (5,000원) - 0개');
    expect(logSpy).toHaveBeenCalledWith('4개 일치 (50,000원) - 0개');
    expect(logSpy).toHaveBeenCalledWith('5개 일치 (1,500,000원) - 1개');
    expect(logSpy).toHaveBeenCalledWith('5개 일치, 보너스 볼 일치 (30,000,000원) - 1개');
    expect(logSpy).toHaveBeenCalledWith('6개 일치 (2,000,000,000원) - 1개');
  });
});
