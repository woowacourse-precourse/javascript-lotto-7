export default function runValidators(input, validators) {
  return validators.every((validator) => validator(input));
}
