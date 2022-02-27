const addIndentation = require('../utils/addIndentation')

describe('addIndentation', () => {
  it('should add indentation if there is only one nested element', () => {
    const html = [
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]

    expect(addIndentation(html))
      .toBe('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"/>\n</svg>')
  })

  it('should add indentation if there are multiple nested elements', () => {
    const html = [
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]

    expect(addIndentation(html))
      .toBe('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd"/>\n  <path fill-rule="evenodd" clip-rule="evenodd"/>\n</svg>')
  })

  it('should add indentation if there are multiple nested levels', () => {
    const html = [
      '<main>',
      '<div>',
      '<div>',
      '<div>',
      '</div>',
      '</div>',
      '</div>',
      '</main>',
    ]

    expect(addIndentation(html))
      .toBe('<main>\n  <div>\n    <div>\n      <div>\n      </div>\n    </div>\n  </div>\n</main>')
  })
})
