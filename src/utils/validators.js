import { isEmpty, isEndWith1000, isMinusNumber, isNotNumber } from "../controller/vaildateInputNumber.js"
import { MyOutput } from "../woowahanOutput.js";

const buyMoneyValidator = (input) => {
    const output = new MyOutput();

    const conditions = [
        { check: () => input === 'start', action: () => { } },
        { check: () => isEmpty(input), action: () => output.printEmptyValue() },
        { check: () => isNotNumber(input), action: () => output.printNotNumber() },
        { check: () => isMinusNumber(input), action: () => output.printMinusNumber() },
        { check: () => !isEndWith1000(input), action: () => output.printEndWith1000() }
    ];

    for (const condition of conditions) {
        if (condition.check()) {
            condition.action();
            return false;
        }
    }

    return true;
};

export { buyMoneyValidator };