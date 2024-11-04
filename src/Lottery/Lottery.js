import {MissionUtils} from "@woowacourse/mission-utils"
import { resultToStr } from "../Util/Switch.js";

class Lottery{
    #numbers = []
    constructor(){
        this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        this.#sortNumbers()
    }

    getNumbers(){
        return this.#numbers;
    }

    #sortNumbers(){
        this.#numbers.sort((a,b) =>{
            return a-b;
        })
    }

    getResult(array,bonus){
        const matchedArray = this.#matchWinNumbers(array)
        const matchedResult = this.#calculateResult(matchedArray)
        if(matchedResult === 5 && this.#matchBonus(array,bonus)){
            return "bonus"
        }
        if(matchedResult >= 3 && matchedResult <= 6){
            return resultToStr(matchedResult)
        }
        return "nothing"
        
    }
    #matchWinNumbers(array) {
        return array.filter(element => this.#numbers.includes(element));
    }

    #calculateResult(array) {
        return array.length
    }

    #matchBonus(array,bonus){
        if(array.indexOf(bonus) === -1){
            return true
        }
        return false
    }
    
}

export default Lottery