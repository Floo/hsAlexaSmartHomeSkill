'use strict';
/**
 * Utility Functions
 */

/**
 * Standard log format
 */
function log(title, msg) {
  console.log(`[${title}] ${msg}`);
}

/**
 * Generate a UUID
 * https://gist.github.com/jed/982883 DWTFYW public license
 */
function uuid(fmt) {
  return fmt ? (fmt ^ (Math.random() * 16 >> fmt / 4)).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}

/**
 * Returns a number whose value is limited to a given range
 * @param {Number} num
 * @param {Number} min
 * @param {Number} max
 */
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

/**
 * Clamp to closest number
 * @param {Number} num
 * @param {array} steps numbers to clamp to
 */
function closestNumber(num, steps) {
  let closest = steps[0];
  steps.forEach((s) => {
    if (Math.abs(num - s) < Math.abs(num - closest)) {
      closest = s;
    }
  });
  return closest;
}

module.exports = {
  log,
  uuid,
  clamp,
  closestNumber
};