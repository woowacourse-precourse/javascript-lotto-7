import WinningLottoMachine from '../src/WinningLottoMachine.js';
import InputView from '../src/view/InputView.js';

beforeEach(() => {
  jest.clearAllMocks();
});

describe.each([
  {
    winningNumbers: '1,2,3,4,5,6',
    bonusNumber: '7',
    expectedNumbers: [1, 2, 3, 4, 5, 6],
    expectedBonus: 7,
  },
  {
    winningNumbers: '10,15,20,25,30,35',
    bonusNumber: '40',
    expectedNumbers: [10, 15, 20, 25, 30, 35],
    expectedBonus: 40,
  },
  {
    winningNumbers: '20,24,11,4,3,8',
    bonusNumber: '5',
    expectedNumbers: [20, 24, 11, 4, 3, 8],
    expectedBonus: 5,
  },
])(
  'createWinningLotto 메서드 테스트 - 유효한 당첨 번호와 보너스 번호',
  ({ winningNumbers, bonusNumber, expectedNumbers, expectedBonus }) => {
    it(`당첨 번호가 ${winningNumbers}이고 보너스 번호가 ${bonusNumber}일 때 WinningLotto가 정상 생성된다`, async () => {
      jest
        .spyOn(InputView, 'getUserInput')
        .mockResolvedValueOnce(winningNumbers)
        .mockResolvedValueOnce(bonusNumber);

      const winningLotto = await WinningLottoMachine.createWinningLotto();

      expect(winningLotto.getNumbers()).toEqual(expectedNumbers);
      expect(winningLotto.getBonusNumber()).toBe(expectedBonus);
    });
  },
);
