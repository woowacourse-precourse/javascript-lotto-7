import { Console } from "@woowacourse/mission-utils";

class Input {
    constructor(validate){
        this.validate = validate;
        this.value = '';
    }

    async inputValue(message){
        let value;
        while(true){
            value = await Console.readLineAsync(message);

            if(this._validateValue(value))
                break;
        }
        this.value = value;
    }

    _validateValue(value){
        return this.validate(value);
    }

    getValue(){
        return this.value;
    }

    splitNum(){
        this.value = this.value.split(',');
    }

    changeNum(){
        this.value = this.value.map(Number);
    }
}

export default Input;