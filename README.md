# fromform
Create form from object, change object from form.

## Usage

```js
const fromform = require('fromform');
const data = {
    name: {
        _type: 'text',
        _value: 'Bob'
    },
    gender: {
        _type: 'select',
        _options: [
            'male', 'female'
        ]
    },
    weight: {
        number: {
            _type: 'number'
        },
        unit: {
            _type: 'select',
            _options: [
                'kilogram', 'pound'
            ]
        }
    },
    favouriteColor: {
        _type: 'color',
        _value: '#000'
    }
};
let f = fromform(
    data,
    (summary, content) => `<details open><summary>${summary}:</summary>${content}</details>` // optional
); // return a DocumentFragment instance
document.getElementById('form-container').appendChild(f);
```

The effect is:

<p align="center"><img src="https://raw.githubusercontent.com/shenfe/fromform/master/readme_assets/demo1.png"></p>

## API

This module exports one function which accepts two parameters: an object describing a map from fields to input element descriptors, and an optional function to construct HTML for nested objects.

### Input Element Descriptor

As the demo above shows, `input` elements and `select` elements could be represented by an object which consists of properties such as `_type`, `_value`, `_options`.

### Nested Object

As the demo above shows, a field could be another object instead of a descriptor. When this case happens, it's allowed to provide a function to customize what HTML code you want from the summary (namely the field name) and the content (which is the HTML of the field object).

## Related

* [domod](https://github.com/shenfe/domod)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, [shenfe](https://github.com/shenfe)
