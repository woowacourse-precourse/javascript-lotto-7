import Opportunity from "../../domain/Opportunity/Opportunity.js";
import MyLottoList from "../../domain/MyLotto/MyLottoList.js";
import retry from "../utils/retry.js";

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
    const processCostFlow = async() => {
      const cost = Number(await this.#inputPort.readCost());
      this.#validator.validate(cost);
      const opportunity = new Opportunity(cost);
      this.#outputPort.displayNewLine();
      this.#outputPort.displayCount(opportunity.count);

      return opportunity;
    };

    return retry(processCostFlow);
  }

  handleMyLottoList(count) {
    const myLottoList = MyLottoList.create(count);
    this.#outputPort.displayMyLottoList(myLottoList.myLottoList);
    this.#outputPort.displayNewLine();

    return myLottoList;
  }
}

export default PurchaseCommand;
