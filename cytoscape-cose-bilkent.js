(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cytoscapeCoseBilkent"] = factory();
	else
		root["cytoscapeCoseBilkent"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function LayoutConstants() {}

/**
 * Layout Quality
 */
LayoutConstants.PROOF_QUALITY = 0;
LayoutConstants.DEFAULT_QUALITY = 1;
LayoutConstants.DRAFT_QUALITY = 2;

/**
 * Default parameters
 */
LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED = false;
//LayoutConstants.DEFAULT_INCREMENTAL = true;
LayoutConstants.DEFAULT_INCREMENTAL = false;
LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT = true;
LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT = false;
LayoutConstants.DEFAULT_ANIMATION_PERIOD = 50;
LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES = false;

// -----------------------------------------------------------------------------
// Section: General other constants
// -----------------------------------------------------------------------------
/*
 * Margins of a graph to be applied on bouding rectangle of its contents. We
 * assume margins on all four sides to be uniform.
 */
LayoutConstants.DEFAULT_GRAPH_MARGIN = 15;

/*
 * Whether to consider labels in node dimensions or not
 */
LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = false;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_SIZE = 40;

/*
 * Default dimension of a non-compound node.
 */
LayoutConstants.SIMPLE_NODE_HALF_SIZE = LayoutConstants.SIMPLE_NODE_SIZE / 2;

/*
 * Empty compound node size. When a compound node is empty, its both
 * dimensions should be of this value.
 */
LayoutConstants.EMPTY_COMPOUND_NODE_SIZE = 40;

/*
 * Minimum length that an edge should take during layout
 */
LayoutConstants.MIN_EDGE_LENGTH = 1;

/*
 * World boundaries that layout operates on
 */
LayoutConstants.WORLD_BOUNDARY = 1000000;

/*
 * World boundaries that random positioning can be performed with
 */
LayoutConstants.INITIAL_WORLD_BOUNDARY = LayoutConstants.WORLD_BOUNDARY / 1000;

/*
 * Coordinates of the world center
 */
LayoutConstants.WORLD_CENTER_X = 1200;
LayoutConstants.WORLD_CENTER_Y = 900;

module.exports = LayoutConstants;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(0);

function FDLayoutConstants() {}

//FDLayoutConstants inherits static props in LayoutConstants
for (var prop in LayoutConstants) {
  FDLayoutConstants[prop] = LayoutConstants[prop];
}

FDLayoutConstants.MAX_ITERATIONS = 2500;

FDLayoutConstants.DEFAULT_EDGE_LENGTH = 50;
FDLayoutConstants.DEFAULT_SPRING_STRENGTH = 0.45;
FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = 4500.0;
FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = 0.4;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = 1.0;
FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = 3.8;
FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = 1.5;
FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION = true;
FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION = true;
FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = 0.5;
FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL = 100.0;
FDLayoutConstants.MAX_NODE_DISPLACEMENT = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL * 3;
FDLayoutConstants.MIN_REPULSION_DIST = FDLayoutConstants.DEFAULT_EDGE_LENGTH / 10.0;
FDLayoutConstants.CONVERGENCE_CHECK_PERIOD = 100;
FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = 0.1;
FDLayoutConstants.MIN_EDGE_LENGTH = 1;
FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD = 10;

module.exports = FDLayoutConstants;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Integer() {}

Integer.MAX_VALUE = 2147483647;
Integer.MIN_VALUE = -2147483648;

module.exports = Integer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(10);
var IGeometry = __webpack_require__(7);
var IMath = __webpack_require__(8);

function LEdge(source, target, vEdge) {
  LGraphObject.call(this, vEdge);

  this.isOverlapingSourceAndTarget = false;
  this.vGraphObject = vEdge;
  this.bendpoints = [];
  this.source = source;
  this.target = target;
}

LEdge.prototype = Object.create(LGraphObject.prototype);

for (var prop in LGraphObject) {
  LEdge[prop] = LGraphObject[prop];
}

LEdge.prototype.getSource = function () {
  return this.source;
};

LEdge.prototype.getTarget = function () {
  return this.target;
};

LEdge.prototype.isInterGraph = function () {
  return this.isInterGraph;
};

LEdge.prototype.getLength = function () {
  return this.length;
};

LEdge.prototype.isOverlapingSourceAndTarget = function () {
  return this.isOverlapingSourceAndTarget;
};

LEdge.prototype.getBendpoints = function () {
  return this.bendpoints;
};

LEdge.prototype.getLca = function () {
  return this.lca;
};

LEdge.prototype.getSourceInLca = function () {
  return this.sourceInLca;
};

LEdge.prototype.getTargetInLca = function () {
  return this.targetInLca;
};

LEdge.prototype.getOtherEnd = function (node) {
  if (this.source === node) {
    return this.target;
  } else if (this.target === node) {
    return this.source;
  } else {
    throw "Node is not incident with this edge";
  }
};

LEdge.prototype.getOtherEndInGraph = function (node, graph) {
  var otherEnd = this.getOtherEnd(node);
  var root = graph.getGraphManager().getRoot();

  while (true) {
    if (otherEnd.getOwner() == graph) {
      return otherEnd;
    }

    if (otherEnd.getOwner() == root) {
      break;
    }

    otherEnd = otherEnd.getOwner().getParent();
  }

  return null;
};

LEdge.prototype.updateLength = function () {
  var clipPointCoordinates = new Array(4);

  this.isOverlapingSourceAndTarget = IGeometry.getIntersection(this.target.getRect(), this.source.getRect(), clipPointCoordinates);

  if (!this.isOverlapingSourceAndTarget) {
    this.lengthX = clipPointCoordinates[0] - clipPointCoordinates[2];
    this.lengthY = clipPointCoordinates[1] - clipPointCoordinates[3];

    if (Math.abs(this.lengthX) < 1.0) {
      this.lengthX = IMath.sign(this.lengthX);
    }

    if (Math.abs(this.lengthY) < 1.0) {
      this.lengthY = IMath.sign(this.lengthY);
    }

    this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
  }
};

LEdge.prototype.updateLengthSimple = function () {
  this.lengthX = this.target.getCenterX() - this.source.getCenterX();
  this.lengthY = this.target.getCenterY() - this.source.getCenterY();

  if (Math.abs(this.lengthX) < 1.0) {
    this.lengthX = IMath.sign(this.lengthX);
  }

  if (Math.abs(this.lengthY) < 1.0) {
    this.lengthY = IMath.sign(this.lengthY);
  }

  this.length = Math.sqrt(this.lengthX * this.lengthX + this.lengthY * this.lengthY);
};

module.exports = LEdge;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(10);
var Integer = __webpack_require__(2);
var LayoutConstants = __webpack_require__(0);
var LGraphManager = __webpack_require__(9);
var LNode = __webpack_require__(11);
var LEdge = __webpack_require__(3);
var HashSet = __webpack_require__(6);
var RectangleD = __webpack_require__(14);
var Point = __webpack_require__(13);
var LinkedList = __webpack_require__(31);

function LGraph(parent, obj2, vGraph) {
  LGraphObject.call(this, vGraph);
  this.estimatedSize = Integer.MIN_VALUE;
  this.margin = LayoutConstants.DEFAULT_GRAPH_MARGIN;
  this.edges = [];
  this.nodes = [];
  this.isConnected = false;
  this.parent = parent;

  if (obj2 != null && obj2 instanceof LGraphManager) {
    this.graphManager = obj2;
  } else if (obj2 != null && obj2 instanceof Layout) {
    this.graphManager = obj2.graphManager;
  }
}

LGraph.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LGraph[prop] = LGraphObject[prop];
}

LGraph.prototype.getNodes = function () {
  return this.nodes;
};

LGraph.prototype.getEdges = function () {
  return this.edges;
};

LGraph.prototype.getGraphManager = function () {
  return this.graphManager;
};

LGraph.prototype.getParent = function () {
  return this.parent;
};

LGraph.prototype.getLeft = function () {
  return this.left;
};

LGraph.prototype.getRight = function () {
  return this.right;
};

LGraph.prototype.getTop = function () {
  return this.top;
};

LGraph.prototype.getBottom = function () {
  return this.bottom;
};

LGraph.prototype.isConnected = function () {
  return this.isConnected;
};

LGraph.prototype.add = function (obj1, sourceNode, targetNode) {
  if (sourceNode == null && targetNode == null) {
    var newNode = obj1;
    if (this.graphManager == null) {
      throw "Graph has no graph mgr!";
    }
    if (this.getNodes().indexOf(newNode) > -1) {
      throw "Node already in graph!";
    }
    newNode.owner = this;
    this.getNodes().push(newNode);

    return newNode;
  } else {
    var newEdge = obj1;
    if (!(this.getNodes().indexOf(sourceNode) > -1 && this.getNodes().indexOf(targetNode) > -1)) {
      throw "Source or target not in graph!";
    }

    if (!(sourceNode.owner == targetNode.owner && sourceNode.owner == this)) {
      throw "Both owners must be this graph!";
    }

    if (sourceNode.owner != targetNode.owner) {
      return null;
    }

    // set source and target
    newEdge.source = sourceNode;
    newEdge.target = targetNode;

    // set as intra-graph edge
    newEdge.isInterGraph = false;

    // add to graph edge list
    this.getEdges().push(newEdge);

    // add to incidency lists
    sourceNode.edges.push(newEdge);

    if (targetNode != sourceNode) {
      targetNode.edges.push(newEdge);
    }

    return newEdge;
  }
};

LGraph.prototype.remove = function (obj) {
  var node = obj;
  if (obj instanceof LNode) {
    if (node == null) {
      throw "Node is null!";
    }
    if (!(node.owner != null && node.owner == this)) {
      throw "Owner graph is invalid!";
    }
    if (this.graphManager == null) {
      throw "Owner graph manager is invalid!";
    }
    // remove incident edges first (make a copy to do it safely)
    var edgesToBeRemoved = node.edges.slice();
    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];

      if (edge.isInterGraph) {
        this.graphManager.remove(edge);
      } else {
        edge.source.owner.remove(edge);
      }
    }

    // now the node itself
    var index = this.nodes.indexOf(node);
    if (index == -1) {
      throw "Node not in owner node list!";
    }

    this.nodes.splice(index, 1);
  } else if (obj instanceof LEdge) {
    var edge = obj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }
    if (!(edge.source.owner != null && edge.target.owner != null && edge.source.owner == this && edge.target.owner == this)) {
      throw "Source and/or target owner is invalid!";
    }

    var sourceIndex = edge.source.edges.indexOf(edge);
    var targetIndex = edge.target.edges.indexOf(edge);
    if (!(sourceIndex > -1 && targetIndex > -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    edge.source.edges.splice(sourceIndex, 1);

    if (edge.target != edge.source) {
      edge.target.edges.splice(targetIndex, 1);
    }

    var index = edge.source.owner.getEdges().indexOf(edge);
    if (index == -1) {
      throw "Not in owner's edge list!";
    }

    edge.source.owner.getEdges().splice(index, 1);
  }
};

LGraph.prototype.updateLeftTop = function () {
  var top = Integer.MAX_VALUE;
  var left = Integer.MAX_VALUE;
  var nodeTop;
  var nodeLeft;
  var margin;

  var nodes = this.getNodes();
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeTop = lNode.getTop();
    nodeLeft = lNode.getLeft();

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (left > nodeLeft) {
      left = nodeLeft;
    }
  }

  // Do we have any nodes in this graph?
  if (top == Integer.MAX_VALUE) {
    return null;
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = left - margin;
  this.top = top - margin;

  // Apply the margins and return the result
  return new Point(this.left, this.top);
};

LGraph.prototype.updateBounds = function (recursive) {
  // calculate bounds
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;
  var margin;

  var nodes = this.nodes;
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];

    if (recursive && lNode.child != null) {
      lNode.updateBounds();
    }
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);
  if (left == Integer.MAX_VALUE) {
    this.left = this.parent.getLeft();
    this.right = this.parent.getRight();
    this.top = this.parent.getTop();
    this.bottom = this.parent.getBottom();
  }

  if (nodes[0].getParent().paddingLeft != undefined) {
    margin = nodes[0].getParent().paddingLeft;
  } else {
    margin = this.margin;
  }

  this.left = boundingRect.x - margin;
  this.right = boundingRect.x + boundingRect.width + margin;
  this.top = boundingRect.y - margin;
  this.bottom = boundingRect.y + boundingRect.height + margin;
};

LGraph.calculateBounds = function (nodes) {
  var left = Integer.MAX_VALUE;
  var right = -Integer.MAX_VALUE;
  var top = Integer.MAX_VALUE;
  var bottom = -Integer.MAX_VALUE;
  var nodeLeft;
  var nodeRight;
  var nodeTop;
  var nodeBottom;

  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    nodeLeft = lNode.getLeft();
    nodeRight = lNode.getRight();
    nodeTop = lNode.getTop();
    nodeBottom = lNode.getBottom();

    if (left > nodeLeft) {
      left = nodeLeft;
    }

    if (right < nodeRight) {
      right = nodeRight;
    }

    if (top > nodeTop) {
      top = nodeTop;
    }

    if (bottom < nodeBottom) {
      bottom = nodeBottom;
    }
  }

  var boundingRect = new RectangleD(left, top, right - left, bottom - top);

  return boundingRect;
};

LGraph.prototype.getInclusionTreeDepth = function () {
  if (this == this.graphManager.getRoot()) {
    return 1;
  } else {
    return this.parent.getInclusionTreeDepth();
  }
};

LGraph.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LGraph.prototype.calcEstimatedSize = function () {
  var size = 0;
  var nodes = this.nodes;
  var s = nodes.length;

  for (var i = 0; i < s; i++) {
    var lNode = nodes[i];
    size += lNode.calcEstimatedSize();
  }

  if (size == 0) {
    this.estimatedSize = LayoutConstants.EMPTY_COMPOUND_NODE_SIZE;
  } else {
    this.estimatedSize = size / Math.sqrt(this.nodes.length);
  }

  return this.estimatedSize;
};

LGraph.prototype.updateConnected = function () {
  var self = this;
  if (this.nodes.length == 0) {
    this.isConnected = true;
    return;
  }

  var toBeVisited = new LinkedList();
  var visited = new HashSet();
  var currentNode = this.nodes[0];
  var neighborEdges;
  var currentNeighbor;
  var childrenOfNode = currentNode.withChildren();
  childrenOfNode.forEach(function (node) {
    toBeVisited.push(node);
  });

  while (toBeVisited.length !== 0) {
    currentNode = toBeVisited.shift();
    visited.add(currentNode);

    // Traverse all neighbors of this node
    neighborEdges = currentNode.getEdges();
    var s = neighborEdges.length;
    for (var i = 0; i < s; i++) {
      var neighborEdge = neighborEdges[i];
      currentNeighbor = neighborEdge.getOtherEndInGraph(currentNode, this);

      // Add unvisited neighbors to the list to visit
      if (currentNeighbor != null && !visited.contains(currentNeighbor)) {
        var childrenOfNeighbor = currentNeighbor.withChildren();

        childrenOfNeighbor.forEach(function (node) {
          toBeVisited.push(node);
        });
      }
    }
  }

  this.isConnected = false;

  if (visited.size() >= this.nodes.length) {
    var noOfVisitedInThisGraph = 0;

    var s = visited.size();
    Object.keys(visited.set).forEach(function (visitedId) {
      var visitedNode = visited.set[visitedId];
      if (visitedNode.owner == self) {
        noOfVisitedInThisGraph++;
      }
    });

    if (noOfVisitedInThisGraph == this.nodes.length) {
      this.isConnected = true;
    }
  }
};

module.exports = LGraph;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function PointD(x, y) {
  if (x == null && y == null) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }
}

PointD.prototype.getX = function () {
  return this.x;
};

PointD.prototype.getY = function () {
  return this.y;
};

PointD.prototype.setX = function (x) {
  this.x = x;
};

PointD.prototype.setY = function (y) {
  this.y = y;
};

PointD.prototype.getDifference = function (pt) {
  return new DimensionD(this.x - pt.x, this.y - pt.y);
};

PointD.prototype.getCopy = function () {
  return new PointD(this.x, this.y);
};

PointD.prototype.translate = function (dim) {
  this.x += dim.width;
  this.y += dim.height;
  return this;
};

module.exports = PointD;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UniqueIDGeneretor = __webpack_require__(16);

function HashSet() {
  this.set = {};
}
;

HashSet.prototype.add = function (obj) {
  var theId = UniqueIDGeneretor.createID(obj);
  if (!this.contains(theId)) this.set[theId] = obj;
};

HashSet.prototype.remove = function (obj) {
  delete this.set[UniqueIDGeneretor.createID(obj)];
};

HashSet.prototype.clear = function () {
  this.set = {};
};

HashSet.prototype.contains = function (obj) {
  return this.set[UniqueIDGeneretor.createID(obj)] == obj;
};

HashSet.prototype.isEmpty = function () {
  return this.size() === 0;
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

//concats this.set to the given list
HashSet.prototype.addAllTo = function (list) {
  var keys = Object.keys(this.set);
  var length = keys.length;
  for (var i = 0; i < length; i++) {
    list.push(this.set[keys[i]]);
  }
};

HashSet.prototype.size = function () {
  return Object.keys(this.set).length;
};

HashSet.prototype.addAll = function (list) {
  var s = list.length;
  for (var i = 0; i < s; i++) {
    var v = list[i];
    this.add(v);
  }
};

module.exports = HashSet;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function IGeometry() {}

IGeometry.calcSeparationAmount = function (rectA, rectB, overlapAmount, separationBuffer) {
  if (!rectA.intersects(rectB)) {
    throw "assert failed";
  }
  var directions = new Array(2);
  IGeometry.decideDirectionsForOverlappingNodes(rectA, rectB, directions);
  overlapAmount[0] = Math.min(rectA.getRight(), rectB.getRight()) - Math.max(rectA.x, rectB.x);
  overlapAmount[1] = Math.min(rectA.getBottom(), rectB.getBottom()) - Math.max(rectA.y, rectB.y);
  // update the overlapping amounts for the following cases:
  if (rectA.getX() <= rectB.getX() && rectA.getRight() >= rectB.getRight()) {
    overlapAmount[0] += Math.min(rectB.getX() - rectA.getX(), rectA.getRight() - rectB.getRight());
  } else if (rectB.getX() <= rectA.getX() && rectB.getRight() >= rectA.getRight()) {
    overlapAmount[0] += Math.min(rectA.getX() - rectB.getX(), rectB.getRight() - rectA.getRight());
  }
  if (rectA.getY() <= rectB.getY() && rectA.getBottom() >= rectB.getBottom()) {
    overlapAmount[1] += Math.min(rectB.getY() - rectA.getY(), rectA.getBottom() - rectB.getBottom());
  } else if (rectB.getY() <= rectA.getY() && rectB.getBottom() >= rectA.getBottom()) {
    overlapAmount[1] += Math.min(rectA.getY() - rectB.getY(), rectB.getBottom() - rectA.getBottom());
  }

  // find slope of the line passes two centers
  var slope = Math.abs((rectB.getCenterY() - rectA.getCenterY()) / (rectB.getCenterX() - rectA.getCenterX()));
  // if centers are overlapped
  if (rectB.getCenterY() == rectA.getCenterY() && rectB.getCenterX() == rectA.getCenterX()) {
    // assume the slope is 1 (45 degree)
    slope = 1.0;
  }

  var moveByY = slope * overlapAmount[0];
  var moveByX = overlapAmount[1] / slope;
  if (overlapAmount[0] < moveByX) {
    moveByX = overlapAmount[0];
  } else {
    moveByY = overlapAmount[1];
  }
  // return half the amount so that if each rectangle is moved by these
  // amounts in opposite directions, overlap will be resolved
  overlapAmount[0] = -1 * directions[0] * (moveByX / 2 + separationBuffer);
  overlapAmount[1] = -1 * directions[1] * (moveByY / 2 + separationBuffer);
};

IGeometry.decideDirectionsForOverlappingNodes = function (rectA, rectB, directions) {
  if (rectA.getCenterX() < rectB.getCenterX()) {
    directions[0] = -1;
  } else {
    directions[0] = 1;
  }

  if (rectA.getCenterY() < rectB.getCenterY()) {
    directions[1] = -1;
  } else {
    directions[1] = 1;
  }
};

IGeometry.getIntersection2 = function (rectA, rectB, result) {
  //result[0-1] will contain clipPoint of rectA, result[2-3] will contain clipPoint of rectB
  var p1x = rectA.getCenterX();
  var p1y = rectA.getCenterY();
  var p2x = rectB.getCenterX();
  var p2y = rectB.getCenterY();

  //if two rectangles intersect, then clipping points are centers
  if (rectA.intersects(rectB)) {
    result[0] = p1x;
    result[1] = p1y;
    result[2] = p2x;
    result[3] = p2y;
    return true;
  }
  //variables for rectA
  var topLeftAx = rectA.getX();
  var topLeftAy = rectA.getY();
  var topRightAx = rectA.getRight();
  var bottomLeftAx = rectA.getX();
  var bottomLeftAy = rectA.getBottom();
  var bottomRightAx = rectA.getRight();
  var halfWidthA = rectA.getWidthHalf();
  var halfHeightA = rectA.getHeightHalf();
  //variables for rectB
  var topLeftBx = rectB.getX();
  var topLeftBy = rectB.getY();
  var topRightBx = rectB.getRight();
  var bottomLeftBx = rectB.getX();
  var bottomLeftBy = rectB.getBottom();
  var bottomRightBx = rectB.getRight();
  var halfWidthB = rectB.getWidthHalf();
  var halfHeightB = rectB.getHeightHalf();
  //flag whether clipping points are found
  var clipPointAFound = false;
  var clipPointBFound = false;

  // line is vertical
  if (p1x == p2x) {
    if (p1y > p2y) {
      result[0] = p1x;
      result[1] = topLeftAy;
      result[2] = p2x;
      result[3] = bottomLeftBy;
      return false;
    } else if (p1y < p2y) {
      result[0] = p1x;
      result[1] = bottomLeftAy;
      result[2] = p2x;
      result[3] = topLeftBy;
      return false;
    } else {
      //not line, return null;
    }
  }
  // line is horizontal
  else if (p1y == p2y) {
      if (p1x > p2x) {
        result[0] = topLeftAx;
        result[1] = p1y;
        result[2] = topRightBx;
        result[3] = p2y;
        return false;
      } else if (p1x < p2x) {
        result[0] = topRightAx;
        result[1] = p1y;
        result[2] = topLeftBx;
        result[3] = p2y;
        return false;
      } else {
        //not valid line, return null;
      }
    } else {
      //slopes of rectA's and rectB's diagonals
      var slopeA = rectA.height / rectA.width;
      var slopeB = rectB.height / rectB.width;

      //slope of line between center of rectA and center of rectB
      var slopePrime = (p2y - p1y) / (p2x - p1x);
      var cardinalDirectionA;
      var cardinalDirectionB;
      var tempPointAx;
      var tempPointAy;
      var tempPointBx;
      var tempPointBy;

      //determine whether clipping point is the corner of nodeA
      if (-slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = bottomLeftAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = topRightAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        }
      } else if (slopeA == slopePrime) {
        if (p1x > p2x) {
          result[0] = topLeftAx;
          result[1] = topLeftAy;
          clipPointAFound = true;
        } else {
          result[0] = bottomRightAx;
          result[1] = bottomLeftAy;
          clipPointAFound = true;
        }
      }

      //determine whether clipping point is the corner of nodeB
      if (-slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = bottomLeftBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = topRightBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        }
      } else if (slopeB == slopePrime) {
        if (p2x > p1x) {
          result[2] = topLeftBx;
          result[3] = topLeftBy;
          clipPointBFound = true;
        } else {
          result[2] = bottomRightBx;
          result[3] = bottomLeftBy;
          clipPointBFound = true;
        }
      }

      //if both clipping points are corners
      if (clipPointAFound && clipPointBFound) {
        return false;
      }

      //determine Cardinal Direction of rectangles
      if (p1x > p2x) {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 4);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 2);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 3);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 1);
        }
      } else {
        if (p1y > p2y) {
          cardinalDirectionA = IGeometry.getCardinalDirection(-slopeA, slopePrime, 1);
          cardinalDirectionB = IGeometry.getCardinalDirection(-slopeB, slopePrime, 3);
        } else {
          cardinalDirectionA = IGeometry.getCardinalDirection(slopeA, slopePrime, 2);
          cardinalDirectionB = IGeometry.getCardinalDirection(slopeB, slopePrime, 4);
        }
      }
      //calculate clipping Point if it is not found before
      if (!clipPointAFound) {
        switch (cardinalDirectionA) {
          case 1:
            tempPointAy = topLeftAy;
            tempPointAx = p1x + -halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 2:
            tempPointAx = bottomRightAx;
            tempPointAy = p1y + halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 3:
            tempPointAy = bottomLeftAy;
            tempPointAx = p1x + halfHeightA / slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
          case 4:
            tempPointAx = bottomLeftAx;
            tempPointAy = p1y + -halfWidthA * slopePrime;
            result[0] = tempPointAx;
            result[1] = tempPointAy;
            break;
        }
      }
      if (!clipPointBFound) {
        switch (cardinalDirectionB) {
          case 1:
            tempPointBy = topLeftBy;
            tempPointBx = p2x + -halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 2:
            tempPointBx = bottomRightBx;
            tempPointBy = p2y + halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 3:
            tempPointBy = bottomLeftBy;
            tempPointBx = p2x + halfHeightB / slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
          case 4:
            tempPointBx = bottomLeftBx;
            tempPointBy = p2y + -halfWidthB * slopePrime;
            result[2] = tempPointBx;
            result[3] = tempPointBy;
            break;
        }
      }
    }
  return false;
};

IGeometry.getCardinalDirection = function (slope, slopePrime, line) {
  if (slope > slopePrime) {
    return line;
  } else {
    return 1 + line % 4;
  }
};

IGeometry.getIntersection = function (s1, s2, f1, f2) {
  if (f2 == null) {
    return IGeometry.getIntersection2(s1, s2, f1);
  }
  var x1 = s1.x;
  var y1 = s1.y;
  var x2 = s2.x;
  var y2 = s2.y;
  var x3 = f1.x;
  var y3 = f1.y;
  var x4 = f2.x;
  var y4 = f2.y;
  var x, y; // intersection point
  var a1, a2, b1, b2, c1, c2; // coefficients of line eqns.
  var denom;

  a1 = y2 - y1;
  b1 = x1 - x2;
  c1 = x2 * y1 - x1 * y2; // { a1*x + b1*y + c1 = 0 is line 1 }

  a2 = y4 - y3;
  b2 = x3 - x4;
  c2 = x4 * y3 - x3 * y4; // { a2*x + b2*y + c2 = 0 is line 2 }

  denom = a1 * b2 - a2 * b1;

  if (denom == 0) {
    return null;
  }

  x = (b1 * c2 - b2 * c1) / denom;
  y = (a2 * c1 - a1 * c2) / denom;

  return new Point(x, y);
};

// -----------------------------------------------------------------------------
// Section: Class Constants
// -----------------------------------------------------------------------------
/**
 * Some useful pre-calculated constants
 */
IGeometry.HALF_PI = 0.5 * Math.PI;
IGeometry.ONE_AND_HALF_PI = 1.5 * Math.PI;
IGeometry.TWO_PI = 2.0 * Math.PI;
IGeometry.THREE_PI = 3.0 * Math.PI;

module.exports = IGeometry;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function IMath() {}

/**
 * This method returns the sign of the input value.
 */
IMath.sign = function (value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
};

IMath.floor = function (value) {
  return value < 0 ? Math.ceil(value) : Math.floor(value);
};

IMath.ceil = function (value) {
  return value < 0 ? Math.floor(value) : Math.ceil(value);
};

module.exports = IMath;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph;
var LEdge = __webpack_require__(3);

function LGraphManager(layout) {
  LGraph = __webpack_require__(4); // It may be better to initilize this out of this function but it gives an error (Right-hand side of 'instanceof' is not callable) now.
  this.layout = layout;

  this.graphs = [];
  this.edges = [];
}

LGraphManager.prototype.addRoot = function () {
  var ngraph = this.layout.newGraph();
  var nnode = this.layout.newNode(null);
  var root = this.add(ngraph, nnode);
  this.setRootGraph(root);
  return this.rootGraph;
};

LGraphManager.prototype.add = function (newGraph, parentNode, newEdge, sourceNode, targetNode) {
  //there are just 2 parameters are passed then it adds an LGraph else it adds an LEdge
  if (newEdge == null && sourceNode == null && targetNode == null) {
    if (newGraph == null) {
      throw "Graph is null!";
    }
    if (parentNode == null) {
      throw "Parent node is null!";
    }
    if (this.graphs.indexOf(newGraph) > -1) {
      throw "Graph already in this graph mgr!";
    }

    this.graphs.push(newGraph);

    if (newGraph.parent != null) {
      throw "Already has a parent!";
    }
    if (parentNode.child != null) {
      throw "Already has a child!";
    }

    newGraph.parent = parentNode;
    parentNode.child = newGraph;

    return newGraph;
  } else {
    //change the order of the parameters
    targetNode = newEdge;
    sourceNode = parentNode;
    newEdge = newGraph;
    var sourceGraph = sourceNode.getOwner();
    var targetGraph = targetNode.getOwner();

    if (!(sourceGraph != null && sourceGraph.getGraphManager() == this)) {
      throw "Source not in this graph mgr!";
    }
    if (!(targetGraph != null && targetGraph.getGraphManager() == this)) {
      throw "Target not in this graph mgr!";
    }

    if (sourceGraph == targetGraph) {
      newEdge.isInterGraph = false;
      return sourceGraph.add(newEdge, sourceNode, targetNode);
    } else {
      newEdge.isInterGraph = true;

      // set source and target
      newEdge.source = sourceNode;
      newEdge.target = targetNode;

      // add edge to inter-graph edge list
      if (this.edges.indexOf(newEdge) > -1) {
        throw "Edge already in inter-graph edge list!";
      }

      this.edges.push(newEdge);

      // add edge to source and target incidency lists
      if (!(newEdge.source != null && newEdge.target != null)) {
        throw "Edge source and/or target is null!";
      }

      if (!(newEdge.source.edges.indexOf(newEdge) == -1 && newEdge.target.edges.indexOf(newEdge) == -1)) {
        throw "Edge already in source and/or target incidency list!";
      }

      newEdge.source.edges.push(newEdge);
      newEdge.target.edges.push(newEdge);

      return newEdge;
    }
  }
};

LGraphManager.prototype.remove = function (lObj) {
  if (lObj instanceof LGraph) {
    var graph = lObj;
    if (graph.getGraphManager() != this) {
      throw "Graph not in this graph mgr";
    }
    if (!(graph == this.rootGraph || graph.parent != null && graph.parent.graphManager == this)) {
      throw "Invalid parent node!";
    }

    // first the edges (make a copy to do it safely)
    var edgesToBeRemoved = [];

    edgesToBeRemoved = edgesToBeRemoved.concat(graph.getEdges());

    var edge;
    var s = edgesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      edge = edgesToBeRemoved[i];
      graph.remove(edge);
    }

    // then the nodes (make a copy to do it safely)
    var nodesToBeRemoved = [];

    nodesToBeRemoved = nodesToBeRemoved.concat(graph.getNodes());

    var node;
    s = nodesToBeRemoved.length;
    for (var i = 0; i < s; i++) {
      node = nodesToBeRemoved[i];
      graph.remove(node);
    }

    // check if graph is the root
    if (graph == this.rootGraph) {
      this.setRootGraph(null);
    }

    // now remove the graph itself
    var index = this.graphs.indexOf(graph);
    this.graphs.splice(index, 1);

    // also reset the parent of the graph
    graph.parent = null;
  } else if (lObj instanceof LEdge) {
    edge = lObj;
    if (edge == null) {
      throw "Edge is null!";
    }
    if (!edge.isInterGraph) {
      throw "Not an inter-graph edge!";
    }
    if (!(edge.source != null && edge.target != null)) {
      throw "Source and/or target is null!";
    }

    // remove edge from source and target nodes' incidency lists

    if (!(edge.source.edges.indexOf(edge) != -1 && edge.target.edges.indexOf(edge) != -1)) {
      throw "Source and/or target doesn't know this edge!";
    }

    var index = edge.source.edges.indexOf(edge);
    edge.source.edges.splice(index, 1);
    index = edge.target.edges.indexOf(edge);
    edge.target.edges.splice(index, 1);

    // remove edge from owner graph manager's inter-graph edge list

    if (!(edge.source.owner != null && edge.source.owner.getGraphManager() != null)) {
      throw "Edge owner graph or owner graph manager is null!";
    }
    if (edge.source.owner.getGraphManager().edges.indexOf(edge) == -1) {
      throw "Not in owner graph manager's edge list!";
    }

    var index = edge.source.owner.getGraphManager().edges.indexOf(edge);
    edge.source.owner.getGraphManager().edges.splice(index, 1);
  }
};

LGraphManager.prototype.updateBounds = function () {
  this.rootGraph.updateBounds(true);
};

LGraphManager.prototype.getGraphs = function () {
  return this.graphs;
};

LGraphManager.prototype.getAllNodes = function () {
  if (this.allNodes == null) {
    var nodeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < s; i++) {
      nodeList = nodeList.concat(graphs[i].getNodes());
    }
    this.allNodes = nodeList;
  }
  return this.allNodes;
};

LGraphManager.prototype.resetAllNodes = function () {
  this.allNodes = null;
};

LGraphManager.prototype.resetAllEdges = function () {
  this.allEdges = null;
};

LGraphManager.prototype.resetAllNodesToApplyGravitation = function () {
  this.allNodesToApplyGravitation = null;
};

LGraphManager.prototype.getAllEdges = function () {
  if (this.allEdges == null) {
    var edgeList = [];
    var graphs = this.getGraphs();
    var s = graphs.length;
    for (var i = 0; i < graphs.length; i++) {
      edgeList = edgeList.concat(graphs[i].getEdges());
    }

    edgeList = edgeList.concat(this.edges);

    this.allEdges = edgeList;
  }
  return this.allEdges;
};

LGraphManager.prototype.getAllNodesToApplyGravitation = function () {
  return this.allNodesToApplyGravitation;
};

LGraphManager.prototype.setAllNodesToApplyGravitation = function (nodeList) {
  if (this.allNodesToApplyGravitation != null) {
    throw "assert failed";
  }

  this.allNodesToApplyGravitation = nodeList;
};

LGraphManager.prototype.getRoot = function () {
  return this.rootGraph;
};

LGraphManager.prototype.setRootGraph = function (graph) {
  if (graph.getGraphManager() != this) {
    throw "Root not in this graph mgr!";
  }

  this.rootGraph = graph;
  // root graph must have a root node associated with it for convenience
  if (graph.parent == null) {
    graph.parent = this.layout.newNode("Root node");
  }
};

LGraphManager.prototype.getLayout = function () {
  return this.layout;
};

LGraphManager.prototype.isOneAncestorOfOther = function (firstNode, secondNode) {
  if (!(firstNode != null && secondNode != null)) {
    throw "assert failed";
  }

  if (firstNode == secondNode) {
    return true;
  }
  // Is second node an ancestor of the first one?
  var ownerGraph = firstNode.getOwner();
  var parentNode;

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == secondNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);
  // Is first node an ancestor of the second one?
  ownerGraph = secondNode.getOwner();

  do {
    parentNode = ownerGraph.getParent();

    if (parentNode == null) {
      break;
    }

    if (parentNode == firstNode) {
      return true;
    }

    ownerGraph = parentNode.getOwner();
    if (ownerGraph == null) {
      break;
    }
  } while (true);

  return false;
};

LGraphManager.prototype.calcLowestCommonAncestors = function () {
  var edge;
  var sourceNode;
  var targetNode;
  var sourceAncestorGraph;
  var targetAncestorGraph;

  var edges = this.getAllEdges();
  var s = edges.length;
  for (var i = 0; i < s; i++) {
    edge = edges[i];

    sourceNode = edge.source;
    targetNode = edge.target;
    edge.lca = null;
    edge.sourceInLca = sourceNode;
    edge.targetInLca = targetNode;

    if (sourceNode == targetNode) {
      edge.lca = sourceNode.getOwner();
      continue;
    }

    sourceAncestorGraph = sourceNode.getOwner();

    while (edge.lca == null) {
      edge.targetInLca = targetNode;
      targetAncestorGraph = targetNode.getOwner();

      while (edge.lca == null) {
        if (targetAncestorGraph == sourceAncestorGraph) {
          edge.lca = targetAncestorGraph;
          break;
        }

        if (targetAncestorGraph == this.rootGraph) {
          break;
        }

        if (edge.lca != null) {
          throw "assert failed";
        }
        edge.targetInLca = targetAncestorGraph.getParent();
        targetAncestorGraph = edge.targetInLca.getOwner();
      }

      if (sourceAncestorGraph == this.rootGraph) {
        break;
      }

      if (edge.lca == null) {
        edge.sourceInLca = sourceAncestorGraph.getParent();
        sourceAncestorGraph = edge.sourceInLca.getOwner();
      }
    }

    if (edge.lca == null) {
      throw "assert failed";
    }
  }
};

LGraphManager.prototype.calcLowestCommonAncestor = function (firstNode, secondNode) {
  if (firstNode == secondNode) {
    return firstNode.getOwner();
  }
  var firstOwnerGraph = firstNode.getOwner();

  do {
    if (firstOwnerGraph == null) {
      break;
    }
    var secondOwnerGraph = secondNode.getOwner();

    do {
      if (secondOwnerGraph == null) {
        break;
      }

      if (secondOwnerGraph == firstOwnerGraph) {
        return secondOwnerGraph;
      }
      secondOwnerGraph = secondOwnerGraph.getParent().getOwner();
    } while (true);

    firstOwnerGraph = firstOwnerGraph.getParent().getOwner();
  } while (true);

  return firstOwnerGraph;
};

LGraphManager.prototype.calcInclusionTreeDepths = function (graph, depth) {
  if (graph == null && depth == null) {
    graph = this.rootGraph;
    depth = 1;
  }
  var node;

  var nodes = graph.getNodes();
  var s = nodes.length;
  for (var i = 0; i < s; i++) {
    node = nodes[i];
    node.inclusionTreeDepth = depth;

    if (node.child != null) {
      this.calcInclusionTreeDepths(node.child, depth + 1);
    }
  }
};

LGraphManager.prototype.includesInvalidEdge = function () {
  var edge;

  var s = this.edges.length;
  for (var i = 0; i < s; i++) {
    edge = this.edges[i];

    if (this.isOneAncestorOfOther(edge.source, edge.target)) {
      return true;
    }
  }
  return false;
};

module.exports = LGraphManager;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function LGraphObject(vGraphObject) {
  this.vGraphObject = vGraphObject;
}

module.exports = LGraphObject;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphObject = __webpack_require__(10);
var Integer = __webpack_require__(2);
var RectangleD = __webpack_require__(14);
var LayoutConstants = __webpack_require__(0);
var RandomSeed = __webpack_require__(26);
var PointD = __webpack_require__(5);
var HashSet = __webpack_require__(6);

function LNode(gm, loc, size, vNode) {
  //Alternative constructor 1 : LNode(LGraphManager gm, Point loc, Dimension size, Object vNode)
  if (size == null && vNode == null) {
    vNode = loc;
  }

  LGraphObject.call(this, vNode);

  //Alternative constructor 2 : LNode(Layout layout, Object vNode)
  if (gm.graphManager != null) gm = gm.graphManager;

  this.estimatedSize = Integer.MIN_VALUE;
  this.inclusionTreeDepth = Integer.MAX_VALUE;
  this.vGraphObject = vNode;
  this.edges = [];
  this.graphManager = gm;

  if (size != null && loc != null) this.rect = new RectangleD(loc.x, loc.y, size.width, size.height);else this.rect = new RectangleD();
}

LNode.prototype = Object.create(LGraphObject.prototype);
for (var prop in LGraphObject) {
  LNode[prop] = LGraphObject[prop];
}

LNode.prototype.getEdges = function () {
  return this.edges;
};

LNode.prototype.getChild = function () {
  return this.child;
};

LNode.prototype.getOwner = function () {
  //  if (this.owner != null) {
  //    if (!(this.owner == null || this.owner.getNodes().indexOf(this) > -1)) {
  //      throw "assert failed";
  //    }
  //  }

  return this.owner;
};

LNode.prototype.getWidth = function () {
  return this.rect.width;
};

LNode.prototype.setWidth = function (width) {
  this.rect.width = width;
};

LNode.prototype.getHeight = function () {
  return this.rect.height;
};

LNode.prototype.setHeight = function (height) {
  this.rect.height = height;
};

LNode.prototype.getCenterX = function () {
  return this.rect.x + this.rect.width / 2;
};

LNode.prototype.getCenterY = function () {
  return this.rect.y + this.rect.height / 2;
};

LNode.prototype.getCenter = function () {
  return new PointD(this.rect.x + this.rect.width / 2, this.rect.y + this.rect.height / 2);
};

LNode.prototype.getLocation = function () {
  return new PointD(this.rect.x, this.rect.y);
};

LNode.prototype.getRect = function () {
  return this.rect;
};

LNode.prototype.getDiagonal = function () {
  return Math.sqrt(this.rect.width * this.rect.width + this.rect.height * this.rect.height);
};

LNode.prototype.setRect = function (upperLeft, dimension) {
  this.rect.x = upperLeft.x;
  this.rect.y = upperLeft.y;
  this.rect.width = dimension.width;
  this.rect.height = dimension.height;
};

LNode.prototype.setCenter = function (cx, cy) {
  this.rect.x = cx - this.rect.width / 2;
  this.rect.y = cy - this.rect.height / 2;
};

LNode.prototype.setLocation = function (x, y) {
  this.rect.x = x;
  this.rect.y = y;
};

LNode.prototype.moveBy = function (dx, dy) {
  this.rect.x += dx;
  this.rect.y += dy;
};

LNode.prototype.getEdgeListToNode = function (to) {
  var edgeList = [];
  var edge;
  var self = this;

  self.edges.forEach(function (edge) {

    if (edge.target == to) {
      if (edge.source != self) throw "Incorrect edge source!";

      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getEdgesBetween = function (other) {
  var edgeList = [];
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (!(edge.source == self || edge.target == self)) throw "Incorrect edge source and/or target";

    if (edge.target == other || edge.source == other) {
      edgeList.push(edge);
    }
  });

  return edgeList;
};

LNode.prototype.getNeighborsList = function () {
  var neighbors = new HashSet();
  var edge;

  var self = this;
  self.edges.forEach(function (edge) {

    if (edge.source == self) {
      neighbors.add(edge.target);
    } else {
      if (edge.target != self) {
        throw "Incorrect incidency!";
      }

      neighbors.add(edge.source);
    }
  });

  return neighbors;
};

LNode.prototype.withChildren = function () {
  var withNeighborsList = new Set();
  var childNode;
  var children;

  withNeighborsList.add(this);

  if (this.child != null) {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];
      children = childNode.withChildren();
      children.forEach(function (node) {
        withNeighborsList.add(node);
      });
    }
  }

  return withNeighborsList;
};

LNode.prototype.getNoOfChildren = function () {
  var noOfChildren = 0;
  var childNode;

  if (this.child == null) {
    noOfChildren = 1;
  } else {
    var nodes = this.child.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      childNode = nodes[i];

      noOfChildren += childNode.getNoOfChildren();
    }
  }

  if (noOfChildren == 0) {
    noOfChildren = 1;
  }
  return noOfChildren;
};

LNode.prototype.getEstimatedSize = function () {
  if (this.estimatedSize == Integer.MIN_VALUE) {
    throw "assert failed";
  }
  return this.estimatedSize;
};

LNode.prototype.calcEstimatedSize = function () {
  if (this.child == null) {
    return this.estimatedSize = (this.rect.width + this.rect.height) / 2;
  } else {
    this.estimatedSize = this.child.calcEstimatedSize();
    this.rect.width = this.estimatedSize;
    this.rect.height = this.estimatedSize;

    return this.estimatedSize;
  }
};

LNode.prototype.scatter = function () {
  var randomCenterX;
  var randomCenterY;

  var minX = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxX = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterX = LayoutConstants.WORLD_CENTER_X + RandomSeed.nextDouble() * (maxX - minX) + minX;

  var minY = -LayoutConstants.INITIAL_WORLD_BOUNDARY;
  var maxY = LayoutConstants.INITIAL_WORLD_BOUNDARY;
  randomCenterY = LayoutConstants.WORLD_CENTER_Y + RandomSeed.nextDouble() * (maxY - minY) + minY;

  this.rect.x = randomCenterX;
  this.rect.y = randomCenterY;
};

LNode.prototype.updateBounds = function () {
  if (this.getChild() == null) {
    throw "assert failed";
  }
  if (this.getChild().getNodes().length != 0) {
    // wrap the children nodes by re-arranging the boundaries
    var childGraph = this.getChild();
    childGraph.updateBounds(true);

    this.rect.x = childGraph.getLeft();
    this.rect.y = childGraph.getTop();

    this.setWidth(childGraph.getRight() - childGraph.getLeft());
    this.setHeight(childGraph.getBottom() - childGraph.getTop());

    // Update compound bounds considering its label properties    
    if (LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS) {

      var width = childGraph.getRight() - childGraph.getLeft();
      var height = childGraph.getBottom() - childGraph.getTop();

      if (this.labelWidth > width) {
        this.rect.x -= (this.labelWidth - width) / 2;
        this.setWidth(this.labelWidth);
      }

      if (this.labelHeight > height) {
        if (this.labelPos == "center") {
          this.rect.y -= (this.labelHeight - height) / 2;
        } else if (this.labelPos == "top") {
          this.rect.y -= this.labelHeight - height;
        }
        this.setHeight(this.labelHeight);
      }
    }
  }
};

LNode.prototype.getInclusionTreeDepth = function () {
  if (this.inclusionTreeDepth == Integer.MAX_VALUE) {
    throw "assert failed";
  }
  return this.inclusionTreeDepth;
};

LNode.prototype.transform = function (trans) {
  var left = this.rect.x;

  if (left > LayoutConstants.WORLD_BOUNDARY) {
    left = LayoutConstants.WORLD_BOUNDARY;
  } else if (left < -LayoutConstants.WORLD_BOUNDARY) {
    left = -LayoutConstants.WORLD_BOUNDARY;
  }

  var top = this.rect.y;

  if (top > LayoutConstants.WORLD_BOUNDARY) {
    top = LayoutConstants.WORLD_BOUNDARY;
  } else if (top < -LayoutConstants.WORLD_BOUNDARY) {
    top = -LayoutConstants.WORLD_BOUNDARY;
  }

  var leftTop = new PointD(left, top);
  var vLeftTop = trans.inverseTransformPoint(leftTop);

  this.setLocation(vLeftTop.x, vLeftTop.y);
};

LNode.prototype.getLeft = function () {
  return this.rect.x;
};

LNode.prototype.getRight = function () {
  return this.rect.x + this.rect.width;
};

LNode.prototype.getTop = function () {
  return this.rect.y;
};

LNode.prototype.getBottom = function () {
  return this.rect.y + this.rect.height;
};

LNode.prototype.getParent = function () {
  if (this.owner == null) {
    return null;
  }

  return this.owner.getParent();
};

module.exports = LNode;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LayoutConstants = __webpack_require__(0);
var HashMap = __webpack_require__(25);
var LGraphManager = __webpack_require__(9);
var LNode = __webpack_require__(11);
var LEdge = __webpack_require__(3);
var LGraph = __webpack_require__(4);
var PointD = __webpack_require__(5);
var Transform = __webpack_require__(15);
var Emitter = __webpack_require__(30);
var HashSet = __webpack_require__(6);

function Layout(isRemoteUse) {
  Emitter.call(this);

  //Layout Quality: 0:proof, 1:default, 2:draft
  this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
  //Whether layout should create bendpoints as needed or not
  this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  //Whether layout should be incremental or not
  this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
  //Whether we animate from before to after layout node positions
  this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
  //Whether we animate the layout process or not
  this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
  //Number iterations that should be done between two successive animations
  this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
  /**
   * Whether or not leaf nodes (non-compound nodes) are of uniform sizes. When
   * they are, both spring and repulsion forces between two leaf nodes can be
   * calculated without the expensive clipping point calculations, resulting
   * in major speed-up.
   */
  this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  /**
   * This is used for creation of bendpoints by using dummy nodes and edges.
   * Maps an LEdge to its dummy bendpoint path.
   */
  this.edgeToDummyNodes = new HashMap();
  this.graphManager = new LGraphManager(this);
  this.isLayoutFinished = false;
  this.isSubLayout = false;
  this.isRemoteUse = false;

  if (isRemoteUse != null) {
    this.isRemoteUse = isRemoteUse;
  }
}

Layout.RANDOM_SEED = 1;

Layout.prototype = Object.create(Emitter.prototype);

Layout.prototype.getGraphManager = function () {
  return this.graphManager;
};

Layout.prototype.getAllNodes = function () {
  return this.graphManager.getAllNodes();
};

Layout.prototype.getAllEdges = function () {
  return this.graphManager.getAllEdges();
};

Layout.prototype.getAllNodesToApplyGravitation = function () {
  return this.graphManager.getAllNodesToApplyGravitation();
};

Layout.prototype.newGraphManager = function () {
  var gm = new LGraphManager(this);
  this.graphManager = gm;
  return gm;
};

Layout.prototype.newGraph = function (vGraph) {
  return new LGraph(null, this.graphManager, vGraph);
};

Layout.prototype.newNode = function (vNode) {
  return new LNode(this.graphManager, vNode);
};

Layout.prototype.newEdge = function (vEdge) {
  return new LEdge(null, null, vEdge);
};

Layout.prototype.checkLayoutSuccess = function () {
  return this.graphManager.getRoot() == null || this.graphManager.getRoot().getNodes().length == 0 || this.graphManager.includesInvalidEdge();
};

Layout.prototype.runLayout = function () {
  this.isLayoutFinished = false;

  if (this.tilingPreLayout) {
    this.tilingPreLayout();
  }

  this.initParameters();
  var isLayoutSuccessfull;

  if (this.checkLayoutSuccess()) {
    isLayoutSuccessfull = false;
  } else {
    isLayoutSuccessfull = this.layout();
  }

  if (LayoutConstants.ANIMATE === 'during') {
    // If this is a 'during' layout animation. Layout is not finished yet. 
    // We need to perform these in index.js when layout is really finished.
    return false;
  }

  if (isLayoutSuccessfull) {
    if (!this.isSubLayout) {
      this.doPostLayout();
    }
  }

  if (this.tilingPostLayout) {
    this.tilingPostLayout();
  }

  this.isLayoutFinished = true;

  return isLayoutSuccessfull;
};

/**
 * This method performs the operations required after layout.
 */
Layout.prototype.doPostLayout = function () {
  //assert !isSubLayout : "Should not be called on sub-layout!";
  // Propagate geometric changes to v-level objects
  if (!this.incremental) {
    this.transform();
  }
  this.update();
};

/**
 * This method updates the geometry of the target graph according to
 * calculated layout.
 */
Layout.prototype.update2 = function () {
  // update bend points
  if (this.createBendsAsNeeded) {
    this.createBendpointsFromDummyNodes();

    // reset all edges, since the topology has changed
    this.graphManager.resetAllEdges();
  }

  // perform edge, node and root updates if layout is not called
  // remotely
  if (!this.isRemoteUse) {
    // update all edges
    var edge;
    var allEdges = this.graphManager.getAllEdges();
    for (var i = 0; i < allEdges.length; i++) {
      edge = allEdges[i];
      //      this.update(edge);
    }

    // recursively update nodes
    var node;
    var nodes = this.graphManager.getRoot().getNodes();
    for (var i = 0; i < nodes.length; i++) {
      node = nodes[i];
      //      this.update(node);
    }

    // update root graph
    this.update(this.graphManager.getRoot());
  }
};

Layout.prototype.update = function (obj) {
  if (obj == null) {
    this.update2();
  } else if (obj instanceof LNode) {
    var node = obj;
    if (node.getChild() != null) {
      // since node is compound, recursively update child nodes
      var nodes = node.getChild().getNodes();
      for (var i = 0; i < nodes.length; i++) {
        update(nodes[i]);
      }
    }

    // if the l-level node is associated with a v-level graph object,
    // then it is assumed that the v-level node implements the
    // interface Updatable.
    if (node.vGraphObject != null) {
      // cast to Updatable without any type check
      var vNode = node.vGraphObject;

      // call the update method of the interface
      vNode.update(node);
    }
  } else if (obj instanceof LEdge) {
    var edge = obj;
    // if the l-level edge is associated with a v-level graph object,
    // then it is assumed that the v-level edge implements the
    // interface Updatable.

    if (edge.vGraphObject != null) {
      // cast to Updatable without any type check
      var vEdge = edge.vGraphObject;

      // call the update method of the interface
      vEdge.update(edge);
    }
  } else if (obj instanceof LGraph) {
    var graph = obj;
    // if the l-level graph is associated with a v-level graph object,
    // then it is assumed that the v-level object implements the
    // interface Updatable.

    if (graph.vGraphObject != null) {
      // cast to Updatable without any type check
      var vGraph = graph.vGraphObject;

      // call the update method of the interface
      vGraph.update(graph);
    }
  }
};

/**
 * This method is used to set all layout parameters to default values
 * determined at compile time.
 */
Layout.prototype.initParameters = function () {
  if (!this.isSubLayout) {
    this.layoutQuality = LayoutConstants.DEFAULT_QUALITY;
    this.animationDuringLayout = LayoutConstants.DEFAULT_ANIMATION_DURING_LAYOUT;
    this.animationPeriod = LayoutConstants.DEFAULT_ANIMATION_PERIOD;
    this.animationOnLayout = LayoutConstants.DEFAULT_ANIMATION_ON_LAYOUT;
    this.incremental = LayoutConstants.DEFAULT_INCREMENTAL;
    this.createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
    this.uniformLeafNodeSizes = LayoutConstants.DEFAULT_UNIFORM_LEAF_NODE_SIZES;
  }

  if (this.animationDuringLayout) {
    this.animationOnLayout = false;
  }
};

Layout.prototype.transform = function (newLeftTop) {
  if (newLeftTop == undefined) {
    this.transform(new PointD(0, 0));
  } else {
    // create a transformation object (from Eclipse to layout). When an
    // inverse transform is applied, we get upper-left coordinate of the
    // drawing or the root graph at given input coordinate (some margins
    // already included in calculation of left-top).

    var trans = new Transform();
    var leftTop = this.graphManager.getRoot().updateLeftTop();

    if (leftTop != null) {
      trans.setWorldOrgX(newLeftTop.x);
      trans.setWorldOrgY(newLeftTop.y);

      trans.setDeviceOrgX(leftTop.x);
      trans.setDeviceOrgY(leftTop.y);

      var nodes = this.getAllNodes();
      var node;

      for (var i = 0; i < nodes.length; i++) {
        node = nodes[i];
        node.transform(trans);
      }
    }
  }
};

Layout.prototype.positionNodesRandomly = function (graph) {

  if (graph == undefined) {
    //assert !this.incremental;
    this.positionNodesRandomly(this.getGraphManager().getRoot());
    this.getGraphManager().getRoot().updateBounds(true);
  } else {
    var lNode;
    var childGraph;

    var nodes = graph.getNodes();
    for (var i = 0; i < nodes.length; i++) {
      lNode = nodes[i];
      childGraph = lNode.getChild();

      if (childGraph == null) {
        lNode.scatter();
      } else if (childGraph.getNodes().length == 0) {
        lNode.scatter();
      } else {
        this.positionNodesRandomly(childGraph);
        lNode.updateBounds();
      }
    }
  }
};

/**
 * This method returns a list of trees where each tree is represented as a
 * list of l-nodes. The method returns a list of size 0 when:
 * - The graph is not flat or
 * - One of the component(s) of the graph is not a tree.
 */
Layout.prototype.getFlatForest = function () {
  var flatForest = [];
  var isForest = true;

  // Quick reference for all nodes in the graph manager associated with
  // this layout. The list should not be changed.
  var allNodes = this.graphManager.getRoot().getNodes();

  // First be sure that the graph is flat
  var isFlat = true;

  for (var i = 0; i < allNodes.length; i++) {
    if (allNodes[i].getChild() != null) {
      isFlat = false;
    }
  }

  // Return empty forest if the graph is not flat.
  if (!isFlat) {
    return flatForest;
  }

  // Run BFS for each component of the graph.

  var visited = new HashSet();
  var toBeVisited = [];
  var parents = new HashMap();
  var unProcessedNodes = [];

  unProcessedNodes = unProcessedNodes.concat(allNodes);

  // Each iteration of this loop finds a component of the graph and
  // decides whether it is a tree or not. If it is a tree, adds it to the
  // forest and continued with the next component.

  while (unProcessedNodes.length > 0 && isForest) {
    toBeVisited.push(unProcessedNodes[0]);

    // Start the BFS. Each iteration of this loop visits a node in a
    // BFS manner.
    while (toBeVisited.length > 0 && isForest) {
      //pool operation
      var currentNode = toBeVisited[0];
      toBeVisited.splice(0, 1);
      visited.add(currentNode);

      // Traverse all neighbors of this node
      var neighborEdges = currentNode.getEdges();

      for (var i = 0; i < neighborEdges.length; i++) {
        var currentNeighbor = neighborEdges[i].getOtherEnd(currentNode);

        // If BFS is not growing from this neighbor.
        if (parents.get(currentNode) != currentNeighbor) {
          // We haven't previously visited this neighbor.
          if (!visited.contains(currentNeighbor)) {
            toBeVisited.push(currentNeighbor);
            parents.put(currentNeighbor, currentNode);
          }
          // Since we have previously visited this neighbor and
          // this neighbor is not parent of currentNode, given
          // graph contains a component that is not tree, hence
          // it is not a forest.
          else {
              isForest = false;
              break;
            }
        }
      }
    }

    // The graph contains a component that is not a tree. Empty
    // previously found trees. The method will end.
    if (!isForest) {
      flatForest = [];
    }
    // Save currently visited nodes as a tree in our forest. Reset
    // visited and parents lists. Continue with the next component of
    // the graph, if any.
    else {
        var temp = [];
        visited.addAllTo(temp);
        flatForest.push(temp);
        //flatForest = flatForest.concat(temp);
        //unProcessedNodes.removeAll(visited);
        for (var i = 0; i < temp.length; i++) {
          var value = temp[i];
          var index = unProcessedNodes.indexOf(value);
          if (index > -1) {
            unProcessedNodes.splice(index, 1);
          }
        }
        visited = new HashSet();
        parents = new HashMap();
      }
  }

  return flatForest;
};

/**
 * This method creates dummy nodes (an l-level node with minimal dimensions)
 * for the given edge (one per bendpoint). The existing l-level structure
 * is updated accordingly.
 */
Layout.prototype.createDummyNodesForBendpoints = function (edge) {
  var dummyNodes = [];
  var prev = edge.source;

  var graph = this.graphManager.calcLowestCommonAncestor(edge.source, edge.target);

  for (var i = 0; i < edge.bendpoints.length; i++) {
    // create new dummy node
    var dummyNode = this.newNode(null);
    dummyNode.setRect(new Point(0, 0), new Dimension(1, 1));

    graph.add(dummyNode);

    // create new dummy edge between prev and dummy node
    var dummyEdge = this.newEdge(null);
    this.graphManager.add(dummyEdge, prev, dummyNode);

    dummyNodes.add(dummyNode);
    prev = dummyNode;
  }

  var dummyEdge = this.newEdge(null);
  this.graphManager.add(dummyEdge, prev, edge.target);

  this.edgeToDummyNodes.put(edge, dummyNodes);

  // remove real edge from graph manager if it is inter-graph
  if (edge.isInterGraph()) {
    this.graphManager.remove(edge);
  }
  // else, remove the edge from the current graph
  else {
      graph.remove(edge);
    }

  return dummyNodes;
};

/**
 * This method creates bendpoints for edges from the dummy nodes
 * at l-level.
 */
Layout.prototype.createBendpointsFromDummyNodes = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  edges = this.edgeToDummyNodes.keySet().concat(edges);

  for (var k = 0; k < edges.length; k++) {
    var lEdge = edges[k];

    if (lEdge.bendpoints.length > 0) {
      var path = this.edgeToDummyNodes.get(lEdge);

      for (var i = 0; i < path.length; i++) {
        var dummyNode = path[i];
        var p = new PointD(dummyNode.getCenterX(), dummyNode.getCenterY());

        // update bendpoint's location according to dummy node
        var ebp = lEdge.bendpoints.get(i);
        ebp.x = p.x;
        ebp.y = p.y;

        // remove the dummy node, dummy edges incident with this
        // dummy node is also removed (within the remove method)
        dummyNode.getOwner().remove(dummyNode);
      }

      // add the real edge to graph
      this.graphManager.add(lEdge, lEdge.source, lEdge.target);
    }
  }
};

Layout.transform = function (sliderValue, defaultValue, minDiv, maxMul) {
  if (minDiv != undefined && maxMul != undefined) {
    var value = defaultValue;

    if (sliderValue <= 50) {
      var minValue = defaultValue / minDiv;
      value -= (defaultValue - minValue) / 50 * (50 - sliderValue);
    } else {
      var maxValue = defaultValue * maxMul;
      value += (maxValue - defaultValue) / 50 * (sliderValue - 50);
    }

    return value;
  } else {
    var a, b;

    if (sliderValue <= 50) {
      a = 9.0 * defaultValue / 500.0;
      b = defaultValue / 10.0;
    } else {
      a = 9.0 * defaultValue / 50.0;
      b = -8 * defaultValue;
    }

    return a * sliderValue + b;
  }
};

/**
 * This method finds and returns the center of the given nodes, assuming
 * that the given nodes form a tree in themselves.
 */
Layout.findCenterOfTree = function (nodes) {
  var list = [];
  list = list.concat(nodes);

  var removedNodes = [];
  var remainingDegrees = new HashMap();
  var foundCenter = false;
  var centerNode = null;

  if (list.length == 1 || list.length == 2) {
    foundCenter = true;
    centerNode = list[0];
  }

  for (var i = 0; i < list.length; i++) {
    var node = list[i];
    var degree = node.getNeighborsList().size();
    remainingDegrees.put(node, node.getNeighborsList().size());

    if (degree == 1) {
      removedNodes.push(node);
    }
  }

  var tempList = [];
  tempList = tempList.concat(removedNodes);

  while (!foundCenter) {
    var tempList2 = [];
    tempList2 = tempList2.concat(tempList);
    tempList = [];

    for (var i = 0; i < list.length; i++) {
      var node = list[i];

      var index = list.indexOf(node);
      if (index >= 0) {
        list.splice(index, 1);
      }

      var neighbours = node.getNeighborsList();

      Object.keys(neighbours.set).forEach(function (j) {
        var neighbour = neighbours.set[j];
        if (removedNodes.indexOf(neighbour) < 0) {
          var otherDegree = remainingDegrees.get(neighbour);
          var newDegree = otherDegree - 1;

          if (newDegree == 1) {
            tempList.push(neighbour);
          }

          remainingDegrees.put(neighbour, newDegree);
        }
      });
    }

    removedNodes = removedNodes.concat(tempList);

    if (list.length == 1 || list.length == 2) {
      foundCenter = true;
      centerNode = list[0];
    }
  }

  return centerNode;
};

/**
 * During the coarsening process, this layout may be referenced by two graph managers
 * this setter function grants access to change the currently being used graph manager
 */
Layout.prototype.setGraphManager = function (gm) {
  this.graphManager = gm;
};

module.exports = Layout;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *This class is the javascript implementation of the Point.java class in jdk
 */
function Point(x, y, p) {
  this.x = null;
  this.y = null;
  if (x == null && y == null && p == null) {
    this.x = 0;
    this.y = 0;
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    this.x = x;
    this.y = y;
  } else if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.x = p.x;
    this.y = p.y;
  }
}

Point.prototype.getX = function () {
  return this.x;
};

Point.prototype.getY = function () {
  return this.y;
};

Point.prototype.getLocation = function () {
  return new Point(this.x, this.y);
};

Point.prototype.setLocation = function (x, y, p) {
  if (x.constructor.name == 'Point' && y == null && p == null) {
    p = x;
    this.setLocation(p.x, p.y);
  } else if (typeof x == 'number' && typeof y == 'number' && p == null) {
    //if both parameters are integer just move (x,y) location
    if (parseInt(x) == x && parseInt(y) == y) {
      this.move(x, y);
    } else {
      this.x = Math.floor(x + 0.5);
      this.y = Math.floor(y + 0.5);
    }
  }
};

Point.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.translate = function (dx, dy) {
  this.x += dx;
  this.y += dy;
};

Point.prototype.equals = function (obj) {
  if (obj.constructor.name == "Point") {
    var pt = obj;
    return this.x == pt.x && this.y == pt.y;
  }
  return this == obj;
};

Point.prototype.toString = function () {
  return new Point().constructor.name + "[x=" + this.x + ",y=" + this.y + "]";
};

module.exports = Point;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RectangleD(x, y, width, height) {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;

  if (x != null && y != null && width != null && height != null) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

RectangleD.prototype.getX = function () {
  return this.x;
};

RectangleD.prototype.setX = function (x) {
  this.x = x;
};

RectangleD.prototype.getY = function () {
  return this.y;
};

RectangleD.prototype.setY = function (y) {
  this.y = y;
};

RectangleD.prototype.getWidth = function () {
  return this.width;
};

RectangleD.prototype.setWidth = function (width) {
  this.width = width;
};

RectangleD.prototype.getHeight = function () {
  return this.height;
};

RectangleD.prototype.setHeight = function (height) {
  this.height = height;
};

RectangleD.prototype.getRight = function () {
  return this.x + this.width;
};

RectangleD.prototype.getBottom = function () {
  return this.y + this.height;
};

RectangleD.prototype.intersects = function (a) {
  if (this.getRight() < a.x) {
    return false;
  }

  if (this.getBottom() < a.y) {
    return false;
  }

  if (a.getRight() < this.x) {
    return false;
  }

  if (a.getBottom() < this.y) {
    return false;
  }

  return true;
};

RectangleD.prototype.getCenterX = function () {
  return this.x + this.width / 2;
};

RectangleD.prototype.getMinX = function () {
  return this.getX();
};

RectangleD.prototype.getMaxX = function () {
  return this.getX() + this.width;
};

RectangleD.prototype.getCenterY = function () {
  return this.y + this.height / 2;
};

RectangleD.prototype.getMinY = function () {
  return this.getY();
};

RectangleD.prototype.getMaxY = function () {
  return this.getY() + this.height;
};

RectangleD.prototype.getWidthHalf = function () {
  return this.width / 2;
};

RectangleD.prototype.getHeightHalf = function () {
  return this.height / 2;
};

module.exports = RectangleD;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PointD = __webpack_require__(5);

function Transform(x, y) {
  this.lworldOrgX = 0.0;
  this.lworldOrgY = 0.0;
  this.ldeviceOrgX = 0.0;
  this.ldeviceOrgY = 0.0;
  this.lworldExtX = 1.0;
  this.lworldExtY = 1.0;
  this.ldeviceExtX = 1.0;
  this.ldeviceExtY = 1.0;
}

Transform.prototype.getWorldOrgX = function () {
  return this.lworldOrgX;
};

Transform.prototype.setWorldOrgX = function (wox) {
  this.lworldOrgX = wox;
};

Transform.prototype.getWorldOrgY = function () {
  return this.lworldOrgY;
};

Transform.prototype.setWorldOrgY = function (woy) {
  this.lworldOrgY = woy;
};

Transform.prototype.getWorldExtX = function () {
  return this.lworldExtX;
};

Transform.prototype.setWorldExtX = function (wex) {
  this.lworldExtX = wex;
};

Transform.prototype.getWorldExtY = function () {
  return this.lworldExtY;
};

Transform.prototype.setWorldExtY = function (wey) {
  this.lworldExtY = wey;
};

/* Device related */

Transform.prototype.getDeviceOrgX = function () {
  return this.ldeviceOrgX;
};

Transform.prototype.setDeviceOrgX = function (dox) {
  this.ldeviceOrgX = dox;
};

Transform.prototype.getDeviceOrgY = function () {
  return this.ldeviceOrgY;
};

Transform.prototype.setDeviceOrgY = function (doy) {
  this.ldeviceOrgY = doy;
};

Transform.prototype.getDeviceExtX = function () {
  return this.ldeviceExtX;
};

Transform.prototype.setDeviceExtX = function (dex) {
  this.ldeviceExtX = dex;
};

Transform.prototype.getDeviceExtY = function () {
  return this.ldeviceExtY;
};

Transform.prototype.setDeviceExtY = function (dey) {
  this.ldeviceExtY = dey;
};

Transform.prototype.transformX = function (x) {
  var xDevice = 0.0;
  var worldExtX = this.lworldExtX;
  if (worldExtX != 0.0) {
    xDevice = this.ldeviceOrgX + (x - this.lworldOrgX) * this.ldeviceExtX / worldExtX;
  }

  return xDevice;
};

Transform.prototype.transformY = function (y) {
  var yDevice = 0.0;
  var worldExtY = this.lworldExtY;
  if (worldExtY != 0.0) {
    yDevice = this.ldeviceOrgY + (y - this.lworldOrgY) * this.ldeviceExtY / worldExtY;
  }

  return yDevice;
};

Transform.prototype.inverseTransformX = function (x) {
  var xWorld = 0.0;
  var deviceExtX = this.ldeviceExtX;
  if (deviceExtX != 0.0) {
    xWorld = this.lworldOrgX + (x - this.ldeviceOrgX) * this.lworldExtX / deviceExtX;
  }

  return xWorld;
};

Transform.prototype.inverseTransformY = function (y) {
  var yWorld = 0.0;
  var deviceExtY = this.ldeviceExtY;
  if (deviceExtY != 0.0) {
    yWorld = this.lworldOrgY + (y - this.ldeviceOrgY) * this.lworldExtY / deviceExtY;
  }
  return yWorld;
};

Transform.prototype.inverseTransformPoint = function (inPoint) {
  var outPoint = new PointD(this.inverseTransformX(inPoint.x), this.inverseTransformY(inPoint.y));
  return outPoint;
};

module.exports = Transform;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function UniqueIDGeneretor() {}

UniqueIDGeneretor.lastID = 0;

UniqueIDGeneretor.createID = function (obj) {
  if (UniqueIDGeneretor.isPrimitive(obj)) {
    return obj;
  }
  if (obj.uniqueID != null) {
    return obj.uniqueID;
  }
  obj.uniqueID = UniqueIDGeneretor.getString();
  UniqueIDGeneretor.lastID++;
  return obj.uniqueID;
};

UniqueIDGeneretor.getString = function (id) {
  if (id == null) id = UniqueIDGeneretor.lastID;
  return "Object#" + id + "";
};

UniqueIDGeneretor.isPrimitive = function (arg) {
  var type = typeof arg === "undefined" ? "undefined" : _typeof(arg);
  return arg == null || type != "object" && type != "function";
};

module.exports = UniqueIDGeneretor;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutConstants = __webpack_require__(1);

function CoSEConstants() {}

//CoSEConstants inherits static props in FDLayoutConstants
for (var prop in FDLayoutConstants) {
  CoSEConstants[prop] = FDLayoutConstants[prop];
}

CoSEConstants.DEFAULT_USE_MULTI_LEVEL_SCALING = false;
CoSEConstants.DEFAULT_RADIAL_SEPARATION = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
CoSEConstants.DEFAULT_COMPONENT_SEPERATION = 60;
CoSEConstants.TILE = true;
CoSEConstants.TILING_PADDING_VERTICAL = 10;
CoSEConstants.TILING_PADDING_HORIZONTAL = 10;

module.exports = CoSEConstants;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutEdge = __webpack_require__(23);

function CoSEEdge(source, target, vEdge) {
  FDLayoutEdge.call(this, source, target, vEdge);
}

CoSEEdge.prototype = Object.create(FDLayoutEdge.prototype);
for (var prop in FDLayoutEdge) {
  CoSEEdge[prop] = FDLayoutEdge[prop];
}

module.exports = CoSEEdge;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraph = __webpack_require__(4);

function CoSEGraph(parent, graphMgr, vGraph) {
  LGraph.call(this, parent, graphMgr, vGraph);
}

CoSEGraph.prototype = Object.create(LGraph.prototype);
for (var prop in LGraph) {
  CoSEGraph[prop] = LGraph[prop];
}

module.exports = CoSEGraph;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LGraphManager = __webpack_require__(9);

function CoSEGraphManager(layout) {
  LGraphManager.call(this, layout);
}

CoSEGraphManager.prototype = Object.create(LGraphManager.prototype);
for (var prop in LGraphManager) {
  CoSEGraphManager[prop] = LGraphManager[prop];
}

module.exports = CoSEGraphManager;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayoutNode = __webpack_require__(24);
var IMath = __webpack_require__(8);

function CoSENode(gm, loc, size, vNode) {
  FDLayoutNode.call(this, gm, loc, size, vNode);
}

CoSENode.prototype = Object.create(FDLayoutNode.prototype);
for (var prop in FDLayoutNode) {
  CoSENode[prop] = FDLayoutNode[prop];
}

CoSENode.prototype.move = function () {

  if (this.id === 'glyph9') {
    console.log(this.rect);
  }

  // clears the forces calculated for the node
  var clearForces = function clearForces() {
    this.springForceX = 0;
    this.springForceY = 0;
    this.repulsionForceX = 0;
    this.repulsionForceY = 0;
    this.gravitationForceX = 0;
    this.gravitationForceY = 0;
    this.displacementX = 0;
    this.displacementY = 0;
  };

  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor * (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor * (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;

  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement) {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement * IMath.sign(this.displacementY);
  }

  // whether to cancel displacement
  // discplacement could be canceled if any of the min/max borders is exceed
  var cancelDisplacement = false;

  // check horizontal borders
  if (this.minX !== undefined || this.maxX !== undefined) {
    // calculate the expected X coordinate after displacement is performed
    var expectedX = this.rect.x + this.displacementX;

    if (this.maxX !== undefined && expectedX + this.rect.width > this.maxX || this.minX !== undefined && expectedX < this.minX) {

      cancelDisplacement = true;
    }
  }

  // check vertical borders
  if (this.minY !== undefined || this.maxY !== undefined) {
    // calculate the expected Y coordinate after displacement is performed
    var expectedY = this.rect.y + this.displacementY;

    if (this.maxY !== undefined && expectedY + this.rect.width > this.maxY || this.minY !== undefined && expectedY < this.minY) {

      cancelDisplacement = true;
    }
  }

  // if displacement is canceled just clear the forces and return
  if (cancelDisplacement) {
    clearForces.call(this);
    return;
  }

  // a simple node, just move it
  if (this.child == null) {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // an empty compound node, again just move it
  else if (this.child.getNodes().length == 0) {
      this.moveBy(this.displacementX, this.displacementY);
    }
    // non-empty compound node, propogate movement to children as well
    else {
        this.propogateDisplacementToChildren(this.displacementX, this.displacementY);
      }

  layout.totalDisplacement += Math.abs(this.displacementX) + Math.abs(this.displacementY);

  if (this.id === 'glyph9') {
    console.log(this.rect);
  }

  clearForces.call(this);
};

CoSENode.prototype.propogateDisplacementToChildren = function (dX, dY) {
  var nodes = this.getChild().getNodes();
  var node;
  for (var i = 0; i < nodes.length; i++) {
    node = nodes[i];
    if (node.getChild() == null) {
      node.moveBy(dX, dY);
      node.displacementX += dX;
      node.displacementY += dY;
    } else {
      node.propogateDisplacementToChildren(dX, dY);
    }
  }
};

CoSENode.prototype.setPred1 = function (pred1) {
  this.pred1 = pred1;
};

CoSENode.prototype.getPred1 = function () {
  return pred1;
};

CoSENode.prototype.getPred2 = function () {
  return pred2;
};

CoSENode.prototype.setNext = function (next) {
  this.next = next;
};

CoSENode.prototype.getNext = function () {
  return next;
};

CoSENode.prototype.setProcessed = function (processed) {
  this.processed = processed;
};

CoSENode.prototype.isProcessed = function () {
  return processed;
};

module.exports = CoSENode;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Layout = __webpack_require__(12);
var FDLayoutConstants = __webpack_require__(1);
var LayoutConstants = __webpack_require__(0);
var IGeometry = __webpack_require__(7);
var IMath = __webpack_require__(8);
var Integer = __webpack_require__(2);

function FDLayout() {
  Layout.call(this);

  this.useSmartIdealEdgeLengthCalculation = FDLayoutConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
  this.idealEdgeLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
  this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
  this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
  this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
  this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
  this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
  this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  this.displacementThresholdPerNode = 3.0 * FDLayoutConstants.DEFAULT_EDGE_LENGTH / 100;
  this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.initialCoolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
  this.totalDisplacement = 0.0;
  this.oldTotalDisplacement = 0.0;
  this.maxIterations = FDLayoutConstants.MAX_ITERATIONS;
}

FDLayout.prototype = Object.create(Layout.prototype);

for (var prop in Layout) {
  FDLayout[prop] = Layout[prop];
}

FDLayout.prototype.initParameters = function () {
  Layout.prototype.initParameters.call(this, arguments);

  if (this.layoutQuality == LayoutConstants.DRAFT_QUALITY) {
    this.displacementThresholdPerNode += 0.30;
    this.maxIterations *= 0.8;
  } else if (this.layoutQuality == LayoutConstants.PROOF_QUALITY) {
    this.displacementThresholdPerNode -= 0.30;
    this.maxIterations *= 1.2;
  }

  this.totalIterations = 0;
  this.notAnimatedIterations = 0;

  this.useFRGridVariant = FDLayoutConstants.DEFAULT_USE_SMART_REPULSION_RANGE_CALCULATION;

  this.grid = [];
  // variables for tree reduction support
  this.prunedNodesAll = [];
  this.growTreeIterations = 0;
  this.afterGrowthIterations = 0;
  this.isTreeGrowing = false;
  this.isGrowthFinished = false;
};

FDLayout.prototype.calcIdealEdgeLengths = function () {
  var edge;
  var lcaDepth;
  var source;
  var target;
  var sizeOfSourceInLca;
  var sizeOfTargetInLca;

  var allEdges = this.getGraphManager().getAllEdges();
  for (var i = 0; i < allEdges.length; i++) {
    edge = allEdges[i];

    edge.idealLength = this.idealEdgeLength;

    if (edge.isInterGraph) {
      source = edge.getSource();
      target = edge.getTarget();

      sizeOfSourceInLca = edge.getSourceInLca().getEstimatedSize();
      sizeOfTargetInLca = edge.getTargetInLca().getEstimatedSize();

      if (this.useSmartIdealEdgeLengthCalculation) {
        edge.idealLength += sizeOfSourceInLca + sizeOfTargetInLca - 2 * LayoutConstants.SIMPLE_NODE_SIZE;
      }

      lcaDepth = edge.getLca().getInclusionTreeDepth();

      edge.idealLength += FDLayoutConstants.DEFAULT_EDGE_LENGTH * FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR * (source.getInclusionTreeDepth() + target.getInclusionTreeDepth() - 2 * lcaDepth);
    }
  }
};

FDLayout.prototype.initSpringEmbedder = function () {

  if (this.incremental) {
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT_INCREMENTAL;
  } else {
    this.coolingFactor = 1.0;
    this.initialCoolingFactor = 1.0;
    this.maxNodeDisplacement = FDLayoutConstants.MAX_NODE_DISPLACEMENT;
  }

  this.maxIterations = Math.max(this.getAllNodes().length * 5, this.maxIterations);

  this.totalDisplacementThreshold = this.displacementThresholdPerNode * this.getAllNodes().length;

  this.repulsionRange = this.calcRepulsionRange();
};

FDLayout.prototype.calcSpringForces = function () {
  var lEdges = this.getAllEdges();
  var edge;

  for (var i = 0; i < lEdges.length; i++) {
    edge = lEdges[i];

    this.calcSpringForce(edge, edge.idealLength);
  }
};

FDLayout.prototype.calcRepulsionForces = function () {
  var i, j;
  var nodeA, nodeB;
  var lNodes = this.getAllNodes();
  var processedNodeSet;

  if (this.useFRGridVariant) {
    if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && !this.isTreeGrowing && !this.isGrowthFinished) {
      this.updateGrid();
    }

    processedNodeSet = new Set();

    // calculate repulsion forces between each nodes and its surrounding
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];
      this.calculateRepulsionForceOfANode(nodeA, processedNodeSet);
      processedNodeSet.add(nodeA);
    }
  } else {
    for (i = 0; i < lNodes.length; i++) {
      nodeA = lNodes[i];

      for (j = i + 1; j < lNodes.length; j++) {
        nodeB = lNodes[j];

        // If both nodes are not members of the same graph, skip.
        if (nodeA.getOwner() != nodeB.getOwner()) {
          continue;
        }

        this.calcRepulsionForce(nodeA, nodeB);
      }
    }
  }
};

FDLayout.prototype.calcGravitationalForces = function () {
  var node;
  var lNodes = this.getAllNodesToApplyGravitation();

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    this.calcGravitationalForce(node);
  }
};

FDLayout.prototype.moveNodes = function () {
  var lNodes = this.getAllNodes();
  var node;

  for (var i = 0; i < lNodes.length; i++) {
    node = lNodes[i];
    node.move();
  }
};

FDLayout.prototype.calcSpringForce = function (edge, idealLength) {
  var sourceNode = edge.getSource();
  var targetNode = edge.getTarget();

  var length;
  var springForce;
  var springForceX;
  var springForceY;

  // Update edge length
  if (this.uniformLeafNodeSizes && sourceNode.getChild() == null && targetNode.getChild() == null) {
    edge.updateLengthSimple();
  } else {
    edge.updateLength();

    if (edge.isOverlapingSourceAndTarget) {
      return;
    }
  }

  length = edge.getLength();

  // Calculate spring forces
  springForce = this.springConstant * (length - idealLength);

  // Project force onto x and y axes
  springForceX = springForce * (edge.lengthX / length);
  springForceY = springForce * (edge.lengthY / length);

  // Apply forces on the end nodes
  sourceNode.springForceX += springForceX;
  sourceNode.springForceY += springForceY;
  targetNode.springForceX -= springForceX;
  targetNode.springForceY -= springForceY;
};

FDLayout.prototype.calcRepulsionForce = function (nodeA, nodeB) {
  var rectA = nodeA.getRect();
  var rectB = nodeB.getRect();
  var overlapAmount = new Array(2);
  var clipPoints = new Array(4);
  var distanceX;
  var distanceY;
  var distanceSquared;
  var distance;
  var repulsionForce;
  var repulsionForceX;
  var repulsionForceY;

  if (rectA.intersects(rectB)) // two nodes overlap
    {
      // calculate separation amount in x and y directions
      IGeometry.calcSeparationAmount(rectA, rectB, overlapAmount, FDLayoutConstants.DEFAULT_EDGE_LENGTH / 2.0);

      repulsionForceX = 2 * overlapAmount[0];
      repulsionForceY = 2 * overlapAmount[1];

      var childrenConstant = nodeA.noOfChildren * nodeB.noOfChildren / (nodeA.noOfChildren + nodeB.noOfChildren);

      // Apply forces on the two nodes
      nodeA.repulsionForceX -= childrenConstant * repulsionForceX;
      nodeA.repulsionForceY -= childrenConstant * repulsionForceY;
      nodeB.repulsionForceX += childrenConstant * repulsionForceX;
      nodeB.repulsionForceY += childrenConstant * repulsionForceY;
    } else // no overlap
    {
      // calculate distance

      if (this.uniformLeafNodeSizes && nodeA.getChild() == null && nodeB.getChild() == null) // simply base repulsion on distance of node centers
        {
          distanceX = rectB.getCenterX() - rectA.getCenterX();
          distanceY = rectB.getCenterY() - rectA.getCenterY();
        } else // use clipping points
        {
          IGeometry.getIntersection(rectA, rectB, clipPoints);

          distanceX = clipPoints[2] - clipPoints[0];
          distanceY = clipPoints[3] - clipPoints[1];
        }

      // No repulsion range. FR grid variant should take care of this.
      if (Math.abs(distanceX) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceX = IMath.sign(distanceX) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      if (Math.abs(distanceY) < FDLayoutConstants.MIN_REPULSION_DIST) {
        distanceY = IMath.sign(distanceY) * FDLayoutConstants.MIN_REPULSION_DIST;
      }

      distanceSquared = distanceX * distanceX + distanceY * distanceY;
      distance = Math.sqrt(distanceSquared);

      repulsionForce = this.repulsionConstant * nodeA.noOfChildren * nodeB.noOfChildren / distanceSquared;

      // Project force onto x and y axes
      repulsionForceX = repulsionForce * distanceX / distance;
      repulsionForceY = repulsionForce * distanceY / distance;

      // Apply forces on the two nodes    
      nodeA.repulsionForceX -= repulsionForceX;
      nodeA.repulsionForceY -= repulsionForceY;
      nodeB.repulsionForceX += repulsionForceX;
      nodeB.repulsionForceY += repulsionForceY;
    }
};

FDLayout.prototype.calcGravitationalForce = function (node) {
  var ownerGraph;
  var ownerCenterX;
  var ownerCenterY;
  var distanceX;
  var distanceY;
  var absDistanceX;
  var absDistanceY;
  var estimatedSize;
  ownerGraph = node.getOwner();

  ownerCenterX = (ownerGraph.getRight() + ownerGraph.getLeft()) / 2;
  ownerCenterY = (ownerGraph.getTop() + ownerGraph.getBottom()) / 2;
  distanceX = node.getCenterX() - ownerCenterX;
  distanceY = node.getCenterY() - ownerCenterY;
  absDistanceX = Math.abs(distanceX) + node.getWidth() / 2;
  absDistanceY = Math.abs(distanceY) + node.getHeight() / 2;

  if (node.getOwner() == this.graphManager.getRoot()) // in the root graph
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.gravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX;
        node.gravitationForceY = -this.gravityConstant * distanceY;
      }
    } else // inside a compound
    {
      estimatedSize = ownerGraph.getEstimatedSize() * this.compoundGravityRangeFactor;

      if (absDistanceX > estimatedSize || absDistanceY > estimatedSize) {
        node.gravitationForceX = -this.gravityConstant * distanceX * this.compoundGravityConstant;
        node.gravitationForceY = -this.gravityConstant * distanceY * this.compoundGravityConstant;
      }
    }
};

FDLayout.prototype.isConverged = function () {
  var converged;
  var oscilating = false;

  if (this.totalIterations > this.maxIterations / 3) {
    oscilating = Math.abs(this.totalDisplacement - this.oldTotalDisplacement) < 2;
  }

  converged = this.totalDisplacement < this.totalDisplacementThreshold;

  this.oldTotalDisplacement = this.totalDisplacement;

  return converged || oscilating;
};

FDLayout.prototype.animate = function () {
  if (this.animationDuringLayout && !this.isSubLayout) {
    if (this.notAnimatedIterations == this.animationPeriod) {
      this.update();
      this.notAnimatedIterations = 0;
    } else {
      this.notAnimatedIterations++;
    }
  }
};

// -----------------------------------------------------------------------------
// Section: FR-Grid Variant Repulsion Force Calculation
// -----------------------------------------------------------------------------

FDLayout.prototype.calcGrid = function (graph) {

  var sizeX = 0;
  var sizeY = 0;

  sizeX = parseInt(Math.ceil((graph.getRight() - graph.getLeft()) / this.repulsionRange));
  sizeY = parseInt(Math.ceil((graph.getBottom() - graph.getTop()) / this.repulsionRange));

  var grid = new Array(sizeX);

  for (var i = 0; i < sizeX; i++) {
    grid[i] = new Array(sizeY);
  }

  for (var i = 0; i < sizeX; i++) {
    for (var j = 0; j < sizeY; j++) {
      grid[i][j] = new Array();
    }
  }

  return grid;
};

FDLayout.prototype.addNodeToGrid = function (v, left, top) {

  var startX = 0;
  var finishX = 0;
  var startY = 0;
  var finishY = 0;

  startX = parseInt(Math.floor((v.getRect().x - left) / this.repulsionRange));
  finishX = parseInt(Math.floor((v.getRect().width + v.getRect().x - left) / this.repulsionRange));
  startY = parseInt(Math.floor((v.getRect().y - top) / this.repulsionRange));
  finishY = parseInt(Math.floor((v.getRect().height + v.getRect().y - top) / this.repulsionRange));

  for (var i = startX; i <= finishX; i++) {
    for (var j = startY; j <= finishY; j++) {
      this.grid[i][j].push(v);
      v.setGridCoordinates(startX, finishX, startY, finishY);
    }
  }
};

FDLayout.prototype.updateGrid = function () {
  var i;
  var nodeA;
  var lNodes = this.getAllNodes();

  this.grid = this.calcGrid(this.graphManager.getRoot());

  // put all nodes to proper grid cells
  for (i = 0; i < lNodes.length; i++) {
    nodeA = lNodes[i];
    this.addNodeToGrid(nodeA, this.graphManager.getRoot().getLeft(), this.graphManager.getRoot().getTop());
  }
};

FDLayout.prototype.calculateRepulsionForceOfANode = function (nodeA, processedNodeSet) {

  if (this.totalIterations % FDLayoutConstants.GRID_CALCULATION_CHECK_PERIOD == 1 && !this.isTreeGrowing && !this.isGrowthFinished || this.growTreeIterations % 10 == 1 && this.isTreeGrowing || this.afterGrowthIterations % 10 == 1 && this.isGrowthFinished) {
    var surrounding = new Set();
    nodeA.surrounding = new Array();
    var nodeB;
    var grid = this.grid;

    for (var i = nodeA.startX - 1; i < nodeA.finishX + 2; i++) {
      for (var j = nodeA.startY - 1; j < nodeA.finishY + 2; j++) {
        if (!(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length)) {
          for (var k = 0; k < grid[i][j].length; k++) {
            nodeB = grid[i][j][k];

            // If both nodes are not members of the same graph, 
            // or both nodes are the same, skip.
            if (nodeA.getOwner() != nodeB.getOwner() || nodeA == nodeB) {
              continue;
            }

            // check if the repulsion force between
            // nodeA and nodeB has already been calculated
            if (!processedNodeSet.has(nodeB) && !surrounding.has(nodeB)) {
              var distanceX = Math.abs(nodeA.getCenterX() - nodeB.getCenterX()) - (nodeA.getWidth() / 2 + nodeB.getWidth() / 2);
              var distanceY = Math.abs(nodeA.getCenterY() - nodeB.getCenterY()) - (nodeA.getHeight() / 2 + nodeB.getHeight() / 2);

              // if the distance between nodeA and nodeB 
              // is less then calculation range
              if (distanceX <= this.repulsionRange && distanceY <= this.repulsionRange) {
                //then add nodeB to surrounding of nodeA
                surrounding.add(nodeB);
              }
            }
          }
        }
      }
    }

    nodeA.surrounding = [].concat(_toConsumableArray(surrounding));
  }
  for (i = 0; i < nodeA.surrounding.length; i++) {
    this.calcRepulsionForce(nodeA, nodeA.surrounding[i]);
  }
};

FDLayout.prototype.calcRepulsionRange = function () {
  return 0.0;
};

// -----------------------------------------------------------------------------
// Section: Tree Reduction methods
// -----------------------------------------------------------------------------
// Reduce trees 
FDLayout.prototype.reduceTrees = function () {
  var prunedNodesAll = [];
  var containsLeaf = true;
  var node;

  while (containsLeaf) {
    var allNodes = this.graphManager.getAllNodes();
    var prunedNodesInStepTemp = [];
    containsLeaf = false;

    for (var i = 0; i < allNodes.length; i++) {
      node = allNodes[i];
      if (node.getEdges().length == 1 && !node.getEdges()[0].isInterGraph && node.getChild() == null) {
        prunedNodesInStepTemp.push([node, node.getEdges()[0], node.getOwner()]);
        containsLeaf = true;
      }
    }
    if (containsLeaf == true) {
      var prunedNodesInStep = [];
      for (var j = 0; j < prunedNodesInStepTemp.length; j++) {
        if (prunedNodesInStepTemp[j][0].getEdges().length == 1) {
          prunedNodesInStep.push(prunedNodesInStepTemp[j]);
          prunedNodesInStepTemp[j][0].getOwner().remove(prunedNodesInStepTemp[j][0]);
        }
      }
      prunedNodesAll.push(prunedNodesInStep);
      this.graphManager.resetAllNodes();
      this.graphManager.resetAllEdges();
    }
  }
  this.prunedNodesAll = prunedNodesAll;
};

// Grow tree one step 
FDLayout.prototype.growTree = function (prunedNodesAll) {
  var lengthOfPrunedNodesInStep = prunedNodesAll.length;
  var prunedNodesInStep = prunedNodesAll[lengthOfPrunedNodesInStep - 1];

  var nodeData;
  for (var i = 0; i < prunedNodesInStep.length; i++) {
    nodeData = prunedNodesInStep[i];

    this.findPlaceforPrunedNode(nodeData);

    nodeData[2].add(nodeData[0]);
    nodeData[2].add(nodeData[1], nodeData[1].source, nodeData[1].target);
  }

  prunedNodesAll.splice(prunedNodesAll.length - 1, 1);
  this.graphManager.resetAllNodes();
  this.graphManager.resetAllEdges();
};

// Find an appropriate position to replace pruned node, this method can be improved
FDLayout.prototype.findPlaceforPrunedNode = function (nodeData) {

  var gridForPrunedNode;
  var nodeToConnect;
  var prunedNode = nodeData[0];
  if (prunedNode == nodeData[1].source) {
    nodeToConnect = nodeData[1].target;
  } else {
    nodeToConnect = nodeData[1].source;
  }
  var startGridX = nodeToConnect.startX;
  var finishGridX = nodeToConnect.finishX;
  var startGridY = nodeToConnect.startY;
  var finishGridY = nodeToConnect.finishY;

  var upNodeCount = 0;
  var downNodeCount = 0;
  var rightNodeCount = 0;
  var leftNodeCount = 0;
  var controlRegions = [upNodeCount, rightNodeCount, downNodeCount, leftNodeCount];

  if (startGridY > 0) {
    for (var i = startGridX; i <= finishGridX; i++) {
      controlRegions[0] += this.grid[i][startGridY - 1].length + this.grid[i][startGridY].length - 1;
    }
  }
  if (finishGridX < this.grid.length - 1) {
    for (var i = startGridY; i <= finishGridY; i++) {
      controlRegions[1] += this.grid[finishGridX + 1][i].length + this.grid[finishGridX][i].length - 1;
    }
  }
  if (finishGridY < this.grid[0].length - 1) {
    for (var i = startGridX; i <= finishGridX; i++) {
      controlRegions[2] += this.grid[i][finishGridY + 1].length + this.grid[i][finishGridY].length - 1;
    }
  }
  if (startGridX > 0) {
    for (var i = startGridY; i <= finishGridY; i++) {
      controlRegions[3] += this.grid[startGridX - 1][i].length + this.grid[startGridX][i].length - 1;
    }
  }
  var min = Integer.MAX_VALUE;
  var minCount;
  var minIndex;
  for (var j = 0; j < controlRegions.length; j++) {
    if (controlRegions[j] < min) {
      min = controlRegions[j];
      minCount = 1;
      minIndex = j;
    } else if (controlRegions[j] == min) {
      minCount++;
    }
  }

  if (minCount == 3 && min == 0) {
    if (controlRegions[0] == 0 && controlRegions[1] == 0 && controlRegions[2] == 0) {
      gridForPrunedNode = 1;
    } else if (controlRegions[0] == 0 && controlRegions[1] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 0;
    } else if (controlRegions[0] == 0 && controlRegions[2] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 3;
    } else if (controlRegions[1] == 0 && controlRegions[2] == 0 && controlRegions[3] == 0) {
      gridForPrunedNode = 2;
    }
  } else if (minCount == 2 && min == 0) {
    var random = Math.floor(Math.random() * 2);
    if (controlRegions[0] == 0 && controlRegions[1] == 0) {
      ;
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 1;
      }
    } else if (controlRegions[0] == 0 && controlRegions[2] == 0) {
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 2;
      }
    } else if (controlRegions[0] == 0 && controlRegions[3] == 0) {
      if (random == 0) {
        gridForPrunedNode = 0;
      } else {
        gridForPrunedNode = 3;
      }
    } else if (controlRegions[1] == 0 && controlRegions[2] == 0) {
      if (random == 0) {
        gridForPrunedNode = 1;
      } else {
        gridForPrunedNode = 2;
      }
    } else if (controlRegions[1] == 0 && controlRegions[3] == 0) {
      if (random == 0) {
        gridForPrunedNode = 1;
      } else {
        gridForPrunedNode = 3;
      }
    } else {
      if (random == 0) {
        gridForPrunedNode = 2;
      } else {
        gridForPrunedNode = 3;
      }
    }
  } else if (minCount == 4 && min == 0) {
    var random = Math.floor(Math.random() * 4);
    gridForPrunedNode = random;
  } else {
    gridForPrunedNode = minIndex;
  }

  if (gridForPrunedNode == 0) {
    prunedNode.setCenter(nodeToConnect.getCenterX(), nodeToConnect.getCenterY() - nodeToConnect.getHeight() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - prunedNode.getHeight() / 2);
  } else if (gridForPrunedNode == 1) {
    prunedNode.setCenter(nodeToConnect.getCenterX() + nodeToConnect.getWidth() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + prunedNode.getWidth() / 2, nodeToConnect.getCenterY());
  } else if (gridForPrunedNode == 2) {
    prunedNode.setCenter(nodeToConnect.getCenterX(), nodeToConnect.getCenterY() + nodeToConnect.getHeight() / 2 + FDLayoutConstants.DEFAULT_EDGE_LENGTH + prunedNode.getHeight() / 2);
  } else {
    prunedNode.setCenter(nodeToConnect.getCenterX() - nodeToConnect.getWidth() / 2 - FDLayoutConstants.DEFAULT_EDGE_LENGTH - prunedNode.getWidth() / 2, nodeToConnect.getCenterY());
  }
};

module.exports = FDLayout;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LEdge = __webpack_require__(3);
var FDLayoutConstants = __webpack_require__(1);

function FDLayoutEdge(source, target, vEdge) {
  LEdge.call(this, source, target, vEdge);
  this.idealLength = FDLayoutConstants.DEFAULT_EDGE_LENGTH;
}

FDLayoutEdge.prototype = Object.create(LEdge.prototype);

for (var prop in LEdge) {
  FDLayoutEdge[prop] = LEdge[prop];
}

module.exports = FDLayoutEdge;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LNode = __webpack_require__(11);

function FDLayoutNode(gm, loc, size, vNode) {
  // alternative constructor is handled inside LNode
  LNode.call(this, gm, loc, size, vNode);
  //Spring, repulsion and gravitational forces acting on this node
  this.springForceX = 0;
  this.springForceY = 0;
  this.repulsionForceX = 0;
  this.repulsionForceY = 0;
  this.gravitationForceX = 0;
  this.gravitationForceY = 0;
  //Amount by which this node is to be moved in this iteration
  this.displacementX = 0;
  this.displacementY = 0;

  //Start and finish grid coordinates that this node is fallen into
  this.startX = 0;
  this.finishX = 0;
  this.startY = 0;
  this.finishY = 0;

  //Geometric neighbors of this node
  this.surrounding = [];
}

FDLayoutNode.prototype = Object.create(LNode.prototype);

for (var prop in LNode) {
  FDLayoutNode[prop] = LNode[prop];
}

FDLayoutNode.prototype.setGridCoordinates = function (_startX, _finishX, _startY, _finishY) {
  this.startX = _startX;
  this.finishX = _finishX;
  this.startY = _startY;
  this.finishY = _finishY;
};

module.exports = FDLayoutNode;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var UniqueIDGeneretor = __webpack_require__(16);

function HashMap() {
  this.map = {};
  this.keys = [];
}

HashMap.prototype.put = function (key, value) {
  var theId = UniqueIDGeneretor.createID(key);
  if (!this.contains(theId)) {
    this.map[theId] = value;
    this.keys.push(key);
  }
};

HashMap.prototype.contains = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[key] != null;
};

HashMap.prototype.get = function (key) {
  var theId = UniqueIDGeneretor.createID(key);
  return this.map[theId];
};

HashMap.prototype.keySet = function () {
  return this.keys;
};

module.exports = HashMap;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function RandomSeed() {}
RandomSeed.seed = 1;
RandomSeed.x = 0;

RandomSeed.nextDouble = function () {
  RandomSeed.x = Math.sin(RandomSeed.seed++) * 10000;
  return RandomSeed.x - Math.floor(RandomSeed.x);
};

module.exports = RandomSeed;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DimensionD = __webpack_require__(29);
var HashMap = __webpack_require__(25);
var HashSet = __webpack_require__(6);
var IGeometry = __webpack_require__(7);
var IMath = __webpack_require__(8);
var Integer = __webpack_require__(2);
var Point = __webpack_require__(13);
var PointD = __webpack_require__(5);
var RandomSeed = __webpack_require__(26);
var RectangleD = __webpack_require__(14);
var Transform = __webpack_require__(15);
var UniqueIDGeneretor = __webpack_require__(16);
var LGraphObject = __webpack_require__(10);
var LGraph = __webpack_require__(4);
var LEdge = __webpack_require__(3);
var LGraphManager = __webpack_require__(9);
var LNode = __webpack_require__(11);
var Layout = __webpack_require__(12);
var LayoutConstants = __webpack_require__(0);
var FDLayout = __webpack_require__(22);
var FDLayoutConstants = __webpack_require__(1);
var FDLayoutEdge = __webpack_require__(23);
var FDLayoutNode = __webpack_require__(24);
var CoSEConstants = __webpack_require__(17);
var CoSEEdge = __webpack_require__(18);
var CoSEGraph = __webpack_require__(19);
var CoSEGraphManager = __webpack_require__(20);
var CoSELayout = __webpack_require__(28);
var CoSENode = __webpack_require__(21);

var defaults = {
  // Called on `layoutready`
  ready: function ready() {},
  // Called on `layoutstop`
  stop: function stop() {},
  // include labels in node dimensions
  nodeDimensionsIncludeLabels: false,
  // number of ticks per frame; higher is faster but more jerky
  refresh: 30,
  // Whether to fit the network view after when done
  fit: true,
  // Padding on fit
  padding: 10,
  // Whether to enable incremental mode
  randomize: true,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: 4500,
  // Ideal edge (non nested) length
  idealEdgeLength: 50,
  // Divisor to compute edge forces
  edgeElasticity: 0.45,
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 0.1,
  // Gravity force (constant)
  gravity: 0.25,
  // Maximum number of iterations to perform
  numIter: 2500,
  // For enabling tiling
  tile: true,
  // Type of layout animation. The option set is {'during', 'end', false}
  animate: 'end',
  // Duration for animate:end
  animationDuration: 500,
  // Represents the amount of the vertical space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingVertical: 10,
  // Represents the amount of the horizontal space to put between the zero degree members during the tiling operation(can also be a function)
  tilingPaddingHorizontal: 10,
  // Gravity range (constant) for compounds
  gravityRangeCompound: 1.5,
  // Gravity force (constant) for compounds
  gravityCompound: 1.0,
  // Gravity range (constant)
  gravityRange: 3.8,
  // Initial cooling factor for incremental layout
  initialEnergyOnIncremental: 0.5
};

function extend(defaults, options) {
  var obj = {};

  for (var i in defaults) {
    obj[i] = defaults[i];
  }

  for (var i in options) {
    obj[i] = options[i];
  }

  return obj;
};

function _CoSELayout(_options) {
  this.options = extend(defaults, _options);
  getUserOptions(this.options);
}

var getUserOptions = function getUserOptions(options) {
  if (options.nodeRepulsion != null) CoSEConstants.DEFAULT_REPULSION_STRENGTH = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH = options.nodeRepulsion;
  if (options.idealEdgeLength != null) CoSEConstants.DEFAULT_EDGE_LENGTH = FDLayoutConstants.DEFAULT_EDGE_LENGTH = options.idealEdgeLength;
  if (options.edgeElasticity != null) CoSEConstants.DEFAULT_SPRING_STRENGTH = FDLayoutConstants.DEFAULT_SPRING_STRENGTH = options.edgeElasticity;
  if (options.nestingFactor != null) CoSEConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = FDLayoutConstants.PER_LEVEL_IDEAL_EDGE_LENGTH_FACTOR = options.nestingFactor;
  if (options.gravity != null) CoSEConstants.DEFAULT_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH = options.gravity;
  if (options.numIter != null) CoSEConstants.MAX_ITERATIONS = FDLayoutConstants.MAX_ITERATIONS = options.numIter;
  if (options.gravityRange != null) CoSEConstants.DEFAULT_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR = options.gravityRange;
  if (options.gravityCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH = options.gravityCompound;
  if (options.gravityRangeCompound != null) CoSEConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR = options.gravityRangeCompound;
  if (options.initialEnergyOnIncremental != null) CoSEConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL = options.initialEnergyOnIncremental;

  CoSEConstants.NODE_DIMENSIONS_INCLUDE_LABELS = FDLayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = LayoutConstants.NODE_DIMENSIONS_INCLUDE_LABELS = options.nodeDimensionsIncludeLabels;
  CoSEConstants.DEFAULT_INCREMENTAL = FDLayoutConstants.DEFAULT_INCREMENTAL = LayoutConstants.DEFAULT_INCREMENTAL = !options.randomize;
  CoSEConstants.ANIMATE = FDLayoutConstants.ANIMATE = LayoutConstants.ANIMATE = options.animate;
  CoSEConstants.TILE = options.tile;
  CoSEConstants.TILING_PADDING_VERTICAL = typeof options.tilingPaddingVertical === 'function' ? options.tilingPaddingVertical.call() : options.tilingPaddingVertical;
  CoSEConstants.TILING_PADDING_HORIZONTAL = typeof options.tilingPaddingHorizontal === 'function' ? options.tilingPaddingHorizontal.call() : options.tilingPaddingHorizontal;
};

_CoSELayout.prototype.run = function () {
  var ready;
  var frameId;
  var options = this.options;
  var idToLNode = this.idToLNode = {};
  var layout = this.layout = new CoSELayout();
  var self = this;

  self.stopped = false;

  this.cy = this.options.cy;

  this.cy.trigger({ type: 'layoutstart', layout: this });

  var gm = layout.newGraphManager();
  this.gm = gm;

  var nodes = this.options.eles.nodes();
  var edges = this.options.eles.edges();

  this.root = gm.addRoot();
  this.processChildrenList(this.root, this.getTopMostNodes(nodes), layout);

  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    var sourceNode = this.idToLNode[edge.data("source")];
    var targetNode = this.idToLNode[edge.data("target")];
    if (sourceNode.getEdgesBetween(targetNode).length == 0) {
      var e1 = gm.add(layout.newEdge(), sourceNode, targetNode);
      e1.id = edge.id();
    }
  }

  var getPositions = function getPositions(ele, i) {
    if (typeof ele === "number") {
      ele = i;
    }
    var theId = ele.data('id');
    var lNode = self.idToLNode[theId];

    return {
      x: lNode.getRect().getCenterX(),
      y: lNode.getRect().getCenterY()
    };
  };

  /*
   * Reposition nodes in iterations animatedly
   */
  var iterateAnimated = function iterateAnimated() {
    // Thigs to perform after nodes are repositioned on screen
    var afterReposition = function afterReposition() {
      if (options.fit) {
        options.cy.fit(options.eles.nodes(), options.padding);
      }

      if (!ready) {
        ready = true;
        self.cy.one('layoutready', options.ready);
        self.cy.trigger({ type: 'layoutready', layout: self });
      }
    };

    var ticksPerFrame = self.options.refresh;
    var isDone;

    for (var i = 0; i < ticksPerFrame && !isDone; i++) {
      isDone = self.stopped || self.layout.tick();
    }

    // If layout is done
    if (isDone) {
      // If the layout is not a sublayout and it is successful perform post layout.
      if (layout.checkLayoutSuccess() && !layout.isSubLayout) {
        layout.doPostLayout();
      }

      // If layout has a tilingPostLayout function property call it.
      if (layout.tilingPostLayout) {
        layout.tilingPostLayout();
      }

      layout.isLayoutFinished = true;

      self.options.eles.nodes().positions(getPositions);

      afterReposition();

      // trigger layoutstop when the layout stops (e.g. finishes)
      self.cy.one('layoutstop', self.options.stop);
      self.cy.trigger({ type: 'layoutstop', layout: self });

      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      ready = false;
      return;
    }

    var animationData = self.layout.getPositionsData(); // Get positions of layout nodes note that all nodes may not be layout nodes because of tiling

    // Position nodes, for the nodes whose id does not included in data (because they are removed from their parents and included in dummy compounds)
    // use position of their ancestors or dummy ancestors
    options.eles.nodes().positions(function (ele, i) {
      if (typeof ele === "number") {
        ele = i;
      }
      var theId = ele.id();
      var pNode = animationData[theId];
      var temp = ele;
      // If pNode is undefined search until finding position data of its first ancestor (It may be dummy as well)
      while (pNode == null) {
        pNode = animationData[temp.data('parent')] || animationData['DummyCompound_' + temp.data('parent')];
        animationData[theId] = pNode;
        temp = temp.parent()[0];
        if (temp == undefined) {
          break;
        }
      }
      if (pNode != null) {
        return {
          x: pNode.x,
          y: pNode.y
        };
      } else {
        return {
          x: ele.x,
          y: ele.y
        };
      }
    });

    afterReposition();

    frameId = requestAnimationFrame(iterateAnimated);
  };

  /*
  * Listen 'layoutstarted' event and start animated iteration if animate option is 'during'
  */
  layout.addListener('layoutstarted', function () {
    if (self.options.animate === 'during') {
      frameId = requestAnimationFrame(iterateAnimated);
    }
  });

  layout.runLayout(); // Run cose layout

  /*
   * If animate option is not 'during' ('end' or false) perform these here (If it is 'during' similar things are already performed)
   */
  if (this.options.animate !== "during") {
    self.options.eles.nodes().not(":parent").layoutPositions(self, self.options, getPositions); // Use layout positions to reposition the nodes it considers the options parameter
    ready = false;
  }

  return this; // chaining
};

//Get the top most ones of a list of nodes
_CoSELayout.prototype.getTopMostNodes = function (nodes) {
  var nodesMap = {};
  for (var i = 0; i < nodes.length; i++) {
    nodesMap[nodes[i].id()] = true;
  }
  var roots = nodes.filter(function (ele, i) {
    if (typeof ele === "number") {
      ele = i;
    }
    var parent = ele.parent()[0];
    while (parent != null) {
      if (nodesMap[parent.id()]) {
        return false;
      }
      parent = parent.parent()[0];
    }
    return true;
  });

  return roots;
};

_CoSELayout.prototype.processChildrenList = function (parent, children, layout) {
  var size = children.length;
  for (var i = 0; i < size; i++) {
    var theChild = children[i];
    var children_of_children = theChild.children();
    var theNode;

    var dimensions = theChild.layoutDimensions({
      nodeDimensionsIncludeLabels: this.options.nodeDimensionsIncludeLabels
    });

    if (theChild.outerWidth() != null && theChild.outerHeight() != null) {
      theNode = parent.add(new CoSENode(layout.graphManager, new PointD(theChild.position('x') - dimensions.w / 2, theChild.position('y') - dimensions.h / 2), new DimensionD(parseFloat(dimensions.w), parseFloat(dimensions.h))));
    } else {
      theNode = parent.add(new CoSENode(this.graphManager));
    }
    // Attach id to the layout node
    theNode.id = theChild.data("id");
    // Attach the paddings of cy node to layout node
    theNode.paddingLeft = parseInt(theChild.css('padding'));
    theNode.paddingTop = parseInt(theChild.css('padding'));
    theNode.paddingRight = parseInt(theChild.css('padding'));
    theNode.paddingBottom = parseInt(theChild.css('padding'));

    //Attach the label properties to compound if labels will be included in node dimensions  
    if (this.options.nodeDimensionsIncludeLabels) {
      if (theChild.isParent()) {
        var labelWidth = theChild.boundingBox({ includeLabels: true, includeNodes: false }).w;
        var labelHeight = theChild.boundingBox({ includeLabels: true, includeNodes: false }).h;
        var labelPos = theChild.css("text-halign");
        theNode.labelWidth = labelWidth;
        theNode.labelHeight = labelHeight;
        theNode.labelPos = labelPos;
      }
    }

    // Map the layout node
    this.idToLNode[theChild.data("id")] = theNode;

    if (isNaN(theNode.rect.x)) {
      theNode.rect.x = 0;
    }

    if (isNaN(theNode.rect.y)) {
      theNode.rect.y = 0;
    }

    // the bounds for the node that includes minX, minY, maxX. maxY
    var bounds;

    // if nodeBounds option is defined set bounds accordingly
    if (this.options.nodeBounds) {
      bounds = typeof this.options.nodeBounds === 'function' ? this.options.nodeBounds.call(this, theChild) : this.options.nodeBounds;
    }

    // if bounds is set transmit each bound to the node
    for (var prop in bounds) {
      theNode[prop] = bounds[prop];
    }

    // if the node position is not obeying the bounds adjust it accordingly
    // if (bounds) {
    //   if (bounds.minX && theNode.rect.x < bounds.minX) {
    //     theNode.rect.x = bounds.minX;
    //   }
    //
    //   if (bounds.maxX && theNode.rect.x + theNode.rect.width > bounds.maxX) {
    //     theNode.rect.x = bounds.maxX - theNode.rect.width;
    //   }
    //
    //   if (bounds.minY && theNode.rect.y < bounds.minY) {
    //     theNode.rect.y = bounds.minY;
    //   }
    //
    //   if (bounds.maxY && theNode.rect.y + theNode.rect.height > bounds.maxY) {
    //     theNode.rect.y = bounds.maxY - theNode.rect.height;
    //   }
    // }

    if (children_of_children != null && children_of_children.length > 0) {
      var theNewGraph;
      theNewGraph = layout.getGraphManager().add(layout.newGraph(), theNode);
      this.processChildrenList(theNewGraph, children_of_children, layout);
    }
  }
};

/**
 * @brief : called on continuous layouts to stop them before they finish
 */
_CoSELayout.prototype.stop = function () {
  this.stopped = true;

  return this; // chaining
};

module.exports = function get(cytoscape) {
  return _CoSELayout;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FDLayout = __webpack_require__(22);
var CoSEGraphManager = __webpack_require__(20);
var CoSEGraph = __webpack_require__(19);
var CoSENode = __webpack_require__(21);
var CoSEEdge = __webpack_require__(18);
var CoSEConstants = __webpack_require__(17);
var FDLayoutConstants = __webpack_require__(1);
var LayoutConstants = __webpack_require__(0);
var Point = __webpack_require__(13);
var PointD = __webpack_require__(5);
var Layout = __webpack_require__(12);
var Integer = __webpack_require__(2);
var IGeometry = __webpack_require__(7);
var LGraph = __webpack_require__(4);
var Transform = __webpack_require__(15);

function CoSELayout() {
  FDLayout.call(this);

  this.toBeTiled = {}; // Memorize if a node is to be tiled or is tiled
}

CoSELayout.prototype = Object.create(FDLayout.prototype);

for (var prop in FDLayout) {
  CoSELayout[prop] = FDLayout[prop];
}

CoSELayout.prototype.newGraphManager = function () {
  var gm = new CoSEGraphManager(this);
  this.graphManager = gm;
  return gm;
};

CoSELayout.prototype.newGraph = function (vGraph) {
  return new CoSEGraph(null, this.graphManager, vGraph);
};

CoSELayout.prototype.newNode = function (vNode) {
  return new CoSENode(this.graphManager, vNode);
};

CoSELayout.prototype.newEdge = function (vEdge) {
  return new CoSEEdge(null, null, vEdge);
};

CoSELayout.prototype.initParameters = function () {
  FDLayout.prototype.initParameters.call(this, arguments);
  if (!this.isSubLayout) {
    if (CoSEConstants.DEFAULT_EDGE_LENGTH < 10) {
      this.idealEdgeLength = 10;
    } else {
      this.idealEdgeLength = CoSEConstants.DEFAULT_EDGE_LENGTH;
    }

    this.useSmartIdealEdgeLengthCalculation = CoSEConstants.DEFAULT_USE_SMART_IDEAL_EDGE_LENGTH_CALCULATION;
    this.springConstant = FDLayoutConstants.DEFAULT_SPRING_STRENGTH;
    this.repulsionConstant = FDLayoutConstants.DEFAULT_REPULSION_STRENGTH;
    this.gravityConstant = FDLayoutConstants.DEFAULT_GRAVITY_STRENGTH;
    this.compoundGravityConstant = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_STRENGTH;
    this.gravityRangeFactor = FDLayoutConstants.DEFAULT_GRAVITY_RANGE_FACTOR;
    this.compoundGravityRangeFactor = FDLayoutConstants.DEFAULT_COMPOUND_GRAVITY_RANGE_FACTOR;
  }
};

CoSELayout.prototype.layout = function () {
  var createBendsAsNeeded = LayoutConstants.DEFAULT_CREATE_BENDS_AS_NEEDED;
  if (createBendsAsNeeded) {
    this.createBendpoints();
    this.graphManager.resetAllEdges();
  }

  this.level = 0;
  return this.classicLayout();
};

CoSELayout.prototype.classicLayout = function () {
  this.nodesWithGravity = this.calculateNodesToApplyGravitationTo();
  this.graphManager.setAllNodesToApplyGravitation(this.nodesWithGravity);
  this.calcNoOfChildrenForAllNodes();
  this.graphManager.calcLowestCommonAncestors();
  this.graphManager.calcInclusionTreeDepths();
  this.graphManager.getRoot().calcEstimatedSize();
  this.calcIdealEdgeLengths();

  if (!this.incremental) {
    var forest = this.getFlatForest();

    // The graph associated with this layout is flat and a forest
    if (forest.length > 0) {
      this.positionNodesRadially(forest);
    }
    // The graph associated with this layout is not flat or a forest
    else {
        // Reduce the trees when incremental mode is not enabled and graph is not a forest 
        this.reduceTrees();
        // Update nodes that gravity will be applied
        this.graphManager.resetAllNodesToApplyGravitation();
        var allNodes = new Set(this.getAllNodes());
        var intersection = this.nodesWithGravity.filter(function (x) {
          return allNodes.has(x);
        });
        this.graphManager.setAllNodesToApplyGravitation(intersection);

        this.positionNodesRandomly();
      }
  }

  var allNodes = this.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {

    var node = allNodes[i];

    if (node.id === 'glyph9') {
      console.log('node found');
    }

    // if the node position is not obeying the bounds adjust it accordingly
    if (node.minX && node.rect.x < node.minX) {
      node.rect.x = node.minX;
    }

    if (node.maxX && node.rect.x + node.rect.width > node.maxX) {
      node.rect.x = node.maxX - node.rect.width;
    }

    if (node.minY && node.rect.y < node.minY) {
      node.rect.y = node.minY;
    }

    if (node.maxY && node.rect.y + node.rect.height > node.maxY) {
      node.rect.y = node.maxY - node.rect.height;
    }
  }

  this.initSpringEmbedder();
  this.runSpringEmbedder();

  return true;
};

CoSELayout.prototype.tick = function () {
  this.totalIterations++;

  if (this.totalIterations === this.maxIterations && !this.isTreeGrowing && !this.isGrowthFinished) {
    if (this.prunedNodesAll.length > 0) {
      this.isTreeGrowing = true;
    } else {
      return true;
    }
  }

  if (this.totalIterations % FDLayoutConstants.CONVERGENCE_CHECK_PERIOD == 0 && !this.isTreeGrowing && !this.isGrowthFinished) {
    if (this.isConverged()) {
      if (this.prunedNodesAll.length > 0) {
        this.isTreeGrowing = true;
      } else {
        return true;
      }
    }

    this.coolingFactor = this.initialCoolingFactor * ((this.maxIterations - this.totalIterations) / this.maxIterations);
    this.animationPeriod = Math.ceil(this.initialAnimationPeriod * Math.sqrt(this.coolingFactor));
  }
  // Operations while tree is growing again 
  if (this.isTreeGrowing) {
    if (this.growTreeIterations % 10 == 0) {
      if (this.prunedNodesAll.length > 0) {
        this.graphManager.updateBounds();
        this.updateGrid();
        this.growTree(this.prunedNodesAll);
        // Update nodes that gravity will be applied
        this.graphManager.resetAllNodesToApplyGravitation();
        var allNodes = new Set(this.getAllNodes());
        var intersection = this.nodesWithGravity.filter(function (x) {
          return allNodes.has(x);
        });
        this.graphManager.setAllNodesToApplyGravitation(intersection);

        this.graphManager.updateBounds();
        this.updateGrid();
        this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL;
      } else {
        this.isTreeGrowing = false;
        this.isGrowthFinished = true;
      }
    }
    this.growTreeIterations++;
  }
  // Operations after growth is finished
  if (this.isGrowthFinished) {
    if (this.isConverged()) {
      return true;
    }
    if (this.afterGrowthIterations % 10 == 0) {
      this.graphManager.updateBounds();
      this.updateGrid();
    }
    this.coolingFactor = FDLayoutConstants.DEFAULT_COOLING_FACTOR_INCREMENTAL * ((100 - this.afterGrowthIterations) / 100);
    this.afterGrowthIterations++;
  }

  this.totalDisplacement = 0;
  this.graphManager.updateBounds();
  this.calcSpringForces();
  this.calcRepulsionForces();
  this.calcGravitationalForces();
  this.moveNodes();
  this.animate();

  return false; // Layout is not ended yet return false
};

CoSELayout.prototype.getPositionsData = function () {
  var allNodes = this.graphManager.getAllNodes();
  var pData = {};
  for (var i = 0; i < allNodes.length; i++) {
    var rect = allNodes[i].rect;
    var id = allNodes[i].id;
    pData[id] = {
      id: id,
      x: rect.getCenterX(),
      y: rect.getCenterY(),
      w: rect.width,
      h: rect.height
    };
  }

  return pData;
};

CoSELayout.prototype.runSpringEmbedder = function () {
  this.initialAnimationPeriod = 25;
  this.animationPeriod = this.initialAnimationPeriod;
  var layoutEnded = false;

  // If aminate option is 'during' signal that layout is supposed to start iterating
  if (FDLayoutConstants.ANIMATE === 'during') {
    this.emit('layoutstarted');
  } else {
    // If aminate option is 'during' tick() function will be called on index.js
    while (!layoutEnded) {
      layoutEnded = this.tick();
    }

    this.graphManager.updateBounds();
  }
};

CoSELayout.prototype.calculateNodesToApplyGravitationTo = function () {
  var nodeList = [];
  var graph;

  var graphs = this.graphManager.getGraphs();
  var size = graphs.length;
  var i;
  for (i = 0; i < size; i++) {
    graph = graphs[i];

    graph.updateConnected();

    if (!graph.isConnected) {
      nodeList = nodeList.concat(graph.getNodes());
    }
  }

  return nodeList;
};

CoSELayout.prototype.calcNoOfChildrenForAllNodes = function () {
  var node;
  var allNodes = this.graphManager.getAllNodes();

  for (var i = 0; i < allNodes.length; i++) {
    node = allNodes[i];
    node.noOfChildren = node.getNoOfChildren();
  }
};

CoSELayout.prototype.createBendpoints = function () {
  var edges = [];
  edges = edges.concat(this.graphManager.getAllEdges());
  var visited = new HashSet();
  var i;
  for (i = 0; i < edges.length; i++) {
    var edge = edges[i];

    if (!visited.contains(edge)) {
      var source = edge.getSource();
      var target = edge.getTarget();

      if (source == target) {
        edge.getBendpoints().push(new PointD());
        edge.getBendpoints().push(new PointD());
        this.createDummyNodesForBendpoints(edge);
        visited.add(edge);
      } else {
        var edgeList = [];

        edgeList = edgeList.concat(source.getEdgeListToNode(target));
        edgeList = edgeList.concat(target.getEdgeListToNode(source));

        if (!visited.contains(edgeList[0])) {
          if (edgeList.length > 1) {
            var k;
            for (k = 0; k < edgeList.length; k++) {
              var multiEdge = edgeList[k];
              multiEdge.getBendpoints().push(new PointD());
              this.createDummyNodesForBendpoints(multiEdge);
            }
          }
          visited.addAll(list);
        }
      }
    }

    if (visited.size() == edges.length) {
      break;
    }
  }
};

CoSELayout.prototype.positionNodesRadially = function (forest) {
  // We tile the trees to a grid row by row; first tree starts at (0,0)
  var currentStartingPoint = new Point(0, 0);
  var numberOfColumns = Math.ceil(Math.sqrt(forest.length));
  var height = 0;
  var currentY = 0;
  var currentX = 0;
  var point = new PointD(0, 0);

  for (var i = 0; i < forest.length; i++) {
    if (i % numberOfColumns == 0) {
      // Start of a new row, make the x coordinate 0, increment the
      // y coordinate with the max height of the previous row
      currentX = 0;
      currentY = height;

      if (i != 0) {
        currentY += CoSEConstants.DEFAULT_COMPONENT_SEPERATION;
      }

      height = 0;
    }

    var tree = forest[i];

    // Find the center of the tree
    var centerNode = Layout.findCenterOfTree(tree);

    // Set the staring point of the next tree
    currentStartingPoint.x = currentX;
    currentStartingPoint.y = currentY;

    // Do a radial layout starting with the center
    point = CoSELayout.radialLayout(tree, centerNode, currentStartingPoint);

    if (point.y > height) {
      height = Math.floor(point.y);
    }

    currentX = Math.floor(point.x + CoSEConstants.DEFAULT_COMPONENT_SEPERATION);
  }

  this.transform(new PointD(LayoutConstants.WORLD_CENTER_X - point.x / 2, LayoutConstants.WORLD_CENTER_Y - point.y / 2));
};

CoSELayout.radialLayout = function (tree, centerNode, startingPoint) {
  var radialSep = Math.max(this.maxDiagonalInTree(tree), CoSEConstants.DEFAULT_RADIAL_SEPARATION);
  CoSELayout.branchRadialLayout(centerNode, null, 0, 359, 0, radialSep);
  var bounds = LGraph.calculateBounds(tree);

  var transform = new Transform();
  transform.setDeviceOrgX(bounds.getMinX());
  transform.setDeviceOrgY(bounds.getMinY());
  transform.setWorldOrgX(startingPoint.x);
  transform.setWorldOrgY(startingPoint.y);

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    node.transform(transform);
  }

  var bottomRight = new PointD(bounds.getMaxX(), bounds.getMaxY());

  return transform.inverseTransformPoint(bottomRight);
};

CoSELayout.branchRadialLayout = function (node, parentOfNode, startAngle, endAngle, distance, radialSeparation) {
  // First, position this node by finding its angle.
  var halfInterval = (endAngle - startAngle + 1) / 2;

  if (halfInterval < 0) {
    halfInterval += 180;
  }

  var nodeAngle = (halfInterval + startAngle) % 360;
  var teta = nodeAngle * IGeometry.TWO_PI / 360;

  // Make polar to java cordinate conversion.
  var cos_teta = Math.cos(teta);
  var x_ = distance * Math.cos(teta);
  var y_ = distance * Math.sin(teta);

  node.setCenter(x_, y_);

  // Traverse all neighbors of this node and recursively call this
  // function.
  var neighborEdges = [];
  neighborEdges = neighborEdges.concat(node.getEdges());
  var childCount = neighborEdges.length;

  if (parentOfNode != null) {
    childCount--;
  }

  var branchCount = 0;

  var incEdgesCount = neighborEdges.length;
  var startIndex;

  var edges = node.getEdgesBetween(parentOfNode);

  // If there are multiple edges, prune them until there remains only one
  // edge.
  while (edges.length > 1) {
    //neighborEdges.remove(edges.remove(0));
    var temp = edges[0];
    edges.splice(0, 1);
    var index = neighborEdges.indexOf(temp);
    if (index >= 0) {
      neighborEdges.splice(index, 1);
    }
    incEdgesCount--;
    childCount--;
  }

  if (parentOfNode != null) {
    //assert edges.length == 1;
    startIndex = (neighborEdges.indexOf(edges[0]) + 1) % incEdgesCount;
  } else {
    startIndex = 0;
  }

  var stepAngle = Math.abs(endAngle - startAngle) / childCount;

  for (var i = startIndex; branchCount != childCount; i = ++i % incEdgesCount) {
    var currentNeighbor = neighborEdges[i].getOtherEnd(node);

    // Don't back traverse to root node in current tree.
    if (currentNeighbor == parentOfNode) {
      continue;
    }

    var childStartAngle = (startAngle + branchCount * stepAngle) % 360;
    var childEndAngle = (childStartAngle + stepAngle) % 360;

    CoSELayout.branchRadialLayout(currentNeighbor, node, childStartAngle, childEndAngle, distance + radialSeparation, radialSeparation);

    branchCount++;
  }
};

CoSELayout.maxDiagonalInTree = function (tree) {
  var maxDiagonal = Integer.MIN_VALUE;

  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    var diagonal = node.getDiagonal();

    if (diagonal > maxDiagonal) {
      maxDiagonal = diagonal;
    }
  }

  return maxDiagonal;
};

CoSELayout.prototype.calcRepulsionRange = function () {
  // formula is 2 x (level + 1) x idealEdgeLength
  return 2 * (this.level + 1) * this.idealEdgeLength;
};

// Tiling methods

// Group zero degree members whose parents are not to be tiled, create dummy parents where needed and fill memberGroups by their dummp parent id's
CoSELayout.prototype.groupZeroDegreeMembers = function () {
  var self = this;
  // array of [parent_id x oneDegreeNode_id]
  var tempMemberGroups = {}; // A temporary map of parent node and its zero degree members
  this.memberGroups = {}; // A map of dummy parent node and its zero degree members whose parents are not to be tiled
  this.idToDummyNode = {}; // A map of id to dummy node 

  var zeroDegree = []; // List of zero degree nodes whose parents are not to be tiled
  var allNodes = this.graphManager.getAllNodes();

  // Fill zero degree list
  for (var i = 0; i < allNodes.length; i++) {
    var node = allNodes[i];
    var parent = node.getParent();
    // If a node has zero degree and its parent is not to be tiled if exists add that node to zeroDegres list
    if (this.getNodeDegreeWithChildren(node) === 0 && (parent.id == undefined || !this.getToBeTiled(parent))) {
      zeroDegree.push(node);
    }
  }

  // Create a map of parent node and its zero degree members
  for (var i = 0; i < zeroDegree.length; i++) {
    var node = zeroDegree[i]; // Zero degree node itself
    var p_id = node.getParent().id; // Parent id

    if (typeof tempMemberGroups[p_id] === "undefined") tempMemberGroups[p_id] = [];

    tempMemberGroups[p_id] = tempMemberGroups[p_id].concat(node); // Push node to the list belongs to its parent in tempMemberGroups
  }

  // If there are at least two nodes at a level, create a dummy compound for them
  Object.keys(tempMemberGroups).forEach(function (p_id) {
    if (tempMemberGroups[p_id].length > 1) {
      var dummyCompoundId = "DummyCompound_" + p_id; // The id of dummy compound which will be created soon
      self.memberGroups[dummyCompoundId] = tempMemberGroups[p_id]; // Add dummy compound to memberGroups

      var parent = tempMemberGroups[p_id][0].getParent(); // The parent of zero degree nodes will be the parent of new dummy compound

      // Create a dummy compound with calculated id
      var dummyCompound = new CoSENode(self.graphManager);
      dummyCompound.id = dummyCompoundId;
      dummyCompound.paddingLeft = parent.paddingLeft || 0;
      dummyCompound.paddingRight = parent.paddingRight || 0;
      dummyCompound.paddingBottom = parent.paddingBottom || 0;
      dummyCompound.paddingTop = parent.paddingTop || 0;

      self.idToDummyNode[dummyCompoundId] = dummyCompound;

      var dummyParentGraph = self.getGraphManager().add(self.newGraph(), dummyCompound);
      var parentGraph = parent.getChild();

      // Add dummy compound to parent the graph
      parentGraph.add(dummyCompound);

      // For each zero degree node in this level remove it from its parent graph and add it to the graph of dummy parent
      for (var i = 0; i < tempMemberGroups[p_id].length; i++) {
        var node = tempMemberGroups[p_id][i];

        parentGraph.remove(node);
        dummyParentGraph.add(node);
      }
    }
  });
};

CoSELayout.prototype.clearCompounds = function () {
  var childGraphMap = {};
  var idToNode = {};

  // Get compound ordering by finding the inner one first
  this.performDFSOnCompounds();

  for (var i = 0; i < this.compoundOrder.length; i++) {

    idToNode[this.compoundOrder[i].id] = this.compoundOrder[i];
    childGraphMap[this.compoundOrder[i].id] = [].concat(this.compoundOrder[i].getChild().getNodes());

    // Remove children of compounds
    this.graphManager.remove(this.compoundOrder[i].getChild());
    this.compoundOrder[i].child = null;
  }

  this.graphManager.resetAllNodes();

  // Tile the removed children
  this.tileCompoundMembers(childGraphMap, idToNode);
};

CoSELayout.prototype.clearZeroDegreeMembers = function () {
  var self = this;
  var tiledZeroDegreePack = this.tiledZeroDegreePack = [];

  Object.keys(this.memberGroups).forEach(function (id) {
    var compoundNode = self.idToDummyNode[id]; // Get the dummy compound

    tiledZeroDegreePack[id] = self.tileNodes(self.memberGroups[id], compoundNode.paddingLeft + compoundNode.paddingRight);

    // Set the width and height of the dummy compound as calculated
    compoundNode.rect.width = tiledZeroDegreePack[id].width;
    compoundNode.rect.height = tiledZeroDegreePack[id].height;
  });
};

CoSELayout.prototype.repopulateCompounds = function () {
  for (var i = this.compoundOrder.length - 1; i >= 0; i--) {
    var lCompoundNode = this.compoundOrder[i];
    var id = lCompoundNode.id;
    var horizontalMargin = lCompoundNode.paddingLeft;
    var verticalMargin = lCompoundNode.paddingTop;

    this.adjustLocations(this.tiledMemberPack[id], lCompoundNode.rect.x, lCompoundNode.rect.y, horizontalMargin, verticalMargin);
  }
};

CoSELayout.prototype.repopulateZeroDegreeMembers = function () {
  var self = this;
  var tiledPack = this.tiledZeroDegreePack;

  Object.keys(tiledPack).forEach(function (id) {
    var compoundNode = self.idToDummyNode[id]; // Get the dummy compound by its id
    var horizontalMargin = compoundNode.paddingLeft;
    var verticalMargin = compoundNode.paddingTop;

    // Adjust the positions of nodes wrt its compound
    self.adjustLocations(tiledPack[id], compoundNode.rect.x, compoundNode.rect.y, horizontalMargin, verticalMargin);
  });
};

CoSELayout.prototype.getToBeTiled = function (node) {
  var id = node.id;
  //firstly check the previous results
  if (this.toBeTiled[id] != null) {
    return this.toBeTiled[id];
  }

  //only compound nodes are to be tiled
  var childGraph = node.getChild();
  if (childGraph == null) {
    this.toBeTiled[id] = false;
    return false;
  }

  var children = childGraph.getNodes(); // Get the children nodes

  //a compound node is not to be tiled if all of its compound children are not to be tiled
  for (var i = 0; i < children.length; i++) {
    var theChild = children[i];

    if (this.getNodeDegree(theChild) > 0) {
      this.toBeTiled[id] = false;
      return false;
    }

    //pass the children not having the compound structure
    if (theChild.getChild() == null) {
      this.toBeTiled[theChild.id] = false;
      continue;
    }

    if (!this.getToBeTiled(theChild)) {
      this.toBeTiled[id] = false;
      return false;
    }
  }
  this.toBeTiled[id] = true;
  return true;
};

// Get degree of a node depending of its edges and independent of its children
CoSELayout.prototype.getNodeDegree = function (node) {
  var id = node.id;
  var edges = node.getEdges();
  var degree = 0;

  // For the edges connected
  for (var i = 0; i < edges.length; i++) {
    var edge = edges[i];
    if (edge.getSource().id !== edge.getTarget().id) {
      degree = degree + 1;
    }
  }
  return degree;
};

// Get degree of a node with its children
CoSELayout.prototype.getNodeDegreeWithChildren = function (node) {
  var degree = this.getNodeDegree(node);
  if (node.getChild() == null) {
    return degree;
  }
  var children = node.getChild().getNodes();
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    degree += this.getNodeDegreeWithChildren(child);
  }
  return degree;
};

CoSELayout.prototype.performDFSOnCompounds = function () {
  this.compoundOrder = [];
  this.fillCompexOrderByDFS(this.graphManager.getRoot().getNodes());
};

CoSELayout.prototype.fillCompexOrderByDFS = function (children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.getChild() != null) {
      this.fillCompexOrderByDFS(child.getChild().getNodes());
    }
    if (this.getToBeTiled(child)) {
      this.compoundOrder.push(child);
    }
  }
};

/**
* This method places each zero degree member wrt given (x,y) coordinates (top left).
*/
CoSELayout.prototype.adjustLocations = function (organization, x, y, compoundHorizontalMargin, compoundVerticalMargin) {
  x += compoundHorizontalMargin;
  y += compoundVerticalMargin;

  var left = x;

  for (var i = 0; i < organization.rows.length; i++) {
    var row = organization.rows[i];
    x = left;
    var maxHeight = 0;

    for (var j = 0; j < row.length; j++) {
      var lnode = row[j];

      lnode.rect.x = x; // + lnode.rect.width / 2;
      lnode.rect.y = y; // + lnode.rect.height / 2;

      x += lnode.rect.width + organization.horizontalPadding;

      if (lnode.rect.height > maxHeight) maxHeight = lnode.rect.height;
    }

    y += maxHeight + organization.verticalPadding;
  }
};

CoSELayout.prototype.tileCompoundMembers = function (childGraphMap, idToNode) {
  var self = this;
  this.tiledMemberPack = [];

  Object.keys(childGraphMap).forEach(function (id) {
    // Get the compound node
    var compoundNode = idToNode[id];

    self.tiledMemberPack[id] = self.tileNodes(childGraphMap[id], compoundNode.paddingLeft + compoundNode.paddingRight);

    compoundNode.rect.width = self.tiledMemberPack[id].width + 20;
    compoundNode.rect.height = self.tiledMemberPack[id].height + 20;
  });
};

CoSELayout.prototype.tileNodes = function (nodes, minWidth) {
  var verticalPadding = CoSEConstants.TILING_PADDING_VERTICAL;
  var horizontalPadding = CoSEConstants.TILING_PADDING_HORIZONTAL;
  var organization = {
    rows: [],
    rowWidth: [],
    rowHeight: [],
    width: 20,
    height: 20,
    verticalPadding: verticalPadding,
    horizontalPadding: horizontalPadding
  };

  // Sort the nodes in ascending order of their areas
  nodes.sort(function (n1, n2) {
    if (n1.rect.width * n1.rect.height > n2.rect.width * n2.rect.height) return -1;
    if (n1.rect.width * n1.rect.height < n2.rect.width * n2.rect.height) return 1;
    return 0;
  });

  // Create the organization -> tile members
  for (var i = 0; i < nodes.length; i++) {
    var lNode = nodes[i];

    if (organization.rows.length == 0) {
      this.insertNodeToRow(organization, lNode, 0, minWidth);
    } else if (this.canAddHorizontal(organization, lNode.rect.width, lNode.rect.height)) {
      this.insertNodeToRow(organization, lNode, this.getShortestRowIndex(organization), minWidth);
    } else {
      this.insertNodeToRow(organization, lNode, organization.rows.length, minWidth);
    }

    this.shiftToLastRow(organization);
  }

  return organization;
};

CoSELayout.prototype.insertNodeToRow = function (organization, node, rowIndex, minWidth) {
  var minCompoundSize = minWidth;

  // Add new row if needed
  if (rowIndex == organization.rows.length) {
    var secondDimension = [];

    organization.rows.push(secondDimension);
    organization.rowWidth.push(minCompoundSize);
    organization.rowHeight.push(0);
  }

  // Update row width
  var w = organization.rowWidth[rowIndex] + node.rect.width;

  if (organization.rows[rowIndex].length > 0) {
    w += organization.horizontalPadding;
  }

  organization.rowWidth[rowIndex] = w;
  // Update compound width
  if (organization.width < w) {
    organization.width = w;
  }

  // Update height
  var h = node.rect.height;
  if (rowIndex > 0) h += organization.verticalPadding;

  var extraHeight = 0;
  if (h > organization.rowHeight[rowIndex]) {
    extraHeight = organization.rowHeight[rowIndex];
    organization.rowHeight[rowIndex] = h;
    extraHeight = organization.rowHeight[rowIndex] - extraHeight;
  }

  organization.height += extraHeight;

  // Insert node
  organization.rows[rowIndex].push(node);
};

//Scans the rows of an organization and returns the one with the min width
CoSELayout.prototype.getShortestRowIndex = function (organization) {
  var r = -1;
  var min = Number.MAX_VALUE;

  for (var i = 0; i < organization.rows.length; i++) {
    if (organization.rowWidth[i] < min) {
      r = i;
      min = organization.rowWidth[i];
    }
  }
  return r;
};

//Scans the rows of an organization and returns the one with the max width
CoSELayout.prototype.getLongestRowIndex = function (organization) {
  var r = -1;
  var max = Number.MIN_VALUE;

  for (var i = 0; i < organization.rows.length; i++) {

    if (organization.rowWidth[i] > max) {
      r = i;
      max = organization.rowWidth[i];
    }
  }

  return r;
};

/**
* This method checks whether adding extra width to the organization violates
* the aspect ratio(1) or not.
*/
CoSELayout.prototype.canAddHorizontal = function (organization, extraWidth, extraHeight) {

  var sri = this.getShortestRowIndex(organization);

  if (sri < 0) {
    return true;
  }

  var min = organization.rowWidth[sri];

  if (min + organization.horizontalPadding + extraWidth <= organization.width) return true;

  var hDiff = 0;

  // Adding to an existing row
  if (organization.rowHeight[sri] < extraHeight) {
    if (sri > 0) hDiff = extraHeight + organization.verticalPadding - organization.rowHeight[sri];
  }

  var add_to_row_ratio;
  if (organization.width - min >= extraWidth + organization.horizontalPadding) {
    add_to_row_ratio = (organization.height + hDiff) / (min + extraWidth + organization.horizontalPadding);
  } else {
    add_to_row_ratio = (organization.height + hDiff) / organization.width;
  }

  // Adding a new row for this node
  hDiff = extraHeight + organization.verticalPadding;
  var add_new_row_ratio;
  if (organization.width < extraWidth) {
    add_new_row_ratio = (organization.height + hDiff) / extraWidth;
  } else {
    add_new_row_ratio = (organization.height + hDiff) / organization.width;
  }

  if (add_new_row_ratio < 1) add_new_row_ratio = 1 / add_new_row_ratio;

  if (add_to_row_ratio < 1) add_to_row_ratio = 1 / add_to_row_ratio;

  return add_to_row_ratio < add_new_row_ratio;
};

//If moving the last node from the longest row and adding it to the last
//row makes the bounding box smaller, do it.
CoSELayout.prototype.shiftToLastRow = function (organization) {
  var longest = this.getLongestRowIndex(organization);
  var last = organization.rowWidth.length - 1;
  var row = organization.rows[longest];
  var node = row[row.length - 1];

  var diff = node.width + organization.horizontalPadding;

  // Check if there is enough space on the last row
  if (organization.width - organization.rowWidth[last] > diff && longest != last) {
    // Remove the last element of the longest row
    row.splice(-1, 1);

    // Push it to the last row
    organization.rows[last].push(node);

    organization.rowWidth[longest] = organization.rowWidth[longest] - diff;
    organization.rowWidth[last] = organization.rowWidth[last] + diff;
    organization.width = organization.rowWidth[instance.getLongestRowIndex(organization)];

    // Update heights of the organization
    var maxHeight = Number.MIN_VALUE;
    for (var i = 0; i < row.length; i++) {
      if (row[i].height > maxHeight) maxHeight = row[i].height;
    }
    if (longest > 0) maxHeight += organization.verticalPadding;

    var prevTotal = organization.rowHeight[longest] + organization.rowHeight[last];

    organization.rowHeight[longest] = maxHeight;
    if (organization.rowHeight[last] < node.height + organization.verticalPadding) organization.rowHeight[last] = node.height + organization.verticalPadding;

    var finalTotal = organization.rowHeight[longest] + organization.rowHeight[last];
    organization.height += finalTotal - prevTotal;

    this.shiftToLastRow(organization);
  }
};

CoSELayout.prototype.tilingPreLayout = function () {
  if (CoSEConstants.TILE) {
    // Find zero degree nodes and create a compound for each level
    this.groupZeroDegreeMembers();
    // Tile and clear children of each compound
    this.clearCompounds();
    // Separately tile and clear zero degree nodes for each level
    this.clearZeroDegreeMembers();
  }
};

CoSELayout.prototype.tilingPostLayout = function () {
  if (CoSEConstants.TILE) {
    this.repopulateZeroDegreeMembers();
    this.repopulateCompounds();
  }
};

module.exports = CoSELayout;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function DimensionD(width, height) {
  this.width = 0;
  this.height = 0;
  if (width !== null && height !== null) {
    this.height = height;
    this.width = width;
  }
}

DimensionD.prototype.getWidth = function () {
  return this.width;
};

DimensionD.prototype.setWidth = function (width) {
  this.width = width;
};

DimensionD.prototype.getHeight = function () {
  return this.height;
};

DimensionD.prototype.setHeight = function (height) {
  this.height = height;
};

module.exports = DimensionD;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Emitter() {
  this.listeners = [];
}

var p = Emitter.prototype;

p.addListener = function (event, callback) {
  this.listeners.push({
    event: event,
    callback: callback
  });
};

p.removeListener = function (event, callback) {
  for (var i = this.listeners.length; i >= 0; i--) {
    var l = this.listeners[i];

    if (l.event === event && l.callback === callback) {
      this.listeners.splice(i, 1);
    }
  }
};

p.emit = function (event, data) {
  for (var i = 0; i < this.listeners.length; i++) {
    var l = this.listeners[i];

    if (event === l.event) {
      l.callback(data);
    }
  }
};

module.exports = Emitter;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nodeFrom = function nodeFrom(value) {
  return { value: value, next: null, prev: null };
};

var add = function add(prev, node, next, list) {
  if (prev !== null) {
    prev.next = node;
  } else {
    list.head = node;
  }

  if (next !== null) {
    next.prev = node;
  } else {
    list.tail = node;
  }

  node.prev = prev;
  node.next = next;

  list.length++;

  return node;
};

var _remove = function _remove(node, list) {
  var prev = node.prev,
      next = node.next;


  if (prev !== null) {
    prev.next = next;
  } else {
    list.head = next;
  }

  if (next !== null) {
    next.prev = prev;
  } else {
    list.tail = prev;
  }

  node.prev = node.next = null;

  list.length--;

  return node;
};

var LinkedList = function () {
  function LinkedList(vals) {
    var _this = this;

    _classCallCheck(this, LinkedList);

    this.length = 0;
    this.head = null;
    this.tail = null;

    if (vals != null) {
      vals.forEach(function (v) {
        return _this.push(v);
      });
    }
  }

  _createClass(LinkedList, [{
    key: "size",
    value: function size() {
      return this.length;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(val, otherNode) {
      return add(otherNode.prev, nodeFrom(val), otherNode, this);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(val, otherNode) {
      return add(otherNode, nodeFrom(val), otherNode.next, this);
    }
  }, {
    key: "insertNodeBefore",
    value: function insertNodeBefore(newNode, otherNode) {
      return add(otherNode.prev, newNode, otherNode, this);
    }
  }, {
    key: "insertNodeAfter",
    value: function insertNodeAfter(newNode, otherNode) {
      return add(otherNode, newNode, otherNode.next, this);
    }
  }, {
    key: "push",
    value: function push(val) {
      return add(this.tail, nodeFrom(val), null, this);
    }
  }, {
    key: "unshift",
    value: function unshift(val) {
      return add(null, nodeFrom(val), this.head, this);
    }
  }, {
    key: "remove",
    value: function remove(node) {
      return _remove(node, this);
    }
  }, {
    key: "pop",
    value: function pop() {
      return _remove(this.tail, this).value;
    }
  }, {
    key: "popNode",
    value: function popNode() {
      return _remove(this.tail, this);
    }
  }, {
    key: "shift",
    value: function shift() {
      return _remove(this.head, this).value;
    }
  }, {
    key: "shiftNode",
    value: function shiftNode() {
      return _remove(this.head, this);
    }
  }]);

  return LinkedList;
}();

module.exports = LinkedList;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// registers the extension on a cytoscape lib ref

var getLayout = __webpack_require__(27);

var register = function register(cytoscape) {
  var Layout = getLayout(cytoscape);

  cytoscape('layout', 'cose-bilkent', Layout);
};

// auto reg for globals
if (typeof cytoscape !== 'undefined') {
  register(cytoscape);
}

module.exports = register;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZTAxZGU1MGQ1YzA2YmVmMjljNSIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xheW91dENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xFZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvTEdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvUG9pbnRELmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0lHZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0lNYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xHcmFwaE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9SZWN0YW5nbGVELmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvQ29TRUVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvQ29TRU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9GRExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0ZETGF5b3V0RWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9SYW5kb21TZWVkLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXRDb25zdGFudHMiLCJQUk9PRl9RVUFMSVRZIiwiREVGQVVMVF9RVUFMSVRZIiwiRFJBRlRfUVVBTElUWSIsIkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCIsIkRFRkFVTFRfSU5DUkVNRU5UQUwiLCJERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fUEVSSU9EIiwiREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwiTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTIiwiU0lNUExFX05PREVfU0laRSIsIlNJTVBMRV9OT0RFX0hBTEZfU0laRSIsIkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSIsIk1JTl9FREdFX0xFTkdUSCIsIldPUkxEX0JPVU5EQVJZIiwiSU5JVElBTF9XT1JMRF9CT1VOREFSWSIsIldPUkxEX0NFTlRFUl9YIiwiV09STERfQ0VOVEVSX1kiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIkZETGF5b3V0Q29uc3RhbnRzIiwicHJvcCIsIk1BWF9JVEVSQVRJT05TIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIIiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEgiLCJERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SIiwiREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsIk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCIsIk1BWF9OT0RFX0RJU1BMQUNFTUVOVCIsIk1JTl9SRVBVTFNJT05fRElTVCIsIkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCIsIlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IiLCJHUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCIsIkludGVnZXIiLCJNQVhfVkFMVUUiLCJNSU5fVkFMVUUiLCJMR3JhcGhPYmplY3QiLCJJR2VvbWV0cnkiLCJJTWF0aCIsIkxFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwiaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImdldFNvdXJjZSIsImdldFRhcmdldCIsImlzSW50ZXJHcmFwaCIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEJlbmRwb2ludHMiLCJnZXRMY2EiLCJsY2EiLCJnZXRTb3VyY2VJbkxjYSIsInNvdXJjZUluTGNhIiwiZ2V0VGFyZ2V0SW5MY2EiLCJ0YXJnZXRJbkxjYSIsImdldE90aGVyRW5kIiwibm9kZSIsImdldE90aGVyRW5kSW5HcmFwaCIsImdyYXBoIiwib3RoZXJFbmQiLCJyb290IiwiZ2V0R3JhcGhNYW5hZ2VyIiwiZ2V0Um9vdCIsImdldE93bmVyIiwiZ2V0UGFyZW50IiwidXBkYXRlTGVuZ3RoIiwiY2xpcFBvaW50Q29vcmRpbmF0ZXMiLCJBcnJheSIsImdldEludGVyc2VjdGlvbiIsImdldFJlY3QiLCJsZW5ndGhYIiwibGVuZ3RoWSIsIk1hdGgiLCJhYnMiLCJzaWduIiwic3FydCIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsImdldENlbnRlclgiLCJnZXRDZW50ZXJZIiwiTEdyYXBoTWFuYWdlciIsIkxOb2RlIiwiSGFzaFNldCIsIlJlY3RhbmdsZUQiLCJQb2ludCIsIkxpbmtlZExpc3QiLCJMR3JhcGgiLCJwYXJlbnQiLCJvYmoyIiwidkdyYXBoIiwiZXN0aW1hdGVkU2l6ZSIsIm1hcmdpbiIsImVkZ2VzIiwibm9kZXMiLCJpc0Nvbm5lY3RlZCIsImdyYXBoTWFuYWdlciIsIkxheW91dCIsImdldE5vZGVzIiwiZ2V0RWRnZXMiLCJnZXRMZWZ0IiwibGVmdCIsImdldFJpZ2h0IiwicmlnaHQiLCJnZXRUb3AiLCJ0b3AiLCJnZXRCb3R0b20iLCJib3R0b20iLCJhZGQiLCJvYmoxIiwic291cmNlTm9kZSIsInRhcmdldE5vZGUiLCJuZXdOb2RlIiwiaW5kZXhPZiIsIm93bmVyIiwicHVzaCIsIm5ld0VkZ2UiLCJyZW1vdmUiLCJvYmoiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJlZGdlIiwicyIsImkiLCJpbmRleCIsInNwbGljZSIsInNvdXJjZUluZGV4IiwidGFyZ2V0SW5kZXgiLCJ1cGRhdGVMZWZ0VG9wIiwibm9kZVRvcCIsIm5vZGVMZWZ0IiwibE5vZGUiLCJwYWRkaW5nTGVmdCIsInVuZGVmaW5lZCIsInVwZGF0ZUJvdW5kcyIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJjaGlsZCIsImJvdW5kaW5nUmVjdCIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJjYWxjdWxhdGVCb3VuZHMiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJnZXRFc3RpbWF0ZWRTaXplIiwiY2FsY0VzdGltYXRlZFNpemUiLCJzaXplIiwidXBkYXRlQ29ubmVjdGVkIiwic2VsZiIsInRvQmVWaXNpdGVkIiwidmlzaXRlZCIsImN1cnJlbnROb2RlIiwibmVpZ2hib3JFZGdlcyIsImN1cnJlbnROZWlnaGJvciIsImNoaWxkcmVuT2ZOb2RlIiwid2l0aENoaWxkcmVuIiwiZm9yRWFjaCIsInNoaWZ0IiwibmVpZ2hib3JFZGdlIiwiY29udGFpbnMiLCJjaGlsZHJlbk9mTmVpZ2hib3IiLCJub09mVmlzaXRlZEluVGhpc0dyYXBoIiwia2V5cyIsInNldCIsInZpc2l0ZWRJZCIsInZpc2l0ZWROb2RlIiwiUG9pbnREIiwiZ2V0WCIsImdldFkiLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJwdCIsIkRpbWVuc2lvbkQiLCJnZXRDb3B5IiwidHJhbnNsYXRlIiwiZGltIiwiVW5pcXVlSURHZW5lcmV0b3IiLCJ0aGVJZCIsImNyZWF0ZUlEIiwiY2xlYXIiLCJpc0VtcHR5IiwiYWRkQWxsVG8iLCJsaXN0IiwiYWRkQWxsIiwidiIsImNhbGNTZXBhcmF0aW9uQW1vdW50IiwicmVjdEEiLCJyZWN0QiIsIm92ZXJsYXBBbW91bnQiLCJzZXBhcmF0aW9uQnVmZmVyIiwiaW50ZXJzZWN0cyIsImRpcmVjdGlvbnMiLCJkZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyIsIm1pbiIsIm1heCIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRXT19QSSIsIlRIUkVFX1BJIiwidmFsdWUiLCJmbG9vciIsImNlaWwiLCJsYXlvdXQiLCJncmFwaHMiLCJhZGRSb290IiwibmdyYXBoIiwibmV3R3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsImNvbmNhdCIsIm5vZGVzVG9CZVJlbW92ZWQiLCJnZXRHcmFwaHMiLCJnZXRBbGxOb2RlcyIsImFsbE5vZGVzIiwibm9kZUxpc3QiLCJyZXNldEFsbE5vZGVzIiwicmVzZXRBbGxFZGdlcyIsImFsbEVkZ2VzIiwicmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiZ2V0QWxsRWRnZXMiLCJlZGdlTGlzdCIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwic2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJnZXRMYXlvdXQiLCJpc09uZUFuY2VzdG9yT2ZPdGhlciIsImZpcnN0Tm9kZSIsInNlY29uZE5vZGUiLCJvd25lckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZGVwdGgiLCJpbmNsdXNpb25UcmVlRGVwdGgiLCJpbmNsdWRlc0ludmFsaWRFZGdlIiwiUmFuZG9tU2VlZCIsImdtIiwibG9jIiwidk5vZGUiLCJyZWN0IiwiZ2V0Q2hpbGQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0Q2VudGVyIiwiZ2V0TG9jYXRpb24iLCJnZXREaWFnb25hbCIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJzZXRDZW50ZXIiLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJtb3ZlQnkiLCJkeCIsImR5IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJ0byIsImdldEVkZ2VzQmV0d2VlbiIsIm90aGVyIiwiZ2V0TmVpZ2hib3JzTGlzdCIsIm5laWdoYm9ycyIsIndpdGhOZWlnaGJvcnNMaXN0IiwiU2V0IiwiY2hpbGROb2RlIiwiY2hpbGRyZW4iLCJnZXROb09mQ2hpbGRyZW4iLCJub09mQ2hpbGRyZW4iLCJzY2F0dGVyIiwicmFuZG9tQ2VudGVyWCIsInJhbmRvbUNlbnRlclkiLCJtaW5YIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsImNoaWxkR3JhcGgiLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJsYWJlbFBvcyIsInRyYW5zZm9ybSIsInRyYW5zIiwibGVmdFRvcCIsInZMZWZ0VG9wIiwiaW52ZXJzZVRyYW5zZm9ybVBvaW50IiwiSGFzaE1hcCIsIlRyYW5zZm9ybSIsIkVtaXR0ZXIiLCJpc1JlbW90ZVVzZSIsImxheW91dFF1YWxpdHkiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiaW5jcmVtZW50YWwiLCJhbmltYXRpb25PbkxheW91dCIsImFuaW1hdGlvbkR1cmluZ0xheW91dCIsImFuaW1hdGlvblBlcmlvZCIsInVuaWZvcm1MZWFmTm9kZVNpemVzIiwiZWRnZVRvRHVtbXlOb2RlcyIsImlzTGF5b3V0RmluaXNoZWQiLCJpc1N1YkxheW91dCIsIlJBTkRPTV9TRUVEIiwibmV3R3JhcGhNYW5hZ2VyIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwidGlsaW5nUHJlTGF5b3V0IiwiaW5pdFBhcmFtZXRlcnMiLCJpc0xheW91dFN1Y2Nlc3NmdWxsIiwiQU5JTUFURSIsImRvUG9zdExheW91dCIsInRpbGluZ1Bvc3RMYXlvdXQiLCJ1cGRhdGUiLCJ1cGRhdGUyIiwiY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzIiwibmV3TGVmdFRvcCIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsInNldERldmljZU9yZ1giLCJzZXREZXZpY2VPcmdZIiwicG9zaXRpb25Ob2Rlc1JhbmRvbWx5IiwiZ2V0RmxhdEZvcmVzdCIsImZsYXRGb3Jlc3QiLCJpc0ZvcmVzdCIsImlzRmxhdCIsInBhcmVudHMiLCJ1blByb2Nlc3NlZE5vZGVzIiwiZ2V0IiwicHV0IiwidGVtcCIsImNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzIiwiZHVtbXlOb2RlcyIsInByZXYiLCJkdW1teU5vZGUiLCJEaW1lbnNpb24iLCJkdW1teUVkZ2UiLCJrZXlTZXQiLCJrIiwibEVkZ2UiLCJwYXRoIiwicCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwiZmluZENlbnRlck9mVHJlZSIsInJlbW92ZWROb2RlcyIsInJlbWFpbmluZ0RlZ3JlZXMiLCJmb3VuZENlbnRlciIsImNlbnRlck5vZGUiLCJkZWdyZWUiLCJ0ZW1wTGlzdCIsInRlbXBMaXN0MiIsIm5laWdoYm91cnMiLCJqIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJwYXJzZUludCIsIm1vdmUiLCJlcXVhbHMiLCJ0b1N0cmluZyIsImdldE1pblgiLCJnZXRNYXhYIiwiZ2V0TWluWSIsImdldE1heFkiLCJsd29ybGRPcmdYIiwibHdvcmxkT3JnWSIsImxkZXZpY2VPcmdYIiwibGRldmljZU9yZ1kiLCJsd29ybGRFeHRYIiwibHdvcmxkRXh0WSIsImxkZXZpY2VFeHRYIiwibGRldmljZUV4dFkiLCJnZXRXb3JsZE9yZ1giLCJ3b3giLCJnZXRXb3JsZE9yZ1kiLCJ3b3kiLCJnZXRXb3JsZEV4dFgiLCJzZXRXb3JsZEV4dFgiLCJ3ZXgiLCJnZXRXb3JsZEV4dFkiLCJzZXRXb3JsZEV4dFkiLCJ3ZXkiLCJnZXREZXZpY2VPcmdYIiwiZG94IiwiZ2V0RGV2aWNlT3JnWSIsImRveSIsImdldERldmljZUV4dFgiLCJzZXREZXZpY2VFeHRYIiwiZGV4IiwiZ2V0RGV2aWNlRXh0WSIsInNldERldmljZUV4dFkiLCJkZXkiLCJ0cmFuc2Zvcm1YIiwieERldmljZSIsIndvcmxkRXh0WCIsInRyYW5zZm9ybVkiLCJ5RGV2aWNlIiwid29ybGRFeHRZIiwiaW52ZXJzZVRyYW5zZm9ybVgiLCJ4V29ybGQiLCJkZXZpY2VFeHRYIiwiaW52ZXJzZVRyYW5zZm9ybVkiLCJ5V29ybGQiLCJkZXZpY2VFeHRZIiwiaW5Qb2ludCIsIm91dFBvaW50IiwibGFzdElEIiwiaXNQcmltaXRpdmUiLCJ1bmlxdWVJRCIsImdldFN0cmluZyIsImlkIiwiYXJnIiwidHlwZSIsIkNvU0VDb25zdGFudHMiLCJERUZBVUxUX1VTRV9NVUxUSV9MRVZFTF9TQ0FMSU5HIiwiREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTiIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwiRkRMYXlvdXRFZGdlIiwiQ29TRUVkZ2UiLCJDb1NFR3JhcGgiLCJncmFwaE1nciIsIkNvU0VHcmFwaE1hbmFnZXIiLCJGRExheW91dE5vZGUiLCJDb1NFTm9kZSIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckZvcmNlcyIsInNwcmluZ0ZvcmNlWCIsInNwcmluZ0ZvcmNlWSIsInJlcHVsc2lvbkZvcmNlWCIsInJlcHVsc2lvbkZvcmNlWSIsImdyYXZpdGF0aW9uRm9yY2VYIiwiZ3Jhdml0YXRpb25Gb3JjZVkiLCJkaXNwbGFjZW1lbnRYIiwiZGlzcGxhY2VtZW50WSIsImNvb2xpbmdGYWN0b3IiLCJtYXhOb2RlRGlzcGxhY2VtZW50IiwiY2FuY2VsRGlzcGxhY2VtZW50IiwiZXhwZWN0ZWRYIiwiZXhwZWN0ZWRZIiwicHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbiIsInRvdGFsRGlzcGxhY2VtZW50IiwiZFgiLCJkWSIsInNldFByZWQxIiwicHJlZDEiLCJnZXRQcmVkMSIsImdldFByZWQyIiwicHJlZDIiLCJzZXROZXh0IiwibmV4dCIsImdldE5leHQiLCJzZXRQcm9jZXNzZWQiLCJwcm9jZXNzZWQiLCJpc1Byb2Nlc3NlZCIsIkZETGF5b3V0IiwidXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiIsImlkZWFsRWRnZUxlbmd0aCIsInNwcmluZ0NvbnN0YW50IiwicmVwdWxzaW9uQ29uc3RhbnQiLCJncmF2aXR5Q29uc3RhbnQiLCJjb21wb3VuZEdyYXZpdHlDb25zdGFudCIsImdyYXZpdHlSYW5nZUZhY3RvciIsImNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yIiwiZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSIsImluaXRpYWxDb29saW5nRmFjdG9yIiwib2xkVG90YWxEaXNwbGFjZW1lbnQiLCJtYXhJdGVyYXRpb25zIiwiYXJndW1lbnRzIiwidG90YWxJdGVyYXRpb25zIiwibm90QW5pbWF0ZWRJdGVyYXRpb25zIiwidXNlRlJHcmlkVmFyaWFudCIsImdyaWQiLCJwcnVuZWROb2Rlc0FsbCIsImdyb3dUcmVlSXRlcmF0aW9ucyIsImFmdGVyR3Jvd3RoSXRlcmF0aW9ucyIsImlzVHJlZUdyb3dpbmciLCJpc0dyb3d0aEZpbmlzaGVkIiwiY2FsY0lkZWFsRWRnZUxlbmd0aHMiLCJsY2FEZXB0aCIsInNpemVPZlNvdXJjZUluTGNhIiwic2l6ZU9mVGFyZ2V0SW5MY2EiLCJpZGVhbExlbmd0aCIsImluaXRTcHJpbmdFbWJlZGRlciIsInRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkIiwicmVwdWxzaW9uUmFuZ2UiLCJjYWxjUmVwdWxzaW9uUmFuZ2UiLCJjYWxjU3ByaW5nRm9yY2VzIiwibEVkZ2VzIiwiY2FsY1NwcmluZ0ZvcmNlIiwiY2FsY1JlcHVsc2lvbkZvcmNlcyIsIm5vZGVBIiwibm9kZUIiLCJsTm9kZXMiLCJwcm9jZXNzZWROb2RlU2V0IiwidXBkYXRlR3JpZCIsImNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSIsImNhbGNSZXB1bHNpb25Gb3JjZSIsImNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSIsIm1vdmVOb2RlcyIsInNwcmluZ0ZvcmNlIiwiY2xpcFBvaW50cyIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsImRpc3RhbmNlU3F1YXJlZCIsImRpc3RhbmNlIiwicmVwdWxzaW9uRm9yY2UiLCJjaGlsZHJlbkNvbnN0YW50Iiwib3duZXJDZW50ZXJYIiwib3duZXJDZW50ZXJZIiwiYWJzRGlzdGFuY2VYIiwiYWJzRGlzdGFuY2VZIiwiaXNDb252ZXJnZWQiLCJjb252ZXJnZWQiLCJvc2NpbGF0aW5nIiwiYW5pbWF0ZSIsImNhbGNHcmlkIiwic2l6ZVgiLCJzaXplWSIsImFkZE5vZGVUb0dyaWQiLCJzdGFydFgiLCJmaW5pc2hYIiwic3RhcnRZIiwiZmluaXNoWSIsInNldEdyaWRDb29yZGluYXRlcyIsInN1cnJvdW5kaW5nIiwiaGFzIiwicmVkdWNlVHJlZXMiLCJjb250YWluc0xlYWYiLCJwcnVuZWROb2Rlc0luU3RlcFRlbXAiLCJwcnVuZWROb2Rlc0luU3RlcCIsImdyb3dUcmVlIiwibGVuZ3RoT2ZQcnVuZWROb2Rlc0luU3RlcCIsIm5vZGVEYXRhIiwiZmluZFBsYWNlZm9yUHJ1bmVkTm9kZSIsImdyaWRGb3JQcnVuZWROb2RlIiwibm9kZVRvQ29ubmVjdCIsInBydW5lZE5vZGUiLCJzdGFydEdyaWRYIiwiZmluaXNoR3JpZFgiLCJzdGFydEdyaWRZIiwiZmluaXNoR3JpZFkiLCJ1cE5vZGVDb3VudCIsImRvd25Ob2RlQ291bnQiLCJyaWdodE5vZGVDb3VudCIsImxlZnROb2RlQ291bnQiLCJjb250cm9sUmVnaW9ucyIsIm1pbkNvdW50IiwibWluSW5kZXgiLCJyYW5kb20iLCJfc3RhcnRYIiwiX2ZpbmlzaFgiLCJfc3RhcnRZIiwiX2ZpbmlzaFkiLCJtYXAiLCJrZXkiLCJzZWVkIiwic2luIiwiQ29TRUxheW91dCIsImRlZmF1bHRzIiwicmVhZHkiLCJzdG9wIiwibm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzIiwicmVmcmVzaCIsImZpdCIsInBhZGRpbmciLCJyYW5kb21pemUiLCJub2RlUmVwdWxzaW9uIiwiZWRnZUVsYXN0aWNpdHkiLCJuZXN0aW5nRmFjdG9yIiwiZ3Jhdml0eSIsIm51bUl0ZXIiLCJ0aWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJ0aWxpbmdQYWRkaW5nVmVydGljYWwiLCJ0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCIsImdyYXZpdHlSYW5nZUNvbXBvdW5kIiwiZ3Jhdml0eUNvbXBvdW5kIiwiZ3Jhdml0eVJhbmdlIiwiaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwiLCJleHRlbmQiLCJvcHRpb25zIiwiX0NvU0VMYXlvdXQiLCJfb3B0aW9ucyIsImdldFVzZXJPcHRpb25zIiwicnVuIiwiZnJhbWVJZCIsImlkVG9MTm9kZSIsInN0b3BwZWQiLCJ0cmlnZ2VyIiwiZWxlcyIsInByb2Nlc3NDaGlsZHJlbkxpc3QiLCJnZXRUb3BNb3N0Tm9kZXMiLCJkYXRhIiwiZTEiLCJnZXRQb3NpdGlvbnMiLCJlbGUiLCJpdGVyYXRlQW5pbWF0ZWQiLCJhZnRlclJlcG9zaXRpb24iLCJvbmUiLCJ0aWNrc1BlckZyYW1lIiwiaXNEb25lIiwidGljayIsInBvc2l0aW9ucyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0aW9uRGF0YSIsImdldFBvc2l0aW9uc0RhdGEiLCJwTm9kZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZExpc3RlbmVyIiwibm90IiwibGF5b3V0UG9zaXRpb25zIiwibm9kZXNNYXAiLCJyb290cyIsImZpbHRlciIsInRoZUNoaWxkIiwiY2hpbGRyZW5fb2ZfY2hpbGRyZW4iLCJ0aGVOb2RlIiwiZGltZW5zaW9ucyIsImxheW91dERpbWVuc2lvbnMiLCJvdXRlcldpZHRoIiwib3V0ZXJIZWlnaHQiLCJwb3NpdGlvbiIsInciLCJoIiwicGFyc2VGbG9hdCIsImNzcyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nQm90dG9tIiwiaXNQYXJlbnQiLCJib3VuZGluZ0JveCIsImluY2x1ZGVMYWJlbHMiLCJpbmNsdWRlTm9kZXMiLCJpc05hTiIsImJvdW5kcyIsIm5vZGVCb3VuZHMiLCJ0aGVOZXdHcmFwaCIsImN5dG9zY2FwZSIsInRvQmVUaWxlZCIsImNyZWF0ZUJlbmRwb2ludHMiLCJsZXZlbCIsImNsYXNzaWNMYXlvdXQiLCJub2Rlc1dpdGhHcmF2aXR5IiwiY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbyIsImNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcyIsImZvcmVzdCIsInBvc2l0aW9uTm9kZXNSYWRpYWxseSIsImludGVyc2VjdGlvbiIsInJ1blNwcmluZ0VtYmVkZGVyIiwiaW5pdGlhbEFuaW1hdGlvblBlcmlvZCIsInBEYXRhIiwibGF5b3V0RW5kZWQiLCJlbWl0IiwibXVsdGlFZGdlIiwiY3VycmVudFN0YXJ0aW5nUG9pbnQiLCJudW1iZXJPZkNvbHVtbnMiLCJjdXJyZW50WSIsImN1cnJlbnRYIiwicG9pbnQiLCJ0cmVlIiwicmFkaWFsTGF5b3V0Iiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm90dG9tUmlnaHQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJyYWRpYWxTZXBhcmF0aW9uIiwiaGFsZkludGVydmFsIiwibm9kZUFuZ2xlIiwidGV0YSIsImNvc190ZXRhIiwiY29zIiwieF8iLCJ5XyIsImNoaWxkQ291bnQiLCJicmFuY2hDb3VudCIsImluY0VkZ2VzQ291bnQiLCJzdGFydEluZGV4Iiwic3RlcEFuZ2xlIiwiY2hpbGRTdGFydEFuZ2xlIiwiY2hpbGRFbmRBbmdsZSIsIm1heERpYWdvbmFsIiwiZGlhZ29uYWwiLCJncm91cFplcm9EZWdyZWVNZW1iZXJzIiwidGVtcE1lbWJlckdyb3VwcyIsIm1lbWJlckdyb3VwcyIsImlkVG9EdW1teU5vZGUiLCJ6ZXJvRGVncmVlIiwiZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiIsImdldFRvQmVUaWxlZCIsInBfaWQiLCJkdW1teUNvbXBvdW5kSWQiLCJkdW1teUNvbXBvdW5kIiwiZHVtbXlQYXJlbnRHcmFwaCIsInBhcmVudEdyYXBoIiwiY2xlYXJDb21wb3VuZHMiLCJjaGlsZEdyYXBoTWFwIiwiaWRUb05vZGUiLCJwZXJmb3JtREZTT25Db21wb3VuZHMiLCJjb21wb3VuZE9yZGVyIiwidGlsZUNvbXBvdW5kTWVtYmVycyIsImNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMiLCJ0aWxlZFplcm9EZWdyZWVQYWNrIiwiY29tcG91bmROb2RlIiwidGlsZU5vZGVzIiwicmVwb3B1bGF0ZUNvbXBvdW5kcyIsImxDb21wb3VuZE5vZGUiLCJob3Jpem9udGFsTWFyZ2luIiwidmVydGljYWxNYXJnaW4iLCJhZGp1c3RMb2NhdGlvbnMiLCJ0aWxlZE1lbWJlclBhY2siLCJyZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMiLCJ0aWxlZFBhY2siLCJnZXROb2RlRGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwicm93cyIsInJvdyIsIm1heEhlaWdodCIsImxub2RlIiwiaG9yaXpvbnRhbFBhZGRpbmciLCJ2ZXJ0aWNhbFBhZGRpbmciLCJtaW5XaWR0aCIsInJvd1dpZHRoIiwicm93SGVpZ2h0Iiwic29ydCIsIm4xIiwibjIiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJOdW1iZXIiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJsaXN0ZW5lcnMiLCJldmVudCIsImNhbGxiYWNrIiwicmVtb3ZlTGlzdGVuZXIiLCJsIiwibm9kZUZyb20iLCJoZWFkIiwidGFpbCIsInZhbHMiLCJ2YWwiLCJvdGhlck5vZGUiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87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Ozs7NEJBRU07QUFDTCxhQUFPM3RCLFFBQVEsS0FBSzB0QixJQUFiLEVBQW1CLElBQW5CLEVBQTBCemtCLEtBQWpDO0FBQ0Q7OztnQ0FFVTtBQUNULGFBQU9qSixRQUFRLEtBQUswdEIsSUFBYixFQUFtQixJQUFuQixDQUFQO0FBQ0Q7Ozs7OztBQUdIejBCLE9BQU9DLE9BQVAsR0FBaUIrRSxVQUFqQixDOzs7Ozs7O0FDekdBOztBQUVBOztBQUNBLElBQUk4TSxZQUFZLG1CQUFBNVIsQ0FBUSxFQUFSLENBQWhCOztBQUVBLElBQUk0MEIsV0FBVyxTQUFYQSxRQUFXLENBQVVqSSxTQUFWLEVBQXFCO0FBQ2xDLE1BQUlsbkIsU0FBU21NLFVBQVcrYSxTQUFYLENBQWI7O0FBRUFBLFlBQVUsUUFBVixFQUFvQixjQUFwQixFQUFvQ2xuQixNQUFwQztBQUNELENBSkQ7O0FBTUE7QUFDQSxJQUFJLE9BQU9rbkIsU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNwQ2lJLFdBQVVqSSxTQUFWO0FBQ0Q7O0FBRUQ3c0IsT0FBT0MsT0FBUCxHQUFpQjYwQixRQUFqQixDIiwiZmlsZSI6ImN5dG9zY2FwZS1jb3NlLWJpbGtlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJjeXRvc2NhcGVDb3NlQmlsa2VudFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJjeXRvc2NhcGVDb3NlQmlsa2VudFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTAxZGU1MGQ1YzA2YmVmMjljNSIsImZ1bmN0aW9uIExheW91dENvbnN0YW50cygpIHtcbn1cblxuLyoqXG4gKiBMYXlvdXQgUXVhbGl0eVxuICovXG5MYXlvdXRDb25zdGFudHMuUFJPT0ZfUVVBTElUWSA9IDA7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9RVUFMSVRZID0gMTtcbkxheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZID0gMjtcblxuLyoqXG4gKiBEZWZhdWx0IHBhcmFtZXRlcnNcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCA9IGZhbHNlO1xuLy9MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IHRydWU7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IGZhbHNlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVCA9IHRydWU7XG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVCA9IGZhbHNlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRCA9IDUwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVMgPSBmYWxzZTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IEdlbmVyYWwgb3RoZXIgY29uc3RhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLypcbiAqIE1hcmdpbnMgb2YgYSBncmFwaCB0byBiZSBhcHBsaWVkIG9uIGJvdWRpbmcgcmVjdGFuZ2xlIG9mIGl0cyBjb250ZW50cy4gV2VcbiAqIGFzc3VtZSBtYXJnaW5zIG9uIGFsbCBmb3VyIHNpZGVzIHRvIGJlIHVuaWZvcm0uXG4gKi9cbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTiA9IDE1O1xuXG4vKlxuICogV2hldGhlciB0byBjb25zaWRlciBsYWJlbHMgaW4gbm9kZSBkaW1lbnNpb25zIG9yIG5vdFxuICovXG5MYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gZmFsc2U7XG5cbi8qXG4gKiBEZWZhdWx0IGRpbWVuc2lvbiBvZiBhIG5vbi1jb21wb3VuZCBub2RlLlxuICovXG5MYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSA9IDQwO1xuXG4vKlxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX0hBTEZfU0laRSA9IExheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9TSVpFIC8gMjtcblxuLypcbiAqIEVtcHR5IGNvbXBvdW5kIG5vZGUgc2l6ZS4gV2hlbiBhIGNvbXBvdW5kIG5vZGUgaXMgZW1wdHksIGl0cyBib3RoXG4gKiBkaW1lbnNpb25zIHNob3VsZCBiZSBvZiB0aGlzIHZhbHVlLlxuICovXG5MYXlvdXRDb25zdGFudHMuRU1QVFlfQ09NUE9VTkRfTk9ERV9TSVpFID0gNDA7XG5cbi8qXG4gKiBNaW5pbXVtIGxlbmd0aCB0aGF0IGFuIGVkZ2Ugc2hvdWxkIHRha2UgZHVyaW5nIGxheW91dFxuICovXG5MYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcblxuLypcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCBsYXlvdXQgb3BlcmF0ZXMgb25cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZID0gMTAwMDAwMDtcblxuLypcbiAqIFdvcmxkIGJvdW5kYXJpZXMgdGhhdCByYW5kb20gcG9zaXRpb25pbmcgY2FuIGJlIHBlcmZvcm1lZCB3aXRoXG4gKi9cbkxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZIC8gMTAwMDtcblxuLypcbiAqIENvb3JkaW5hdGVzIG9mIHRoZSB3b3JsZCBjZW50ZXJcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YID0gMTIwMDtcbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSA9IDkwMDtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXRDb25zdGFudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0xheW91dENvbnN0YW50cy5qcyIsInZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dENvbnN0YW50cygpIHtcbn1cblxuLy9GRExheW91dENvbnN0YW50cyBpbmhlcml0cyBzdGF0aWMgcHJvcHMgaW4gTGF5b3V0Q29uc3RhbnRzXG5mb3IgKHZhciBwcm9wIGluIExheW91dENvbnN0YW50cykge1xuICBGRExheW91dENvbnN0YW50c1twcm9wXSA9IExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuRkRMYXlvdXRDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSAyNTAwO1xuXG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gNTA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IDAuNDU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IDQ1MDAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IDAuNDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSCA9IDEuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSAzLjg7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMS41O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT04gPSB0cnVlO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSAwLjU7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgPSAxMDAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVCA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCAqIDM7XG5GRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMTAuMDtcbkZETGF5b3V0Q29uc3RhbnRzLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9IDEwMDtcbkZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSAwLjE7XG5GRExheW91dENvbnN0YW50cy5NSU5fRURHRV9MRU5HVEggPSAxO1xuRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPSAxMDtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dENvbnN0YW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvRkRMYXlvdXRDb25zdGFudHMuanMiLCJmdW5jdGlvbiBJbnRlZ2VyKCkge1xufVxuXG5JbnRlZ2VyLk1BWF9WQUxVRSA9IDIxNDc0ODM2NDc7XG5JbnRlZ2VyLk1JTl9WQUxVRSA9IC0yMTQ3NDgzNjQ4O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0ludGVnZXIuanMiLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIElNYXRoID0gcmVxdWlyZSgnLi9JTWF0aCcpO1xuXG5mdW5jdGlvbiBMRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdkVkZ2UpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID0gZmFsc2U7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdkVkZ2U7XG4gIHRoaXMuYmVuZHBvaW50cyA9IFtdO1xuICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbkxFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExFZGdlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuc291cmNlO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRhcmdldDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5pc0ludGVyR3JhcGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5pc0ludGVyR3JhcGg7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGVuZ3RoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRCZW5kcG9pbnRzID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYmVuZHBvaW50cztcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRMY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0U291cmNlSW5MY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5zb3VyY2VJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXRJbkxjYSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRhcmdldEluTGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kID0gZnVuY3Rpb24gKG5vZGUpXG57XG4gIGlmICh0aGlzLnNvdXJjZSA9PT0gbm9kZSlcbiAge1xuICAgIHJldHVybiB0aGlzLnRhcmdldDtcbiAgfVxuICBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gbm9kZSlcbiAge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aHJvdyBcIk5vZGUgaXMgbm90IGluY2lkZW50IHdpdGggdGhpcyBlZGdlXCI7XG4gIH1cbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldE90aGVyRW5kSW5HcmFwaCA9IGZ1bmN0aW9uIChub2RlLCBncmFwaClcbntcbiAgdmFyIG90aGVyRW5kID0gdGhpcy5nZXRPdGhlckVuZChub2RlKTtcbiAgdmFyIHJvb3QgPSBncmFwaC5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCk7XG5cbiAgd2hpbGUgKHRydWUpXG4gIHtcbiAgICBpZiAob3RoZXJFbmQuZ2V0T3duZXIoKSA9PSBncmFwaClcbiAgICB7XG4gICAgICByZXR1cm4gb3RoZXJFbmQ7XG4gICAgfVxuXG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gcm9vdClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBvdGhlckVuZCA9IG90aGVyRW5kLmdldE93bmVyKCkuZ2V0UGFyZW50KCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGggPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgY2xpcFBvaW50Q29vcmRpbmF0ZXMgPSBuZXcgQXJyYXkoNCk7XG5cbiAgdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPVxuICAgICAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24odGhpcy50YXJnZXQuZ2V0UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgY2xpcFBvaW50Q29vcmRpbmF0ZXMpO1xuXG4gIGlmICghdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpXG4gIHtcbiAgICB0aGlzLmxlbmd0aFggPSBjbGlwUG9pbnRDb29yZGluYXRlc1swXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzJdO1xuICAgIHRoaXMubGVuZ3RoWSA9IGNsaXBQb2ludENvb3JkaW5hdGVzWzFdIC0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbM107XG5cbiAgICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcbiAgICB7XG4gICAgICB0aGlzLmxlbmd0aFggPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWCk7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApXG4gICAge1xuICAgICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gTWF0aC5zcXJ0KFxuICAgICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbiAgfVxufTtcblxuTEVkZ2UucHJvdG90eXBlLnVwZGF0ZUxlbmd0aFNpbXBsZSA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMubGVuZ3RoWCA9IHRoaXMudGFyZ2V0LmdldENlbnRlclgoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclgoKTtcbiAgdGhpcy5sZW5ndGhZID0gdGhpcy50YXJnZXQuZ2V0Q2VudGVyWSgpIC0gdGhpcy5zb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFgpIDwgMS4wKVxuICB7XG4gICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWSkgPCAxLjApXG4gIHtcbiAgICB0aGlzLmxlbmd0aFkgPSBJTWF0aC5zaWduKHRoaXMubGVuZ3RoWSk7XG4gIH1cblxuICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcbiAgICAgICAgICB0aGlzLmxlbmd0aFggKiB0aGlzLmxlbmd0aFggKyB0aGlzLmxlbmd0aFkgKiB0aGlzLmxlbmd0aFkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExFZGdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MRWRnZS5qcyIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIExpbmtlZExpc3QgPSByZXF1aXJlKCcuL0xpbmtlZExpc3QnKTtcblxuZnVuY3Rpb24gTEdyYXBoKHBhcmVudCwgb2JqMiwgdkdyYXBoKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZHcmFwaCk7XG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLm1hcmdpbiA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVBIX01BUkdJTjtcbiAgdGhpcy5lZGdlcyA9IFtdO1xuICB0aGlzLm5vZGVzID0gW107XG4gIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgaWYgKG9iajIgIT0gbnVsbCAmJiBvYmoyIGluc3RhbmNlb2YgTEdyYXBoTWFuYWdlcikge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMjtcbiAgfVxuICBlbHNlIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExheW91dCkge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyID0gb2JqMi5ncmFwaE1hbmFnZXI7XG4gIH1cbn1cblxuTEdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMR3JhcGhbcHJvcF0gPSBMR3JhcGhPYmplY3RbcHJvcF07XG59XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Tm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLm5vZGVzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucGFyZW50O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGVmdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0UmlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yaWdodDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMudG9wO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ib3R0b207XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmlzQ29ubmVjdGVkID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNDb25uZWN0ZWQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmoxLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKSB7XG4gIGlmIChzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgdmFyIG5ld05vZGUgPSBvYmoxO1xuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGhhcyBubyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdldE5vZGVzKCkuaW5kZXhPZihuZXdOb2RlKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vZGUgYWxyZWFkeSBpbiBncmFwaCFcIjtcbiAgICB9XG4gICAgbmV3Tm9kZS5vd25lciA9IHRoaXM7XG4gICAgdGhpcy5nZXROb2RlcygpLnB1c2gobmV3Tm9kZSk7XG5cbiAgICByZXR1cm4gbmV3Tm9kZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgbmV3RWRnZSA9IG9iajE7XG4gICAgaWYgKCEodGhpcy5nZXROb2RlcygpLmluZGV4T2Yoc291cmNlTm9kZSkgPiAtMSAmJiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YodGFyZ2V0Tm9kZSkpID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBvciB0YXJnZXQgbm90IGluIGdyYXBoIVwiO1xuICAgIH1cblxuICAgIGlmICghKHNvdXJjZU5vZGUub3duZXIgPT0gdGFyZ2V0Tm9kZS5vd25lciAmJiBzb3VyY2VOb2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIkJvdGggb3duZXJzIG11c3QgYmUgdGhpcyBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlTm9kZS5vd25lciAhPSB0YXJnZXROb2RlLm93bmVyKVxuICAgIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcbiAgICBuZXdFZGdlLnRhcmdldCA9IHRhcmdldE5vZGU7XG5cbiAgICAvLyBzZXQgYXMgaW50cmEtZ3JhcGggZWRnZVxuICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG5cbiAgICAvLyBhZGQgdG8gZ3JhcGggZWRnZSBsaXN0XG4gICAgdGhpcy5nZXRFZGdlcygpLnB1c2gobmV3RWRnZSk7XG5cbiAgICAvLyBhZGQgdG8gaW5jaWRlbmN5IGxpc3RzXG4gICAgc291cmNlTm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgaWYgKHRhcmdldE5vZGUgIT0gc291cmNlTm9kZSlcbiAgICB7XG4gICAgICB0YXJnZXROb2RlLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VkZ2U7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgbm9kZSA9IG9iajtcbiAgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJOb2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKG5vZGUub3duZXIgIT0gbnVsbCAmJiBub2RlLm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBoTWFuYWdlciA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIk93bmVyIGdyYXBoIG1hbmFnZXIgaXMgaW52YWxpZCFcIjtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGluY2lkZW50IGVkZ2VzIGZpcnN0IChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIGVkZ2VzVG9CZVJlbW92ZWQgPSBub2RlLmVkZ2VzLnNsaWNlKCk7XG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcblxuICAgICAgaWYgKGVkZ2UuaXNJbnRlckdyYXBoKVxuICAgICAge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIGVkZ2Uuc291cmNlLm93bmVyLnJlbW92ZShlZGdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBub3cgdGhlIG5vZGUgaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ub2Rlcy5pbmRleE9mKG5vZGUpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIG5vdCBpbiBvd25lciBub2RlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKCEoZWRnZS5zb3VyY2Uub3duZXIgIT0gbnVsbCAmJiBlZGdlLnRhcmdldC5vd25lciAhPSBudWxsICYmXG4gICAgICAgICAgICBlZGdlLnNvdXJjZS5vd25lciA9PSB0aGlzICYmIGVkZ2UudGFyZ2V0Lm93bmVyID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IG93bmVyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICB2YXIgdGFyZ2V0SW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGlmICghKHNvdXJjZUluZGV4ID4gLTEgJiYgdGFyZ2V0SW5kZXggPiAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2Uoc291cmNlSW5kZXgsIDEpO1xuXG4gICAgaWYgKGVkZ2UudGFyZ2V0ICE9IGVkZ2Uuc291cmNlKVxuICAgIHtcbiAgICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5pbmRleE9mKGVkZ2UpO1xuICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIncyBlZGdlIGxpc3QhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0RWRnZXMoKS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUxlZnRUb3AgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBtYXJnaW47XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5nZXROb2RlcygpO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gRG8gd2UgaGF2ZSBhbnkgbm9kZXMgaW4gdGhpcyBncmFwaD9cbiAgaWYgKHRvcCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSlcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfVxuICBlbHNle1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gbGVmdCAtIG1hcmdpbjtcbiAgdGhpcy50b3AgPSB0b3AgLSBtYXJnaW47XG5cbiAgLy8gQXBwbHkgdGhlIG1hcmdpbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCk7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChyZWN1cnNpdmUpXG57XG4gIC8vIGNhbGN1bGF0ZSBib3VuZHNcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZSAmJiBsTm9kZS5jaGlsZCAhPSBudWxsKVxuICAgIHtcbiAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xuICAgIH1cbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXG4gICAge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcbiAgICB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcbiAgaWYgKGxlZnQgPT0gSW50ZWdlci5NQVhfVkFMVUUpXG4gIHtcbiAgICB0aGlzLmxlZnQgPSB0aGlzLnBhcmVudC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yaWdodCA9IHRoaXMucGFyZW50LmdldFJpZ2h0KCk7XG4gICAgdGhpcy50b3AgPSB0aGlzLnBhcmVudC5nZXRUb3AoKTtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMucGFyZW50LmdldEJvdHRvbSgpO1xuICB9XG5cbiAgaWYobm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQgIT0gdW5kZWZpbmVkKXtcbiAgICBtYXJnaW4gPSBub2Rlc1swXS5nZXRQYXJlbnQoKS5wYWRkaW5nTGVmdDtcbiAgfVxuICBlbHNle1xuICAgIG1hcmdpbiA9IHRoaXMubWFyZ2luO1xuICB9XG5cbiAgdGhpcy5sZWZ0ID0gYm91bmRpbmdSZWN0LnggLSBtYXJnaW47XG4gIHRoaXMucmlnaHQgPSBib3VuZGluZ1JlY3QueCArIGJvdW5kaW5nUmVjdC53aWR0aCArIG1hcmdpbjtcbiAgdGhpcy50b3AgPSBib3VuZGluZ1JlY3QueSAtIG1hcmdpbjtcbiAgdGhpcy5ib3R0b20gPSBib3VuZGluZ1JlY3QueSArIGJvdW5kaW5nUmVjdC5oZWlnaHQgKyBtYXJnaW47XG59O1xuXG5MR3JhcGguY2FsY3VsYXRlQm91bmRzID0gZnVuY3Rpb24gKG5vZGVzKVxue1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgcmlnaHQgPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciB0b3AgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIGJvdHRvbSA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbm9kZVJpZ2h0O1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVCb3R0b207XG5cbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlTGVmdCA9IGxOb2RlLmdldExlZnQoKTtcbiAgICBub2RlUmlnaHQgPSBsTm9kZS5nZXRSaWdodCgpO1xuICAgIG5vZGVUb3AgPSBsTm9kZS5nZXRUb3AoKTtcbiAgICBub2RlQm90dG9tID0gbE5vZGUuZ2V0Qm90dG9tKCk7XG5cbiAgICBpZiAobGVmdCA+IG5vZGVMZWZ0KVxuICAgIHtcbiAgICAgIGxlZnQgPSBub2RlTGVmdDtcbiAgICB9XG5cbiAgICBpZiAocmlnaHQgPCBub2RlUmlnaHQpXG4gICAge1xuICAgICAgcmlnaHQgPSBub2RlUmlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKHRvcCA+IG5vZGVUb3ApXG4gICAge1xuICAgICAgdG9wID0gbm9kZVRvcDtcbiAgICB9XG5cbiAgICBpZiAoYm90dG9tIDwgbm9kZUJvdHRvbSlcbiAgICB7XG4gICAgICBib3R0b20gPSBub2RlQm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIHZhciBib3VuZGluZ1JlY3QgPSBuZXcgUmVjdGFuZ2xlRChsZWZ0LCB0b3AsIHJpZ2h0IC0gbGVmdCwgYm90dG9tIC0gdG9wKTtcblxuICByZXR1cm4gYm91bmRpbmdSZWN0O1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcyA9PSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpXG4gIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCk7XG4gIH1cbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBzaXplID0gMDtcbiAgdmFyIG5vZGVzID0gdGhpcy5ub2RlcztcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBzaXplICs9IGxOb2RlLmNhbGNFc3RpbWF0ZWRTaXplKCk7XG4gIH1cblxuICBpZiAoc2l6ZSA9PSAwKVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmVzdGltYXRlZFNpemUgPSBzaXplIC8gTWF0aC5zcXJ0KHRoaXMubm9kZXMubGVuZ3RoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnVwZGF0ZUNvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKHRoaXMubm9kZXMubGVuZ3RoID09IDApXG4gIHtcbiAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdG9CZVZpc2l0ZWQgPSBuZXcgTGlua2VkTGlzdCgpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBjdXJyZW50Tm9kZSA9IHRoaXMubm9kZXNbMF07XG4gIHZhciBuZWlnaGJvckVkZ2VzO1xuICB2YXIgY3VycmVudE5laWdoYm9yO1xuICB2YXIgY2hpbGRyZW5PZk5vZGUgPSBjdXJyZW50Tm9kZS53aXRoQ2hpbGRyZW4oKTtcbiAgY2hpbGRyZW5PZk5vZGUuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcbiAgfSk7XG5cbiAgd2hpbGUgKHRvQmVWaXNpdGVkLmxlbmd0aCAhPT0gMClcbiAge1xuICAgIGN1cnJlbnROb2RlID0gdG9CZVZpc2l0ZWQuc2hpZnQoKTtcbiAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZSk7XG5cbiAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuICAgIHZhciBzID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgdmFyIG5laWdoYm9yRWRnZSA9IG5laWdoYm9yRWRnZXNbaV07XG4gICAgICBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgICBuZWlnaGJvckVkZ2UuZ2V0T3RoZXJFbmRJbkdyYXBoKGN1cnJlbnROb2RlLCB0aGlzKTtcblxuICAgICAgLy8gQWRkIHVudmlzaXRlZCBuZWlnaGJvcnMgdG8gdGhlIGxpc3QgdG8gdmlzaXRcbiAgICAgIGlmIChjdXJyZW50TmVpZ2hib3IgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAhdmlzaXRlZC5jb250YWlucyhjdXJyZW50TmVpZ2hib3IpKVxuICAgICAge1xuICAgICAgICB2YXIgY2hpbGRyZW5PZk5laWdoYm9yID0gY3VycmVudE5laWdoYm9yLndpdGhDaGlsZHJlbigpO1xuXG4gICAgICAgIGNoaWxkcmVuT2ZOZWlnaGJvci5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKHZpc2l0ZWQuc2l6ZSgpID49IHRoaXMubm9kZXMubGVuZ3RoKVxuICB7XG4gICAgdmFyIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGggPSAwO1xuXG4gICAgdmFyIHMgPSB2aXNpdGVkLnNpemUoKTtcbiAgICAgT2JqZWN0LmtleXModmlzaXRlZC5zZXQpLmZvckVhY2goZnVuY3Rpb24odmlzaXRlZElkKSB7XG4gICAgICB2YXIgdmlzaXRlZE5vZGUgPSB2aXNpdGVkLnNldFt2aXNpdGVkSWRdO1xuICAgICAgaWYgKHZpc2l0ZWROb2RlLm93bmVyID09IHNlbGYpXG4gICAgICB7XG4gICAgICAgIG5vT2ZWaXNpdGVkSW5UaGlzR3JhcGgrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChub09mVmlzaXRlZEluVGhpc0dyYXBoID09IHRoaXMubm9kZXMubGVuZ3RoKVxuICAgIHtcbiAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0xHcmFwaC5qcyIsImZ1bmN0aW9uIFBvaW50RCh4LCB5KSB7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9IGVsc2Uge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxufVxuXG5Qb2ludEQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuc2V0WCA9IGZ1bmN0aW9uICh4KVxue1xuICB0aGlzLnggPSB4O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5zZXRZID0gZnVuY3Rpb24gKHkpXG57XG4gIHRoaXMueSA9IHk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldERpZmZlcmVuY2UgPSBmdW5jdGlvbiAocHQpXG57XG4gIHJldHVybiBuZXcgRGltZW5zaW9uRCh0aGlzLnggLSBwdC54LCB0aGlzLnkgLSBwdC55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0Q29weSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblBvaW50RC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGRpbSlcbntcbiAgdGhpcy54ICs9IGRpbS53aWR0aDtcbiAgdGhpcy55ICs9IGRpbS5oZWlnaHQ7XG4gIHJldHVybiB0aGlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludEQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L1BvaW50RC5qcyIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcblxuZnVuY3Rpb24gSGFzaFNldCgpIHtcbiAgdGhpcy5zZXQgPSB7fTtcbn1cbjtcblxuSGFzaFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG9iaikge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopO1xuICBpZiAoIXRoaXMuY29udGFpbnModGhlSWQpKVxuICAgIHRoaXMuc2V0W3RoZUlkXSA9IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgZGVsZXRlIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildO1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRoaXMuc2V0W1VuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKG9iaildID09IG9iajtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNldCkubGVuZ3RoO1xufTtcblxuLy9jb25jYXRzIHRoaXMuc2V0IHRvIHRoZSBnaXZlbiBsaXN0XG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGxUbyA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5zZXQpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0LnB1c2godGhpcy5zZXRba2V5c1tpXV0pO1xuICB9XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZEFsbCA9IGZ1bmN0aW9uIChsaXN0KSB7XG4gIHZhciBzID0gbGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKSB7XG4gICAgdmFyIHYgPSBsaXN0W2ldO1xuICAgIHRoaXMuYWRkKHYpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2hTZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0hhc2hTZXQuanMiLCJmdW5jdGlvbiBJR2VvbWV0cnkoKSB7XG59XG5cbklHZW9tZXRyeS5jYWxjU2VwYXJhdGlvbkFtb3VudCA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIG92ZXJsYXBBbW91bnQsIHNlcGFyYXRpb25CdWZmZXIpXG57XG4gIGlmICghcmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICB2YXIgZGlyZWN0aW9ucyA9IG5ldyBBcnJheSgyKTtcbiAgSUdlb21ldHJ5LmRlY2lkZURpcmVjdGlvbnNGb3JPdmVybGFwcGluZ05vZGVzKHJlY3RBLCByZWN0QiwgZGlyZWN0aW9ucyk7XG4gIG92ZXJsYXBBbW91bnRbMF0gPSBNYXRoLm1pbihyZWN0QS5nZXRSaWdodCgpLCByZWN0Qi5nZXRSaWdodCgpKSAtXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueCwgcmVjdEIueCk7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSBNYXRoLm1pbihyZWN0QS5nZXRCb3R0b20oKSwgcmVjdEIuZ2V0Qm90dG9tKCkpIC1cbiAgICAgICAgICBNYXRoLm1heChyZWN0QS55LCByZWN0Qi55KTtcbiAgLy8gdXBkYXRlIHRoZSBvdmVybGFwcGluZyBhbW91bnRzIGZvciB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICBpZiAoKHJlY3RBLmdldFgoKSA8PSByZWN0Qi5nZXRYKCkpICYmIChyZWN0QS5nZXRSaWdodCgpID49IHJlY3RCLmdldFJpZ2h0KCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFswXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WCgpIC0gcmVjdEEuZ2V0WCgpKSxcbiAgICAgICAgICAgIChyZWN0QS5nZXRSaWdodCgpIC0gcmVjdEIuZ2V0UmlnaHQoKSkpO1xuICB9XG4gIGVsc2UgaWYgKChyZWN0Qi5nZXRYKCkgPD0gcmVjdEEuZ2V0WCgpKSAmJiAocmVjdEIuZ2V0UmlnaHQoKSA+PSByZWN0QS5nZXRSaWdodCgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFgoKSAtIHJlY3RCLmdldFgoKSksXG4gICAgICAgICAgICAocmVjdEIuZ2V0UmlnaHQoKSAtIHJlY3RBLmdldFJpZ2h0KCkpKTtcbiAgfVxuICBpZiAoKHJlY3RBLmdldFkoKSA8PSByZWN0Qi5nZXRZKCkpICYmIChyZWN0QS5nZXRCb3R0b20oKSA+PSByZWN0Qi5nZXRCb3R0b20oKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKChyZWN0Qi5nZXRZKCkgLSByZWN0QS5nZXRZKCkpLFxuICAgICAgICAgICAgKHJlY3RBLmdldEJvdHRvbSgpIC0gcmVjdEIuZ2V0Qm90dG9tKCkpKTtcbiAgfVxuICBlbHNlIGlmICgocmVjdEIuZ2V0WSgpIDw9IHJlY3RBLmdldFkoKSkgJiYgKHJlY3RCLmdldEJvdHRvbSgpID49IHJlY3RBLmdldEJvdHRvbSgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMV0gKz0gTWF0aC5taW4oKHJlY3RBLmdldFkoKSAtIHJlY3RCLmdldFkoKSksXG4gICAgICAgICAgICAocmVjdEIuZ2V0Qm90dG9tKCkgLSByZWN0QS5nZXRCb3R0b20oKSkpO1xuICB9XG5cbiAgLy8gZmluZCBzbG9wZSBvZiB0aGUgbGluZSBwYXNzZXMgdHdvIGNlbnRlcnNcbiAgdmFyIHNsb3BlID0gTWF0aC5hYnMoKHJlY3RCLmdldENlbnRlclkoKSAtIHJlY3RBLmdldENlbnRlclkoKSkgL1xuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgLSByZWN0QS5nZXRDZW50ZXJYKCkpKTtcbiAgLy8gaWYgY2VudGVycyBhcmUgb3ZlcmxhcHBlZFxuICBpZiAoKHJlY3RCLmdldENlbnRlclkoKSA9PSByZWN0QS5nZXRDZW50ZXJZKCkpICYmXG4gICAgICAgICAgKHJlY3RCLmdldENlbnRlclgoKSA9PSByZWN0QS5nZXRDZW50ZXJYKCkpKVxuICB7XG4gICAgLy8gYXNzdW1lIHRoZSBzbG9wZSBpcyAxICg0NSBkZWdyZWUpXG4gICAgc2xvcGUgPSAxLjA7XG4gIH1cblxuICB2YXIgbW92ZUJ5WSA9IHNsb3BlICogb3ZlcmxhcEFtb3VudFswXTtcbiAgdmFyIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzFdIC8gc2xvcGU7XG4gIGlmIChvdmVybGFwQW1vdW50WzBdIDwgbW92ZUJ5WClcbiAge1xuICAgIG1vdmVCeVggPSBvdmVybGFwQW1vdW50WzBdO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIG1vdmVCeVkgPSBvdmVybGFwQW1vdW50WzFdO1xuICB9XG4gIC8vIHJldHVybiBoYWxmIHRoZSBhbW91bnQgc28gdGhhdCBpZiBlYWNoIHJlY3RhbmdsZSBpcyBtb3ZlZCBieSB0aGVzZVxuICAvLyBhbW91bnRzIGluIG9wcG9zaXRlIGRpcmVjdGlvbnMsIG92ZXJsYXAgd2lsbCBiZSByZXNvbHZlZFxuICBvdmVybGFwQW1vdW50WzBdID0gLTEgKiBkaXJlY3Rpb25zWzBdICogKChtb3ZlQnlYIC8gMikgKyBzZXBhcmF0aW9uQnVmZmVyKTtcbiAgb3ZlcmxhcEFtb3VudFsxXSA9IC0xICogZGlyZWN0aW9uc1sxXSAqICgobW92ZUJ5WSAvIDIpICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG59XG5cbklHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpXG57XG4gIGlmIChyZWN0QS5nZXRDZW50ZXJYKCkgPCByZWN0Qi5nZXRDZW50ZXJYKCkpXG4gIHtcbiAgICBkaXJlY3Rpb25zWzBdID0gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZGlyZWN0aW9uc1swXSA9IDE7XG4gIH1cblxuICBpZiAocmVjdEEuZ2V0Q2VudGVyWSgpIDwgcmVjdEIuZ2V0Q2VudGVyWSgpKVxuICB7XG4gICAgZGlyZWN0aW9uc1sxXSA9IC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGRpcmVjdGlvbnNbMV0gPSAxO1xuICB9XG59XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yID0gZnVuY3Rpb24gKHJlY3RBLCByZWN0QiwgcmVzdWx0KVxue1xuICAvL3Jlc3VsdFswLTFdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEEsIHJlc3VsdFsyLTNdIHdpbGwgY29udGFpbiBjbGlwUG9pbnQgb2YgcmVjdEJcbiAgdmFyIHAxeCA9IHJlY3RBLmdldENlbnRlclgoKTtcbiAgdmFyIHAxeSA9IHJlY3RBLmdldENlbnRlclkoKTtcbiAgdmFyIHAyeCA9IHJlY3RCLmdldENlbnRlclgoKTtcbiAgdmFyIHAyeSA9IHJlY3RCLmdldENlbnRlclkoKTtcblxuICAvL2lmIHR3byByZWN0YW5nbGVzIGludGVyc2VjdCwgdGhlbiBjbGlwcGluZyBwb2ludHMgYXJlIGNlbnRlcnNcbiAgaWYgKHJlY3RBLmludGVyc2VjdHMocmVjdEIpKVxuICB7XG4gICAgcmVzdWx0WzBdID0gcDF4O1xuICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICByZXN1bHRbMl0gPSBwMng7XG4gICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vdmFyaWFibGVzIGZvciByZWN0QVxuICB2YXIgdG9wTGVmdEF4ID0gcmVjdEEuZ2V0WCgpO1xuICB2YXIgdG9wTGVmdEF5ID0gcmVjdEEuZ2V0WSgpO1xuICB2YXIgdG9wUmlnaHRBeCA9IHJlY3RBLmdldFJpZ2h0KCk7XG4gIHZhciBib3R0b21MZWZ0QXggPSByZWN0QS5nZXRYKCk7XG4gIHZhciBib3R0b21MZWZ0QXkgPSByZWN0QS5nZXRCb3R0b20oKTtcbiAgdmFyIGJvdHRvbVJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xuICB2YXIgaGFsZldpZHRoQSA9IHJlY3RBLmdldFdpZHRoSGFsZigpO1xuICB2YXIgaGFsZkhlaWdodEEgPSByZWN0QS5nZXRIZWlnaHRIYWxmKCk7XG4gIC8vdmFyaWFibGVzIGZvciByZWN0QlxuICB2YXIgdG9wTGVmdEJ4ID0gcmVjdEIuZ2V0WCgpO1xuICB2YXIgdG9wTGVmdEJ5ID0gcmVjdEIuZ2V0WSgpO1xuICB2YXIgdG9wUmlnaHRCeCA9IHJlY3RCLmdldFJpZ2h0KCk7XG4gIHZhciBib3R0b21MZWZ0QnggPSByZWN0Qi5nZXRYKCk7XG4gIHZhciBib3R0b21MZWZ0QnkgPSByZWN0Qi5nZXRCb3R0b20oKTtcbiAgdmFyIGJvdHRvbVJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xuICB2YXIgaGFsZldpZHRoQiA9IHJlY3RCLmdldFdpZHRoSGFsZigpO1xuICB2YXIgaGFsZkhlaWdodEIgPSByZWN0Qi5nZXRIZWlnaHRIYWxmKCk7XG4gIC8vZmxhZyB3aGV0aGVyIGNsaXBwaW5nIHBvaW50cyBhcmUgZm91bmRcbiAgdmFyIGNsaXBQb2ludEFGb3VuZCA9IGZhbHNlO1xuICB2YXIgY2xpcFBvaW50QkZvdW5kID0gZmFsc2U7XG5cbiAgLy8gbGluZSBpcyB2ZXJ0aWNhbFxuICBpZiAocDF4ID09IHAyeClcbiAge1xuICAgIGlmIChwMXkgPiBwMnkpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwMXkgPCBwMnkpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gcDF4O1xuICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgLy9ub3QgbGluZSwgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIC8vIGxpbmUgaXMgaG9yaXpvbnRhbFxuICBlbHNlIGlmIChwMXkgPT0gcDJ5KVxuICB7XG4gICAgaWYgKHAxeCA+IHAyeClcbiAgICB7XG4gICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgcmVzdWx0WzNdID0gcDJ5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwMXggPCBwMngpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gdG9wUmlnaHRBeDtcbiAgICAgIHJlc3VsdFsxXSA9IHAxeTtcbiAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vbm90IHZhbGlkIGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICAvL3Nsb3BlcyBvZiByZWN0QSdzIGFuZCByZWN0QidzIGRpYWdvbmFsc1xuICAgIHZhciBzbG9wZUEgPSByZWN0QS5oZWlnaHQgLyByZWN0QS53aWR0aDtcbiAgICB2YXIgc2xvcGVCID0gcmVjdEIuaGVpZ2h0IC8gcmVjdEIud2lkdGg7XG5cbiAgICAvL3Nsb3BlIG9mIGxpbmUgYmV0d2VlbiBjZW50ZXIgb2YgcmVjdEEgYW5kIGNlbnRlciBvZiByZWN0QlxuICAgIHZhciBzbG9wZVByaW1lID0gKHAyeSAtIHAxeSkgLyAocDJ4IC0gcDF4KTtcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25BO1xuICAgIHZhciBjYXJkaW5hbERpcmVjdGlvbkI7XG4gICAgdmFyIHRlbXBQb2ludEF4O1xuICAgIHZhciB0ZW1wUG9pbnRBeTtcbiAgICB2YXIgdGVtcFBvaW50Qng7XG4gICAgdmFyIHRlbXBQb2ludEJ5O1xuXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVBXG4gICAgaWYgKCgtc2xvcGVBKSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMXggPiBwMngpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BSaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSB0b3BMZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNsb3BlQSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMXggPiBwMngpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFswXSA9IHRvcExlZnRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21SaWdodEF4O1xuICAgICAgICByZXN1bHRbMV0gPSBib3R0b21MZWZ0QXk7XG4gICAgICAgIGNsaXBQb2ludEFGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9kZXRlcm1pbmUgd2hldGhlciBjbGlwcGluZyBwb2ludCBpcyB0aGUgY29ybmVyIG9mIG5vZGVCXG4gICAgaWYgKCgtc2xvcGVCKSA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMnggPiBwMXgpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IGJvdHRvbUxlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSB0b3BSaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSB0b3BMZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHNsb3BlQiA9PSBzbG9wZVByaW1lKVxuICAgIHtcbiAgICAgIGlmIChwMnggPiBwMXgpXG4gICAgICB7XG4gICAgICAgIHJlc3VsdFsyXSA9IHRvcExlZnRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21SaWdodEJ4O1xuICAgICAgICByZXN1bHRbM10gPSBib3R0b21MZWZ0Qnk7XG4gICAgICAgIGNsaXBQb2ludEJGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9pZiBib3RoIGNsaXBwaW5nIHBvaW50cyBhcmUgY29ybmVyc1xuICAgIGlmIChjbGlwUG9pbnRBRm91bmQgJiYgY2xpcFBvaW50QkZvdW5kKVxuICAgIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL2RldGVybWluZSBDYXJkaW5hbCBEaXJlY3Rpb24gb2YgcmVjdGFuZ2xlc1xuICAgIGlmIChwMXggPiBwMngpXG4gICAge1xuICAgICAgaWYgKHAxeSA+IHAyeSlcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQSwgc2xvcGVQcmltZSwgNCk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDIpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMyk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGlmIChwMXkgPiBwMnkpXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVBLCBzbG9wZVByaW1lLCAxKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUIsIHNsb3BlUHJpbWUsIDMpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVBLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25CID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQiwgc2xvcGVQcmltZSwgNCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY2FsY3VsYXRlIGNsaXBwaW5nIFBvaW50IGlmIGl0IGlzIG5vdCBmb3VuZCBiZWZvcmVcbiAgICBpZiAoIWNsaXBQb2ludEFGb3VuZClcbiAgICB7XG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQSlcbiAgICAgIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRlbXBQb2ludEF5ID0gdG9wTGVmdEF5O1xuICAgICAgICAgIHRlbXBQb2ludEF4ID0gcDF4ICsgKC1oYWxmSGVpZ2h0QSkgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBib3R0b21SaWdodEF4O1xuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgaGFsZldpZHRoQSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArIGhhbGZIZWlnaHRBIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tTGVmdEF4O1xuICAgICAgICAgIHRlbXBQb2ludEF5ID0gcDF5ICsgKC1oYWxmV2lkdGhBKSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghY2xpcFBvaW50QkZvdW5kKVxuICAgIHtcbiAgICAgIHN3aXRjaCAoY2FyZGluYWxEaXJlY3Rpb25CKVxuICAgICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSB0b3BMZWZ0Qnk7XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBwMnggKyAoLWhhbGZIZWlnaHRCKSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IGJvdHRvbVJpZ2h0Qng7XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyBoYWxmV2lkdGhCICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgaGFsZkhlaWdodEIgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21MZWZ0Qng7XG4gICAgICAgICAgdGVtcFBvaW50QnkgPSBwMnkgKyAoLWhhbGZXaWR0aEIpICogc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5JR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24gPSBmdW5jdGlvbiAoc2xvcGUsIHNsb3BlUHJpbWUsIGxpbmUpXG57XG4gIGlmIChzbG9wZSA+IHNsb3BlUHJpbWUpXG4gIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICByZXR1cm4gMSArIGxpbmUgJSA0O1xuICB9XG59XG5cbklHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24gPSBmdW5jdGlvbiAoczEsIHMyLCBmMSwgZjIpXG57XG4gIGlmIChmMiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24yKHMxLCBzMiwgZjEpO1xuICB9XG4gIHZhciB4MSA9IHMxLng7XG4gIHZhciB5MSA9IHMxLnk7XG4gIHZhciB4MiA9IHMyLng7XG4gIHZhciB5MiA9IHMyLnk7XG4gIHZhciB4MyA9IGYxLng7XG4gIHZhciB5MyA9IGYxLnk7XG4gIHZhciB4NCA9IGYyLng7XG4gIHZhciB5NCA9IGYyLnk7XG4gIHZhciB4LCB5OyAvLyBpbnRlcnNlY3Rpb24gcG9pbnRcbiAgdmFyIGExLCBhMiwgYjEsIGIyLCBjMSwgYzI7IC8vIGNvZWZmaWNpZW50cyBvZiBsaW5lIGVxbnMuXG4gIHZhciBkZW5vbTtcblxuICBhMSA9IHkyIC0geTE7XG4gIGIxID0geDEgLSB4MjtcbiAgYzEgPSB4MiAqIHkxIC0geDEgKiB5MjsgIC8vIHsgYTEqeCArIGIxKnkgKyBjMSA9IDAgaXMgbGluZSAxIH1cblxuICBhMiA9IHk0IC0geTM7XG4gIGIyID0geDMgLSB4NDtcbiAgYzIgPSB4NCAqIHkzIC0geDMgKiB5NDsgIC8vIHsgYTIqeCArIGIyKnkgKyBjMiA9IDAgaXMgbGluZSAyIH1cblxuICBkZW5vbSA9IGExICogYjIgLSBhMiAqIGIxO1xuXG4gIGlmIChkZW5vbSA9PSAwKVxuICB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIGRlbm9tO1xuICB5ID0gKGEyICogYzEgLSBhMSAqIGMyKSAvIGRlbm9tO1xuXG4gIHJldHVybiBuZXcgUG9pbnQoeCwgeSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBDbGFzcyBDb25zdGFudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKipcbiAqIFNvbWUgdXNlZnVsIHByZS1jYWxjdWxhdGVkIGNvbnN0YW50c1xuICovXG5JR2VvbWV0cnkuSEFMRl9QSSA9IDAuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuT05FX0FORF9IQUxGX1BJID0gMS41ICogTWF0aC5QSTtcbklHZW9tZXRyeS5UV09fUEkgPSAyLjAgKiBNYXRoLlBJO1xuSUdlb21ldHJ5LlRIUkVFX1BJID0gMy4wICogTWF0aC5QSTtcblxubW9kdWxlLmV4cG9ydHMgPSBJR2VvbWV0cnk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0lHZW9tZXRyeS5qcyIsImZ1bmN0aW9uIElNYXRoKCkge1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGlucHV0IHZhbHVlLlxuICovXG5JTWF0aC5zaWduID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDApXG4gIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBlbHNlIGlmICh2YWx1ZSA8IDApXG4gIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuSU1hdGguZmxvb3IgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguY2VpbCh2YWx1ZSkgOiBNYXRoLmZsb29yKHZhbHVlKTtcbn1cblxuSU1hdGguY2VpbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElNYXRoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9JTWF0aC5qcyIsInZhciBMR3JhcGg7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG5cbmZ1bmN0aW9uIExHcmFwaE1hbmFnZXIobGF5b3V0KSB7XG4gIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7IC8vIEl0IG1heSBiZSBiZXR0ZXIgdG8gaW5pdGlsaXplIHRoaXMgb3V0IG9mIHRoaXMgZnVuY3Rpb24gYnV0IGl0IGdpdmVzIGFuIGVycm9yIChSaWdodC1oYW5kIHNpZGUgb2YgJ2luc3RhbmNlb2YnIGlzIG5vdCBjYWxsYWJsZSkgbm93LlxuICB0aGlzLmxheW91dCA9IGxheW91dDtcblxuICB0aGlzLmdyYXBocyA9IFtdO1xuICB0aGlzLmVkZ2VzID0gW107XG59XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZFJvb3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbmdyYXBoID0gdGhpcy5sYXlvdXQubmV3R3JhcGgoKTtcbiAgdmFyIG5ub2RlID0gdGhpcy5sYXlvdXQubmV3Tm9kZShudWxsKTtcbiAgdmFyIHJvb3QgPSB0aGlzLmFkZChuZ3JhcGgsIG5ub2RlKTtcbiAgdGhpcy5zZXRSb290R3JhcGgocm9vdCk7XG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuZXdHcmFwaCwgcGFyZW50Tm9kZSwgbmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSlcbntcbiAgLy90aGVyZSBhcmUganVzdCAyIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCB0aGVuIGl0IGFkZHMgYW4gTEdyYXBoIGVsc2UgaXQgYWRkcyBhbiBMRWRnZVxuICBpZiAobmV3RWRnZSA9PSBudWxsICYmIHNvdXJjZU5vZGUgPT0gbnVsbCAmJiB0YXJnZXROb2RlID09IG51bGwpIHtcbiAgICBpZiAobmV3R3JhcGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBcIlBhcmVudCBub2RlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyYXBocy5pbmRleE9mKG5ld0dyYXBoKSA+IC0xKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIGFscmVhZHkgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFwaHMucHVzaChuZXdHcmFwaCk7XG5cbiAgICBpZiAobmV3R3JhcGgucGFyZW50ICE9IG51bGwpIHtcbiAgICAgIHRocm93IFwiQWxyZWFkeSBoYXMgYSBwYXJlbnQhXCI7XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlLmNoaWxkICE9IG51bGwpIHtcbiAgICAgIHRocm93ICBcIkFscmVhZHkgaGFzIGEgY2hpbGQhXCI7XG4gICAgfVxuXG4gICAgbmV3R3JhcGgucGFyZW50ID0gcGFyZW50Tm9kZTtcbiAgICBwYXJlbnROb2RlLmNoaWxkID0gbmV3R3JhcGg7XG5cbiAgICByZXR1cm4gbmV3R3JhcGg7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy9jaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBwYXJhbWV0ZXJzXG4gICAgdGFyZ2V0Tm9kZSA9IG5ld0VkZ2U7XG4gICAgc291cmNlTm9kZSA9IHBhcmVudE5vZGU7XG4gICAgbmV3RWRnZSA9IG5ld0dyYXBoO1xuICAgIHZhciBzb3VyY2VHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICB2YXIgdGFyZ2V0R3JhcGggPSB0YXJnZXROb2RlLmdldE93bmVyKCk7XG5cbiAgICBpZiAoIShzb3VyY2VHcmFwaCAhPSBudWxsICYmIHNvdXJjZUdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuICAgIGlmICghKHRhcmdldEdyYXBoICE9IG51bGwgJiYgdGFyZ2V0R3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkgPT0gdGhpcykpIHtcbiAgICAgIHRocm93IFwiVGFyZ2V0IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlR3JhcGggPT0gdGFyZ2V0R3JhcGgpXG4gICAge1xuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSBmYWxzZTtcbiAgICAgIHJldHVybiBzb3VyY2VHcmFwaC5hZGQobmV3RWRnZSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IHRydWU7XG5cbiAgICAgIC8vIHNldCBzb3VyY2UgYW5kIHRhcmdldFxuICAgICAgbmV3RWRnZS5zb3VyY2UgPSBzb3VyY2VOb2RlO1xuICAgICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgICAvLyBhZGQgZWRnZSB0byBpbnRlci1ncmFwaCBlZGdlIGxpc3RcbiAgICAgIGlmICh0aGlzLmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPiAtMSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBpbnRlci1ncmFwaCBlZGdlIGxpc3QhXCI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gc291cmNlIGFuZCB0YXJnZXQgaW5jaWRlbmN5IGxpc3RzXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZSAhPSBudWxsICYmIG5ld0VkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBzb3VyY2UgYW5kL29yIHRhcmdldCBpcyBudWxsIVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShuZXdFZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xICYmIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YobmV3RWRnZSkgPT0gLTEpKSB7XG4gICAgICAgIHRocm93IFwiRWRnZSBhbHJlYWR5IGluIHNvdXJjZSBhbmQvb3IgdGFyZ2V0IGluY2lkZW5jeSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICBuZXdFZGdlLnNvdXJjZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgICAgbmV3RWRnZS50YXJnZXQuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgICAgcmV0dXJuIG5ld0VkZ2U7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobE9iaikge1xuICBpZiAobE9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IGxPYmo7XG4gICAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICAgIHRocm93IFwiR3JhcGggbm90IGluIHRoaXMgZ3JhcGggbWdyXCI7XG4gICAgfVxuICAgIGlmICghKGdyYXBoID09IHRoaXMucm9vdEdyYXBoIHx8IChncmFwaC5wYXJlbnQgIT0gbnVsbCAmJiBncmFwaC5wYXJlbnQuZ3JhcGhNYW5hZ2VyID09IHRoaXMpKSkge1xuICAgICAgdGhyb3cgXCJJbnZhbGlkIHBhcmVudCBub2RlIVwiO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IHRoZSBlZGdlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBlZGdlc1RvQmVSZW1vdmVkID0gZWRnZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0RWRnZXMoKSk7XG5cbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgcyA9IGVkZ2VzVG9CZVJlbW92ZWQubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2UgPSBlZGdlc1RvQmVSZW1vdmVkW2ldO1xuICAgICAgZ3JhcGgucmVtb3ZlKGVkZ2UpO1xuICAgIH1cblxuICAgIC8vIHRoZW4gdGhlIG5vZGVzIChtYWtlIGEgY29weSB0byBkbyBpdCBzYWZlbHkpXG4gICAgdmFyIG5vZGVzVG9CZVJlbW92ZWQgPSBbXTtcblxuICAgIG5vZGVzVG9CZVJlbW92ZWQgPSBub2Rlc1RvQmVSZW1vdmVkLmNvbmNhdChncmFwaC5nZXROb2RlcygpKTtcblxuICAgIHZhciBub2RlO1xuICAgIHMgPSBub2Rlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBub2RlID0gbm9kZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShub2RlKTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiBncmFwaCBpcyB0aGUgcm9vdFxuICAgIGlmIChncmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICB7XG4gICAgICB0aGlzLnNldFJvb3RHcmFwaChudWxsKTtcbiAgICB9XG5cbiAgICAvLyBub3cgcmVtb3ZlIHRoZSBncmFwaCBpdHNlbGZcbiAgICB2YXIgaW5kZXggPSB0aGlzLmdyYXBocy5pbmRleE9mKGdyYXBoKTtcbiAgICB0aGlzLmdyYXBocy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gYWxzbyByZXNldCB0aGUgcGFyZW50IG9mIHRoZSBncmFwaFxuICAgIGdyYXBoLnBhcmVudCA9IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAobE9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgZWRnZSA9IGxPYmo7XG4gICAgaWYgKGVkZ2UgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJFZGdlIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghZWRnZS5pc0ludGVyR3JhcGgpIHtcbiAgICAgIHRocm93IFwiTm90IGFuIGludGVyLWdyYXBoIGVkZ2UhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlICE9IG51bGwgJiYgZWRnZS50YXJnZXQgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIHNvdXJjZSBhbmQgdGFyZ2V0IG5vZGVzJyBpbmNpZGVuY3kgbGlzdHNcblxuICAgIGlmICghKGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEgJiYgZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKSAhPSAtMSkpIHtcbiAgICAgIHRocm93IFwiU291cmNlIGFuZC9vciB0YXJnZXQgZG9lc24ndCBrbm93IHRoaXMgZWRnZSFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgaW5kZXggPSBlZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2UudGFyZ2V0LmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyByZW1vdmUgZWRnZSBmcm9tIG93bmVyIGdyYXBoIG1hbmFnZXIncyBpbnRlci1ncmFwaCBlZGdlIGxpc3RcblxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkgIT0gbnVsbCkpIHtcbiAgICAgIHRocm93IFwiRWRnZSBvd25lciBncmFwaCBvciBvd25lciBncmFwaCBtYW5hZ2VyIGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmIChlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpID09IC0xKSB7XG4gICAgICB0aHJvdyBcIk5vdCBpbiBvd25lciBncmFwaCBtYW5hZ2VyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5yb290R3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0R3JhcGhzID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ3JhcGhzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5hbGxOb2RlcyA9PSBudWxsKVxuICB7XG4gICAgdmFyIG5vZGVMaXN0ID0gW107XG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVMaXN0ID0gbm9kZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXROb2RlcygpKTtcbiAgICB9XG4gICAgdGhpcy5hbGxOb2RlcyA9IG5vZGVMaXN0O1xuICB9XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuYWxsTm9kZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuYWxsRWRnZXMgPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBudWxsO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5hbGxFZGdlcyA9PSBudWxsKVxuICB7XG4gICAgdmFyIGVkZ2VMaXN0ID0gW107XG4gICAgdmFyIGdyYXBocyA9IHRoaXMuZ2V0R3JhcGhzKCk7XG4gICAgdmFyIHMgPSBncmFwaHMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JhcGhzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KGdyYXBoc1tpXS5nZXRFZGdlcygpKTtcbiAgICB9XG5cbiAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdCh0aGlzLmVkZ2VzKTtcblxuICAgIHRoaXMuYWxsRWRnZXMgPSBlZGdlTGlzdDtcbiAgfVxuICByZXR1cm4gdGhpcy5hbGxFZGdlcztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb247XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uIChub2RlTGlzdClcbntcbiAgaWYgKHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gIT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG5cbiAgdGhpcy5hbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IG5vZGVMaXN0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJvb3RHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnNldFJvb3RHcmFwaCA9IGZ1bmN0aW9uIChncmFwaClcbntcbiAgaWYgKGdyYXBoLmdldEdyYXBoTWFuYWdlcigpICE9IHRoaXMpIHtcbiAgICB0aHJvdyBcIlJvb3Qgbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICB9XG5cbiAgdGhpcy5yb290R3JhcGggPSBncmFwaDtcbiAgLy8gcm9vdCBncmFwaCBtdXN0IGhhdmUgYSByb290IG5vZGUgYXNzb2NpYXRlZCB3aXRoIGl0IGZvciBjb252ZW5pZW5jZVxuICBpZiAoZ3JhcGgucGFyZW50ID09IG51bGwpXG4gIHtcbiAgICBncmFwaC5wYXJlbnQgPSB0aGlzLmxheW91dC5uZXdOb2RlKFwiUm9vdCBub2RlXCIpO1xuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYXlvdXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sYXlvdXQ7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pc09uZUFuY2VzdG9yT2ZPdGhlciA9IGZ1bmN0aW9uIChmaXJzdE5vZGUsIHNlY29uZE5vZGUpXG57XG4gIGlmICghKGZpcnN0Tm9kZSAhPSBudWxsICYmIHNlY29uZE5vZGUgIT0gbnVsbCkpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuXG4gIGlmIChmaXJzdE5vZGUgPT0gc2Vjb25kTm9kZSlcbiAge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIElzIHNlY29uZCBub2RlIGFuIGFuY2VzdG9yIG9mIHRoZSBmaXJzdCBvbmU/XG4gIHZhciBvd25lckdyYXBoID0gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIHZhciBwYXJlbnROb2RlO1xuXG4gIGRvXG4gIHtcbiAgICBwYXJlbnROb2RlID0gb3duZXJHcmFwaC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gc2Vjb25kTm9kZSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IHdoaWxlICh0cnVlKTtcbiAgLy8gSXMgZmlyc3Qgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgc2Vjb25kIG9uZT9cbiAgb3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICBkb1xuICB7XG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IGZpcnN0Tm9kZSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvd25lckdyYXBoID0gcGFyZW50Tm9kZS5nZXRPd25lcigpO1xuICAgIGlmIChvd25lckdyYXBoID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9IHdoaWxlICh0cnVlKTtcblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2U7XG4gIHZhciBzb3VyY2VOb2RlO1xuICB2YXIgdGFyZ2V0Tm9kZTtcbiAgdmFyIHNvdXJjZUFuY2VzdG9yR3JhcGg7XG4gIHZhciB0YXJnZXRBbmNlc3RvckdyYXBoO1xuXG4gIHZhciBlZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIHMgPSBlZGdlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGVkZ2VzW2ldO1xuXG4gICAgc291cmNlTm9kZSA9IGVkZ2Uuc291cmNlO1xuICAgIHRhcmdldE5vZGUgPSBlZGdlLnRhcmdldDtcbiAgICBlZGdlLmxjYSA9IG51bGw7XG4gICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZU5vZGU7XG4gICAgZWRnZS50YXJnZXRJbkxjYSA9IHRhcmdldE5vZGU7XG5cbiAgICBpZiAoc291cmNlTm9kZSA9PSB0YXJnZXROb2RlKVxuICAgIHtcbiAgICAgIGVkZ2UubGNhID0gc291cmNlTm9kZS5nZXRPd25lcigpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcblxuICAgIHdoaWxlIChlZGdlLmxjYSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlOyAgXG4gICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xuXG4gICAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgaWYgKHRhcmdldEFuY2VzdG9yR3JhcGggPT0gc291cmNlQW5jZXN0b3JHcmFwaClcbiAgICAgICAge1xuICAgICAgICAgIGVkZ2UubGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHRoaXMucm9vdEdyYXBoKVxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRnZS5sY2EgIT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgICAgICB9XG4gICAgICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXRBbmNlc3RvckdyYXBoLmdldFBhcmVudCgpO1xuICAgICAgICB0YXJnZXRBbmNlc3RvckdyYXBoID0gZWRnZS50YXJnZXRJbkxjYS5nZXRPd25lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc291cmNlQW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChlZGdlLmxjYSA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBlZGdlLnNvdXJjZUluTGNhID0gc291cmNlQW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcbiAgICAgICAgc291cmNlQW5jZXN0b3JHcmFwaCA9IGVkZ2Uuc291cmNlSW5MY2EuZ2V0T3duZXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxue1xuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXG4gIHtcbiAgICByZXR1cm4gZmlyc3ROb2RlLmdldE93bmVyKCk7XG4gIH1cbiAgdmFyIGZpcnN0T3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuXG4gIGRvXG4gIHtcbiAgICBpZiAoZmlyc3RPd25lckdyYXBoID09IG51bGwpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kTm9kZS5nZXRPd25lcigpO1xuXG4gICAgZG9cbiAgICB7XG4gICAgICBpZiAoc2Vjb25kT3duZXJHcmFwaCA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gZmlyc3RPd25lckdyYXBoKVxuICAgICAge1xuICAgICAgICByZXR1cm4gc2Vjb25kT3duZXJHcmFwaDtcbiAgICAgIH1cbiAgICAgIHNlY29uZE93bmVyR3JhcGggPSBzZWNvbmRPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gICAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgICBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE93bmVyR3JhcGguZ2V0UGFyZW50KCkuZ2V0T3duZXIoKTtcbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZpcnN0T3duZXJHcmFwaDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzID0gZnVuY3Rpb24gKGdyYXBoLCBkZXB0aCkge1xuICBpZiAoZ3JhcGggPT0gbnVsbCAmJiBkZXB0aCA9PSBudWxsKSB7XG4gICAgZ3JhcGggPSB0aGlzLnJvb3RHcmFwaDtcbiAgICBkZXB0aCA9IDE7XG4gIH1cbiAgdmFyIG5vZGU7XG5cbiAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgbm9kZSA9IG5vZGVzW2ldO1xuICAgIG5vZGUuaW5jbHVzaW9uVHJlZURlcHRoID0gZGVwdGg7XG5cbiAgICBpZiAobm9kZS5jaGlsZCAhPSBudWxsKVxuICAgIHtcbiAgICAgIHRoaXMuY2FsY0luY2x1c2lvblRyZWVEZXB0aHMobm9kZS5jaGlsZCwgZGVwdGggKyAxKTtcbiAgICB9XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmluY2x1ZGVzSW52YWxpZEVkZ2UgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZTtcblxuICB2YXIgcyA9IHRoaXMuZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIGVkZ2UgPSB0aGlzLmVkZ2VzW2ldO1xuXG4gICAgaWYgKHRoaXMuaXNPbmVBbmNlc3Rvck9mT3RoZXIoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KSlcbiAgICB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhNYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MR3JhcGhNYW5hZ2VyLmpzIiwiZnVuY3Rpb24gTEdyYXBoT2JqZWN0KHZHcmFwaE9iamVjdCkge1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZHcmFwaE9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMR3JhcGhPYmplY3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0xHcmFwaE9iamVjdC5qcyIsInZhciBMR3JhcGhPYmplY3QgPSByZXF1aXJlKCcuL0xHcmFwaE9iamVjdCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBSZWN0YW5nbGVEID0gcmVxdWlyZSgnLi9SZWN0YW5nbGVEJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi9SYW5kb21TZWVkJyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG5cbmZ1bmN0aW9uIExOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMSA6IExOb2RlKExHcmFwaE1hbmFnZXIgZ20sIFBvaW50IGxvYywgRGltZW5zaW9uIHNpemUsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKHNpemUgPT0gbnVsbCAmJiB2Tm9kZSA9PSBudWxsKSB7XG4gICAgdk5vZGUgPSBsb2M7XG4gIH1cblxuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2Tm9kZSk7XG5cbiAgLy9BbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciAyIDogTE5vZGUoTGF5b3V0IGxheW91dCwgT2JqZWN0IHZOb2RlKVxuICBpZiAoZ20uZ3JhcGhNYW5hZ2VyICE9IG51bGwpXG4gICAgZ20gPSBnbS5ncmFwaE1hbmFnZXI7XG5cbiAgdGhpcy5lc3RpbWF0ZWRTaXplID0gSW50ZWdlci5NSU5fVkFMVUU7XG4gIHRoaXMuaW5jbHVzaW9uVHJlZURlcHRoID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHRoaXMudkdyYXBoT2JqZWN0ID0gdk5vZGU7XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcblxuICBpZiAoc2l6ZSAhPSBudWxsICYmIGxvYyAhPSBudWxsKVxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKGxvYy54LCBsb2MueSwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuICBlbHNlXG4gICAgdGhpcy5yZWN0ID0gbmV3IFJlY3RhbmdsZUQoKTtcbn1cblxuTE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGhPYmplY3QucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoT2JqZWN0KSB7XG4gIExOb2RlW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5lZGdlcztcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDaGlsZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmNoaWxkO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldE93bmVyID0gZnVuY3Rpb24gKClcbntcbi8vICBpZiAodGhpcy5vd25lciAhPSBudWxsKSB7XG4vLyAgICBpZiAoISh0aGlzLm93bmVyID09IG51bGwgfHwgdGhpcy5vd25lci5nZXROb2RlcygpLmluZGV4T2YodGhpcykgPiAtMSkpIHtcbi8vICAgICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4vLyAgICB9XG4vLyAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC53aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy5yZWN0LndpZHRoID0gd2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LnggKyB0aGlzLnJlY3Qud2lkdGggLyAyLFxuICAgICAgICAgIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodCAvIDIpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldExvY2F0aW9uID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5ldyBQb2ludEQodGhpcy5yZWN0LngsIHRoaXMucmVjdC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRSZWN0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXREaWFnb25hbCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBNYXRoLnNxcnQodGhpcy5yZWN0LndpZHRoICogdGhpcy5yZWN0LndpZHRoICtcbiAgICAgICAgICB0aGlzLnJlY3QuaGVpZ2h0ICogdGhpcy5yZWN0LmhlaWdodCk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0UmVjdCA9IGZ1bmN0aW9uICh1cHBlckxlZnQsIGRpbWVuc2lvbilcbntcbiAgdGhpcy5yZWN0LnggPSB1cHBlckxlZnQueDtcbiAgdGhpcy5yZWN0LnkgPSB1cHBlckxlZnQueTtcbiAgdGhpcy5yZWN0LndpZHRoID0gZGltZW5zaW9uLndpZHRoO1xuICB0aGlzLnJlY3QuaGVpZ2h0ID0gZGltZW5zaW9uLmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRDZW50ZXIgPSBmdW5jdGlvbiAoY3gsIGN5KVxue1xuICB0aGlzLnJlY3QueCA9IGN4IC0gdGhpcy5yZWN0LndpZHRoIC8gMjtcbiAgdGhpcy5yZWN0LnkgPSBjeSAtIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldExvY2F0aW9uID0gZnVuY3Rpb24gKHgsIHkpXG57XG4gIHRoaXMucmVjdC54ID0geDtcbiAgdGhpcy5yZWN0LnkgPSB5O1xufTtcblxuTE5vZGUucHJvdG90eXBlLm1vdmVCeSA9IGZ1bmN0aW9uIChkeCwgZHkpXG57XG4gIHRoaXMucmVjdC54ICs9IGR4O1xuICB0aGlzLnJlY3QueSArPSBkeTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlTGlzdFRvTm9kZSA9IGZ1bmN0aW9uICh0bylcbntcbiAgdmFyIGVkZ2VMaXN0ID0gW107XG4gIHZhciBlZGdlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcbiAgICBcbiAgICBpZiAoZWRnZS50YXJnZXQgPT0gdG8pXG4gICAge1xuICAgICAgaWYgKGVkZ2Uuc291cmNlICE9IHNlbGYpXG4gICAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIVwiO1xuXG4gICAgICBlZGdlTGlzdC5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VMaXN0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzQmV0d2VlbiA9IGZ1bmN0aW9uIChvdGhlcilcbntcbiAgdmFyIGVkZ2VMaXN0ID0gW107XG4gIHZhciBlZGdlO1xuICBcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuXG4gICAgaWYgKCEoZWRnZS5zb3VyY2UgPT0gc2VsZiB8fCBlZGdlLnRhcmdldCA9PSBzZWxmKSlcbiAgICAgIHRocm93IFwiSW5jb3JyZWN0IGVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXRcIjtcblxuICAgIGlmICgoZWRnZS50YXJnZXQgPT0gb3RoZXIpIHx8IChlZGdlLnNvdXJjZSA9PSBvdGhlcikpXG4gICAge1xuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROZWlnaGJvcnNMaXN0ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5laWdoYm9ycyA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBlZGdlO1xuICBcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZWxmLmVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuXG4gICAgaWYgKGVkZ2Uuc291cmNlID09IHNlbGYpXG4gICAge1xuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnRhcmdldCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZiAoZWRnZS50YXJnZXQgIT0gc2VsZikge1xuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBpbmNpZGVuY3khXCI7XG4gICAgICB9XG4gICAgXG4gICAgICBuZWlnaGJvcnMuYWRkKGVkZ2Uuc291cmNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBuZWlnaGJvcnM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUud2l0aENoaWxkcmVuID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHdpdGhOZWlnaGJvcnNMaXN0ID0gbmV3IFNldCgpO1xuICB2YXIgY2hpbGROb2RlO1xuICB2YXIgY2hpbGRyZW47XG5cbiAgd2l0aE5laWdoYm9yc0xpc3QuYWRkKHRoaXMpO1xuXG4gIGlmICh0aGlzLmNoaWxkICE9IG51bGwpXG4gIHtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmNoaWxkLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjaGlsZE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkcmVuID0gY2hpbGROb2RlLndpdGhDaGlsZHJlbigpO1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIHdpdGhOZWlnaGJvcnNMaXN0LmFkZChub2RlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoTmVpZ2hib3JzTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXROb09mQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgbm9PZkNoaWxkcmVuID0gMDtcbiAgdmFyIGNoaWxkTm9kZTtcblxuICBpZih0aGlzLmNoaWxkID09IG51bGwpe1xuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG5cbiAgICAgIG5vT2ZDaGlsZHJlbiArPSBjaGlsZE5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gICAgfVxuICB9XG4gIFxuICBpZihub09mQ2hpbGRyZW4gPT0gMCl7XG4gICAgbm9PZkNoaWxkcmVuID0gMTtcbiAgfVxuICByZXR1cm4gbm9PZkNoaWxkcmVuO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmVzdGltYXRlZFNpemUgPT0gSW50ZWdlci5NSU5fVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmNhbGNFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jaGlsZCA9PSBudWxsKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZSA9ICh0aGlzLnJlY3Qud2lkdGggKyB0aGlzLnJlY3QuaGVpZ2h0KSAvIDI7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gdGhpcy5jaGlsZC5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICAgIHRoaXMucmVjdC53aWR0aCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgICB0aGlzLnJlY3QuaGVpZ2h0ID0gdGhpcy5lc3RpbWF0ZWRTaXplO1xuXG4gICAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLnNjYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByYW5kb21DZW50ZXJYO1xuICB2YXIgcmFuZG9tQ2VudGVyWTtcblxuICB2YXIgbWluWCA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFggPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWCA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCArXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFggLSBtaW5YKSkgKyBtaW5YO1xuXG4gIHZhciBtaW5ZID0gLUxheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICB2YXIgbWF4WSA9IExheW91dENvbnN0YW50cy5JTklUSUFMX1dPUkxEX0JPVU5EQVJZO1xuICByYW5kb21DZW50ZXJZID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9ZICtcbiAgICAgICAgICAoUmFuZG9tU2VlZC5uZXh0RG91YmxlKCkgKiAobWF4WSAtIG1pblkpKSArIG1pblk7XG5cbiAgdGhpcy5yZWN0LnggPSByYW5kb21DZW50ZXJYO1xuICB0aGlzLnJlY3QueSA9IHJhbmRvbUNlbnRlcllcbn07XG5cbkxOb2RlLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIGlmICh0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKS5sZW5ndGggIT0gMClcbiAge1xuICAgIC8vIHdyYXAgdGhlIGNoaWxkcmVuIG5vZGVzIGJ5IHJlLWFycmFuZ2luZyB0aGUgYm91bmRhcmllc1xuICAgIHZhciBjaGlsZEdyYXBoID0gdGhpcy5nZXRDaGlsZCgpO1xuICAgIGNoaWxkR3JhcGgudXBkYXRlQm91bmRzKHRydWUpO1xuXG4gICAgdGhpcy5yZWN0LnggPSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICB0aGlzLnJlY3QueSA9IGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICB0aGlzLnNldFdpZHRoKGNoaWxkR3JhcGguZ2V0UmlnaHQoKSAtIGNoaWxkR3JhcGguZ2V0TGVmdCgpKTtcbiAgICB0aGlzLnNldEhlaWdodChjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIGNvbXBvdW5kIGJvdW5kcyBjb25zaWRlcmluZyBpdHMgbGFiZWwgcHJvcGVydGllcyAgICBcbiAgICBpZihMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTKXtcbiAgICAgICAgXG4gICAgICB2YXIgd2lkdGggPSBjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKTtcbiAgICAgIHZhciBoZWlnaHQgPSBjaGlsZEdyYXBoLmdldEJvdHRvbSgpIC0gY2hpbGRHcmFwaC5nZXRUb3AoKTtcblxuICAgICAgaWYodGhpcy5sYWJlbFdpZHRoID4gd2lkdGgpe1xuICAgICAgICB0aGlzLnJlY3QueCAtPSAodGhpcy5sYWJlbFdpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCh0aGlzLmxhYmVsV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmxhYmVsSGVpZ2h0ID4gaGVpZ2h0KXtcbiAgICAgICAgaWYodGhpcy5sYWJlbFBvcyA9PSBcImNlbnRlclwiKXtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5sYWJlbFBvcyA9PSBcInRvcFwiKXtcbiAgICAgICAgICB0aGlzLnJlY3QueSAtPSAodGhpcy5sYWJlbEhlaWdodCAtIGhlaWdodCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVpZ2h0KHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEluY2x1c2lvblRyZWVEZXB0aCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9PSBJbnRlZ2VyLk1BWF9WQUxVRSkge1xuICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICB9XG4gIHJldHVybiB0aGlzLmluY2x1c2lvblRyZWVEZXB0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS50cmFuc2Zvcm0gPSBmdW5jdGlvbiAodHJhbnMpXG57XG4gIHZhciBsZWZ0ID0gdGhpcy5yZWN0Lng7XG5cbiAgaWYgKGxlZnQgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICBsZWZ0ID0gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG4gIGVsc2UgaWYgKGxlZnQgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgbGVmdCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgdG9wID0gdGhpcy5yZWN0Lnk7XG5cbiAgaWYgKHRvcCA+IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIHRvcCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuICBlbHNlIGlmICh0b3AgPCAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgdG9wID0gLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuXG4gIHZhciBsZWZ0VG9wID0gbmV3IFBvaW50RChsZWZ0LCB0b3ApO1xuICB2YXIgdkxlZnRUb3AgPSB0cmFucy5pbnZlcnNlVHJhbnNmb3JtUG9pbnQobGVmdFRvcCk7XG5cbiAgdGhpcy5zZXRMb2NhdGlvbih2TGVmdFRvcC54LCB2TGVmdFRvcC55KTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0LnkgKyB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXG57XG4gIGlmICh0aGlzLm93bmVyID09IG51bGwpXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLm93bmVyLmdldFBhcmVudCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMTm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvTE5vZGUuanMiLCJ2YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBIYXNoTWFwID0gcmVxdWlyZSgnLi9IYXNoTWFwJyk7XG52YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xudmFyIExOb2RlID0gcmVxdWlyZSgnLi9MTm9kZScpO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCcuL0VtaXR0ZXInKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG5cbmZ1bmN0aW9uIExheW91dChpc1JlbW90ZVVzZSkge1xuICBFbWl0dGVyLmNhbGwoIHRoaXMgKTtcblxuICAvL0xheW91dCBRdWFsaXR5OiAwOnByb29mLCAxOmRlZmF1bHQsIDI6ZHJhZnRcbiAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgLy9XaGV0aGVyIGxheW91dCBzaG91bGQgY3JlYXRlIGJlbmRwb2ludHMgYXMgbmVlZGVkIG9yIG5vdFxuICB0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQgPVxuICAgICAgICAgIExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGJlIGluY3JlbWVudGFsIG9yIG5vdFxuICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gIC8vV2hldGhlciB3ZSBhbmltYXRlIGZyb20gYmVmb3JlIHRvIGFmdGVyIGxheW91dCBub2RlIHBvc2l0aW9uc1xuICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fT05fTEFZT1VUO1xuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSB0aGUgbGF5b3V0IHByb2Nlc3Mgb3Igbm90XG4gIHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQ7XG4gIC8vTnVtYmVyIGl0ZXJhdGlvbnMgdGhhdCBzaG91bGQgYmUgZG9uZSBiZXR3ZWVuIHR3byBzdWNjZXNzaXZlIGFuaW1hdGlvbnNcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fUEVSSU9EO1xuICAvKipcbiAgICogV2hldGhlciBvciBub3QgbGVhZiBub2RlcyAobm9uLWNvbXBvdW5kIG5vZGVzKSBhcmUgb2YgdW5pZm9ybSBzaXplcy4gV2hlblxuICAgKiB0aGV5IGFyZSwgYm90aCBzcHJpbmcgYW5kIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiB0d28gbGVhZiBub2RlcyBjYW4gYmVcbiAgICogY2FsY3VsYXRlZCB3aXRob3V0IHRoZSBleHBlbnNpdmUgY2xpcHBpbmcgcG9pbnQgY2FsY3VsYXRpb25zLCByZXN1bHRpbmdcbiAgICogaW4gbWFqb3Igc3BlZWQtdXAuXG4gICAqL1xuICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUztcbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCBmb3IgY3JlYXRpb24gb2YgYmVuZHBvaW50cyBieSB1c2luZyBkdW1teSBub2RlcyBhbmQgZWRnZXMuXG4gICAqIE1hcHMgYW4gTEVkZ2UgdG8gaXRzIGR1bW15IGJlbmRwb2ludCBwYXRoLlxuICAgKi9cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIHRoaXMuaXNTdWJMYXlvdXQgPSBmYWxzZTtcbiAgdGhpcy5pc1JlbW90ZVVzZSA9IGZhbHNlO1xuXG4gIGlmIChpc1JlbW90ZVVzZSAhPSBudWxsKSB7XG4gICAgdGhpcy5pc1JlbW90ZVVzZSA9IGlzUmVtb3RlVXNlO1xuICB9XG59XG5cbkxheW91dC5SQU5ET01fU0VFRCA9IDE7XG5cbkxheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxOb2RlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBnbSA9IG5ldyBMR3JhcGhNYW5hZ2VyKHRoaXMpO1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xuICByZXR1cm4gZ207XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaClcbntcbiAgcmV0dXJuIG5ldyBMR3JhcGgobnVsbCwgdGhpcy5ncmFwaE1hbmFnZXIsIHZHcmFwaCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpXG57XG4gIHJldHVybiBuZXcgTE5vZGUodGhpcy5ncmFwaE1hbmFnZXIsIHZOb2RlKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uICh2RWRnZSlcbntcbiAgcmV0dXJuIG5ldyBMRWRnZShudWxsLCBudWxsLCB2RWRnZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmNoZWNrTGF5b3V0U3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSA9PSBudWxsKVxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpLmxlbmd0aCA9PSAwXG4gICAgICAgICAgfHwgdGhpcy5ncmFwaE1hbmFnZXIuaW5jbHVkZXNJbnZhbGlkRWRnZSgpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5ydW5MYXlvdXQgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSBmYWxzZTtcbiAgXG4gIGlmICh0aGlzLnRpbGluZ1ByZUxheW91dCkge1xuICAgIHRoaXMudGlsaW5nUHJlTGF5b3V0KCk7XG4gIH1cblxuICB0aGlzLmluaXRQYXJhbWV0ZXJzKCk7XG4gIHZhciBpc0xheW91dFN1Y2Nlc3NmdWxsO1xuXG4gIGlmICh0aGlzLmNoZWNrTGF5b3V0U3VjY2VzcygpKVxuICB7XG4gICAgaXNMYXlvdXRTdWNjZXNzZnVsbCA9IGZhbHNlO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSB0aGlzLmxheW91dCgpO1xuICB9XG4gIFxuICBpZiAoTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnKSB7XG4gICAgLy8gSWYgdGhpcyBpcyBhICdkdXJpbmcnIGxheW91dCBhbmltYXRpb24uIExheW91dCBpcyBub3QgZmluaXNoZWQgeWV0LiBcbiAgICAvLyBXZSBuZWVkIHRvIHBlcmZvcm0gdGhlc2UgaW4gaW5kZXguanMgd2hlbiBsYXlvdXQgaXMgcmVhbGx5IGZpbmlzaGVkLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgaWYgKGlzTGF5b3V0U3VjY2Vzc2Z1bGwpXG4gIHtcbiAgICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpXG4gICAge1xuICAgICAgdGhpcy5kb1Bvc3RMYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy50aWxpbmdQb3N0TGF5b3V0KSB7XG4gICAgdGhpcy50aWxpbmdQb3N0TGF5b3V0KCk7XG4gIH1cblxuICB0aGlzLmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xuXG4gIHJldHVybiBpc0xheW91dFN1Y2Nlc3NmdWxsO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBwZXJmb3JtcyB0aGUgb3BlcmF0aW9ucyByZXF1aXJlZCBhZnRlciBsYXlvdXQuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZG9Qb3N0TGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgLy9hc3NlcnQgIWlzU3ViTGF5b3V0IDogXCJTaG91bGQgbm90IGJlIGNhbGxlZCBvbiBzdWItbGF5b3V0IVwiO1xuICAvLyBQcm9wYWdhdGUgZ2VvbWV0cmljIGNoYW5nZXMgdG8gdi1sZXZlbCBvYmplY3RzXG4gIGlmKCF0aGlzLmluY3JlbWVudGFsKXtcbiAgICB0aGlzLnRyYW5zZm9ybSgpO1xuICB9XG4gIHRoaXMudXBkYXRlKCk7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIGdlb21ldHJ5IG9mIHRoZSB0YXJnZXQgZ3JhcGggYWNjb3JkaW5nIHRvXG4gKiBjYWxjdWxhdGVkIGxheW91dC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUyID0gZnVuY3Rpb24gKCkge1xuICAvLyB1cGRhdGUgYmVuZCBwb2ludHNcbiAgaWYgKHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZClcbiAge1xuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzKCk7XG5cbiAgICAvLyByZXNldCBhbGwgZWRnZXMsIHNpbmNlIHRoZSB0b3BvbG9neSBoYXMgY2hhbmdlZFxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgfVxuXG4gIC8vIHBlcmZvcm0gZWRnZSwgbm9kZSBhbmQgcm9vdCB1cGRhdGVzIGlmIGxheW91dCBpcyBub3QgY2FsbGVkXG4gIC8vIHJlbW90ZWx5XG4gIGlmICghdGhpcy5pc1JlbW90ZVVzZSlcbiAge1xuICAgIC8vIHVwZGF0ZSBhbGwgZWRnZXNcbiAgICB2YXIgZWRnZTtcbiAgICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGFsbEVkZ2VzW2ldO1xuLy8gICAgICB0aGlzLnVwZGF0ZShlZGdlKTtcbiAgICB9XG5cbiAgICAvLyByZWN1cnNpdmVseSB1cGRhdGUgbm9kZXNcbiAgICB2YXIgbm9kZTtcbiAgICB2YXIgbm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbi8vICAgICAgdGhpcy51cGRhdGUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIHJvb3QgZ3JhcGhcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgdGhpcy51cGRhdGUyKCk7XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTE5vZGUpIHtcbiAgICB2YXIgbm9kZSA9IG9iajtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gc2luY2Ugbm9kZSBpcyBjb21wb3VuZCwgcmVjdXJzaXZlbHkgdXBkYXRlIGNoaWxkIG5vZGVzXG4gICAgICB2YXIgbm9kZXMgPSBub2RlLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHVwZGF0ZShub2Rlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgbm9kZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBub2RlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cbiAgICBpZiAobm9kZS52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdk5vZGUgPSBub2RlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2Tm9kZS51cGRhdGUobm9kZSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExFZGdlKSB7XG4gICAgdmFyIGVkZ2UgPSBvYmo7XG4gICAgLy8gaWYgdGhlIGwtbGV2ZWwgZWRnZSBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBlZGdlIGltcGxlbWVudHMgdGhlXG4gICAgLy8gaW50ZXJmYWNlIFVwZGF0YWJsZS5cblxuICAgIGlmIChlZGdlLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2RWRnZSA9IGVkZ2UudkdyYXBoT2JqZWN0O1xuXG4gICAgICAvLyBjYWxsIHRoZSB1cGRhdGUgbWV0aG9kIG9mIHRoZSBpbnRlcmZhY2VcbiAgICAgIHZFZGdlLnVwZGF0ZShlZGdlKTtcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgTEdyYXBoKSB7XG4gICAgdmFyIGdyYXBoID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGdyYXBoIGlzIGFzc29jaWF0ZWQgd2l0aCBhIHYtbGV2ZWwgZ3JhcGggb2JqZWN0LFxuICAgIC8vIHRoZW4gaXQgaXMgYXNzdW1lZCB0aGF0IHRoZSB2LWxldmVsIG9iamVjdCBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZ3JhcGgudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZHcmFwaCA9IGdyYXBoLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2R3JhcGgudXBkYXRlKGdyYXBoKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgdXNlZCB0byBzZXQgYWxsIGxheW91dCBwYXJhbWV0ZXJzIHRvIGRlZmF1bHQgdmFsdWVzXG4gKiBkZXRlcm1pbmVkIGF0IGNvbXBpbGUgdGltZS5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxuICB7XG4gICAgdGhpcy5sYXlvdXRRdWFsaXR5ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWTtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAgIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgICB0aGlzLmluY3JlbWVudGFsID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUw7XG4gICAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRDtcbiAgICB0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIH1cblxuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQpXG4gIHtcbiAgICB0aGlzLmFuaW1hdGlvbk9uTGF5b3V0ID0gZmFsc2U7XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKG5ld0xlZnRUb3ApIHtcbiAgaWYgKG5ld0xlZnRUb3AgPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy50cmFuc2Zvcm0obmV3IFBvaW50RCgwLCAwKSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gY3JlYXRlIGEgdHJhbnNmb3JtYXRpb24gb2JqZWN0IChmcm9tIEVjbGlwc2UgdG8gbGF5b3V0KS4gV2hlbiBhblxuICAgIC8vIGludmVyc2UgdHJhbnNmb3JtIGlzIGFwcGxpZWQsIHdlIGdldCB1cHBlci1sZWZ0IGNvb3JkaW5hdGUgb2YgdGhlXG4gICAgLy8gZHJhd2luZyBvciB0aGUgcm9vdCBncmFwaCBhdCBnaXZlbiBpbnB1dCBjb29yZGluYXRlIChzb21lIG1hcmdpbnNcbiAgICAvLyBhbHJlYWR5IGluY2x1ZGVkIGluIGNhbGN1bGF0aW9uIG9mIGxlZnQtdG9wKS5cblxuICAgIHZhciB0cmFucyA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgICB2YXIgbGVmdFRvcCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS51cGRhdGVMZWZ0VG9wKCk7XG5cbiAgICBpZiAobGVmdFRvcCAhPSBudWxsKVxuICAgIHtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWChuZXdMZWZ0VG9wLngpO1xuICAgICAgdHJhbnMuc2V0V29ybGRPcmdZKG5ld0xlZnRUb3AueSk7XG5cbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1gobGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldERldmljZU9yZ1kobGVmdFRvcC55KTtcblxuICAgICAgdmFyIG5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICAgICAgdmFyIG5vZGU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgbm9kZS50cmFuc2Zvcm0odHJhbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFuZG9tbHkgPSBmdW5jdGlvbiAoZ3JhcGgpIHtcblxuICBpZiAoZ3JhcGggPT0gdW5kZWZpbmVkKSB7XG4gICAgLy9hc3NlcnQgIXRoaXMuaW5jcmVtZW50YWw7XG4gICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkodGhpcy5nZXRHcmFwaE1hbmFnZXIoKS5nZXRSb290KCkpO1xuICAgIHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgbE5vZGU7XG4gICAgdmFyIGNoaWxkR3JhcGg7XG5cbiAgICB2YXIgbm9kZXMgPSBncmFwaC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGNoaWxkR3JhcGggPSBsTm9kZS5nZXRDaGlsZCgpO1xuXG4gICAgICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKVxuICAgICAge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjaGlsZEdyYXBoLmdldE5vZGVzKCkubGVuZ3RoID09IDApXG4gICAgICB7XG4gICAgICAgIGxOb2RlLnNjYXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoY2hpbGRHcmFwaCk7XG4gICAgICAgIGxOb2RlLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiB0cmVlcyB3aGVyZSBlYWNoIHRyZWUgaXMgcmVwcmVzZW50ZWQgYXMgYVxuICogbGlzdCBvZiBsLW5vZGVzLiBUaGUgbWV0aG9kIHJldHVybnMgYSBsaXN0IG9mIHNpemUgMCB3aGVuOlxuICogLSBUaGUgZ3JhcGggaXMgbm90IGZsYXQgb3JcbiAqIC0gT25lIG9mIHRoZSBjb21wb25lbnQocykgb2YgdGhlIGdyYXBoIGlzIG5vdCBhIHRyZWUuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuZ2V0RmxhdEZvcmVzdCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBmbGF0Rm9yZXN0ID0gW107XG4gIHZhciBpc0ZvcmVzdCA9IHRydWU7XG5cbiAgLy8gUXVpY2sgcmVmZXJlbmNlIGZvciBhbGwgbm9kZXMgaW4gdGhlIGdyYXBoIG1hbmFnZXIgYXNzb2NpYXRlZCB3aXRoXG4gIC8vIHRoaXMgbGF5b3V0LiBUaGUgbGlzdCBzaG91bGQgbm90IGJlIGNoYW5nZWQuXG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5nZXROb2RlcygpO1xuXG4gIC8vIEZpcnN0IGJlIHN1cmUgdGhhdCB0aGUgZ3JhcGggaXMgZmxhdFxuICB2YXIgaXNGbGF0ID0gdHJ1ZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgaWYgKGFsbE5vZGVzW2ldLmdldENoaWxkKCkgIT0gbnVsbClcbiAgICB7XG4gICAgICBpc0ZsYXQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gZW1wdHkgZm9yZXN0IGlmIHRoZSBncmFwaCBpcyBub3QgZmxhdC5cbiAgaWYgKCFpc0ZsYXQpXG4gIHtcbiAgICByZXR1cm4gZmxhdEZvcmVzdDtcbiAgfVxuXG4gIC8vIFJ1biBCRlMgZm9yIGVhY2ggY29tcG9uZW50IG9mIHRoZSBncmFwaC5cblxuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciB0b0JlVmlzaXRlZCA9IFtdO1xuICB2YXIgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gIHZhciB1blByb2Nlc3NlZE5vZGVzID0gW107XG5cbiAgdW5Qcm9jZXNzZWROb2RlcyA9IHVuUHJvY2Vzc2VkTm9kZXMuY29uY2F0KGFsbE5vZGVzKTtcblxuICAvLyBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgZmluZHMgYSBjb21wb25lbnQgb2YgdGhlIGdyYXBoIGFuZFxuICAvLyBkZWNpZGVzIHdoZXRoZXIgaXQgaXMgYSB0cmVlIG9yIG5vdC4gSWYgaXQgaXMgYSB0cmVlLCBhZGRzIGl0IHRvIHRoZVxuICAvLyBmb3Jlc3QgYW5kIGNvbnRpbnVlZCB3aXRoIHRoZSBuZXh0IGNvbXBvbmVudC5cblxuICB3aGlsZSAodW5Qcm9jZXNzZWROb2Rlcy5sZW5ndGggPiAwICYmIGlzRm9yZXN0KVxuICB7XG4gICAgdG9CZVZpc2l0ZWQucHVzaCh1blByb2Nlc3NlZE5vZGVzWzBdKTtcblxuICAgIC8vIFN0YXJ0IHRoZSBCRlMuIEVhY2ggaXRlcmF0aW9uIG9mIHRoaXMgbG9vcCB2aXNpdHMgYSBub2RlIGluIGFcbiAgICAvLyBCRlMgbWFubmVyLlxuICAgIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggPiAwICYmIGlzRm9yZXN0KVxuICAgIHtcbiAgICAgIC8vcG9vbCBvcGVyYXRpb25cbiAgICAgIHZhciBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkWzBdO1xuICAgICAgdG9CZVZpc2l0ZWQuc3BsaWNlKDAsIDEpO1xuICAgICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICAgICAgdmFyIG5laWdoYm9yRWRnZXMgPSBjdXJyZW50Tm9kZS5nZXRFZGdlcygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5laWdoYm9yRWRnZXMubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgICAgIG5laWdoYm9yRWRnZXNbaV0uZ2V0T3RoZXJFbmQoY3VycmVudE5vZGUpO1xuXG4gICAgICAgIC8vIElmIEJGUyBpcyBub3QgZ3Jvd2luZyBmcm9tIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgIGlmIChwYXJlbnRzLmdldChjdXJyZW50Tm9kZSkgIT0gY3VycmVudE5laWdoYm9yKVxuICAgICAgICB7XG4gICAgICAgICAgLy8gV2UgaGF2ZW4ndCBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvci5cbiAgICAgICAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0b0JlVmlzaXRlZC5wdXNoKGN1cnJlbnROZWlnaGJvcik7XG4gICAgICAgICAgICBwYXJlbnRzLnB1dChjdXJyZW50TmVpZ2hib3IsIGN1cnJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gU2luY2Ugd2UgaGF2ZSBwcmV2aW91c2x5IHZpc2l0ZWQgdGhpcyBuZWlnaGJvciBhbmRcbiAgICAgICAgICAvLyB0aGlzIG5laWdoYm9yIGlzIG5vdCBwYXJlbnQgb2YgY3VycmVudE5vZGUsIGdpdmVuXG4gICAgICAgICAgLy8gZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgdHJlZSwgaGVuY2VcbiAgICAgICAgICAvLyBpdCBpcyBub3QgYSBmb3Jlc3QuXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzRm9yZXN0ID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgZ3JhcGggY29udGFpbnMgYSBjb21wb25lbnQgdGhhdCBpcyBub3QgYSB0cmVlLiBFbXB0eVxuICAgIC8vIHByZXZpb3VzbHkgZm91bmQgdHJlZXMuIFRoZSBtZXRob2Qgd2lsbCBlbmQuXG4gICAgaWYgKCFpc0ZvcmVzdClcbiAgICB7XG4gICAgICBmbGF0Rm9yZXN0ID0gW107XG4gICAgfVxuICAgIC8vIFNhdmUgY3VycmVudGx5IHZpc2l0ZWQgbm9kZXMgYXMgYSB0cmVlIGluIG91ciBmb3Jlc3QuIFJlc2V0XG4gICAgLy8gdmlzaXRlZCBhbmQgcGFyZW50cyBsaXN0cy4gQ29udGludWUgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQgb2ZcbiAgICAvLyB0aGUgZ3JhcGgsIGlmIGFueS5cbiAgICBlbHNlXG4gICAge1xuICAgICAgdmFyIHRlbXAgPSBbXTtcbiAgICAgIHZpc2l0ZWQuYWRkQWxsVG8odGVtcCk7XG4gICAgICBmbGF0Rm9yZXN0LnB1c2godGVtcCk7XG4gICAgICAvL2ZsYXRGb3Jlc3QgPSBmbGF0Rm9yZXN0LmNvbmNhdCh0ZW1wKTtcbiAgICAgIC8vdW5Qcm9jZXNzZWROb2Rlcy5yZW1vdmVBbGwodmlzaXRlZCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGVtcFtpXTtcbiAgICAgICAgdmFyIGluZGV4ID0gdW5Qcm9jZXNzZWROb2Rlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICB1blByb2Nlc3NlZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICAgICAgcGFyZW50cyA9IG5ldyBIYXNoTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZsYXRGb3Jlc3Q7XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgZHVtbXkgbm9kZXMgKGFuIGwtbGV2ZWwgbm9kZSB3aXRoIG1pbmltYWwgZGltZW5zaW9ucylcbiAqIGZvciB0aGUgZ2l2ZW4gZWRnZSAob25lIHBlciBiZW5kcG9pbnQpLiBUaGUgZXhpc3RpbmcgbC1sZXZlbCBzdHJ1Y3R1cmVcbiAqIGlzIHVwZGF0ZWQgYWNjb3JkaW5nbHkuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMgPSBmdW5jdGlvbiAoZWRnZSlcbntcbiAgdmFyIGR1bW15Tm9kZXMgPSBbXTtcbiAgdmFyIHByZXYgPSBlZGdlLnNvdXJjZTtcblxuICB2YXIgZ3JhcGggPSB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3IoZWRnZS5zb3VyY2UsIGVkZ2UudGFyZ2V0KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2UuYmVuZHBvaW50cy5sZW5ndGg7IGkrKylcbiAge1xuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teU5vZGUgPSB0aGlzLm5ld05vZGUobnVsbCk7XG4gICAgZHVtbXlOb2RlLnNldFJlY3QobmV3IFBvaW50KDAsIDApLCBuZXcgRGltZW5zaW9uKDEsIDEpKTtcblxuICAgIGdyYXBoLmFkZChkdW1teU5vZGUpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBkdW1teSBlZGdlIGJldHdlZW4gcHJldiBhbmQgZHVtbXkgbm9kZVxuICAgIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIuYWRkKGR1bW15RWRnZSwgcHJldiwgZHVtbXlOb2RlKTtcblxuICAgIGR1bW15Tm9kZXMuYWRkKGR1bW15Tm9kZSk7XG4gICAgcHJldiA9IGR1bW15Tm9kZTtcbiAgfVxuXG4gIHZhciBkdW1teUVkZ2UgPSB0aGlzLm5ld0VkZ2UobnVsbCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGVkZ2UudGFyZ2V0KTtcblxuICB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMucHV0KGVkZ2UsIGR1bW15Tm9kZXMpO1xuXG4gIC8vIHJlbW92ZSByZWFsIGVkZ2UgZnJvbSBncmFwaCBtYW5hZ2VyIGlmIGl0IGlzIGludGVyLWdyYXBoXG4gIGlmIChlZGdlLmlzSW50ZXJHcmFwaCgpKVxuICB7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICB9XG4gIC8vIGVsc2UsIHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGdyYXBoXG4gIGVsc2VcbiAge1xuICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcbiAgfVxuXG4gIHJldHVybiBkdW1teU5vZGVzO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGJlbmRwb2ludHMgZm9yIGVkZ2VzIGZyb20gdGhlIGR1bW15IG5vZGVzXG4gKiBhdCBsLWxldmVsLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgZWRnZXMgPSB0aGlzLmVkZ2VUb0R1bW15Tm9kZXMua2V5U2V0KCkuY29uY2F0KGVkZ2VzKTtcblxuICBmb3IgKHZhciBrID0gMDsgayA8IGVkZ2VzLmxlbmd0aDsgaysrKVxuICB7XG4gICAgdmFyIGxFZGdlID0gZWRnZXNba107XG5cbiAgICBpZiAobEVkZ2UuYmVuZHBvaW50cy5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmdldChsRWRnZSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdmFyIGR1bW15Tm9kZSA9IHBhdGhbaV07XG4gICAgICAgIHZhciBwID0gbmV3IFBvaW50RChkdW1teU5vZGUuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgIGR1bW15Tm9kZS5nZXRDZW50ZXJZKCkpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBiZW5kcG9pbnQncyBsb2NhdGlvbiBhY2NvcmRpbmcgdG8gZHVtbXkgbm9kZVxuICAgICAgICB2YXIgZWJwID0gbEVkZ2UuYmVuZHBvaW50cy5nZXQoaSk7XG4gICAgICAgIGVicC54ID0gcC54O1xuICAgICAgICBlYnAueSA9IHAueTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGR1bW15IG5vZGUsIGR1bW15IGVkZ2VzIGluY2lkZW50IHdpdGggdGhpc1xuICAgICAgICAvLyBkdW1teSBub2RlIGlzIGFsc28gcmVtb3ZlZCAod2l0aGluIHRoZSByZW1vdmUgbWV0aG9kKVxuICAgICAgICBkdW1teU5vZGUuZ2V0T3duZXIoKS5yZW1vdmUoZHVtbXlOb2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gYWRkIHRoZSByZWFsIGVkZ2UgdG8gZ3JhcGhcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChsRWRnZSwgbEVkZ2Uuc291cmNlLCBsRWRnZS50YXJnZXQpO1xuICAgIH1cbiAgfVxufTtcblxuTGF5b3V0LnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChzbGlkZXJWYWx1ZSwgZGVmYXVsdFZhbHVlLCBtaW5EaXYsIG1heE11bCkge1xuICBpZiAobWluRGl2ICE9IHVuZGVmaW5lZCAmJiBtYXhNdWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKVxuICAgIHtcbiAgICAgIHZhciBtaW5WYWx1ZSA9IGRlZmF1bHRWYWx1ZSAvIG1pbkRpdjtcbiAgICAgIHZhbHVlIC09ICgoZGVmYXVsdFZhbHVlIC0gbWluVmFsdWUpIC8gNTApICogKDUwIC0gc2xpZGVyVmFsdWUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdmFyIG1heFZhbHVlID0gZGVmYXVsdFZhbHVlICogbWF4TXVsO1xuICAgICAgdmFsdWUgKz0gKChtYXhWYWx1ZSAtIGRlZmF1bHRWYWx1ZSkgLyA1MCkgKiAoc2xpZGVyVmFsdWUgLSA1MCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBhLCBiO1xuXG4gICAgaWYgKHNsaWRlclZhbHVlIDw9IDUwKVxuICAgIHtcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MDAuMDtcbiAgICAgIGIgPSBkZWZhdWx0VmFsdWUgLyAxMC4wO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYSA9IDkuMCAqIGRlZmF1bHRWYWx1ZSAvIDUwLjA7XG4gICAgICBiID0gLTggKiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhICogc2xpZGVyVmFsdWUgKyBiKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBmaW5kcyBhbmQgcmV0dXJucyB0aGUgY2VudGVyIG9mIHRoZSBnaXZlbiBub2RlcywgYXNzdW1pbmdcbiAqIHRoYXQgdGhlIGdpdmVuIG5vZGVzIGZvcm0gYSB0cmVlIGluIHRoZW1zZWx2ZXMuXG4gKi9cbkxheW91dC5maW5kQ2VudGVyT2ZUcmVlID0gZnVuY3Rpb24gKG5vZGVzKVxue1xuICB2YXIgbGlzdCA9IFtdO1xuICBsaXN0ID0gbGlzdC5jb25jYXQobm9kZXMpO1xuXG4gIHZhciByZW1vdmVkTm9kZXMgPSBbXTtcbiAgdmFyIHJlbWFpbmluZ0RlZ3JlZXMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgZm91bmRDZW50ZXIgPSBmYWxzZTtcbiAgdmFyIGNlbnRlck5vZGUgPSBudWxsO1xuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpXG4gIHtcbiAgICBmb3VuZENlbnRlciA9IHRydWU7XG4gICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG4gICAgdmFyIGRlZ3JlZSA9IG5vZGUuZ2V0TmVpZ2hib3JzTGlzdCgpLnNpemUoKTtcbiAgICByZW1haW5pbmdEZWdyZWVzLnB1dChub2RlLCBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCkpO1xuXG4gICAgaWYgKGRlZ3JlZSA9PSAxKVxuICAgIHtcbiAgICAgIHJlbW92ZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0ZW1wTGlzdCA9IFtdO1xuICB0ZW1wTGlzdCA9IHRlbXBMaXN0LmNvbmNhdChyZW1vdmVkTm9kZXMpO1xuXG4gIHdoaWxlICghZm91bmRDZW50ZXIpXG4gIHtcbiAgICB2YXIgdGVtcExpc3QyID0gW107XG4gICAgdGVtcExpc3QyID0gdGVtcExpc3QyLmNvbmNhdCh0ZW1wTGlzdCk7XG4gICAgdGVtcExpc3QgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICB2YXIgbm9kZSA9IGxpc3RbaV07XG5cbiAgICAgIHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZihub2RlKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5laWdoYm91cnMgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKTtcblxuICAgICAgT2JqZWN0LmtleXMobmVpZ2hib3Vycy5zZXQpLmZvckVhY2goZnVuY3Rpb24oaikge1xuICAgICAgICB2YXIgbmVpZ2hib3VyID0gbmVpZ2hib3Vycy5zZXRbal07XG4gICAgICAgIGlmIChyZW1vdmVkTm9kZXMuaW5kZXhPZihuZWlnaGJvdXIpIDwgMClcbiAgICAgICAge1xuICAgICAgICAgIHZhciBvdGhlckRlZ3JlZSA9IHJlbWFpbmluZ0RlZ3JlZXMuZ2V0KG5laWdoYm91cik7XG4gICAgICAgICAgdmFyIG5ld0RlZ3JlZSA9IG90aGVyRGVncmVlIC0gMTtcblxuICAgICAgICAgIGlmIChuZXdEZWdyZWUgPT0gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKG5laWdoYm91cik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVtYWluaW5nRGVncmVlcy5wdXQobmVpZ2hib3VyLCBuZXdEZWdyZWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZW1vdmVkTm9kZXMgPSByZW1vdmVkTm9kZXMuY29uY2F0KHRlbXBMaXN0KTtcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAxIHx8IGxpc3QubGVuZ3RoID09IDIpXG4gICAge1xuICAgICAgZm91bmRDZW50ZXIgPSB0cnVlO1xuICAgICAgY2VudGVyTm9kZSA9IGxpc3RbMF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNlbnRlck5vZGU7XG59O1xuXG4vKipcbiAqIER1cmluZyB0aGUgY29hcnNlbmluZyBwcm9jZXNzLCB0aGlzIGxheW91dCBtYXkgYmUgcmVmZXJlbmNlZCBieSB0d28gZ3JhcGggbWFuYWdlcnNcbiAqIHRoaXMgc2V0dGVyIGZ1bmN0aW9uIGdyYW50cyBhY2Nlc3MgdG8gY2hhbmdlIHRoZSBjdXJyZW50bHkgYmVpbmcgdXNlZCBncmFwaCBtYW5hZ2VyXG4gKi9cbkxheW91dC5wcm90b3R5cGUuc2V0R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKGdtKVxue1xuICB0aGlzLmdyYXBoTWFuYWdlciA9IGdtO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0xheW91dC5qcyIsIi8qXG4gKlRoaXMgY2xhc3MgaXMgdGhlIGphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFBvaW50LmphdmEgY2xhc3MgaW4gamRrXG4gKi9cbmZ1bmN0aW9uIFBvaW50KHgsIHksIHApIHtcbiAgdGhpcy54ID0gbnVsbDtcbiAgdGhpcy55ID0gbnVsbDtcbiAgaWYgKHggPT0gbnVsbCAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgdGhpcy54ID0gMDtcbiAgICB0aGlzLnkgPSAwO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuICBlbHNlIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy54ID0gcC54O1xuICAgIHRoaXMueSA9IHAueTtcbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMueDtcbn1cblxuUG9pbnQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLnk7XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG59XG5cblBvaW50LnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5LCBwKSB7XG4gIGlmICh4LmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1BvaW50JyAmJiB5ID09IG51bGwgJiYgcCA9PSBudWxsKSB7XG4gICAgcCA9IHg7XG4gICAgdGhpcy5zZXRMb2NhdGlvbihwLngsIHAueSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIHggPT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT0gJ251bWJlcicgJiYgcCA9PSBudWxsKSB7XG4gICAgLy9pZiBib3RoIHBhcmFtZXRlcnMgYXJlIGludGVnZXIganVzdCBtb3ZlICh4LHkpIGxvY2F0aW9uXG4gICAgaWYgKHBhcnNlSW50KHgpID09IHggJiYgcGFyc2VJbnQoeSkgPT0geSkge1xuICAgICAgdGhpcy5tb3ZlKHgsIHkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoeCArIDAuNSk7XG4gICAgICB0aGlzLnkgPSBNYXRoLmZsb29yKHkgKyAwLjUpO1xuICAgIH1cbiAgfVxufVxuXG5Qb2ludC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAoZHgsIGR5KSB7XG4gIHRoaXMueCArPSBkeDtcbiAgdGhpcy55ICs9IGR5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqLmNvbnN0cnVjdG9yLm5hbWUgPT0gXCJQb2ludFwiKSB7XG4gICAgdmFyIHB0ID0gb2JqO1xuICAgIHJldHVybiAodGhpcy54ID09IHB0LngpICYmICh0aGlzLnkgPT0gcHQueSk7XG4gIH1cbiAgcmV0dXJuIHRoaXMgPT0gb2JqO1xufVxuXG5Qb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQoKS5jb25zdHJ1Y3Rvci5uYW1lICsgXCJbeD1cIiArIHRoaXMueCArIFwiLHk9XCIgKyB0aGlzLnkgKyBcIl1cIjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvUG9pbnQuanMiLCJmdW5jdGlvbiBSZWN0YW5nbGVEKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy53aWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcblxuICBpZiAoeCAhPSBudWxsICYmIHkgIT0gbnVsbCAmJiB3aWR0aCAhPSBudWxsICYmIGhlaWdodCAhPSBudWxsKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgfVxufVxuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeClcbntcbiAgdGhpcy54ID0geDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxue1xuICB0aGlzLnkgPSB5O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRCb3R0b20gPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24gKGEpXG57XG4gIGlmICh0aGlzLmdldFJpZ2h0KCkgPCBhLngpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5nZXRCb3R0b20oKSA8IGEueSlcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChhLmdldFJpZ2h0KCkgPCB0aGlzLngpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRCb3R0b20oKSA8IHRoaXMueSlcbiAge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRYKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpICsgdGhpcy53aWR0aDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWluWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFkoKTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1heFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRZKCkgKyB0aGlzLmhlaWdodDtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoSGFsZiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLndpZHRoIC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldEhlaWdodEhhbGYgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQgLyAyO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWN0YW5nbGVEO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9SZWN0YW5nbGVELmpzIiwidmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybSh4LCB5KSB7XG4gIHRoaXMubHdvcmxkT3JnWCA9IDAuMDtcbiAgdGhpcy5sd29ybGRPcmdZID0gMC4wO1xuICB0aGlzLmxkZXZpY2VPcmdYID0gMC4wO1xuICB0aGlzLmxkZXZpY2VPcmdZID0gMC4wO1xuICB0aGlzLmx3b3JsZEV4dFggPSAxLjA7XG4gIHRoaXMubHdvcmxkRXh0WSA9IDEuMDtcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IDEuMDtcbiAgdGhpcy5sZGV2aWNlRXh0WSA9IDEuMDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWCA9IGZ1bmN0aW9uICh3b3gpXG57XG4gIHRoaXMubHdvcmxkT3JnWCA9IHdveDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRPcmdZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkT3JnWSA9IGZ1bmN0aW9uICh3b3kpXG57XG4gIHRoaXMubHdvcmxkT3JnWSA9IHdveTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WCA9IGZ1bmN0aW9uICh3ZXgpXG57XG4gIHRoaXMubHdvcmxkRXh0WCA9IHdleDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sd29ybGRFeHRZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldFdvcmxkRXh0WSA9IGZ1bmN0aW9uICh3ZXkpXG57XG4gIHRoaXMubHdvcmxkRXh0WSA9IHdleTtcbn1cblxuLyogRGV2aWNlIHJlbGF0ZWQgKi9cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VPcmdYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZU9yZ1g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uIChkb3gpXG57XG4gIHRoaXMubGRldmljZU9yZ1ggPSBkb3g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoZG95KVxue1xuICB0aGlzLmxkZXZpY2VPcmdZID0gZG95O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZUV4dFggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlRXh0WDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKGRleClcbntcbiAgdGhpcy5sZGV2aWNlRXh0WCA9IGRleDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uIChkZXkpXG57XG4gIHRoaXMubGRldmljZUV4dFkgPSBkZXk7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWCA9IGZ1bmN0aW9uICh4KVxue1xuICB2YXIgeERldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WCA9IHRoaXMubHdvcmxkRXh0WDtcbiAgaWYgKHdvcmxkRXh0WCAhPSAwLjApXG4gIHtcbiAgICB4RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWCArXG4gICAgICAgICAgICAoKHggLSB0aGlzLmx3b3JsZE9yZ1gpICogdGhpcy5sZGV2aWNlRXh0WCAvIHdvcmxkRXh0WCk7XG4gIH1cblxuICByZXR1cm4geERldmljZTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS50cmFuc2Zvcm1ZID0gZnVuY3Rpb24gKHkpXG57XG4gIHZhciB5RGV2aWNlID0gMC4wO1xuICB2YXIgd29ybGRFeHRZID0gdGhpcy5sd29ybGRFeHRZO1xuICBpZiAod29ybGRFeHRZICE9IDAuMClcbiAge1xuICAgIHlEZXZpY2UgPSB0aGlzLmxkZXZpY2VPcmdZICtcbiAgICAgICAgICAgICgoeSAtIHRoaXMubHdvcmxkT3JnWSkgKiB0aGlzLmxkZXZpY2VFeHRZIC8gd29ybGRFeHRZKTtcbiAgfVxuXG5cbiAgcmV0dXJuIHlEZXZpY2U7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeClcbntcbiAgdmFyIHhXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFggPSB0aGlzLmxkZXZpY2VFeHRYO1xuICBpZiAoZGV2aWNlRXh0WCAhPSAwLjApXG4gIHtcbiAgICB4V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1ggK1xuICAgICAgICAgICAgKCh4IC0gdGhpcy5sZGV2aWNlT3JnWCkgKiB0aGlzLmx3b3JsZEV4dFggLyBkZXZpY2VFeHRYKTtcbiAgfVxuXG5cbiAgcmV0dXJuIHhXb3JsZDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5pbnZlcnNlVHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxue1xuICB2YXIgeVdvcmxkID0gMC4wO1xuICB2YXIgZGV2aWNlRXh0WSA9IHRoaXMubGRldmljZUV4dFk7XG4gIGlmIChkZXZpY2VFeHRZICE9IDAuMClcbiAge1xuICAgIHlXb3JsZCA9IHRoaXMubHdvcmxkT3JnWSArXG4gICAgICAgICAgICAoKHkgLSB0aGlzLmxkZXZpY2VPcmdZKSAqIHRoaXMubHdvcmxkRXh0WSAvIGRldmljZUV4dFkpO1xuICB9XG4gIHJldHVybiB5V29ybGQ7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVBvaW50ID0gZnVuY3Rpb24gKGluUG9pbnQpXG57XG4gIHZhciBvdXRQb2ludCA9XG4gICAgICAgICAgbmV3IFBvaW50RCh0aGlzLmludmVyc2VUcmFuc2Zvcm1YKGluUG9pbnQueCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmludmVyc2VUcmFuc2Zvcm1ZKGluUG9pbnQueSkpO1xuICByZXR1cm4gb3V0UG9pbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9UcmFuc2Zvcm0uanMiLCJmdW5jdGlvbiBVbmlxdWVJREdlbmVyZXRvcigpIHtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IubGFzdElEID0gMDtcblxuVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChVbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZShvYmopKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuICBpZiAob2JqLnVuaXF1ZUlEICE9IG51bGwpIHtcbiAgICByZXR1cm4gb2JqLnVuaXF1ZUlEO1xuICB9XG4gIG9iai51bmlxdWVJRCA9IFVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZygpO1xuICBVbmlxdWVJREdlbmVyZXRvci5sYXN0SUQrKztcbiAgcmV0dXJuIG9iai51bmlxdWVJRDtcbn1cblxuVW5pcXVlSURHZW5lcmV0b3IuZ2V0U3RyaW5nID0gZnVuY3Rpb24gKGlkKSB7XG4gIGlmIChpZCA9PSBudWxsKVxuICAgIGlkID0gVW5pcXVlSURHZW5lcmV0b3IubGFzdElEO1xuICByZXR1cm4gXCJPYmplY3QjXCIgKyBpZCArIFwiXCI7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmlzUHJpbWl0aXZlID0gZnVuY3Rpb24gKGFyZykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBhcmc7XG4gIHJldHVybiBhcmcgPT0gbnVsbCB8fCAodHlwZSAhPSBcIm9iamVjdFwiICYmIHR5cGUgIT0gXCJmdW5jdGlvblwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBVbmlxdWVJREdlbmVyZXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ2YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIENvU0VDb25zdGFudHMoKSB7XG59XG5cbi8vQ29TRUNvbnN0YW50cyBpbmhlcml0cyBzdGF0aWMgcHJvcHMgaW4gRkRMYXlvdXRDb25zdGFudHNcbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXRDb25zdGFudHMpIHtcbiAgQ29TRUNvbnN0YW50c1twcm9wXSA9IEZETGF5b3V0Q29uc3RhbnRzW3Byb3BdO1xufVxuXG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfVVNFX01VTFRJX0xFVkVMX1NDQUxJTkcgPSBmYWxzZTtcbkNvU0VDb25zdGFudHMuREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04gPSA2MDtcbkNvU0VDb25zdGFudHMuVElMRSA9IHRydWU7XG5Db1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMID0gMTA7XG5Db1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSAxMDtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFQ29uc3RhbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwidmFyIEZETGF5b3V0RWRnZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXRFZGdlJyk7XG5cbmZ1bmN0aW9uIENvU0VFZGdlKHNvdXJjZSwgdGFyZ2V0LCB2RWRnZSkge1xuICBGRExheW91dEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsIHRhcmdldCwgdkVkZ2UpO1xufVxuXG5Db1NFRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0RWRnZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dEVkZ2UpIHtcbiAgQ29TRUVkZ2VbcHJvcF0gPSBGRExheW91dEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUVkZ2VcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvQ29TRUVkZ2UuanMiLCJ2YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcblxuZnVuY3Rpb24gQ29TRUdyYXBoKHBhcmVudCwgZ3JhcGhNZ3IsIHZHcmFwaCkge1xuICBMR3JhcGguY2FsbCh0aGlzLCBwYXJlbnQsIGdyYXBoTWdyLCB2R3JhcGgpO1xufVxuXG5Db1NFR3JhcGgucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMR3JhcGgucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoKSB7XG4gIENvU0VHcmFwaFtwcm9wXSA9IExHcmFwaFtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFR3JhcGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0NvU0VHcmFwaC5qcyIsInZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG5cbmZ1bmN0aW9uIENvU0VHcmFwaE1hbmFnZXIobGF5b3V0KSB7XG4gIExHcmFwaE1hbmFnZXIuY2FsbCh0aGlzLCBsYXlvdXQpO1xufVxuXG5Db1NFR3JhcGhNYW5hZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoTWFuYWdlci5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhNYW5hZ2VyKSB7XG4gIENvU0VHcmFwaE1hbmFnZXJbcHJvcF0gPSBMR3JhcGhNYW5hZ2VyW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VHcmFwaE1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0NvU0VHcmFwaE1hbmFnZXIuanMiLCJ2YXIgRkRMYXlvdXROb2RlID0gcmVxdWlyZSgnLi9GRExheW91dE5vZGUnKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcblxuZnVuY3Rpb24gQ29TRU5vZGUoZ20sIGxvYywgc2l6ZSwgdk5vZGUpIHtcbiAgRkRMYXlvdXROb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xufVxuXG5cbkNvU0VOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXROb2RlLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0Tm9kZSkge1xuICBDb1NFTm9kZVtwcm9wXSA9IEZETGF5b3V0Tm9kZVtwcm9wXTtcbn1cblxuQ29TRU5vZGUucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoKVxue1xuXG4gIGlmICh0aGlzLmlkID09PSAnZ2x5cGg5Jykge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucmVjdCk7XG4gIH1cblxuICAvLyBjbGVhcnMgdGhlIGZvcmNlcyBjYWxjdWxhdGVkIGZvciB0aGUgbm9kZVxuICB2YXIgY2xlYXJGb3JjZXMgPSBmdW5jdGlvbigpXG4gIHtcbiAgICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gICAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICAgIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gICAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gICAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xuICB9XG5cbiAgdmFyIGxheW91dCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldExheW91dCgpO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VYICsgdGhpcy5yZXB1bHNpb25Gb3JjZVggKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuXG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIC8vIHdoZXRoZXIgdG8gY2FuY2VsIGRpc3BsYWNlbWVudFxuICAvLyBkaXNjcGxhY2VtZW50IGNvdWxkIGJlIGNhbmNlbGVkIGlmIGFueSBvZiB0aGUgbWluL21heCBib3JkZXJzIGlzIGV4Y2VlZFxuICB2YXIgY2FuY2VsRGlzcGxhY2VtZW50ID0gZmFsc2U7XG5cbiAgLy8gY2hlY2sgaG9yaXpvbnRhbCBib3JkZXJzXG4gIGlmICh0aGlzLm1pblggIT09IHVuZGVmaW5lZCB8fCB0aGlzLm1heFggIT09IHVuZGVmaW5lZClcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZXhwZWN0ZWQgWCBjb29yZGluYXRlIGFmdGVyIGRpc3BsYWNlbWVudCBpcyBwZXJmb3JtZWRcbiAgICB2YXIgZXhwZWN0ZWRYID0gdGhpcy5yZWN0LnggKyB0aGlzLmRpc3BsYWNlbWVudFg7XG5cbiAgICBpZiAoICggdGhpcy5tYXhYICE9PSB1bmRlZmluZWQgJiYgZXhwZWN0ZWRYICsgdGhpcy5yZWN0LndpZHRoID4gdGhpcy5tYXhYIClcbiAgICAgICAgICB8fCB0aGlzLm1pblggIT09IHVuZGVmaW5lZCAmJiBleHBlY3RlZFggPCB0aGlzLm1pblggKSB7XG5cbiAgICAgIGNhbmNlbERpc3BsYWNlbWVudCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2sgdmVydGljYWwgYm9yZGVyc1xuICBpZiAodGhpcy5taW5ZICE9PSB1bmRlZmluZWQgfHwgdGhpcy5tYXhZICE9PSB1bmRlZmluZWQpXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGV4cGVjdGVkIFkgY29vcmRpbmF0ZSBhZnRlciBkaXNwbGFjZW1lbnQgaXMgcGVyZm9ybWVkXG4gICAgdmFyIGV4cGVjdGVkWSA9IHRoaXMucmVjdC55ICsgdGhpcy5kaXNwbGFjZW1lbnRZO1xuXG4gICAgaWYgKCAoIHRoaXMubWF4WSAhPT0gdW5kZWZpbmVkICYmIGV4cGVjdGVkWSArIHRoaXMucmVjdC53aWR0aCA+IHRoaXMubWF4WSApXG4gICAgICAgICAgfHwgdGhpcy5taW5ZICE9PSB1bmRlZmluZWQgJiYgZXhwZWN0ZWRZIDwgdGhpcy5taW5ZICkge1xuXG4gICAgICBjYW5jZWxEaXNwbGFjZW1lbnQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIGRpc3BsYWNlbWVudCBpcyBjYW5jZWxlZCBqdXN0IGNsZWFyIHRoZSBmb3JjZXMgYW5kIHJldHVyblxuICBpZiAoIGNhbmNlbERpc3BsYWNlbWVudCApXG4gIHtcbiAgICAgIGNsZWFyRm9yY2VzLmNhbGwodGhpcyk7XG4gICAgICByZXR1cm47XG4gIH1cblxuICAvLyBhIHNpbXBsZSBub2RlLCBqdXN0IG1vdmUgaXRcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBhbiBlbXB0eSBjb21wb3VuZCBub2RlLCBhZ2FpbiBqdXN0IG1vdmUgaXRcbiAgZWxzZSBpZiAodGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIG5vbi1lbXB0eSBjb21wb3VuZCBub2RlLCBwcm9wb2dhdGUgbW92ZW1lbnQgdG8gY2hpbGRyZW4gYXMgd2VsbFxuICBlbHNlXG4gIHtcbiAgICB0aGlzLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4odGhpcy5kaXNwbGFjZW1lbnRYLFxuICAgICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIGxheW91dC50b3RhbERpc3BsYWNlbWVudCArPVxuICAgICAgICAgIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpO1xuXG4gIGlmICh0aGlzLmlkID09PSAnZ2x5cGg5Jykge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucmVjdCk7XG4gIH1cblxuICBjbGVhckZvcmNlcy5jYWxsKHRoaXMpO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4gPSBmdW5jdGlvbiAoZFgsIGRZKVxue1xuICB2YXIgbm9kZXMgPSB0aGlzLmdldENoaWxkKCkuZ2V0Tm9kZXMoKTtcbiAgdmFyIG5vZGU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBub2RlID0gbm9kZXNbaV07XG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKVxuICAgIHtcbiAgICAgIG5vZGUubW92ZUJ5KGRYLCBkWSk7XG4gICAgICBub2RlLmRpc3BsYWNlbWVudFggKz0gZFg7XG4gICAgICBub2RlLmRpc3BsYWNlbWVudFkgKz0gZFk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBub2RlLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4oZFgsIGRZKTtcbiAgICB9XG4gIH1cbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXRQcmVkMSA9IGZ1bmN0aW9uIChwcmVkMSlcbntcbiAgdGhpcy5wcmVkMSA9IHByZWQxO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldFByZWQxID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHByZWQxO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldFByZWQyID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHByZWQyO1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldE5leHQgPSBmdW5jdGlvbiAobmV4dClcbntcbiAgdGhpcy5uZXh0ID0gbmV4dDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5nZXROZXh0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIG5leHQ7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0UHJvY2Vzc2VkID0gZnVuY3Rpb24gKHByb2Nlc3NlZClcbntcbiAgdGhpcy5wcm9jZXNzZWQgPSBwcm9jZXNzZWQ7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuaXNQcm9jZXNzZWQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJvY2Vzc2VkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFTm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvQ29TRU5vZGUuanMiLCJ2YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbnZhciBGRExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vRkRMYXlvdXRDb25zdGFudHMnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xuXG5mdW5jdGlvbiBGRExheW91dCgpIHtcbiAgTGF5b3V0LmNhbGwodGhpcyk7XG5cbiAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbiAgdGhpcy5zcHJpbmdDb25zdGFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIO1xuICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIO1xuICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgPSAoMy4wICogRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCkgLyAxMDA7XG4gIHRoaXMuY29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMuaW5pdGlhbENvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMO1xuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuICB0aGlzLm9sZFRvdGFsRGlzcGxhY2VtZW50ID0gMC4wO1xuICB0aGlzLm1heEl0ZXJhdGlvbnMgPSBGRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUztcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXQpIHtcbiAgRkRMYXlvdXRbcHJvcF0gPSBMYXlvdXRbcHJvcF07XG59XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgTGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKHRoaXMubGF5b3V0UXVhbGl0eSA9PSBMYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSlcbiAge1xuICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSArPSAwLjMwO1xuICAgIHRoaXMubWF4SXRlcmF0aW9ucyAqPSAwLjg7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5QUk9PRl9RVUFMSVRZKVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlIC09IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDEuMjtcbiAgfVxuXG4gIHRoaXMudG90YWxJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuXG4gIHRoaXMudXNlRlJHcmlkVmFyaWFudCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTjtcbiAgXG4gIHRoaXMuZ3JpZCA9IFtdO1xuICAvLyB2YXJpYWJsZXMgZm9yIHRyZWUgcmVkdWN0aW9uIHN1cHBvcnRcbiAgdGhpcy5wcnVuZWROb2Rlc0FsbCA9IFtdO1xuICB0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyA9IDA7XG4gIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5pc1RyZWVHcm93aW5nID0gZmFsc2U7XG4gIHRoaXMuaXNHcm93dGhGaW5pc2hlZCA9IGZhbHNlO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNJZGVhbEVkZ2VMZW5ndGhzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZWRnZTtcbiAgdmFyIGxjYURlcHRoO1xuICB2YXIgc291cmNlO1xuICB2YXIgdGFyZ2V0O1xuICB2YXIgc2l6ZU9mU291cmNlSW5MY2E7XG4gIHZhciBzaXplT2ZUYXJnZXRJbkxjYTtcblxuICB2YXIgYWxsRWRnZXMgPSB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldEFsbEVkZ2VzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsRWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBlZGdlID0gYWxsRWRnZXNbaV07XG5cbiAgICBlZGdlLmlkZWFsTGVuZ3RoID0gdGhpcy5pZGVhbEVkZ2VMZW5ndGg7XG5cbiAgICBpZiAoZWRnZS5pc0ludGVyR3JhcGgpXG4gICAge1xuICAgICAgc291cmNlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgICAgIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIHNpemVPZlNvdXJjZUluTGNhID0gZWRnZS5nZXRTb3VyY2VJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcbiAgICAgIHNpemVPZlRhcmdldEluTGNhID0gZWRnZS5nZXRUYXJnZXRJbkxjYSgpLmdldEVzdGltYXRlZFNpemUoKTtcblxuICAgICAgaWYgKHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbilcbiAgICAgIHtcbiAgICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBzaXplT2ZTb3VyY2VJbkxjYSArIHNpemVPZlRhcmdldEluTGNhIC1cbiAgICAgICAgICAgICAgICAyICogTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkU7XG4gICAgICB9XG5cbiAgICAgIGxjYURlcHRoID0gZWRnZS5nZXRMY2EoKS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKTtcblxuICAgICAgZWRnZS5pZGVhbExlbmd0aCArPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiAqXG4gICAgICAgICAgICAgIChzb3VyY2UuZ2V0SW5jbHVzaW9uVHJlZURlcHRoKCkgK1xuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSAtIDIgKiBsY2FEZXB0aCk7XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuaW5pdFNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24gKCkge1xuXG4gIGlmICh0aGlzLmluY3JlbWVudGFsKVxuICB7XG4gICAgdGhpcy5tYXhOb2RlRGlzcGxhY2VtZW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTDtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSAxLjA7XG4gICAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UO1xuICB9XG5cbiAgdGhpcy5tYXhJdGVyYXRpb25zID1cbiAgICAgICAgICBNYXRoLm1heCh0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoICogNSwgdGhpcy5tYXhJdGVyYXRpb25zKTtcblxuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkID1cbiAgICAgICAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgKiB0aGlzLmdldEFsbE5vZGVzKCkubGVuZ3RoO1xuXG4gIHRoaXMucmVwdWxzaW9uUmFuZ2UgPSB0aGlzLmNhbGNSZXB1bHNpb25SYW5nZSgpO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsRWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBlZGdlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgZWRnZSA9IGxFZGdlc1tpXTtcblxuICAgIHRoaXMuY2FsY1NwcmluZ0ZvcmNlKGVkZ2UsIGVkZ2UuaWRlYWxMZW5ndGgpO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGo7XG4gIHZhciBub2RlQSwgbm9kZUI7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBwcm9jZXNzZWROb2RlU2V0O1xuXG4gIGlmICh0aGlzLnVzZUZSR3JpZFZhcmlhbnQpXG4gIHsgICAgICAgXG4gICAgaWYgKCh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID09IDEgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSlcbiAgICB7ICAgICAgIFxuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7ICBcbiAgICB9XG5cbiAgICBwcm9jZXNzZWROb2RlU2V0ID0gbmV3IFNldCgpO1xuICAgIFxuICAgIC8vIGNhbGN1bGF0ZSByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gZWFjaCBub2RlcyBhbmQgaXRzIHN1cnJvdW5kaW5nXG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlKG5vZGVBLCBwcm9jZXNzZWROb2RlU2V0KTtcbiAgICAgIHByb2Nlc3NlZE5vZGVTZXQuYWRkKG5vZGVBKTtcbiAgICB9XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlQSA9IGxOb2Rlc1tpXTtcblxuICAgICAgZm9yIChqID0gaSArIDE7IGogPCBsTm9kZXMubGVuZ3RoOyBqKyspXG4gICAgICB7XG4gICAgICAgIG5vZGVCID0gbE5vZGVzW2pdO1xuXG4gICAgICAgIC8vIElmIGJvdGggbm9kZXMgYXJlIG5vdCBtZW1iZXJzIG9mIHRoZSBzYW1lIGdyYXBoLCBza2lwLlxuICAgICAgICBpZiAobm9kZUEuZ2V0T3duZXIoKSAhPSBub2RlQi5nZXRPd25lcigpKVxuICAgICAgICB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZShub2RlQSwgbm9kZUIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZTtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBsTm9kZXNbaV07XG4gICAgdGhpcy5jYWxjR3Jhdml0YXRpb25hbEZvcmNlKG5vZGUpO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUubW92ZU5vZGVzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICB2YXIgbm9kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBsTm9kZXNbaV07XG4gICAgbm9kZS5tb3ZlKCk7XG4gIH1cbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNTcHJpbmdGb3JjZSA9IGZ1bmN0aW9uIChlZGdlLCBpZGVhbExlbmd0aCkge1xuICB2YXIgc291cmNlTm9kZSA9IGVkZ2UuZ2V0U291cmNlKCk7XG4gIHZhciB0YXJnZXROb2RlID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICB2YXIgbGVuZ3RoO1xuICB2YXIgc3ByaW5nRm9yY2U7XG4gIHZhciBzcHJpbmdGb3JjZVg7XG4gIHZhciBzcHJpbmdGb3JjZVk7XG5cbiAgLy8gVXBkYXRlIGVkZ2UgbGVuZ3RoXG4gIGlmICh0aGlzLnVuaWZvcm1MZWFmTm9kZVNpemVzICYmXG4gICAgICAgICAgc291cmNlTm9kZS5nZXRDaGlsZCgpID09IG51bGwgJiYgdGFyZ2V0Tm9kZS5nZXRDaGlsZCgpID09IG51bGwpXG4gIHtcbiAgICBlZGdlLnVwZGF0ZUxlbmd0aFNpbXBsZSgpO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoKCk7XG5cbiAgICBpZiAoZWRnZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQpXG4gICAge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGxlbmd0aCA9IGVkZ2UuZ2V0TGVuZ3RoKCk7XG5cbiAgLy8gQ2FsY3VsYXRlIHNwcmluZyBmb3JjZXNcbiAgc3ByaW5nRm9yY2UgPSB0aGlzLnNwcmluZ0NvbnN0YW50ICogKGxlbmd0aCAtIGlkZWFsTGVuZ3RoKTtcblxuICAvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG4gIHNwcmluZ0ZvcmNlWCA9IHNwcmluZ0ZvcmNlICogKGVkZ2UubGVuZ3RoWCAvIGxlbmd0aCk7XG4gIHNwcmluZ0ZvcmNlWSA9IHNwcmluZ0ZvcmNlICogKGVkZ2UubGVuZ3RoWSAvIGxlbmd0aCk7XG5cbiAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSBlbmQgbm9kZXNcbiAgc291cmNlTm9kZS5zcHJpbmdGb3JjZVggKz0gc3ByaW5nRm9yY2VYO1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWSArPSBzcHJpbmdGb3JjZVk7XG4gIHRhcmdldE5vZGUuc3ByaW5nRm9yY2VYIC09IHNwcmluZ0ZvcmNlWDtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVkgLT0gc3ByaW5nRm9yY2VZO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25Gb3JjZSA9IGZ1bmN0aW9uIChub2RlQSwgbm9kZUIpIHtcbiAgdmFyIHJlY3RBID0gbm9kZUEuZ2V0UmVjdCgpO1xuICB2YXIgcmVjdEIgPSBub2RlQi5nZXRSZWN0KCk7XG4gIHZhciBvdmVybGFwQW1vdW50ID0gbmV3IEFycmF5KDIpO1xuICB2YXIgY2xpcFBvaW50cyA9IG5ldyBBcnJheSg0KTtcbiAgdmFyIGRpc3RhbmNlWDtcbiAgdmFyIGRpc3RhbmNlWTtcbiAgdmFyIGRpc3RhbmNlU3F1YXJlZDtcbiAgdmFyIGRpc3RhbmNlO1xuICB2YXIgcmVwdWxzaW9uRm9yY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZVg7XG4gIHZhciByZXB1bHNpb25Gb3JjZVk7XG5cbiAgaWYgKHJlY3RBLmludGVyc2VjdHMocmVjdEIpKS8vIHR3byBub2RlcyBvdmVybGFwXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgc2VwYXJhdGlvbiBhbW91bnQgaW4geCBhbmQgeSBkaXJlY3Rpb25zXG4gICAgSUdlb21ldHJ5LmNhbGNTZXBhcmF0aW9uQW1vdW50KHJlY3RBLFxuICAgICAgICAgICAgcmVjdEIsXG4gICAgICAgICAgICBvdmVybGFwQW1vdW50LFxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDIuMCk7XG5cbiAgICByZXB1bHNpb25Gb3JjZVggPSAyICogb3ZlcmxhcEFtb3VudFswXTtcbiAgICByZXB1bHNpb25Gb3JjZVkgPSAyICogb3ZlcmxhcEFtb3VudFsxXTtcbiAgICBcbiAgICB2YXIgY2hpbGRyZW5Db25zdGFudCA9IG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIChub2RlQS5ub09mQ2hpbGRyZW4gKyBub2RlQi5ub09mQ2hpbGRyZW4pO1xuICAgIFxuICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzXG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VYIC09IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVk7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VZICs9IGNoaWxkcmVuQ29uc3RhbnQgKiByZXB1bHNpb25Gb3JjZVk7XG4gIH1cbiAgZWxzZS8vIG5vIG92ZXJsYXBcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZVxuXG4gICAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiZcbiAgICAgICAgICAgIG5vZGVBLmdldENoaWxkKCkgPT0gbnVsbCAmJiBub2RlQi5nZXRDaGlsZCgpID09IG51bGwpLy8gc2ltcGx5IGJhc2UgcmVwdWxzaW9uIG9uIGRpc3RhbmNlIG9mIG5vZGUgY2VudGVyc1xuICAgIHtcbiAgICAgIGRpc3RhbmNlWCA9IHJlY3RCLmdldENlbnRlclgoKSAtIHJlY3RBLmdldENlbnRlclgoKTtcbiAgICAgIGRpc3RhbmNlWSA9IHJlY3RCLmdldENlbnRlclkoKSAtIHJlY3RBLmdldENlbnRlclkoKTtcbiAgICB9XG4gICAgZWxzZS8vIHVzZSBjbGlwcGluZyBwb2ludHNcbiAgICB7XG4gICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHJlY3RBLCByZWN0QiwgY2xpcFBvaW50cyk7XG5cbiAgICAgIGRpc3RhbmNlWCA9IGNsaXBQb2ludHNbMl0gLSBjbGlwUG9pbnRzWzBdO1xuICAgICAgZGlzdGFuY2VZID0gY2xpcFBvaW50c1szXSAtIGNsaXBQb2ludHNbMV07XG4gICAgfVxuXG4gICAgLy8gTm8gcmVwdWxzaW9uIHJhbmdlLiBGUiBncmlkIHZhcmlhbnQgc2hvdWxkIHRha2UgY2FyZSBvZiB0aGlzLlxuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVgpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKVxuICAgIHtcbiAgICAgIGRpc3RhbmNlWCA9IElNYXRoLnNpZ24oZGlzdGFuY2VYKSAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA8IEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVClcbiAgICB7XG4gICAgICBkaXN0YW5jZVkgPSBJTWF0aC5zaWduKGRpc3RhbmNlWSkgKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1Q7XG4gICAgfVxuXG4gICAgZGlzdGFuY2VTcXVhcmVkID0gZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZO1xuICAgIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGRpc3RhbmNlU3F1YXJlZCk7XG5cbiAgICByZXB1bHNpb25Gb3JjZSA9IHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgKiBub2RlQS5ub09mQ2hpbGRyZW4gKiBub2RlQi5ub09mQ2hpbGRyZW4gLyBkaXN0YW5jZVNxdWFyZWQ7XG5cbiAgICAvLyBQcm9qZWN0IGZvcmNlIG9udG8geCBhbmQgeSBheGVzXG4gICAgcmVwdWxzaW9uRm9yY2VYID0gcmVwdWxzaW9uRm9yY2UgKiBkaXN0YW5jZVggLyBkaXN0YW5jZTtcbiAgICByZXB1bHNpb25Gb3JjZVkgPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWSAvIGRpc3RhbmNlO1xuICAgICBcbiAgICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIHR3byBub2RlcyAgICBcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWSAtPSByZXB1bHNpb25Gb3JjZVk7XG4gICAgbm9kZUIucmVwdWxzaW9uRm9yY2VYICs9IHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gcmVwdWxzaW9uRm9yY2VZO1xuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBvd25lckdyYXBoO1xuICB2YXIgb3duZXJDZW50ZXJYO1xuICB2YXIgb3duZXJDZW50ZXJZO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgYWJzRGlzdGFuY2VYO1xuICB2YXIgYWJzRGlzdGFuY2VZO1xuICB2YXIgZXN0aW1hdGVkU2l6ZTtcbiAgb3duZXJHcmFwaCA9IG5vZGUuZ2V0T3duZXIoKTtcblxuICBvd25lckNlbnRlclggPSAob3duZXJHcmFwaC5nZXRSaWdodCgpICsgb3duZXJHcmFwaC5nZXRMZWZ0KCkpIC8gMjtcbiAgb3duZXJDZW50ZXJZID0gKG93bmVyR3JhcGguZ2V0VG9wKCkgKyBvd25lckdyYXBoLmdldEJvdHRvbSgpKSAvIDI7XG4gIGRpc3RhbmNlWCA9IG5vZGUuZ2V0Q2VudGVyWCgpIC0gb3duZXJDZW50ZXJYO1xuICBkaXN0YW5jZVkgPSBub2RlLmdldENlbnRlclkoKSAtIG93bmVyQ2VudGVyWTtcbiAgYWJzRGlzdGFuY2VYID0gTWF0aC5hYnMoZGlzdGFuY2VYKSArIG5vZGUuZ2V0V2lkdGgoKSAvIDI7XG4gIGFic0Rpc3RhbmNlWSA9IE1hdGguYWJzKGRpc3RhbmNlWSkgKyBub2RlLmdldEhlaWdodCgpIC8gMjtcblxuICBpZiAobm9kZS5nZXRPd25lcigpID09IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSkvLyBpbiB0aGUgcm9vdCBncmFwaFxuICB7XG4gICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICBpZiAoYWJzRGlzdGFuY2VYID4gZXN0aW1hdGVkU2l6ZSB8fCBhYnNEaXN0YW5jZVkgPiBlc3RpbWF0ZWRTaXplKVxuICAgIHtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVggPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVg7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZO1xuICAgIH1cbiAgfVxuICBlbHNlLy8gaW5zaWRlIGEgY29tcG91bmRcbiAge1xuICAgIGVzdGltYXRlZFNpemUgPSBvd25lckdyYXBoLmdldEVzdGltYXRlZFNpemUoKSAqIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3I7XG5cbiAgICBpZiAoYWJzRGlzdGFuY2VYID4gZXN0aW1hdGVkU2l6ZSB8fCBhYnNEaXN0YW5jZVkgPiBlc3RpbWF0ZWRTaXplKVxuICAgIHtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVggPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVggKlxuICAgICAgICAgICAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50O1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWSA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWSAqXG4gICAgICAgICAgICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuaXNDb252ZXJnZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb252ZXJnZWQ7XG4gIHZhciBvc2NpbGF0aW5nID0gZmFsc2U7XG5cbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zID4gdGhpcy5tYXhJdGVyYXRpb25zIC8gMylcbiAge1xuICAgIG9zY2lsYXRpbmcgPVxuICAgICAgICAgICAgTWF0aC5hYnModGhpcy50b3RhbERpc3BsYWNlbWVudCAtIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQpIDwgMjtcbiAgfVxuXG4gIGNvbnZlcmdlZCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPCB0aGlzLnRvdGFsRGlzcGxhY2VtZW50VGhyZXNob2xkO1xuXG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSB0aGlzLnRvdGFsRGlzcGxhY2VtZW50O1xuXG4gIHJldHVybiBjb252ZXJnZWQgfHwgb3NjaWxhdGluZztcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgJiYgIXRoaXMuaXNTdWJMYXlvdXQpXG4gIHtcbiAgICBpZiAodGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPT0gdGhpcy5hbmltYXRpb25QZXJpb2QpXG4gICAge1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zID0gMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMubm90QW5pbWF0ZWRJdGVyYXRpb25zKys7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogRlItR3JpZCBWYXJpYW50IFJlcHVsc2lvbiBGb3JjZSBDYWxjdWxhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNHcmlkID0gZnVuY3Rpb24gKGdyYXBoKXtcblxuICB2YXIgc2l6ZVggPSAwOyBcbiAgdmFyIHNpemVZID0gMDtcbiAgXG4gIHNpemVYID0gcGFyc2VJbnQoTWF0aC5jZWlsKChncmFwaC5nZXRSaWdodCgpIC0gZ3JhcGguZ2V0TGVmdCgpKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc2l6ZVkgPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldEJvdHRvbSgpIC0gZ3JhcGguZ2V0VG9wKCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBcbiAgdmFyIGdyaWQgPSBuZXcgQXJyYXkoc2l6ZVgpO1xuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspe1xuICAgIGdyaWRbaV0gPSBuZXcgQXJyYXkoc2l6ZVkpOyAgICBcbiAgfVxuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IHNpemVYOyBpKyspe1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBzaXplWTsgaisrKXtcbiAgICAgIGdyaWRbaV1bal0gPSBuZXcgQXJyYXkoKTsgICAgXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gZ3JpZDtcbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5hZGROb2RlVG9HcmlkID0gZnVuY3Rpb24gKHYsIGxlZnQsIHRvcCl7XG4gICAgXG4gIHZhciBzdGFydFggPSAwO1xuICB2YXIgZmluaXNoWCA9IDA7XG4gIHZhciBzdGFydFkgPSAwO1xuICB2YXIgZmluaXNoWSA9IDA7XG4gIFxuICBzdGFydFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS54IC0gbGVmdCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFggPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS53aWR0aCArIHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgc3RhcnRZID0gcGFyc2VJbnQoTWF0aC5mbG9vcigodi5nZXRSZWN0KCkueSAtIHRvcCkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIGZpbmlzaFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS5oZWlnaHQgKyB2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcblxuICBmb3IgKHZhciBpID0gc3RhcnRYOyBpIDw9IGZpbmlzaFg7IGkrKylcbiAge1xuICAgIGZvciAodmFyIGogPSBzdGFydFk7IGogPD0gZmluaXNoWTsgaisrKVxuICAgIHtcbiAgICAgIHRoaXMuZ3JpZFtpXVtqXS5wdXNoKHYpO1xuICAgICAgdi5zZXRHcmlkQ29vcmRpbmF0ZXMoc3RhcnRYLCBmaW5pc2hYLCBzdGFydFksIGZpbmlzaFkpOyBcbiAgICB9XG4gIH0gIFxuXG59O1xuXG5GRExheW91dC5wcm90b3R5cGUudXBkYXRlR3JpZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaTtcbiAgdmFyIG5vZGVBO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2RlcygpO1xuICBcbiAgdGhpcy5ncmlkID0gdGhpcy5jYWxjR3JpZCh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkpOyAgIFxuXG4gIC8vIHB1dCBhbGwgbm9kZXMgdG8gcHJvcGVyIGdyaWQgY2VsbHNcbiAgZm9yIChpID0gMDsgaSA8IGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgIHRoaXMuYWRkTm9kZVRvR3JpZChub2RlQSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldExlZnQoKSwgdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldFRvcCgpKTtcbiAgfSBcblxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZVJlcHVsc2lvbkZvcmNlT2ZBTm9kZSA9IGZ1bmN0aW9uIChub2RlQSwgcHJvY2Vzc2VkTm9kZVNldCl7XG4gIFxuICBpZiAoKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHx8ICh0aGlzLmdyb3dUcmVlSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc1RyZWVHcm93aW5nKSB8fCAodGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgJSAxMCA9PSAxICYmIHRoaXMuaXNHcm93dGhGaW5pc2hlZCkpXG4gIHtcbiAgICB2YXIgc3Vycm91bmRpbmcgPSBuZXcgU2V0KCk7XG4gICAgbm9kZUEuc3Vycm91bmRpbmcgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgbm9kZUI7XG4gICAgdmFyIGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IChub2RlQS5zdGFydFggLSAxKTsgaSA8IChub2RlQS5maW5pc2hYICsgMik7IGkrKylcbiAgICB7XG4gICAgICBmb3IgKHZhciBqID0gKG5vZGVBLnN0YXJ0WSAtIDEpOyBqIDwgKG5vZGVBLmZpbmlzaFkgKyAyKTsgaisrKVxuICAgICAge1xuICAgICAgICBpZiAoISgoaSA8IDApIHx8IChqIDwgMCkgfHwgKGkgPj0gZ3JpZC5sZW5ndGgpIHx8IChqID49IGdyaWRbMF0ubGVuZ3RoKSkpXG4gICAgICAgIHsgIFxuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgZ3JpZFtpXVtqXS5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbm9kZUIgPSBncmlkW2ldW2pdW2tdO1xuXG4gICAgICAgICAgICAvLyBJZiBib3RoIG5vZGVzIGFyZSBub3QgbWVtYmVycyBvZiB0aGUgc2FtZSBncmFwaCwgXG4gICAgICAgICAgICAvLyBvciBib3RoIG5vZGVzIGFyZSB0aGUgc2FtZSwgc2tpcC5cbiAgICAgICAgICAgIGlmICgobm9kZUEuZ2V0T3duZXIoKSAhPSBub2RlQi5nZXRPd25lcigpKSB8fCAobm9kZUEgPT0gbm9kZUIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHJlcHVsc2lvbiBmb3JjZSBiZXR3ZWVuXG4gICAgICAgICAgICAvLyBub2RlQSBhbmQgbm9kZUIgaGFzIGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkXG4gICAgICAgICAgICBpZiAoIXByb2Nlc3NlZE5vZGVTZXQuaGFzKG5vZGVCKSAmJiAhc3Vycm91bmRpbmcuaGFzKG5vZGVCKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclgoKS1ub2RlQi5nZXRDZW50ZXJYKCkpIC0gXG4gICAgICAgICAgICAgICAgICAgICgobm9kZUEuZ2V0V2lkdGgoKS8yKSArIChub2RlQi5nZXRXaWR0aCgpLzIpKTtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IE1hdGguYWJzKG5vZGVBLmdldENlbnRlclkoKS1ub2RlQi5nZXRDZW50ZXJZKCkpIC0gXG4gICAgICAgICAgICAgICAgICAgICgobm9kZUEuZ2V0SGVpZ2h0KCkvMikgKyAobm9kZUIuZ2V0SGVpZ2h0KCkvMikpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vZGVBIGFuZCBub2RlQiBcbiAgICAgICAgICAgICAgLy8gaXMgbGVzcyB0aGVuIGNhbGN1bGF0aW9uIHJhbmdlXG4gICAgICAgICAgICAgIGlmICgoZGlzdGFuY2VYIDw9IHRoaXMucmVwdWxzaW9uUmFuZ2UpICYmIChkaXN0YW5jZVkgPD0gdGhpcy5yZXB1bHNpb25SYW5nZSkpXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvL3RoZW4gYWRkIG5vZGVCIHRvIHN1cnJvdW5kaW5nIG9mIG5vZGVBXG4gICAgICAgICAgICAgICAgc3Vycm91bmRpbmcuYWRkKG5vZGVCKTtcbiAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IFsuLi5zdXJyb3VuZGluZ107XG5cdFxuICB9XG4gIGZvciAoaSA9IDA7IGkgPCBub2RlQS5zdXJyb3VuZGluZy5sZW5ndGg7IGkrKylcbiAge1xuICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQS5zdXJyb3VuZGluZ1tpXSk7XG4gIH1cdFxufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIDAuMDtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBUcmVlIFJlZHVjdGlvbiBtZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUmVkdWNlIHRyZWVzIFxuRkRMYXlvdXQucHJvdG90eXBlLnJlZHVjZVRyZWVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHBydW5lZE5vZGVzQWxsID0gW107XG4gIHZhciBjb250YWluc0xlYWYgPSB0cnVlO1xuICB2YXIgbm9kZTtcbiAgXG4gIHdoaWxlKGNvbnRhaW5zTGVhZikge1xuICAgIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gICAgdmFyIHBydW5lZE5vZGVzSW5TdGVwVGVtcCA9IFtdO1xuICAgIGNvbnRhaW5zTGVhZiA9IGZhbHNlO1xuICAgIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICAgIGlmKG5vZGUuZ2V0RWRnZXMoKS5sZW5ndGggPT0gMSAmJiAhbm9kZS5nZXRFZGdlcygpWzBdLmlzSW50ZXJHcmFwaCAmJiBub2RlLmdldENoaWxkKCkgPT0gbnVsbCl7XG4gICAgICAgIHBydW5lZE5vZGVzSW5TdGVwVGVtcC5wdXNoKFtub2RlLCBub2RlLmdldEVkZ2VzKClbMF0sIG5vZGUuZ2V0T3duZXIoKV0pO1xuICAgICAgICBjb250YWluc0xlYWYgPSB0cnVlO1xuICAgICAgfSAgXG4gICAgfVxuICAgIGlmKGNvbnRhaW5zTGVhZiA9PSB0cnVlKXtcbiAgICAgIHZhciBwcnVuZWROb2Rlc0luU3RlcCA9IFtdO1xuICAgICAgZm9yKHZhciBqID0gMDsgaiA8IHBydW5lZE5vZGVzSW5TdGVwVGVtcC5sZW5ndGg7IGorKyl7XG4gICAgICAgIGlmKHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXS5nZXRFZGdlcygpLmxlbmd0aCA9PSAxKXtcbiAgICAgICAgICBwcnVuZWROb2Rlc0luU3RlcC5wdXNoKHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXSk7ICBcbiAgICAgICAgICBwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0uZ2V0T3duZXIoKS5yZW1vdmUocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJ1bmVkTm9kZXNBbGwucHVzaChwcnVuZWROb2Rlc0luU3RlcCk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gICAgfVxuICB9XG4gIHRoaXMucHJ1bmVkTm9kZXNBbGwgPSBwcnVuZWROb2Rlc0FsbDtcbn07XG5cbi8vIEdyb3cgdHJlZSBvbmUgc3RlcCBcbkZETGF5b3V0LnByb3RvdHlwZS5ncm93VHJlZSA9IGZ1bmN0aW9uKHBydW5lZE5vZGVzQWxsKVxue1xuICB2YXIgbGVuZ3RoT2ZQcnVuZWROb2Rlc0luU3RlcCA9IHBydW5lZE5vZGVzQWxsLmxlbmd0aDsgXG4gIHZhciBwcnVuZWROb2Rlc0luU3RlcCA9IHBydW5lZE5vZGVzQWxsW2xlbmd0aE9mUHJ1bmVkTm9kZXNJblN0ZXAgLSAxXTsgIFxuXG4gIHZhciBub2RlRGF0YTsgIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgcHJ1bmVkTm9kZXNJblN0ZXAubGVuZ3RoOyBpKyspe1xuICAgIG5vZGVEYXRhID0gcHJ1bmVkTm9kZXNJblN0ZXBbaV07XG5cbiAgICB0aGlzLmZpbmRQbGFjZWZvclBydW5lZE5vZGUobm9kZURhdGEpO1xuICAgIFxuICAgIG5vZGVEYXRhWzJdLmFkZChub2RlRGF0YVswXSk7XG4gICAgbm9kZURhdGFbMl0uYWRkKG5vZGVEYXRhWzFdLCBub2RlRGF0YVsxXS5zb3VyY2UsIG5vZGVEYXRhWzFdLnRhcmdldCk7XG4gIH1cblxuICBwcnVuZWROb2Rlc0FsbC5zcGxpY2UocHJ1bmVkTm9kZXNBbGwubGVuZ3RoLTEsIDEpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbn07XG5cbi8vIEZpbmQgYW4gYXBwcm9wcmlhdGUgcG9zaXRpb24gdG8gcmVwbGFjZSBwcnVuZWQgbm9kZSwgdGhpcyBtZXRob2QgY2FuIGJlIGltcHJvdmVkXG5GRExheW91dC5wcm90b3R5cGUuZmluZFBsYWNlZm9yUHJ1bmVkTm9kZSA9IGZ1bmN0aW9uKG5vZGVEYXRhKXtcbiAgXG4gIHZhciBncmlkRm9yUHJ1bmVkTm9kZTsgIFxuICB2YXIgbm9kZVRvQ29ubmVjdDtcbiAgdmFyIHBydW5lZE5vZGUgPSBub2RlRGF0YVswXTtcbiAgaWYocHJ1bmVkTm9kZSA9PSBub2RlRGF0YVsxXS5zb3VyY2Upe1xuICAgIG5vZGVUb0Nvbm5lY3QgPSBub2RlRGF0YVsxXS50YXJnZXQ7XG4gIH1cbiAgZWxzZSB7XG4gICAgbm9kZVRvQ29ubmVjdCA9IG5vZGVEYXRhWzFdLnNvdXJjZTsgIFxuICB9XG4gIHZhciBzdGFydEdyaWRYID0gbm9kZVRvQ29ubmVjdC5zdGFydFg7XG4gIHZhciBmaW5pc2hHcmlkWCA9IG5vZGVUb0Nvbm5lY3QuZmluaXNoWDtcbiAgdmFyIHN0YXJ0R3JpZFkgPSBub2RlVG9Db25uZWN0LnN0YXJ0WTtcbiAgdmFyIGZpbmlzaEdyaWRZID0gbm9kZVRvQ29ubmVjdC5maW5pc2hZOyBcbiAgXG4gIHZhciB1cE5vZGVDb3VudCA9IDA7XG4gIHZhciBkb3duTm9kZUNvdW50ID0gMDtcbiAgdmFyIHJpZ2h0Tm9kZUNvdW50ID0gMDtcbiAgdmFyIGxlZnROb2RlQ291bnQgPSAwO1xuICB2YXIgY29udHJvbFJlZ2lvbnMgPSBbdXBOb2RlQ291bnQsIHJpZ2h0Tm9kZUNvdW50LCBkb3duTm9kZUNvdW50LCBsZWZ0Tm9kZUNvdW50XVxuICBcbiAgaWYoc3RhcnRHcmlkWSA+IDApe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFg7IGkgPD0gZmluaXNoR3JpZFg7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMF0gKz0gKHRoaXMuZ3JpZFtpXVtzdGFydEdyaWRZIC0gMV0ubGVuZ3RoICsgdGhpcy5ncmlkW2ldW3N0YXJ0R3JpZFldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICBpZihmaW5pc2hHcmlkWCA8IHRoaXMuZ3JpZC5sZW5ndGggLSAxKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRZOyBpIDw9IGZpbmlzaEdyaWRZOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzFdICs9ICh0aGlzLmdyaWRbZmluaXNoR3JpZFggKyAxXVtpXS5sZW5ndGggKyB0aGlzLmdyaWRbZmluaXNoR3JpZFhdW2ldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICBpZihmaW5pc2hHcmlkWSA8IHRoaXMuZ3JpZFswXS5sZW5ndGggLSAxKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRYOyBpIDw9IGZpbmlzaEdyaWRYOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzJdICs9ICh0aGlzLmdyaWRbaV1bZmluaXNoR3JpZFkgKyAxXS5sZW5ndGggKyB0aGlzLmdyaWRbaV1bZmluaXNoR3JpZFldLmxlbmd0aCAtIDEpOyAgIFxuICAgIH1cbiAgfVxuICBpZihzdGFydEdyaWRYID4gMCl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWTsgaSA8PSBmaW5pc2hHcmlkWTsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1szXSArPSAodGhpcy5ncmlkW3N0YXJ0R3JpZFggLSAxXVtpXS5sZW5ndGggKyB0aGlzLmdyaWRbc3RhcnRHcmlkWF1baV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIHZhciBtaW4gPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIG1pbkNvdW50O1xuICB2YXIgbWluSW5kZXg7XG4gIGZvcih2YXIgaiA9IDA7IGogPCBjb250cm9sUmVnaW9ucy5sZW5ndGg7IGorKyl7XG4gICAgaWYoY29udHJvbFJlZ2lvbnNbal0gPCBtaW4pe1xuICAgICAgbWluID0gY29udHJvbFJlZ2lvbnNbal07XG4gICAgICBtaW5Db3VudCA9IDE7XG4gICAgICBtaW5JbmRleCA9IGo7XG4gICAgfSAgXG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1tqXSA9PSBtaW4pe1xuICAgICAgbWluQ291bnQrKzsgIFxuICAgIH1cbiAgfVxuICBcbiAgaWYobWluQ291bnQgPT0gMyAmJiBtaW4gPT0gMCl7XG4gICAgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDApe1xuICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxOyAgICBcbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7ICBcbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7ICBcbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7ICBcbiAgICB9XG4gIH1cbiAgZWxzZSBpZihtaW5Db3VudCA9PSAyICYmIG1pbiA9PSAwKXtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1sxXSA9PSAwKXs7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzJdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMF0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAzO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1sxXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDI7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYobWluQ291bnQgPT0gNCAmJiBtaW4gPT0gMCl7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xuICAgIGdyaWRGb3JQcnVuZWROb2RlID0gcmFuZG9tOyAgXG4gIH1cbiAgZWxzZSB7XG4gICAgZ3JpZEZvclBydW5lZE5vZGUgPSBtaW5JbmRleDtcbiAgfVxuICBcbiAgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMCkge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpIC0gbm9kZVRvQ29ubmVjdC5nZXRIZWlnaHQoKS8yIC0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAtIHBydW5lZE5vZGUuZ2V0SGVpZ2h0KCkvMik7ICBcbiAgfVxuICBlbHNlIGlmKGdyaWRGb3JQcnVuZWROb2RlID09IDEpIHtcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSArIG5vZGVUb0Nvbm5lY3QuZ2V0V2lkdGgoKS8yICsgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCArIHBydW5lZE5vZGUuZ2V0V2lkdGgoKS8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpKTsgIFxuICB9XG4gIGVsc2UgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMikge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpICsgbm9kZVRvQ29ubmVjdC5nZXRIZWlnaHQoKS8yICsgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCArIHBydW5lZE5vZGUuZ2V0SGVpZ2h0KCkvMik7ICBcbiAgfVxuICBlbHNlIHsgXG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCkgLSBub2RlVG9Db25uZWN0LmdldFdpZHRoKCkvMiAtIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggLSBwcnVuZWROb2RlLmdldFdpZHRoKCkvMixcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9Db25uZWN0LmdldENlbnRlclkoKSk7ICBcbiAgfVxuICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0ZETGF5b3V0LmpzIiwidmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBGRExheW91dEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbiAgdGhpcy5pZGVhbExlbmd0aCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG59XG5cbkZETGF5b3V0RWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExFZGdlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTEVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlW3Byb3BdID0gTEVkZ2VbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRFZGdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9GRExheW91dEVkZ2UuanMiLCJ2YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0Tm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xuICAvLyBhbHRlcm5hdGl2ZSBjb25zdHJ1Y3RvciBpcyBoYW5kbGVkIGluc2lkZSBMTm9kZVxuICBMTm9kZS5jYWxsKHRoaXMsIGdtLCBsb2MsIHNpemUsIHZOb2RlKTtcbiAgLy9TcHJpbmcsIHJlcHVsc2lvbiBhbmQgZ3Jhdml0YXRpb25hbCBmb3JjZXMgYWN0aW5nIG9uIHRoaXMgbm9kZVxuICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gIHRoaXMuc3ByaW5nRm9yY2VZID0gMDtcbiAgdGhpcy5yZXB1bHNpb25Gb3JjZVggPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVggPSAwO1xuICB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZID0gMDtcbiAgLy9BbW91bnQgYnkgd2hpY2ggdGhpcyBub2RlIGlzIHRvIGJlIG1vdmVkIGluIHRoaXMgaXRlcmF0aW9uXG4gIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG5cbiAgLy9TdGFydCBhbmQgZmluaXNoIGdyaWQgY29vcmRpbmF0ZXMgdGhhdCB0aGlzIG5vZGUgaXMgZmFsbGVuIGludG9cbiAgdGhpcy5zdGFydFggPSAwO1xuICB0aGlzLmZpbmlzaFggPSAwO1xuICB0aGlzLnN0YXJ0WSA9IDA7XG4gIHRoaXMuZmluaXNoWSA9IDA7XG5cbiAgLy9HZW9tZXRyaWMgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZVxuICB0aGlzLnN1cnJvdW5kaW5nID0gW107XG59XG5cbkZETGF5b3V0Tm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExOb2RlLnByb3RvdHlwZSk7XG5cbmZvciAodmFyIHByb3AgaW4gTE5vZGUpIHtcbiAgRkRMYXlvdXROb2RlW3Byb3BdID0gTE5vZGVbcHJvcF07XG59XG5cbkZETGF5b3V0Tm9kZS5wcm90b3R5cGUuc2V0R3JpZENvb3JkaW5hdGVzID0gZnVuY3Rpb24gKF9zdGFydFgsIF9maW5pc2hYLCBfc3RhcnRZLCBfZmluaXNoWSlcbntcbiAgdGhpcy5zdGFydFggPSBfc3RhcnRYO1xuICB0aGlzLmZpbmlzaFggPSBfZmluaXNoWDtcbiAgdGhpcy5zdGFydFkgPSBfc3RhcnRZO1xuICB0aGlzLmZpbmlzaFkgPSBfZmluaXNoWTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dE5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsInZhciBVbmlxdWVJREdlbmVyZXRvciA9IHJlcXVpcmUoJy4vVW5pcXVlSURHZW5lcmV0b3InKTtcblxuZnVuY3Rpb24gSGFzaE1hcCgpIHtcbiAgdGhpcy5tYXAgPSB7fTtcbiAgdGhpcy5rZXlzID0gW107XG59XG5cbkhhc2hNYXAucHJvdG90eXBlLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciB0aGVJZCA9IFVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEKGtleSk7XG4gIGlmICghdGhpcy5jb250YWlucyh0aGVJZCkpIHtcbiAgICB0aGlzLm1hcFt0aGVJZF0gPSB2YWx1ZTtcbiAgICB0aGlzLmtleXMucHVzaChrZXkpO1xuICB9XG59O1xuXG5IYXNoTWFwLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgcmV0dXJuIHRoaXMubWFwW2tleV0gIT0gbnVsbDtcbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgcmV0dXJuIHRoaXMubWFwW3RoZUlkXTtcbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmtleVNldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMua2V5cztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaE1hcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvSGFzaE1hcC5qcyIsImZ1bmN0aW9uIFJhbmRvbVNlZWQoKSB7XG59XG5SYW5kb21TZWVkLnNlZWQgPSAxO1xuUmFuZG9tU2VlZC54ID0gMDtcblxuUmFuZG9tU2VlZC5uZXh0RG91YmxlID0gZnVuY3Rpb24gKCkge1xuICBSYW5kb21TZWVkLnggPSBNYXRoLnNpbihSYW5kb21TZWVkLnNlZWQrKykgKiAxMDAwMDtcbiAgcmV0dXJuIFJhbmRvbVNlZWQueCAtIE1hdGguZmxvb3IoUmFuZG9tU2VlZC54KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmFuZG9tU2VlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvUmFuZG9tU2VlZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIERpbWVuc2lvbkQgPSByZXF1aXJlKCcuL0RpbWVuc2lvbkQnKTtcbnZhciBIYXNoTWFwID0gcmVxdWlyZSgnLi9IYXNoTWFwJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9Qb2ludCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vUmFuZG9tU2VlZCcpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xudmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xudmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcbnZhciBMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0xheW91dENvbnN0YW50cycpO1xudmFyIEZETGF5b3V0ID0gcmVxdWlyZSgnLi9GRExheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIEZETGF5b3V0RWRnZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXRFZGdlJyk7XG52YXIgRkRMYXlvdXROb2RlID0gcmVxdWlyZSgnLi9GRExheW91dE5vZGUnKTtcbnZhciBDb1NFQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db1NFQ29uc3RhbnRzJyk7XG52YXIgQ29TRUVkZ2UgPSByZXF1aXJlKCcuL0NvU0VFZGdlJyk7XG52YXIgQ29TRUdyYXBoID0gcmVxdWlyZSgnLi9Db1NFR3JhcGgnKTtcbnZhciBDb1NFR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9Db1NFR3JhcGhNYW5hZ2VyJyk7XG52YXIgQ29TRUxheW91dCA9IHJlcXVpcmUoJy4vQ29TRUxheW91dCcpO1xudmFyIENvU0VOb2RlID0gcmVxdWlyZSgnLi9Db1NFTm9kZScpO1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gIC8vIENhbGxlZCBvbiBgbGF5b3V0cmVhZHlgXG4gIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIENhbGxlZCBvbiBgbGF5b3V0c3RvcGBcbiAgc3RvcDogZnVuY3Rpb24gKCkge1xuICB9LFxuICAvLyBpbmNsdWRlIGxhYmVscyBpbiBub2RlIGRpbWVuc2lvbnNcbiAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiBmYWxzZSxcbiAgLy8gbnVtYmVyIG9mIHRpY2tzIHBlciBmcmFtZTsgaGlnaGVyIGlzIGZhc3RlciBidXQgbW9yZSBqZXJreVxuICByZWZyZXNoOiAzMCxcbiAgLy8gV2hldGhlciB0byBmaXQgdGhlIG5ldHdvcmsgdmlldyBhZnRlciB3aGVuIGRvbmVcbiAgZml0OiB0cnVlLFxuICAvLyBQYWRkaW5nIG9uIGZpdFxuICBwYWRkaW5nOiAxMCxcbiAgLy8gV2hldGhlciB0byBlbmFibGUgaW5jcmVtZW50YWwgbW9kZVxuICByYW5kb21pemU6IHRydWUsXG4gIC8vIE5vZGUgcmVwdWxzaW9uIChub24gb3ZlcmxhcHBpbmcpIG11bHRpcGxpZXJcbiAgbm9kZVJlcHVsc2lvbjogNDUwMCxcbiAgLy8gSWRlYWwgZWRnZSAobm9uIG5lc3RlZCkgbGVuZ3RoXG4gIGlkZWFsRWRnZUxlbmd0aDogNTAsXG4gIC8vIERpdmlzb3IgdG8gY29tcHV0ZSBlZGdlIGZvcmNlc1xuICBlZGdlRWxhc3RpY2l0eTogMC40NSxcbiAgLy8gTmVzdGluZyBmYWN0b3IgKG11bHRpcGxpZXIpIHRvIGNvbXB1dGUgaWRlYWwgZWRnZSBsZW5ndGggZm9yIG5lc3RlZCBlZGdlc1xuICBuZXN0aW5nRmFjdG9yOiAwLjEsXG4gIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KVxuICBncmF2aXR5OiAwLjI1LFxuICAvLyBNYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHBlcmZvcm1cbiAgbnVtSXRlcjogMjUwMCxcbiAgLy8gRm9yIGVuYWJsaW5nIHRpbGluZ1xuICB0aWxlOiB0cnVlLFxuICAvLyBUeXBlIG9mIGxheW91dCBhbmltYXRpb24uIFRoZSBvcHRpb24gc2V0IGlzIHsnZHVyaW5nJywgJ2VuZCcsIGZhbHNlfVxuICBhbmltYXRlOiAnZW5kJyxcbiAgLy8gRHVyYXRpb24gZm9yIGFuaW1hdGU6ZW5kXG4gIGFuaW1hdGlvbkR1cmF0aW9uOiA1MDAsXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgdmVydGljYWwgc3BhY2UgdG8gcHV0IGJldHdlZW4gdGhlIHplcm8gZGVncmVlIG1lbWJlcnMgZHVyaW5nIHRoZSB0aWxpbmcgb3BlcmF0aW9uKGNhbiBhbHNvIGJlIGEgZnVuY3Rpb24pXG4gIHRpbGluZ1BhZGRpbmdWZXJ0aWNhbDogMTAsXG4gIC8vIFJlcHJlc2VudHMgdGhlIGFtb3VudCBvZiB0aGUgaG9yaXpvbnRhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ0hvcml6b250YWw6IDEwLFxuICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICBncmF2aXR5UmFuZ2VDb21wb3VuZDogMS41LFxuICAvLyBHcmF2aXR5IGZvcmNlIChjb25zdGFudCkgZm9yIGNvbXBvdW5kc1xuICBncmF2aXR5Q29tcG91bmQ6IDEuMCxcbiAgLy8gR3Jhdml0eSByYW5nZSAoY29uc3RhbnQpXG4gIGdyYXZpdHlSYW5nZTogMy44LFxuICAvLyBJbml0aWFsIGNvb2xpbmcgZmFjdG9yIGZvciBpbmNyZW1lbnRhbCBsYXlvdXRcbiAgaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWw6IDAuNVxufTtcblxuZnVuY3Rpb24gZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIHZhciBvYmogPSB7fTtcblxuICBmb3IgKHZhciBpIGluIGRlZmF1bHRzKSB7XG4gICAgb2JqW2ldID0gZGVmYXVsdHNbaV07XG4gIH1cblxuICBmb3IgKHZhciBpIGluIG9wdGlvbnMpIHtcbiAgICBvYmpbaV0gPSBvcHRpb25zW2ldO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmZ1bmN0aW9uIF9Db1NFTGF5b3V0KF9vcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0cywgX29wdGlvbnMpO1xuICBnZXRVc2VyT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xufVxuXG52YXIgZ2V0VXNlck9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBpZiAob3B0aW9ucy5ub2RlUmVwdWxzaW9uICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gb3B0aW9ucy5ub2RlUmVwdWxzaW9uO1xuICBpZiAob3B0aW9ucy5pZGVhbEVkZ2VMZW5ndGggIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIID0gb3B0aW9ucy5pZGVhbEVkZ2VMZW5ndGg7XG4gIGlmIChvcHRpb25zLmVkZ2VFbGFzdGljaXR5ICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gb3B0aW9ucy5lZGdlRWxhc3RpY2l0eTtcbiAgaWYgKG9wdGlvbnMubmVzdGluZ0ZhY3RvciAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IgPSBvcHRpb25zLm5lc3RpbmdGYWN0b3I7XG4gIGlmIChvcHRpb25zLmdyYXZpdHkgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSCA9IG9wdGlvbnMuZ3Jhdml0eTtcbiAgaWYgKG9wdGlvbnMubnVtSXRlciAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuTUFYX0lURVJBVElPTlMgPSBGRExheW91dENvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IG9wdGlvbnMubnVtSXRlcjtcbiAgaWYgKG9wdGlvbnMuZ3Jhdml0eVJhbmdlICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IG9wdGlvbnMuZ3Jhdml0eVJhbmdlO1xuICBpZihvcHRpb25zLmdyYXZpdHlDb21wb3VuZCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1NUUkVOR1RIID0gb3B0aW9ucy5ncmF2aXR5Q29tcG91bmQ7XG4gIGlmKG9wdGlvbnMuZ3Jhdml0eVJhbmdlQ29tcG91bmQgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gb3B0aW9ucy5ncmF2aXR5UmFuZ2VDb21wb3VuZDtcbiAgaWYgKG9wdGlvbnMuaW5pdGlhbEVuZXJneU9uSW5jcmVtZW50YWwgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gb3B0aW9ucy5pbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbDtcblxuICBDb1NFQ29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IEZETGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IExheW91dENvbnN0YW50cy5OT0RFX0RJTUVOU0lPTlNfSU5DTFVERV9MQUJFTFMgPSBvcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscztcbiAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9JTkNSRU1FTlRBTCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID1cbiAgICAgICAgICAhKG9wdGlvbnMucmFuZG9taXplKTtcbiAgQ29TRUNvbnN0YW50cy5BTklNQVRFID0gRkRMYXlvdXRDb25zdGFudHMuQU5JTUFURSA9IExheW91dENvbnN0YW50cy5BTklNQVRFID0gb3B0aW9ucy5hbmltYXRlO1xuICBDb1NFQ29uc3RhbnRzLlRJTEUgPSBvcHRpb25zLnRpbGU7XG4gIENvU0VDb25zdGFudHMuVElMSU5HX1BBRERJTkdfVkVSVElDQUwgPSBcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50aWxpbmdQYWRkaW5nVmVydGljYWwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbC5jYWxsKCkgOiBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbDtcbiAgQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMID0gXG4gICAgICAgICAgdHlwZW9mIG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWwgPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLnRpbGluZ1BhZGRpbmdIb3Jpem9udGFsLmNhbGwoKSA6IG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWw7XG59O1xuXG5fQ29TRUxheW91dC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmVhZHk7XG4gIHZhciBmcmFtZUlkO1xuICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgdmFyIGlkVG9MTm9kZSA9IHRoaXMuaWRUb0xOb2RlID0ge307XG4gIHZhciBsYXlvdXQgPSB0aGlzLmxheW91dCA9IG5ldyBDb1NFTGF5b3V0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgXG4gIHNlbGYuc3RvcHBlZCA9IGZhbHNlO1xuXG4gIHRoaXMuY3kgPSB0aGlzLm9wdGlvbnMuY3k7XG5cbiAgdGhpcy5jeS50cmlnZ2VyKHsgdHlwZTogJ2xheW91dHN0YXJ0JywgbGF5b3V0OiB0aGlzIH0pO1xuXG4gIHZhciBnbSA9IGxheW91dC5uZXdHcmFwaE1hbmFnZXIoKTtcbiAgdGhpcy5nbSA9IGdtO1xuXG4gIHZhciBub2RlcyA9IHRoaXMub3B0aW9ucy5lbGVzLm5vZGVzKCk7XG4gIHZhciBlZGdlcyA9IHRoaXMub3B0aW9ucy5lbGVzLmVkZ2VzKCk7XG5cbiAgdGhpcy5yb290ID0gZ20uYWRkUm9vdCgpO1xuICB0aGlzLnByb2Nlc3NDaGlsZHJlbkxpc3QodGhpcy5yb290LCB0aGlzLmdldFRvcE1vc3ROb2Rlcyhub2RlcyksIGxheW91dCk7XG5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVkZ2UgPSBlZGdlc1tpXTtcbiAgICB2YXIgc291cmNlTm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInNvdXJjZVwiKV07XG4gICAgdmFyIHRhcmdldE5vZGUgPSB0aGlzLmlkVG9MTm9kZVtlZGdlLmRhdGEoXCJ0YXJnZXRcIildO1xuICAgIGlmKHNvdXJjZU5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHRhcmdldE5vZGUpLmxlbmd0aCA9PSAwKXtcbiAgICAgIHZhciBlMSA9IGdtLmFkZChsYXlvdXQubmV3RWRnZSgpLCBzb3VyY2VOb2RlLCB0YXJnZXROb2RlKTtcbiAgICAgIGUxLmlkID0gZWRnZS5pZCgpO1xuICAgIH1cbiAgfVxuICBcbiAgIHZhciBnZXRQb3NpdGlvbnMgPSBmdW5jdGlvbihlbGUsIGkpe1xuICAgIGlmKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGVsZSA9IGk7XG4gICAgfVxuICAgIHZhciB0aGVJZCA9IGVsZS5kYXRhKCdpZCcpO1xuICAgIHZhciBsTm9kZSA9IHNlbGYuaWRUb0xOb2RlW3RoZUlkXTtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiBsTm9kZS5nZXRSZWN0KCkuZ2V0Q2VudGVyWCgpLFxuICAgICAgeTogbE5vZGUuZ2V0UmVjdCgpLmdldENlbnRlclkoKVxuICAgIH07XG4gIH07XG4gIFxuICAvKlxuICAgKiBSZXBvc2l0aW9uIG5vZGVzIGluIGl0ZXJhdGlvbnMgYW5pbWF0ZWRseVxuICAgKi9cbiAgdmFyIGl0ZXJhdGVBbmltYXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlncyB0byBwZXJmb3JtIGFmdGVyIG5vZGVzIGFyZSByZXBvc2l0aW9uZWQgb24gc2NyZWVuXG4gICAgdmFyIGFmdGVyUmVwb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9wdGlvbnMuZml0KSB7XG4gICAgICAgIG9wdGlvbnMuY3kuZml0KG9wdGlvbnMuZWxlcy5ub2RlcygpLCBvcHRpb25zLnBhZGRpbmcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlYWR5KSB7XG4gICAgICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5jeS5vbmUoJ2xheW91dHJlYWR5Jywgb3B0aW9ucy5yZWFkeSk7XG4gICAgICAgIHNlbGYuY3kudHJpZ2dlcih7dHlwZTogJ2xheW91dHJlYWR5JywgbGF5b3V0OiBzZWxmfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB2YXIgdGlja3NQZXJGcmFtZSA9IHNlbGYub3B0aW9ucy5yZWZyZXNoO1xuICAgIHZhciBpc0RvbmU7XG5cbiAgICBmb3IoIHZhciBpID0gMDsgaSA8IHRpY2tzUGVyRnJhbWUgJiYgIWlzRG9uZTsgaSsrICl7XG4gICAgICBpc0RvbmUgPSBzZWxmLnN0b3BwZWQgfHwgc2VsZi5sYXlvdXQudGljaygpO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBsYXlvdXQgaXMgZG9uZVxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIC8vIElmIHRoZSBsYXlvdXQgaXMgbm90IGEgc3VibGF5b3V0IGFuZCBpdCBpcyBzdWNjZXNzZnVsIHBlcmZvcm0gcG9zdCBsYXlvdXQuXG4gICAgICBpZiAobGF5b3V0LmNoZWNrTGF5b3V0U3VjY2VzcygpICYmICFsYXlvdXQuaXNTdWJMYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LmRvUG9zdExheW91dCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBJZiBsYXlvdXQgaGFzIGEgdGlsaW5nUG9zdExheW91dCBmdW5jdGlvbiBwcm9wZXJ0eSBjYWxsIGl0LlxuICAgICAgaWYgKGxheW91dC50aWxpbmdQb3N0TGF5b3V0KSB7XG4gICAgICAgIGxheW91dC50aWxpbmdQb3N0TGF5b3V0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGxheW91dC5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIFxuICAgICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5wb3NpdGlvbnMoZ2V0UG9zaXRpb25zKTtcbiAgICAgIFxuICAgICAgYWZ0ZXJSZXBvc2l0aW9uKCk7XG4gICAgICBcbiAgICAgIC8vIHRyaWdnZXIgbGF5b3V0c3RvcCB3aGVuIHRoZSBsYXlvdXQgc3RvcHMgKGUuZy4gZmluaXNoZXMpXG4gICAgICBzZWxmLmN5Lm9uZSgnbGF5b3V0c3RvcCcsIHNlbGYub3B0aW9ucy5zdG9wKTtcbiAgICAgIHNlbGYuY3kudHJpZ2dlcih7IHR5cGU6ICdsYXlvdXRzdG9wJywgbGF5b3V0OiBzZWxmIH0pO1xuXG4gICAgICBpZiAoZnJhbWVJZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShmcmFtZUlkKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmVhZHkgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdmFyIGFuaW1hdGlvbkRhdGEgPSBzZWxmLmxheW91dC5nZXRQb3NpdGlvbnNEYXRhKCk7IC8vIEdldCBwb3NpdGlvbnMgb2YgbGF5b3V0IG5vZGVzIG5vdGUgdGhhdCBhbGwgbm9kZXMgbWF5IG5vdCBiZSBsYXlvdXQgbm9kZXMgYmVjYXVzZSBvZiB0aWxpbmdcbiAgICBcbiAgICAvLyBQb3NpdGlvbiBub2RlcywgZm9yIHRoZSBub2RlcyB3aG9zZSBpZCBkb2VzIG5vdCBpbmNsdWRlZCBpbiBkYXRhIChiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgZnJvbSB0aGVpciBwYXJlbnRzIGFuZCBpbmNsdWRlZCBpbiBkdW1teSBjb21wb3VuZHMpXG4gICAgLy8gdXNlIHBvc2l0aW9uIG9mIHRoZWlyIGFuY2VzdG9ycyBvciBkdW1teSBhbmNlc3RvcnNcbiAgICBvcHRpb25zLmVsZXMubm9kZXMoKS5wb3NpdGlvbnMoZnVuY3Rpb24gKGVsZSwgaSkge1xuICAgICAgaWYgKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZWxlID0gaTtcbiAgICAgIH1cbiAgICAgIHZhciB0aGVJZCA9IGVsZS5pZCgpO1xuICAgICAgdmFyIHBOb2RlID0gYW5pbWF0aW9uRGF0YVt0aGVJZF07XG4gICAgICB2YXIgdGVtcCA9IGVsZTtcbiAgICAgIC8vIElmIHBOb2RlIGlzIHVuZGVmaW5lZCBzZWFyY2ggdW50aWwgZmluZGluZyBwb3NpdGlvbiBkYXRhIG9mIGl0cyBmaXJzdCBhbmNlc3RvciAoSXQgbWF5IGJlIGR1bW15IGFzIHdlbGwpXG4gICAgICB3aGlsZSAocE5vZGUgPT0gbnVsbCkge1xuICAgICAgICBwTm9kZSA9IGFuaW1hdGlvbkRhdGFbdGVtcC5kYXRhKCdwYXJlbnQnKV0gfHwgYW5pbWF0aW9uRGF0YVsnRHVtbXlDb21wb3VuZF8nICsgdGVtcC5kYXRhKCdwYXJlbnQnKV07XG4gICAgICAgIGFuaW1hdGlvbkRhdGFbdGhlSWRdID0gcE5vZGU7XG4gICAgICAgIHRlbXAgPSB0ZW1wLnBhcmVudCgpWzBdO1xuICAgICAgICBpZih0ZW1wID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmKHBOb2RlICE9IG51bGwpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IHBOb2RlLngsXG4gICAgICAgICAgeTogcE5vZGUueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBlbGUueCxcbiAgICAgICAgICB5OiBlbGUueVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYWZ0ZXJSZXBvc2l0aW9uKCk7XG5cbiAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGl0ZXJhdGVBbmltYXRlZCk7XG4gIH07XG4gIFxuICAvKlxuICAqIExpc3RlbiAnbGF5b3V0c3RhcnRlZCcgZXZlbnQgYW5kIHN0YXJ0IGFuaW1hdGVkIGl0ZXJhdGlvbiBpZiBhbmltYXRlIG9wdGlvbiBpcyAnZHVyaW5nJ1xuICAqL1xuICBsYXlvdXQuYWRkTGlzdGVuZXIoJ2xheW91dHN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNlbGYub3B0aW9ucy5hbmltYXRlID09PSAnZHVyaW5nJykge1xuICAgICAgZnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShpdGVyYXRlQW5pbWF0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBsYXlvdXQucnVuTGF5b3V0KCk7IC8vIFJ1biBjb3NlIGxheW91dFxuICBcbiAgLypcbiAgICogSWYgYW5pbWF0ZSBvcHRpb24gaXMgbm90ICdkdXJpbmcnICgnZW5kJyBvciBmYWxzZSkgcGVyZm9ybSB0aGVzZSBoZXJlIChJZiBpdCBpcyAnZHVyaW5nJyBzaW1pbGFyIHRoaW5ncyBhcmUgYWxyZWFkeSBwZXJmb3JtZWQpXG4gICAqL1xuICBpZih0aGlzLm9wdGlvbnMuYW5pbWF0ZSAhPT0gXCJkdXJpbmdcIil7XG4gICAgc2VsZi5vcHRpb25zLmVsZXMubm9kZXMoKS5ub3QoXCI6cGFyZW50XCIpLmxheW91dFBvc2l0aW9ucyhzZWxmLCBzZWxmLm9wdGlvbnMsIGdldFBvc2l0aW9ucyk7IC8vIFVzZSBsYXlvdXQgcG9zaXRpb25zIHRvIHJlcG9zaXRpb24gdGhlIG5vZGVzIGl0IGNvbnNpZGVycyB0aGUgb3B0aW9ucyBwYXJhbWV0ZXJcbiAgICByZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG59O1xuXG4vL0dldCB0aGUgdG9wIG1vc3Qgb25lcyBvZiBhIGxpc3Qgb2Ygbm9kZXNcbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRUb3BNb3N0Tm9kZXMgPSBmdW5jdGlvbihub2Rlcykge1xuICB2YXIgbm9kZXNNYXAgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZXNNYXBbbm9kZXNbaV0uaWQoKV0gPSB0cnVlO1xuICB9XG4gIHZhciByb290cyA9IG5vZGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlLCBpKSB7XG4gICAgICBpZih0eXBlb2YgZWxlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGVsZSA9IGk7XG4gICAgICB9XG4gICAgICB2YXIgcGFyZW50ID0gZWxlLnBhcmVudCgpWzBdO1xuICAgICAgd2hpbGUocGFyZW50ICE9IG51bGwpe1xuICAgICAgICBpZihub2Rlc01hcFtwYXJlbnQuaWQoKV0pe1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50KClbMF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvb3RzO1xufTtcblxuX0NvU0VMYXlvdXQucHJvdG90eXBlLnByb2Nlc3NDaGlsZHJlbkxpc3QgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZHJlbiwgbGF5b3V0KSB7XG4gIHZhciBzaXplID0gY2hpbGRyZW4ubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgIHZhciB0aGVDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHZhciBjaGlsZHJlbl9vZl9jaGlsZHJlbiA9IHRoZUNoaWxkLmNoaWxkcmVuKCk7XG4gICAgdmFyIHRoZU5vZGU7ICAgIFxuXG4gICAgdmFyIGRpbWVuc2lvbnMgPSB0aGVDaGlsZC5sYXlvdXREaW1lbnNpb25zKHtcbiAgICAgIG5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsczogdGhpcy5vcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVsc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoZUNoaWxkLm91dGVyV2lkdGgoKSAhPSBudWxsXG4gICAgICAgICAgICAmJiB0aGVDaGlsZC5vdXRlckhlaWdodCgpICE9IG51bGwpIHtcbiAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBDb1NFTm9kZShsYXlvdXQuZ3JhcGhNYW5hZ2VyLFxuICAgICAgICAgICAgICBuZXcgUG9pbnREKHRoZUNoaWxkLnBvc2l0aW9uKCd4JykgLSBkaW1lbnNpb25zLncgLyAyLCB0aGVDaGlsZC5wb3NpdGlvbigneScpIC0gZGltZW5zaW9ucy5oIC8gMiksXG4gICAgICAgICAgICAgIG5ldyBEaW1lbnNpb25EKHBhcnNlRmxvYXQoZGltZW5zaW9ucy53KSwgcGFyc2VGbG9hdChkaW1lbnNpb25zLmgpKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoZU5vZGUgPSBwYXJlbnQuYWRkKG5ldyBDb1NFTm9kZSh0aGlzLmdyYXBoTWFuYWdlcikpO1xuICAgIH1cbiAgICAvLyBBdHRhY2ggaWQgdG8gdGhlIGxheW91dCBub2RlXG4gICAgdGhlTm9kZS5pZCA9IHRoZUNoaWxkLmRhdGEoXCJpZFwiKTtcbiAgICAvLyBBdHRhY2ggdGhlIHBhZGRpbmdzIG9mIGN5IG5vZGUgdG8gbGF5b3V0IG5vZGVcbiAgICB0aGVOb2RlLnBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nVG9wID0gcGFyc2VJbnQoIHRoZUNoaWxkLmNzcygncGFkZGluZycpICk7XG4gICAgdGhlTm9kZS5wYWRkaW5nUmlnaHQgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdCb3R0b20gPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICBcbiAgICAvL0F0dGFjaCB0aGUgbGFiZWwgcHJvcGVydGllcyB0byBjb21wb3VuZCBpZiBsYWJlbHMgd2lsbCBiZSBpbmNsdWRlZCBpbiBub2RlIGRpbWVuc2lvbnMgIFxuICAgIGlmKHRoaXMub3B0aW9ucy5ub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMpe1xuICAgICAgaWYodGhlQ2hpbGQuaXNQYXJlbnQoKSl7XG4gICAgICAgICAgdmFyIGxhYmVsV2lkdGggPSB0aGVDaGlsZC5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6IHRydWUsIGluY2x1ZGVOb2RlczogZmFsc2UgfSkudzsgICAgICAgICAgXG4gICAgICAgICAgdmFyIGxhYmVsSGVpZ2h0ID0gdGhlQ2hpbGQuYm91bmRpbmdCb3goeyBpbmNsdWRlTGFiZWxzOiB0cnVlLCBpbmNsdWRlTm9kZXM6IGZhbHNlIH0pLmg7XG4gICAgICAgICAgdmFyIGxhYmVsUG9zID0gdGhlQ2hpbGQuY3NzKFwidGV4dC1oYWxpZ25cIik7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbFdpZHRoID0gbGFiZWxXaWR0aDtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsSGVpZ2h0ID0gbGFiZWxIZWlnaHQ7XG4gICAgICAgICAgdGhlTm9kZS5sYWJlbFBvcyA9IGxhYmVsUG9zO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBNYXAgdGhlIGxheW91dCBub2RlXG4gICAgdGhpcy5pZFRvTE5vZGVbdGhlQ2hpbGQuZGF0YShcImlkXCIpXSA9IHRoZU5vZGU7XG5cbiAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LngpKSB7XG4gICAgICB0aGVOb2RlLnJlY3QueCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGlzTmFOKHRoZU5vZGUucmVjdC55KSkge1xuICAgICAgdGhlTm9kZS5yZWN0LnkgPSAwO1xuICAgIH1cblxuICAgIC8vIHRoZSBib3VuZHMgZm9yIHRoZSBub2RlIHRoYXQgaW5jbHVkZXMgbWluWCwgbWluWSwgbWF4WC4gbWF4WVxuICAgIHZhciBib3VuZHM7XG5cbiAgICAvLyBpZiBub2RlQm91bmRzIG9wdGlvbiBpcyBkZWZpbmVkIHNldCBib3VuZHMgYWNjb3JkaW5nbHlcbiAgICBpZiAodGhpcy5vcHRpb25zLm5vZGVCb3VuZHMpIHtcbiAgICAgIGJvdW5kcyA9IHR5cGVvZiB0aGlzLm9wdGlvbnMubm9kZUJvdW5kcyA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMub3B0aW9ucy5ub2RlQm91bmRzLmNhbGwodGhpcywgdGhlQ2hpbGQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub3B0aW9ucy5ub2RlQm91bmRzO1xuICAgIH1cblxuICAgIC8vIGlmIGJvdW5kcyBpcyBzZXQgdHJhbnNtaXQgZWFjaCBib3VuZCB0byB0aGUgbm9kZVxuICAgIGZvciAodmFyIHByb3AgaW4gYm91bmRzKSB7XG4gICAgICB0aGVOb2RlW3Byb3BdID0gYm91bmRzW3Byb3BdO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBub2RlIHBvc2l0aW9uIGlzIG5vdCBvYmV5aW5nIHRoZSBib3VuZHMgYWRqdXN0IGl0IGFjY29yZGluZ2x5XG4gICAgLy8gaWYgKGJvdW5kcykge1xuICAgIC8vICAgaWYgKGJvdW5kcy5taW5YICYmIHRoZU5vZGUucmVjdC54IDwgYm91bmRzLm1pblgpIHtcbiAgICAvLyAgICAgdGhlTm9kZS5yZWN0LnggPSBib3VuZHMubWluWDtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgaWYgKGJvdW5kcy5tYXhYICYmIHRoZU5vZGUucmVjdC54ICsgdGhlTm9kZS5yZWN0LndpZHRoID4gYm91bmRzLm1heFgpIHtcbiAgICAvLyAgICAgdGhlTm9kZS5yZWN0LnggPSBib3VuZHMubWF4WCAtIHRoZU5vZGUucmVjdC53aWR0aDtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgaWYgKGJvdW5kcy5taW5ZICYmIHRoZU5vZGUucmVjdC55IDwgYm91bmRzLm1pblkpIHtcbiAgICAvLyAgICAgdGhlTm9kZS5yZWN0LnkgPSBib3VuZHMubWluWTtcbiAgICAvLyAgIH1cbiAgICAvL1xuICAgIC8vICAgaWYgKGJvdW5kcy5tYXhZICYmIHRoZU5vZGUucmVjdC55ICsgdGhlTm9kZS5yZWN0LmhlaWdodCA+IGJvdW5kcy5tYXhZKSB7XG4gICAgLy8gICAgIHRoZU5vZGUucmVjdC55ID0gYm91bmRzLm1heFkgLSB0aGVOb2RlLnJlY3QuaGVpZ2h0O1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmIChjaGlsZHJlbl9vZl9jaGlsZHJlbiAhPSBudWxsICYmIGNoaWxkcmVuX29mX2NoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciB0aGVOZXdHcmFwaDtcbiAgICAgIHRoZU5ld0dyYXBoID0gbGF5b3V0LmdldEdyYXBoTWFuYWdlcigpLmFkZChsYXlvdXQubmV3R3JhcGgoKSwgdGhlTm9kZSk7XG4gICAgICB0aGlzLnByb2Nlc3NDaGlsZHJlbkxpc3QodGhlTmV3R3JhcGgsIGNoaWxkcmVuX29mX2NoaWxkcmVuLCBsYXlvdXQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAYnJpZWYgOiBjYWxsZWQgb24gY29udGludW91cyBsYXlvdXRzIHRvIHN0b3AgdGhlbSBiZWZvcmUgdGhleSBmaW5pc2hcbiAqL1xuX0NvU0VMYXlvdXQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuc3RvcHBlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7IC8vIGNoYWluaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldChjeXRvc2NhcGUpIHtcbiAgcmV0dXJuIF9Db1NFTGF5b3V0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvaW5kZXguanMiLCJ2YXIgRkRMYXlvdXQgPSByZXF1aXJlKCcuL0ZETGF5b3V0Jyk7XG52YXIgQ29TRUdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoTWFuYWdlcicpO1xudmFyIENvU0VHcmFwaCA9IHJlcXVpcmUoJy4vQ29TRUdyYXBoJyk7XG52YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuL0NvU0VOb2RlJyk7XG52YXIgQ29TRUVkZ2UgPSByZXF1aXJlKCcuL0NvU0VFZGdlJyk7XG52YXIgQ29TRUNvbnN0YW50cyA9IHJlcXVpcmUoJy4vQ29TRUNvbnN0YW50cycpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIEludGVnZXIgPSByZXF1aXJlKCcuL0ludGVnZXInKTtcbnZhciBJR2VvbWV0cnkgPSByZXF1aXJlKCcuL0lHZW9tZXRyeScpO1xudmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcblxuZnVuY3Rpb24gQ29TRUxheW91dCgpIHtcbiAgRkRMYXlvdXQuY2FsbCh0aGlzKTtcbiAgXG4gIHRoaXMudG9CZVRpbGVkID0ge307IC8vIE1lbW9yaXplIGlmIGEgbm9kZSBpcyB0byBiZSB0aWxlZCBvciBpcyB0aWxlZFxufVxuXG5Db1NFTGF5b3V0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRkRMYXlvdXQucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dCkge1xuICBDb1NFTGF5b3V0W3Byb3BdID0gRkRMYXlvdXRbcHJvcF07XG59XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGdtID0gbmV3IENvU0VHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG4gIHJldHVybiBnbTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld0dyYXBoID0gZnVuY3Rpb24gKHZHcmFwaCkge1xuICByZXR1cm4gbmV3IENvU0VHcmFwaChudWxsLCB0aGlzLmdyYXBoTWFuYWdlciwgdkdyYXBoKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLm5ld05vZGUgPSBmdW5jdGlvbiAodk5vZGUpIHtcbiAgcmV0dXJuIG5ldyBDb1NFTm9kZSh0aGlzLmdyYXBoTWFuYWdlciwgdk5vZGUpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3RWRnZSA9IGZ1bmN0aW9uICh2RWRnZSkge1xuICByZXR1cm4gbmV3IENvU0VFZGdlKG51bGwsIG51bGwsIHZFZGdlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBGRExheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMuY2FsbCh0aGlzLCBhcmd1bWVudHMpO1xuICBpZiAoIXRoaXMuaXNTdWJMYXlvdXQpIHtcbiAgICBpZiAoQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIDwgMTApXG4gICAge1xuICAgICAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSAxMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHRoaXMuaWRlYWxFZGdlTGVuZ3RoID0gQ29TRUNvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuICAgIH1cblxuICAgIHRoaXMudXNlU21hcnRJZGVhbEVkZ2VMZW5ndGhDYWxjdWxhdGlvbiA9XG4gICAgICAgICAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OO1xuICAgIHRoaXMuc3ByaW5nQ29uc3RhbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEg7XG4gICAgdGhpcy5yZXB1bHNpb25Db25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSDtcbiAgICB0aGlzLmdyYXZpdHlDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEg7XG4gICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEg7XG4gICAgdGhpcy5ncmF2aXR5UmFuZ2VGYWN0b3IgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eVJhbmdlRmFjdG9yID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNyZWF0ZUJlbmRzQXNOZWVkZWQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICBpZiAoY3JlYXRlQmVuZHNBc05lZWRlZClcbiAge1xuICAgIHRoaXMuY3JlYXRlQmVuZHBvaW50cygpO1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgfVxuXG4gIHRoaXMubGV2ZWwgPSAwO1xuICByZXR1cm4gdGhpcy5jbGFzc2ljTGF5b3V0KCk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jbGFzc2ljTGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm5vZGVzV2l0aEdyYXZpdHkgPSB0aGlzLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8oKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24odGhpcy5ub2Rlc1dpdGhHcmF2aXR5KTtcbiAgdGhpcy5jYWxjTm9PZkNoaWxkcmVuRm9yQWxsTm9kZXMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5jYWxjSW5jbHVzaW9uVHJlZURlcHRocygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgdGhpcy5jYWxjSWRlYWxFZGdlTGVuZ3RocygpO1xuICBcbiAgaWYgKCF0aGlzLmluY3JlbWVudGFsKVxuICB7XG4gICAgdmFyIGZvcmVzdCA9IHRoaXMuZ2V0RmxhdEZvcmVzdCgpO1xuXG4gICAgLy8gVGhlIGdyYXBoIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxheW91dCBpcyBmbGF0IGFuZCBhIGZvcmVzdFxuICAgIGlmIChmb3Jlc3QubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYWRpYWxseShmb3Jlc3QpO1xuICAgIH1cbiAgICAvLyBUaGUgZ3JhcGggYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGF5b3V0IGlzIG5vdCBmbGF0IG9yIGEgZm9yZXN0XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vIFJlZHVjZSB0aGUgdHJlZXMgd2hlbiBpbmNyZW1lbnRhbCBtb2RlIGlzIG5vdCBlbmFibGVkIGFuZCBncmFwaCBpcyBub3QgYSBmb3Jlc3QgXG4gICAgICB0aGlzLnJlZHVjZVRyZWVzKCk7XG4gICAgICAvLyBVcGRhdGUgbm9kZXMgdGhhdCBncmF2aXR5IHdpbGwgYmUgYXBwbGllZFxuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuICAgICAgdmFyIGFsbE5vZGVzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpO1xuICAgICAgdmFyIGludGVyc2VjdGlvbiA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoeCA9PiBhbGxOb2Rlcy5oYXMoeCkpO1xuICAgICAgdGhpcy5ncmFwaE1hbmFnZXIuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oaW50ZXJzZWN0aW9uKTtcbiAgICAgIFxuICAgICAgdGhpcy5wb3NpdGlvbk5vZGVzUmFuZG9tbHkoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgdmFyIG5vZGUgPSBhbGxOb2Rlc1tpXTtcblxuICAgIGlmIChub2RlLmlkID09PSAnZ2x5cGg5Jykge1xuICAgICAgY29uc29sZS5sb2coJ25vZGUgZm91bmQnKTtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgbm9kZSBwb3NpdGlvbiBpcyBub3Qgb2JleWluZyB0aGUgYm91bmRzIGFkanVzdCBpdCBhY2NvcmRpbmdseVxuICAgIGlmIChub2RlLm1pblggJiYgbm9kZS5yZWN0LnggPCBub2RlLm1pblgpIHtcbiAgICAgIG5vZGUucmVjdC54ID0gbm9kZS5taW5YO1xuICAgIH1cblxuICAgIGlmIChub2RlLm1heFggJiYgbm9kZS5yZWN0LnggKyBub2RlLnJlY3Qud2lkdGggPiBub2RlLm1heFgpIHtcbiAgICAgIG5vZGUucmVjdC54ID0gbm9kZS5tYXhYIC0gbm9kZS5yZWN0LndpZHRoO1xuICAgIH1cblxuICAgIGlmIChub2RlLm1pblkgJiYgbm9kZS5yZWN0LnkgPCBub2RlLm1pblkpIHtcbiAgICAgIG5vZGUucmVjdC55ID0gbm9kZS5taW5ZO1xuICAgIH1cblxuICAgIGlmIChub2RlLm1heFkgJiYgbm9kZS5yZWN0LnkgKyBub2RlLnJlY3QuaGVpZ2h0ID4gbm9kZS5tYXhZKSB7XG4gICAgICBub2RlLnJlY3QueSA9IG5vZGUubWF4WSAtIG5vZGUucmVjdC5oZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5pbml0U3ByaW5nRW1iZWRkZXIoKTtcbiAgdGhpcy5ydW5TcHJpbmdFbWJlZGRlcigpO1xuXG4gIHJldHVybiB0cnVlO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnRvdGFsSXRlcmF0aW9ucysrO1xuICBcbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zID09PSB0aGlzLm1heEl0ZXJhdGlvbnMgJiYgIXRoaXMuaXNUcmVlR3Jvd2luZyAmJiAhdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSB7XG4gICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKXtcbiAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICB9XG4gIH1cbiAgXG4gIGlmICh0aGlzLnRvdGFsSXRlcmF0aW9ucyAlIEZETGF5b3V0Q29uc3RhbnRzLkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCA9PSAwICAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpXG4gIHtcbiAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgIHtcbiAgICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCl7XG4gICAgICAgIHRoaXMuaXNUcmVlR3Jvd2luZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgICAoKHRoaXMubWF4SXRlcmF0aW9ucyAtIHRoaXMudG90YWxJdGVyYXRpb25zKSAvIHRoaXMubWF4SXRlcmF0aW9ucyk7XG4gICAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSBNYXRoLmNlaWwodGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kICogTWF0aC5zcXJ0KHRoaXMuY29vbGluZ0ZhY3RvcikpO1xuICB9XG4gIC8vIE9wZXJhdGlvbnMgd2hpbGUgdHJlZSBpcyBncm93aW5nIGFnYWluIFxuICBpZih0aGlzLmlzVHJlZUdyb3dpbmcpe1xuICAgIGlmKHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zICUgMTAgPT0gMCl7XG4gICAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR3JpZCgpO1xuICAgICAgICB0aGlzLmdyb3dUcmVlKHRoaXMucHJ1bmVkTm9kZXNBbGwpO1xuICAgICAgICAvLyBVcGRhdGUgbm9kZXMgdGhhdCBncmF2aXR5IHdpbGwgYmUgYXBwbGllZFxuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICAgIHZhciBhbGxOb2RlcyA9IG5ldyBTZXQodGhpcy5nZXRBbGxOb2RlcygpKTtcbiAgICAgICAgdmFyIGludGVyc2VjdGlvbiA9IHRoaXMubm9kZXNXaXRoR3Jhdml0eS5maWx0ZXIoeCA9PiBhbGxOb2Rlcy5oYXMoeCkpO1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihpbnRlcnNlY3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyBcbiAgICAgICAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDsgXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gZmFsc2U7ICBcbiAgICAgICAgdGhpcy5pc0dyb3d0aEZpbmlzaGVkID0gdHJ1ZTsgXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zKys7XG4gIH1cbiAgLy8gT3BlcmF0aW9ucyBhZnRlciBncm93dGggaXMgZmluaXNoZWRcbiAgaWYodGhpcy5pc0dyb3d0aEZpbmlzaGVkKXtcbiAgICBpZiAodGhpcy5pc0NvbnZlcmdlZCgpKVxuICAgIHtcbiAgICAgIHJldHVybiB0cnVlOyAgXG4gICAgfVxuICAgIGlmKHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zICUgMTAgPT0gMCl7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgIHRoaXMudXBkYXRlR3JpZCgpOyBcbiAgICB9XG4gICAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCAqICgoMTAwIC0gdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMpIC8gMTAwKTtcbiAgICB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucysrO1xuICB9XG4gIFxuICB0aGlzLnRvdGFsRGlzcGxhY2VtZW50ID0gMDtcbiAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gIHRoaXMuY2FsY1NwcmluZ0ZvcmNlcygpO1xuICB0aGlzLmNhbGNSZXB1bHNpb25Gb3JjZXMoKTtcbiAgdGhpcy5jYWxjR3Jhdml0YXRpb25hbEZvcmNlcygpO1xuICB0aGlzLm1vdmVOb2RlcygpO1xuICB0aGlzLmFuaW1hdGUoKTtcbiAgXG4gIHJldHVybiBmYWxzZTsgLy8gTGF5b3V0IGlzIG5vdCBlbmRlZCB5ZXQgcmV0dXJuIGZhbHNlXG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbnNEYXRhID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gIHZhciBwRGF0YSA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJlY3QgPSBhbGxOb2Rlc1tpXS5yZWN0O1xuICAgIHZhciBpZCA9IGFsbE5vZGVzW2ldLmlkO1xuICAgIHBEYXRhW2lkXSA9IHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIHg6IHJlY3QuZ2V0Q2VudGVyWCgpLFxuICAgICAgeTogcmVjdC5nZXRDZW50ZXJZKCksXG4gICAgICB3OiByZWN0LndpZHRoLFxuICAgICAgaDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG4gIFxuICByZXR1cm4gcERhdGE7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5ydW5TcHJpbmdFbWJlZGRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kID0gMjU7XG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gdGhpcy5pbml0aWFsQW5pbWF0aW9uUGVyaW9kO1xuICB2YXIgbGF5b3V0RW5kZWQgPSBmYWxzZTtcbiAgXG4gIC8vIElmIGFtaW5hdGUgb3B0aW9uIGlzICdkdXJpbmcnIHNpZ25hbCB0aGF0IGxheW91dCBpcyBzdXBwb3NlZCB0byBzdGFydCBpdGVyYXRpbmdcbiAgaWYgKCBGRExheW91dENvbnN0YW50cy5BTklNQVRFID09PSAnZHVyaW5nJyApIHtcbiAgICB0aGlzLmVtaXQoJ2xheW91dHN0YXJ0ZWQnKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBJZiBhbWluYXRlIG9wdGlvbiBpcyAnZHVyaW5nJyB0aWNrKCkgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb24gaW5kZXguanNcbiAgICB3aGlsZSAoIWxheW91dEVuZGVkKSB7XG4gICAgICBsYXlvdXRFbmRlZCA9IHRoaXMudGljaygpO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYWxjdWxhdGVOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvblRvID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZUxpc3QgPSBbXTtcbiAgdmFyIGdyYXBoO1xuXG4gIHZhciBncmFwaHMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRHcmFwaHMoKTtcbiAgdmFyIHNpemUgPSBncmFwaHMubGVuZ3RoO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKylcbiAge1xuICAgIGdyYXBoID0gZ3JhcGhzW2ldO1xuXG4gICAgZ3JhcGgudXBkYXRlQ29ubmVjdGVkKCk7XG5cbiAgICBpZiAoIWdyYXBoLmlzQ29ubmVjdGVkKVxuICAgIHtcbiAgICAgIG5vZGVMaXN0ID0gbm9kZUxpc3QuY29uY2F0KGdyYXBoLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlTGlzdDtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBub2RlO1xuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuICBcbiAgZm9yKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgICBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgICBub2RlLm5vT2ZDaGlsZHJlbiA9IG5vZGUuZ2V0Tm9PZkNoaWxkcmVuKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNyZWF0ZUJlbmRwb2ludHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlcyA9IFtdO1xuICBlZGdlcyA9IGVkZ2VzLmNvbmNhdCh0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxFZGdlcygpKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIGlmICghdmlzaXRlZC5jb250YWlucyhlZGdlKSlcbiAgICB7XG4gICAgICB2YXIgc291cmNlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gICAgICBpZiAoc291cmNlID09IHRhcmdldClcbiAgICAgIHtcbiAgICAgICAgZWRnZS5nZXRCZW5kcG9pbnRzKCkucHVzaChuZXcgUG9pbnREKCkpO1xuICAgICAgICBlZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMoZWRnZSk7XG4gICAgICAgIHZpc2l0ZWQuYWRkKGVkZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICB2YXIgZWRnZUxpc3QgPSBbXTtcblxuICAgICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChzb3VyY2UuZ2V0RWRnZUxpc3RUb05vZGUodGFyZ2V0KSk7XG4gICAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHRhcmdldC5nZXRFZGdlTGlzdFRvTm9kZShzb3VyY2UpKTtcblxuICAgICAgICBpZiAoIXZpc2l0ZWQuY29udGFpbnMoZWRnZUxpc3RbMF0pKVxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGVkZ2VMaXN0Lmxlbmd0aCA+IDEpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgZWRnZUxpc3QubGVuZ3RoOyBrKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBtdWx0aUVkZ2UgPSBlZGdlTGlzdFtrXTtcbiAgICAgICAgICAgICAgbXVsdGlFZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlRHVtbXlOb2Rlc0ZvckJlbmRwb2ludHMobXVsdGlFZGdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmlzaXRlZC5hZGRBbGwobGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmlzaXRlZC5zaXplKCkgPT0gZWRnZXMubGVuZ3RoKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucG9zaXRpb25Ob2Rlc1JhZGlhbGx5ID0gZnVuY3Rpb24gKGZvcmVzdCkge1xuICAvLyBXZSB0aWxlIHRoZSB0cmVlcyB0byBhIGdyaWQgcm93IGJ5IHJvdzsgZmlyc3QgdHJlZSBzdGFydHMgYXQgKDAsMClcbiAgdmFyIGN1cnJlbnRTdGFydGluZ1BvaW50ID0gbmV3IFBvaW50KDAsIDApO1xuICB2YXIgbnVtYmVyT2ZDb2x1bW5zID0gTWF0aC5jZWlsKE1hdGguc3FydChmb3Jlc3QubGVuZ3RoKSk7XG4gIHZhciBoZWlnaHQgPSAwO1xuICB2YXIgY3VycmVudFkgPSAwO1xuICB2YXIgY3VycmVudFggPSAwO1xuICB2YXIgcG9pbnQgPSBuZXcgUG9pbnREKDAsIDApO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yZXN0Lmxlbmd0aDsgaSsrKVxuICB7XG4gICAgaWYgKGkgJSBudW1iZXJPZkNvbHVtbnMgPT0gMClcbiAgICB7XG4gICAgICAvLyBTdGFydCBvZiBhIG5ldyByb3csIG1ha2UgdGhlIHggY29vcmRpbmF0ZSAwLCBpbmNyZW1lbnQgdGhlXG4gICAgICAvLyB5IGNvb3JkaW5hdGUgd2l0aCB0aGUgbWF4IGhlaWdodCBvZiB0aGUgcHJldmlvdXMgcm93XG4gICAgICBjdXJyZW50WCA9IDA7XG4gICAgICBjdXJyZW50WSA9IGhlaWdodDtcblxuICAgICAgaWYgKGkgIT0gMClcbiAgICAgIHtcbiAgICAgICAgY3VycmVudFkgKz0gQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OO1xuICAgICAgfVxuXG4gICAgICBoZWlnaHQgPSAwO1xuICAgIH1cblxuICAgIHZhciB0cmVlID0gZm9yZXN0W2ldO1xuXG4gICAgLy8gRmluZCB0aGUgY2VudGVyIG9mIHRoZSB0cmVlXG4gICAgdmFyIGNlbnRlck5vZGUgPSBMYXlvdXQuZmluZENlbnRlck9mVHJlZSh0cmVlKTtcblxuICAgIC8vIFNldCB0aGUgc3RhcmluZyBwb2ludCBvZiB0aGUgbmV4dCB0cmVlXG4gICAgY3VycmVudFN0YXJ0aW5nUG9pbnQueCA9IGN1cnJlbnRYO1xuICAgIGN1cnJlbnRTdGFydGluZ1BvaW50LnkgPSBjdXJyZW50WTtcblxuICAgIC8vIERvIGEgcmFkaWFsIGxheW91dCBzdGFydGluZyB3aXRoIHRoZSBjZW50ZXJcbiAgICBwb2ludCA9XG4gICAgICAgICAgICBDb1NFTGF5b3V0LnJhZGlhbExheW91dCh0cmVlLCBjZW50ZXJOb2RlLCBjdXJyZW50U3RhcnRpbmdQb2ludCk7XG5cbiAgICBpZiAocG9pbnQueSA+IGhlaWdodClcbiAgICB7XG4gICAgICBoZWlnaHQgPSBNYXRoLmZsb29yKHBvaW50LnkpO1xuICAgIH1cblxuICAgIGN1cnJlbnRYID0gTWF0aC5mbG9vcihwb2ludC54ICsgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OKTtcbiAgfVxuXG4gIHRoaXMudHJhbnNmb3JtKFxuICAgICAgICAgIG5ldyBQb2ludEQoTGF5b3V0Q29uc3RhbnRzLldPUkxEX0NFTlRFUl9YIC0gcG9pbnQueCAvIDIsXG4gICAgICAgICAgICAgICAgICBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgLSBwb2ludC55IC8gMikpO1xufTtcblxuQ29TRUxheW91dC5yYWRpYWxMYXlvdXQgPSBmdW5jdGlvbiAodHJlZSwgY2VudGVyTm9kZSwgc3RhcnRpbmdQb2ludCkge1xuICB2YXIgcmFkaWFsU2VwID0gTWF0aC5tYXgodGhpcy5tYXhEaWFnb25hbEluVHJlZSh0cmVlKSxcbiAgICAgICAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfUkFESUFMX1NFUEFSQVRJT04pO1xuICBDb1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dChjZW50ZXJOb2RlLCBudWxsLCAwLCAzNTksIDAsIHJhZGlhbFNlcCk7XG4gIHZhciBib3VuZHMgPSBMR3JhcGguY2FsY3VsYXRlQm91bmRzKHRyZWUpO1xuXG4gIHZhciB0cmFuc2Zvcm0gPSBuZXcgVHJhbnNmb3JtKCk7XG4gIHRyYW5zZm9ybS5zZXREZXZpY2VPcmdYKGJvdW5kcy5nZXRNaW5YKCkpO1xuICB0cmFuc2Zvcm0uc2V0RGV2aWNlT3JnWShib3VuZHMuZ2V0TWluWSgpKTtcbiAgdHJhbnNmb3JtLnNldFdvcmxkT3JnWChzdGFydGluZ1BvaW50LngpO1xuICB0cmFuc2Zvcm0uc2V0V29ybGRPcmdZKHN0YXJ0aW5nUG9pbnQueSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB0cmVlW2ldO1xuICAgIG5vZGUudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gIH1cblxuICB2YXIgYm90dG9tUmlnaHQgPVxuICAgICAgICAgIG5ldyBQb2ludEQoYm91bmRzLmdldE1heFgoKSwgYm91bmRzLmdldE1heFkoKSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybS5pbnZlcnNlVHJhbnNmb3JtUG9pbnQoYm90dG9tUmlnaHQpO1xufTtcblxuQ29TRUxheW91dC5icmFuY2hSYWRpYWxMYXlvdXQgPSBmdW5jdGlvbiAobm9kZSwgcGFyZW50T2ZOb2RlLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSwgZGlzdGFuY2UsIHJhZGlhbFNlcGFyYXRpb24pIHtcbiAgLy8gRmlyc3QsIHBvc2l0aW9uIHRoaXMgbm9kZSBieSBmaW5kaW5nIGl0cyBhbmdsZS5cbiAgdmFyIGhhbGZJbnRlcnZhbCA9ICgoZW5kQW5nbGUgLSBzdGFydEFuZ2xlKSArIDEpIC8gMjtcblxuICBpZiAoaGFsZkludGVydmFsIDwgMClcbiAge1xuICAgIGhhbGZJbnRlcnZhbCArPSAxODA7XG4gIH1cblxuICB2YXIgbm9kZUFuZ2xlID0gKGhhbGZJbnRlcnZhbCArIHN0YXJ0QW5nbGUpICUgMzYwO1xuICB2YXIgdGV0YSA9IChub2RlQW5nbGUgKiBJR2VvbWV0cnkuVFdPX1BJKSAvIDM2MDtcblxuICAvLyBNYWtlIHBvbGFyIHRvIGphdmEgY29yZGluYXRlIGNvbnZlcnNpb24uXG4gIHZhciBjb3NfdGV0YSA9IE1hdGguY29zKHRldGEpO1xuICB2YXIgeF8gPSBkaXN0YW5jZSAqIE1hdGguY29zKHRldGEpO1xuICB2YXIgeV8gPSBkaXN0YW5jZSAqIE1hdGguc2luKHRldGEpO1xuXG4gIG5vZGUuc2V0Q2VudGVyKHhfLCB5Xyk7XG5cbiAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGUgYW5kIHJlY3Vyc2l2ZWx5IGNhbGwgdGhpc1xuICAvLyBmdW5jdGlvbi5cbiAgdmFyIG5laWdoYm9yRWRnZXMgPSBbXTtcbiAgbmVpZ2hib3JFZGdlcyA9IG5laWdoYm9yRWRnZXMuY29uY2F0KG5vZGUuZ2V0RWRnZXMoKSk7XG4gIHZhciBjaGlsZENvdW50ID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG5cbiAgaWYgKHBhcmVudE9mTm9kZSAhPSBudWxsKVxuICB7XG4gICAgY2hpbGRDb3VudC0tO1xuICB9XG5cbiAgdmFyIGJyYW5jaENvdW50ID0gMDtcblxuICB2YXIgaW5jRWRnZXNDb3VudCA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICB2YXIgc3RhcnRJbmRleDtcblxuICB2YXIgZWRnZXMgPSBub2RlLmdldEVkZ2VzQmV0d2VlbihwYXJlbnRPZk5vZGUpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBlZGdlcywgcHJ1bmUgdGhlbSB1bnRpbCB0aGVyZSByZW1haW5zIG9ubHkgb25lXG4gIC8vIGVkZ2UuXG4gIHdoaWxlIChlZGdlcy5sZW5ndGggPiAxKVxuICB7XG4gICAgLy9uZWlnaGJvckVkZ2VzLnJlbW92ZShlZGdlcy5yZW1vdmUoMCkpO1xuICAgIHZhciB0ZW1wID0gZWRnZXNbMF07XG4gICAgZWRnZXMuc3BsaWNlKDAsIDEpO1xuICAgIHZhciBpbmRleCA9IG5laWdoYm9yRWRnZXMuaW5kZXhPZih0ZW1wKTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgbmVpZ2hib3JFZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgICBpbmNFZGdlc0NvdW50LS07XG4gICAgY2hpbGRDb3VudC0tO1xuICB9XG5cbiAgaWYgKHBhcmVudE9mTm9kZSAhPSBudWxsKVxuICB7XG4gICAgLy9hc3NlcnQgZWRnZXMubGVuZ3RoID09IDE7XG4gICAgc3RhcnRJbmRleCA9IChuZWlnaGJvckVkZ2VzLmluZGV4T2YoZWRnZXNbMF0pICsgMSkgJSBpbmNFZGdlc0NvdW50O1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHN0YXJ0SW5kZXggPSAwO1xuICB9XG5cbiAgdmFyIHN0ZXBBbmdsZSA9IE1hdGguYWJzKGVuZEFuZ2xlIC0gc3RhcnRBbmdsZSkgLyBjaGlsZENvdW50O1xuXG4gIGZvciAodmFyIGkgPSBzdGFydEluZGV4O1xuICAgICAgICAgIGJyYW5jaENvdW50ICE9IGNoaWxkQ291bnQ7XG4gICAgICAgICAgaSA9ICgrK2kpICUgaW5jRWRnZXNDb3VudClcbiAge1xuICAgIHZhciBjdXJyZW50TmVpZ2hib3IgPVxuICAgICAgICAgICAgbmVpZ2hib3JFZGdlc1tpXS5nZXRPdGhlckVuZChub2RlKTtcblxuICAgIC8vIERvbid0IGJhY2sgdHJhdmVyc2UgdG8gcm9vdCBub2RlIGluIGN1cnJlbnQgdHJlZS5cbiAgICBpZiAoY3VycmVudE5laWdoYm9yID09IHBhcmVudE9mTm9kZSlcbiAgICB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRTdGFydEFuZ2xlID1cbiAgICAgICAgICAgIChzdGFydEFuZ2xlICsgYnJhbmNoQ291bnQgKiBzdGVwQW5nbGUpICUgMzYwO1xuICAgIHZhciBjaGlsZEVuZEFuZ2xlID0gKGNoaWxkU3RhcnRBbmdsZSArIHN0ZXBBbmdsZSkgJSAzNjA7XG5cbiAgICBDb1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dChjdXJyZW50TmVpZ2hib3IsXG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgY2hpbGRTdGFydEFuZ2xlLCBjaGlsZEVuZEFuZ2xlLFxuICAgICAgICAgICAgZGlzdGFuY2UgKyByYWRpYWxTZXBhcmF0aW9uLCByYWRpYWxTZXBhcmF0aW9uKTtcblxuICAgIGJyYW5jaENvdW50Kys7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQubWF4RGlhZ29uYWxJblRyZWUgPSBmdW5jdGlvbiAodHJlZSkge1xuICB2YXIgbWF4RGlhZ29uYWwgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHRyZWVbaV07XG4gICAgdmFyIGRpYWdvbmFsID0gbm9kZS5nZXREaWFnb25hbCgpO1xuXG4gICAgaWYgKGRpYWdvbmFsID4gbWF4RGlhZ29uYWwpXG4gICAge1xuICAgICAgbWF4RGlhZ29uYWwgPSBkaWFnb25hbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF4RGlhZ29uYWw7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGZvcm11bGEgaXMgMiB4IChsZXZlbCArIDEpIHggaWRlYWxFZGdlTGVuZ3RoXG4gIHJldHVybiAoMiAqICh0aGlzLmxldmVsICsgMSkgKiB0aGlzLmlkZWFsRWRnZUxlbmd0aCk7XG59O1xuXG4vLyBUaWxpbmcgbWV0aG9kc1xuXG4vLyBHcm91cCB6ZXJvIGRlZ3JlZSBtZW1iZXJzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZCwgY3JlYXRlIGR1bW15IHBhcmVudHMgd2hlcmUgbmVlZGVkIGFuZCBmaWxsIG1lbWJlckdyb3VwcyBieSB0aGVpciBkdW1tcCBwYXJlbnQgaWQnc1xuQ29TRUxheW91dC5wcm90b3R5cGUuZ3JvdXBaZXJvRGVncmVlTWVtYmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICAvLyBhcnJheSBvZiBbcGFyZW50X2lkIHggb25lRGVncmVlTm9kZV9pZF1cbiAgdmFyIHRlbXBNZW1iZXJHcm91cHMgPSB7fTsgLy8gQSB0ZW1wb3JhcnkgbWFwIG9mIHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVyc1xuICB0aGlzLm1lbWJlckdyb3VwcyA9IHt9OyAvLyBBIG1hcCBvZiBkdW1teSBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkXG4gIHRoaXMuaWRUb0R1bW15Tm9kZSA9IHt9OyAvLyBBIG1hcCBvZiBpZCB0byBkdW1teSBub2RlIFxuICBcbiAgdmFyIHplcm9EZWdyZWUgPSBbXTsgLy8gTGlzdCBvZiB6ZXJvIGRlZ3JlZSBub2RlcyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcblxuICAvLyBGaWxsIHplcm8gZGVncmVlIGxpc3RcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBub2RlID0gYWxsTm9kZXNbaV07XG4gICAgdmFyIHBhcmVudCA9IG5vZGUuZ2V0UGFyZW50KCk7XG4gICAgLy8gSWYgYSBub2RlIGhhcyB6ZXJvIGRlZ3JlZSBhbmQgaXRzIHBhcmVudCBpcyBub3QgdG8gYmUgdGlsZWQgaWYgZXhpc3RzIGFkZCB0aGF0IG5vZGUgdG8gemVyb0RlZ3JlcyBsaXN0XG4gICAgaWYgKHRoaXMuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbihub2RlKSA9PT0gMCAmJiAoIHBhcmVudC5pZCA9PSB1bmRlZmluZWQgfHwgIXRoaXMuZ2V0VG9CZVRpbGVkKHBhcmVudCkgKSApIHtcbiAgICAgIHplcm9EZWdyZWUucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgYSBtYXAgb2YgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgemVyb0RlZ3JlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gemVyb0RlZ3JlZVtpXTsgLy8gWmVybyBkZWdyZWUgbm9kZSBpdHNlbGZcbiAgICB2YXIgcF9pZCA9IG5vZGUuZ2V0UGFyZW50KCkuaWQ7IC8vIFBhcmVudCBpZFxuXG4gICAgaWYgKHR5cGVvZiB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgdGVtcE1lbWJlckdyb3Vwc1twX2lkXSA9IFtdO1xuXG4gICAgdGVtcE1lbWJlckdyb3Vwc1twX2lkXSA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF0uY29uY2F0KG5vZGUpOyAvLyBQdXNoIG5vZGUgdG8gdGhlIGxpc3QgYmVsb25ncyB0byBpdHMgcGFyZW50IGluIHRlbXBNZW1iZXJHcm91cHNcbiAgfVxuXG4gIC8vIElmIHRoZXJlIGFyZSBhdCBsZWFzdCB0d28gbm9kZXMgYXQgYSBsZXZlbCwgY3JlYXRlIGEgZHVtbXkgY29tcG91bmQgZm9yIHRoZW1cbiAgT2JqZWN0LmtleXModGVtcE1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihwX2lkKSB7XG4gICAgaWYgKHRlbXBNZW1iZXJHcm91cHNbcF9pZF0ubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGR1bW15Q29tcG91bmRJZCA9IFwiRHVtbXlDb21wb3VuZF9cIiArIHBfaWQ7IC8vIFRoZSBpZCBvZiBkdW1teSBjb21wb3VuZCB3aGljaCB3aWxsIGJlIGNyZWF0ZWQgc29vblxuICAgICAgc2VsZi5tZW1iZXJHcm91cHNbZHVtbXlDb21wb3VuZElkXSA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF07IC8vIEFkZCBkdW1teSBjb21wb3VuZCB0byBtZW1iZXJHcm91cHNcblxuICAgICAgdmFyIHBhcmVudCA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF1bMF0uZ2V0UGFyZW50KCk7IC8vIFRoZSBwYXJlbnQgb2YgemVybyBkZWdyZWUgbm9kZXMgd2lsbCBiZSB0aGUgcGFyZW50IG9mIG5ldyBkdW1teSBjb21wb3VuZFxuXG4gICAgICAvLyBDcmVhdGUgYSBkdW1teSBjb21wb3VuZCB3aXRoIGNhbGN1bGF0ZWQgaWRcbiAgICAgIHZhciBkdW1teUNvbXBvdW5kID0gbmV3IENvU0VOb2RlKHNlbGYuZ3JhcGhNYW5hZ2VyKTtcbiAgICAgIGR1bW15Q29tcG91bmQuaWQgPSBkdW1teUNvbXBvdW5kSWQ7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdMZWZ0ID0gcGFyZW50LnBhZGRpbmdMZWZ0IHx8IDA7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdSaWdodCA9IHBhcmVudC5wYWRkaW5nUmlnaHQgfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ0JvdHRvbSA9IHBhcmVudC5wYWRkaW5nQm90dG9tIHx8IDA7XG4gICAgICBkdW1teUNvbXBvdW5kLnBhZGRpbmdUb3AgPSBwYXJlbnQucGFkZGluZ1RvcCB8fCAwO1xuXG4gICAgICBzZWxmLmlkVG9EdW1teU5vZGVbZHVtbXlDb21wb3VuZElkXSA9IGR1bW15Q29tcG91bmQ7XG5cbiAgICAgIHZhciBkdW1teVBhcmVudEdyYXBoID0gc2VsZi5nZXRHcmFwaE1hbmFnZXIoKS5hZGQoc2VsZi5uZXdHcmFwaCgpLCBkdW1teUNvbXBvdW5kKTtcbiAgICAgIHZhciBwYXJlbnRHcmFwaCA9IHBhcmVudC5nZXRDaGlsZCgpO1xuXG4gICAgICAvLyBBZGQgZHVtbXkgY29tcG91bmQgdG8gcGFyZW50IHRoZSBncmFwaFxuICAgICAgcGFyZW50R3JhcGguYWRkKGR1bW15Q29tcG91bmQpO1xuXG4gICAgICAvLyBGb3IgZWFjaCB6ZXJvIGRlZ3JlZSBub2RlIGluIHRoaXMgbGV2ZWwgcmVtb3ZlIGl0IGZyb20gaXRzIHBhcmVudCBncmFwaCBhbmQgYWRkIGl0IHRvIHRoZSBncmFwaCBvZiBkdW1teSBwYXJlbnRcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGVtcE1lbWJlckdyb3Vwc1twX2lkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbm9kZSA9IHRlbXBNZW1iZXJHcm91cHNbcF9pZF1baV07XG5cbiAgICAgICAgcGFyZW50R3JhcGgucmVtb3ZlKG5vZGUpO1xuICAgICAgICBkdW1teVBhcmVudEdyYXBoLmFkZChub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2xlYXJDb21wb3VuZHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGlsZEdyYXBoTWFwID0ge307XG4gIHZhciBpZFRvTm9kZSA9IHt9O1xuXG4gIC8vIEdldCBjb21wb3VuZCBvcmRlcmluZyBieSBmaW5kaW5nIHRoZSBpbm5lciBvbmUgZmlyc3RcbiAgdGhpcy5wZXJmb3JtREZTT25Db21wb3VuZHMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29tcG91bmRPcmRlci5sZW5ndGg7IGkrKykge1xuXG4gICAgaWRUb05vZGVbdGhpcy5jb21wb3VuZE9yZGVyW2ldLmlkXSA9IHRoaXMuY29tcG91bmRPcmRlcltpXTtcbiAgICBjaGlsZEdyYXBoTWFwW3RoaXMuY29tcG91bmRPcmRlcltpXS5pZF0gPSBbXS5jb25jYXQodGhpcy5jb21wb3VuZE9yZGVyW2ldLmdldENoaWxkKCkuZ2V0Tm9kZXMoKSk7XG5cbiAgICAvLyBSZW1vdmUgY2hpbGRyZW4gb2YgY29tcG91bmRzXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKHRoaXMuY29tcG91bmRPcmRlcltpXS5nZXRDaGlsZCgpKTtcbiAgICB0aGlzLmNvbXBvdW5kT3JkZXJbaV0uY2hpbGQgPSBudWxsO1xuICB9XG5cbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxOb2RlcygpO1xuXG4gIC8vIFRpbGUgdGhlIHJlbW92ZWQgY2hpbGRyZW5cbiAgdGhpcy50aWxlQ29tcG91bmRNZW1iZXJzKGNoaWxkR3JhcGhNYXAsIGlkVG9Ob2RlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbGVkWmVyb0RlZ3JlZVBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2sgPSBbXTtcblxuICBPYmplY3Qua2V5cyh0aGlzLm1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIHZhciBjb21wb3VuZE5vZGUgPSBzZWxmLmlkVG9EdW1teU5vZGVbaWRdOyAvLyBHZXQgdGhlIGR1bW15IGNvbXBvdW5kXG5cbiAgICB0aWxlZFplcm9EZWdyZWVQYWNrW2lkXSA9IHNlbGYudGlsZU5vZGVzKHNlbGYubWVtYmVyR3JvdXBzW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICAvLyBTZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGR1bW15IGNvbXBvdW5kIGFzIGNhbGN1bGF0ZWRcbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLndpZHRoO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLmhlaWdodDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5yZXBvcHVsYXRlQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxDb21wb3VuZE5vZGUgPSB0aGlzLmNvbXBvdW5kT3JkZXJbaV07XG4gICAgdmFyIGlkID0gbENvbXBvdW5kTm9kZS5pZDtcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGxDb21wb3VuZE5vZGUucGFkZGluZ0xlZnQ7XG4gICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gbENvbXBvdW5kTm9kZS5wYWRkaW5nVG9wO1xuXG4gICAgdGhpcy5hZGp1c3RMb2NhdGlvbnModGhpcy50aWxlZE1lbWJlclBhY2tbaWRdLCBsQ29tcG91bmROb2RlLnJlY3QueCwgbENvbXBvdW5kTm9kZS5yZWN0LnksIGhvcml6b250YWxNYXJnaW4sIHZlcnRpY2FsTWFyZ2luKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aWxlZFBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2s7XG5cbiAgT2JqZWN0LmtleXModGlsZWRQYWNrKS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIGNvbXBvdW5kTm9kZSA9IHNlbGYuaWRUb0R1bW15Tm9kZVtpZF07IC8vIEdldCB0aGUgZHVtbXkgY29tcG91bmQgYnkgaXRzIGlkXG4gICAgdmFyIGhvcml6b250YWxNYXJnaW4gPSBjb21wb3VuZE5vZGUucGFkZGluZ0xlZnQ7XG4gICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gY29tcG91bmROb2RlLnBhZGRpbmdUb3A7XG5cbiAgICAvLyBBZGp1c3QgdGhlIHBvc2l0aW9ucyBvZiBub2RlcyB3cnQgaXRzIGNvbXBvdW5kXG4gICAgc2VsZi5hZGp1c3RMb2NhdGlvbnModGlsZWRQYWNrW2lkXSwgY29tcG91bmROb2RlLnJlY3QueCwgY29tcG91bmROb2RlLnJlY3QueSwgaG9yaXpvbnRhbE1hcmdpbiwgdmVydGljYWxNYXJnaW4pO1xuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFRvQmVUaWxlZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBpZCA9IG5vZGUuaWQ7XG4gIC8vZmlyc3RseSBjaGVjayB0aGUgcHJldmlvdXMgcmVzdWx0c1xuICBpZiAodGhpcy50b0JlVGlsZWRbaWRdICE9IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy50b0JlVGlsZWRbaWRdO1xuICB9XG5cbiAgLy9vbmx5IGNvbXBvdW5kIG5vZGVzIGFyZSB0byBiZSB0aWxlZFxuICB2YXIgY2hpbGRHcmFwaCA9IG5vZGUuZ2V0Q2hpbGQoKTtcbiAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbCkge1xuICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IGNoaWxkR3JhcGguZ2V0Tm9kZXMoKTsgLy8gR2V0IHRoZSBjaGlsZHJlbiBub2Rlc1xuXG4gIC8vYSBjb21wb3VuZCBub2RlIGlzIG5vdCB0byBiZSB0aWxlZCBpZiBhbGwgb2YgaXRzIGNvbXBvdW5kIGNoaWxkcmVuIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0aGVDaGlsZCA9IGNoaWxkcmVuW2ldO1xuXG4gICAgaWYgKHRoaXMuZ2V0Tm9kZURlZ3JlZSh0aGVDaGlsZCkgPiAwKSB7XG4gICAgICB0aGlzLnRvQmVUaWxlZFtpZF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL3Bhc3MgdGhlIGNoaWxkcmVuIG5vdCBoYXZpbmcgdGhlIGNvbXBvdW5kIHN0cnVjdHVyZVxuICAgIGlmICh0aGVDaGlsZC5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW3RoZUNoaWxkLmlkXSA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmdldFRvQmVUaWxlZCh0aGVDaGlsZCkpIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB0aGlzLnRvQmVUaWxlZFtpZF0gPSB0cnVlO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIEdldCBkZWdyZWUgb2YgYSBub2RlIGRlcGVuZGluZyBvZiBpdHMgZWRnZXMgYW5kIGluZGVwZW5kZW50IG9mIGl0cyBjaGlsZHJlblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBpZCA9IG5vZGUuaWQ7XG4gIHZhciBlZGdlcyA9IG5vZGUuZ2V0RWRnZXMoKTtcbiAgdmFyIGRlZ3JlZSA9IDA7XG5cbiAgLy8gRm9yIHRoZSBlZGdlcyBjb25uZWN0ZWRcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBlZGdlID0gZWRnZXNbaV07XG4gICAgaWYgKGVkZ2UuZ2V0U291cmNlKCkuaWQgIT09IGVkZ2UuZ2V0VGFyZ2V0KCkuaWQpIHtcbiAgICAgIGRlZ3JlZSA9IGRlZ3JlZSArIDE7XG4gICAgfVxuICB9XG4gIHJldHVybiBkZWdyZWU7XG59O1xuXG4vLyBHZXQgZGVncmVlIG9mIGEgbm9kZSB3aXRoIGl0cyBjaGlsZHJlblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBkZWdyZWUgPSB0aGlzLmdldE5vZGVEZWdyZWUobm9kZSk7XG4gIGlmIChub2RlLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgIHJldHVybiBkZWdyZWU7XG4gIH1cbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBkZWdyZWUgKz0gdGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gZGVncmVlO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucGVyZm9ybURGU09uQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBvdW5kT3JkZXIgPSBbXTtcbiAgdGhpcy5maWxsQ29tcGV4T3JkZXJCeURGUyh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5maWxsQ29tcGV4T3JkZXJCeURGUyA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGNoaWxkLmdldENoaWxkKCkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5maWxsQ29tcGV4T3JkZXJCeURGUyhjaGlsZC5nZXRDaGlsZCgpLmdldE5vZGVzKCkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXRUb0JlVGlsZWQoY2hpbGQpKSB7XG4gICAgICB0aGlzLmNvbXBvdW5kT3JkZXIucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiogVGhpcyBtZXRob2QgcGxhY2VzIGVhY2ggemVybyBkZWdyZWUgbWVtYmVyIHdydCBnaXZlbiAoeCx5KSBjb29yZGluYXRlcyAodG9wIGxlZnQpLlxuKi9cbkNvU0VMYXlvdXQucHJvdG90eXBlLmFkanVzdExvY2F0aW9ucyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIHgsIHksIGNvbXBvdW5kSG9yaXpvbnRhbE1hcmdpbiwgY29tcG91bmRWZXJ0aWNhbE1hcmdpbikge1xuICB4ICs9IGNvbXBvdW5kSG9yaXpvbnRhbE1hcmdpbjtcbiAgeSArPSBjb21wb3VuZFZlcnRpY2FsTWFyZ2luO1xuXG4gIHZhciBsZWZ0ID0geDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IG9yZ2FuaXphdGlvbi5yb3dzW2ldO1xuICAgIHggPSBsZWZ0O1xuICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBsbm9kZSA9IHJvd1tqXTtcblxuICAgICAgbG5vZGUucmVjdC54ID0geDsvLyArIGxub2RlLnJlY3Qud2lkdGggLyAyO1xuICAgICAgbG5vZGUucmVjdC55ID0geTsvLyArIGxub2RlLnJlY3QuaGVpZ2h0IC8gMjtcblxuICAgICAgeCArPSBsbm9kZS5yZWN0LndpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuXG4gICAgICBpZiAobG5vZGUucmVjdC5oZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgIG1heEhlaWdodCA9IGxub2RlLnJlY3QuaGVpZ2h0O1xuICAgIH1cblxuICAgIHkgKz0gbWF4SGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsZUNvbXBvdW5kTWVtYmVycyA9IGZ1bmN0aW9uIChjaGlsZEdyYXBoTWFwLCBpZFRvTm9kZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMudGlsZWRNZW1iZXJQYWNrID0gW107XG5cbiAgT2JqZWN0LmtleXMoY2hpbGRHcmFwaE1hcCkuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIC8vIEdldCB0aGUgY29tcG91bmQgbm9kZVxuICAgIHZhciBjb21wb3VuZE5vZGUgPSBpZFRvTm9kZVtpZF07XG5cbiAgICBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0gPSBzZWxmLnRpbGVOb2RlcyhjaGlsZEdyYXBoTWFwW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXS53aWR0aCArIDIwO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHNlbGYudGlsZWRNZW1iZXJQYWNrW2lkXS5oZWlnaHQgKyAyMDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxlTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMsIG1pbldpZHRoKSB7XG4gIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX1ZFUlRJQ0FMO1xuICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUw7XG4gIHZhciBvcmdhbml6YXRpb24gPSB7XG4gICAgcm93czogW10sXG4gICAgcm93V2lkdGg6IFtdLFxuICAgIHJvd0hlaWdodDogW10sXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgdmVydGljYWxQYWRkaW5nOiB2ZXJ0aWNhbFBhZGRpbmcsXG4gICAgaG9yaXpvbnRhbFBhZGRpbmc6IGhvcml6b250YWxQYWRkaW5nXG4gIH07XG5cbiAgLy8gU29ydCB0aGUgbm9kZXMgaW4gYXNjZW5kaW5nIG9yZGVyIG9mIHRoZWlyIGFyZWFzXG4gIG5vZGVzLnNvcnQoZnVuY3Rpb24gKG4xLCBuMikge1xuICAgIGlmIChuMS5yZWN0LndpZHRoICogbjEucmVjdC5oZWlnaHQgPiBuMi5yZWN0LndpZHRoICogbjIucmVjdC5oZWlnaHQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgaWYgKG4xLnJlY3Qud2lkdGggKiBuMS5yZWN0LmhlaWdodCA8IG4yLnJlY3Qud2lkdGggKiBuMi5yZWN0LmhlaWdodClcbiAgICAgIHJldHVybiAxO1xuICAgIHJldHVybiAwO1xuICB9KTtcblxuICAvLyBDcmVhdGUgdGhlIG9yZ2FuaXphdGlvbiAtPiB0aWxlIG1lbWJlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCAwLCBtaW5XaWR0aCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuY2FuQWRkSG9yaXpvbnRhbChvcmdhbml6YXRpb24sIGxOb2RlLnJlY3Qud2lkdGgsIGxOb2RlLnJlY3QuaGVpZ2h0KSkge1xuICAgICAgdGhpcy5pbnNlcnROb2RlVG9Sb3cob3JnYW5pemF0aW9uLCBsTm9kZSwgdGhpcy5nZXRTaG9ydGVzdFJvd0luZGV4KG9yZ2FuaXphdGlvbiksIG1pbldpZHRoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGgsIG1pbldpZHRoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNoaWZ0VG9MYXN0Um93KG9yZ2FuaXphdGlvbik7XG4gIH1cblxuICByZXR1cm4gb3JnYW5pemF0aW9uO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuaW5zZXJ0Tm9kZVRvUm93ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbiwgbm9kZSwgcm93SW5kZXgsIG1pbldpZHRoKSB7XG4gIHZhciBtaW5Db21wb3VuZFNpemUgPSBtaW5XaWR0aDtcblxuICAvLyBBZGQgbmV3IHJvdyBpZiBuZWVkZWRcbiAgaWYgKHJvd0luZGV4ID09IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCkge1xuICAgIHZhciBzZWNvbmREaW1lbnNpb24gPSBbXTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dzLnB1c2goc2Vjb25kRGltZW5zaW9uKTtcbiAgICBvcmdhbml6YXRpb24ucm93V2lkdGgucHVzaChtaW5Db21wb3VuZFNpemUpO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHQucHVzaCgwKTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSByb3cgd2lkdGhcbiAgdmFyIHcgPSBvcmdhbml6YXRpb24ucm93V2lkdGhbcm93SW5kZXhdICsgbm9kZS5yZWN0LndpZHRoO1xuXG4gIGlmIChvcmdhbml6YXRpb24ucm93c1tyb3dJbmRleF0ubGVuZ3RoID4gMCkge1xuICAgIHcgKz0gb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuICB9XG5cbiAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW3Jvd0luZGV4XSA9IHc7XG4gIC8vIFVwZGF0ZSBjb21wb3VuZCB3aWR0aFxuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIDwgdykge1xuICAgIG9yZ2FuaXphdGlvbi53aWR0aCA9IHc7XG4gIH1cblxuICAvLyBVcGRhdGUgaGVpZ2h0XG4gIHZhciBoID0gbm9kZS5yZWN0LmhlaWdodDtcbiAgaWYgKHJvd0luZGV4ID4gMClcbiAgICBoICs9IG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgdmFyIGV4dHJhSGVpZ2h0ID0gMDtcbiAgaWYgKGggPiBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSkge1xuICAgIGV4dHJhSGVpZ2h0ID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF07XG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF0gPSBoO1xuICAgIGV4dHJhSGVpZ2h0ID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtyb3dJbmRleF0gLSBleHRyYUhlaWdodDtcbiAgfVxuXG4gIG9yZ2FuaXphdGlvbi5oZWlnaHQgKz0gZXh0cmFIZWlnaHQ7XG5cbiAgLy8gSW5zZXJ0IG5vZGVcbiAgb3JnYW5pemF0aW9uLnJvd3Nbcm93SW5kZXhdLnB1c2gobm9kZSk7XG59O1xuXG4vL1NjYW5zIHRoZSByb3dzIG9mIGFuIG9yZ2FuaXphdGlvbiBhbmQgcmV0dXJucyB0aGUgb25lIHdpdGggdGhlIG1pbiB3aWR0aFxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0U2hvcnRlc3RSb3dJbmRleCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIHIgPSAtMTtcbiAgdmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvcmdhbml6YXRpb24ucm93V2lkdGhbaV0gPCBtaW4pIHtcbiAgICAgIHIgPSBpO1xuICAgICAgbWluID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcjtcbn07XG5cbi8vU2NhbnMgdGhlIHJvd3Mgb2YgYW4gb3JnYW5pemF0aW9uIGFuZCByZXR1cm5zIHRoZSBvbmUgd2l0aCB0aGUgbWF4IHdpZHRoXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRMb25nZXN0Um93SW5kZXggPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gIHZhciByID0gLTE7XG4gIHZhciBtYXggPSBOdW1iZXIuTUlOX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoOyBpKyspIHtcblxuICAgIGlmIChvcmdhbml6YXRpb24ucm93V2lkdGhbaV0gPiBtYXgpIHtcbiAgICAgIHIgPSBpO1xuICAgICAgbWF4ID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByO1xufTtcblxuLyoqXG4qIFRoaXMgbWV0aG9kIGNoZWNrcyB3aGV0aGVyIGFkZGluZyBleHRyYSB3aWR0aCB0byB0aGUgb3JnYW5pemF0aW9uIHZpb2xhdGVzXG4qIHRoZSBhc3BlY3QgcmF0aW8oMSkgb3Igbm90LlxuKi9cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbkFkZEhvcml6b250YWwgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCBleHRyYVdpZHRoLCBleHRyYUhlaWdodCkge1xuXG4gIHZhciBzcmkgPSB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKTtcblxuICBpZiAoc3JpIDwgMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIG1pbiA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtzcmldO1xuXG4gIGlmIChtaW4gKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmcgKyBleHRyYVdpZHRoIDw9IG9yZ2FuaXphdGlvbi53aWR0aClcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB2YXIgaERpZmYgPSAwO1xuXG4gIC8vIEFkZGluZyB0byBhbiBleGlzdGluZyByb3dcbiAgaWYgKG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbc3JpXSA8IGV4dHJhSGVpZ2h0KSB7XG4gICAgaWYgKHNyaSA+IDApXG4gICAgICBoRGlmZiA9IGV4dHJhSGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZyAtIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbc3JpXTtcbiAgfVxuXG4gIHZhciBhZGRfdG9fcm93X3JhdGlvO1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIC0gbWluID49IGV4dHJhV2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmcpIHtcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyAobWluICsgZXh0cmFXaWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZyk7XG4gIH0gZWxzZSB7XG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gb3JnYW5pemF0aW9uLndpZHRoO1xuICB9XG5cbiAgLy8gQWRkaW5nIGEgbmV3IHJvdyBmb3IgdGhpcyBub2RlXG4gIGhEaWZmID0gZXh0cmFIZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuICB2YXIgYWRkX25ld19yb3dfcmF0aW87XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggPCBleHRyYVdpZHRoKSB7XG4gICAgYWRkX25ld19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIGV4dHJhV2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgYWRkX25ld19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIG9yZ2FuaXphdGlvbi53aWR0aDtcbiAgfVxuXG4gIGlmIChhZGRfbmV3X3Jvd19yYXRpbyA8IDEpXG4gICAgYWRkX25ld19yb3dfcmF0aW8gPSAxIC8gYWRkX25ld19yb3dfcmF0aW87XG5cbiAgaWYgKGFkZF90b19yb3dfcmF0aW8gPCAxKVxuICAgIGFkZF90b19yb3dfcmF0aW8gPSAxIC8gYWRkX3RvX3Jvd19yYXRpbztcblxuICByZXR1cm4gYWRkX3RvX3Jvd19yYXRpbyA8IGFkZF9uZXdfcm93X3JhdGlvO1xufTtcblxuLy9JZiBtb3ZpbmcgdGhlIGxhc3Qgbm9kZSBmcm9tIHRoZSBsb25nZXN0IHJvdyBhbmQgYWRkaW5nIGl0IHRvIHRoZSBsYXN0XG4vL3JvdyBtYWtlcyB0aGUgYm91bmRpbmcgYm94IHNtYWxsZXIsIGRvIGl0LlxuQ29TRUxheW91dC5wcm90b3R5cGUuc2hpZnRUb0xhc3RSb3cgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uKSB7XG4gIHZhciBsb25nZXN0ID0gdGhpcy5nZXRMb25nZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKTtcbiAgdmFyIGxhc3QgPSBvcmdhbml6YXRpb24ucm93V2lkdGgubGVuZ3RoIC0gMTtcbiAgdmFyIHJvdyA9IG9yZ2FuaXphdGlvbi5yb3dzW2xvbmdlc3RdO1xuICB2YXIgbm9kZSA9IHJvd1tyb3cubGVuZ3RoIC0gMV07XG5cbiAgdmFyIGRpZmYgPSBub2RlLndpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nO1xuXG4gIC8vIENoZWNrIGlmIHRoZXJlIGlzIGVub3VnaCBzcGFjZSBvbiB0aGUgbGFzdCByb3dcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCAtIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsYXN0XSA+IGRpZmYgJiYgbG9uZ2VzdCAhPSBsYXN0KSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGxvbmdlc3Qgcm93XG4gICAgcm93LnNwbGljZSgtMSwgMSk7XG5cbiAgICAvLyBQdXNoIGl0IHRvIHRoZSBsYXN0IHJvd1xuICAgIG9yZ2FuaXphdGlvbi5yb3dzW2xhc3RdLnB1c2gobm9kZSk7XG5cbiAgICBvcmdhbml6YXRpb24ucm93V2lkdGhbbG9uZ2VzdF0gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbbG9uZ2VzdF0gLSBkaWZmO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsYXN0XSA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsYXN0XSArIGRpZmY7XG4gICAgb3JnYW5pemF0aW9uLndpZHRoID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2luc3RhbmNlLmdldExvbmdlc3RSb3dJbmRleChvcmdhbml6YXRpb24pXTtcblxuICAgIC8vIFVwZGF0ZSBoZWlnaHRzIG9mIHRoZSBvcmdhbml6YXRpb25cbiAgICB2YXIgbWF4SGVpZ2h0ID0gTnVtYmVyLk1JTl9WQUxVRTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvdy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJvd1tpXS5oZWlnaHQgPiBtYXhIZWlnaHQpXG4gICAgICAgIG1heEhlaWdodCA9IHJvd1tpXS5oZWlnaHQ7XG4gICAgfVxuICAgIGlmIChsb25nZXN0ID4gMClcbiAgICAgIG1heEhlaWdodCArPSBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nO1xuXG4gICAgdmFyIHByZXZUb3RhbCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbG9uZ2VzdF0gKyBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSA9IG1heEhlaWdodDtcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XSA8IG5vZGUuaGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZylcbiAgICAgIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF0gPSBub2RlLmhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgICB2YXIgZmluYWxUb3RhbCA9IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbG9uZ2VzdF0gKyBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdO1xuICAgIG9yZ2FuaXphdGlvbi5oZWlnaHQgKz0gKGZpbmFsVG90YWwgLSBwcmV2VG90YWwpO1xuXG4gICAgdGhpcy5zaGlmdFRvTGFzdFJvdyhvcmdhbml6YXRpb24pO1xuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWxpbmdQcmVMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKENvU0VDb25zdGFudHMuVElMRSkge1xuICAgIC8vIEZpbmQgemVybyBkZWdyZWUgbm9kZXMgYW5kIGNyZWF0ZSBhIGNvbXBvdW5kIGZvciBlYWNoIGxldmVsXG4gICAgdGhpcy5ncm91cFplcm9EZWdyZWVNZW1iZXJzKCk7XG4gICAgLy8gVGlsZSBhbmQgY2xlYXIgY2hpbGRyZW4gb2YgZWFjaCBjb21wb3VuZFxuICAgIHRoaXMuY2xlYXJDb21wb3VuZHMoKTtcbiAgICAvLyBTZXBhcmF0ZWx5IHRpbGUgYW5kIGNsZWFyIHplcm8gZGVncmVlIG5vZGVzIGZvciBlYWNoIGxldmVsXG4gICAgdGhpcy5jbGVhclplcm9EZWdyZWVNZW1iZXJzKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGluZ1Bvc3RMYXlvdXQgPSBmdW5jdGlvbigpIHtcbiAgaWYgKENvU0VDb25zdGFudHMuVElMRSkge1xuICAgIHRoaXMucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzKCk7XG4gICAgdGhpcy5yZXBvcHVsYXRlQ29tcG91bmRzKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUxheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvQ29TRUxheW91dC5qcyIsImZ1bmN0aW9uIERpbWVuc2lvbkQod2lkdGgsIGhlaWdodCkge1xuICB0aGlzLndpZHRoID0gMDtcbiAgdGhpcy5oZWlnaHQgPSAwO1xuICBpZiAod2lkdGggIT09IG51bGwgJiYgaGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICB9XG59XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuRGltZW5zaW9uRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpbWVuc2lvbkQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0RpbWVuc2lvbkQuanMiLCJmdW5jdGlvbiBFbWl0dGVyKCl7XG4gIHRoaXMubGlzdGVuZXJzID0gW107XG59XG5cbnZhciBwID0gRW1pdHRlci5wcm90b3R5cGU7XG5cbnAuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XG4gIHRoaXMubGlzdGVuZXJzLnB1c2goe1xuICAgIGV2ZW50OiBldmVudCxcbiAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgfSk7XG59O1xuXG5wLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oIGV2ZW50LCBjYWxsYmFjayApe1xuICBmb3IoIHZhciBpID0gdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpID49IDA7IGktLSApe1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiggbC5ldmVudCA9PT0gZXZlbnQgJiYgbC5jYWxsYmFjayA9PT0gY2FsbGJhY2sgKXtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZSggaSwgMSApO1xuICAgIH1cbiAgfVxufTtcblxucC5lbWl0ID0gZnVuY3Rpb24oIGV2ZW50LCBkYXRhICl7XG4gIGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5saXN0ZW5lcnMubGVuZ3RoOyBpKysgKXtcbiAgICB2YXIgbCA9IHRoaXMubGlzdGVuZXJzW2ldO1xuXG4gICAgaWYoIGV2ZW50ID09PSBsLmV2ZW50ICl7XG4gICAgICBsLmNhbGxiYWNrKCBkYXRhICk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0VtaXR0ZXIuanMiLCJjb25zdCBub2RlRnJvbSA9IHZhbHVlID0+ICh7IHZhbHVlLCBuZXh0OiBudWxsLCBwcmV2OiBudWxsIH0pO1xuXG5jb25zdCBhZGQgPSAoIHByZXYsIG5vZGUsIG5leHQsIGxpc3QgKSA9PiB7XG4gIGlmKCBwcmV2ICE9PSBudWxsICl7XG4gICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LmhlYWQgPSBub2RlO1xuICB9XG5cbiAgaWYoIG5leHQgIT09IG51bGwgKXtcbiAgICBuZXh0LnByZXYgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudGFpbCA9IG5vZGU7XG4gIH1cblxuICBub2RlLnByZXYgPSBwcmV2O1xuICBub2RlLm5leHQgPSBuZXh0O1xuXG4gIGxpc3QubGVuZ3RoKys7XG5cbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5jb25zdCByZW1vdmUgPSAoIG5vZGUsIGxpc3QgKSA9PiB7XG4gIGxldCB7IHByZXYsIG5leHQgfSA9IG5vZGU7XG5cbiAgaWYoIHByZXYgIT09IG51bGwgKXtcbiAgICBwcmV2Lm5leHQgPSBuZXh0O1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5leHQ7XG4gIH1cblxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xuICAgIG5leHQucHJldiA9IHByZXY7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gcHJldjtcbiAgfVxuXG4gIG5vZGUucHJldiA9IG5vZGUubmV4dCA9IG51bGw7XG5cbiAgbGlzdC5sZW5ndGgtLTtcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3RvciggdmFscyApe1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMudGFpbCA9IG51bGw7XG5cbiAgICBpZiggdmFscyAhPSBudWxsICl7XG4gICAgICB2YWxzLmZvckVhY2goIHYgPT4gdGhpcy5wdXNoKHYpICk7XG4gICAgfVxuICB9XG5cbiAgc2l6ZSgpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGluc2VydEJlZm9yZSggdmFsLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnRBZnRlciggdmFsLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUsIG5vZGVGcm9tKHZhbCksIG90aGVyTm9kZS5uZXh0LCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnROb2RlQmVmb3JlKCBuZXdOb2RlLCBvdGhlck5vZGUgKXtcbiAgICByZXR1cm4gYWRkKCBvdGhlck5vZGUucHJldiwgbmV3Tm9kZSwgb3RoZXJOb2RlLCB0aGlzICk7XG4gIH1cblxuICBpbnNlcnROb2RlQWZ0ZXIoIG5ld05vZGUsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbmV3Tm9kZSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcbiAgfVxuXG4gIHB1c2goIHZhbCApe1xuICAgIHJldHVybiBhZGQoIHRoaXMudGFpbCwgbm9kZUZyb20odmFsKSwgbnVsbCwgdGhpcyApO1xuICB9XG5cbiAgdW5zaGlmdCggdmFsICl7XG4gICAgcmV0dXJuIGFkZCggbnVsbCwgbm9kZUZyb20odmFsKSwgdGhpcy5oZWFkLCB0aGlzICk7XG4gIH1cblxuICByZW1vdmUoIG5vZGUgKXtcbiAgICByZXR1cm4gcmVtb3ZlKCBub2RlLCB0aGlzICk7XG4gIH1cblxuICBwb3AoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKS52YWx1ZTtcbiAgfVxuXG4gIHBvcE5vZGUoKXtcbiAgICAgcmV0dXJuIHJlbW92ZSggdGhpcy50YWlsLCB0aGlzICk7XG4gIH1cblxuICBzaGlmdCgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMuaGVhZCwgdGhpcyApLnZhbHVlO1xuICB9XG5cbiAgc2hpZnROb2RlKCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rZWRMaXN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MaW5rZWRMaXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyByZWdpc3RlcnMgdGhlIGV4dGVuc2lvbiBvbiBhIGN5dG9zY2FwZSBsaWIgcmVmXG52YXIgZ2V0TGF5b3V0ID0gcmVxdWlyZSgnLi9MYXlvdXQnKTtcblxudmFyIHJlZ2lzdGVyID0gZnVuY3Rpb24oIGN5dG9zY2FwZSApe1xuICB2YXIgTGF5b3V0ID0gZ2V0TGF5b3V0KCBjeXRvc2NhcGUgKTtcblxuICBjeXRvc2NhcGUoJ2xheW91dCcsICdjb3NlLWJpbGtlbnQnLCBMYXlvdXQpO1xufTtcblxuLy8gYXV0byByZWcgZm9yIGdsb2JhbHNcbmlmKCB0eXBlb2YgY3l0b3NjYXBlICE9PSAndW5kZWZpbmVkJyApe1xuICByZWdpc3RlciggY3l0b3NjYXBlICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVnaXN0ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9