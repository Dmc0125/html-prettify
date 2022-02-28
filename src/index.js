const addIndentation = require('./utils/addIndentation')
const { mergeAttributesWithElements } = require('./utils/toLines')

/**
 * @param {string} markup
 * @param {{ char?: string; count?: number }} options
 * @returns {string}
 */
const prettify = (markup, options = {}) => {
  const splitted = mergeAttributesWithElements(markup)

  return addIndentation(splitted, options)
}

module.exports = prettify
