import { Console } from "@woowacourse/mission-utils";

class Input {
    constructor(validate){
        this.validate = validate;
        this.value = '';
    }

    async inputValue(message){
        while(true){
            const value = await Console.readLineAsync(message);

            if(!this._validateValue(value))
                continue;

            break;
        }
        this.value = value;
    }

    _validateValue(value){
        this.validate(value);
    }

    getValue(){
        return this.value;
    }
}