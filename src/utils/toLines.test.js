const toLines = require('./toLines');

describe('toLines', () => {
  it('should split markup to lines', () => {
    const html = `
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"/>
      </svg>
    `;

    expect(toLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]));
  });

  it('should split markup if there are empty lines', () => {
    const html = `
      <main
        class="some class"

        id="some id"
      >
        <div>

        </div>
      </main>
    `;

    expect(toLines(html)).toEqual(expect.arrayContaining([
      '<main class="some class" id="some id">',
      '<div>',
      '</div>',
      '</main>',
    ]));
  });
});
