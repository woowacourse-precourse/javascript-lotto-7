import InputView from "../views/InputView.js"
import initDict from "../utils/init.js";
import InputValid from "../validations/InputValid.js";


async function helper(){
    const readInput = await InputView.readInput()
    const purchaseAmount=Number(readInput.purchaseAmount)

    const tickets =readInput.tickets
    const winningNums = readInput.winningNums;
    const bonusNum = readInput.bonusNum;

    const rankingResult = {}; //딕셔너리
    initDict(rankingResult);
    return {purchaseAmount,tickets,winningNums,bonusNum,rankingResult}
}


// function validTest(winningNums,bonusNum,purchaseAmount){
//     InputValid.isThousandUnit(purchaseAmount)
//     InputValid.isExtraNums(winningNums)
//     InputValid.isDupNums(winningNums)
//     InputValid.isBonusNumInNums(winningNums,bonusNum)
// }


export default helper