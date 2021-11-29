export default class Random {
  /**
   * Get a random number from 0 to below max
   * @param {number} max 
   * @returns {number} a random number
   * call this function with a max number that random numbers should be less than.
   * ex: Random.getRandomNumber(10) will return a number between 0 to 9, inclusive
   */
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
}