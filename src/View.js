import { MissionUtils } from "@woowacourse/mission-utils";
import { checkValidation } from "./Validator.js";
import Lotto from "./Lotto.js";

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
    try {
        const inputNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const winningNumber = inputNumber.split(',').map((number) => +(number.trim()));

        new Lotto(winningNumber);

        let lottoArray = winningNumber.sort((a, b) => a - b);

        return lottoArray;
    } catch (error) {
        throw new Error("[ERROR] 정확한 로또 번호를 입력해주세요.");
    }
}

export const getBonusNumber = async(numbers) => {
    let bonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    bonusNumber = +bonusNumber.trim();

    checkValidation(bonusNumber, new Set(numbers));
    return bonusNumber;
}

export const printLottoNumbers = (number, lottoNumbers) => {
    MissionUtils.Console.print(`${number}개를 구매했습니다.`);
    MissionUtils.Console.print(lottoNumbers);
}

export const printResult = async (result) => {
    const prizeTable = {
        3: "5,000",
        4: "50,000",
        5: "1,500,000",
        "5+bonus": "30,000,000",
        6: "2,000,000,000"
    };
    
    MissionUtils.Console.print(`
    당첨 통계
    ---
    `);
    Object.entries(result).forEach(([key, count]) => {
        const prize = prizeTable[key];
        let bonus = '';
        if(key === '5+bonus'){
            key = 5;
            bonus = '보너스 볼 일치'
        }
        MissionUtils.Console.print(`${key}개 일치, ${bonus} (${prize}원) - ${count}개`);
    });

}

