import { BasicValidation } from '../Validation.js';

class User {
  #money;
  #tickets;

  constructor() {
    this.#money = 0;
    this.#tickets = [];
  }

  #validateUserMoney(money) {
    BasicValidation.InputBlank(money);
    BasicValidation.InputNumberType(money);
    BasicValidation.PurchaseUnit(money);
  }

  setMoney(money) {
    this.#validateUserMoney(money);
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
