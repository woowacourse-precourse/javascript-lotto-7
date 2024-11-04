import { matchedAmoutMap, PRIZE_TUPLE, WIN_WITH_BONUS_RANK } from '../constants/lotto.js';
import { INPUT_MESSAGE, NEW_LINE, OUTPUT_MESSAGE } from '../constants/message.js';
import { tupleAscSort } from '../utils/tupleSort.js';

class View {
  #io;
  constructor (io) {
    this.#io = io;
  }

  getPurchase () {
    return this.#io.in(INPUT_MESSAGE.PURCAHSE_AMOUNT);
  }

  getWinningNumbers () {
    return this.#io.in(INPUT_MESSAGE.WINNING_NUMBERS);
  }

  getBonusNumber () {
    return this.#io.in(INPUT_MESSAGE.BONUS_NUMBER);
  }

  out(message){
    return this.#io.out(message);
  }

  errorLog(message){
    return this.#io.out(message);
  }


  displayLottos(lottos){
    const messagses = 
    
    this.out(`${NEW_LINE}${lottos.length}${OUTPUT_MESSAGE.BUY_AMOUNT}`);
    const lottoString = [...lottos.map(this.#lottoForm)];
    this.out(lottoString.join('')); 
  }

  showAnalyzeResult (showAnalyzeResult) {
    const {rateOfReturn, rankFrequency } = showAnalyzeResult;
    this.out(this.#anaylzeForm(rateOfReturn, rankFrequency));
  }

  #lottoForm(lotto){
    const sortedNumbers = lotto.numbers.sort((a,b)=>a-b);
    return `[${sortedNumbers.join(', ')}]\n`;
  }

  #anaylzeForm(rateOfReturn, rankeFrequency){
    const messages = [OUTPUT_MESSAGE.WINNING_STATISTICS, 
      OUTPUT_MESSAGE.DIVIDER,
      this.#matchedAmountForm(rankeFrequency),  
      this.#rateOfReturnForm(rateOfReturn),
    ];
    return messages.join(NEW_LINE);
  }

  #matchedAmountForm(rankFrequency){
    const ascRankTuple = [...PRIZE_TUPLE].sort(tupleAscSort);
    return ascRankTuple.map(([rank, prize]) => {
      return this.#prizeForm(rank, prize, rankFrequency[rank]);
    }).join(NEW_LINE);
  }
  
  #rateOfReturnForm(rate){
    return `총 수익률은 ${rate}%입니다.`;
  }

  #prizeForm(rank, prize, count = 0){
    if(rank === WIN_WITH_BONUS_RANK){
      return `${matchedAmoutMap.get(rank)}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${count}개`;
    }
    return `${matchedAmoutMap.get(rank)}개 일치 (${prize.toLocaleString()}원) - ${count}개`;

  }


}

export default View;