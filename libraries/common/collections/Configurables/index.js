/**
 * The Configurables class.
 */
class Configurables {
  store = new Map();

  /**
   * @param {string} key The magic key.
   * @param {Function} component The react component.
   * @returns {boolean}
   */
  set(key, component) {
    if (this.store.has(key)) {
      return false;
    }

    this.store.set(key, component);

    return true;
  }

  /**
   * @param {string} key The magic key.
   * @returns {Function}
   */
  get(key) {
    return this.store.get(key);
  }
}

export default new Configurables();
