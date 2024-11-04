import { Console } from '@woowacourse/mission-utils';

export function numOfLotto(price) {
    if (price % 1000 != 0) return 0;
    return price / 1000;
}

export function chkSelectedNum(num) {
    const result = [];
    for (let i = 0; i < num.length; i++) {
        let trimmed = num[i].trim();
        if (trimmed !== '') result.push(trimmed);
    }
    if (result.length == 6) return result;
}
