import {Random, Console} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoList{
    numitem;
    lottolist=[];
    winnubmers=[];
    bonusnubmer = [];
    winlist = [0,0,0,0,0];
    earningrate = 0;
    constructor(budget) {
        this.numitem = this.buy(budget);
        this.getlotto();
    }

    buy(budget){
        this.budgetcheck(budget);
        return budget/1000;
    }
    budgetcheck(budget){
        if(budget%1000!==0)
            this.makeError("금액은 1000원 단위입니다");
    }
    getlotto(){
        for(let i=0;i<this.numitem;i++)
            this.lottolist.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
    }
    async setwinnumbers(){
        let numsInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        this.winnubmers = numsInput.split(',');
        this.bonusnubmer = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        this.checkwinnumbers()
    }
    checkwinnumbers(){
        this.winnubmers.forEach(num=>{this.checksinglenum(num);})
        this.checksinglenum(this.bonusnubmer);
        if(this.winnubmers.length!==6)
            this.makeError("당첨번호는 6개 입니다");
        if(this.winnubmers.includes(this.bonusnubmer))
            this.makeError("보너스 번호가 중복됩니다.");
        if(this.winnubmers.length!== new Set(this.winnubmers).size)
            this.makeError("당첨번호는 unique 해야합니다");
    }
    checksinglenum(num){
        if(isNaN(num))
            this.makeError("당첨번호는 숫자입니다.");

        if(num<0 || num>45)
            this.makeError("당첨번호는 1~45 값입니다.");
    }
    printbuyotto(){
        Console.print(this.numitem+"개를 구매했습니다.");
        this.lottolist.forEach((lotto)=>{lotto.printnums();});
    }
    makeError(message){
        throw new Error("[ERROR] : "+ message);
    }

    allwincheck(){
        this.lottolist.forEach((lotto)=>{
            let res = lotto.wincheck(this.winnubmers,this.bonusnubmer);
            this.grading(res[0],res[1]);
        })
    }
    grading(cnt, isbonus){
        if(cnt==3) this.winlist[4]++;
        else if(cnt==4) this.winlist[3]++;
        else if(cnt==5){
            if(isbonus) this.winlist[1]++;
            else this.winlist[2]++;
        }
        else if(cnt==6) this.winlist[0]++;
    }
    printwinner(){
        Console.print("당첨 통계\n" +  "---");
        Console.print("3개 일치 (5,000원) - " + this.winlist[4] + "개");
        Console.print("4개 일치 (50,000원) - " + this.winlist[3] + "개");
        Console.print("5개 일치 (1,500,000원) - " + this.winlist[2] + "개");
        Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.winlist[1] + "개");
        Console.print("6개 일치 (2,000,000,000원) - " + this.winlist[0] + "개");
        Console.print("총 수익률은 " + this.earningrate + "%입니다.");
    }
}
export default LottoList;