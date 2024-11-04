import {
	LOTTO_COUNT,
	MAX_LOTTO_NUMBER,
	MIN_LOTTO_NUMBER,
	LOTTO_PRICE,
} from './numbers.js';

export const MESSAGE = Object.freeze({
	COST_MESSAGE: '구입금액을 입력해 주세요.\n',
	WINNING_NUMBER_MESSAGE: '당첨 번호를 입력해 주세요.\n',
	BONUS_NUMBER_MESSAGE: '보너스 번호를 입력해 주세요.\n',
	STATISTIC_MESSAGE: '당첨 통계\n---',
});

export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
	NOT_A_NUMBER: '숫자를 입력해 주세요.',
	EMPTY: '아무것도 입력되지 않았습니다.',
	HAS_WHITE_SPACE: '공백이 포함될 수 없습니다.',
	IS_NEGATIVE: '음수가 입력될 수 없습니다.',
	NOT_DIVIDED_BY_THOUSAND: `금액은 ${LOTTO_PRICE}원 단위로 입력해주세요.`,
	INVALID_WINNING_FORMAT: '숫자와 쉼표만 입력할 수 있습니다.',
	INVALID_LOTTO_COUNT: `당첨 숫자의 갯수는 ${LOTTO_COUNT}개여야 합니다.`,
	IS_DUPLICATED: '중복된 숫자는 입력될 수 없습니다.',
	IS_OVER_NUMBER_RANGE: `숫자의 범위는 ${MIN_LOTTO_NUMBER}~${MAX_LOTTO_NUMBER} 사이의 값만 가능합니다.`,
	DUPLICATED_BONUS_NUMBER: '보너스 숫자는 당첨 숫자와 중복될 수 없습니다.',
});
