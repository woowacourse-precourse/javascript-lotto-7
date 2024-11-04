import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
    test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
        expect(() => {
            // eslint-disable-next-line no-new
            new Lotto([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow("[ERROR]");
    });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
    test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            // eslint-disable-next-line no-new
            new Lotto([1, 2, 3, 4, 5, 5]);
        }).toThrow("[ERROR]");
    });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
    const checkLottoCreationError = (input, expectedMessage) => {
        expect(() => {
            // eslint-disable-next-line no-new
            new Lotto(input);
        }).toThrow(expectedMessage);
    };

    test.each([
        { input: [1, 2, 3, 4, 5, 46], message: "[ERROR]" },
        { input: [1, 2, 3, 4, 5, 'd'], message: "[ERROR]" },
        { input: [1, 2, 3, 4, 5, -7], message: "[ERROR]" },
    ])(
        "로또 번호에 유효하지 않은 값이 들어오면 예외가 발생한다.",
        ({ input, message }) => {
            checkLottoCreationError(input, message);
        }
    );
});
