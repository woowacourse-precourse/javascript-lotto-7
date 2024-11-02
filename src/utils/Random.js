import { Random } from '@woowacourse/mission-utils';

export function randomTicket() {
  const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6)
    .sort((a, b) => a - b)
    .map(Number);
  return randomArray;
}

export function ticketArray(tickets) {
  const ticketArray = Array.from({ length: tickets }, () => randomTicket());
  return ticketArray;
}
