const splitOnNewLines = require('./splitToLines');

describe('splitOnNewLines', () => {
  it('should split string on new lines', () => {
    const html = `
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"/>
      </svg>
    `;

    expect(splitOnNewLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]));
  });

  it('should split when parent attributes are on new line', () => {
    const html = `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd"/>
      </svg>
    `;

    expect(splitOnNewLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]));
  });

  it('should split when all attributes are on new line', () => {
    const html = `
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    `;

    expect(splitOnNewLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]));
  });

  it('should split when some attributes are on new line and some are not', () => {
    const html = `
      <svg
        width="100%" height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
        />
      </svg>
    `;

    expect(splitOnNewLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]));
  });

  it('should split when attributes of one element are on new line and others are not', () => {
    const html = `
      <svg
        width="100%" height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd"/>
        <div
          class="some"
        >
          <p></p>
        </div>
      </svg>
    `;

    expect(splitOnNewLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '<div class="some">',
      '<p></p>',
      '</div>',
      '</svg>',
    ]));
  });

  it('should split when there are empty new lines', () => {
    const html = `
      <svg
        width="100%" height="100%"


        
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd"/>
        <div
          class="some"
        >
          <p></p>
        </div>
      </svg>
    `;

    expect(splitOnNewLines(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '<div class="some">',
      '<p></p>',
      '</div>',
      '</svg>',
    ]));
  });
});
