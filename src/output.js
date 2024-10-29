import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "./Game.js";

class DisplayOutput {

    displayPaidLotto(number) {
        MissionUtils.Console.print(`${number}개를 구입했습니다.`);
    }

    displayLotto (lotto){

        for (const lottoNumbers of lotto) {
            MissionUtils.Console.print(lottoNumbers);
        }
    }

}

const test = new DisplayOutput();
const game = new Game();

const testLotto = game.generateLotto(8);
test.displayLotto(testLotto);