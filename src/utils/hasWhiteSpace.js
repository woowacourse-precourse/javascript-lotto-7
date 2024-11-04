export const hasWhiteSpace = (input) => {
  const WHITESPACE_PATTERN = /\s/;

  return WHITESPACE_PATTERN.test(input);
};
