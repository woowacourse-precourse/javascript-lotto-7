export default function runValidators(input, validators) {
  return validators.reduce((acc, validate) => acc && validate(input), true);
}
