import { Console, MissionUtils } from "@woowacourse/mission-utils";
import HandleIo from "./HandleIo.js";
import Lotto from "./Lotto.js";

class BuyLotto{

    async run(){
        const getInput = new HandleIo();
        const buyMoney = await getInput.getMoneyInput();
        const randomLotto = [];
        const Count = this.#validate(buyMoney);
        if(!Count) return;
        // if(!Count)return;
        this.#getLotto(Count,randomLotto);

        const numbers = [];
        const getWinner = await getInput.getWinningInput();
        const getBonus = await getInput.getBonusInput();

        numbers.push(getWinner);
        numbers.push(getBonus);
        Console.print(numbers);

        const winnerLotto = new Lotto(numbers);

        this.#checkWinning(randomLotto,getWinner,getBonus);
    };

    #validate(number){
        if(isNaN(number) || number % 1000 !== 0){
            Console.print("[ERROR] : 예외 테스트");
            return false;
        };
        return number / 1000;
    };

    #getLotto(number,randomLotto){
        Console.print(`${number}개를 구매했습니다.`)
        for(let i = 0;i<number;++i){
            randomLotto.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b));
        };
    };

    #checkWinning(randomLotto,winner,bonuns){
        
    }
};

export default BuyLotto;