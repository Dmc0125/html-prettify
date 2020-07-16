const removeEmptyLines = require('./removeEmptyLines');

describe('removeEmptyLines', () => {
  it('should return empty array if it is just white space', () => {
    expect(removeEmptyLines('\t\t \n\n \t ')).toEqual(expect.arrayContaining([]));
  });

  it('should return array of strings if there are some on multiple lines', () => {
    expect(removeEmptyLines('some\nstring   \non\t\t\n multiple\t lines   ')).toEqual(expect.arrayContaining([
      'some',
      'string',
      'on',
      'multiple\t lines',
    ]));
  });
});
