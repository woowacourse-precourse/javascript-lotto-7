import {Console} from "@woowacourse/mission-utils"
import parsingWinningNums from "../utils/parser.js";
import OutputView from "./OutputView.js";
import InputValid from "../validations/InputValid.js";
//구입금액, 당첨번호, 보너스 번호
export default class InputView{
    static async readInput(){
        let purchaseAmount;
        let winningNums;
        let bonusNum;
        let tickets;

        while(true){
            try {
                purchaseAmount = await Console.readLineAsync(
                "구입금액을 입력해 주세요.\n"
                );
                purchaseAmount = Number(purchaseAmount);
                InputValid.isThousandUnit(purchaseAmount);
                tickets = OutputView.printRandomLottos(purchaseAmount);
                break;
            } catch (error) {
                Console.print("[ERROR] 구매금액을 1000원 단위로 입력해주세요.")
            }
        }
        while(true){
            try{
              winningNums = await Console.readLineAsync(
                "\n당첨 번호를 입력해주세요.\n"
              ); //1,2,3,4,5
              winningNums = parsingWinningNums(winningNums)
              InputValid.isNumsInRange(winningNums)
              InputValid.isExtraNums(winningNums)
              InputValid.isDupNums(winningNums)
              break;
            }catch(error){
                Console.print("[ERROR] 당첨번호가 6개가 아니거나, 중복된 당첨 번호가 존재하거나, 범위에 벗어난 값이 존재합니다");
            }
        }
        while(true){
            try{
                bonusNum = await Console.readLineAsync(
                    "\n보너스 번호를 입력해주세요.\n"
                );
                bonusNum=Number(bonusNum)
                InputValid.isBonusNumValid(winningNums,bonusNum)
                InputValid.isBonusNumInRange(bonusNum)
                break;
            }catch(error){
                Console.print("[ERROR] 올바른 당첨번호를 입력해주세요.");
            }
        }
        return {purchaseAmount,tickets,winningNums,bonusNum};
    }
    }
