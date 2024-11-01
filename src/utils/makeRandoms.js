import {MissionUtils} from "@woowacourse/mission-utils"

export default function makeRandoms(){
    const ticket = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6)
    
    return ticket.sort((a,b)=>a-b)
}