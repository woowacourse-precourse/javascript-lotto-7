import { Random } from '@woowacourse/mission-utils'
import LOTTO_CONFIG from '../constants/lottoConfig.js';
import Lotto from './Lotto.js';

export default function lottoGenerator(LottoPurchaseAmount){
  const lottoList = [];
  for(let i = 0; i<LottoPurchaseAmount; i++){
    const lotto  = new Lotto(RandomNumbersGenerator());
    lottoList.push(lotto);
  }
  return lottoList;
}


function RandomNumbersGenerator(){
  return  Random.pickUniqueNumbersInRange(
    LOTTO_CONFIG.MIN_NUMBER,
    LOTTO_CONFIG.MAX_NUMBER,
    LOTTO_CONFIG.NUMBER_COUNT
  );
}