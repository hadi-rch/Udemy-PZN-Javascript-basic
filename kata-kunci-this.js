/*
kata kunci this adalah referensi ke object milik siapa
tiap lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya
dalam object method, this merupakan referensi ke object pemilik functionnya
di global scope, this merupakan referensi ke global object (di browser biasanya window)
dalam function, this merupakan referensi ke global object (di browser biasanya window)
di function dengan stric mode, this adalah undefined
dalam event, this merupakan referensi ke element yang menerima event
*/
console.info(this);

const person = {
    name: 'John',
    sayHello: function (name) {
        console.log(`Hello ${name} my name is ${this.name}`);
    }
};
person.sayHello("lion")