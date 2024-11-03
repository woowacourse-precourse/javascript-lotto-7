import Lotto from "../src/Lotto";

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

    // TODO: 추가 기능 구현에 따른 테스트 코드 작성

    test("로또 번호의 개수가 6개보다 적으면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5]);
        }).toThrowError("[ERROR] 로또 번호는 6개여야 합니다.");
    });

    test("로또 번호로 숫자 타입이 아닌 값이 존재하면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto(["a", 2, 3, 4, 5, 6]);
        }).toThrowError("[ERROR] 로또 번호는 숫자만 가능합니다.");
    });

    test("로또 번호로 범위내에 해당하지 않는 숫자가 존재하면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([1, 2, 3, 4, 5, 46]);
        }).toThrowError("[ERROR] 로또 번호의 숫자 범위는 1이상 45이하여야 합니다.");
    });

    test("로또 번호로 범위내에 해당하지 않는 숫자가 존재하면 예외가 발생한다.", () => {
        expect(() => {
            new Lotto([0, 1, 2, 3, 4, 5]);
        }).toThrowError("[ERROR] 로또 번호의 숫자 범위는 1이상 45이하여야 합니다.");
    });
});
