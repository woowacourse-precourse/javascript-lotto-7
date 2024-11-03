import { MissionUtils } from '@woowacourse/mission-utils';
import LottoService from '../src/Model/LottoService.js';
import { PRICE_INFO } from '../src/Constants.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('로또 서비스 클래스 테스트', () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  test('로또 구매 금액이 1000단위가 아닐 경우 Error를 발생시킨다.', () => {
    expect(() => {
      lottoService.setUserLotto(1001);
    }).toThrow('[ERROR]');
  });

  test.each([['-1'], ['0'], ['100000000']])(
    '로또 구매 금액이 입력 가능한 Range를 벗어날 경우 Error를 발생시킨다.',
    (input) => {
      expect(() => {
        lottoService.setUserLotto(input);
      }).toThrow('[ERROR]');
    },
  );

  test('로또 구매 금액을 로또 가격으로 나누어 로또 구매 수량을 설정한다.', () => {
    lottoService.setUserLotto(10000);
    expect(lottoService.getUserLottoNumbers().length).toBe(10);
  });

  test('유저가 구매한 로또번호와 당첨번호를 비교하여 등수를 리턴한다.', () => {
    // 필요한거
    const USER_LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];
    const WINNING_LOTTO_NUMBER = [2, 3, 4, 5, 6, 7];
    const BONUS_NUMBER = [8];

    lottoService.setWinningNumber(WINNING_LOTTO_NUMBER);
    lottoService.setBonusNumber(BONUS_NUMBER);

    expect(lottoService.getRank(USER_LOTTO_NUMBER)).toBe('3rd');
  });

  test('유저가 구매한 로또번호와 당첨번호를 비교하여 당첨 내역을 객체로 전달한다.', () => {
    const PURCHASED_AMOUNT = 1000;
    const USER_LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];
    const WINNING_LOTTO_NUMBER = [2, 3, 4, 5, 6, 7];
    const BONUS_NUMBER = [8];

    mockRandoms([USER_LOTTO_NUMBER]);
    lottoService.setUserLotto(PURCHASED_AMOUNT);
    lottoService.setWinningNumber(WINNING_LOTTO_NUMBER);
    lottoService.setBonusNumber(BONUS_NUMBER);

    const winningInfoObject = {
      '1st': 0,
      '2nd': 0,
      '3rd': 1,
      '4th': 0,
      '5th': 0,
    };

    expect(lottoService.getWinningDetails()).toEqual(winningInfoObject);
  });

  test('유저가 구매한 로또번호와 당첨번호를 비교하여 당첨 내역을 객체로 전달한다.', () => {
    const PURCHASED_AMOUNT = 1000;
    const USER_LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];
    const WINNING_LOTTO_NUMBER = [2, 3, 4, 5, 6, 7];
    const BONUS_NUMBER = [1];

    mockRandoms([USER_LOTTO_NUMBER]);
    lottoService.setUserLotto(PURCHASED_AMOUNT);
    lottoService.setWinningNumber(WINNING_LOTTO_NUMBER);
    lottoService.setBonusNumber(BONUS_NUMBER);

    const winningInfoObject = {
      '1st': 0,
      '2nd': 1,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };

    expect(lottoService.getWinningDetails()).toEqual(winningInfoObject);
  });

  test('유저가 구매한 로또번호와 당첨번호를 비교하여 당첨 내역을 객체로 전달한다.', () => {
    const PURCHASED_AMOUNT = 1000;
    const USER_LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];
    const WINNING_LOTTO_NUMBER = [12, 13, 14, 15, 16, 17];
    const BONUS_NUMBER = [1];

    mockRandoms([USER_LOTTO_NUMBER]);
    lottoService.setUserLotto(PURCHASED_AMOUNT);
    lottoService.setWinningNumber(WINNING_LOTTO_NUMBER);
    lottoService.setBonusNumber(BONUS_NUMBER);

    const winningInfoObject = {
      '1st': 0,
      '2nd': 0,
      '3rd': 0,
      '4th': 0,
      '5th': 0,
    };

    expect(lottoService.getWinningDetails()).toEqual(winningInfoObject);
  });
});
