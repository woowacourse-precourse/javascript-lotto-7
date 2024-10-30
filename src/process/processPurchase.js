import { Console } from "@woowacourse/mission-utils";
import Purchase from "../Class/Purchase.js";
import getPurchase from "../feature/UI/getUserInput.js";

async function processPurchase() {
  /** TODO: 
   *  새분화된 함수, class 인스턴스 화를 관리
   *  1. 유저의 입력값을 받는 함수 호출
   *  2. 입력값을 활용하여 class를 인스턴스화
   *  3. 에러가 밸생 했을때의 처리 실행
   *    - 에러 메시지를 출력
   *    - 애플리케이션이 중지 되지 않도록 해당 함수를 재귀
   */
  try {
    const USER_INPUT = await getPurchase();
    const PURCHASE = new Purchase(USER_INPUT);
    return PURCHASE.purchase;
  } catch (error) {
    Console.print(error.message)
    processPurchase();
  }
};

export default processPurchase;