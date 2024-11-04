export const calculateWinningResult = (nums, bnum, pickedNumsArr) => {
    return pickedNumsArr.map((pickedNums) => {
      return pickedNums.filter((pickedNum) => [...nums, bnum].includes(pickedNum));
    });
  };