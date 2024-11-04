import {MissionUtils} from "@woowacourse/mission-utils"

class Lottery{
    #numbers = []
    constructor(){
        this.#numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    getNumbers(){
        return this.#numbers;
    }
    
}

export default Lottery