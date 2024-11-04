import InputPort from "../port/InputPort.js";
import OutputPort from "../port/OutputPort.js";
import PurchaseCommand from "./command/PurchaseCommand.js";
import WinningLottoCommand from "./command/WinningLottoCommand.js";
import ResultCommand from "./command/ResultCommand.js";
import Validator from "./utils/Validator.js";

class LottoService {
  #purchaseCommand;
  #winningLottoCommand;
  #resultCommand;

  constructor(inputPort = InputPort, outputPort = OutputPort) {
    const validator = new Validator();
    this.#purchaseCommand = new PurchaseCommand(inputPort, outputPort, validator);
    this.#winningLottoCommand = new WinningLottoCommand(inputPort, validator);
    this.#resultCommand = new ResultCommand(outputPort);
  }

  async play() {
    const { opportunity, myLottoList } = await this.#purchaseCommand.execute();
    const winningLotto = await this.#winningLottoCommand.execute();
    this.#resultCommand.execute(myLottoList, winningLotto, opportunity);
  }

}

export default LottoService;
