export default function applyToValueOrArray(value, callback) {
  if (Array.isArray(value)) {
    return value.some(callback);
  }
  return callback(value);
}
