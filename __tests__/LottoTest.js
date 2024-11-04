import Lotto from "../src/services/Lotto.js";
import {ERROR_CODE} from "../src/constants/messages.js";

describe("로또 클래스 테스트", () => {

    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow(ERROR_CODE.LOTTO.NOT_SIX);
    });

    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow(ERROR_CODE.LOTTO.OVERLAP);
    });

    test("로또 번호에 1~45 이외의 숫자가 포함되어 있으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([0, 2, 3, 4, 5, 6]);
        }).toThrow(ERROR_CODE.LOTTO.INVALID);

        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 46]);
        }).toThrow(ERROR_CODE.LOTTO.INVALID);
    });

    test("로또 번호에 소수가 포함되면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1.5, 2, 3, 4, 5, 6]);
        }).toThrow(ERROR_CODE.LOTTO.DECIMAL);
    });

    test("로또 번호에 공백이 포함된 경우 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([null, 2, 3, 4, 5, 6]);
        }).toThrow(ERROR_CODE.LOTTO.HAS_SPACE);
    });

    test("로또 번호에 문자가 포함된 경우 예외가 발생한다.", () => {
        expect(() => {
            new Lotto(["a", 2, 3, 4, 5, 6]);
        }).toThrow(ERROR_CODE.LOTTO.NAN);
    });
});
