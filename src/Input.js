import { Console } from "@woowacourse/mission-utils";

class Input {
    constructor(validate){
        this.validate = validate;
        this.value = '';
    }

    async inputValue(message){
        while(true){
            try{
                const value = await Console.readLineAsync(message);
                this._validateValue(value);
                break;
            } catch(error){
                Console.print("[ERROR] 입력 시 에러가 발생했습니다.");
            }
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