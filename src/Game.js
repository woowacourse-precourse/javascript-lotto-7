import { MissionUtils, Console } from "@woowacourse/mission-utils";
import UserInput from "./Input.js";

class Game {

    generateLotto (count) {
        const lottos = [];

        for (let i = 0; i < count; i++) {
            const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            lottos.push(lotto);
          }

        return lottos;
    }

    splitWinningNumbers (winningNumber) {
        return winningNumber.split(',').map(num => Number(num));
    }

}

export default Game;

const test = new Game();
const userInput = new UserInput(); 
