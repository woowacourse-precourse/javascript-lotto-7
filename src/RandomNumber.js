import { Random } from "@woowacourse/mission-utils";

const generateRandomNumbers = () => {
    const numbers = new Set(); // 중복 없는 Set
    while (numbers.size < 6) {
        const randomNum = Random.pickNumberInRange(1, 45); // 1~45 숫자 랜덤으로 뽑기
        numbers.add(randomNum);
    }
    return Array.from(numbers);
}

export default generateRandomNumbers;