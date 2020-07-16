const removeEmptyLines = require('./removeEmptyLines');

/**
 * @function toLines
 * @description Takes string with any formatting and splits it on new lines and removes empty lines
 *
 * @param {string} markup
 * @returns {string[]} Array of strings splitted on new lines without empty lines
 */

const toLines = markup => {
  let opened = '';

  const nonemptyLines = removeEmptyLines(markup);

  return nonemptyLines.reduce((formatted, line, i, prevArr) => {
    if (line.startsWith('<')) {
      if (i === prevArr.length - 1) {
        return [...formatted, opened, line];
      }

      const closedLine = opened;
      opened = line;

      if (closedLine.length) {
        return [...formatted, closedLine];
      }

      return formatted;
    }

    // append current line to previous line
    opened += line === '>' ? line : ` ${line}`;

    return formatted;
  }, []);
};

module.exports = toLines;
