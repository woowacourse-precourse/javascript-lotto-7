import BuyPriceConfig from './buyPriceConfig';
import { InputComment } from './display';

const ErrorMessages = Object.freeze({
  PREFIX: '[ERROR]',
  BuyPrice: {
    NO_INPUT: '구입 금액을 입력해주세요.',
    NOT_NUMBER_INPUT: '구입 금액은 숫자로 입력해야 합니다.',
    LESS_THAN_MIN: `구입 금액은 ${BuyPriceConfig.Min.NAME} 이상이어야 합니다.`,
    MORE_THAN_MAX: `구입 금액은 ${BuyPriceConfig.Max.NAME}을 넘을 수 없습니다.`,
    NOT_UNIT_NUMBER: `구입 금액은 ${BuyPriceConfig.Unit.NAME} 단위로 떨어져야 합니다.`,
  },

  BasicNumbers: {
    NO_INPUT: '당첨 번호를 입력해주세요.',
    IS_WRONG_LENGTH: `6개의 숫자를 ${InputComment.Seperator.NAME}(${InputComment.Seperator.VALUE})로 구분하여 입력해주세요.`,
    IS_DUPLICATED_VALUE_IN: `중복되지 않는 숫자를 ${InputComment.Seperator.NAME}(${InputComment.Seperator.VALUE})로 구분하여 입력해주세요.`,
  },

  BasicEachNumber: {
    NO_INPUT: '입력하지 않은 숫자가 있습니다.',
    NOT_NUMBER_INPUT: `문자가 아닌 숫자를 ${InputComment.Seperator.NAME}(${InputComment.Seperator.VALUE})로 구분하여 입력해주세요.`,
    NOT_RANGED_INPUT: `1~45사이의 숫자를 ${InputComment.Seperator.NAME}(${InputComment.Seperator.VALUE})로 구분하여 입력해주세요.`,
  },

  BonusNumber: {
    NO_INPUT: '보너스 번호를 입력해주세요.',
    NOT_NUMBER_INPUT: '보너스 번호는 숫자로 입력해야 합니다.',
    NOT_RANGED_INPUT: '보너스 번호는 1부터 45 사이의 숫자이어야 합니다.',
    IS_DUPLICATED_WITH_BASIC_NUMBERS:
      '보너스 번호는 당첨 번호와 중복되면 안됩니다.',
  },

  Lotto: {
    IS_WRONG_LENGTH: '로또 번호는 6개여야 합니다.',
    NOT_NUMBER_VALUE: '로또 번호는 숫자로 구성되어야 합니다.',
    IS_DUPLICATE_VALUE: '로또 번호는 중복이 없어야 합니다.',
    NOT_RANGED_VALUE: '로또 번호는 1부터 45 사이의 숫자이어야 합니다.',
  },
});

export default ErrorMessages;
