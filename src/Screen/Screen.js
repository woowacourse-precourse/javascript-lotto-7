import {Console} from "@woowacourse/mission-utils"
import { INPUT_BONUS, INPUT_MONEY, INPUT_WINNUMBERS, PRINT_EACH_RESULT, PRINT_LOTTEIRES, PRINT_PROFIT, PRINT_RESULT } from "../Util/Messages.js";
import { FIVE_BONUS_PRIZE, FIVE_PRIZE, FOUR_PRIZE, SIX_PRIZE, THREE_PRIZE } from "../Util/Prize.js";
class Screen{
    inputMoney(){
        const money =  Console.readLineAsync(INPUT_MONEY)
        return money
    }
    printLotteries(num,array){
        Console.print(PRINT_LOTTEIRES(num))
        array.forEach(element => {
            Console.print(`[${element.join(', ')}]`)
        })
    }
    inputLotto(){
        const winNum = Console.readLineAsync(INPUT_WINNUMBERS)
        return winNum
    }

    inputBonus(){
        const bonus = Console.readLineAsync(INPUT_BONUS)
        return bonus
    }

    printResult(reportObj,percentage){
        Console.print(PRINT_EACH_RESULT(3,THREE_PRIZE.toLocaleString(),false,reportObj['three']))
        Console.print(PRINT_EACH_RESULT(4,FOUR_PRIZE.toLocaleString(),false,reportObj['four']))
        Console.print(PRINT_EACH_RESULT(5,FIVE_PRIZE.toLocaleString(),false,reportObj['five']))
        Console.print(PRINT_EACH_RESULT(5,FIVE_BONUS_PRIZE.toLocaleString(),true,reportObj['bonus']))
        Console.print(PRINT_EACH_RESULT(6,SIX_PRIZE.toLocaleString(),false,reportObj['six']))
        Console.print(PRINT_PROFIT(percentage))
    }

}

export default Screen;