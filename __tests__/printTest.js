import { jest, describe, expect, test, beforeEach } from "@jest/globals";
import {printGuideBuyLotto, printAllLotto, printRateOfReturn} from "../src/utils/outputView.js";
import Lotto from "../src/Lotto.js";
import { Console } from "@woowacourse/mission-utils";

describe("출력 테스트", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("구매한 로또 개수를 출력해야 한다.", () => {
        const printSpy = jest.spyOn(Console, "print");

        const count = 3;

        printGuideBuyLotto(count);

        expect(printSpy).toHaveBeenCalledWith(`${count}개를 구매했습니다.`);
    });

    test("로또 번호들을 출력해야 한다.", () => {

        const printSpy = jest.spyOn(Console, "print");
        const lottos = [
            new Lotto([1, 2, 3, 4, 5, 6]),
            new Lotto([2, 5, 6, 8, 12, 25]),
            new Lotto([12, 21, 24, 32, 35, 42])
        ];

        printAllLotto(lottos);

        expect(printSpy).toHaveBeenCalledTimes(3);
        expect(printSpy).toHaveBeenNthCalledWith(1, "[1, 2, 3, 4, 5, 6]");
        expect(printSpy).toHaveBeenNthCalledWith(2, "[2, 5, 6, 8, 12, 25]");
        expect(printSpy).toHaveBeenNthCalledWith(3, "[12, 21, 24, 32, 35, 42]");
    });

    test("수익률을 소수점 둘째 자리에서 반올림 하여 출력해야 한다.", () => {

        const printSpy = jest.spyOn(Console, "print");
        const rateOfReturn = 22.5;

        printRateOfReturn(rateOfReturn);

        expect(printSpy).toHaveBeenCalledWith("총 수익률은 22.5% 입니다.");
    });
});