import {Console} from "@woowacourse/mission-utils"


//구입금액, 당첨번호, 보너스 번호
export default class InputView{
    static async readInput(){
        try{
            const purchase =(
                await Console.readLineAsync()
            );
            const winningNums=(
                await Console.readLineAsync()
            )
            const bonusNum=(
                await Console.readLineAsync()
            )
            return {purchase,winningNums,bonusNum}
        }catch(error){
            throw error;
        }
    }
}