const ERROR_PREFIX = '[ERROR] ';

export const ERROR_MESSAGE = Object.freeze({
  NOT_NATURAL_NUMBER: `${ERROR_PREFIX} 유효한 자연수여야 합니다.`,
  NOT_THOUSAND_UNIT: `${ERROR_PREFIX} 1,000원 단위여야 합니다.`,
  NOT_VALID_RANGE: `${ERROR_PREFIX} 유효한 범위여야 합니다.`,
  DUPLICATED: `${ERROR_PREFIX} 중복될 수 없습니다.`,
  NOT_EXACT_COUNT: (count) => `${ERROR_PREFIX} ${count}개여야 합니다.`,
  ITEM_CONTAINED: (target) => `${ERROR_PREFIX} ${target}와(과) 중복됩니다.`,
});
