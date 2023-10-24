 export default class ArraySchema {
  constructor(validators = []) {
    this.validators = [...validators];
  }

  length(num) {
    const validator = (value) => value !== null && value.length === num;
    return new ArraySchema([...this.validators, validator])
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value))
  }
}