import {Random, Console} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class LottoList{
    numitem;
    lottolist=[];
    constructor(budget) {
        this.numitem = this.buy(budget);
        this.getlotto();
    }

    printbuyotto(){
        Console.print(this.numitem+"개를 구매했습니다.");
        this.lottolist.forEach((lotto)=>{lotto.printnums();});
    }
    getlotto(){
        for(let i=0;i<this.numitem;i++)
            this.lottolist.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }

    makeError(message){
        throw new Error("[Error] : "+ message);
    }

    budgetcheck(budget){
        if(budget%1000!==0)
            this.makeError("금액은 1000원 단위입니다");
    }

    buy(budget){
        this.budgetcheck(budget);
        return budget/1000;
    }

}
export default LottoList;