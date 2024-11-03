import LottoModel from '../src/model/LottoModel.js';
import PickLottoNumberValidator from '../src/validator/PickLottoNumberValidator.js';
import BuyLottoCountValidator from './../src/validator/BuyLottoCountValidator';

describe('로또 구입 금액 테스트', () => {
  const lottoModel = new LottoModel();

  test.each([
    ['1234', '[ERROR]'],
    ['99999', '[ERROR]'],
    ['0', '[ERROR]'],
  ])('로또 구입 금액에 1,000원 단위로 입력하지 않은 경우 예외가 발생한다.', (first, second) => {
    expect(() => {
      BuyLottoCountValidator.isMultipleOfThousand(first);
    }).toThrow(`${second}`);
  });

  test.each([
    ['aaaa', '[ERROR]'],
    ['###', '[ERROR]'],
    ['😊😊😊', '[ERROR]'],
  ])('로또 구입 금액에 문자가 들어오면 예외가 발생한다.', (first, second) => {
    expect(() => {
      lottoModel.setBuyLottoCount(first);
      BuyLottoCountValidator.isCharacter(lottoModel.getBuyLottoCount());
    }).toThrow(`${second}`);
  });

  test('로또 구입 금액에 음수가 들어오면 예외가 발생한다.', () => {
    expect(() => {
      lottoModel.setBuyLottoCount('-1000');
      BuyLottoCountValidator.isNegative(lottoModel.getBuyLottoCount());
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액에 최대 로또 구입 금액을 넘어서는 금액이 들어오면 예외가 발생한다.', () => {
    expect(() => {
      lottoModel.setBuyLottoCount(Number.MAX_VALUE * 2);
      BuyLottoCountValidator.isOverMaxNumber(lottoModel.getBuyLottoCount());
    }).toThrow('[ERROR]');
  });

  test('로또 구입 금액에 아무 금액도 입력하지 않으면 예외가 발생한다.', () => {
    expect(() => {
      BuyLottoCountValidator.isSpace('');
    }).toThrow('[ERROR]');
  });
});

describe('당첨 번호 테스트', () => {
  const lottoModel = new LottoModel();

  test.each([
    ['1;2;3;4;5;6', '[ERROR]'],
    ['1.2.3.4.5.6', '[ERROR]'],
    ['1,2,3,4,5.6', '[ERROR]'],
  ])('당첨 번호를 쉼표(,) 이외의 문자로 구분하려는 경우 예외가 발생한다.', (first, second) => {
    expect(() => {
      const pickLottoNumberArray = first.split(',');
      lottoModel.setPickLottoNumber(pickLottoNumberArray);
      PickLottoNumberValidator.isAnotherCharacter(pickLottoNumberArray);
    }).toThrow(`${second}`);
  });

  test.each([
    ['-1,2,3,4,5,6', '[ERROR]'],
    ['1,2,3,4,5,46', '[ERROR]'],
  ])('당첨 번호가 로또 번호의 숫자 범위(1~45)를 벗어나는 경우 예외가 발생한다.', (first, second) => {
    expect(() => {
      const pickLottoNumberArray = first.split(',');
      lottoModel.setPickLottoNumber(pickLottoNumberArray);
      PickLottoNumberValidator.isNumberInRange(pickLottoNumberArray);
    }).toThrow(`${second}`);
  });

  test.each([
    ['1,2,3,4,5', '[ERROR]'],
    ['1,2,3,4,5,6,7', '[ERROR]'],
  ])('당첨 번호에 6개의 번호를 입력하지 않는 경우 예외가 발생한다.', (first, second) => {
    expect(() => {
      const pickLottoNumberArray = first.split(',');
      lottoModel.setPickLottoNumber(pickLottoNumberArray);
      PickLottoNumberValidator.isRightCount(pickLottoNumberArray);
    });
  });

  test('중복된 당첨 번호를 입력하는 경우 예외가 발생한다.', () => {
    expect(() => {
      lottoModel.setPickLottoNumber([1, 2, 3, 4, 5, 5]);
      PickLottoNumberValidator.isDuplicatedNumber(lottoModel.getPickLottoNumber());
    }).toThrow('[ERROR]');
  });
});
