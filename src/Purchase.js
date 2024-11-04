import { LOTTO_COST, LOTTO_COUNT, MAX_LOTTO_NUMBER, MIN_LOTTO_NUMBER, PURCHASE_ERROR_MESSAGE} from "./constants.js";
import { Random } from "@woowacourse/mission-utils";

class Purchase{
    #cost;
    #randomNumbersList = [];

    constructor(cost){
        this.#validate(cost);
        this.#cost=Number(cost);
    }

    #validate(cost){
        if(isNaN(Number(cost))){
            throw new Error (PURCHASE_ERROR_MESSAGE.IS_NOT_NUMBER);
        }
        else if(cost.trim()===""){
            throw new Error(PURCHASE_ERROR_MESSAGE.INVALID_BLANK);
        }
        else if(Number(cost)<0){
            throw new Error(PURCHASE_ERROR_MESSAGE.IS_NOT_POSITIVE_NUMBER);
        }
        else if(Number(cost)%LOTTO_COST!==0){
            throw new Error(PURCHASE_ERROR_MESSAGE.IS_NOT_MULTIPLE_OF_THOUSAND);
        }
    }

    getPurchaseCount() {
        return Math.floor(this.#cost / LOTTO_COST);
      }
    
      generateRandomNumbers() {
        const randomNumbers=Random.pickUniqueNumbersInRange(MIN_LOTTO_NUMBER, MAX_LOTTO_NUMBER, LOTTO_COUNT);
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
