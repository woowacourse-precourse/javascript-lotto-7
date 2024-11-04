import { Console } from "@woowacourse/mission-utils";
import Lottery from "../Lottery/Lottery.js";
import { ERROR_INPUT_MONEY_NAN, ERROR_INPUT_MONEY_THOUSAND } from "../Util/ErrosMessages.js";

class Slot{

    #money = 0;
    #lotterArray = [];
    #purchaseNum = 0;


    constructor(money){
        this.#validateInputMoney(money)
        this.#setPurchseNum(money)
        this.purchaseLottery(this.#purchaseNum)
    }
    getMoney(){
        return this.#money;
    }

    getLotteryArray(){
        return this.#lotterArray
    }
    
    getPurchaseNum(){
        return this.#purchaseNum;
    }


    #setPurchseNum(money){
        this.#purchaseNum =  money/1000;
    }

    purchaseLottery(num){
        for(let i = 0 ; i < num; i++){
            this.#lotterArray.push(new Lottery())
        }
    }
    #validateInputMoney(money){
        this.#validateInteger(money)
        this.#validateThousand(money)
    }

    #validateInteger(money){
        if(isNaN(money)){
            Console.print(ERROR_INPUT_MONEY_NAN)
            throw new Error(ERROR_INPUT_MONEY_NAN)
        }
    }
    #validateThousand(money){
        if(Number(money) % 1000 !== 0){
            Console.print(ERROR_INPUT_MONEY_THOUSAND)
            throw new Error(ERROR_INPUT_MONEY_THOUSAND);
        }
    }

}

export default Slot;