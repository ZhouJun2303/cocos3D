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
    class Person {
        name:string; // 前面 省略了public关键字
        constructor(n:string){//构造函数 实例化类的时候触发的方法
             this.name =n;
        }

        public run():void{
            console.log(this.name);
        }

        getName():string{
            return this.name;
        }

        setName(name:string):void{
            this.name = name;
        }
    }
    var p = new Person("张三");
    p.run();
    console.log(p.getName()); 
    p.setName("change");
    p.run();

//typescript 怎么继承 extends super
    class Web extends Person{
        constructor(name:string){
            super(name)/**初始化父类的构造函数 */
        }

        work(){ //如果父类有同样的方法，先在子类里面找
            console.log(`${this.name}在运动work`);
        }
    }

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
 