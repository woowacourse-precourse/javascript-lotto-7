const replaceEmptySpace = (string) => {
  const emptySpaceRegex = /\s+/g;

  return string.replace(emptySpaceRegex, '');
};

export default replaceEmptySpace;
