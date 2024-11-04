import Opportunity from "../../domain/Opportunity/Opportunity.js";

class PurchaseCommand {
  #inputPort;
  #outputPort;
  #validator;

  constructor(inputPort, outputPort, validator) {
    this.#inputPort = inputPort;
    this.#outputPort = outputPort;
    this.#validator = validator;
  }

  async execute() {
    const opportunity = await this.handleCost();

    return opportunity;
  }

  async handleCost() {
    const cost = Number(await this.#inputPort.readCost());
    this.#validator.validate(cost);
    const opportunity = new Opportunity(cost);
    this.#outputPort.displayNewLine();
    this.#outputPort.displayCount(opportunity.count);

    return opportunity;
  }
}

export default PurchaseCommand;
