import { ERROR_MESSAGE } from "./constants.js";

class Purchase{
    #amount;

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
    
}

export default Purchase;
