import {
  createPurchaseAmount,
  createLottoNumber,
  createBonusNumber,
} from '../src/factories/ObjectFactory.js';
import PurchaseAmount from '../src/lotto/PurchaseAmount.js';
import Lotto from '../src/Lotto.js';
import BonusNumber from '../src/lotto/BonusNumber.js';
import { InputView } from '../src/views/InputView.js';
import errorConstants from '../src/constants/errorConstants.js';

// InputView를 모킹
jest.mock('../src/views/InputView.js', () => ({
  InputView: jest.fn(),
}));

describe('createPurchaseAmount 함수 테스트', () => {
  test('사용자 입력 금액으로 PurchaseAmount 객체를 생성한다', async () => {
    InputView.mockResolvedValueOnce('5000');
    const purchaseAmount = await createPurchaseAmount();
    expect(purchaseAmount).toBeInstanceOf(PurchaseAmount);
    expect(purchaseAmount.getPurchaseAmount()).toBe(5000);
  });
});

describe('createLottoNumber 함수 테스트', () => {
  test('사용자 입력 번호로 Lotto 객체를 생성한다', async () => {
    InputView.mockResolvedValueOnce('1,2,3,4,5,6');
    const lotto = await createLottoNumber();
    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.getLottoNumber()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('createBonusNumber 함수 테스트', () => {
  const lottoNumbers = [1, 2, 3, 4, 5, 6];

  test('보너스 번호가 기존 로또 번호와 겹치지 않을 때 BonusNumber 객체를 생성한다', async () => {
    InputView.mockResolvedValueOnce('7');
    const bonusNumber = await createBonusNumber(lottoNumbers);
    expect(bonusNumber).toBeInstanceOf(BonusNumber);
    expect(bonusNumber.getBonusNumber()).toBe(7); // 수정된 부분
  });

  test('보너스 번호가 기존 로또 번호와 겹칠 때 에러를 발생시킨다', async () => {
    InputView.mockResolvedValueOnce('6');
    await expect(createBonusNumber(lottoNumbers)).rejects.toThrow(
      errorConstants.DUPLICATED_NUMBER,
    );
  });
});
