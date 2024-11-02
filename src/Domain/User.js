import { basicValidation } from '../Validation.js';

class User {
  #money;
  #tickets;

  constructor() {
    this.#money = 0;
    this.#tickets = [];
  }

  #validateMoney(money) {
    basicValidation.validateInputBlank(money);
    basicValidation.validateInputNumberType(money);
    basicValidation.validateInputPossiblePurchase(money);
    basicValidation.validatePurchaseUnit(money);
  }

  setMoney(money) {
    this.#validateMoney(money);
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }

  setTickets(tickets) {
    this.#tickets = tickets;
  }

  getTickets() {
    return this.#tickets;
  }
}

export default User;
