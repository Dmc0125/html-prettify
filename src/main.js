const splitOnNewLines = require('./utils/splitToLines');
const formatToArray = require('./utils/formatToArray');

/**
 * @function prettify
 *
 * @param {string} markup
 * @description Formats the html markup
 * @returns {string}
 */
const prettify = markup => {
  const splitted = splitOnNewLines(markup);

  return formatToArray(splitted).join('\n');
};

module.exports = prettify;
