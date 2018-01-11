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
let f = fromform(obj); // return a DocumentFragment instance
document.getElementById('form-container').appendChild(f);
```

The effect is:

<p align="center"><img src="https://raw.githubusercontent.com/shenfe/fromform/master/readme_assets/demo1.png"></p>

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, [shenfe](https://github.com/shenfe)
