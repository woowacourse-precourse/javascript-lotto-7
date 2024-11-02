import AllLotto from "../src/AllLotto";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, 'print');
    logSpy.mockClear();
    return logSpy;
}

describe('AllLotto 클래스 테스트', () => {
    let allLotto;

    beforeEach(() => {
        allLotto = new AllLotto();
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('보너스 번호 입력 시 숫자로 입력하지 않으면 예외 문구가 출력된다.', async () => {
        const logSpy = getLogSpy();

        await allLotto.setWinningLotto([1, 2, 3, 4, 5, 6], 'abc');

        expect(logSpy).toHaveBeenCalledWith("[ERROR] 보너스 번호는 숫자로 입력해야 합니다.");
    });

    test("보너스 번호는 1보다 작거나 45보다 크면 예외 문구가 출력된다.", async () => {
        const logSpy = getLogSpy();

        await allLotto.setWinningLotto([1, 2, 3, 4, 5, 6], -3);

        expect(logSpy).toHaveBeenCalledWith("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
    })
})