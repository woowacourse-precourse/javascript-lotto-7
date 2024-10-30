function validateRounds(input) {
  if (!isNumber.test(input)) {
    throwError(ERROR_MESSAGES.rounds.ONLY_INTEGER_ALLOWED);
  }

  const rounds = BigInt(input);
  // 유효성 검사
  if (rounds <= 0n) {
    throwError(ERROR_MESSAGES.rounds.ONLY_POSITIVE_ALLOWED);
  }

  return rounds;
}
