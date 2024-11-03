import Lotto from '../src/Lotto';
import InputView from '../src/view/InputView';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
});

describe('추가 기능 구현 - 로또 번호', () => {
  let inputView;

  beforeEach(() => {
    inputView = new InputView();
  });

  test('로또 번호와 보너스번호가 중복된 경우 예외가 발생한다.', async () => {
    const mockLotto = '[1, 2, 3, 4, 5, 6]';
    const mockBonus = 1;

    jest
      .spyOn(inputView, 'askUserLotto')
      .mockImplementation(async () => mockLotto);

    jest
      .spyOn(inputView, 'askBonusLotto')
      .mockImplementation(async () => mockBonus);

    await expect(async () => {
      const userLotto = await inputView.askUserLotto();
      const bonusNumber = await inputView.askBonusLotto();

      if (userLotto.includes(bonusNumber)) {
        throw new Error('[ERROR]');
      }
    }).rejects.toThrow('[ERROR]');

    expect(inputView.askUserLotto).toHaveBeenCalled();
    expect(inputView.askBonusLotto).toHaveBeenCalled();
  });
});
