import Consumer from "../src/domain/Consumer.js";
import { errorMessage } from "../src/constant/errorMessage.js";
import { jest, test, describe, expect } from "@jest/globals";

jest.mock("../src/constant/errorMessage.js", () => ({
    errorMessage: {
        inputZeroCashValue: "[ERROR] 로또 구매를 해주세요.",
        inputCashInvalidValue: "[ERROR] 금액은 1,000원 단위로만 가능합니다."
    }
}));

describe("Consumer class test", () => {

    test("인스턴스를 유효한 금액을 파라미터로 생성해야 한다.", () => {
        expect(() => new Consumer(1000)).not.toThrow();
        const consumer = new Consumer(1000);
        expect(consumer.getPrice()).toBe(1000);
    });

    test("금액에 맞는 올바른 로또 개수를 반환해야 한다.", () => {
        const cash = 4000;
        const consumer = new Consumer(cash);
        const lottoCount = consumer.buyLottoCount();

        expect(lottoCount).toBe(4);
    });
});

describe('validate', () => {

    test("1000단위를 입력 할 경우는 에러를 반환하지 않아야 한다.", () => {
        const validPrices = [1000, 2000, 3000, 10000];

        validPrices.forEach(price => {
            expect(() => new Consumer(price)).not.toThrow();
        });
    });

    test("0원을 입력 받을 경우 로또 구매를 해야 한다.", () => {
        expect(() => {
            const consumer = new Consumer(0);
        }).toThrow("[ERROR] 로또 구매를 해주세요.");
    });

    test("1000단위가 아닌 금액을 입력받았을 경우 에러를 반환해야 한다.", () => {
        const invalidPrices = [1500, 2300, 999, 1001];

        invalidPrices.forEach(price => {
            expect(() => {
                const consumer = new Consumer(price);
            }).toThrow("[ERROR] 금액은 1,000원 단위로만 가능합니다.");
        });
    });
});