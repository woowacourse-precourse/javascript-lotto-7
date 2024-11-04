import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_INFO, DISPLAY_MESSAGE } from "../config/constants.js";

class DisplayOutput {

    displayPaidLotto(number) {
        MissionUtils.Console.print(`${number}${DISPLAY_MESSAGE.PURCHASE_LOTTO_MESSAGE}`);
    }

    displayLotto (lottoPackage){

        for (const lotto of lottoPackage) {
            MissionUtils.Console.print( `[${lotto.getLottoNumbers().join(', ')}]`);
        }
        MissionUtils.Console.print("\n");
    }

    #changeNumberStyle (number){
        return number.toLocaleString();
    }

    displayLottoResult (lottoResult){
        /**
         * 로또 결과 형식:
         * lottoResult = [[7등수, 6등수, 5등수, 4등수, 3등수, 2등수, 1등수], [보너스 당첨자 수]]
         * @param {Array<Array<number>>} lottoResult - 2차원 배열
        */

        const prizeKeys = [ 'PRIZE_THREE_NUMBER_MATCHES', 'PRIZE_FOUR_NUMBER_MATCHES', 'PRIZE_FIVE_NUMBER_MATCHES',
            'PRIZE_FIVE_NUMBER_BONUS_MATCHES', 'PRIZE_SIX_NUMBER_MATCHES'
        ];
    
        MissionUtils.Console.print(DISPLAY_MESSAGE.RESULT_MESSAGE);
        
        // 일반 등수 (5등~ 2등) 발표
        for (let i = 0; i < 3; i++) {
            MissionUtils.Console.print(`${i + 3}개 일치 (${this.#changeNumberStyle(LOTTO_INFO.PRIZE[prizeKeys[i]])}원) - ${lottoResult[0][i + 3]}개`);
        }
    
        // 보너스 당첨자 발표(5개일치 + 보너스번호) 및 1등 발표 6개 일치
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (${this.#changeNumberStyle(LOTTO_INFO.BONUS_PRIZE.PRIZE_FIVE_NUMBER_BONUS_MATCHES)}원) - ${lottoResult[1][0]}개`);
        MissionUtils.Console.print(`6개 일치 (${this.#changeNumberStyle(LOTTO_INFO.PRIZE.PRIZE_SIX_NUMBER_MATCHES)}원) - ${lottoResult[0][6]}개`);

    }

    displayProfit (profit) {
        MissionUtils.Console.print(`총 수익률은 ${this.#changeNumberStyle(profit)}%입니다.`);

    }

}

export default DisplayOutput;