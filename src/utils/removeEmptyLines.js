/**
 * @function removeEmptyLines
 * @description Takes any string as param, splits it to lines and removes empty lines
 *
 * @param {string} nonFormattedString Any non formatted string
 * @returns {string[]} Array of strings separated on new lines
 */

const removeEmptyLines = nonFormattedString => (
  nonFormattedString
    .trim()
    .split('\n')
    .reduce((nonempty, line) => {
      const trimmedLine = line.trim();
      return trimmedLine.length ? [...nonempty, trimmedLine] : nonempty;
    }, [])
);

module.exports = removeEmptyLines;
