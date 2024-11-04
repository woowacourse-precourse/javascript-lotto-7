import { LOTTO_TEMPLATE } from '../constants/lottoResults.js';

export const formatLottoResult = (lottoResult) => {
  return Object.keys(LOTTO_TEMPLATE).map((rank) => {
    return LOTTO_TEMPLATE[rank].replace('{count}', lottoResult[rank].count);
  });
};
