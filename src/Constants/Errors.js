import BuyPriceConfig from './BuyPriceConfig.js';

const Errors = Object.freeze({
  PREFIX: '[ERROR]',
  BuyPrice: {
    NO_INPUT: `구입 금액은 ${BuyPriceConfig.Unit.NAME} 단위로 떨어지는 숫자를 입력해주세요.`,
    NOT_NUMBER_INPUT: '구입 금액은 숫자로 입력해야 합니다.',
    LESS_THAN_MIN: `구입 금액은 ${BuyPriceConfig.Min.NAME} 이상이어야 합니다.`,
    MORE_THAN_MAX: `구입 금액은 최대 ${BuyPriceConfig.Max.NAME}까지 입력할 수 있습니다.`,
    NOT_UNIT_NUMBER: `구입 금액은 ${BuyPriceConfig.Unit.NAME} 단위로 떨어져야 합니다.`,
  },

  BasicNumbers: {
    NO_INPUT: `당첨 번호를 입력받지 못했어요.`,
    IS_WRONG_LENGTH: `숫자의 갯수가 맞지 않습니다.`,
    IS_DUPLICATED_VALUE_IN: `번호들 중 중복되는 값이 있어요.`,
  },

  BasicEachNumber: {
    NO_INPUT: `입력하지 않은 숫자가 있습니다.`,
    NOT_NUMBER_INPUT: `숫자들 중 문자가 있습니다.`,
    NOT_RANGED_INPUT: `숫자들 중 범위에 맞지 않은 숫자가 있습니다.`,
  },

  BonusNumber: {
    NO_INPUT: '보너스 번호를 입력받지 못했어요.',
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

  PurchaseCount: {
    NOT_NUMBER_VALUE: '구매 횟수는 숫자로 구성되어야 합니다.',
  },
});

export default Errors;
