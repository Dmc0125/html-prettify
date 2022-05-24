const { mergeAttributesWithElements, removeEmptyLines } = require('../utils/toLines')

describe('toLines', () => {
  describe('removeEmptyLines', () => {
    it('should return empty array if it is just white space', () => {
      expect(removeEmptyLines('\t\t \n\n \t ')).toBe('')
    })

    it('should return array of strings if there are some on multiple lines', () => {
      const html = `
        some
        string
        on

        multiple\t lines
      `

      expect(removeEmptyLines(html)).toBe('some\nstring\non\nmultiple\t lines')
    })
  })

  describe('mergeAttributesWithElements', () => {
    it('should split markup to lines', () => {
      const html = `
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"/>
        </svg>
      `

      expect(mergeAttributesWithElements(html)).toEqual(expect.arrayContaining([
        '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
        '<path fill-rule="evenodd" clip-rule="evenodd" />',
        '</svg>',
      ]))
    })

    it('should split markup if there are empty lines', () => {
      const html = `
        <main
          class="some class"

          id="some id"
        >
          <div>

          </div>
        </main>
      `

      expect(mergeAttributesWithElements(html)).toEqual(expect.arrayContaining([
        '<main class="some class" id="some id">',
        '<div>',
        '</div>',
        '</main>',
      ]))
    })

    it('should join trailing attributes with correct spacing', () => {
      const html = `
        <main
          class="some class"
          id="some id">
        </main>
      `

      expect(mergeAttributesWithElements(html)).toEqual(expect.arrayContaining([
        '<main class="some class" id="some id">',
        '</main>',
      ]))
    })
  })
})
