import { Console, MissionUtils } from "@woowacourse/mission-utils";
import HandleIo from "./HandleIo.js";
import Lotto from "./Lotto.js";

class BuyLotto{
        constructor(){
            this.io = new HandleIo();
        };
    
        async run(){
        const buyMoney = await this.io.getMoneyInput();
        const randomLotto = [];
        const Count = this.#validate(buyMoney);
        if(!Count) return;
        this.#getLotto(Count,randomLotto);

        const numbers = [];
        const getWinner = await this.io.getWinningInput();
        const getBonus = await this.io.getBonusInput();

        numbers.push(getWinner);
        numbers.push(getBonus);

        new Lotto(numbers);

        this.#checkWinning(randomLotto,getWinner,getBonus);
    };

    #validate(number){
        return this.#checkThousand(number);
    };

    #checkThousand(number){
        const LIMIT = 100000;
        if(isNaN(number) || number % 1000 !== 0){
            Console.print("[ERROR] : 예외 테스트");
            return false;
        };
        if(number > LIMIT){
            Console.print("[ERROR] : 구입 금액이 10만원을 넘을 수 없습니다.");
            return false;
        };
        return number / 1000;
    };

    #getLotto(number, randomLotto) {
        Console.print(`${number}개를 구매했습니다.`);
        for (let i = 0; i < number; ++i) {
            const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
            randomLotto.push(lottoNumbers);
            Console.print(`[${lottoNumbers.join(", ")}]`);
        };
    };

    #checkWinning(randomLotto,winner,bonuns){
        const reulsts = randomLotto.map((lotto) => {
            let isBonus;
            const match = lotto.filter((num) => winner.includes(num)).length;

            if(match === 5){
                isBonus = lotto.includes(bonuns);
            }
            return{match,isBonus};
        });
        this.#checkResult(reulsts,randomLotto);
    };

    #checkResult(result,randomLotto){
        
        const matchCount = {
            3:0,
            4:0,
            5:0,
            bonus:0,
            6:0
        };

        result.forEach(({ match, isBonus }) => {
            if (match === 3) {
                matchCount[3]+=1;
            } else if (match === 4) {
                matchCount[4]+=1;
            } else if (match === 5) {
                matchCount[5]+=1;
                if (isBonus) {
                    matchCount.bonus +=1 ; 
                }
            } else if (match === 6) {matchCount[6]+=1;}
        });

        const profit = this.#Profit(matchCount,randomLotto);

        this.io.printResult(matchCount,profit);
    };

    #Profit(matchCount,randomLotto){

        const purchase = randomLotto.length * 1000;
        
        const winningMoney = {
            3: 5000,
            4: 50000,
            5: 1500000,
            bonus: 30000000,
            6: 2000000000
        };

        const getMoney = 
        matchCount[3] * winningMoney[3] +
        matchCount[4] * winningMoney[4] +
        matchCount[5] * winningMoney[5] +
        matchCount.bonus * winningMoney.bonus +
        matchCount[6] * winningMoney[6];

        return (getMoney / purchase) * 100;
    };
};

export default BuyLotto;