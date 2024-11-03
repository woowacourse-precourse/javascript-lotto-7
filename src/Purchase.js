import { ERROR_MESSAGE } from "./constants.js";
import { Random } from "@woowacourse/mission-utils";

class Purchase{
    #amount;
    #randomNumbersList = [];

    constructor(amount){
        this.#validate(amount);
        this.#amount=Number(amount);
    }

    #validate(amount){
        if(isNaN(Number(amount))){
            throw new Error (ERROR_MESSAGE.IS_NOT_NUMBER);
        }
        else if(amount.trim()===""){
            throw new Error(ERROR_MESSAGE.INVALID_BLANK);
        }
        else if(Number(amount)<0){
            throw new Error(ERROR_MESSAGE.IS_NOT_POSITIVE_NUMBER);
        }
        else if(Number(amount)%1000!==0){
            throw new Error(ERROR_MESSAGE.IS_NOT_MULTIPLE_OF_THOUSAND);
        }
    }

    getPurchaseCount() {
        return Math.floor(this.#amount / 1000);
      }
    
      generateRandomNumbers() {
        const randomNumbers=Random.pickUniqueNumbersInRange(1, 45, 6);
        return [...randomNumbers].sort((a, b) => a - b);
      }

      generateAllRandomNumbers() {
        const purchaseCount = this.getPurchaseCount();
        for (let i = 0; i < purchaseCount; i++) {
          const randomNumbers = this.generateRandomNumbers();
          this.#randomNumbersList.push(randomNumbers);
        }
      }
    
      getRandomNumbersList() {
        return this.#randomNumbersList;
      }
    
}

export default Purchase;
