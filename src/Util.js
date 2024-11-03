class Util {
  static filterByTargetMatch(array, target) {
    return array.filter(element => element === target);
  }

  static filterByTargetArrayMatch(array, targetArray) {
    return array.filter(element => targetArray.includes(element));
  }
}

export default Util;
