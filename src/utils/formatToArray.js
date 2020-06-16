/**
 * @function formatToAray
 *
 * @param {string[]} splittedHtml
 * @description Formats splitted html
 * @returns {string[]}
 */

module.exports = splittedHtml => {
  let level = 0;
  const opened = [];

  return splittedHtml.reverse().reduce((formatted, el) => {
    if (opened.length
      && level
      && opened[level]
      && opened[level] === el.substring(1, opened[level].length + 1)
    ) {
      opened.splice(level, 1);
      level--;
    }

    const acc = [
      `${' '.repeat(level ? level * 2 : 0)}${el}`,
      ...formatted,
    ];

    if (el.substring(0, 2) === '</') {
      level++;
      opened[level] = el.substring(2, el.length - 1);
    }

    return acc;
  }, []);
};
