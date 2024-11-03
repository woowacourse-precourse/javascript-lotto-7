import ERROR_MESSAGES from '../src/constants/messages/errorMessages.js';
import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('getRandomNumbers 정적 메서드는 lottoGenerator 함수의 호출 결과를 토대로 새로운 Lotto 인스턴스로 반환한다.', () => {
    const lotto = Lotto.getRandomNumbers();

    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.numbers).toHaveLength(6);
    expect(new Set(lotto.numbers).size).toBe(6);

    lotto.numbers.forEach((number) => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    });
  });

  test('getPurchasedLotto 정적 메서드는 숫자를 인자로 숫자만큼의 랜덤 로또가 생성된다.', () => {
    const count = 5;
    const lottos = Lotto.getPurchaesdLotto(count);
    expect(lottos).toHaveLength(count);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.numbers).toHaveLength(6);
    });
  });

  test('converInputToNumbers 정적 메서드는 문자열을 입력하면 ,를 기준으로 분리하여 숫자로 변환한다.', () => {
    const input = '1,2,3,4,5,6';
    const numbers = Lotto.convertInputToNumbers(input);
    expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('로또 번호의 개수가 6개보다 많으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_LENGTH_NOT_RIGHT}`);
  });

  test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_LENGTH_NOT_RIGHT}`);
  });

  test('로또 번호로 숫자 타입이 아닌 값이 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6']);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_TYPE_NOT_NUMBER}`);
  });

  test('로또 번호로 숫자 타입이 아닌 값이 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'abc']);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_TYPE_NOT_NUMBER}`);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_DUPLICATION}`);
  });

  test('로또 번호로 시작과 끝 범위에 해당하지 않는 숫자가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_RANGE_NOT_RIGHT}`);
  });

  test('로또 번호로 시작과 끝 범위에 해당하지 않는 숫자가 존재하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrowError(`${ERROR_MESSAGES.ERROR_PREFIX}${ERROR_MESSAGES.LOTTO_NUMBER_RANGE_NOT_RIGHT}`);
  });
});
