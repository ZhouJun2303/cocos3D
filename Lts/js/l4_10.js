"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class
console.log("TS类");
//构造函数
//es5
// function person(name,age){ //实例方法
//     this.name = name;
//     this.age =age;
//     this.action=function(){
//         console.log("es5类");
//     }
// }
// person.prototype.sex = "a";
// //原型链上的属性会被共享
// // 类里面的静态方法
// person.getInfo = function(){
//     console.log("静态方法，不需要实例");
// }
// //es5里面的继承  //+对象冒充
//     function web(){
//         personalbar.call(this);
//     }
//     var w = new web();
//     w.action();//对象冒充，可以继承构造函数里面的属性和方法，但是不能继承原型链上的属性和方法
// //es5里面的继承  //原型链
//     function web1(name,age ){
//     }
//     web1.prototype = new person();//原型链继承，既可以继承构造函数上的属性和方法，也可以继承原型链上的属性和方法
//     var w1 =new web1("姓名",20);
//     //实例化类的时候没办法传参
// //es5里面的继承  //原型链+对象冒充 *****
//     function web2(name,age ){
//         person.call(this,name,age);
//     }
//     web1.prototype = new person();//原型链继承，既可以继承构造函数上的属性和方法，也可以继承原型链上的属性和方法
//     var w1 =new web1("姓名",20);
//     //实例化类的时候没办法传参
//Typescript怎么定义类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("张三");
p.run();
console.log(p.getName());
p.setName("change");
p.run();
//typescript 怎么继承 extends super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this; /**初始化父类的构造函数 */
    }
    Web.prototype.work = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8work");
    };
    return Web;
}(Person));
var w = new Web("李四");
w.run();
w.work();
//typeScript 类里面的修饰符   
/**
 * public
 * protected 在类里面，子类里面可以访问，在类外不能访问
 * private     只能在类里面访问
 * 属性如果不加修饰符，默认公有
 *
 * 多态  抽象方法 abstract
 *  */
