import Lotto from "../src/Lotto";
import {MissionUtils} from '@woowacourse/mission-utils';
import {validBonus} from "../src/util/Validator.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();

    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        const input = inputs.shift();

        return Promise.resolve(input);
    });
};

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
};

describe("로또 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

    // TODO: 테스트가 통과하도록 프로덕션 코드 구현
    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

    test("입력한 당첨 번호가 없을 경우", () => {
        expect(() => {
            new Lotto([]);
        }).toThrow("[ERROR]");
    });

    test("입력한 보너스 번호가 없을 경우", () => {
        expect(() => {
            validBonus('',[1,2,3,4,5,6]);
        }).toThrow("[ERROR]");
    });
});
