import { ERROR_MESSAGE } from "./constants.js";

class Purchase{
    #amount;

    constructor(amount){
        this.#validate(amount);
        this.#amount=Number(amount);
    }

    #validate(amount){
        if(isNaN(Number(amount))){
            throw new Error (ERROR_MESSAGE.IS_NOT_NUMBER)
        }
    }
    
}

export default Purchase;
