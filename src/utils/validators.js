import { isEmpty, isEndWith1000, isMinusNumber, isNotNumber } from "../controller/vaildateInputNumber.js"
import MyOutput from "../woowahanOutput.js";

const buyMoneyValidator = (input) => {
    const output = new MyOutput()

    if (input === 'start'){
        return false
    }

    if (isEmpty(input)) {
        output.printEmptyValue();
        return false
    }

    if (isNotNumber(input)) {
        output.printNotNumber();
        return false
    }
    
    if (isMinusNumber(input)) {
        output.printMinusNumber();
        return false
    } 
    
    if (!isEndWith1000(input)) {
        output.printEndWith1000();
        return false
    }
    
    return true
}

export { buyMoneyValidator };