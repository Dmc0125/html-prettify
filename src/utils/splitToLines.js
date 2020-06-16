/**
 * @function splitOnNewLines
 *
 * @param {string} markup
 * @description Splits html markup on new lines
 * @returns {string[]}
 */

module.exports = markup => {
  let openedIdx = -1;

  const formatToLines = markup.trim().split('\n').reduce((formatted, el) => {
    const trimmed = el.trim();

    if (trimmed.startsWith('<')) {
      openedIdx++;
      return [...formatted, trimmed];
    }

    const newFormatted = [
      ...formatted,
      // eslint-disable-next-line prefer-template
      `${formatted[openedIdx]}${trimmed === '>' || trimmed === '/>' ? trimmed : ' ' + trimmed}`,
    ];
    newFormatted.splice(openedIdx, 1);
    return newFormatted;
  }, []);

  return formatToLines;
};
