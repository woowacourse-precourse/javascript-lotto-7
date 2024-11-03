//로또 생성
//구매 금액 가져와서 장수 계산 후 그 장수 만큼 로또 생성,
//purchaseAmount => app.js에서 가져온 값
//pickUniqueNumbersInRange 랜덤으로 1-45에서 6개 숫자를 중복 없이 장수 만큼 반복
import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_PRICE } from './constants.js';

export default class LotteryTickets {
   #tickets = []; //로또 번호를 저장하는 프라이빗 필드

   constructor(purchaseAmount) {
      this.purchaseTickets(purchaseAmount);
   }

   //로또 장수 계산 및 로또 번호 생성
   purchaseTickets(purchaseAmount) {
      const ticketCount = purchaseAmount / LOTTO_PRICE;
      for (let i = 0; i < ticketCount; i++) {
         const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
         this.#tickets.push(numbers.sort((a, b) => a - b)); // 오름차순 정렬
      }
   }

   getTickets() {
      return this.#tickets;
   }
}
