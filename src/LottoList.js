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
        this.lottolist = [];
    }

    buy(budget){
        this.budgetcheck(budget);
        return budget/1000;
    }
    budgetcheck(budget){
        if(isNaN(budget))
            this.makeError("잘못된 입력입니다");
            
        if(budget%1000!==0)
            this.makeError("금액은 1000원 단위입니다");
    }
    async getlotto(){
        for(let i=0;i<this.numitem;i++)
        {
            let num = await Random.pickUniqueNumbersInRange(1, 45, 6);
            this.lottolist.push(new Lotto(num));
        }
    }

    async setwinnumbers(){
        let numsInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        this.winnubmers = numsInput.split(',');
        this.checkwinnumbers();
    }
    checkwinnumbers(){
        this.winnubmers.forEach(num=>{this.checksinglenum(num);})

        if(this.winnubmers.length!==6)
            this.makeError("당첨번호는 6개 입니다");
        if(this.winnubmers.length!== new Set(this.winnubmers).size)
            this.makeError("당첨번호는 unique 해야합니다");
    }

    async setbonusnumber(){
        this.bonusnubmer = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        this.checkbonusnumbers();
    }
    checkbonusnumbers(){
        if(this.winnubmers.includes(this.bonusnubmer))
            this.makeError("보너스 번호가 중복됩니다.");
        this.checksinglenum(this.bonusnubmer);
    }

    checksinglenum(num){
        if(isNaN(num))
            this.makeError("당첨번호는 숫자입니다.");

        if(num<0 || num>45)
            this.makeError("당첨번호는 1~45 값입니다.");
    }

    printbuylotto(){
        Console.print(this.numitem+"개를 구매했습니다.");
        this.lottolist.forEach((lotto)=>{lotto.printnums();});
    }

    makeError(message){
        Console.print("[ERROR] : "+ message);
        throw new Error("[ERROR] : "+ message);
    }

    printwinner(){
        Console.print("당첨 통계\n" +  "---");
        Console.print("3개 일치 (5,000원) - " + this.winlist[4] + "개");
        Console.print("4개 일치 (50,000원) - " + this.winlist[3] + "개");
        Console.print("5개 일치 (1,500,000원) - " + this.winlist[2] + "개");
        Console.print("5개 일치, 보너스 볼 일치 (30,000,000원) - " + this.winlist[1] + "개");
        Console.print("6개 일치 (2,000,000,000원) - " + this.winlist[0] + "개");
        this.calearningrate();
        Console.print("총 수익률은 " + this.earningrate + "%입니다.");
    }
    calearningrate(){
        let sum = 0;
        sum += 5000 * this.winlist[4];
        sum += 50000 * this.winlist[3];
        sum += 1500000 * this.winlist[2];
        sum += 30000000 * this.winlist[1];
        sum += 2000000000 * this.winlist[0];
        sum = sum/(this.numitem*1000);
        sum = sum*100;
        this.earningrate = Math.round(sum * 100) / 100;
        this.earningrate = this.earningrate.toFixed(1);
    }

    allwincheck(){
        this.lottolist.forEach((lotto)=>{
            let mynum = lotto.getnumbers();
            let res = this.wincheck(mynum);
            this.grading(res[0],res[1]);
        })
    }
    wincheck(mynum){
        let cnt=0;
        let isbonus = false;
        this.winnubmers.forEach((winnum)=>{
            if(mynum.includes(Number(winnum))) cnt++;
        })
        if(mynum.includes(this.bonusnubmer)) isbonus = true;
        return [cnt, isbonus];
    }

    grading(cnt, isbonus){
        if(cnt===3) this.winlist[4]++;
        else if(cnt===4) this.winlist[3]++;
        else if(cnt===5){
            if(isbonus) this.winlist[1]++;
            else this.winlist[2]++;
        }
        else if(cnt===6) this.winlist[0]++;
    }
}
export default LottoList;