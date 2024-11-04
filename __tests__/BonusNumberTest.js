import BonusNumber from "../src/BonusNumber";

describe("보너스 번호 테스트", () => {
    const mockWinningNumbers = [2, 3, 4, 5, 6, 7];

    test("숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new BonusNumber('A', mockWinningNumbers);
        }).toThrow("[ERROR] 숫자를 입력해주세요.");
    });

    test("범위를 벗어난 값이 입력되면 예외가 발생한다.", () => {
        [0, 46].forEach((bonusNumber) => {
            expect(() => {
                new BonusNumber(bonusNumber, mockWinningNumbers);
            }).toThrow("[ERROR] 보너스 번호는 1과 45 사이여야 합니다.");
        });
    });

    test("당첨 번호와 중복된 값이 입력되면 예외가 발생한다.", () => {
        [2, 5].forEach((bonusNumber) => {
            expect(() => {
                new BonusNumber(bonusNumber, mockWinningNumbers);
            }).toThrow("[ERROR] 이미 당첨 번호에 있는 숫자예요! 중복되지 않는 다른 숫자를 입력해주세요.");
        });
    });

    test("실수가 입력되면 예외가 발생한다.", () => {
        [2.1, 3.5].forEach((bonusNumber) => {
            expect(() => {
                new BonusNumber(bonusNumber, mockWinningNumbers);
            }).toThrow("[ERROR] 보너스 번호는 실수가 될 수 없습니다.");
        });
    });


    test("올바른 보너스 번호가 입력되면 객체가 정상 생성된다.", () => {
        expect(() => {
            new BonusNumber(10, mockWinningNumbers);
        }).not.toThrow();
    });

    test("최소 허용 값(1)과 최대 허용 값(45)이 입력되면 객체가 정상 생성된다.", () => {
        [1, 45].forEach((bonusNumber) => {
            expect(() => {
                new BonusNumber(bonusNumber, mockWinningNumbers);
            }).not.toThrow();
        });
    });

    test("그 외 다양한 올바른 보너스 번호가 입력되면 객체가 정상 생성된다.", () => {
        [12, 30, 45].forEach((bonusNumber) => {
            expect(() => {
                new BonusNumber(bonusNumber, mockWinningNumbers);
            }).not.toThrow();
        });
    });

    test("실수지만 소수점 아래가 0인 값이 입력되면 객체가 정상 생성된다.", () => {
        [9.0, 19.00].forEach((bonusNumber) => {
            expect(() => {
                new BonusNumber(bonusNumber, mockWinningNumbers);
            }).not.toThrow();
        });
    });
});