import {LOTTO_AMOUNT_UNIT,LOTTO_NUM_RANGE,NUMBER_OF_BALLS} from '../config/numberConfig.js';
import { Random } from "@woowacourse/mission-utils";

/**
 * ','를 기준으로 숫자들은 분리
 * @param {string} numbers
 * @returns {number}
*/

export function splitNumbers(numbers) {
    return numbers.split(',').map(num => Number(num.trim()));
}

/**
 * 오름차순으로 정렬
 * @param {array} numbers
 * @returns {number}
*/
export function sortAscending(numbers) {
    return numbers.sort((a,b) => {
        return a-b
    });
}

/**
 * 당첨된 로또 개수 계산기
 * @param {array} numbers 
 * @param {number} number
 * @returns {number}
*/
export function countWinnings(numbers, number) {
    return numbers.filter(num => num === number).length;
}

/**
 * 1~45까지의 중복되지 않는 숫자 6개를 담는 배열 생성
 * @returns {array}
*/
export function pickUniqueLottoRandomNumbers() {
    return Random.pickUniqueNumbersInRange(LOTTO_NUM_RANGE.MIN, LOTTO_NUM_RANGE.MAX, NUMBER_OF_BALLS);
}

/**
 * 변수로 저장한 문자열에 number를 삽입
 * @param {string} message 
 * @param {number} number
 * @returns {array}
*/
export function replaceNumber(message, number) {
    return message.replace('{number}', number);
}


