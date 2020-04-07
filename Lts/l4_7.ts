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
    var get = function (): number {
        // console.log("匿名函数定义");

        return 3333;
    }

// alert(get());

//方法可选参数 ?配置可选参数
    function getInfo(name: string, age?: number): string {
        if(name){
            return "aaaa"
        }else{
            return "无年龄"
        }
       
    };

    //注意 可选参数必须配置到参数的最后面

//设置默认参数
    function getInfo1(name: string, age: number=30): string {
        if(name){
            return "aaaa"
        }else{
            return "无年龄"
        }
    };

//剩余参数
    function sun(a:number,b:number,c:number):number
    {
        return a+b+c;
    }

    //三点运算符
    function sun1(...result:number[]):number
    {
        var sum =0;
        for(let i=0;i<result.length;i++){
            sum+=result[i];
        }
        return sum;
    }


//函数的重载

    // es5
    // function css(config:any):any{}

    // function css(config:any,data:number):any{}

    // ts重载s
    function css(name:string):string;
    function css(age:number,age2:number):number;
    function css(str:any,age?:any):any{
        if(typeof str === 'string'){

        }else{

        }
    }


//箭头函数 this指向上下文
    setTimeout(()=>{
        console.log('ddadad')
    },3000)