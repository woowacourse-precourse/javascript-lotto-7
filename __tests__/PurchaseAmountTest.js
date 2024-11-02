import { MissionUtils } from "@woowacourse/mission-utils";
import PurchaseAmount from "../src/PurchaseAmount";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    return logSpy;
}

describe("구입 금액 클래스 테스트", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("구입 금액을 숫자로 입력하지 않으면 예외 문구가 출력된다.", () => {
        const logSpy = getLogSpy();

        new PurchaseAmount(',,,');

        expect(logSpy).toHaveBeenCalledWith('[ERROR] 구입금액을 숫자로 입력해주세요');
    });

    test("구입 금액을 0보다 크게 입력하지 않으면 예외 문구가 출력된다.", () => {
        const logSpy = getLogSpy();

        new PurchaseAmount(-100);

        expect(logSpy).toHaveBeenCalledWith('[ERROR] 구입금액은 0보다 커야 합니다.');
    })

    test("구입 금액을 1000원 단위로 입력하지 않으면 예외 문구가 출력된다.", () => {
        const logSpy = getLogSpy();

        new PurchaseAmount(100);

        expect(logSpy).toHaveBeenCalledWith('[ERROR] 구입금액은 1000원 단위로 입력해야 합니다.');
    })
});
