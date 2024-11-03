import { ERROR_MESSAGE } from "./constants.js";

class Purchase{
    #amount;

    constructor(amount){
        this.#validate(amount);
        this.#amount=amount;
    }

    #validate(amount){
        if(isNaN(amount)){
            throw new Error (ERROR_MESSAGE.IS_NOT_NUMBER)
        }
    }
    
}

export default Purchase;
