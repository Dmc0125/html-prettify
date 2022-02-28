const prettify = require('../index')

describe('prettify', () => {
  it('should format the html markup with attributes on new line and nested elements on same level', () => {
    const html = `
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"

          clip-rule="evenodd"
          d="M3.354 12.06a.5.5 0 0 1 0-.706l8-8a.5.5 0 0 1 .707 0l8 8a.5.5 0 0 1-.707.707l-7.647-7.647-7.646 7.647a.5.5 0 0 1-.707 0z"
          fill="currentColor"
         
        />
        
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.207 11.707a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5v7h2.5v-4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4.5h2.5v-7a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2v7a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-4.5h-3v4.5a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-7h-2a.5.5 0 0 1-.5-.5z"
          fill="currentColor"
        />
      </svg>
    `

    expect(prettify(html))
      .toBe('<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.354 12.06a.5.5 0 0 1 0-.706l8-8a.5.5 0 0 1 .707 0l8 8a.5.5 0 0 1-.707.707l-7.647-7.647-7.646 7.647a.5.5 0 0 1-.707 0z" fill="currentColor" />\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.207 11.707a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 .5.5v7h2.5v-4.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4.5h2.5v-7a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2v7a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-4.5h-3v4.5a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5v-7h-2a.5.5 0 0 1-.5-.5z" fill="currentColor" />\n</svg>')
  })
})
