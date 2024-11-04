import { PurchaseAmount, BonusNumber } from '../lotto/index.js';
import Lotto from '../Lotto.js';
import { InputView } from '../views/InputView.js'
import { uiConstants } from '../constants/index.js';

export async function createPurchaseAmount() {
  const inputAmount = await InputView(
    uiConstants.RANDOM_NUMBER_PURCHASE_MONEY_MESSAGE,
  );
  const purchaseAmount = new PurchaseAmount(inputAmount);
  return purchaseAmount;
}

export async function createLottoNumber() {
  let lottoNumber = await InputView(uiConstants.LOTTO_NUMBER_MESSAGE);
  lottoNumber = lottoNumber.split(',').map((number) => Number(number));
  const lotto = new Lotto(lottoNumber);
  return lotto;
}

export async function createBonusNumber(lottoNumber) {
  const bonusNumber = await InputView(uiConstants.BOUNS_NUMBER_MESSAGE);
  const bonusObject = new BonusNumber(Number(bonusNumber), lottoNumber);
  return bonusObject;
}
