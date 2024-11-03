export function splitWithDelimiter(delimiter, string) {
  const result = string.split(delimiter).map((str) => str.trim());
  return result;
}

export function getValidValue(value, delimiter) {
  if (typeof value === 'string' && delimiter && value.includes(delimiter)) {
    return splitWithDelimiter(delimiter, value);
  }
  return value;
}
