export function isNumber(value) {
  return !Number.isNaN(Number(value));
}

export function isMultipleOfThousand(value) {
  return Number(value) % 1000 === 0;
}
