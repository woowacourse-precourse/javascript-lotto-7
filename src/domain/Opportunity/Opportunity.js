import Cost from "./Cost.js";
import Outcome from "./Outcome.js";

class Opportunity {
  #cost;
  #outcome;
  #rate;

  constructor(cost) {
    this.#cost = new Cost(cost);
    this.#outcome = new Outcome();
  }

  calculateOutcome(stats) {
    this.#outcome.calculateOutcome(stats);
  }

  calculateRate(outcome = this.#outcome.outcome, cost = this.#cost.cost) {
    this.#rate = outcome / cost * 100;
    return this.#rate;
  }

  get cost() {
    return this.#cost.cost;
  }

  get count() {
    return this.#cost.count;
  }

  get outcome() {
    return this.#outcome.outcome;
  }

  get rate() {
    return this.#rate;
  }

}

export default Opportunity;
