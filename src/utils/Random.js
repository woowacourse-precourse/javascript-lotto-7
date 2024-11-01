import { Random } from '@woowacourse/mission-utils';

export function randomTicket() {
  const randomArray = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
    (a, b) => a - b
  );
  return randomArray;
}

export function ticketArray(tickets) {
  const ticketArray = [];
  for (let i = 0; i < tickets; i++) {
    ticketArray.push(randomTicket());
  }

  return ticketArray;
}
