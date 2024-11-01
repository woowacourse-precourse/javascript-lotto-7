import Lotto from "../../src/models/Lotto.js";
import LottoError from "../../src/errors/LottoError.js";
import { ERROR_MESSAGE } from "../../src/constants/errorMessages.js";

describe("로또 발행(Lotto) 클래스 테스트", () => {
    test("로또 발행 번호가 1부터 45 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
        const NUMBERS = [1, 2, 3, 4, 5, 46];
        expect(() => {
            new Lotto(NUMBERS);
        }).toThrow(new LottoError(ERROR_MESSAGE.lotto_in_range));
    });

    test("로또 발행 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
        const NUMBERS = [1, 2, 3, 4, 5, 'seven'];
        expect(() => {
            new Lotto(NUMBERS);
        }).toThrow(new LottoError(ERROR_MESSAGE.lotto_in_range));
    });

    test("로또 발행 번호가 음수일 경우 발생한다.", () => {
        const NUMBERS = [1, 2, 3, 4, 5, -20];
        expect(() => {
            new Lotto(NUMBERS);
        }).toThrow(new LottoError(ERROR_MESSAGE.lotto_in_range));
    });

    test("로또 발행 번호가 6개가 아닐 경우 발생한다.", () => {
        const NUMBERS = [20, 21, 22, 23, 24, 25, 26];
        expect(() => {
            new Lotto(NUMBERS);
        }).toThrow(new LottoError(ERROR_MESSAGE.lotto_not_negative));
    });

    test("로또 발행 번호가 중복될 경우 발생한다.", () => {
        const NUMBERS = [10, 15, 20, 25, 30, 10];
        expect(() => {
            new Lotto(NUMBERS);
        }).toThrow(new LottoError(ERROR_MESSAGE.lotto_no_duplicates));
    });
});