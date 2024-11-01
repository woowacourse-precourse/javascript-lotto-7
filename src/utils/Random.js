import { MissionUtils } from '@woowacourse/mission-utils';

export function randomTicket(tickets) {
  const ticketArray = [];
  for (let i = 0; i < tickets; i++) {
    const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    ticketArray.push(randomArray);
  }
  return ticketArray;
}
