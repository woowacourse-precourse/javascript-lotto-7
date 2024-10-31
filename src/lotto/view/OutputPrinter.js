import { output } from '../../util/IOUtil.js'
import { OUTPUT_MESSAGE } from '../constants/Message.js';

export function printPurchaseResult(count, lottos) {
  output(OUTPUT_MESSAGE.PURCHASED_LOTTO_COUNT(count) + lottos);
}

export function printEmptyLine() {
  output('');
}