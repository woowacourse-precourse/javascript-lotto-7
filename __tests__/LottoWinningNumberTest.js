import { Console } from '@woowacourse/mission-utils';
import { getWinningLottoNumbersAndBonusNumber } from '../src/lotto/LottoWinningNumberReader.js';
import { ERROR_MESSAGE } from '../src/lotto/constants/Message.js';
import { config } from '../src/config.js';


const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input)
  });
}

const { NUMBER_COUNT, NUMBER_RANGE } = config.lottoConfig;

describe('로또 당첨 번호 입력 테스트', () => {
  test.each([
    {
      name: '입력 받은 당첨번호가 빈 값이면 에러를 발생시킨다.',
      input: '',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_EMPTY_VALUE;
      }
    },
    {
      name: '입력 받은 당첨번호가 null로 전달되면 에러를 발생시킨다.',
      input: null,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_NULL_VALUE;
      }
    },
    {
      name: '입력 받은 당첨번호가 undefined 전달되면 에러를 발생시킨다.',
      input: undefined,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_UNDEFINED_VALUE;
      }
    },
    {
      name: '입력 받은 당첨번호 값에 빈 값이 포함되어 있다면 에러를 발생시킨다.',
      input: '1, 2,,4, 5, 6 ',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_EMPTY_VALUE;
      }
    },
    {
      name: '입력 받은 당첨번호 값에 문자가 포함되어 있다면 에러를 발생시킨다.',
      input: '1,2,a,4,5,6',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC('a');
      }
    },
    {
      name: '입력 받은 당첨번호 값에 특수 문자가 포함되어 있다면 에러를 발생시킨다.',
      input: '1,2,@@,4,5,6',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC('@@');
      }
    },
    {
      name: `입력 받은 당첨번호의 개수가 로또 번호 개수(${NUMBER_COUNT}개)보다 작으면 에러를 발생시킨다.`,
      input: '1,2,3',
      get error() {
        const inputNumberCount = this.input.split(',').length;
        return ERROR_MESSAGE.ERROR_INCORRECT_LOTTO_NUMBER_COUNT(inputNumberCount, NUMBER_COUNT);
      },
    },
    {
      name: `입력 받은 당첨번호의 개수가 로또 번호 개수(${NUMBER_COUNT}개)보다 많으면 에러를 발생시킨다.`,
      input: '1,2,3,4,5,6,7',
      get error() {
        const inputNumberCount = this.input.split(',').length;
        return ERROR_MESSAGE.ERROR_INCORRECT_LOTTO_NUMBER_COUNT(inputNumberCount, NUMBER_COUNT);
      },
    },
    {
      name: `입력 받은 당첨번호 중 로또 번호 범위(${NUMBER_RANGE.START_NUMBER}-${NUMBER_RANGE.END_NUMBER}를 초과하는 번호가 있으면 에러를 발생시킨다.`,
      input: `1, 2, 3, ${NUMBER_RANGE.END_NUMBER + 1}, 5, 6`,
      get error() {
        const { START_NUMBER, END_NUMBER } = NUMBER_RANGE;
        return ERROR_MESSAGE.ERROR_NUMBER_OUT_OF_RANGE(END_NUMBER + 1, START_NUMBER, END_NUMBER);
      }
    },
    {
      name: `입력 받은 당첨번호 중 로또 번호 범위(${NUMBER_RANGE.START_NUMBER}-${NUMBER_RANGE.END_NUMBER}에 미달되는 번호가 있으면 에러를 발생시킨다.`,
      input: `1, 2, 3, ${NUMBER_RANGE.START_NUMBER - 1}, 5, 6`,
      get error() {
        const { START_NUMBER, END_NUMBER } = NUMBER_RANGE;
        return ERROR_MESSAGE.ERROR_NUMBER_OUT_OF_RANGE(START_NUMBER - 1, START_NUMBER, END_NUMBER);
      }
    },
    {
      name: '입력 받은 당첨번호 중 중복되는 번호가 있으면 에러를 발생시킨다.',
      input: '1,1,2,3,4,5',
      get error() {
        return ERROR_MESSAGE.ERROR_DUPLICATE_NUMBER;
      }
    }
  ])(`$name`, async ({ input, error }) => {
    mockQuestions([input, input, input, input]);

    await expect(getWinningLottoNumbersAndBonusNumber()).rejects.toThrow(error);
  });
});

describe('로또 보너스 번호 입력 테스트', () => {
  test.each([
    {
      name: '입력 받은 보너스 번호가 빈 값이면 에러를 발생시킨다.',
      input: '',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_EMPTY_VALUE;
      }
    },
    {
      name: '입력 받은 보너스 번호가 null로 전달되면 에러를 발생시킨다.',
      input: null,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_NULL_VALUE;
      }
    },
    {
      name: '입력 받은 보너스 번호가 undefined 전달되면 에러를 발생시킨다.',
      input: undefined,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_UNDEFINED_VALUE;
      }
    },
    {
      name: '입력 받은 보너스 번호에 특수문자가 포함되면 에러를 발생시킨다.',
      input: '@!',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC(this.input);
      }
    },
    {
      name: '입력 받은 보너스 번호에 문자가 포함되면 에러를 발생시킨다.',
      input: 'ab',
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ONLY_NUMERIC(this.input);
      }
    },
    {
      name: `입력 받은 보너스 번호가 로또 번호 범위(${NUMBER_RANGE.START_NUMBER}-${NUMBER_RANGE.END_NUMBER}를 초과하면 에러를 발생시킨다.`,
      input: NUMBER_RANGE.END_NUMBER + 1,
      get error() {
        const { START_NUMBER, END_NUMBER } = NUMBER_RANGE;
        return ERROR_MESSAGE.ERROR_NUMBER_OUT_OF_RANGE(END_NUMBER + 1, START_NUMBER, END_NUMBER);
      }
    },
    {
      name: `입력 받은 보너스 번호가 0이면 에러를 발생시킨다.`,
      input: 0,
      get error() {
        return ERROR_MESSAGE.ERROR_INPUT_ZERO_VALUE;
      }
    },
    {
      name: '입력 받은 보너스 번호가 당첨 번호와 중복되면 에러가 발생한다.',
      input: '4',
      get error() {
        return ERROR_MESSAGE.ERROR_DUPLICATE_NUMBER;
      }
    }
  ])(`$name`, async ({ input, error }) => {
    mockQuestions(['1,2,3,4,5,6', input, input, input, input]);

    await expect(getWinningLottoNumbersAndBonusNumber()).rejects.toThrow(error);
  })
});