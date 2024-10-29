import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Game {

    generateLotto (count) {
        const lottos = [];

        for (let i = 0; i < count; i++) {
            const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            lottos.push(lotto);
          }

        return lottos;
    }
}

export default Game;

const test = new Game();
Console.print(test.generateLotto(8));