import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {}
  // 요구 사항 1
  testSplit(STR) {
    const NUM_LIST = STR.split(",");
    return NUM_LIST;
  }

  createSet() {
    const SET = new Set([1, 2, 3]); // Set(0) {[1, 2, 3]}
    SET.add(1); // Set(2) {[1,2,3],1}
    SET.add("A").add(true); // Set(3) {[1,2,3],1,'A'} // Set(4) {[1,2,3],1,'A', true}
    return SET.size;
  }

  getChar(STR, IDX) {
    const CHAR = STR[parseInt(IDX)];
    console.log(`STR: ${STR}, IDX: ${IDX}, CHAR: ${CHAR}`);
    if (CHAR == undefined) throw new Error("[ERROR]");
    else return CHAR;
  }

  containSet(NUM_STR) {
    let CONTAINS = 0;
    const FIND_NUM = NUM_STR.split(",");
    if (FIND_NUM[0][0] == "(") {
      FIND_NUM[0] = FIND_NUM[0].slice(1, FIND_NUM[0].length).trim();
      FIND_NUM[FIND_NUM.length - 1] = FIND_NUM[FIND_NUM.length - 1]
        .slice(0, FIND_NUM[FIND_NUM.length - 1].length - 1)
        .trim();
    }
    const SET = new Set([7, 2, 3, 5, 4, 10]);
    for (let NUM of FIND_NUM) {
      if (SET.has(parseInt(NUM))) {
        CONTAINS++;
        continue;
      }
    }
    if (CONTAINS == FIND_NUM.length) {
      console.log(true);
      return true;
    }
    console.log(false);
    return false;
  }
}

export default App;
