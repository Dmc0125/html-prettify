const formatToArray = require('./formatToArray');

describe('prettify', () => {
  it('should format splitted markup', () => {
    const html = [
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ];

    expect(formatToArray(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '  <path fill-rule="evenodd" clip-rule="evenodd"/>',
      '</svg>',
    ]));
  });

  it('should format splitted html markup if some nested elements are on the same level', () => {
    const html = [
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '<path fill-rule="evenodd" clip-rule="evenodd"/>',
      '<div id="test"></div>',
      '</svg>',
    ];

    expect(formatToArray(html)).toEqual(expect.arrayContaining([
      '<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
      '  <path fill-rule="evenodd" clip-rule="evenodd"/>',
      '  <div id="test"></div>',
      '</svg>',
    ]));
  });

  it('should format nested elements', () => {
    const html = [
      '<div>',
      '<p>',
      '<section>',
      '<main></main>',
      '</section>',
      '</p>',
      '</div>',
    ];

    expect(formatToArray(html)).toEqual(expect.arrayContaining([
      '<div>',
      '  <p>',
      '    <section>',
      '      <main></main>',
      '    </section>',
      '  </p>',
      '</div>',
    ]));
  });

  it('should format nested elements if there are some same elements', () => {
    const html = [
      '<div>',
      '<div>',
      '<div>',
      '<main></main>',
      '</div>',
      '</div>',
      '</div>',
    ];

    expect(formatToArray(html)).toEqual(expect.arrayContaining([
      '<div>',
      '  <div>',
      '    <div>',
      '      <main></main>',
      '    </div>',
      '  </div>',
      '</div>',
    ]));
  });

  it('should format nested elements if they are all the same', () => {
    const html = [
      '<div>',
      '<div>',
      '<div>',
      '<div>',
      '</div>',
      '</div>',
      '</div>',
      '</div>',
    ];

    expect(formatToArray(html)).toEqual(expect.arrayContaining([
      '<div>',
      '  <div>',
      '    <div>',
      '      <div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>',
    ]));
  });

  it('should format same nested elements if there are more than one on the same level', () => {
    const html = [
      '<div class="some-class">',
      '<div>',
      '<div>',
      '<div>',
      '</div>',
      '<div>',
      '</div>',
      '</div>',
      '</div>',
      '</div>',
    ];

    expect(formatToArray(html)).toEqual(expect.arrayContaining([
      '<div class="some-class">',
      '  <div>',
      '    <div>',
      '      <div>',
      '      </div>',
      '      <div>',
      '      </div>',
      '    </div>',
      '  </div>',
      '</div>',
    ]));
  });
});
