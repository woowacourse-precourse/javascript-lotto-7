import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
// 로또 티켓과 당첨 번호를 생성하는 역할

class LottoMachine {
    generateLotto() {
        const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        
        return numbers;
    }

    generateWinningNumbers(){
        const winningNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
        const bonusNumber = MissionUtils.Random.pickUniqueNumbersInRange(1,45,1)[0];
        return {winningNumbers, bonusNumber};
    }
} 
export default LottoMachine;