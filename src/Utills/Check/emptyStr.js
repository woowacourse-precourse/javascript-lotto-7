export function emptyString(input) {
  const ONLY_WHITE_SPACE_REGEX = /^\s*$/;

  if (ONLY_WHITE_SPACE_REGEX.test(input)) return true;
  if (input === '' || input === undefined || input === null) return true;
  return false;
}
