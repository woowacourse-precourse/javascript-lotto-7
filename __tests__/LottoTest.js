import App from "../src/App";
import Lotto from "../src/Lotto.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.setTimeout(20000);

describe("로또 클래스 테스트", () => {
    beforeAll(() => {
        jest.spyOn(MissionUtils.Console, 'readLine').mockImplementation((prompt, callback) => {
            if (prompt.includes("구입 금액")) callback("8000");
            if (prompt.includes("당첨 번호")) callback("1,2,3,4,5,6");
            if (prompt.includes("보너스 번호")) callback("7");
        });

        jest.spyOn(MissionUtils.Console, 'print').mockImplementation((output) => {
            console.log(output);
        });
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    test("정상적인 로또 게임 진행", async() => {
        const app = new App();
        await app.run(); 
    });
});
