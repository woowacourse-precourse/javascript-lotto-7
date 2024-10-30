import checkPurchase from "../feature/validate/checkPurchase";

class Purchase {
  /** TODO: 
   *  field: #userInput, purchase
   *  constructor:
   *    private 필드에 유저의 입력값을 초기화
   *    유효성이 확인된 인스턴스를 초기화
   */
  #userInput;
  purchase;

  constructor(userInput) {
    this.#userInput = userInput;
    this.purchase = this.#validate(this.#userInput);
  }

  #validate(userInput) {
    const PURCHASE = Number(userInput);
    
    checkPurchase(PURCHASE);

    return PURCHASE;
  }
}

export default Purchase;