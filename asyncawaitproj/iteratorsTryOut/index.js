import * as customTypes from './customTypes.js';

var ct1 = new customTypes.customType('name1', 1);

var cta = new customTypes.customTypeArray();

for (let ct of cta) {
    console.log(ct.getName());
}

for(let obj of cta.data)
    {
        console.log(obj.getName());
    }

console.log('wait');
