class Validator {
  static isNotNumber(value) {
    if (Array.isArray(value) || value === "" || value === null) {
      return true;
    }

    return Number.isNaN(Number(value));
  }

  static containNotNumber(values) {
    if (Array.isArray(values)) {
      return values.some((value) => this.isNotNumber(value));
    }

    if (typeof values === "object") {
      return Object.values(values).some((value) => this.isNotNumber(value));
    }
  }

  static hasUniqueNumber(values) {
    const set = new Set(values);
    return values.length !== set.size;
  }
}

export default Validator;
