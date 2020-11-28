System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, tslerne;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e8d6avsAttD8r7uAOveqpLV", "tslerne", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("tslerne", tslerne = (_dec = ccclass("tslerne"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(tslerne, _Component);

        function tslerne() {
          _classCallCheck(this, tslerne);

          return _possibleConstructorReturn(this, _getPrototypeOf(tslerne).apply(this, arguments));
        }

        _createClass(tslerne, [{
          key: "start",
          value: function start() {
            //bool类型
            var number = true; //数组类型

            var arr = [11, 2, 34];
            console.log(arr);
            var arr1 = [22, 2, 3, 3];
            var arr3 = [111, "dsada", 555];
            console.log(arr3); //元组类型 （属于数组的一种）

            var arr2 = [123, "舒服舒服"];
            console.log(arr2); //枚举类型

            var flag;

            (function (flag) {
              flag[flag["success"] = 1] = "success";
              flag[flag["error"] = 2] = "error";
            })(flag || (flag = {}));

            ;
            var s = flag.success;
            console.log(s);
            var color;

            (function (color) {
              color[color["blue"] = 0] = "blue";
              color[color["red"] = 1] = "red";
              color[color["yellow"] = 2] = "yellow";
            })(color || (color = {}));

            ;
            var c = color.red;
            console.log(c); //任意类型

            var anytype = 222;
            console.log(anytype);
            anytype = "dddd";
            console.log(anytype); //其他类型
            //undefine

            var und;
            console.log(und);
            var two;
            two = 333;
            console.log(two); //null

            var three;
            console.log(three);
            three = 333;
            console.log(three); //void类型

            function run() {
              console.log("run");
            }

            run(); //函数的定义
            //1函数的声明方法

            function run1() {
              return "aaa";
            } //匿名函数


            var fun3 = function fun3() {
              return 123;
            }; //定义方法传参


            function getInfo(name, age) {
              return "".concat(name, "+3333");
            } //never类型 包括null和undefined 
            // var ner:never;
            // ner =(()=>{ throw Error("错误")})();
            // Your initialization goes here.

          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return tslerne;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRDovZ2l0aHViL2NvY29zM0QvcDRfNC9hc3NldHMvc2NyaXB0L3RzbGVybmUudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsInRzbGVybmUiLCJudW1iZXIiLCJhcnIiLCJjb25zb2xlIiwibG9nIiwiYXJyMSIsImFycjMiLCJhcnIyIiwiZmxhZyIsInMiLCJzdWNjZXNzIiwiY29sb3IiLCJjIiwicmVkIiwiYW55dHlwZSIsInVuZCIsInR3byIsInRocmVlIiwicnVuIiwicnVuMSIsImZ1bjMiLCJnZXRJbmZvIiwibmFtZSIsImFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7Ozs7QUFDYkMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7eUJBR0pDLE8sV0FEWkYsT0FBTyxDQUFDLFNBQUQsQzs7Ozs7Ozs7Ozs7a0NBR0k7QUFDSjtBQUNBLGdCQUFJRyxNQUFlLEdBQUcsSUFBdEIsQ0FGSSxDQUlKOztBQUNBLGdCQUFJQyxHQUFhLEdBQUcsQ0FBQyxFQUFELEVBQUssQ0FBTCxFQUFRLEVBQVIsQ0FBcEI7QUFDQUMsWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFFQSxnQkFBSUcsSUFBbUIsR0FBRyxDQUFDLEVBQUQsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBMUI7QUFFQSxnQkFBSUMsSUFBVyxHQUFHLENBQUMsR0FBRCxFQUFNLE9BQU4sRUFBZSxHQUFmLENBQWxCO0FBQ0FILFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaLEVBWEksQ0FhSjs7QUFDQSxnQkFBSUMsSUFBc0IsR0FBRyxDQUFDLEdBQUQsRUFBTSxNQUFOLENBQTdCO0FBQ0FKLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaLEVBZkksQ0FpQko7O0FBakJJLGdCQWtCQ0MsSUFsQkQ7O0FBQUEsdUJBa0JDQSxJQWxCRDtBQWtCQ0EsY0FBQUEsSUFsQkQsQ0FrQkNBLElBbEJEO0FBa0JDQSxjQUFBQSxJQWxCRCxDQWtCQ0EsSUFsQkQ7QUFBQSxlQWtCQ0EsSUFsQkQsS0FrQkNBLElBbEJEOztBQWtCZ0M7QUFDcEMsZ0JBQUlDLENBQU8sR0FBR0QsSUFBSSxDQUFDRSxPQUFuQjtBQUNBUCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUssQ0FBWjtBQXBCSSxnQkFzQkNFLEtBdEJEOztBQUFBLHVCQXNCQ0EsS0F0QkQ7QUFzQkNBLGNBQUFBLEtBdEJELENBc0JDQSxLQXRCRDtBQXNCQ0EsY0FBQUEsS0F0QkQsQ0FzQkNBLEtBdEJEO0FBc0JDQSxjQUFBQSxLQXRCRCxDQXNCQ0EsS0F0QkQ7QUFBQSxlQXNCQ0EsS0F0QkQsS0FzQkNBLEtBdEJEOztBQXNCNEI7QUFDaEMsZ0JBQUlDLENBQVEsR0FBR0QsS0FBSyxDQUFDRSxHQUFyQjtBQUNBVixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVEsQ0FBWixFQXhCSSxDQTBCSjs7QUFDQSxnQkFBSUUsT0FBWSxHQUFHLEdBQW5CO0FBQ0FYLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxPQUFaO0FBQ0FBLFlBQUFBLE9BQU8sR0FBRyxNQUFWO0FBQ0FYLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxPQUFaLEVBOUJJLENBZ0NKO0FBQ0E7O0FBQ0EsZ0JBQUlDLEdBQUo7QUFDQVosWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlXLEdBQVo7QUFFQSxnQkFBSUMsR0FBSjtBQUNBQSxZQUFBQSxHQUFHLEdBQUcsR0FBTjtBQUNBYixZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVksR0FBWixFQXZDSSxDQXlDSjs7QUFDQSxnQkFBSUMsS0FBSjtBQUNBZCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsS0FBWjtBQUNBQSxZQUFBQSxLQUFLLEdBQUcsR0FBUjtBQUNBZCxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWEsS0FBWixFQTdDSSxDQStDSjs7QUFDQSxxQkFBU0MsR0FBVCxHQUFxQjtBQUNqQmYsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNIOztBQUVEYyxZQUFBQSxHQUFHLEdBcERDLENBdURKO0FBQ0E7O0FBQ0EscUJBQVNDLElBQVQsR0FBd0I7QUFDcEIscUJBQU8sS0FBUDtBQUNILGFBM0RHLENBNkRKOzs7QUFDQSxnQkFBSUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBb0I7QUFDM0IscUJBQU8sR0FBUDtBQUNILGFBRkQsQ0E5REksQ0FtRUo7OztBQUNBLHFCQUFTQyxPQUFULENBQWlCQyxJQUFqQixFQUErQkMsR0FBL0IsRUFBb0Q7QUFDaEQsK0JBQVVELElBQVY7QUFDSCxhQXRFRyxDQXVFSjtBQUNBO0FBQ0E7QUFFQTs7QUFDSCxXLENBRUQ7QUFDQTtBQUNBOzs7OztRQWxGeUJ6QixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcInRzbGVybmVcIilcclxuZXhwb3J0IGNsYXNzIHRzbGVybmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vYm9vbOexu+Wei1xyXG4gICAgICAgIHZhciBudW1iZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+aVsOe7hOexu+Wei1xyXG4gICAgICAgIHZhciBhcnI6IG51bWJlcltdID0gWzExLCAyLCAzNF07XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyKTtcclxuXHJcbiAgICAgICAgdmFyIGFycjE6IEFycmF5PG51bWJlcj4gPSBbMjIsIDIsIDMsIDNdO1xyXG5cclxuICAgICAgICB2YXIgYXJyMzogYW55W10gPSBbMTExLCBcImRzYWRhXCIsIDU1NV07XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyMyk7XHJcblxyXG4gICAgICAgIC8v5YWD57uE57G75Z6LIO+8iOWxnuS6juaVsOe7hOeahOS4gOenje+8iVxyXG4gICAgICAgIGxldCBhcnIyOiBbbnVtYmVyLCBzdHJpbmddID0gWzEyMywgXCLoiJLmnI3oiJLmnI1cIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJyMik7XHJcblxyXG4gICAgICAgIC8v5p6a5Li+57G75Z6LXHJcbiAgICAgICAgZW51bSBmbGFnIHsgc3VjY2VzcyA9IDEsIGVycm9yID0gMiB9O1xyXG4gICAgICAgIGxldCBzOiBmbGFnID0gZmxhZy5zdWNjZXNzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHMpO1xyXG5cclxuICAgICAgICBlbnVtIGNvbG9yIHsgYmx1ZSwgcmVkLCB5ZWxsb3cgfTtcclxuICAgICAgICB2YXIgYzogY29sb3IgPSBjb2xvci5yZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coYyk7XHJcblxyXG4gICAgICAgIC8v5Lu75oSP57G75Z6LXHJcbiAgICAgICAgdmFyIGFueXR5cGU6IGFueSA9IDIyMjtcclxuICAgICAgICBjb25zb2xlLmxvZyhhbnl0eXBlKTtcclxuICAgICAgICBhbnl0eXBlID0gXCJkZGRkXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coYW55dHlwZSk7XHJcblxyXG4gICAgICAgIC8v5YW25LuW57G75Z6LXHJcbiAgICAgICAgLy91bmRlZmluZVxyXG4gICAgICAgIHZhciB1bmQ6IG51bWJlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyh1bmQpO1xyXG5cclxuICAgICAgICB2YXIgdHdvOiB1bmRlZmluZWQgfCBudW1iZXI7XHJcbiAgICAgICAgdHdvID0gMzMzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR3byk7XHJcblxyXG4gICAgICAgIC8vbnVsbFxyXG4gICAgICAgIHZhciB0aHJlZTogbnVtYmVyIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aHJlZSk7XHJcbiAgICAgICAgdGhyZWUgPSAzMzM7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhyZWUpO1xyXG5cclxuICAgICAgICAvL3ZvaWTnsbvlnotcclxuICAgICAgICBmdW5jdGlvbiBydW4oKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicnVuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcnVuKCk7XHJcblxyXG5cclxuICAgICAgICAvL+WHveaVsOeahOWumuS5iVxyXG4gICAgICAgIC8vMeWHveaVsOeahOWjsOaYjuaWueazlVxyXG4gICAgICAgIGZ1bmN0aW9uIHJ1bjEoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiYWFhXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WMv+WQjeWHveaVsFxyXG4gICAgICAgIHZhciBmdW4zID0gZnVuY3Rpb24gKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiAxMjM7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy/lrprkuYnmlrnms5XkvKDlj4JcclxuICAgICAgICBmdW5jdGlvbiBnZXRJbmZvKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX0rMzMzM2A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vbmV2ZXLnsbvlnosg5YyF5ousbnVsbOWSjHVuZGVmaW5lZCBcclxuICAgICAgICAvLyB2YXIgbmVyOm5ldmVyO1xyXG4gICAgICAgIC8vIG5lciA9KCgpPT57IHRocm93IEVycm9yKFwi6ZSZ6K+vXCIpfSkoKTtcclxuXHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=