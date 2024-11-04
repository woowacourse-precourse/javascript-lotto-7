import { MissionUtils } from "@woowacourse/mission-utils";

export const getMoney = async () => {
    const money = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요\n");
    if(isNaN(money.trim())){
        throw new Error("[ERROR] 구입금액을 숫자로 입력해 주세요.");
    }

    if(+money < 1000){
        throw new Error("[ERROR] 1000원부터 구매가 가능합니다.");
    }

    if(money%1000 !== 0){
        throw new Error("[ERROR] 1000원 단위로 구매가 가능합니다.");
    }
    
    return money/1000;
}