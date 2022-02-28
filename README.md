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

## Params

| Param | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| markup | `string` | yes | HTML markup to prettify |
| options | `Options` | no | Prettify options

### Options

| Property | Type | Required | Default | Description |
| ----- | ---- | -------- | ------ | ----------- |
| char | `string` | no | `space` | Indentation character |
| count | `number` | no | 2 | Count of character per indentation level |


## License

[MIT License](https://opensource.org/licenses/mit-license.php)
