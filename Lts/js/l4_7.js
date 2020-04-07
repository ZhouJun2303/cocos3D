"use strict";
// console.log("4——7");
// function run():void{
//     console.log("void类型函数");
// };
// run();
// //定义方法
// function getInfo(name:string,age:number):string{
//     return "aaaa"
// };
// getInfo("dsda",6660);
//匿名函数定义方法
var get = function () {
    // console.log("匿名函数定义");
    return 3333;
};
// alert(get());
//方法可选参数 ?配置可选参数
function getInfo(name, age) {
    if (name) {
        return "aaaa";
    }
    else {
        return "无年龄";
    }
}
;
//注意 可选参数必须配置到参数的最后面
//设置默认参数
function getInfo1(name, age) {
    if (age === void 0) { age = 30; }
    if (name) {
        return "aaaa";
    }
    else {
        return "无年龄";
    }
}
;
//剩余参数
function sun(a, b, c) {
    return a + b + c;
}
//三点运算符
function sun1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function css(str, age) {
    if (typeof str === 'string') {
    }
    else {
    }
}
//箭头函数 this指向上下文
setTimeout(function () {
    console.log('ddadad');
}, 3000);
