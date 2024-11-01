import { Console } from "@woowacourse/mission-utils";

function compareLotto(ticket,winningNums){
    const intersection= ticket.filter(num => winningNums.includes(num));//교집합
    const difference= ticket.filter(num=>!winningNums.includes(num));
    // Console.print('\n')
    // Console.print(intersection.length)
    return {
        winnings: intersection.length,
        difference
    }
}
export default compareLotto