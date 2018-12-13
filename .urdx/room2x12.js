"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _urdx = _interopRequireWildcard(require("urdx"));

var _materials = _interopRequireDefault(require("./materials"));

var _wall = _interopRequireDefault(require("./wall"));

var _floor = _interopRequireDefault(require("./floor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var EW_SIZE = 2;
var NS_SIZE = 12;
var FLOOR_THICK = 0.01;
var corners = {
  ne: {
    x: EW_SIZE / 2,
    y: NS_SIZE / 2
  },
  nw: {
    x: -EW_SIZE / 2,
    y: NS_SIZE / 2
  },
  se: {
    x: EW_SIZE / 2,
    y: -NS_SIZE / 2
  },
  sw: {
    x: -EW_SIZE / 2,
    y: -NS_SIZE / 2
  }
};

var room2x12 = _urdx.default.createElement(_floor.default, {
  name: "floor",
  size: Math.max(EW_SIZE, NS_SIZE),
  depth: FLOOR_THICK,
  height: 3.0,
  material: _materials.default.white
}, _urdx.default.createElement(_urdx.Materials, {
  materials: _materials.default
}), _urdx.default.createElement(_wall.default, {
  name: "north",
  from: corners.nw,
  to: corners.ne
}), _urdx.default.createElement(_wall.default, {
  name: "east",
  from: corners.ne,
  to: corners.se
}), _urdx.default.createElement(_wall.default, {
  name: "south",
  from: corners.sw,
  to: corners.se
}), _urdx.default.createElement(_wall.default, {
  name: "west",
  from: corners.nw,
  to: corners.sw
}));

var _default = room2x12;
exports.default = _default;