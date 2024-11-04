const replaceEmptySpace = (string) => {
  const emptySpaceRegex = / /g;

  return string.replace(emptySpaceRegex, '');
};

export default replaceEmptySpace;
