import { Console } from '@woowacourse/mission-utils';

export class Output {
  printLottoTicketCount(lottoTicketCount) {
    Console.print(`\n${lottoTicketCount}개를 구매했습니다.`);
  }
}
