import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("tslerne")
export class tslerne extends Component {

    start() {
        //bool类型
        var number: boolean = true;

        //数组类型
        var arr: number[] = [11, 2, 34];
        console.log(arr);

        var arr1: Array<number> = [22, 2, 3, 3];

        var arr3: any[] = [111, "dsada", 555];
        console.log(arr3);

        //元组类型 （属于数组的一种）
        let arr2: [number, string] = [123, "舒服舒服"];
        console.log(arr2);

        //枚举类型
        enum flag { success = 1, error = 2 };
        let s: flag = flag.success;
        console.log(s);

        enum color { blue, red, yellow };
        var c: color = color.red;
        console.log(c);

        //任意类型
        var anytype: any = 222;
        console.log(anytype);
        anytype = "dddd";
        console.log(anytype);

        //其他类型
        //undefine
        var und: number;
        console.log(und);

        var two: undefined | number;
        two = 333;
        console.log(two);

        //null
        var three: number | null | undefined;
        console.log(three);
        three = 333;
        console.log(three);

        //void类型
        function run(): void {
            console.log("run");
        }

        run();


        //函数的定义
        //1函数的声明方法
        function run1(): string {
            return "aaa";
        }

        //匿名函数
        var fun3 = function (): number {
            return 123;
        }


        //定义方法传参
        function getInfo(name: string, age: number): string {
            return `${name}+3333`;
        }
        //never类型 包括null和undefined 
        // var ner:never;
        // ner =(()=>{ throw Error("错误")})();

        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
