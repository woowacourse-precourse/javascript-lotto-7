import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../../src/InputView.js';
import App from '../../src/App.js';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() =>
    Promise.resolve(input)
  );
};

describe('로또 구입 금액 입력 테스트', () => {
  const ERROR_CASES = ['1001', '', 'd'];
  test.each(ERROR_CASES)('구입 금액 실패', async (input) => {
    mockQuestions(input);

    await expect(InputView.readMoney()).rejects.toThrow('[ERROR]');
  });

  const SUCCESS_CASES = ['1000', '8000', ' 15000 '];
  test.each(SUCCESS_CASES)('구입 금액 성공', async (input) => {
    mockQuestions(input);

    expect(await InputView.readMoney()).toEqual(input.trim());
  });
});

describe('당첨 번호 입력 테스트', () => {
  const ERROR_CASES = [
    '1',
    '1,2,3,4, ,6',
    '1,2,3,4,5,6,7',
    '1,2,3,4,5,d',
    '1,2,3,4,5,78',
    '1,1,2,3,4,5',
  ];
  test.each(ERROR_CASES)('당첨 번호 입력 실패', async (input) => {
    mockQuestions(input);

    await expect(InputView.readWinningNumber()).rejects.toThrow('[ERROR]');
  });

  const SUCCESS_CASES = ['1,2,3,4,5,6', '1,7,8,23,45,2'];
  test.each(SUCCESS_CASES)('당첨 번호 입력 성공', async (input) => {
    mockQuestions(input);

    const winningNumbers = input.split(',').map((number) => number.trim());

    expect(await InputView.readWinningNumber()).toEqual(winningNumbers);
  });
});

describe('보너스 번호 입력 테스트', () => {
  const app = new App();
  app.winNumbers = ['1', '2', '3', '4', '5', '6'];

  const ERROR_CASES = ['1', '', '76', 'd'];
  test.each(ERROR_CASES)('보너스 번호 실패', async (input) => {
    mockQuestions(input);

    await expect(InputView.readBonusNumber(app.winNumbers)).rejects.toThrow(
      '[ERROR]'
    );
  });

  const SUCCESS_CASES = ['7', '21', '10'];
  test.each(SUCCESS_CASES)('보너스 번호 성공', async (input) => {
    mockQuestions(input);

    expect(await InputView.readBonusNumber(app.winNumbers)).toEqual(input);
  });
});
