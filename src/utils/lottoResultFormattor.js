import { LOTTO_RESULTS } from '../constants/lottoResults.js';

export const formatLottoResult = (lottoResult) => {
  return Object.keys(LOTTO_RESULTS.TEMPLATE).map((rank) => {
    return LOTTO_RESULTS.TEMPLATE[rank].replace(
      '{count}',
      lottoResult[rank].count
    );
  });
};
