import { MissionUtils } from "@woowacourse/mission-utils";
import { checkValidation } from "./utils";
import Lotto from "./Lotto";

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

export const getLottoNumber = async () => {
    const inputNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
    const winningNumber = inputNumber.split(',').map((number) => +(number.trim()));
    try {
        const lotto = new Lotto(winningNumber);

        let bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        bonusNumber = +bonusNumber.trim();
        checkValidation(bonusNumber, lotto);
        return [lotto, bonusNumber];
    } catch (error) {
        console.error(error.message);
    }
}