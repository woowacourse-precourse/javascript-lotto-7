import InputHandler from "./utils/InputHandler.js"
import InputValidator from "./utils/InputValidator.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.inputValidator = new InputValidator();
  }
  async run() {
    try{
      const purchaseCost = await this.getPurchaseCost();
    } catch(error){
      console.error('무슨에러인고:',error);
    }
  }

  async getPurchaseCost(){
    const cost = await this.inputHandler.getInput("구입금액을 입력해 주세요. \n");
    return await this.inputValidator.validateCost(cost);
  }


}

export default App;
