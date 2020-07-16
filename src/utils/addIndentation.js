/**
 * @function addIndentation
 * @description Adds 2 spaces indentation
 *
 * @param {string[]} splittedHtml
 * @returns {string} Formatted html markup string with 2 spaces indentation
 */

const addIndentation = splittedHtml => {
  let level = 0;
  const opened = [];

  return splittedHtml.reverse().reduce((indented, elTag) => {
    if (opened.length
      && level
      && opened[level]
      /* if current element tag is the same as previously opened one */
      && opened[level] === elTag.substring(1, opened[level].length + 1)
    ) {
      opened.splice(level, 1);
      level--;
    }

    const indentation = ' '.repeat(level ? level * 2 : 0);

    const newIndented = [
      `${indentation}${elTag}`,
      ...indented,
    ];

    // if current element tag is closing tag
    // add it to opened elements
    if (elTag.substring(0, 2) === '</') {
      level++;
      opened[level] = elTag.substring(2, elTag.length - 1);
    }

    return newIndented;
  }, []).join('\n');
};

module.exports = addIndentation;
