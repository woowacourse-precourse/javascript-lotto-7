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

    printResult(matchCount,profit){
        Console.print(
            "당첨 통계\n" +
            "---\n" +
            "3개 일치 (5,000원) - " + matchCount[3] + "개\n" +
            "4개 일치 (50,000원) - " + matchCount[4] + "개\n" +
            "5개 일치 (1,500,000원) - " + matchCount[5] + "개\n" +
            "5개 일치, 보너스 볼 일치 (30,000,000원) - " + matchCount['bonus'] + "개\n" +
            "6개 일치 (2,000,000,000원) - " + matchCount[6] + "개\n" +
            "총 수익률은 " + profit.toFixed(1) + "%입니다.\n"
        );
    };
};

export default HandleIo;