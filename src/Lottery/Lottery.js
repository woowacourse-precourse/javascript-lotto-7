import {MissionUtils} from "@woowacourse/mission-utils"

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
    
}

export default Lottery