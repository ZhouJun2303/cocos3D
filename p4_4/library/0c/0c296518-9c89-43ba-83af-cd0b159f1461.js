System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ROUND_POINT_TYPE, ROAD_MOVE_TYPE, point;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _temp: void 0,
    ROUND_POINT_TYPE: void 0,
    ROAD_MOVE_TYPE: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "0c296UYnIlDuoOvzQsVnxRh", "point", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (ROUND_POINT_TYPE) {
        ROUND_POINT_TYPE[ROUND_POINT_TYPE["NORMAL"] = 1] = "NORMAL";
        ROUND_POINT_TYPE[ROUND_POINT_TYPE["START"] = 2] = "START";
        ROUND_POINT_TYPE[ROUND_POINT_TYPE["GREETING"] = 3] = "GREETING";
        ROUND_POINT_TYPE[ROUND_POINT_TYPE["GOODBYE"] = 4] = "GOODBYE";
        ROUND_POINT_TYPE[ROUND_POINT_TYPE["END"] = 5] = "END";
        ROUND_POINT_TYPE[ROUND_POINT_TYPE["AI_START"] = 6] = "AI_START";
      })(ROUND_POINT_TYPE || (ROUND_POINT_TYPE = {}));

      Enum(ROUND_POINT_TYPE);

      (function (ROAD_MOVE_TYPE) {
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["LINE"] = 1] = "LINE";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["CURVE"] = 2] = "CURVE";
      })(ROAD_MOVE_TYPE || (ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("point", point = (_dec = ccclass("point"), _dec2 = property({
        type: ROUND_POINT_TYPE,
        displayOrder: 1
      }), _dec3 = property({
        type: Node,
        displayOrder: 2,
        visible: function visible() {
          // return this.type !== ROUND_POINT_TYPE.END;
          return false;
        }
      }), _dec4 = property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3
      }), _dec5 = property({
        displayOrder: 4
      }), _dec6 = property({
        type: Vec3,
        displayOrder: 5
      }), _dec7 = property({
        displayOrder: 5
      }), _dec8 = property({
        displayOrder: 6
      }), _dec9 = property({
        displayOrder: 7
      }), _dec10 = property({
        displayOrder: 8
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(point, _Component);

        function point() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, point);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(point)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextStation", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "closeWise", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "direction", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "interval", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "delayTime", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speed", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cars", _descriptor9, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(point, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return point;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROUND_POINT_TYPE;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextStation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_MOVE_TYPE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "closeWise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "a";
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2dpdGh1Yi9jb2NvczNEL3A0XzQvYXNzZXRzL3NjcmlwdC9wb2ludC50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIlZlYzMiLCJFbnVtIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUk9VTkRfUE9JTlRfVFlQRSIsIlJPQURfTU9WRV9UWVBFIiwicG9pbnQiLCJ0eXBlIiwiZGlzcGxheU9yZGVyIiwidmlzaWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3BDQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQkFFWkMsZ0I7QUFBQUEsUUFBQUEsZ0IsQ0FBQUEsZ0I7QUFBQUEsUUFBQUEsZ0IsQ0FBQUEsZ0I7QUFBQUEsUUFBQUEsZ0IsQ0FBQUEsZ0I7QUFBQUEsUUFBQUEsZ0IsQ0FBQUEsZ0I7QUFBQUEsUUFBQUEsZ0IsQ0FBQUEsZ0I7QUFBQUEsUUFBQUEsZ0IsQ0FBQUEsZ0I7U0FBQUEsZ0IsS0FBQUEsZ0I7O0FBUUxILE1BQUFBLElBQUksQ0FBQ0csZ0JBQUQsQ0FBSjs7aUJBRUtDLGM7QUFBQUEsUUFBQUEsYyxDQUFBQSxjO0FBQUFBLFFBQUFBLGMsQ0FBQUEsYztTQUFBQSxjLEtBQUFBLGM7O0FBSUxKLE1BQUFBLElBQUksQ0FBQ0ksY0FBRCxDQUFKOzt1QkFJYUMsSyxXQURaSixPQUFPLENBQUMsT0FBRCxDLFVBRUhDLFFBQVEsQ0FBQztBQUNOSSxRQUFBQSxJQUFJLEVBQUVILGdCQURBO0FBRU5JLFFBQUFBLFlBQVksRUFBRTtBQUZSLE9BQUQsQyxVQU1STCxRQUFRLENBQUM7QUFDTkksUUFBQUEsSUFBSSxFQUFFUixJQURBO0FBRU5TLFFBQUFBLFlBQVksRUFBRSxDQUZSO0FBR05DLFFBQUFBLE9BQU8sRUFBRSxtQkFBdUI7QUFDNUI7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFOSyxPQUFELEMsVUFVUk4sUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBRUYsY0FEQTtBQUVORyxRQUFBQSxZQUFZLEVBQUU7QUFGUixPQUFELEMsVUFNUkwsUUFBUSxDQUNMO0FBQ0lLLFFBQUFBLFlBQVksRUFBRTtBQURsQixPQURLLEMsVUFPUkwsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBRVAsSUFEQTtBQUVOUSxRQUFBQSxZQUFZLEVBQUU7QUFGUixPQUFELEMsVUFNUkwsUUFBUSxDQUFDO0FBQ05LLFFBQUFBLFlBQVksRUFBRTtBQURSLE9BQUQsQyxVQUtSTCxRQUFRLENBQUM7QUFDTkssUUFBQUEsWUFBWSxFQUFFO0FBRFIsT0FBRCxDLFVBS1JMLFFBQVEsQ0FBQztBQUNOSyxRQUFBQSxZQUFZLEVBQUU7QUFEUixPQUFELEMsV0FLUkwsUUFBUSxDQUFDO0FBQ05LLFFBQUFBLFlBQVksRUFBRTtBQURSLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBU0QsQ0FFUCxDLENBREc7QUFHSjtBQUNBO0FBQ0E7Ozs7O1FBbEV1QlYsUzs7Ozs7aUJBS2hCTSxnQjs7Ozs7OztpQkFVYSxJOzs7Ozs7O2lCQU1UQyxjOzs7Ozs7O2lCQU9DLEk7Ozs7Ozs7aUJBTUEsSUFBSUwsSUFBSixDQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixDOzs7Ozs7O2lCQUtELEM7Ozs7Ozs7aUJBS0MsQzs7Ozs7OztpQkFLSixJOzs7Ozs7O2lCQUtELEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIEVudW0gfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gUk9VTkRfUE9JTlRfVFlQRSB7XHJcbiAgICBOT1JNQUwgPSAxLFxyXG4gICAgU1RBUlQsXHJcbiAgICBHUkVFVElORyxcclxuICAgIEdPT0RCWUUsXHJcbiAgICBFTkQsXHJcbiAgICBBSV9TVEFSVCxcclxufVxyXG5FbnVtKFJPVU5EX1BPSU5UX1RZUEUpO1xyXG5cclxuZW51bSBST0FEX01PVkVfVFlQRSB7XHJcbiAgICBMSU5FID0gMSxcclxuICAgIENVUlZFLFxyXG59XHJcbkVudW0oUk9BRF9NT1ZFX1RZUEUpO1xyXG5cclxuXHJcbkBjY2NsYXNzKFwicG9pbnRcIilcclxuZXhwb3J0IGNsYXNzIHBvaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogUk9VTkRfUE9JTlRfVFlQRSxcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDEsXHJcbiAgICB9KVxyXG4gICAgdHlwZSA9IFJPVU5EX1BPSU5UX1RZUEU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBOb2RlLFxyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogMixcclxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAodGhpczogcG9pbnQpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMudHlwZSAhPT0gUk9VTkRfUE9JTlRfVFlQRS5FTkQ7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgbmV4dFN0YXRpb246IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogUk9BRF9NT1ZFX1RZUEUsXHJcbiAgICAgICAgZGlzcGxheU9yZGVyOiAzLFxyXG4gICAgfSlcclxuICAgIG1vdmVUeXBlID0gUk9BRF9NT1ZFX1RZUEU7XHJcblxyXG4gICAgQHByb3BlcnR5KFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlzcGxheU9yZGVyOiA0LFxyXG4gICAgICAgIH1cclxuICAgIClcclxuICAgIGNsb3NlV2lzZSA9IHRydWU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBWZWMzLFxyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogNSxcclxuICAgIH0pXHJcbiAgICBkaXJlY3Rpb24gPSBuZXcgVmVjMygxLCAwLCAwKTtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogNSxcclxuICAgIH0pXHJcbiAgICBpbnRlcnZhbCA9IDM7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDYsXHJcbiAgICB9KVxyXG4gICAgZGVsYXlUaW1lID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogNyxcclxuICAgIH0pXHJcbiAgICBzcGVlZCA9IDAuMDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDgsXHJcbiAgICB9KVxyXG4gICAgY2FycyA9IFwiYVwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==