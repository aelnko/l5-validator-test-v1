export default class ObjectSchema {
  constructor(validators = {}) {
    this.validators = validators;
  }

  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(value) {
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }
    return keys.every((key) => this.validators[key].isValid(value[key]))
  }
}