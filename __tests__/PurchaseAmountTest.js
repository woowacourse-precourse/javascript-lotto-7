import PurchaseAmount from "../src/PurchaseAmount";

describe("구입금액 테스트", () => {
    test("숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount('A');
        }).toThrow("[ERROR] 구입금액은 숫자여야 합니다.");
    });

    test("음수가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(-1000);
        }).toThrow("[ERROR] 구입금액은 음수가 될 수 없습니다.");
    });

    test("실수가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(1000.1);
        }).toThrow("[ERROR] 구입금액은 실수가 될 수 없습니다.");
    });

    test("0이 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(0);
        }).toThrow("[ERROR] 돈을 내지 않으셨어요! 최소 한 장(1000원)부터 구입 가능합니다.");
    });

    test("공백이 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(' ');
        }).toThrow("[ERROR] 돈을 내지 않으셨어요! 최소 한 장(1000원)부터 구입 가능합니다.");
    });

    test("1000보다 작은 숫자가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(500);
        }).toThrow("[ERROR] 돈이 부족해요! 최소 한 장(1000원)부터 구입 가능합니다.");
    });

    test("100000보다 큰 숫자가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(10000000);
        }).toThrow("[ERROR] 한 번에 최대 100개까지만 구입 가능합니다.");
    });

    test("1000으로 나누어 떨어지지 않으면 예외가 발생한다.", () => {
        expect(() => {
            new PurchaseAmount(1234);
        }).toThrow("[ERROR] 거스름돈이 발생했어요! 구입금액은 1000으로 나누어 떨어져야 합니다.");
    });


    test("올바른 구입금액이 입력되면 객체가 정상 생성된다.", () => {
        expect(() => {
            new PurchaseAmount(3000);
        }).not.toThrow();
    });

    test("최대 허용 금액 100000이 입력되면 객체가 정상 생성된다.", () => {
        expect(() => {
            new PurchaseAmount(100000);
        }).not.toThrow();
    });

    test("그 외 다양한 올바른 구입금액이 입력되면 객체가 정상 생성된다.", () => {
        [1000, 5000, 25000, 33000].forEach(amount => {
            expect(() => {
                new PurchaseAmount(amount);
            }).not.toThrow();
        });
    });
});