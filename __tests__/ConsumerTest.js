import Consumer from "../src/domain/Consumer.js";
import { jest, test, describe, expect } from "@jest/globals";

describe("Consumer class test", () => {
    const invalidValue = 1203;
    const cash = 3000;
    const consumer = new Consumer(cash);

    test("1000단위가 아닌 금액을 입력받는다.", () => {
        expect(() => {
            new Consumer(invalidValue);
        }).toThrowError("[ERROR] 구입 금액은 1000원 단위로 입력해 주세요.");
    });

    test("금액에 맞는 올바른 로또 개수를 반환해야 한다.", () => {
        const lottoCount = consumer.buyLottoCount();
        expect(lottoCount).toBe(3);
    });
})