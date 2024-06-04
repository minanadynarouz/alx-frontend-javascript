/**
 * Represents a Currency Class.
 */

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters

  set code(val) {
    this._code = val;
  }

  set name(val) {
    this._name = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
