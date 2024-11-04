import { MissionUtils } from "@woowacourse/mission-utils";
import { PriceInputHandler } from "../src/handler/PriceInputHandler.js";
import { LottoNumberInputHandler } from "../src/handler/LottoNumberInputHandler.js";
import { inValidMessages } from "../src/constant/message.js";

const mockReadLineAsync = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input)
  })
}

describe('PriceInputHandler Class 테스트', () => {
  const priceArr = ['1000j', 'asdf', '##'];
  test.each(priceArr)('입력 받은 금액이 숫자가 아니면 에러를 던진다.', async (price) => {
    mockReadLineAsync(price);
    const priceInputHandler = new PriceInputHandler();

    await expect(priceInputHandler.readPrice()).rejects.toThrow(inValidMessages.NaN);
  })
});


describe('LottoNumberInputHandler Class 테스트', () => {
  const winningNumbersArr = ['a,b,c,d,e,f', '!,@,3,$,^,7'];
  const lottoNumberInputHandler = new LottoNumberInputHandler();

  test.each(winningNumbersArr)('입력 받은 당첨 번호 중 숫자가 아닌 값이 존재하면 에러를 던진다.', async (winningNumbers) => {
    mockReadLineAsync(winningNumbers);

    await expect(lottoNumberInputHandler.readWinningNumbers()).rejects.toThrow(inValidMessages.NaN);
  })

  const bonusNumberArr = ['a', '!', '1000j'];

  test.each(bonusNumberArr)('입력 받은 보너스 번호가 숫자가 아니면 에러를 던진다.', (bonusNumber) => {
    mockReadLineAsync(bonusNumber);

    expect(lottoNumberInputHandler.readBonusNumber()).rejects.toThrow(inValidMessages.NaN);
  })
});
