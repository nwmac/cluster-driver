"use strict";

define("shared/components/cluster-driver/driver-neil/component", ["exports", "shared/mixins/cluster-driver", "fetch"], function (exports, _clusterDriver, _fetch) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var LAYOUT = 'PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjYWNjb3JkaW9uLWxpc3Qgc2hvd0V4cGFuZEFsbD1mYWxzZSBhcyB8YWwgZXhwYW5kRm58fX0KICAgIHt7I2lmIChlcSBzdGVwIDEpfX0KICAgICAge3sjYWNjb3JkaW9uLWxpc3QtaXRlbQogICAgICAgIHRpdGxlPWFjY2Vzc0NvbmZpZ1RpdGxlCiAgICAgICAgZGV0YWlsPWFjY2Vzc0NvbmZpZ0RldGFpbAogICAgICAgIGV4cGFuZEFsbD1leHBhbmRBbGwKICAgICAgICBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikKICAgICAgICBleHBhbmRPbkluaXQ9dHJ1ZQogICAgICB9fQogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xMiI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcubGlub2RlbGtlLmFjY2Vzc1Rva2VuLmxhYmVsIn19CiAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkKICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5sa2VFbmdpbmVDb25maWcuYWNjZXNzVG9rZW4KICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7e2lucHV0CiAgICAgICAgICAgICAgICB0eXBlPSJwYXNzd29yZCIKICAgICAgICAgICAgICAgIG5hbWU9ImFjY2Vzc1Rva2VuIgogICAgICAgICAgICAgICAgY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9KHQgImNsdXN0ZXJOZXcubGlub2RlbGtlLmFjY2Vzc1Rva2VuLnBsYWNlaG9sZGVyIikKICAgICAgICAgICAgICAgIHZhbHVlPWNsdXN0ZXIubGtlRW5naW5lQ29uZmlnLmFjY2Vzc1Rva2VuCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAge3svYWNjb3JkaW9uLWxpc3QtaXRlbX19CiAgICAgIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KICAgICAge3tzYXZlLWNhbmNlbAogICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5hY2Nlc3NDb25maWcubmV4dCIKICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5saW5vZGVsa2UuYWNjZXNzQ29uZmlnLmxvYWRpbmciCiAgICAgICAgc2F2ZT0idmVyaWZ5QWNjZXNzVG9rZW4iCiAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgIH19CiAgICB7e2Vsc2UgaWYgKGVxIHN0ZXAgMil9fQogICAgICB7eyNhY2NvcmRpb24tbGlzdC1pdGVtCiAgICAgICAgdGl0bGU9Y2x1c3RlckNvbmZpZ1RpdGxlCiAgICAgICAgZGV0YWlsPWNsdXN0ZXJDb25maWdEZXRhaWwKICAgICAgICBleHBhbmRBbGw9ZXhwYW5kQWxsCiAgICAgICAgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pCiAgICAgICAgZXhwYW5kT25Jbml0PXRydWUKICAgICAgfX0KICAgICAgICB7eyNpZiAoZXEgbW9kZSAibmV3Iil9fQogICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5yZWdpb24ubGFiZWwifX0KICAgICAgICAgICAgICAgIHt7ZmllbGQtcmVxdWlyZWR9fQogICAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheQogICAgICAgICAgICAgICAgZWRpdGFibGU9dHJ1ZQogICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5sa2VFbmdpbmVDb25maWcucmVnaW9uCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICAgIHt7bmV3LXNlbGVjdAogICAgICAgICAgICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgICBjb250ZW50PXJlZ2lvbkNob2lzZXMKICAgICAgICAgICAgICAgICAgdmFsdWU9Y2x1c3Rlci5sa2VFbmdpbmVDb25maWcucmVnaW9uCiAgICAgICAgICAgICAgICB9fQogICAgICAgICAgICAgIHt7L2lucHV0LW9yLWRpc3BsYXl9fQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNiI+CiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5rdWJlcm5ldGVzVmVyc2lvbi5sYWJlbCJ9fQogICAgICAgICAgICAgICAge3tmaWVsZC1yZXF1aXJlZH19CiAgICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAgICB7eyNpbnB1dC1vci1kaXNwbGF5CiAgICAgICAgICAgICAgICBlZGl0YWJsZT10cnVlCiAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmxrZUVuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgIH19CiAgICAgICAgICAgICAgICB7e25ldy1zZWxlY3QKICAgICAgICAgICAgICAgICAgY2xhc3M9ImZvcm0tY29udHJvbCIKICAgICAgICAgICAgICAgICAgY29udGVudD1rOHNWZXJzaW9uQ2hvaXNlcwogICAgICAgICAgICAgICAgICB2YWx1ZT1jbHVzdGVyLmxrZUVuZ2luZUNvbmZpZy5rdWJlcm5ldGVzVmVyc2lvbgogICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICB7ey9pZn19CiAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImhlYWRlciBtdC0yMCBjbGVhcmZpeCI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InB1bGwtbGVmdCI+CiAgICAgICAgICAgICAgPGgyIGNsYXNzPSJtYi0wIj4KICAgICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5saW5vZGVsa2UudGFncy5sYWJlbCJ9fQogICAgICAgICAgICAgIDwvaDI+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi01Ij4KICAgICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5saW5vZGVsa2UudGFncy5uZXdUYWcifX0KICAgICAgICAgICAgPC9sYWJlbD4KICAgICAgICAgICAge3sjaW5wdXQtb3ItZGlzcGxheSBlZGl0YWJsZT10cnVlIHZhbHVlPW5ld1RhZ319CiAgICAgICAgICAgICAge3tpbnB1dAogICAgICAgICAgICAgICAgdHlwZT0idGV4dCIKICAgICAgICAgICAgICAgIG5hbWU9InRhZ3MiCiAgICAgICAgICAgICAgICBjbGFzc05hbWVzPSJmb3JtLWNvbnRyb2wiCiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0odCAiY2x1c3Rlck5ldy5saW5vZGVsa2UudGFncy5wbGFjZWhvbGRlciIpCiAgICAgICAgICAgICAgICB2YWx1ZT1uZXdUYWcKICAgICAgICAgICAgICB9fQogICAgICAgICAgICB7ey9pbnB1dC1vci1kaXNwbGF5fX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBiZy1wcmltYXJ5IGJ0bi1zbSBtdC0zMCIge3thY3Rpb24gImFkZE5ld1RhZyJ9fT4KICAgICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXBsdXMiPjwvaT4KICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTYiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJsa2UtdGFncyI+CiAgICAgICAgICAgICAge3sjZWFjaCBjbHVzdGVyLmxrZUVuZ2luZUNvbmZpZy50YWdzIGFzIHx0YWcgdGFnSWR4fH19CiAgICAgICAgICAgICAgICA8IS0tICAgICBzaW5nbGUgdGFnIHN0YXJ0IC0tPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ibGtlLXRhZyBiZy1wcmltYXJ5Ij4KICAgICAgICAgICAgICAgICAgPHNwYW4+CiAgICAgICAgICAgICAgICAgICAge3t0YWd9fQogICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgIDxidXR0b24KICAgICAgICAgICAgICAgICAgICBjbGFzcz0ibGtlLWRlbGV0ZSBiZy1lcnJvciIKICAgICAgICAgICAgICAgICAgICB7e2FjdGlvbiAiZGVsZXRlVGFnIiB0YWdJZHh9fQogICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9Imljb24gaWNvbi10cmFzaCI+PC9pPgogICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgPCEtLSAgICAgc2luZ2xlIHRhZyBlbmQgIC0tPgogICAgICAgICAgICAgIHt7ZWxzZX19CiAgICAgICAgICAgICAgICBObyB0YWdzIGFkZGVkCiAgICAgICAgICAgICAge3svZWFjaH19CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogICAgICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAgICAgIHt7c2F2ZS1jYW5jZWwKICAgICAgICBidG5MYWJlbD0iY2x1c3Rlck5ldy5saW5vZGVsa2UuY2x1c3RlckNvbmZpZy5uZXh0IgogICAgICAgIHNhdmluZ0xhYmVsPSJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5jbHVzdGVyQ29uZmlnLmxvYWRpbmciCiAgICAgICAgc2F2ZT0idmVyaWZ5Q2x1c3RlckNvbmZpZyIKICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgfX0KICAgIHt7ZWxzZSBpZiAoZXEgc3RlcCAzKX19CiAgICAgIHt7I2FjY29yZGlvbi1saXN0LWl0ZW0KICAgICAgICB0aXRsZT1ub2RlUG9vbENvbmZpZ1RpdGxlCiAgICAgICAgZGV0YWlsPW5vZGVQb29sQ29uZmlnRGV0YWlsCiAgICAgICAgZXhwYW5kQWxsPWV4cGFuZEFsbAogICAgICAgIGV4cGFuZD0oYWN0aW9uIGV4cGFuZEZuKQogICAgICAgIGV4cGFuZE9uSW5pdD10cnVlCiAgICAgIH19CiAgICAgICAge3shIHNlbGVjdCBub2RlIHBvb2wgfX0KICAgICAgICA8ZGl2IGNsYXNzPSJyb3ciPgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tNCI+CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0iYWNjLWxhYmVsIj4KICAgICAgICAgICAgICB7e3QgImNsdXN0ZXJOZXcubGlub2RlbGtlLnNlbGVjdGVkTm9kZVBvb2xUeXBlLmxhYmVsIn19CiAgICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICAgIHt7I2lucHV0LW9yLWRpc3BsYXkgZWRpdGFibGU9dHJ1ZSB2YWx1ZT1zZWxlY3RlZE5vZGVQb29sVHlwZX19CiAgICAgICAgICAgICAge3tuZXctc2VsZWN0CiAgICAgICAgICAgICAgICBjbGFzcz0iZm9ybS1jb250cm9sIgogICAgICAgICAgICAgICAgY29udGVudD1ub2RlUG9vbENob2lzZXMKICAgICAgICAgICAgICAgIHZhbHVlPXNlbGVjdGVkTm9kZVBvb2xUeXBlCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAge3svaW5wdXQtb3ItZGlzcGxheX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIE1vbnRobHk6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAkCiAgICAgICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLnByaWNlLm1vbnRobHl9fQogICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wgc3Bhbi0xIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iYWNjLWxhYmVsIHBiLTE1Ij4KICAgICAgICAgICAgICBIb3VybHk6CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAkCiAgICAgICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLnByaWNlLmhvdXJseX19CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTUiPgogICAgICAgICAgICAgIFJBTToKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLm1lbW9yeUdifX0KICAgICAgICAgICAgR0IKICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICAgICAgQ1BVczoKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLnZjcHVzfX0KICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPGRpdiBjbGFzcz0iY29sIHNwYW4tMSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImFjYy1sYWJlbCBwYi0xNSI+CiAgICAgICAgICAgICAgU3RvcmFnZToKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIHt7dGhpcy5zZWxlY3RlZE5vZGVQb29sT2JqLmRpc2tHYn19CiAgICAgICAgICAgIEdCCiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwiPgogICAgICAgICAgICAgIENvdW50OgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPElucHV0CiAgICAgICAgICAgICAgQHR5cGU9Im51bWJlciIKICAgICAgICAgICAgICBAbWluPSIxIgogICAgICAgICAgICAgIEB2YWx1ZT17e3RoaXMuc2VsZWN0ZWROb2RlUG9vbE9iai5jb3VudH19CiAgICAgICAgICAgIC8+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImNvbCBzcGFuLTEiPgogICAgICAgICAgICA8ZGl2IGNsYXNzPSJhY2MtbGFiZWwgcGItMTAiPgogICAgICAgICAgICAgIEFjdGlvbnMKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgIDxidXR0b24KICAgICAgICAgICAgICBjbGFzcz0iYnRuIGJnLXByaW1hcnkgaWNvbi1idG4gcC0wIgogICAgICAgICAgICAgIHt7YWN0aW9uICJhZGRTZWxlY3RlZE5vZGVQb29sIn19CiAgICAgICAgICAgID4KICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iZGFya2VuIj4KICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJpY29uIGljb24tcGx1cyB0ZXh0LXNtYWxsIj48L2k+CiAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgIDxzcGFuPgogICAgICAgICAgICAgICAgQWRkIE5vZGUgUG9vbAogICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJlbWJlci12aWV3Ij4KICAgICAgICAgIDxkaXYgY2xhc3M9ImhlYWRlciBtdC0yMCBjbGVhcmZpeCI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InB1bGwtbGVmdCI+CiAgICAgICAgICAgICAgPGgyIGNsYXNzPSJtYi0wIj4KICAgICAgICAgICAgICAgIHt7dCAiY2x1c3Rlck5ldy5saW5vZGVsa2Uubm9kZVBvb2xzLmxhYmVsIn19CiAgICAgICAgICAgICAgPC9oMj4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDxkaXYgY2xhc3M9ImdyaWQgc29ydGFibGUtdGFibGUgZW1iZXItdmlldyI+CiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz0iZml4ZWQgZ3JpZCBzb3J0YWJsZS10YWJsZSI+CiAgICAgICAgICAgICAgPHRoZWFkPgogICAgICAgICAgICAgICAgPHRyIGNsYXNzPSJmaXhlZC1oZWFkZXIiPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIExhYmVsCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIE1vbnRobHkgJAogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBIb3VybHkgJAogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBSQU0gKEdCKQogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBDUFVzCiAgICAgICAgICAgICAgICAgICAgPC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgICA8dGggbGFzcz0ic29ydGFibGUgZW1iZXItdmlldyIgcm9sZT0iY29sdW1uaGVhZGVyIj4KICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij4KICAgICAgICAgICAgICAgICAgICAgIFN0b3JhZ2UgKEdCKQogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+CiAgICAgICAgICAgICAgICAgICAgICBDb3VudAogICAgICAgICAgICAgICAgICAgIDwvYT4KICAgICAgICAgICAgICAgICAgPC90aD4KICAgICAgICAgICAgICAgICAgPHRoIGxhc3M9InNvcnRhYmxlIGVtYmVyLXZpZXciIHJvbGU9ImNvbHVtbmhlYWRlciI+CiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+PC9hPgogICAgICAgICAgICAgICAgICA8L3RoPgogICAgICAgICAgICAgICAgPC90cj4KICAgICAgICAgICAgICA8L3RoZWFkPgogICAgICAgICAgICAgIDx0Ym9keT4KICAgICAgICAgICAgICAgIHt7I2VhY2ggdGhpcy5zZWxlY3RlZE5vZGVQb29sTGlzdCBhcyB8c2VsZWN0ZWROb2RlUG9vbHx9fQogICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9Im1haW4tcm93IGVtYmVyLXZpZXciPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5sYWJlbH19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wucHJpY2UubW9udGhseX19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wucHJpY2UuaG91cmx5fX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICAgIDx0ZD4KICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWROb2RlUG9vbC5tZW1vcnlHYn19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdGVkTm9kZVBvb2wudmNwdXN9fQogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPHRkPgogICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RlZE5vZGVQb29sLmRpc2tHYn19CiAgICAgICAgICAgICAgICAgICAgPC90ZD4KICAgICAgICAgICAgICAgICAgICA8dGQ+CiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQKICAgICAgICAgICAgICAgICAgICAgICAgQHR5cGU9Im51bWJlciIKICAgICAgICAgICAgICAgICAgICAgICAgQG1pbj0iMSIKICAgICAgICAgICAgICAgICAgICAgICAgQHZhbHVlPXt7c2VsZWN0ZWROb2RlUG9vbC5jb3VudH19CiAgICAgICAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgICAgICAgIDwvdGQ+CiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPSJ0ZXh0LWNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uCiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPSJidG4gYmctZXJyb3IgYnRuLXNtIgogICAgICAgICAgICAgICAgICAgICAgICB7e2FjdGlvbiAiZGVsZXRlTm9kZVBvb2wiIHNlbGVjdGVkTm9kZVBvb2wuaWR9fQogICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXRyYXNoIj48L2k+CiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAge3tlbHNlfX0KICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPSJtYWluLXJvdyBlbWJlci12aWV3Ij4KICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj0iOCIgY2xhc3M9InAtMTAgdGV4dC1jZW50ZXIiPgogICAgICAgICAgICAgICAgICAgICAge3t0ICJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5ub2RlUG9vbHMuZW1wdHkifX0KICAgICAgICAgICAgICAgICAgICA8L3RkPgogICAgICAgICAgICAgICAgICA8L3RyPgogICAgICAgICAgICAgICAge3svZWFjaH19CiAgICAgICAgICAgICAgPC90Ym9keT4KICAgICAgICAgICAgPC90YWJsZT4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICAgIHt7ISBzaG93IHNlbGVjdGVkIG5vZGUgcG9vbHMgZW5kIH19CiAgICAgIHt7L2FjY29yZGlvbi1saXN0LWl0ZW19fQogICAgICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAgICAgIHt7I2lmIChlcSBtb2RlICJlZGl0Iil9fQogICAgICAgIHt7c2F2ZS1jYW5jZWwKICAgICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5ub2RlUG9vbENvbmZpZy51cGRhdGUiCiAgICAgICAgICBzYXZpbmdMYWJlbD0iY2x1c3Rlck5ldy5saW5vZGVsa2Uubm9kZVBvb2xDb25maWcubG9hZGluZyIKICAgICAgICAgIHNhdmU9InVwZGF0ZUNsdXN0ZXIiCiAgICAgICAgICBjYW5jZWw9Y2xvc2UKICAgICAgICB9fQogICAgICB7e2Vsc2V9fQogICAgICAgIHt7c2F2ZS1jYW5jZWwKICAgICAgICAgIGJ0bkxhYmVsPSJjbHVzdGVyTmV3Lmxpbm9kZWxrZS5ub2RlUG9vbENvbmZpZy5uZXh0IgogICAgICAgICAgc2F2aW5nTGFiZWw9ImNsdXN0ZXJOZXcubGlub2RlbGtlLm5vZGVQb29sQ29uZmlnLmxvYWRpbmciCiAgICAgICAgICBzYXZlPSJjcmVhdGVDbHVzdGVyIgogICAgICAgICAgY2FuY2VsPWNsb3NlCiAgICAgICAgfX0KICAgICAge3svaWZ9fQogICAge3svaWZ9fQogIHt7L2FjY29yZGlvbi1saXN0fX0KPC9zZWN0aW9uPg==';
  var languages = {
    'en-us': {
      'clusterNew': {
        'neil': {
          'accessConfig': {
            'next': 'Proceed to Cluster Configuration',
            'loading': 'Verifying your access token',
            'title': 'TEST Linode Account Access Configuration',
            'description': 'Provide us with the access token that will be used to access your Linode account'
          },
          "accessToken": {
            "label": "Access Token",
            "placeholder": "The access token to use for accessing your Linode account",
            "required": "Access Token is required",
            "invalid": "Access Token is invalid"
          },
          'clusterConfig': {
            'next': 'Proceed to Node pool selection',
            'loading': 'Saving your cluster configuration',
            'title': 'Cluster Configuration',
            'description': 'Clunfigure your cluster'
          },
          "region": {
            "label": "Region",
            "placeholder": "Select a region for your cluster",
            "required": "Region is required"
          },
          "kubernetesVersion": {
            "label": "Kubernetes Version",
            "placeholder": "Select a kubernetes version for your cluster",
            "required": "Kubernetes Version is required"
          },
          "tags": {
            "newTag": "New tag",
            "label": "Tags",
            "placeholder": "Add a new tag"
          },
          "nodePoolConfig": {
            'next': 'Create',
            'loading': 'Creating your cluster',
            'title': 'Node Pool Configuration',
            'description': 'Configure your desired node pools',
            'update': "Update"
          },
          "selectedNodePoolType": {
            "label": "Select type",
            "placeholder": "Select a node pool type"
          },
          "nodePools": {
            "label": "Selected Node Pools",
            "required": "Please add at least one node pool",
            "empty": "Sorry, node pool list is empty",
            "countError": "All node counts must be greater than 0.",
            "placeholder": "Please select a node type to add"
          }
        }
      }
    }
  };
  var k8sVersions = [];
  var newTag = "";
  var selectedNodePoolType = "";
  var selectedNodePoolObj = {};
  var selectedNodePoolList = [];
  var computed = Ember.computed;
  var observer = Ember.observer;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  var all = Ember.RSVP.all;
  var next = Ember.run.next;
  exports.default = Ember.Component.extend(_clusterDriver.default, {
    driverName: 'neil',
    configField: 'neilEngineConfig',
    app: service(),
    router: service(),
    session: service(),
    intl: service(),
    step: 1,
    lanChanged: null,
    refresh: false,
    regions: (0, _fetch.default)("https://api.linode.com/v4/regions").then(function (resp) {
      return resp.json();
    }).then(function (data) {
      return data.data.filter(function (region) {
        return region.status === "ok" && region.capabilities.includes("Kubernetes");
      });
    }),
    nodeTypes: (0, _fetch.default)("https://api.linode.com/v4/linode/types").then(function (resp) {
      return resp.json();
    }).then(function (data) {
      return data.data.filter(function (type) {
        return type.class !== 'nanode' && type.class !== 'gpu';
      });
    }),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'shared/components/cluster-driver/driver-neil/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);

      var lang = get(this, 'session.language');
      get(this, 'intl.locale');
      this.loadLanguage(lang);
      var config = get(this, 'config');
      var configField = get(this, 'configField');
      set(this, "newTag", "");
      set(this, "selectedNodePoolType", "");
      set(this, "selectedNodePoolObj", {});
      set(this, "selectedNodePoolList", this.prefillSelectedNodePoolList());

      if (!config) {
        config = this.get('globalStore').createRecord({
          type: configField,
          name: "",
          label: "",
          description: "",
          accessToken: "",
          region: "us-central",
          kubernetesVersion: "1.18",
          tags: [],
          nodePools: []
        });
        set(this, 'cluster.neilEngineConfig', config);
      }
    },
    config: alias('cluster.neilEngineConfig'),
    actions: {
      verifyAccessToken: function verifyAccessToken(cb) {
        var _this = this;

        return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
          var token, errors, intl, _k8sVersions, k8sVersionsJson;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  token = get(_this, "cluster.neilEngineConfig.accessToken");
                  errors = [];
                  intl = get(_this, "intl");

                  if (token) {
                    _context.next = 9;
                    break;
                  }

                  errors.push(intl.t("clusterNew.linodelke.accessToken.required"));
                  set(_this, "errors", errors);
                  cb(false);
                  _context.next = 22;
                  break;

                case 9:
                  _context.next = 11;
                  return (0, _fetch.default)("https://api.linode.com/v4/lke/versions", {
                    method: "GET",
                    withCredentials: true,
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': "Bearer ".concat(token)
                    }
                  });

                case 11:
                  _k8sVersions = _context.sent;

                  if (!(_k8sVersions.status === 200)) {
                    _context.next = 21;
                    break;
                  }

                  _context.next = 15;
                  return _k8sVersions.json();

                case 15:
                  k8sVersionsJson = _context.sent;
                  set(_this, "k8sVersions", k8sVersionsJson.data);
                  set(_this, "step", 2);
                  cb(true);
                  _context.next = 22;
                  break;

                case 21:
                  if (_k8sVersions.status === 401) {
                    errors.push(intl.t("clusterNew.linodelke.accessToken.invalid"));
                    set(_this, "errors", errors);
                    cb(false);
                  }

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      },
      verifyClusterConfig: function verifyClusterConfig(cb) {
        var tags = get(this, "cluster.neilEngineConfig.tags");

        if (!tags) {
          set(this, "cluster.neilEngineConfig.tags", []);
        }

        set(this, "step", 3);
        cb(true);
      },
      createCluster: function createCluster(cb) {
        if (this.verifyNodePoolConfig()) {
          this.send("driverSave", cb);
        } else {
          cb(false);
        }
      },
      updateCluster: function updateCluster(cb) {
        if (this.verifyNodePoolConfig()) {
          this.send("driverSave", cb);
        } else {
          cb(false);
        }
      },
      cancelFunc: function cancelFunc(cb) {
        get(this, 'router').transitionTo('global-admin.clusters.index');
        cb(true);
      },
      addNewTag: function addNewTag() {
        var tags = get(this, "cluster.neilEngineConfig.tags") || [];
        var newTag = get(this, "newTag");

        if (newTag) {
          tags.pushObject(newTag);
          set(this, "cluster.neilEngineConfig.tags", tags);
          set(this, "newTag", "");
        }
      },
      deleteTag: function deleteTag(idx) {
        var tags = get(this, "cluster.neilEngineConfig.tags") || [];
        set(this, "cluster.neilEngineConfig.tags", tags.filter(function (tag, index) {
          return index !== idx;
        }));
      },
      addSelectedNodePool: function addSelectedNodePool() {
        var selectedNodePoolObj = get(this, "selectedNodePoolObj");
        var selectedNodePoolList = get(this, "selectedNodePoolList");

        if (selectedNodePoolObj.id) {
          selectedNodePoolList.pushObject(selectedNodePoolObj);
          set(this, "selectedNodePoolType", "");
          set(this, "selectedNodePoolObj", {});
        }
      },
      deleteNodePool: function deleteNodePool(id) {
        var selectedNodePoolList = get(this, "selectedNodePoolList");
        set(this, "selectedNodePoolList", selectedNodePoolList.filter(function (n) {
          return n.id !== id;
        }));
      }
    },
    validate: function validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'cluster.name')) {
        errors.push('Name is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    },
    languageChanged: observer('intl.locale', function () {
      var lang = get(this, 'intl.locale');

      if (lang) {
        this.loadLanguage(lang[0]);
      }
    }),
    loadLanguage: function loadLanguage(lang) {
      var _this2 = this;

      var translation = languages[lang] || languages['en-us'];
      var intl = get(this, 'intl');
      intl.addTranslations(lang, translation);
      intl.translationsFor(lang);
      set(this, 'refresh', false);
      next(function () {
        set(_this2, 'refresh', true);
        set(_this2, 'lanChanged', +new Date());
      });
    },
    clusterNameChanged: observer('cluster.name', function () {
      var clusterName = get(this, 'cluster.name');
      set(this, 'cluster.neilEngineConfig.name', clusterName);
      set(this, 'cluster.neilEngineConfig.label', clusterName);
    }),
    clusterDescriptionChanged: observer('cluster.description', function () {
      var clusterDescription = get(this, 'cluster.description');
      set(this, 'cluster.neilEngineConfig.description', clusterDescription);
    }),
    accessConfigTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.linodelke.accessConfig.title");
    }),
    accessConfigDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.linodelke.accessConfig.description");
    }),
    clusterConfigTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.linodelke.clusterConfig.title");
    }),
    clusterConfigDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.linodelke.clusterConfig.description");
    }),
    regionChoises: computed('regions', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var ans;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return get(this, "regions");

            case 2:
              ans = _context2.sent;
              return _context2.abrupt("return", ans.map(function (e) {
                return {
                  label: e.id,
                  value: e.id
                };
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }))),
    k8sVersionChoises: computed("k8sVersions.[]", function () {
      var k8sVersions = get(this, "k8sVersions");
      return k8sVersions.map(function (v) {
        return {
          label: v.id,
          value: v.id
        };
      });
    }),
    nodePoolConfigTitle: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.linodelke.nodePoolConfig.title");
    }),
    nodePoolConfigDetail: computed('intl.locale', 'langChanged', function () {
      return get(this, 'intl').t("clusterNew.linodelke.nodePoolConfig.description");
    }),
    nodePoolChoises: computed("nodeTypes.[]", "selectedNodePoolList.[]", _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var _this3 = this;

      var intl, ans, filteredAns;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              intl = get(this, 'intl');
              _context3.next = 3;
              return get(this, "nodeTypes");

            case 3:
              ans = _context3.sent;
              filteredAns = ans.filter(function (np) {
                var selectedNodePoolList = get(_this3, "selectedNodePoolList");
                var fnd = selectedNodePoolList.find(function (snp) {
                  return snp.id === np.id;
                });
                if (fnd) return false;else return true;
              }).map(function (np) {
                return {
                  label: np.label,
                  value: np.id
                };
              });
              return _context3.abrupt("return", [{
                label: intl.t("clusterNew.linodelke.nodePools.placeholder"),
                value: ""
              }].concat(_toConsumableArray(filteredAns)));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }))),
    setSelectedNodePoolObj: observer("selectedNodePoolType", _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var nodePoolTypes, selectedNodePoolType, ans;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return get(this, "nodeTypes");

            case 2:
              nodePoolTypes = _context4.sent;
              selectedNodePoolType = get(this, "selectedNodePoolType");

              if (selectedNodePoolType) {
                ans = nodePoolTypes.find(function (np) {
                  return np.id === selectedNodePoolType;
                });
                set(this, "selectedNodePoolObj", _objectSpread(_objectSpread({}, ans), {}, {
                  count: 1,
                  memoryGb: ans.memory / 1024,
                  diskGb: ans.disk / 1024
                }));
              } else set(this, "selectedNodePoolObj", {});

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }))),
    setNodePools: observer("selectedNodePoolList.@each.count", function () {
      var selectedNodePoolList = get(this, "selectedNodePoolList");
      var nodePools = selectedNodePoolList.map(function (np) {
        return "".concat(np.id, "=").concat(np.count);
      });
      set(this, "cluster.neilEngineConfig.nodePools", nodePools);
    }),
    verifyNodePoolConfig: function verifyNodePoolConfig() {
      var intl = get(this, 'intl');
      var selectedNodePoolList = get(this, "selectedNodePoolList");
      var errors = [];

      if (selectedNodePoolList.length === 0) {
        errors.push(intl.t("clusterNew.linodelke.nodePools.required"));
        set(this, "errors", errors);
        return false;
      } else {
        var fnd = selectedNodePoolList.find(function (np) {
          return np.count <= 0;
        });

        if (fnd) {
          errors.push(intl.t("clusterNew.linodelke.nodePools.countError"));
          set(this, "errors", errors);
          return false;
        }

        return true;
      }
    },
    prefillSelectedNodePoolListObserver: observer("nodeTypes.[]", function () {
      this.prefillSelectedNodePoolList();
    }),
    prefillSelectedNodePoolList: function prefillSelectedNodePoolList() {
      var _this4 = this;

      return _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
        var nodePools, nodePoolTypes;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                nodePools = get(_this4, "cluster.neilEngineConfig.nodePools");
                _context5.next = 3;
                return get(_this4, "nodeTypes");

              case 3:
                nodePoolTypes = _context5.sent;

                if (nodePools && nodePools.length) {
                  set(_this4, "selectedNodePoolList", nodePools.map(function (np) {
                    var _np$split = np.split("="),
                        _np$split2 = _slicedToArray(_np$split, 2),
                        npId = _np$split2[0],
                        cnt = _np$split2[1];

                    var fnd = nodePoolTypes.find(function (npt) {
                      return npt.id === npId;
                    });

                    if (fnd) {
                      return _objectSpread(_objectSpread({}, fnd), {}, {
                        count: cnt
                      });
                    } else return {
                      id: npId,
                      count: cnt,
                      label: npId
                    };
                  }));
                } else {
                  set(_this4, "selectedNodePoolList", []);
                }

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    }
  });
});
"use strict";

define("ui/components/cluster-driver/driver-neil/component", ["exports", "shared/components/cluster-driver/driver-neil/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define.alias('shared/components/cluster-driver/driver-neil/component', 'global-admin/components/cluster-driver/driver-neil/component');