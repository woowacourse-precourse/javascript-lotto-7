import { MissionUtils } from '@woowacourse/mission-utils';

export const randomTicket = () => {
  const randomArray = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    .sort((a, b) => a - b)
    .map(Number);
  return randomArray;
};

export const ticketArray = (tickets) => {
  const ticketArray = Array.from({ length: tickets }, () => randomTicket());
  return ticketArray;
};
