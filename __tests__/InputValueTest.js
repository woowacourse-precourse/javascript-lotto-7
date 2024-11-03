import { MissionUtils } from "@woowacourse/mission-utils";
import { PriceInputHandler } from "../src/handler/PriceInputHandler.js";
import { inValidMessages } from "../src/constant/message.js";

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input)
  })
}

describe('입력값 validate 테스트', () => {
  const priceArr = ['1000j', 'asdf', '##']
  test.each(priceArr)('입력 받은 금액이 숫자가 아니면 에러를 던진다.', async (price) => {
    mockReadLineAsync(price);
    const priceInputHandler = new PriceInputHandler();
    await expect(priceInputHandler.readPrice()).rejects.toThrow(inValidMessages.NaN);
  })
});