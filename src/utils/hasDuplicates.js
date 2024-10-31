export default function hasDuplicates(value) {
  return new Set(value).size !== value.length;
}
