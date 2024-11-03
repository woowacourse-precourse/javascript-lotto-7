import Lotto from "../src/Lotto";
import {MissionUtils} from "@woowacourse/mission-utils";
import {lottoUtils} from "../src/utils/lotto.utils.js";
import {ERROR_CODE, LOTTO} from "../src/constants/constants.js";

const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
};

const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe("로또 클래스 테스트", () => {
    test("예외 테스트 : 로또 번호의 개수가 6개가 넘어가는 경우", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow(ERROR_CODE.LOTTO_SIZE_OUT_OF_RANGE(LOTTO.SIZE));
    });

    test("예외 테스트 : 로또 번호의 개수가 6개 이하인 경우", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5]);
        }).toThrow(ERROR_CODE.LOTTO_SIZE_OUT_OF_RANGE(LOTTO.SIZE));
    });

    test("예외 테스트 : 로또 번호 중복이 있는 경우", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow(ERROR_CODE.LOTTO_NUMBER_DUPLICATE);
    });

    test("정상 케이스 : 로또 오름차순 정렬 후 출력", () => {
        const logSpy = getLogSpy();

        const RANDOM_NUMBERS_TO_END = [7, 1, 43, 24, 35, 6];
        mockRandoms([RANDOM_NUMBERS_TO_END]);

        const log = [1, 6, 7, 24, 35, 43]

        const lottos = lottoUtils.generateNLottos(1)
        lottos.forEach(lotto => {
            lotto.print()
            expect(logSpy).toHaveBeenCalledWith(log);
        })

    })

});
