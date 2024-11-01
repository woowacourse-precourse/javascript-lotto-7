import { UNIT } from '../constants/Constants.js';

// 사용자가 입력한 구매 값을 이용해 ticket 개수 출력
export function ticketCount(cost) {
  return Number(cost) / UNIT.TICKET_PRICE;
}
