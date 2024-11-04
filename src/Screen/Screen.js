import {Console} from "@woowacourse/mission-utils"
import { INPUT_BONUS, INPUT_MONEY, INPUT_WINNUMBERS, PRINT_EACH_RESULT, PRINT_LOTTEIRES, PRINT_RESULT } from "../Util/Messages.js";
import { FIVE_BONUS_PRIZE, FIVE_PRIZE, FOUR_PRIZE, SIX_PRIZE } from "../Util/Prize.js";
class Screen{
    inputMoney(){
        const money =  Console.readLineAsync(INPUT_MONEY)
        return money
    }
    printLotteries(num,array){
        Console.print(PRINT_LOTTEIRES(num))
        array.forEach(element => {
            Console.print(element)
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

    printResult(total, reportObj){
        reportObj = {
            "three" : 0,
            "four" : 0,
            "five" : 0,
            "bonus" : 0,
            "six" : 0
        }
        Console.print(PRINT_RESULT)
        Console.print(PRINT_EACH_RESULT(3,THREE_PRIZE,false,reportObj['three']))
        Console.print(PRINT_EACH_RESULT(4,FOUR_PRIZE,false,reportObj['four']))
        Console.print(PRINT_EACH_RESULT(5,FIVE_PRIZE,false,reportObj['five']))
        Console.print(PRINT_EACH_RESULT(5,FIVE_BONUS_PRIZE,true,reportObj['bonus']))
        Console.print(PRINT_EACH_RESULT(6,SIX_PRIZE,false,reportObj['six']))

    }

}

export default Screen;