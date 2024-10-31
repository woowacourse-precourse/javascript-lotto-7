import { Console } from "@woowacourse/mission-utils";

class HandleIo{
    
    async getMoneyInput(){
        const moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        return Number(moneyInput);
    };
    
    async getWinningInput(){
        const winningInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        return winningInput.split(',').map(Number);
    };

    async getBonusInput(){
        const bonusInput = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        return Number(bonusInput);
    };
};

export default HandleIo;