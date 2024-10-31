import { input } from '../../util/IOUtil.js';
import { INPUT_MESSAGE } from '../constants/Message.js';

export async function getPurchaseAmount() {
  const amount = await input(INPUT_MESSAGE.REQUEST_PURCHASE_AMOUNT);
  return amount;
}