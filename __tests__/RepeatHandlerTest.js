import { RepeatHandler } from "../src/handler/RepeatHandler.js";

describe('RepeatHandler Class 테스트', () => {
  test('에러가 발생하면 해당 함수를 다시 실행한다.', async () => {
    const repeatHandler = new RepeatHandler();
    const func = jest.fn()
      .mockImplementationOnce(() => Promise.reject(new Error("Error 1")))
      .mockImplementationOnce(() => Promise.reject(new Error("Error 2")))
      .mockImplementationOnce(() => {
      });
    await repeatHandler.repeatUntilSuccess(func);
    await expect(func).toHaveBeenCalledTimes(3);
  })
})
