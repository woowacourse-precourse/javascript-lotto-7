import { Console } from '@woowacourse/mission-utils';

export function numOfLotto(price) {
    if (price % 1000 != 0) return 0;
    return price / 1000;
}
