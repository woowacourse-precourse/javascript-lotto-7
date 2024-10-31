import { Console } from "@woowacourse/mission-utils";

class Money {
    static async inputMoney(){
        Console.print("구입금액을 입력해 주세요.");
        const money = await Console.readLineAsync('');
        this.validateMoney(Number(money));
    }

    static validateMoney(money){
        if(money % 1000 != 0){
            throw new Error("[ERROR] 1000원 단위로 입력해주세요.");
        }
    } 
}

export default Money;