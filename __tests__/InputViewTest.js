import { MissionUtils } from "@woowacourse/mission-utils";
import { inputAmount } from '../src/Views/inputView.js';

const mockQuestions = (input) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
        return Promise.resolve(input);
    });
};  

describe("inputView 테스트", () => {
    test("구매 금액이 1000원 단위가 아니면 예외가 발생한다.", async () => {
        mockQuestions(1300);

        await expect(inputAmount()).rejects.toThrow("[ERROR]");
    });

    test("구매 금액이 1000원 단위일 경우 예외가 발생하지 않는다.", async () => {
        mockQuestions(2000);

        await expect(inputAmount()).resolves.not.toThrow();

    });
});