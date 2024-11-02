import { PLEASE_INPUT_RIGHT_NUMBER } from "../src/constant";
import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
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

    test.each([
        ["일", 1, 2, 3, 4, 5],
        [0, 1, 2, 3, 4, 5],
    ])(
        "로또 번호가 1 ~ 45사이의 숫자가 아니면 에러가 발생한다.",
        (...value) => {
            expect(() => {
                new Lotto(value);
            }).toThrow(PLEASE_INPUT_RIGHT_NUMBER);
        }
    );

    test("로또 번호를 제대로 반환해야 한다.", () => {
        const value = [1, 2, 3, 4, 5, 6];
        expect(new Lotto(value).numbers).toEqual(value);
    });
});
