import LottoNumberGenerator from '../src/services/LottoNumberGenerator.js';
import LottoRepository from '../src/models/LottoRepository.js';
import ERROR_MESSAGES from '../src/constants/errorConstants.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

describe('LottoNumberGenerator 클래스 테스트', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  describe('구매 금액 입력값 검증 테스트', () => {
    test.each([
      {
        description: '구매 금액이 숫자가 아닌 경우',
        input: 'abc',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER,
      },
      {
        description: '구매 금액이 숫자가 아닌 경우',
        input: '1000-',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER,
      },
      {
        description: '구매 금액이 숫자가 아닌 경우',
        input: '100ㅔ0',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_NUMBER,
      },
      {
        description: '구매 금액이 1000원 단위로 나눠지지 않는 경우',
        input: '2100',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND,
      },
      {
        description: '구매 금액이 1000원 단위로 나눠지지 않는 경우',
        input: '-2100',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_IS_NOT_DIVIDE_BY_THOUSAND,
      },
      {
        description: '로또를 한 장도 구매하지 않는 경우',
        input: '0',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO,
      },
      {
        description: '로또를 한 장도 구매하지 않는 경우',
        input: '-2000',
        expectedError: ERROR_MESSAGES.PURCHASE_AMOUNT_MORE_THAN_ZERO,
      },
    ])('$description', ({ input, expectedError }) => {
      expect(() => new LottoNumberGenerator(input)).toThrow(expectedError);
    });

    test('구매금액이 숫자이고 1000원 단위로 나눠지는 경우', () => {
      expect(() => new LottoNumberGenerator('5000')).not.toThrow();
    });
  });

  test('로또 번호 생성과 저장 기능 테스트', () => {
    const repository = new LottoRepository();
    const generator = new LottoNumberGenerator('5000');

    mockRandoms([
      [1, 2, 3, 4, 5, 6],
      [1, 3, 10, 14, 20, 45],
      [3, 10, 11, 22, 44, 45],
      [10, 11, 12, 13, 14, 15],
      [11, 19, 22, 33, 44, 45],
    ]);

    generator.generateLotto(repository);
    const lottoArray = repository.getLottoArray();

    expect(lottoArray).toHaveLength(5);
    expect(lottoArray[0].getLotto()).toEqual([1, 2, 3, 4, 5, 6]);
    expect(lottoArray[1].getLotto()).toEqual([1, 3, 10, 14, 20, 45]);
    expect(lottoArray[2].getLotto()).toEqual([3, 10, 11, 22, 44, 45]);
    expect(lottoArray[3].getLotto()).toEqual([10, 11, 12, 13, 14, 15]);
    expect(lottoArray[4].getLotto()).toEqual([11, 19, 22, 33, 44, 45]);
  });
});
