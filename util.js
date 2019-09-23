var util = require('util');

// util.inherits
// function Base() {
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function() {
//         console.log('Hello ' + this.name);
//     };
// }
// Base.prototype.showName = function() {
//     console.log(this.name);
// }
// function Sub() {
//     this.name = 'sub';
// }
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();//base
// objBase.sayHello();// Hello base
// console.log(objBase);
// var objSub = new Sub();
// objSub.showName();//sub
// // objSub.sayHello();//Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承。
// console.log(objSub);
// // 在原型中定义的属性不会被 console.log 作为对象的属性输出。

// util.inspect
// function Person() {
//     this.name = 'byvoid';
//     this.toString = function() {
//         return this.name;
//     }
// }
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));

// util.isArrsy
// util.isArray([]);
// util.isArray(new Array);
// util.isArray({});

// util.isRegExp
// util.isRegExp(/some regexp/);
// util.isRegExp(new RegExp('another regexp'));
// util.isRegExp({});

// util.isDate
// util.isDate(new Date());
// util.isDate(Date());
// util.isDate({});

// util.isError
// util.isError(new Error());
// util.isError(new TypeError());
// util.isError({name: 'Error', message: 'an error occured'});










