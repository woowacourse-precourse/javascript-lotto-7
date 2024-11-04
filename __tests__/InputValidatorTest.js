import InputValidator from "../src/utils/InputValidator";

describe('입력 값 유효성 테스트', () => { 
    test("구입 금액이 1000원 단위가 아닌 경우 예외 처리", () => {
        expect(() => {
            InputValidator.PurchaseAmount("1500");
        }).toThrow("[ERROR] 구입 금액이 1000 단위로 나누어 떨어지지 않습니다.");
    });
    
    test("당첨 번호가 범위를 벗어날 때 예외 처리", () => {
        expect(() => {
            InputValidator.WinningNumbers("1,2,3,4,5,46");
        }).toThrow("[ERROR]");
    });
    
    test("당첨 번호가 6개가 아닐 때 예외 처리", () => {
        expect(() => {
            InputValidator.WinningNumbers("1,2,3,4,5");
        }).toThrow("[ERROR]");
    });
    
    test("당첨 번호에 중복된 숫자가 있을 때 예외 처리", () => {
        expect(() => {
            InputValidator.WinningNumbers("1,2,3,4,5,5");
        }).toThrow("[ERROR]");
    });
    
    test("보너스 번호가 1개가 아닐 때 예외 처리", () => {
        expect(() => {
            InputValidator.bonusNumber("7,8", [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 보너스 번호를 1개 입력해야 합니다.");
    });
    
    test("보너스 번호가 당첨 번호와 중복될 때 예외 처리", () => {
        expect(() => {
            InputValidator.bonusNumber("5", [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 당첨 번호와 중복된 숫자를 입력했습니다.");
    });
    
    test("보너스 번호가 범위를 벗어날 때 예외 처리", () => {
        expect(() => {
            InputValidator.bonusNumber("50", [1, 2, 3, 4, 5, 6]);
        }).toThrow("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    });
});
