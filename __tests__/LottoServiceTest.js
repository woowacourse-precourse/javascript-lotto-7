import { MissionUtils } from '@woowacourse/mission-utils';
import LottoService from '../src/Model/LottoService.js';
import { PRICE_INFO } from '../src/Constants.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickUniqueNumbersInRange);
};

function getWinningInfo(rank) {
  const winningInfoObject = {
    '1st': 0,
    '2nd': 0,
    '3rd': 0,
    '4th': 0,
    '5th': 0,
  };

  if (rank) {
    winningInfoObject[rank] += 1;
  }
  return winningInfoObject;
}

describe('로또 서비스 User Lotto 생성 테스트', () => {
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
});

describe('로또 서비스 당첨 내역 관리 테스트', () => {
  let lottoService;
  const PURCHASED_AMOUNT = 1000;
  const USER_LOTTO_NUMBER = [1, 2, 3, 4, 5, 6];

  beforeEach(() => {
    lottoService = new LottoService();

    mockRandoms([USER_LOTTO_NUMBER]);
    lottoService.setUserLotto(PURCHASED_AMOUNT);
  });

  test.each([
    [[1, 2, 3, 4, 5, 6], [10], '1st'],
    [[2, 3, 4, 5, 6, 7], [1], '2nd'],
    [[2, 3, 4, 5, 6, 7], [10], '3rd'],
    [[3, 4, 5, 6, 7, 8], [10], '4th'],
    [[4, 5, 6, 7, 8, 9], [10], '5th'],
    [[5, 6, 7, 8, 9, 10], [1], null],
  ])(
    '유저가 구매한 로또번호와 당첨번호를 비교하여 당첨 내역을 객체로 전달한다.',
    (winningNumbers, bonusNumber, rank) => {
      // given
      lottoService.setWinningNumber(winningNumbers);
      lottoService.setBonusNumber(bonusNumber);

      // when
      const winningInfo = lottoService.getRank(USER_LOTTO_NUMBER);

      // then
      expect(winningInfo).toEqual(rank);
    },
  );

  test.each([
    [[1, 2, 3, 4, 5, 6], [10], '1st'],
    [[2, 3, 4, 5, 6, 7], [1], '2nd'],
    [[2, 3, 4, 5, 6, 7], [10], '3rd'],
    [[3, 4, 5, 6, 7, 8], [10], '4th'],
    [[4, 5, 6, 7, 8, 9], [10], '5th'],
    [[5, 6, 7, 8, 9, 10], [1], null],
  ])(
    '유저가 구매한 로또번호와 당첨번호를 비교하여 당첨 내역을 객체로 전달한다.',
    (winningNumbers, bonusNumber, rank) => {
      // given
      lottoService.setWinningNumber(winningNumbers);
      lottoService.setBonusNumber(bonusNumber);

      // when
      const winningInfo = lottoService.getWinningDetails();

      // then
      expect(winningInfo).toEqual(getWinningInfo(rank));
    },
  );
});
