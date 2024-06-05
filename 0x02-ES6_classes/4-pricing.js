import Currency from './3-currency';

/**
 * Represents a Pricing .
 */

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters

  set amount(val) {
    this._amount = val;
  }

  set currency(val) {
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return this._amount * conversionRate;
  }
}
