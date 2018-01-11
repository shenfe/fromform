import domod from 'domod'

import { any } from  './util'

const createEl = (proppath, type, name) => {
    let el;
    switch (type) {
        case 'text':
        case 'number':
        case 'color':
        case 'url':
            el = `<input type="${type}" m-value="$${proppath}._value">`;
            break;
        case 'select':
            el = `<select m-value="$${proppath}._value">
                <option m-each="$val in $${proppath}._options" m-value="$val">{{$val}}</option>
            </select>`;
            break;
        default:
            break;
    }
   return `<label>${name}:</label>${el}`;
};

const formify = (obj, proppath, doWithNested) => {
    if (!proppath) proppath = '';
    else proppath = proppath + '.';

    let result = [];
    for (let p in obj) {
        let items = [];
        if (obj[p] instanceof Array) {
            let jtems = [];
            obj[p].forEach((o, i) => {
                if (any(o, (v, p) => p[0] !== '_')) {
                    jtems.push(formify(o, `${proppath}${p}[${i}]`, doWithNested));
                } else {
                    if (!o.hasOwnProperty('_value')) {
                        o._value = '';
                    }
                    jtems.push(createEl(`${proppath}${p}[${i}]`, o._type, i));
                }
            });
            items.push(doWithNested ? doWithNested(p, jtems.join('')) : `<div><label>${p}:</label>${jtems.join('')}</div>`);
        } else if (obj[p] instanceof Object) {
            if (any(obj[p], (v, p) => p[0] !== '_')) {
                let ct = formify(obj[p], proppath + p, doWithNested);
                items.push(doWithNested ? doWithNested(p, ct) : `<label>${p}:</label>${ct}`);
            } else {
                if (!obj[p].hasOwnProperty('_value')) {
                    obj[p]._value = '';
                }
                items.push(createEl(`${proppath}${p}`, obj[p]._type, p));
            }
        }
        result.push(`<div>${items.join('')}</div>`);
    }
    return `<div>${result.join('')}</div>`;
};

const run = (obj, doWithNested) => {
    let frag = document.createDocumentFragment();
    let div = document.createElement('div');
    div.innerHTML = formify(obj, null, doWithNested);
    domod(div, obj);
    frag.appendChild(div);
    return frag;
};

export default run