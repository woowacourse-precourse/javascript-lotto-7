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
    }
    
}

export default Purchase;
