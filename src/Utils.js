import { ERROR_MESSAGE_FORMAT_OUTPUT } from './ErrorMessage.js';
import { Console } from '@woowacourse/mission-utils';

export function printLottoArray(lottoArray) {
  if (!Array.isArray(lottoArray)) throw new Error(ERROR_MESSAGE_FORMAT_OUTPUT.nonArray);
  return lottoArray.reduce((previous, current) => `${previous}\n${JSON.stringify(current.getNumbers()).replace(/,/g, ', ')}`, '');
}

export function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}
