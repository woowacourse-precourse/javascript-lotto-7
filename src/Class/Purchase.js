import checkPurchase from "../feature/validate/checkPurchase.js";

class Purchase {
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