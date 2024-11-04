export class LottoError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = "Lotto Error";
  }
}
