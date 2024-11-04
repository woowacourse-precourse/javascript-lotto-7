import { Random } from "@woowacourse/mission-utils";

const RandomNumberGenerator = {
  generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  },
};

export default RandomNumberGenerator;