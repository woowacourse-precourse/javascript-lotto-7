import {
  DELIMETER,
  OutputMessages,
  Prize,
  PrizeMoney,
} from '../resources/Constants.js';
import isEmpty from '../utils/isEmpty.js';
import Output from '../utils/io/Output.js';

class LottoDisplayHandler {
  PrintLottoWinningResult(winningResult) {
    const winningResultMessage = [
      '당첨 통계',
      '---',
      `3개 일치 (${Prize.MATCH_3}원) - ${winningResult[3]}개`,
      `4개 일치 (${Prize.MATCH_4}원) - ${winningResult[4]}개`,
      `5개 일치 (${Prize.MATCH_5}원) - ${winningResult[5]}개`,
      `5개 일치, 보너스 볼 일치 (${Prize.MATCH_5_BONUS}원) - ${winningResult['5B']}개`,
      `6개 일치 (${Prize.MATCH_6}원) - ${winningResult[6]}개`,
    ];

    winningResultMessage.forEach((message) => Output.print(message));
  }

  printRateOfReturn(winningResult, purchaseAmount) {
    const totalPrizeMoney = Object.entries(winningResult).reduce(
      (acc, [matchCount, lottoCount]) =>
        acc + lottoCount * PrizeMoney[matchCount],
      0,
    );

    const rateOfReturn = ((totalPrizeMoney / purchaseAmount) * 100).toFixed(1);

    Output.print(OutputMessages.TOTAL_ROR(rateOfReturn));
  }

  displayLottoTickets(lottoTickets, purchaseAmount) {
    if (!isEmpty(lottoTickets)) {
      const ticketCount = purchaseAmount / 1000;

      Output.print(OutputMessages.PURCHASE_MESSAGE(ticketCount));

      lottoTickets.forEach((lottoTicket) => {
        Output.print(`[${lottoTicket.join(`${DELIMETER} `)}]`);
      });
    }
  }
}

export default LottoDisplayHandler;
