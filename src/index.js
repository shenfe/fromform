import domod from 'domod'

const createEl = (name, type, options) => {
    let el;
    switch (type) {
        case 'text':
        case 'number':
        case 'color':
        case 'url':
            el = `<input type="${type}" m-value="$${name}.value">`;
            break;
        case 'select':
            el = `
            <select m-value="$${name}.value">
                <option m-each="$val in $${name}.options" m-value="$val">{{$val}}</option>
            </select>`;
            break;
        default:
            break;
    }
    return `<label>${name}:</label>${el}`;
};

const formify = obj => {
    let frag = document.createDocumentFragment();
    for (let p in obj) {
        let el = document.createElement('div');
        if (!obj[p].hasOwnProperty('value')) {
            obj[p].value = '';
        }
        el.innerHTML = createEl(p, obj[p].type, obj[p].options);
        domod(el, obj);
        frag.appendChild(el);
    }
    return frag;
};

export default formify