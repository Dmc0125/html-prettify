# HTML Prettify

Simple lightweight HTML prettifier

## Usage

```js
const prettify = require('html-prettify');

const html = `
  <section class="wrapper">
    <ul>
      <li
        v-for="(item, i) in list"
        :key="i"
      >
        <SomeVueComponent
          size="1.5rem"
          v-html="getIcon('tickIcon').html"
        />
        <span>{{ item }}</span>
      </li>
    </ul>
    <a
      class="some-link"
      href="#"
    >Link</a>
  </section>
`;

console.log(prettify(html));
/*
OUTPUT

'<section class="wrapper">
  <ul>
    <li v-for="(item, i) in list" :key="i">
      <SomeVueComponent size="1.5rem" v-html="getIcon('tickIcon').html"/>
      <span>{{ item }}</span>
    </li>
  </ul>
  <a class="some-link" href="#">Link</a>
</section>'
*/
```

## License

[MIT License](https://opensource.org/licenses/mit-license.php)
