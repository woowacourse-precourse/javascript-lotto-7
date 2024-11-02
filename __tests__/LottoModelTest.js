import LottoModel from '../src/model/LottoModel.js';
import Validator from '../src/validator/Validator.js';

describe('로또 구입 금액 테스트', () => {
  const lottoModel = new LottoModel();

  test.each([
    ['1234', '[ERROR]'],
    ['99999', '[ERROR]'],
    ['0', '[ERROR]'],
  ])('로또 구입 금액에 1,000원 단위로 입력하지 않은 경우 예외가 발생한다.', (first, second) => {
    expect(() => {
      Validator.isMultipleOfThousand(first);
    }).toThrow(`${second}`);
  });

  test.each([
    ['aaaa', '[ERROR]'],
    ['###', '[ERROR]'],
    ['😊😊😊', '[ERROR]'],
  ])('로또 구입 금액에 문자가 들어오면 예외가 발생한다.', (first, second) => {
    expect(() => {
      lottoModel.setBuyLottoCount(first);
      Validator.isCharacter(lottoModel.getBuyLottoCount());
    }).toThrow(`${second}`);
  });

  test('로또 구입 금액에 음수가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      lottoModel.setBuyLottoCount('-1000');
      Validator.isNegative(lottoModel.getBuyLottoCount());
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액에 최대 로또 구입 금액을 넘어서는 금액이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      lottoModel.setBuyLottoCount(Number.MAX_VALUE * 2);
      Validator.isOverMaxNumber(lottoModel.getBuyLottoCount());
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액에 아무 금액도 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      Validator.isSpace('');
    }).toThrow('[ERROR]');
  });
});
