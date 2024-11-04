import { Console } from "@woowacourse/mission-utils";

class Report{

    prize = 0;
    result = {
        "three" : 0,
        "four" : 0,
        "five" : 0,
        "bonus" : 0,
        "six" : 0
    }

    getProfit(input){
        const percent = (this.prize /input)* 100
        return percent.toFixed(2)   

    }
    
}

export default Report;