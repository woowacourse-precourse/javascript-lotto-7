class Validator {
  static isNotNumber(value) {
    // [], "", null => 0
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
}

export default Validator;
