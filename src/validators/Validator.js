class Validator {
  static isNotNumber(value) {
    if (isNaN(value)) {
      return true;
    }
    return false;
  }

  static containNotNumber(values) {
    if (Array.isArray(values)) {
      return values.some((value) => this.isNotNumber(value));
    }

    if (typeof values === "object") {
      return Object.values(values).some((value) => this.isNotNumber(value));
    }
  }
}

export default Validator;
