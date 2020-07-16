const addIndentation = require('./utils/addIndentation');
const toLines = require('./utils/toLines');

/**
 * @function prettify
 * @description Formats the html markup with 2 spaces indentation
 *
 * @param {string} markup
 * @returns {string} Indented html markup without empty lines
 */
const prettify = markup => {
  const splitted = toLines(markup);

  return addIndentation(splitted);
};

module.exports = prettify;
