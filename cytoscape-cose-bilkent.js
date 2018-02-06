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
  // var cancelDisplacementX = false;
  // var cancelDisplacementY = false;

  // check horizontal borders
  if (this.minX !== undefined || this.maxX !== undefined) {
    // calculate the expected X coordinate after displacement is performed
    var expectedX = this.rect.x + this.displacementX;

    if (this.maxX !== undefined && expectedX + this.rect.width > this.maxX || this.minX !== undefined && expectedX < this.minX) {

      // cancelDisplacementX = true;
      this.displacementX = 0;
    }
  }

  // check vertical borders
  if (this.minY !== undefined || this.maxY !== undefined) {
    // calculate the expected Y coordinate after displacement is performed
    var expectedY = this.rect.y + this.displacementY;

    if (this.maxY !== undefined && expectedY + this.rect.width > this.maxY || this.minY !== undefined && expectedY < this.minY) {

      // cancelDisplacementY = true;
      this.displacementY = 0;
    }
  }

  // if displacement is canceled in both directions just clear the forces and return
  // if ( cancelDisplacementX && cancelDisplacementY )
  // {
  //     clearForces.call(this);
  //     return;
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMTEyOTY4ODNiMjc4NzM4ZGNiNyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xheW91dENvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xFZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvTEdyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvUG9pbnRELmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvSGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0lHZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0lNYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xHcmFwaE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0xOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9SZWN0YW5nbGVELmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvVW5pcXVlSURHZW5lcmV0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvQ29TRUVkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvQ29TRU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9GRExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0ZETGF5b3V0RWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0ZETGF5b3V0Tm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0hhc2hNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9SYW5kb21TZWVkLmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTGF5b3V0L0VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xheW91dC9MaW5rZWRMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXRDb25zdGFudHMiLCJQUk9PRl9RVUFMSVRZIiwiREVGQVVMVF9RVUFMSVRZIiwiRFJBRlRfUVVBTElUWSIsIkRFRkFVTFRfQ1JFQVRFX0JFTkRTX0FTX05FRURFRCIsIkRFRkFVTFRfSU5DUkVNRU5UQUwiLCJERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQiLCJERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUIiwiREVGQVVMVF9BTklNQVRJT05fUEVSSU9EIiwiREVGQVVMVF9VTklGT1JNX0xFQUZfTk9ERV9TSVpFUyIsIkRFRkFVTFRfR1JBUEhfTUFSR0lOIiwiTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTIiwiU0lNUExFX05PREVfU0laRSIsIlNJTVBMRV9OT0RFX0hBTEZfU0laRSIsIkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSIsIk1JTl9FREdFX0xFTkdUSCIsIldPUkxEX0JPVU5EQVJZIiwiSU5JVElBTF9XT1JMRF9CT1VOREFSWSIsIldPUkxEX0NFTlRFUl9YIiwiV09STERfQ0VOVEVSX1kiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIkZETGF5b3V0Q29uc3RhbnRzIiwicHJvcCIsIk1BWF9JVEVSQVRJT05TIiwiREVGQVVMVF9FREdFX0xFTkdUSCIsIkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIIiwiREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEgiLCJERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEgiLCJERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEgiLCJERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SIiwiREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiIsIkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OIiwiREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OIiwiREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCIsIk1BWF9OT0RFX0RJU1BMQUNFTUVOVF9JTkNSRU1FTlRBTCIsIk1BWF9OT0RFX0RJU1BMQUNFTUVOVCIsIk1JTl9SRVBVTFNJT05fRElTVCIsIkNPTlZFUkdFTkNFX0NIRUNLX1BFUklPRCIsIlBFUl9MRVZFTF9JREVBTF9FREdFX0xFTkdUSF9GQUNUT1IiLCJHUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCIsIkludGVnZXIiLCJNQVhfVkFMVUUiLCJNSU5fVkFMVUUiLCJMR3JhcGhPYmplY3QiLCJJR2VvbWV0cnkiLCJJTWF0aCIsIkxFZGdlIiwic291cmNlIiwidGFyZ2V0IiwidkVkZ2UiLCJjYWxsIiwiaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0IiwidkdyYXBoT2JqZWN0IiwiYmVuZHBvaW50cyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImdldFNvdXJjZSIsImdldFRhcmdldCIsImlzSW50ZXJHcmFwaCIsImdldExlbmd0aCIsImxlbmd0aCIsImdldEJlbmRwb2ludHMiLCJnZXRMY2EiLCJsY2EiLCJnZXRTb3VyY2VJbkxjYSIsInNvdXJjZUluTGNhIiwiZ2V0VGFyZ2V0SW5MY2EiLCJ0YXJnZXRJbkxjYSIsImdldE90aGVyRW5kIiwibm9kZSIsImdldE90aGVyRW5kSW5HcmFwaCIsImdyYXBoIiwib3RoZXJFbmQiLCJyb290IiwiZ2V0R3JhcGhNYW5hZ2VyIiwiZ2V0Um9vdCIsImdldE93bmVyIiwiZ2V0UGFyZW50IiwidXBkYXRlTGVuZ3RoIiwiY2xpcFBvaW50Q29vcmRpbmF0ZXMiLCJBcnJheSIsImdldEludGVyc2VjdGlvbiIsImdldFJlY3QiLCJsZW5ndGhYIiwibGVuZ3RoWSIsIk1hdGgiLCJhYnMiLCJzaWduIiwic3FydCIsInVwZGF0ZUxlbmd0aFNpbXBsZSIsImdldENlbnRlclgiLCJnZXRDZW50ZXJZIiwiTEdyYXBoTWFuYWdlciIsIkxOb2RlIiwiSGFzaFNldCIsIlJlY3RhbmdsZUQiLCJQb2ludCIsIkxpbmtlZExpc3QiLCJMR3JhcGgiLCJwYXJlbnQiLCJvYmoyIiwidkdyYXBoIiwiZXN0aW1hdGVkU2l6ZSIsIm1hcmdpbiIsImVkZ2VzIiwibm9kZXMiLCJpc0Nvbm5lY3RlZCIsImdyYXBoTWFuYWdlciIsIkxheW91dCIsImdldE5vZGVzIiwiZ2V0RWRnZXMiLCJnZXRMZWZ0IiwibGVmdCIsImdldFJpZ2h0IiwicmlnaHQiLCJnZXRUb3AiLCJ0b3AiLCJnZXRCb3R0b20iLCJib3R0b20iLCJhZGQiLCJvYmoxIiwic291cmNlTm9kZSIsInRhcmdldE5vZGUiLCJuZXdOb2RlIiwiaW5kZXhPZiIsIm93bmVyIiwicHVzaCIsIm5ld0VkZ2UiLCJyZW1vdmUiLCJvYmoiLCJlZGdlc1RvQmVSZW1vdmVkIiwic2xpY2UiLCJlZGdlIiwicyIsImkiLCJpbmRleCIsInNwbGljZSIsInNvdXJjZUluZGV4IiwidGFyZ2V0SW5kZXgiLCJ1cGRhdGVMZWZ0VG9wIiwibm9kZVRvcCIsIm5vZGVMZWZ0IiwibE5vZGUiLCJwYWRkaW5nTGVmdCIsInVuZGVmaW5lZCIsInVwZGF0ZUJvdW5kcyIsInJlY3Vyc2l2ZSIsIm5vZGVSaWdodCIsIm5vZGVCb3R0b20iLCJjaGlsZCIsImJvdW5kaW5nUmVjdCIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJjYWxjdWxhdGVCb3VuZHMiLCJnZXRJbmNsdXNpb25UcmVlRGVwdGgiLCJnZXRFc3RpbWF0ZWRTaXplIiwiY2FsY0VzdGltYXRlZFNpemUiLCJzaXplIiwidXBkYXRlQ29ubmVjdGVkIiwic2VsZiIsInRvQmVWaXNpdGVkIiwidmlzaXRlZCIsImN1cnJlbnROb2RlIiwibmVpZ2hib3JFZGdlcyIsImN1cnJlbnROZWlnaGJvciIsImNoaWxkcmVuT2ZOb2RlIiwid2l0aENoaWxkcmVuIiwiZm9yRWFjaCIsInNoaWZ0IiwibmVpZ2hib3JFZGdlIiwiY29udGFpbnMiLCJjaGlsZHJlbk9mTmVpZ2hib3IiLCJub09mVmlzaXRlZEluVGhpc0dyYXBoIiwia2V5cyIsInNldCIsInZpc2l0ZWRJZCIsInZpc2l0ZWROb2RlIiwiUG9pbnREIiwiZ2V0WCIsImdldFkiLCJzZXRYIiwic2V0WSIsImdldERpZmZlcmVuY2UiLCJwdCIsIkRpbWVuc2lvbkQiLCJnZXRDb3B5IiwidHJhbnNsYXRlIiwiZGltIiwiVW5pcXVlSURHZW5lcmV0b3IiLCJ0aGVJZCIsImNyZWF0ZUlEIiwiY2xlYXIiLCJpc0VtcHR5IiwiYWRkQWxsVG8iLCJsaXN0IiwiYWRkQWxsIiwidiIsImNhbGNTZXBhcmF0aW9uQW1vdW50IiwicmVjdEEiLCJyZWN0QiIsIm92ZXJsYXBBbW91bnQiLCJzZXBhcmF0aW9uQnVmZmVyIiwiaW50ZXJzZWN0cyIsImRpcmVjdGlvbnMiLCJkZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyIsIm1pbiIsIm1heCIsInNsb3BlIiwibW92ZUJ5WSIsIm1vdmVCeVgiLCJnZXRJbnRlcnNlY3Rpb24yIiwicmVzdWx0IiwicDF4IiwicDF5IiwicDJ4IiwicDJ5IiwidG9wTGVmdEF4IiwidG9wTGVmdEF5IiwidG9wUmlnaHRBeCIsImJvdHRvbUxlZnRBeCIsImJvdHRvbUxlZnRBeSIsImJvdHRvbVJpZ2h0QXgiLCJoYWxmV2lkdGhBIiwiZ2V0V2lkdGhIYWxmIiwiaGFsZkhlaWdodEEiLCJnZXRIZWlnaHRIYWxmIiwidG9wTGVmdEJ4IiwidG9wTGVmdEJ5IiwidG9wUmlnaHRCeCIsImJvdHRvbUxlZnRCeCIsImJvdHRvbUxlZnRCeSIsImJvdHRvbVJpZ2h0QngiLCJoYWxmV2lkdGhCIiwiaGFsZkhlaWdodEIiLCJjbGlwUG9pbnRBRm91bmQiLCJjbGlwUG9pbnRCRm91bmQiLCJzbG9wZUEiLCJzbG9wZUIiLCJzbG9wZVByaW1lIiwiY2FyZGluYWxEaXJlY3Rpb25BIiwiY2FyZGluYWxEaXJlY3Rpb25CIiwidGVtcFBvaW50QXgiLCJ0ZW1wUG9pbnRBeSIsInRlbXBQb2ludEJ4IiwidGVtcFBvaW50QnkiLCJnZXRDYXJkaW5hbERpcmVjdGlvbiIsImxpbmUiLCJzMSIsInMyIiwiZjEiLCJmMiIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsIng0IiwieTQiLCJhMSIsImEyIiwiYjEiLCJiMiIsImMxIiwiYzIiLCJkZW5vbSIsIkhBTEZfUEkiLCJQSSIsIk9ORV9BTkRfSEFMRl9QSSIsIlRXT19QSSIsIlRIUkVFX1BJIiwidmFsdWUiLCJmbG9vciIsImNlaWwiLCJsYXlvdXQiLCJncmFwaHMiLCJhZGRSb290IiwibmdyYXBoIiwibmV3R3JhcGgiLCJubm9kZSIsInNldFJvb3RHcmFwaCIsInJvb3RHcmFwaCIsInBhcmVudE5vZGUiLCJzb3VyY2VHcmFwaCIsInRhcmdldEdyYXBoIiwibE9iaiIsImNvbmNhdCIsIm5vZGVzVG9CZVJlbW92ZWQiLCJnZXRHcmFwaHMiLCJnZXRBbGxOb2RlcyIsImFsbE5vZGVzIiwibm9kZUxpc3QiLCJyZXNldEFsbE5vZGVzIiwicmVzZXRBbGxFZGdlcyIsImFsbEVkZ2VzIiwicmVzZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiIsImFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwiZ2V0QWxsRWRnZXMiLCJlZGdlTGlzdCIsImdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uIiwic2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24iLCJnZXRMYXlvdXQiLCJpc09uZUFuY2VzdG9yT2ZPdGhlciIsImZpcnN0Tm9kZSIsInNlY29uZE5vZGUiLCJvd25lckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyIsInNvdXJjZUFuY2VzdG9yR3JhcGgiLCJ0YXJnZXRBbmNlc3RvckdyYXBoIiwiY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yIiwiZmlyc3RPd25lckdyYXBoIiwic2Vjb25kT3duZXJHcmFwaCIsImNhbGNJbmNsdXNpb25UcmVlRGVwdGhzIiwiZGVwdGgiLCJpbmNsdXNpb25UcmVlRGVwdGgiLCJpbmNsdWRlc0ludmFsaWRFZGdlIiwiUmFuZG9tU2VlZCIsImdtIiwibG9jIiwidk5vZGUiLCJyZWN0IiwiZ2V0Q2hpbGQiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwiZ2V0SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0Q2VudGVyIiwiZ2V0TG9jYXRpb24iLCJnZXREaWFnb25hbCIsInNldFJlY3QiLCJ1cHBlckxlZnQiLCJkaW1lbnNpb24iLCJzZXRDZW50ZXIiLCJjeCIsImN5Iiwic2V0TG9jYXRpb24iLCJtb3ZlQnkiLCJkeCIsImR5IiwiZ2V0RWRnZUxpc3RUb05vZGUiLCJ0byIsImdldEVkZ2VzQmV0d2VlbiIsIm90aGVyIiwiZ2V0TmVpZ2hib3JzTGlzdCIsIm5laWdoYm9ycyIsIndpdGhOZWlnaGJvcnNMaXN0IiwiU2V0IiwiY2hpbGROb2RlIiwiY2hpbGRyZW4iLCJnZXROb09mQ2hpbGRyZW4iLCJub09mQ2hpbGRyZW4iLCJzY2F0dGVyIiwicmFuZG9tQ2VudGVyWCIsInJhbmRvbUNlbnRlclkiLCJtaW5YIiwibWF4WCIsIm5leHREb3VibGUiLCJtaW5ZIiwibWF4WSIsImNoaWxkR3JhcGgiLCJsYWJlbFdpZHRoIiwibGFiZWxIZWlnaHQiLCJsYWJlbFBvcyIsInRyYW5zZm9ybSIsInRyYW5zIiwibGVmdFRvcCIsInZMZWZ0VG9wIiwiaW52ZXJzZVRyYW5zZm9ybVBvaW50IiwiSGFzaE1hcCIsIlRyYW5zZm9ybSIsIkVtaXR0ZXIiLCJpc1JlbW90ZVVzZSIsImxheW91dFF1YWxpdHkiLCJjcmVhdGVCZW5kc0FzTmVlZGVkIiwiaW5jcmVtZW50YWwiLCJhbmltYXRpb25PbkxheW91dCIsImFuaW1hdGlvbkR1cmluZ0xheW91dCIsImFuaW1hdGlvblBlcmlvZCIsInVuaWZvcm1MZWFmTm9kZVNpemVzIiwiZWRnZVRvRHVtbXlOb2RlcyIsImlzTGF5b3V0RmluaXNoZWQiLCJpc1N1YkxheW91dCIsIlJBTkRPTV9TRUVEIiwibmV3R3JhcGhNYW5hZ2VyIiwiY2hlY2tMYXlvdXRTdWNjZXNzIiwicnVuTGF5b3V0IiwidGlsaW5nUHJlTGF5b3V0IiwiaW5pdFBhcmFtZXRlcnMiLCJpc0xheW91dFN1Y2Nlc3NmdWxsIiwiQU5JTUFURSIsImRvUG9zdExheW91dCIsInRpbGluZ1Bvc3RMYXlvdXQiLCJ1cGRhdGUiLCJ1cGRhdGUyIiwiY3JlYXRlQmVuZHBvaW50c0Zyb21EdW1teU5vZGVzIiwibmV3TGVmdFRvcCIsInNldFdvcmxkT3JnWCIsInNldFdvcmxkT3JnWSIsInNldERldmljZU9yZ1giLCJzZXREZXZpY2VPcmdZIiwicG9zaXRpb25Ob2Rlc1JhbmRvbWx5IiwiZ2V0RmxhdEZvcmVzdCIsImZsYXRGb3Jlc3QiLCJpc0ZvcmVzdCIsImlzRmxhdCIsInBhcmVudHMiLCJ1blByb2Nlc3NlZE5vZGVzIiwiZ2V0IiwicHV0IiwidGVtcCIsImNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzIiwiZHVtbXlOb2RlcyIsInByZXYiLCJkdW1teU5vZGUiLCJEaW1lbnNpb24iLCJkdW1teUVkZ2UiLCJrZXlTZXQiLCJrIiwibEVkZ2UiLCJwYXRoIiwicCIsImVicCIsInNsaWRlclZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibWluRGl2IiwibWF4TXVsIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImEiLCJiIiwiZmluZENlbnRlck9mVHJlZSIsInJlbW92ZWROb2RlcyIsInJlbWFpbmluZ0RlZ3JlZXMiLCJmb3VuZENlbnRlciIsImNlbnRlck5vZGUiLCJkZWdyZWUiLCJ0ZW1wTGlzdCIsInRlbXBMaXN0MiIsIm5laWdoYm91cnMiLCJqIiwibmVpZ2hib3VyIiwib3RoZXJEZWdyZWUiLCJuZXdEZWdyZWUiLCJzZXRHcmFwaE1hbmFnZXIiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJwYXJzZUludCIsIm1vdmUiLCJlcXVhbHMiLCJ0b1N0cmluZyIsImdldE1pblgiLCJnZXRNYXhYIiwiZ2V0TWluWSIsImdldE1heFkiLCJsd29ybGRPcmdYIiwibHdvcmxkT3JnWSIsImxkZXZpY2VPcmdYIiwibGRldmljZU9yZ1kiLCJsd29ybGRFeHRYIiwibHdvcmxkRXh0WSIsImxkZXZpY2VFeHRYIiwibGRldmljZUV4dFkiLCJnZXRXb3JsZE9yZ1giLCJ3b3giLCJnZXRXb3JsZE9yZ1kiLCJ3b3kiLCJnZXRXb3JsZEV4dFgiLCJzZXRXb3JsZEV4dFgiLCJ3ZXgiLCJnZXRXb3JsZEV4dFkiLCJzZXRXb3JsZEV4dFkiLCJ3ZXkiLCJnZXREZXZpY2VPcmdYIiwiZG94IiwiZ2V0RGV2aWNlT3JnWSIsImRveSIsImdldERldmljZUV4dFgiLCJzZXREZXZpY2VFeHRYIiwiZGV4IiwiZ2V0RGV2aWNlRXh0WSIsInNldERldmljZUV4dFkiLCJkZXkiLCJ0cmFuc2Zvcm1YIiwieERldmljZSIsIndvcmxkRXh0WCIsInRyYW5zZm9ybVkiLCJ5RGV2aWNlIiwid29ybGRFeHRZIiwiaW52ZXJzZVRyYW5zZm9ybVgiLCJ4V29ybGQiLCJkZXZpY2VFeHRYIiwiaW52ZXJzZVRyYW5zZm9ybVkiLCJ5V29ybGQiLCJkZXZpY2VFeHRZIiwiaW5Qb2ludCIsIm91dFBvaW50IiwibGFzdElEIiwiaXNQcmltaXRpdmUiLCJ1bmlxdWVJRCIsImdldFN0cmluZyIsImlkIiwiYXJnIiwidHlwZSIsIkNvU0VDb25zdGFudHMiLCJERUZBVUxUX1VTRV9NVUxUSV9MRVZFTF9TQ0FMSU5HIiwiREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTiIsIkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04iLCJUSUxFIiwiVElMSU5HX1BBRERJTkdfVkVSVElDQUwiLCJUSUxJTkdfUEFERElOR19IT1JJWk9OVEFMIiwiRkRMYXlvdXRFZGdlIiwiQ29TRUVkZ2UiLCJDb1NFR3JhcGgiLCJncmFwaE1nciIsIkNvU0VHcmFwaE1hbmFnZXIiLCJGRExheW91dE5vZGUiLCJDb1NFTm9kZSIsImNsZWFyRm9yY2VzIiwic3ByaW5nRm9yY2VYIiwic3ByaW5nRm9yY2VZIiwicmVwdWxzaW9uRm9yY2VYIiwicmVwdWxzaW9uRm9yY2VZIiwiZ3Jhdml0YXRpb25Gb3JjZVgiLCJncmF2aXRhdGlvbkZvcmNlWSIsImRpc3BsYWNlbWVudFgiLCJkaXNwbGFjZW1lbnRZIiwiY29vbGluZ0ZhY3RvciIsIm1heE5vZGVEaXNwbGFjZW1lbnQiLCJleHBlY3RlZFgiLCJleHBlY3RlZFkiLCJwcm9wb2dhdGVEaXNwbGFjZW1lbnRUb0NoaWxkcmVuIiwidG90YWxEaXNwbGFjZW1lbnQiLCJkWCIsImRZIiwic2V0UHJlZDEiLCJwcmVkMSIsImdldFByZWQxIiwiZ2V0UHJlZDIiLCJwcmVkMiIsInNldE5leHQiLCJuZXh0IiwiZ2V0TmV4dCIsInNldFByb2Nlc3NlZCIsInByb2Nlc3NlZCIsImlzUHJvY2Vzc2VkIiwiRkRMYXlvdXQiLCJ1c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uIiwiaWRlYWxFZGdlTGVuZ3RoIiwic3ByaW5nQ29uc3RhbnQiLCJyZXB1bHNpb25Db25zdGFudCIsImdyYXZpdHlDb25zdGFudCIsImNvbXBvdW5kR3Jhdml0eUNvbnN0YW50IiwiZ3Jhdml0eVJhbmdlRmFjdG9yIiwiY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IiLCJkaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlIiwiaW5pdGlhbENvb2xpbmdGYWN0b3IiLCJvbGRUb3RhbERpc3BsYWNlbWVudCIsIm1heEl0ZXJhdGlvbnMiLCJhcmd1bWVudHMiLCJ0b3RhbEl0ZXJhdGlvbnMiLCJub3RBbmltYXRlZEl0ZXJhdGlvbnMiLCJ1c2VGUkdyaWRWYXJpYW50IiwiZ3JpZCIsInBydW5lZE5vZGVzQWxsIiwiZ3Jvd1RyZWVJdGVyYXRpb25zIiwiYWZ0ZXJHcm93dGhJdGVyYXRpb25zIiwiaXNUcmVlR3Jvd2luZyIsImlzR3Jvd3RoRmluaXNoZWQiLCJjYWxjSWRlYWxFZGdlTGVuZ3RocyIsImxjYURlcHRoIiwic2l6ZU9mU291cmNlSW5MY2EiLCJzaXplT2ZUYXJnZXRJbkxjYSIsImlkZWFsTGVuZ3RoIiwiaW5pdFNwcmluZ0VtYmVkZGVyIiwidG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQiLCJyZXB1bHNpb25SYW5nZSIsImNhbGNSZXB1bHNpb25SYW5nZSIsImNhbGNTcHJpbmdGb3JjZXMiLCJsRWRnZXMiLCJjYWxjU3ByaW5nRm9yY2UiLCJjYWxjUmVwdWxzaW9uRm9yY2VzIiwibm9kZUEiLCJub2RlQiIsImxOb2RlcyIsInByb2Nlc3NlZE5vZGVTZXQiLCJ1cGRhdGVHcmlkIiwiY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlIiwiY2FsY1JlcHVsc2lvbkZvcmNlIiwiY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMiLCJjYWxjR3Jhdml0YXRpb25hbEZvcmNlIiwibW92ZU5vZGVzIiwic3ByaW5nRm9yY2UiLCJjbGlwUG9pbnRzIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwiZGlzdGFuY2VTcXVhcmVkIiwiZGlzdGFuY2UiLCJyZXB1bHNpb25Gb3JjZSIsImNoaWxkcmVuQ29uc3RhbnQiLCJvd25lckNlbnRlclgiLCJvd25lckNlbnRlclkiLCJhYnNEaXN0YW5jZVgiLCJhYnNEaXN0YW5jZVkiLCJpc0NvbnZlcmdlZCIsImNvbnZlcmdlZCIsIm9zY2lsYXRpbmciLCJhbmltYXRlIiwiY2FsY0dyaWQiLCJzaXplWCIsInNpemVZIiwiYWRkTm9kZVRvR3JpZCIsInN0YXJ0WCIsImZpbmlzaFgiLCJzdGFydFkiLCJmaW5pc2hZIiwic2V0R3JpZENvb3JkaW5hdGVzIiwic3Vycm91bmRpbmciLCJoYXMiLCJyZWR1Y2VUcmVlcyIsImNvbnRhaW5zTGVhZiIsInBydW5lZE5vZGVzSW5TdGVwVGVtcCIsInBydW5lZE5vZGVzSW5TdGVwIiwiZ3Jvd1RyZWUiLCJsZW5ndGhPZlBydW5lZE5vZGVzSW5TdGVwIiwibm9kZURhdGEiLCJmaW5kUGxhY2Vmb3JQcnVuZWROb2RlIiwiZ3JpZEZvclBydW5lZE5vZGUiLCJub2RlVG9Db25uZWN0IiwicHJ1bmVkTm9kZSIsInN0YXJ0R3JpZFgiLCJmaW5pc2hHcmlkWCIsInN0YXJ0R3JpZFkiLCJmaW5pc2hHcmlkWSIsInVwTm9kZUNvdW50IiwiZG93bk5vZGVDb3VudCIsInJpZ2h0Tm9kZUNvdW50IiwibGVmdE5vZGVDb3VudCIsImNvbnRyb2xSZWdpb25zIiwibWluQ291bnQiLCJtaW5JbmRleCIsInJhbmRvbSIsIl9zdGFydFgiLCJfZmluaXNoWCIsIl9zdGFydFkiLCJfZmluaXNoWSIsIm1hcCIsImtleSIsInNlZWQiLCJzaW4iLCJDb1NFTGF5b3V0IiwiZGVmYXVsdHMiLCJyZWFkeSIsInN0b3AiLCJub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHMiLCJyZWZyZXNoIiwiZml0IiwicGFkZGluZyIsInJhbmRvbWl6ZSIsIm5vZGVSZXB1bHNpb24iLCJlZGdlRWxhc3RpY2l0eSIsIm5lc3RpbmdGYWN0b3IiLCJncmF2aXR5IiwibnVtSXRlciIsInRpbGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInRpbGluZ1BhZGRpbmdWZXJ0aWNhbCIsInRpbGluZ1BhZGRpbmdIb3Jpem9udGFsIiwiZ3Jhdml0eVJhbmdlQ29tcG91bmQiLCJncmF2aXR5Q29tcG91bmQiLCJncmF2aXR5UmFuZ2UiLCJpbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbCIsImV4dGVuZCIsIm9wdGlvbnMiLCJfQ29TRUxheW91dCIsIl9vcHRpb25zIiwiZ2V0VXNlck9wdGlvbnMiLCJydW4iLCJmcmFtZUlkIiwiaWRUb0xOb2RlIiwic3RvcHBlZCIsInRyaWdnZXIiLCJlbGVzIiwicHJvY2Vzc0NoaWxkcmVuTGlzdCIsImdldFRvcE1vc3ROb2RlcyIsImRhdGEiLCJlMSIsImdldFBvc2l0aW9ucyIsImVsZSIsIml0ZXJhdGVBbmltYXRlZCIsImFmdGVyUmVwb3NpdGlvbiIsIm9uZSIsInRpY2tzUGVyRnJhbWUiLCJpc0RvbmUiLCJ0aWNrIiwicG9zaXRpb25zIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJhbmltYXRpb25EYXRhIiwiZ2V0UG9zaXRpb25zRGF0YSIsInBOb2RlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkTGlzdGVuZXIiLCJub3QiLCJsYXlvdXRQb3NpdGlvbnMiLCJub2Rlc01hcCIsInJvb3RzIiwiZmlsdGVyIiwidGhlQ2hpbGQiLCJjaGlsZHJlbl9vZl9jaGlsZHJlbiIsInRoZU5vZGUiLCJkaW1lbnNpb25zIiwibGF5b3V0RGltZW5zaW9ucyIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInBvc2l0aW9uIiwidyIsImgiLCJwYXJzZUZsb2F0IiwiY3NzIiwicGFkZGluZ1RvcCIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdCb3R0b20iLCJpc1BhcmVudCIsImJvdW5kaW5nQm94IiwiaW5jbHVkZUxhYmVscyIsImluY2x1ZGVOb2RlcyIsImlzTmFOIiwiYm91bmRzIiwibm9kZUJvdW5kcyIsInRoZU5ld0dyYXBoIiwiY3l0b3NjYXBlIiwidG9CZVRpbGVkIiwiY3JlYXRlQmVuZHBvaW50cyIsImxldmVsIiwiY2xhc3NpY0xheW91dCIsIm5vZGVzV2l0aEdyYXZpdHkiLCJjYWxjdWxhdGVOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvblRvIiwiY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzIiwiZm9yZXN0IiwicG9zaXRpb25Ob2Rlc1JhZGlhbGx5IiwiaW50ZXJzZWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJ1blNwcmluZ0VtYmVkZGVyIiwiaW5pdGlhbEFuaW1hdGlvblBlcmlvZCIsInBEYXRhIiwibGF5b3V0RW5kZWQiLCJlbWl0IiwibXVsdGlFZGdlIiwiY3VycmVudFN0YXJ0aW5nUG9pbnQiLCJudW1iZXJPZkNvbHVtbnMiLCJjdXJyZW50WSIsImN1cnJlbnRYIiwicG9pbnQiLCJ0cmVlIiwicmFkaWFsTGF5b3V0Iiwic3RhcnRpbmdQb2ludCIsInJhZGlhbFNlcCIsIm1heERpYWdvbmFsSW5UcmVlIiwiYnJhbmNoUmFkaWFsTGF5b3V0IiwiYm90dG9tUmlnaHQiLCJwYXJlbnRPZk5vZGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJyYWRpYWxTZXBhcmF0aW9uIiwiaGFsZkludGVydmFsIiwibm9kZUFuZ2xlIiwidGV0YSIsImNvc190ZXRhIiwiY29zIiwieF8iLCJ5XyIsImNoaWxkQ291bnQiLCJicmFuY2hDb3VudCIsImluY0VkZ2VzQ291bnQiLCJzdGFydEluZGV4Iiwic3RlcEFuZ2xlIiwiY2hpbGRTdGFydEFuZ2xlIiwiY2hpbGRFbmRBbmdsZSIsIm1heERpYWdvbmFsIiwiZGlhZ29uYWwiLCJncm91cFplcm9EZWdyZWVNZW1iZXJzIiwidGVtcE1lbWJlckdyb3VwcyIsIm1lbWJlckdyb3VwcyIsImlkVG9EdW1teU5vZGUiLCJ6ZXJvRGVncmVlIiwiZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbiIsImdldFRvQmVUaWxlZCIsInBfaWQiLCJkdW1teUNvbXBvdW5kSWQiLCJkdW1teUNvbXBvdW5kIiwiZHVtbXlQYXJlbnRHcmFwaCIsInBhcmVudEdyYXBoIiwiY2xlYXJDb21wb3VuZHMiLCJjaGlsZEdyYXBoTWFwIiwiaWRUb05vZGUiLCJwZXJmb3JtREZTT25Db21wb3VuZHMiLCJjb21wb3VuZE9yZGVyIiwidGlsZUNvbXBvdW5kTWVtYmVycyIsImNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMiLCJ0aWxlZFplcm9EZWdyZWVQYWNrIiwiY29tcG91bmROb2RlIiwidGlsZU5vZGVzIiwicmVwb3B1bGF0ZUNvbXBvdW5kcyIsImxDb21wb3VuZE5vZGUiLCJob3Jpem9udGFsTWFyZ2luIiwidmVydGljYWxNYXJnaW4iLCJhZGp1c3RMb2NhdGlvbnMiLCJ0aWxlZE1lbWJlclBhY2siLCJyZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMiLCJ0aWxlZFBhY2siLCJnZXROb2RlRGVncmVlIiwiZmlsbENvbXBleE9yZGVyQnlERlMiLCJvcmdhbml6YXRpb24iLCJjb21wb3VuZEhvcml6b250YWxNYXJnaW4iLCJjb21wb3VuZFZlcnRpY2FsTWFyZ2luIiwicm93cyIsInJvdyIsIm1heEhlaWdodCIsImxub2RlIiwiaG9yaXpvbnRhbFBhZGRpbmciLCJ2ZXJ0aWNhbFBhZGRpbmciLCJtaW5XaWR0aCIsInJvd1dpZHRoIiwicm93SGVpZ2h0Iiwic29ydCIsIm4xIiwibjIiLCJpbnNlcnROb2RlVG9Sb3ciLCJjYW5BZGRIb3Jpem9udGFsIiwiZ2V0U2hvcnRlc3RSb3dJbmRleCIsInNoaWZ0VG9MYXN0Um93Iiwicm93SW5kZXgiLCJtaW5Db21wb3VuZFNpemUiLCJzZWNvbmREaW1lbnNpb24iLCJleHRyYUhlaWdodCIsInIiLCJOdW1iZXIiLCJnZXRMb25nZXN0Um93SW5kZXgiLCJleHRyYVdpZHRoIiwic3JpIiwiaERpZmYiLCJhZGRfdG9fcm93X3JhdGlvIiwiYWRkX25ld19yb3dfcmF0aW8iLCJsb25nZXN0IiwibGFzdCIsImRpZmYiLCJpbnN0YW5jZSIsInByZXZUb3RhbCIsImZpbmFsVG90YWwiLCJsaXN0ZW5lcnMiLCJldmVudCIsImNhbGxiYWNrIiwicmVtb3ZlTGlzdGVuZXIiLCJsIiwibm9kZUZyb20iLCJoZWFkIiwidGFpbCIsInZhbHMiLCJ2YWwiLCJvdGhlck5vZGUiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7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QUFiOztBQUVBQSxZQUFVLFFBQVYsRUFBb0IsY0FBcEIsRUFBb0MvbUIsTUFBcEM7QUFDRCxDQUpEOztBQU1BO0FBQ0EsSUFBSSxPQUFPK21CLFNBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDcENtSSxXQUFVbkksU0FBVjtBQUNEOztBQUVEMXNCLE9BQU9DLE9BQVAsR0FBaUI0MEIsUUFBakIsQyIsImZpbGUiOiJjeXRvc2NhcGUtY29zZS1iaWxrZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY3l0b3NjYXBlQ29zZUJpbGtlbnRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY3l0b3NjYXBlQ29zZUJpbGtlbnRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjExMjk2ODgzYjI3ODczOGRjYjciLCJmdW5jdGlvbiBMYXlvdXRDb25zdGFudHMoKSB7XG59XG5cbi8qKlxuICogTGF5b3V0IFF1YWxpdHlcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkgPSAwO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUVVBTElUWSA9IDE7XG5MYXlvdXRDb25zdGFudHMuRFJBRlRfUVVBTElUWSA9IDI7XG5cbi8qKlxuICogRGVmYXVsdCBwYXJhbWV0ZXJzXG4gKi9cbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQgPSBmYWxzZTtcbi8vTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSB0cnVlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBmYWxzZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQgPSB0cnVlO1xuTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX0RVUklOR19MQVlPVVQgPSBmYWxzZTtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0QgPSA1MDtcbkxheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTID0gZmFsc2U7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBHZW5lcmFsIG90aGVyIGNvbnN0YW50c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qXG4gKiBNYXJnaW5zIG9mIGEgZ3JhcGggdG8gYmUgYXBwbGllZCBvbiBib3VkaW5nIHJlY3RhbmdsZSBvZiBpdHMgY29udGVudHMuIFdlXG4gKiBhc3N1bWUgbWFyZ2lucyBvbiBhbGwgZm91ciBzaWRlcyB0byBiZSB1bmlmb3JtLlxuICovXG5MYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU4gPSAxNTtcblxuLypcbiAqIFdoZXRoZXIgdG8gY29uc2lkZXIgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9ucyBvciBub3RcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IGZhbHNlO1xuXG4vKlxuICogRGVmYXVsdCBkaW1lbnNpb24gb2YgYSBub24tY29tcG91bmQgbm9kZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLlNJTVBMRV9OT0RFX1NJWkUgPSA0MDtcblxuLypcbiAqIERlZmF1bHQgZGltZW5zaW9uIG9mIGEgbm9uLWNvbXBvdW5kIG5vZGUuXG4gKi9cbkxheW91dENvbnN0YW50cy5TSU1QTEVfTk9ERV9IQUxGX1NJWkUgPSBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRSAvIDI7XG5cbi8qXG4gKiBFbXB0eSBjb21wb3VuZCBub2RlIHNpemUuIFdoZW4gYSBjb21wb3VuZCBub2RlIGlzIGVtcHR5LCBpdHMgYm90aFxuICogZGltZW5zaW9ucyBzaG91bGQgYmUgb2YgdGhpcyB2YWx1ZS5cbiAqL1xuTGF5b3V0Q29uc3RhbnRzLkVNUFRZX0NPTVBPVU5EX05PREVfU0laRSA9IDQwO1xuXG4vKlxuICogTWluaW11bSBsZW5ndGggdGhhdCBhbiBlZGdlIHNob3VsZCB0YWtlIGR1cmluZyBsYXlvdXRcbiAqL1xuTGF5b3V0Q29uc3RhbnRzLk1JTl9FREdFX0xFTkdUSCA9IDE7XG5cbi8qXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgbGF5b3V0IG9wZXJhdGVzIG9uXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSA9IDEwMDAwMDA7XG5cbi8qXG4gKiBXb3JsZCBib3VuZGFyaWVzIHRoYXQgcmFuZG9tIHBvc2l0aW9uaW5nIGNhbiBiZSBwZXJmb3JtZWQgd2l0aFxuICovXG5MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSAvIDEwMDA7XG5cbi8qXG4gKiBDb29yZGluYXRlcyBvZiB0aGUgd29ybGQgY2VudGVyXG4gKi9cbkxheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWCA9IDEyMDA7XG5MYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1kgPSA5MDA7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0Q29uc3RhbnRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MYXlvdXRDb25zdGFudHMuanMiLCJ2YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXRDb25zdGFudHMoKSB7XG59XG5cbi8vRkRMYXlvdXRDb25zdGFudHMgaW5oZXJpdHMgc3RhdGljIHByb3BzIGluIExheW91dENvbnN0YW50c1xuZm9yICh2YXIgcHJvcCBpbiBMYXlvdXRDb25zdGFudHMpIHtcbiAgRkRMYXlvdXRDb25zdGFudHNbcHJvcF0gPSBMYXlvdXRDb25zdGFudHNbcHJvcF07XG59XG5cbkZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gMjUwMDtcblxuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IDUwO1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSAwLjQ1O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSA0NTAwLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEggPSAwLjQ7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSAxLjA7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gMy44O1xuRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IDEuNTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX0lERUFMX0VER0VfTEVOR1RIX0NBTENVTEFUSU9OID0gdHJ1ZTtcbkZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVVNFX1NNQVJUX1JFUFVMU0lPTl9SQU5HRV9DQUxDVUxBVElPTiA9IHRydWU7XG5GRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMID0gMC41O1xuRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMID0gMTAwLjA7XG5GRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQgPSBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlRfSU5DUkVNRU5UQUwgKiAzO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAvIDEwLjA7XG5GRExheW91dENvbnN0YW50cy5DT05WRVJHRU5DRV9DSEVDS19QRVJJT0QgPSAxMDA7XG5GRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gMC4xO1xuRkRMYXlvdXRDb25zdGFudHMuTUlOX0VER0VfTEVOR1RIID0gMTtcbkZETGF5b3V0Q29uc3RhbnRzLkdSSURfQ0FMQ1VMQVRJT05fQ0hFQ0tfUEVSSU9EID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gRkRMYXlvdXRDb25zdGFudHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0ZETGF5b3V0Q29uc3RhbnRzLmpzIiwiZnVuY3Rpb24gSW50ZWdlcigpIHtcbn1cblxuSW50ZWdlci5NQVhfVkFMVUUgPSAyMTQ3NDgzNjQ3O1xuSW50ZWdlci5NSU5fVkFMVUUgPSAtMjE0NzQ4MzY0ODtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9JbnRlZ2VyLmpzIiwidmFyIExHcmFwaE9iamVjdCA9IHJlcXVpcmUoJy4vTEdyYXBoT2JqZWN0Jyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcblxuZnVuY3Rpb24gTEVkZ2Uoc291cmNlLCB0YXJnZXQsIHZFZGdlKSB7XG4gIExHcmFwaE9iamVjdC5jYWxsKHRoaXMsIHZFZGdlKTtcblxuICB0aGlzLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldCA9IGZhbHNlO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZFZGdlO1xuICB0aGlzLmJlbmRwb2ludHMgPSBbXTtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5MRWRnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMRWRnZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnNvdXJjZTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRUYXJnZXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50YXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuaXNJbnRlckdyYXBoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaXNJbnRlckdyYXBoO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxlbmd0aDtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5pc092ZXJsYXBpbmdTb3VyY2VBbmRUYXJnZXQ7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0QmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmJlbmRwb2ludHM7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0TGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGNhO1xufTtcblxuTEVkZ2UucHJvdG90eXBlLmdldFNvdXJjZUluTGNhID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuc291cmNlSW5MY2E7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUuZ2V0VGFyZ2V0SW5MY2EgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy50YXJnZXRJbkxjYTtcbn07XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZCA9IGZ1bmN0aW9uIChub2RlKVxue1xuICBpZiAodGhpcy5zb3VyY2UgPT09IG5vZGUpXG4gIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gIH1cbiAgZWxzZSBpZiAodGhpcy50YXJnZXQgPT09IG5vZGUpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhyb3cgXCJOb2RlIGlzIG5vdCBpbmNpZGVudCB3aXRoIHRoaXMgZWRnZVwiO1xuICB9XG59XG5cbkxFZGdlLnByb3RvdHlwZS5nZXRPdGhlckVuZEluR3JhcGggPSBmdW5jdGlvbiAobm9kZSwgZ3JhcGgpXG57XG4gIHZhciBvdGhlckVuZCA9IHRoaXMuZ2V0T3RoZXJFbmQobm9kZSk7XG4gIHZhciByb290ID0gZ3JhcGguZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpO1xuXG4gIHdoaWxlICh0cnVlKVxuICB7XG4gICAgaWYgKG90aGVyRW5kLmdldE93bmVyKCkgPT0gZ3JhcGgpXG4gICAge1xuICAgICAgcmV0dXJuIG90aGVyRW5kO1xuICAgIH1cblxuICAgIGlmIChvdGhlckVuZC5nZXRPd25lcigpID09IHJvb3QpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgb3RoZXJFbmQgPSBvdGhlckVuZC5nZXRPd25lcigpLmdldFBhcmVudCgpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5MRWRnZS5wcm90b3R5cGUudXBkYXRlTGVuZ3RoID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGNsaXBQb2ludENvb3JkaW5hdGVzID0gbmV3IEFycmF5KDQpO1xuXG4gIHRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0ID1cbiAgICAgICAgICBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uKHRoaXMudGFyZ2V0LmdldFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgIGNsaXBQb2ludENvb3JkaW5hdGVzKTtcblxuICBpZiAoIXRoaXMuaXNPdmVybGFwaW5nU291cmNlQW5kVGFyZ2V0KVxuICB7XG4gICAgdGhpcy5sZW5ndGhYID0gY2xpcFBvaW50Q29vcmRpbmF0ZXNbMF0gLSBjbGlwUG9pbnRDb29yZGluYXRlc1syXTtcbiAgICB0aGlzLmxlbmd0aFkgPSBjbGlwUG9pbnRDb29yZGluYXRlc1sxXSAtIGNsaXBQb2ludENvb3JkaW5hdGVzWzNdO1xuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMubGVuZ3RoWCkgPCAxLjApXG4gICAge1xuICAgICAgdGhpcy5sZW5ndGhYID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFgpO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxuICAgIHtcbiAgICAgIHRoaXMubGVuZ3RoWSA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhZKTtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aCA9IE1hdGguc3FydChcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoWCAqIHRoaXMubGVuZ3RoWCArIHRoaXMubGVuZ3RoWSAqIHRoaXMubGVuZ3RoWSk7XG4gIH1cbn07XG5cbkxFZGdlLnByb3RvdHlwZS51cGRhdGVMZW5ndGhTaW1wbGUgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmxlbmd0aFggPSB0aGlzLnRhcmdldC5nZXRDZW50ZXJYKCkgLSB0aGlzLnNvdXJjZS5nZXRDZW50ZXJYKCk7XG4gIHRoaXMubGVuZ3RoWSA9IHRoaXMudGFyZ2V0LmdldENlbnRlclkoKSAtIHRoaXMuc291cmNlLmdldENlbnRlclkoKTtcblxuICBpZiAoTWF0aC5hYnModGhpcy5sZW5ndGhYKSA8IDEuMClcbiAge1xuICAgIHRoaXMubGVuZ3RoWCA9IElNYXRoLnNpZ24odGhpcy5sZW5ndGhYKTtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyh0aGlzLmxlbmd0aFkpIDwgMS4wKVxuICB7XG4gICAgdGhpcy5sZW5ndGhZID0gSU1hdGguc2lnbih0aGlzLmxlbmd0aFkpO1xuICB9XG5cbiAgdGhpcy5sZW5ndGggPSBNYXRoLnNxcnQoXG4gICAgICAgICAgdGhpcy5sZW5ndGhYICogdGhpcy5sZW5ndGhYICsgdGhpcy5sZW5ndGhZICogdGhpcy5sZW5ndGhZKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMRWRnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvTEVkZ2UuanMiLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBMR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9MR3JhcGhNYW5hZ2VyJyk7XG52YXIgTE5vZGUgPSByZXF1aXJlKCcuL0xOb2RlJyk7XG52YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xudmFyIFJlY3RhbmdsZUQgPSByZXF1aXJlKCcuL1JlY3RhbmdsZUQnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBMaW5rZWRMaXN0ID0gcmVxdWlyZSgnLi9MaW5rZWRMaXN0Jyk7XG5cbmZ1bmN0aW9uIExHcmFwaChwYXJlbnQsIG9iajIsIHZHcmFwaCkge1xuICBMR3JhcGhPYmplY3QuY2FsbCh0aGlzLCB2R3JhcGgpO1xuICB0aGlzLmVzdGltYXRlZFNpemUgPSBJbnRlZ2VyLk1JTl9WQUxVRTtcbiAgdGhpcy5tYXJnaW4gPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFQSF9NQVJHSU47XG4gIHRoaXMuZWRnZXMgPSBbXTtcbiAgdGhpcy5ub2RlcyA9IFtdO1xuICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIGlmIChvYmoyICE9IG51bGwgJiYgb2JqMiBpbnN0YW5jZW9mIExHcmFwaE1hbmFnZXIpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajI7XG4gIH1cbiAgZWxzZSBpZiAob2JqMiAhPSBudWxsICYmIG9iajIgaW5zdGFuY2VvZiBMYXlvdXQpIHtcbiAgICB0aGlzLmdyYXBoTWFuYWdlciA9IG9iajIuZ3JhcGhNYW5hZ2VyO1xuICB9XG59XG5cbkxHcmFwaC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE9iamVjdC5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBMR3JhcGhPYmplY3QpIHtcbiAgTEdyYXBoW3Byb3BdID0gTEdyYXBoT2JqZWN0W3Byb3BdO1xufVxuXG5MR3JhcGgucHJvdG90eXBlLmdldE5vZGVzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ub2Rlcztcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0RWRnZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmVkZ2VzO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXI7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxlZnQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFJpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmlnaHQ7XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldFRvcCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnRvcDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuYm90dG9tO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5pc0Nvbm5lY3RlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmlzQ29ubmVjdGVkO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAob2JqMSwgc291cmNlTm9kZSwgdGFyZ2V0Tm9kZSkge1xuICBpZiAoc291cmNlTm9kZSA9PSBudWxsICYmIHRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgIHZhciBuZXdOb2RlID0gb2JqMTtcbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBoYXMgbm8gZ3JhcGggbWdyIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5nZXROb2RlcygpLmluZGV4T2YobmV3Tm9kZSkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJOb2RlIGFscmVhZHkgaW4gZ3JhcGghXCI7XG4gICAgfVxuICAgIG5ld05vZGUub3duZXIgPSB0aGlzO1xuICAgIHRoaXMuZ2V0Tm9kZXMoKS5wdXNoKG5ld05vZGUpO1xuXG4gICAgcmV0dXJuIG5ld05vZGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIG5ld0VkZ2UgPSBvYmoxO1xuICAgIGlmICghKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHNvdXJjZU5vZGUpID4gLTEgJiYgKHRoaXMuZ2V0Tm9kZXMoKS5pbmRleE9mKHRhcmdldE5vZGUpKSA+IC0xKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugb3IgdGFyZ2V0IG5vdCBpbiBncmFwaCFcIjtcbiAgICB9XG5cbiAgICBpZiAoIShzb3VyY2VOb2RlLm93bmVyID09IHRhcmdldE5vZGUub3duZXIgJiYgc291cmNlTm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJCb3RoIG93bmVycyBtdXN0IGJlIHRoaXMgZ3JhcGghXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZU5vZGUub3duZXIgIT0gdGFyZ2V0Tm9kZS5vd25lcilcbiAgICB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICBuZXdFZGdlLnNvdXJjZSA9IHNvdXJjZU5vZGU7XG4gICAgbmV3RWRnZS50YXJnZXQgPSB0YXJnZXROb2RlO1xuXG4gICAgLy8gc2V0IGFzIGludHJhLWdyYXBoIGVkZ2VcbiAgICBuZXdFZGdlLmlzSW50ZXJHcmFwaCA9IGZhbHNlO1xuXG4gICAgLy8gYWRkIHRvIGdyYXBoIGVkZ2UgbGlzdFxuICAgIHRoaXMuZ2V0RWRnZXMoKS5wdXNoKG5ld0VkZ2UpO1xuXG4gICAgLy8gYWRkIHRvIGluY2lkZW5jeSBsaXN0c1xuICAgIHNvdXJjZU5vZGUuZWRnZXMucHVzaChuZXdFZGdlKTtcblxuICAgIGlmICh0YXJnZXROb2RlICE9IHNvdXJjZU5vZGUpXG4gICAge1xuICAgICAgdGFyZ2V0Tm9kZS5lZGdlcy5wdXNoKG5ld0VkZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdFZGdlO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIG5vZGUgPSBvYmo7XG4gIGlmIChvYmogaW5zdGFuY2VvZiBMTm9kZSkge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiTm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShub2RlLm93bmVyICE9IG51bGwgJiYgbm9kZS5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBpcyBpbnZhbGlkIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJPd25lciBncmFwaCBtYW5hZ2VyIGlzIGludmFsaWQhXCI7XG4gICAgfVxuICAgIC8vIHJlbW92ZSBpbmNpZGVudCBlZGdlcyBmaXJzdCAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBlZGdlc1RvQmVSZW1vdmVkID0gbm9kZS5lZGdlcy5zbGljZSgpO1xuICAgIHZhciBlZGdlO1xuICAgIHZhciBzID0gZWRnZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgZWRnZSA9IGVkZ2VzVG9CZVJlbW92ZWRbaV07XG5cbiAgICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5ncmFwaE1hbmFnZXIucmVtb3ZlKGVkZ2UpO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAge1xuICAgICAgICBlZGdlLnNvdXJjZS5vd25lci5yZW1vdmUoZWRnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbm93IHRoZSBub2RlIGl0c2VsZlxuICAgIHZhciBpbmRleCA9IHRoaXMubm9kZXMuaW5kZXhPZihub2RlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm9kZSBub3QgaW4gb3duZXIgbm9kZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIHRoaXMubm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuICAgIGlmICghKGVkZ2Uuc291cmNlLm93bmVyICE9IG51bGwgJiYgZWRnZS50YXJnZXQub3duZXIgIT0gbnVsbCAmJlxuICAgICAgICAgICAgZWRnZS5zb3VyY2Uub3duZXIgPT0gdGhpcyAmJiBlZGdlLnRhcmdldC5vd25lciA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2UgYW5kL29yIHRhcmdldCBvd25lciBpcyBpbnZhbGlkIVwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmRleCA9IGVkZ2Uuc291cmNlLmVkZ2VzLmluZGV4T2YoZWRnZSk7XG4gICAgdmFyIHRhcmdldEluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoIShzb3VyY2VJbmRleCA+IC0xICYmIHRhcmdldEluZGV4ID4gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgZWRnZS5zb3VyY2UuZWRnZXMuc3BsaWNlKHNvdXJjZUluZGV4LCAxKTtcblxuICAgIGlmIChlZGdlLnRhcmdldCAhPSBlZGdlLnNvdXJjZSlcbiAgICB7XG4gICAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuaW5kZXhPZihlZGdlKTtcbiAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgIHRocm93IFwiTm90IGluIG93bmVyJ3MgZWRnZSBsaXN0IVwiO1xuICAgIH1cblxuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEVkZ2VzKCkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVMZWZ0VG9wID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbGVmdCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZVRvcDtcbiAgdmFyIG5vZGVMZWZ0O1xuICB2YXIgbWFyZ2luO1xuXG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Tm9kZXMoKTtcbiAgdmFyIHMgPSBub2Rlcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG5cbiAgICBpZiAodG9wID4gbm9kZVRvcClcbiAgICB7XG4gICAgICB0b3AgPSBub2RlVG9wO1xuICAgIH1cblxuICAgIGlmIChsZWZ0ID4gbm9kZUxlZnQpXG4gICAge1xuICAgICAgbGVmdCA9IG5vZGVMZWZ0O1xuICAgIH1cbiAgfVxuXG4gIC8vIERvIHdlIGhhdmUgYW55IG5vZGVzIGluIHRoaXMgZ3JhcGg/XG4gIGlmICh0b3AgPT0gSW50ZWdlci5NQVhfVkFMVUUpXG4gIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH1cbiAgZWxzZXtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGxlZnQgLSBtYXJnaW47XG4gIHRoaXMudG9wID0gdG9wIC0gbWFyZ2luO1xuXG4gIC8vIEFwcGx5IHRoZSBtYXJnaW5zIGFuZCByZXR1cm4gdGhlIHJlc3VsdFxuICByZXR1cm4gbmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVCb3VuZHMgPSBmdW5jdGlvbiAocmVjdXJzaXZlKVxue1xuICAvLyBjYWxjdWxhdGUgYm91bmRzXG4gIHZhciBsZWZ0ID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciByaWdodCA9IC1JbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHRvcCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgYm90dG9tID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbm9kZUxlZnQ7XG4gIHZhciBub2RlUmlnaHQ7XG4gIHZhciBub2RlVG9wO1xuICB2YXIgbm9kZUJvdHRvbTtcbiAgdmFyIG1hcmdpbjtcblxuICB2YXIgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICB2YXIgcyA9IG5vZGVzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcblxuICAgIGlmIChyZWN1cnNpdmUgJiYgbE5vZGUuY2hpbGQgIT0gbnVsbClcbiAgICB7XG4gICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICB9XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxuICAgIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXG4gICAge1xuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG4gIGlmIChsZWZ0ID09IEludGVnZXIuTUFYX1ZBTFVFKVxuICB7XG4gICAgdGhpcy5sZWZ0ID0gdGhpcy5wYXJlbnQuZ2V0TGVmdCgpO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnBhcmVudC5nZXRSaWdodCgpO1xuICAgIHRoaXMudG9wID0gdGhpcy5wYXJlbnQuZ2V0VG9wKCk7XG4gICAgdGhpcy5ib3R0b20gPSB0aGlzLnBhcmVudC5nZXRCb3R0b20oKTtcbiAgfVxuXG4gIGlmKG5vZGVzWzBdLmdldFBhcmVudCgpLnBhZGRpbmdMZWZ0ICE9IHVuZGVmaW5lZCl7XG4gICAgbWFyZ2luID0gbm9kZXNbMF0uZ2V0UGFyZW50KCkucGFkZGluZ0xlZnQ7XG4gIH1cbiAgZWxzZXtcbiAgICBtYXJnaW4gPSB0aGlzLm1hcmdpbjtcbiAgfVxuXG4gIHRoaXMubGVmdCA9IGJvdW5kaW5nUmVjdC54IC0gbWFyZ2luO1xuICB0aGlzLnJpZ2h0ID0gYm91bmRpbmdSZWN0LnggKyBib3VuZGluZ1JlY3Qud2lkdGggKyBtYXJnaW47XG4gIHRoaXMudG9wID0gYm91bmRpbmdSZWN0LnkgLSBtYXJnaW47XG4gIHRoaXMuYm90dG9tID0gYm91bmRpbmdSZWN0LnkgKyBib3VuZGluZ1JlY3QuaGVpZ2h0ICsgbWFyZ2luO1xufTtcblxuTEdyYXBoLmNhbGN1bGF0ZUJvdW5kcyA9IGZ1bmN0aW9uIChub2RlcylcbntcbiAgdmFyIGxlZnQgPSBJbnRlZ2VyLk1BWF9WQUxVRTtcbiAgdmFyIHJpZ2h0ID0gLUludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgdG9wID0gSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBib3R0b20gPSAtSW50ZWdlci5NQVhfVkFMVUU7XG4gIHZhciBub2RlTGVmdDtcbiAgdmFyIG5vZGVSaWdodDtcbiAgdmFyIG5vZGVUb3A7XG4gIHZhciBub2RlQm90dG9tO1xuXG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgbm9kZUxlZnQgPSBsTm9kZS5nZXRMZWZ0KCk7XG4gICAgbm9kZVJpZ2h0ID0gbE5vZGUuZ2V0UmlnaHQoKTtcbiAgICBub2RlVG9wID0gbE5vZGUuZ2V0VG9wKCk7XG4gICAgbm9kZUJvdHRvbSA9IGxOb2RlLmdldEJvdHRvbSgpO1xuXG4gICAgaWYgKGxlZnQgPiBub2RlTGVmdClcbiAgICB7XG4gICAgICBsZWZ0ID0gbm9kZUxlZnQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0IDwgbm9kZVJpZ2h0KVxuICAgIHtcbiAgICAgIHJpZ2h0ID0gbm9kZVJpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0b3AgPiBub2RlVG9wKVxuICAgIHtcbiAgICAgIHRvcCA9IG5vZGVUb3A7XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbSA8IG5vZGVCb3R0b20pXG4gICAge1xuICAgICAgYm90dG9tID0gbm9kZUJvdHRvbTtcbiAgICB9XG4gIH1cblxuICB2YXIgYm91bmRpbmdSZWN0ID0gbmV3IFJlY3RhbmdsZUQobGVmdCwgdG9wLCByaWdodCAtIGxlZnQsIGJvdHRvbSAtIHRvcCk7XG5cbiAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuZ2V0SW5jbHVzaW9uVHJlZURlcHRoID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKVxuICB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50LmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuICB9XG59O1xuXG5MR3JhcGgucHJvdG90eXBlLmdldEVzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxHcmFwaC5wcm90b3R5cGUuY2FsY0VzdGltYXRlZFNpemUgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgc2l6ZSA9IDA7XG4gIHZhciBub2RlcyA9IHRoaXMubm9kZXM7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICB7XG4gICAgdmFyIGxOb2RlID0gbm9kZXNbaV07XG4gICAgc2l6ZSArPSBsTm9kZS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICB9XG5cbiAgaWYgKHNpemUgPT0gMClcbiAge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IExheW91dENvbnN0YW50cy5FTVBUWV9DT01QT1VORF9OT0RFX1NJWkU7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgdGhpcy5lc3RpbWF0ZWRTaXplID0gc2l6ZSAvIE1hdGguc3FydCh0aGlzLm5vZGVzLmxlbmd0aCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5lc3RpbWF0ZWRTaXplO1xufTtcblxuTEdyYXBoLnByb3RvdHlwZS51cGRhdGVDb25uZWN0ZWQgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICh0aGlzLm5vZGVzLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRvQmVWaXNpdGVkID0gbmV3IExpbmtlZExpc3QoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLm5vZGVzWzBdO1xuICB2YXIgbmVpZ2hib3JFZGdlcztcbiAgdmFyIGN1cnJlbnROZWlnaGJvcjtcbiAgdmFyIGNoaWxkcmVuT2ZOb2RlID0gY3VycmVudE5vZGUud2l0aENoaWxkcmVuKCk7XG4gIGNoaWxkcmVuT2ZOb2RlLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgIHRvQmVWaXNpdGVkLnB1c2gobm9kZSk7XG4gIH0pO1xuXG4gIHdoaWxlICh0b0JlVmlzaXRlZC5sZW5ndGggIT09IDApXG4gIHtcbiAgICBjdXJyZW50Tm9kZSA9IHRvQmVWaXNpdGVkLnNoaWZ0KCk7XG4gICAgdmlzaXRlZC5hZGQoY3VycmVudE5vZGUpO1xuXG4gICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcbiAgICB2YXIgcyA9IG5laWdoYm9yRWRnZXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgczsgaSsrKVxuICAgIHtcbiAgICAgIHZhciBuZWlnaGJvckVkZ2UgPSBuZWlnaGJvckVkZ2VzW2ldO1xuICAgICAgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgICAgbmVpZ2hib3JFZGdlLmdldE90aGVyRW5kSW5HcmFwaChjdXJyZW50Tm9kZSwgdGhpcyk7XG5cbiAgICAgIC8vIEFkZCB1bnZpc2l0ZWQgbmVpZ2hib3JzIHRvIHRoZSBsaXN0IHRvIHZpc2l0XG4gICAgICBpZiAoY3VycmVudE5laWdoYm9yICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgIXZpc2l0ZWQuY29udGFpbnMoY3VycmVudE5laWdoYm9yKSlcbiAgICAgIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuT2ZOZWlnaGJvciA9IGN1cnJlbnROZWlnaGJvci53aXRoQ2hpbGRyZW4oKTtcblxuICAgICAgICBjaGlsZHJlbk9mTmVpZ2hib3IuZm9yRWFjaChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuXG4gIGlmICh2aXNpdGVkLnNpemUoKSA+PSB0aGlzLm5vZGVzLmxlbmd0aClcbiAge1xuICAgIHZhciBub09mVmlzaXRlZEluVGhpc0dyYXBoID0gMDtcblxuICAgIHZhciBzID0gdmlzaXRlZC5zaXplKCk7XG4gICAgIE9iamVjdC5rZXlzKHZpc2l0ZWQuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKHZpc2l0ZWRJZCkge1xuICAgICAgdmFyIHZpc2l0ZWROb2RlID0gdmlzaXRlZC5zZXRbdmlzaXRlZElkXTtcbiAgICAgIGlmICh2aXNpdGVkTm9kZS5vd25lciA9PSBzZWxmKVxuICAgICAge1xuICAgICAgICBub09mVmlzaXRlZEluVGhpc0dyYXBoKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobm9PZlZpc2l0ZWRJblRoaXNHcmFwaCA9PSB0aGlzLm5vZGVzLmxlbmd0aClcbiAgICB7XG4gICAgICB0aGlzLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MR3JhcGguanMiLCJmdW5jdGlvbiBQb2ludEQoeCwgeSkge1xuICBpZiAoeCA9PSBudWxsICYmIHkgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbn1cblxuUG9pbnRELnByb3RvdHlwZS5nZXRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuZ2V0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnNldFggPSBmdW5jdGlvbiAoeClcbntcbiAgdGhpcy54ID0geDtcbn07XG5cblBvaW50RC5wcm90b3R5cGUuc2V0WSA9IGZ1bmN0aW9uICh5KVxue1xuICB0aGlzLnkgPSB5O1xufTtcblxuUG9pbnRELnByb3RvdHlwZS5nZXREaWZmZXJlbmNlID0gZnVuY3Rpb24gKHB0KVxue1xuICByZXR1cm4gbmV3IERpbWVuc2lvbkQodGhpcy54IC0gcHQueCwgdGhpcy55IC0gcHQueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLmdldENvcHkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV3IFBvaW50RCh0aGlzLngsIHRoaXMueSk7XG59O1xuXG5Qb2ludEQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChkaW0pXG57XG4gIHRoaXMueCArPSBkaW0ud2lkdGg7XG4gIHRoaXMueSArPSBkaW0uaGVpZ2h0O1xuICByZXR1cm4gdGhpcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnREO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9Qb2ludEQuanMiLCJ2YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XG5cbmZ1bmN0aW9uIEhhc2hTZXQoKSB7XG4gIHRoaXMuc2V0ID0ge307XG59XG47XG5cbkhhc2hTZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQob2JqKTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSlcbiAgICB0aGlzLnNldFt0aGVJZF0gPSBvYmo7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGRlbGV0ZSB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXTtcbn07XG5cbkhhc2hTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnNldCA9IHt9O1xufTtcblxuSGFzaFNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0aGlzLnNldFtVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChvYmopXSA9PSBvYmo7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5zaXplID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZXQpLmxlbmd0aDtcbn07XG5cbi8vY29uY2F0cyB0aGlzLnNldCB0byB0aGUgZ2l2ZW4gbGlzdFxuSGFzaFNldC5wcm90b3R5cGUuYWRkQWxsVG8gPSBmdW5jdGlvbiAobGlzdCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuc2V0KTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgbGlzdC5wdXNoKHRoaXMuc2V0W2tleXNbaV1dKTtcbiAgfVxufTtcblxuSGFzaFNldC5wcm90b3R5cGUuc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuc2V0KS5sZW5ndGg7XG59O1xuXG5IYXNoU2V0LnByb3RvdHlwZS5hZGRBbGwgPSBmdW5jdGlvbiAobGlzdCkge1xuICB2YXIgcyA9IGxpc3QubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKykge1xuICAgIHZhciB2ID0gbGlzdFtpXTtcbiAgICB0aGlzLmFkZCh2KTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoU2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9IYXNoU2V0LmpzIiwiZnVuY3Rpb24gSUdlb21ldHJ5KCkge1xufVxuXG5JR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBvdmVybGFwQW1vdW50LCBzZXBhcmF0aW9uQnVmZmVyKVxue1xuICBpZiAoIXJlY3RBLmludGVyc2VjdHMocmVjdEIpKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgdmFyIGRpcmVjdGlvbnMgPSBuZXcgQXJyYXkoMik7XG4gIElHZW9tZXRyeS5kZWNpZGVEaXJlY3Rpb25zRm9yT3ZlcmxhcHBpbmdOb2RlcyhyZWN0QSwgcmVjdEIsIGRpcmVjdGlvbnMpO1xuICBvdmVybGFwQW1vdW50WzBdID0gTWF0aC5taW4ocmVjdEEuZ2V0UmlnaHQoKSwgcmVjdEIuZ2V0UmlnaHQoKSkgLVxuICAgICAgICAgIE1hdGgubWF4KHJlY3RBLngsIHJlY3RCLngpO1xuICBvdmVybGFwQW1vdW50WzFdID0gTWF0aC5taW4ocmVjdEEuZ2V0Qm90dG9tKCksIHJlY3RCLmdldEJvdHRvbSgpKSAtXG4gICAgICAgICAgTWF0aC5tYXgocmVjdEEueSwgcmVjdEIueSk7XG4gIC8vIHVwZGF0ZSB0aGUgb3ZlcmxhcHBpbmcgYW1vdW50cyBmb3IgdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgaWYgKChyZWN0QS5nZXRYKCkgPD0gcmVjdEIuZ2V0WCgpKSAmJiAocmVjdEEuZ2V0UmlnaHQoKSA+PSByZWN0Qi5nZXRSaWdodCgpKSlcbiAge1xuICAgIG92ZXJsYXBBbW91bnRbMF0gKz0gTWF0aC5taW4oKHJlY3RCLmdldFgoKSAtIHJlY3RBLmdldFgoKSksXG4gICAgICAgICAgICAocmVjdEEuZ2V0UmlnaHQoKSAtIHJlY3RCLmdldFJpZ2h0KCkpKTtcbiAgfVxuICBlbHNlIGlmICgocmVjdEIuZ2V0WCgpIDw9IHJlY3RBLmdldFgoKSkgJiYgKHJlY3RCLmdldFJpZ2h0KCkgPj0gcmVjdEEuZ2V0UmlnaHQoKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzBdICs9IE1hdGgubWluKChyZWN0QS5nZXRYKCkgLSByZWN0Qi5nZXRYKCkpLFxuICAgICAgICAgICAgKHJlY3RCLmdldFJpZ2h0KCkgLSByZWN0QS5nZXRSaWdodCgpKSk7XG4gIH1cbiAgaWYgKChyZWN0QS5nZXRZKCkgPD0gcmVjdEIuZ2V0WSgpKSAmJiAocmVjdEEuZ2V0Qm90dG9tKCkgPj0gcmVjdEIuZ2V0Qm90dG9tKCkpKVxuICB7XG4gICAgb3ZlcmxhcEFtb3VudFsxXSArPSBNYXRoLm1pbigocmVjdEIuZ2V0WSgpIC0gcmVjdEEuZ2V0WSgpKSxcbiAgICAgICAgICAgIChyZWN0QS5nZXRCb3R0b20oKSAtIHJlY3RCLmdldEJvdHRvbSgpKSk7XG4gIH1cbiAgZWxzZSBpZiAoKHJlY3RCLmdldFkoKSA8PSByZWN0QS5nZXRZKCkpICYmIChyZWN0Qi5nZXRCb3R0b20oKSA+PSByZWN0QS5nZXRCb3R0b20oKSkpXG4gIHtcbiAgICBvdmVybGFwQW1vdW50WzFdICs9IE1hdGgubWluKChyZWN0QS5nZXRZKCkgLSByZWN0Qi5nZXRZKCkpLFxuICAgICAgICAgICAgKHJlY3RCLmdldEJvdHRvbSgpIC0gcmVjdEEuZ2V0Qm90dG9tKCkpKTtcbiAgfVxuXG4gIC8vIGZpbmQgc2xvcGUgb2YgdGhlIGxpbmUgcGFzc2VzIHR3byBjZW50ZXJzXG4gIHZhciBzbG9wZSA9IE1hdGguYWJzKChyZWN0Qi5nZXRDZW50ZXJZKCkgLSByZWN0QS5nZXRDZW50ZXJZKCkpIC9cbiAgICAgICAgICAocmVjdEIuZ2V0Q2VudGVyWCgpIC0gcmVjdEEuZ2V0Q2VudGVyWCgpKSk7XG4gIC8vIGlmIGNlbnRlcnMgYXJlIG92ZXJsYXBwZWRcbiAgaWYgKChyZWN0Qi5nZXRDZW50ZXJZKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWSgpKSAmJlxuICAgICAgICAgIChyZWN0Qi5nZXRDZW50ZXJYKCkgPT0gcmVjdEEuZ2V0Q2VudGVyWCgpKSlcbiAge1xuICAgIC8vIGFzc3VtZSB0aGUgc2xvcGUgaXMgMSAoNDUgZGVncmVlKVxuICAgIHNsb3BlID0gMS4wO1xuICB9XG5cbiAgdmFyIG1vdmVCeVkgPSBzbG9wZSAqIG92ZXJsYXBBbW91bnRbMF07XG4gIHZhciBtb3ZlQnlYID0gb3ZlcmxhcEFtb3VudFsxXSAvIHNsb3BlO1xuICBpZiAob3ZlcmxhcEFtb3VudFswXSA8IG1vdmVCeVgpXG4gIHtcbiAgICBtb3ZlQnlYID0gb3ZlcmxhcEFtb3VudFswXTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBtb3ZlQnlZID0gb3ZlcmxhcEFtb3VudFsxXTtcbiAgfVxuICAvLyByZXR1cm4gaGFsZiB0aGUgYW1vdW50IHNvIHRoYXQgaWYgZWFjaCByZWN0YW5nbGUgaXMgbW92ZWQgYnkgdGhlc2VcbiAgLy8gYW1vdW50cyBpbiBvcHBvc2l0ZSBkaXJlY3Rpb25zLCBvdmVybGFwIHdpbGwgYmUgcmVzb2x2ZWRcbiAgb3ZlcmxhcEFtb3VudFswXSA9IC0xICogZGlyZWN0aW9uc1swXSAqICgobW92ZUJ5WCAvIDIpICsgc2VwYXJhdGlvbkJ1ZmZlcik7XG4gIG92ZXJsYXBBbW91bnRbMV0gPSAtMSAqIGRpcmVjdGlvbnNbMV0gKiAoKG1vdmVCeVkgLyAyKSArIHNlcGFyYXRpb25CdWZmZXIpO1xufVxuXG5JR2VvbWV0cnkuZGVjaWRlRGlyZWN0aW9uc0Zvck92ZXJsYXBwaW5nTm9kZXMgPSBmdW5jdGlvbiAocmVjdEEsIHJlY3RCLCBkaXJlY3Rpb25zKVxue1xuICBpZiAocmVjdEEuZ2V0Q2VudGVyWCgpIDwgcmVjdEIuZ2V0Q2VudGVyWCgpKVxuICB7XG4gICAgZGlyZWN0aW9uc1swXSA9IC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIGRpcmVjdGlvbnNbMF0gPSAxO1xuICB9XG5cbiAgaWYgKHJlY3RBLmdldENlbnRlclkoKSA8IHJlY3RCLmdldENlbnRlclkoKSlcbiAge1xuICAgIGRpcmVjdGlvbnNbMV0gPSAtMTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBkaXJlY3Rpb25zWzFdID0gMTtcbiAgfVxufVxuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uMiA9IGZ1bmN0aW9uIChyZWN0QSwgcmVjdEIsIHJlc3VsdClcbntcbiAgLy9yZXN1bHRbMC0xXSB3aWxsIGNvbnRhaW4gY2xpcFBvaW50IG9mIHJlY3RBLCByZXN1bHRbMi0zXSB3aWxsIGNvbnRhaW4gY2xpcFBvaW50IG9mIHJlY3RCXG4gIHZhciBwMXggPSByZWN0QS5nZXRDZW50ZXJYKCk7XG4gIHZhciBwMXkgPSByZWN0QS5nZXRDZW50ZXJZKCk7XG4gIHZhciBwMnggPSByZWN0Qi5nZXRDZW50ZXJYKCk7XG4gIHZhciBwMnkgPSByZWN0Qi5nZXRDZW50ZXJZKCk7XG5cbiAgLy9pZiB0d28gcmVjdGFuZ2xlcyBpbnRlcnNlY3QsIHRoZW4gY2xpcHBpbmcgcG9pbnRzIGFyZSBjZW50ZXJzXG4gIGlmIChyZWN0QS5pbnRlcnNlY3RzKHJlY3RCKSlcbiAge1xuICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgcmVzdWx0WzJdID0gcDJ4O1xuICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvL3ZhcmlhYmxlcyBmb3IgcmVjdEFcbiAgdmFyIHRvcExlZnRBeCA9IHJlY3RBLmdldFgoKTtcbiAgdmFyIHRvcExlZnRBeSA9IHJlY3RBLmdldFkoKTtcbiAgdmFyIHRvcFJpZ2h0QXggPSByZWN0QS5nZXRSaWdodCgpO1xuICB2YXIgYm90dG9tTGVmdEF4ID0gcmVjdEEuZ2V0WCgpO1xuICB2YXIgYm90dG9tTGVmdEF5ID0gcmVjdEEuZ2V0Qm90dG9tKCk7XG4gIHZhciBib3R0b21SaWdodEF4ID0gcmVjdEEuZ2V0UmlnaHQoKTtcbiAgdmFyIGhhbGZXaWR0aEEgPSByZWN0QS5nZXRXaWR0aEhhbGYoKTtcbiAgdmFyIGhhbGZIZWlnaHRBID0gcmVjdEEuZ2V0SGVpZ2h0SGFsZigpO1xuICAvL3ZhcmlhYmxlcyBmb3IgcmVjdEJcbiAgdmFyIHRvcExlZnRCeCA9IHJlY3RCLmdldFgoKTtcbiAgdmFyIHRvcExlZnRCeSA9IHJlY3RCLmdldFkoKTtcbiAgdmFyIHRvcFJpZ2h0QnggPSByZWN0Qi5nZXRSaWdodCgpO1xuICB2YXIgYm90dG9tTGVmdEJ4ID0gcmVjdEIuZ2V0WCgpO1xuICB2YXIgYm90dG9tTGVmdEJ5ID0gcmVjdEIuZ2V0Qm90dG9tKCk7XG4gIHZhciBib3R0b21SaWdodEJ4ID0gcmVjdEIuZ2V0UmlnaHQoKTtcbiAgdmFyIGhhbGZXaWR0aEIgPSByZWN0Qi5nZXRXaWR0aEhhbGYoKTtcbiAgdmFyIGhhbGZIZWlnaHRCID0gcmVjdEIuZ2V0SGVpZ2h0SGFsZigpO1xuICAvL2ZsYWcgd2hldGhlciBjbGlwcGluZyBwb2ludHMgYXJlIGZvdW5kXG4gIHZhciBjbGlwUG9pbnRBRm91bmQgPSBmYWxzZTtcbiAgdmFyIGNsaXBQb2ludEJGb3VuZCA9IGZhbHNlO1xuXG4gIC8vIGxpbmUgaXMgdmVydGljYWxcbiAgaWYgKHAxeCA9PSBwMngpXG4gIHtcbiAgICBpZiAocDF5ID4gcDJ5KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocDF5IDwgcDJ5KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHAxeDtcbiAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgIHJlc3VsdFsyXSA9IHAyeDtcbiAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIC8vbm90IGxpbmUsIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICAvLyBsaW5lIGlzIGhvcml6b250YWxcbiAgZWxzZSBpZiAocDF5ID09IHAyeSlcbiAge1xuICAgIGlmIChwMXggPiBwMngpXG4gICAge1xuICAgICAgcmVzdWx0WzBdID0gdG9wTGVmdEF4O1xuICAgICAgcmVzdWx0WzFdID0gcDF5O1xuICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgIHJlc3VsdFszXSA9IHAyeTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocDF4IDwgcDJ4KVxuICAgIHtcbiAgICAgIHJlc3VsdFswXSA9IHRvcFJpZ2h0QXg7XG4gICAgICByZXN1bHRbMV0gPSBwMXk7XG4gICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICByZXN1bHRbM10gPSBwMnk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAvL25vdCB2YWxpZCBsaW5lLCByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgLy9zbG9wZXMgb2YgcmVjdEEncyBhbmQgcmVjdEIncyBkaWFnb25hbHNcbiAgICB2YXIgc2xvcGVBID0gcmVjdEEuaGVpZ2h0IC8gcmVjdEEud2lkdGg7XG4gICAgdmFyIHNsb3BlQiA9IHJlY3RCLmhlaWdodCAvIHJlY3RCLndpZHRoO1xuXG4gICAgLy9zbG9wZSBvZiBsaW5lIGJldHdlZW4gY2VudGVyIG9mIHJlY3RBIGFuZCBjZW50ZXIgb2YgcmVjdEJcbiAgICB2YXIgc2xvcGVQcmltZSA9IChwMnkgLSBwMXkpIC8gKHAyeCAtIHAxeCk7XG4gICAgdmFyIGNhcmRpbmFsRGlyZWN0aW9uQTtcbiAgICB2YXIgY2FyZGluYWxEaXJlY3Rpb25CO1xuICAgIHZhciB0ZW1wUG9pbnRBeDtcbiAgICB2YXIgdGVtcFBvaW50QXk7XG4gICAgdmFyIHRlbXBQb2ludEJ4O1xuICAgIHZhciB0ZW1wUG9pbnRCeTtcblxuICAgIC8vZGV0ZXJtaW5lIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnQgaXMgdGhlIGNvcm5lciBvZiBub2RlQVxuICAgIGlmICgoLXNsb3BlQSkgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDF4ID4gcDJ4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSBib3R0b21MZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IGJvdHRvbUxlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gdG9wUmlnaHRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gdG9wTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzbG9wZUEgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDF4ID4gcDJ4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMF0gPSB0b3BMZWZ0QXg7XG4gICAgICAgIHJlc3VsdFsxXSA9IHRvcExlZnRBeTtcbiAgICAgICAgY2xpcFBvaW50QUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzBdID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgcmVzdWx0WzFdID0gYm90dG9tTGVmdEF5O1xuICAgICAgICBjbGlwUG9pbnRBRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vZGV0ZXJtaW5lIHdoZXRoZXIgY2xpcHBpbmcgcG9pbnQgaXMgdGhlIGNvcm5lciBvZiBub2RlQlxuICAgIGlmICgoLXNsb3BlQikgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDJ4ID4gcDF4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSBib3R0b21MZWZ0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gdG9wUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gdG9wTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzbG9wZUIgPT0gc2xvcGVQcmltZSlcbiAgICB7XG4gICAgICBpZiAocDJ4ID4gcDF4KVxuICAgICAge1xuICAgICAgICByZXN1bHRbMl0gPSB0b3BMZWZ0Qng7XG4gICAgICAgIHJlc3VsdFszXSA9IHRvcExlZnRCeTtcbiAgICAgICAgY2xpcFBvaW50QkZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgcmVzdWx0WzJdID0gYm90dG9tUmlnaHRCeDtcbiAgICAgICAgcmVzdWx0WzNdID0gYm90dG9tTGVmdEJ5O1xuICAgICAgICBjbGlwUG9pbnRCRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vaWYgYm90aCBjbGlwcGluZyBwb2ludHMgYXJlIGNvcm5lcnNcbiAgICBpZiAoY2xpcFBvaW50QUZvdW5kICYmIGNsaXBQb2ludEJGb3VuZClcbiAgICB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy9kZXRlcm1pbmUgQ2FyZGluYWwgRGlyZWN0aW9uIG9mIHJlY3RhbmdsZXNcbiAgICBpZiAocDF4ID4gcDJ4KVxuICAgIHtcbiAgICAgIGlmIChwMXkgPiBwMnkpXG4gICAgICB7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQSA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUEsIHNsb3BlUHJpbWUsIDQpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oc2xvcGVCLCBzbG9wZVByaW1lLCAyKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKC1zbG9wZUEsIHNsb3BlUHJpbWUsIDMpO1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkIgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQiwgc2xvcGVQcmltZSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBpZiAocDF5ID4gcDJ5KVxuICAgICAge1xuICAgICAgICBjYXJkaW5hbERpcmVjdGlvbkEgPSBJR2VvbWV0cnkuZ2V0Q2FyZGluYWxEaXJlY3Rpb24oLXNsb3BlQSwgc2xvcGVQcmltZSwgMSk7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbigtc2xvcGVCLCBzbG9wZVByaW1lLCAzKTtcbiAgICAgIH1cbiAgICAgIGVsc2VcbiAgICAgIHtcbiAgICAgICAgY2FyZGluYWxEaXJlY3Rpb25BID0gSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uKHNsb3BlQSwgc2xvcGVQcmltZSwgMik7XG4gICAgICAgIGNhcmRpbmFsRGlyZWN0aW9uQiA9IElHZW9tZXRyeS5nZXRDYXJkaW5hbERpcmVjdGlvbihzbG9wZUIsIHNsb3BlUHJpbWUsIDQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL2NhbGN1bGF0ZSBjbGlwcGluZyBQb2ludCBpZiBpdCBpcyBub3QgZm91bmQgYmVmb3JlXG4gICAgaWYgKCFjbGlwUG9pbnRBRm91bmQpXG4gICAge1xuICAgICAgc3dpdGNoIChjYXJkaW5hbERpcmVjdGlvbkEpXG4gICAgICB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHRvcExlZnRBeTtcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IHAxeCArICgtaGFsZkhlaWdodEEpIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMF0gPSB0ZW1wUG9pbnRBeDtcbiAgICAgICAgICByZXN1bHRbMV0gPSB0ZW1wUG9pbnRBeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHRlbXBQb2ludEF4ID0gYm90dG9tUmlnaHRBeDtcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArIGhhbGZXaWR0aEEgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgdGVtcFBvaW50QXkgPSBib3R0b21MZWZ0QXk7XG4gICAgICAgICAgdGVtcFBvaW50QXggPSBwMXggKyBoYWxmSGVpZ2h0QSAvIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzBdID0gdGVtcFBvaW50QXg7XG4gICAgICAgICAgcmVzdWx0WzFdID0gdGVtcFBvaW50QXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0ZW1wUG9pbnRBeCA9IGJvdHRvbUxlZnRBeDtcbiAgICAgICAgICB0ZW1wUG9pbnRBeSA9IHAxeSArICgtaGFsZldpZHRoQSkgKiBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFswXSA9IHRlbXBQb2ludEF4O1xuICAgICAgICAgIHJlc3VsdFsxXSA9IHRlbXBQb2ludEF5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsaXBQb2ludEJGb3VuZClcbiAgICB7XG4gICAgICBzd2l0Y2ggKGNhcmRpbmFsRGlyZWN0aW9uQilcbiAgICAgIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gdG9wTGVmdEJ5O1xuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gcDJ4ICsgKC1oYWxmSGVpZ2h0QikgLyBzbG9wZVByaW1lO1xuICAgICAgICAgIHJlc3VsdFsyXSA9IHRlbXBQb2ludEJ4O1xuICAgICAgICAgIHJlc3VsdFszXSA9IHRlbXBQb2ludEJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGVtcFBvaW50QnggPSBib3R0b21SaWdodEJ4O1xuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gcDJ5ICsgaGFsZldpZHRoQiAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICB0ZW1wUG9pbnRCeSA9IGJvdHRvbUxlZnRCeTtcbiAgICAgICAgICB0ZW1wUG9pbnRCeCA9IHAyeCArIGhhbGZIZWlnaHRCIC8gc2xvcGVQcmltZTtcbiAgICAgICAgICByZXN1bHRbMl0gPSB0ZW1wUG9pbnRCeDtcbiAgICAgICAgICByZXN1bHRbM10gPSB0ZW1wUG9pbnRCeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHRlbXBQb2ludEJ4ID0gYm90dG9tTGVmdEJ4O1xuICAgICAgICAgIHRlbXBQb2ludEJ5ID0gcDJ5ICsgKC1oYWxmV2lkdGhCKSAqIHNsb3BlUHJpbWU7XG4gICAgICAgICAgcmVzdWx0WzJdID0gdGVtcFBvaW50Qng7XG4gICAgICAgICAgcmVzdWx0WzNdID0gdGVtcFBvaW50Qnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuSUdlb21ldHJ5LmdldENhcmRpbmFsRGlyZWN0aW9uID0gZnVuY3Rpb24gKHNsb3BlLCBzbG9wZVByaW1lLCBsaW5lKVxue1xuICBpZiAoc2xvcGUgPiBzbG9wZVByaW1lKVxuICB7XG4gICAgcmV0dXJuIGxpbmU7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgcmV0dXJuIDEgKyBsaW5lICUgNDtcbiAgfVxufVxuXG5JR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gKHMxLCBzMiwgZjEsIGYyKVxue1xuICBpZiAoZjIgPT0gbnVsbCkge1xuICAgIHJldHVybiBJR2VvbWV0cnkuZ2V0SW50ZXJzZWN0aW9uMihzMSwgczIsIGYxKTtcbiAgfVxuICB2YXIgeDEgPSBzMS54O1xuICB2YXIgeTEgPSBzMS55O1xuICB2YXIgeDIgPSBzMi54O1xuICB2YXIgeTIgPSBzMi55O1xuICB2YXIgeDMgPSBmMS54O1xuICB2YXIgeTMgPSBmMS55O1xuICB2YXIgeDQgPSBmMi54O1xuICB2YXIgeTQgPSBmMi55O1xuICB2YXIgeCwgeTsgLy8gaW50ZXJzZWN0aW9uIHBvaW50XG4gIHZhciBhMSwgYTIsIGIxLCBiMiwgYzEsIGMyOyAvLyBjb2VmZmljaWVudHMgb2YgbGluZSBlcW5zLlxuICB2YXIgZGVub207XG5cbiAgYTEgPSB5MiAtIHkxO1xuICBiMSA9IHgxIC0geDI7XG4gIGMxID0geDIgKiB5MSAtIHgxICogeTI7ICAvLyB7IGExKnggKyBiMSp5ICsgYzEgPSAwIGlzIGxpbmUgMSB9XG5cbiAgYTIgPSB5NCAtIHkzO1xuICBiMiA9IHgzIC0geDQ7XG4gIGMyID0geDQgKiB5MyAtIHgzICogeTQ7ICAvLyB7IGEyKnggKyBiMip5ICsgYzIgPSAwIGlzIGxpbmUgMiB9XG5cbiAgZGVub20gPSBhMSAqIGIyIC0gYTIgKiBiMTtcblxuICBpZiAoZGVub20gPT0gMClcbiAge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgeCA9IChiMSAqIGMyIC0gYjIgKiBjMSkgLyBkZW5vbTtcbiAgeSA9IChhMiAqIGMxIC0gYTEgKiBjMikgLyBkZW5vbTtcblxuICByZXR1cm4gbmV3IFBvaW50KHgsIHkpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gU2VjdGlvbjogQ2xhc3MgQ29uc3RhbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXG4gKiBTb21lIHVzZWZ1bCBwcmUtY2FsY3VsYXRlZCBjb25zdGFudHNcbiAqL1xuSUdlb21ldHJ5LkhBTEZfUEkgPSAwLjUgKiBNYXRoLlBJO1xuSUdlb21ldHJ5Lk9ORV9BTkRfSEFMRl9QSSA9IDEuNSAqIE1hdGguUEk7XG5JR2VvbWV0cnkuVFdPX1BJID0gMi4wICogTWF0aC5QSTtcbklHZW9tZXRyeS5USFJFRV9QSSA9IDMuMCAqIE1hdGguUEk7XG5cbm1vZHVsZS5leHBvcnRzID0gSUdlb21ldHJ5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9JR2VvbWV0cnkuanMiLCJmdW5jdGlvbiBJTWF0aCgpIHtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBzaWduIG9mIHRoZSBpbnB1dCB2YWx1ZS5cbiAqL1xuSU1hdGguc2lnbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiAwKVxuICB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgZWxzZSBpZiAodmFsdWUgPCAwKVxuICB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbklNYXRoLmZsb29yID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDAgPyBNYXRoLmNlaWwodmFsdWUpIDogTWF0aC5mbG9vcih2YWx1ZSk7XG59XG5cbklNYXRoLmNlaWwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMCA/IE1hdGguZmxvb3IodmFsdWUpIDogTWF0aC5jZWlsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJTWF0aDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvSU1hdGguanMiLCJ2YXIgTEdyYXBoO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xuXG5mdW5jdGlvbiBMR3JhcGhNYW5hZ2VyKGxheW91dCkge1xuICBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpOyAvLyBJdCBtYXkgYmUgYmV0dGVyIHRvIGluaXRpbGl6ZSB0aGlzIG91dCBvZiB0aGlzIGZ1bmN0aW9uIGJ1dCBpdCBnaXZlcyBhbiBlcnJvciAoUmlnaHQtaGFuZCBzaWRlIG9mICdpbnN0YW5jZW9mJyBpcyBub3QgY2FsbGFibGUpIG5vdy5cbiAgdGhpcy5sYXlvdXQgPSBsYXlvdXQ7XG5cbiAgdGhpcy5ncmFwaHMgPSBbXTtcbiAgdGhpcy5lZGdlcyA9IFtdO1xufVxuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGRSb290ID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5ncmFwaCA9IHRoaXMubGF5b3V0Lm5ld0dyYXBoKCk7XG4gIHZhciBubm9kZSA9IHRoaXMubGF5b3V0Lm5ld05vZGUobnVsbCk7XG4gIHZhciByb290ID0gdGhpcy5hZGQobmdyYXBoLCBubm9kZSk7XG4gIHRoaXMuc2V0Um9vdEdyYXBoKHJvb3QpO1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmV3R3JhcGgsIHBhcmVudE5vZGUsIG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpXG57XG4gIC8vdGhlcmUgYXJlIGp1c3QgMiBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQgdGhlbiBpdCBhZGRzIGFuIExHcmFwaCBlbHNlIGl0IGFkZHMgYW4gTEVkZ2VcbiAgaWYgKG5ld0VkZ2UgPT0gbnVsbCAmJiBzb3VyY2VOb2RlID09IG51bGwgJiYgdGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgaWYgKG5ld0dyYXBoID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiR3JhcGggaXMgbnVsbCFcIjtcbiAgICB9XG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgXCJQYXJlbnQgbm9kZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAodGhpcy5ncmFwaHMuaW5kZXhPZihuZXdHcmFwaCkgPiAtMSkge1xuICAgICAgdGhyb3cgXCJHcmFwaCBhbHJlYWR5IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cblxuICAgIHRoaXMuZ3JhcGhzLnB1c2gobmV3R3JhcGgpO1xuXG4gICAgaWYgKG5ld0dyYXBoLnBhcmVudCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyBcIkFscmVhZHkgaGFzIGEgcGFyZW50IVwiO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZS5jaGlsZCAhPSBudWxsKSB7XG4gICAgICB0aHJvdyAgXCJBbHJlYWR5IGhhcyBhIGNoaWxkIVwiO1xuICAgIH1cblxuICAgIG5ld0dyYXBoLnBhcmVudCA9IHBhcmVudE5vZGU7XG4gICAgcGFyZW50Tm9kZS5jaGlsZCA9IG5ld0dyYXBoO1xuXG4gICAgcmV0dXJuIG5ld0dyYXBoO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vY2hhbmdlIHRoZSBvcmRlciBvZiB0aGUgcGFyYW1ldGVyc1xuICAgIHRhcmdldE5vZGUgPSBuZXdFZGdlO1xuICAgIHNvdXJjZU5vZGUgPSBwYXJlbnROb2RlO1xuICAgIG5ld0VkZ2UgPSBuZXdHcmFwaDtcbiAgICB2YXIgc291cmNlR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG4gICAgdmFyIHRhcmdldEdyYXBoID0gdGFyZ2V0Tm9kZS5nZXRPd25lcigpO1xuXG4gICAgaWYgKCEoc291cmNlR3JhcGggIT0gbnVsbCAmJiBzb3VyY2VHcmFwaC5nZXRHcmFwaE1hbmFnZXIoKSA9PSB0aGlzKSkge1xuICAgICAgdGhyb3cgXCJTb3VyY2Ugbm90IGluIHRoaXMgZ3JhcGggbWdyIVwiO1xuICAgIH1cbiAgICBpZiAoISh0YXJnZXRHcmFwaCAhPSBudWxsICYmIHRhcmdldEdyYXBoLmdldEdyYXBoTWFuYWdlcigpID09IHRoaXMpKSB7XG4gICAgICB0aHJvdyBcIlRhcmdldCBub3QgaW4gdGhpcyBncmFwaCBtZ3IhXCI7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZUdyYXBoID09IHRhcmdldEdyYXBoKVxuICAgIHtcbiAgICAgIG5ld0VkZ2UuaXNJbnRlckdyYXBoID0gZmFsc2U7XG4gICAgICByZXR1cm4gc291cmNlR3JhcGguYWRkKG5ld0VkZ2UsIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgbmV3RWRnZS5pc0ludGVyR3JhcGggPSB0cnVlO1xuXG4gICAgICAvLyBzZXQgc291cmNlIGFuZCB0YXJnZXRcbiAgICAgIG5ld0VkZ2Uuc291cmNlID0gc291cmNlTm9kZTtcbiAgICAgIG5ld0VkZ2UudGFyZ2V0ID0gdGFyZ2V0Tm9kZTtcblxuICAgICAgLy8gYWRkIGVkZ2UgdG8gaW50ZXItZ3JhcGggZWRnZSBsaXN0XG4gICAgICBpZiAodGhpcy5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID4gLTEpIHtcbiAgICAgICAgdGhyb3cgXCJFZGdlIGFscmVhZHkgaW4gaW50ZXItZ3JhcGggZWRnZSBsaXN0IVwiO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICAgIC8vIGFkZCBlZGdlIHRvIHNvdXJjZSBhbmQgdGFyZ2V0IGluY2lkZW5jeSBsaXN0c1xuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UgIT0gbnVsbCAmJiBuZXdFZGdlLnRhcmdldCAhPSBudWxsKSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2Ugc291cmNlIGFuZC9vciB0YXJnZXQgaXMgbnVsbCFcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKCEobmV3RWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihuZXdFZGdlKSA9PSAtMSAmJiBuZXdFZGdlLnRhcmdldC5lZGdlcy5pbmRleE9mKG5ld0VkZ2UpID09IC0xKSkge1xuICAgICAgICB0aHJvdyBcIkVkZ2UgYWxyZWFkeSBpbiBzb3VyY2UgYW5kL29yIHRhcmdldCBpbmNpZGVuY3kgbGlzdCFcIjtcbiAgICAgIH1cblxuICAgICAgbmV3RWRnZS5zb3VyY2UuZWRnZXMucHVzaChuZXdFZGdlKTtcbiAgICAgIG5ld0VkZ2UudGFyZ2V0LmVkZ2VzLnB1c2gobmV3RWRnZSk7XG5cbiAgICAgIHJldHVybiBuZXdFZGdlO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGxPYmopIHtcbiAgaWYgKGxPYmogaW5zdGFuY2VvZiBMR3JhcGgpIHtcbiAgICB2YXIgZ3JhcGggPSBsT2JqO1xuICAgIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgICB0aHJvdyBcIkdyYXBoIG5vdCBpbiB0aGlzIGdyYXBoIG1nclwiO1xuICAgIH1cbiAgICBpZiAoIShncmFwaCA9PSB0aGlzLnJvb3RHcmFwaCB8fCAoZ3JhcGgucGFyZW50ICE9IG51bGwgJiYgZ3JhcGgucGFyZW50LmdyYXBoTWFuYWdlciA9PSB0aGlzKSkpIHtcbiAgICAgIHRocm93IFwiSW52YWxpZCBwYXJlbnQgbm9kZSFcIjtcbiAgICB9XG5cbiAgICAvLyBmaXJzdCB0aGUgZWRnZXMgKG1ha2UgYSBjb3B5IHRvIGRvIGl0IHNhZmVseSlcbiAgICB2YXIgZWRnZXNUb0JlUmVtb3ZlZCA9IFtdO1xuXG4gICAgZWRnZXNUb0JlUmVtb3ZlZCA9IGVkZ2VzVG9CZVJlbW92ZWQuY29uY2F0KGdyYXBoLmdldEVkZ2VzKCkpO1xuXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIHMgPSBlZGdlc1RvQmVSZW1vdmVkLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBlZGdlID0gZWRnZXNUb0JlUmVtb3ZlZFtpXTtcbiAgICAgIGdyYXBoLnJlbW92ZShlZGdlKTtcbiAgICB9XG5cbiAgICAvLyB0aGVuIHRoZSBub2RlcyAobWFrZSBhIGNvcHkgdG8gZG8gaXQgc2FmZWx5KVxuICAgIHZhciBub2Rlc1RvQmVSZW1vdmVkID0gW107XG5cbiAgICBub2Rlc1RvQmVSZW1vdmVkID0gbm9kZXNUb0JlUmVtb3ZlZC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG5cbiAgICB2YXIgbm9kZTtcbiAgICBzID0gbm9kZXNUb0JlUmVtb3ZlZC5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gICAge1xuICAgICAgbm9kZSA9IG5vZGVzVG9CZVJlbW92ZWRbaV07XG4gICAgICBncmFwaC5yZW1vdmUobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgZ3JhcGggaXMgdGhlIHJvb3RcbiAgICBpZiAoZ3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAge1xuICAgICAgdGhpcy5zZXRSb290R3JhcGgobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gbm93IHJlbW92ZSB0aGUgZ3JhcGggaXRzZWxmXG4gICAgdmFyIGluZGV4ID0gdGhpcy5ncmFwaHMuaW5kZXhPZihncmFwaCk7XG4gICAgdGhpcy5ncmFwaHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGFsc28gcmVzZXQgdGhlIHBhcmVudCBvZiB0aGUgZ3JhcGhcbiAgICBncmFwaC5wYXJlbnQgPSBudWxsO1xuICB9XG4gIGVsc2UgaWYgKGxPYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIGVkZ2UgPSBsT2JqO1xuICAgIGlmIChlZGdlID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiRWRnZSBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoIWVkZ2UuaXNJbnRlckdyYXBoKSB7XG4gICAgICB0aHJvdyBcIk5vdCBhbiBpbnRlci1ncmFwaCBlZGdlIVwiO1xuICAgIH1cbiAgICBpZiAoIShlZGdlLnNvdXJjZSAhPSBudWxsICYmIGVkZ2UudGFyZ2V0ICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGlzIG51bGwhXCI7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBzb3VyY2UgYW5kIHRhcmdldCBub2RlcycgaW5jaWRlbmN5IGxpc3RzXG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5lZGdlcy5pbmRleE9mKGVkZ2UpICE9IC0xICYmIGVkZ2UudGFyZ2V0LmVkZ2VzLmluZGV4T2YoZWRnZSkgIT0gLTEpKSB7XG4gICAgICB0aHJvdyBcIlNvdXJjZSBhbmQvb3IgdGFyZ2V0IGRvZXNuJ3Qga25vdyB0aGlzIGVkZ2UhXCI7XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gZWRnZS5zb3VyY2UuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnNvdXJjZS5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGluZGV4ID0gZWRnZS50YXJnZXQuZWRnZXMuaW5kZXhPZihlZGdlKTtcbiAgICBlZGdlLnRhcmdldC5lZGdlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gcmVtb3ZlIGVkZ2UgZnJvbSBvd25lciBncmFwaCBtYW5hZ2VyJ3MgaW50ZXItZ3JhcGggZWRnZSBsaXN0XG5cbiAgICBpZiAoIShlZGdlLnNvdXJjZS5vd25lciAhPSBudWxsICYmIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpICE9IG51bGwpKSB7XG4gICAgICB0aHJvdyBcIkVkZ2Ugb3duZXIgZ3JhcGggb3Igb3duZXIgZ3JhcGggbWFuYWdlciBpcyBudWxsIVwiO1xuICAgIH1cbiAgICBpZiAoZWRnZS5zb3VyY2Uub3duZXIuZ2V0R3JhcGhNYW5hZ2VyKCkuZWRnZXMuaW5kZXhPZihlZGdlKSA9PSAtMSkge1xuICAgICAgdGhyb3cgXCJOb3QgaW4gb3duZXIgZ3JhcGggbWFuYWdlcidzIGVkZ2UgbGlzdCFcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBlZGdlLnNvdXJjZS5vd25lci5nZXRHcmFwaE1hbmFnZXIoKS5lZGdlcy5pbmRleE9mKGVkZ2UpO1xuICAgIGVkZ2Uuc291cmNlLm93bmVyLmdldEdyYXBoTWFuYWdlcigpLmVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZUJvdW5kcyA9IGZ1bmN0aW9uICgpXG57XG4gIHRoaXMucm9vdEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEdyYXBocyA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdyYXBocztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuYWxsTm9kZXMgPT0gbnVsbClcbiAge1xuICAgIHZhciBub2RlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAgICB7XG4gICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICAgIHRoaXMuYWxsTm9kZXMgPSBub2RlTGlzdDtcbiAgfVxuICByZXR1cm4gdGhpcy5hbGxOb2Rlcztcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbE5vZGVzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsRWRnZXMgPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbEVkZ2VzID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAoKVxue1xuICB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gbnVsbDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldEFsbEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgaWYgKHRoaXMuYWxsRWRnZXMgPT0gbnVsbClcbiAge1xuICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuICAgIHZhciBncmFwaHMgPSB0aGlzLmdldEdyYXBocygpO1xuICAgIHZhciBzID0gZ3JhcGhzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyYXBocy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBlZGdlTGlzdCA9IGVkZ2VMaXN0LmNvbmNhdChncmFwaHNbaV0uZ2V0RWRnZXMoKSk7XG4gICAgfVxuXG4gICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGhpcy5lZGdlcyk7XG5cbiAgICB0aGlzLmFsbEVkZ2VzID0gZWRnZUxpc3Q7XG4gIH1cbiAgcmV0dXJuIHRoaXMuYWxsRWRnZXM7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBmdW5jdGlvbiAobm9kZUxpc3QpXG57XG4gIGlmICh0aGlzLmFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uICE9IG51bGwpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuXG4gIHRoaXMuYWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24gPSBub2RlTGlzdDtcbn07XG5cbkxHcmFwaE1hbmFnZXIucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yb290R3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5zZXRSb290R3JhcGggPSBmdW5jdGlvbiAoZ3JhcGgpXG57XG4gIGlmIChncmFwaC5nZXRHcmFwaE1hbmFnZXIoKSAhPSB0aGlzKSB7XG4gICAgdGhyb3cgXCJSb290IG5vdCBpbiB0aGlzIGdyYXBoIG1nciFcIjtcbiAgfVxuXG4gIHRoaXMucm9vdEdyYXBoID0gZ3JhcGg7XG4gIC8vIHJvb3QgZ3JhcGggbXVzdCBoYXZlIGEgcm9vdCBub2RlIGFzc29jaWF0ZWQgd2l0aCBpdCBmb3IgY29udmVuaWVuY2VcbiAgaWYgKGdyYXBoLnBhcmVudCA9PSBudWxsKVxuICB7XG4gICAgZ3JhcGgucGFyZW50ID0gdGhpcy5sYXlvdXQubmV3Tm9kZShcIlJvb3Qgbm9kZVwiKTtcbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuZ2V0TGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGF5b3V0O1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuaXNPbmVBbmNlc3Rvck9mT3RoZXIgPSBmdW5jdGlvbiAoZmlyc3ROb2RlLCBzZWNvbmROb2RlKVxue1xuICBpZiAoIShmaXJzdE5vZGUgIT0gbnVsbCAmJiBzZWNvbmROb2RlICE9IG51bGwpKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cblxuICBpZiAoZmlyc3ROb2RlID09IHNlY29uZE5vZGUpXG4gIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBJcyBzZWNvbmQgbm9kZSBhbiBhbmNlc3RvciBvZiB0aGUgZmlyc3Qgb25lP1xuICB2YXIgb3duZXJHcmFwaCA9IGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB2YXIgcGFyZW50Tm9kZTtcblxuICBkb1xuICB7XG4gICAgcGFyZW50Tm9kZSA9IG93bmVyR3JhcGguZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJlbnROb2RlID09IHNlY29uZE5vZGUpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG4gIC8vIElzIGZpcnN0IG5vZGUgYW4gYW5jZXN0b3Igb2YgdGhlIHNlY29uZCBvbmU/XG4gIG93bmVyR3JhcGggPSBzZWNvbmROb2RlLmdldE93bmVyKCk7XG5cbiAgZG9cbiAge1xuICAgIHBhcmVudE5vZGUgPSBvd25lckdyYXBoLmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHBhcmVudE5vZGUgPT0gbnVsbClcbiAgICB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocGFyZW50Tm9kZSA9PSBmaXJzdE5vZGUpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb3duZXJHcmFwaCA9IHBhcmVudE5vZGUuZ2V0T3duZXIoKTtcbiAgICBpZiAob3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSB3aGlsZSAodHJ1ZSk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9ycyA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBlZGdlO1xuICB2YXIgc291cmNlTm9kZTtcbiAgdmFyIHRhcmdldE5vZGU7XG4gIHZhciBzb3VyY2VBbmNlc3RvckdyYXBoO1xuICB2YXIgdGFyZ2V0QW5jZXN0b3JHcmFwaDtcblxuICB2YXIgZWRnZXMgPSB0aGlzLmdldEFsbEVkZ2VzKCk7XG4gIHZhciBzID0gZWRnZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBlZGdlc1tpXTtcblxuICAgIHNvdXJjZU5vZGUgPSBlZGdlLnNvdXJjZTtcbiAgICB0YXJnZXROb2RlID0gZWRnZS50YXJnZXQ7XG4gICAgZWRnZS5sY2EgPSBudWxsO1xuICAgIGVkZ2Uuc291cmNlSW5MY2EgPSBzb3VyY2VOb2RlO1xuICAgIGVkZ2UudGFyZ2V0SW5MY2EgPSB0YXJnZXROb2RlO1xuXG4gICAgaWYgKHNvdXJjZU5vZGUgPT0gdGFyZ2V0Tm9kZSlcbiAgICB7XG4gICAgICBlZGdlLmxjYSA9IHNvdXJjZU5vZGUuZ2V0T3duZXIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBzb3VyY2VOb2RlLmdldE93bmVyKCk7XG5cbiAgICB3aGlsZSAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICB7XG4gICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0Tm9kZTsgIFxuICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IHRhcmdldE5vZGUuZ2V0T3duZXIoKTtcblxuICAgICAgd2hpbGUgKGVkZ2UubGNhID09IG51bGwpXG4gICAgICB7XG4gICAgICAgIGlmICh0YXJnZXRBbmNlc3RvckdyYXBoID09IHNvdXJjZUFuY2VzdG9yR3JhcGgpXG4gICAgICAgIHtcbiAgICAgICAgICBlZGdlLmxjYSA9IHRhcmdldEFuY2VzdG9yR3JhcGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0QW5jZXN0b3JHcmFwaCA9PSB0aGlzLnJvb3RHcmFwaClcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVkZ2UubGNhICE9IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBlZGdlLnRhcmdldEluTGNhID0gdGFyZ2V0QW5jZXN0b3JHcmFwaC5nZXRQYXJlbnQoKTtcbiAgICAgICAgdGFyZ2V0QW5jZXN0b3JHcmFwaCA9IGVkZ2UudGFyZ2V0SW5MY2EuZ2V0T3duZXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvdXJjZUFuY2VzdG9yR3JhcGggPT0gdGhpcy5yb290R3JhcGgpXG4gICAgICB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWRnZS5sY2EgPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgZWRnZS5zb3VyY2VJbkxjYSA9IHNvdXJjZUFuY2VzdG9yR3JhcGguZ2V0UGFyZW50KCk7XG4gICAgICAgIHNvdXJjZUFuY2VzdG9yR3JhcGggPSBlZGdlLnNvdXJjZUluTGNhLmdldE93bmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVkZ2UubGNhID09IG51bGwpIHtcbiAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuICAgIH1cbiAgfVxufTtcblxuTEdyYXBoTWFuYWdlci5wcm90b3R5cGUuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yID0gZnVuY3Rpb24gKGZpcnN0Tm9kZSwgc2Vjb25kTm9kZSlcbntcbiAgaWYgKGZpcnN0Tm9kZSA9PSBzZWNvbmROb2RlKVxuICB7XG4gICAgcmV0dXJuIGZpcnN0Tm9kZS5nZXRPd25lcigpO1xuICB9XG4gIHZhciBmaXJzdE93bmVyR3JhcGggPSBmaXJzdE5vZGUuZ2V0T3duZXIoKTtcblxuICBkb1xuICB7XG4gICAgaWYgKGZpcnN0T3duZXJHcmFwaCA9PSBudWxsKVxuICAgIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgc2Vjb25kT3duZXJHcmFwaCA9IHNlY29uZE5vZGUuZ2V0T3duZXIoKTtcblxuICAgIGRvXG4gICAge1xuICAgICAgaWYgKHNlY29uZE93bmVyR3JhcGggPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWNvbmRPd25lckdyYXBoID09IGZpcnN0T3duZXJHcmFwaClcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHNlY29uZE93bmVyR3JhcGg7XG4gICAgICB9XG4gICAgICBzZWNvbmRPd25lckdyYXBoID0gc2Vjb25kT3duZXJHcmFwaC5nZXRQYXJlbnQoKS5nZXRPd25lcigpO1xuICAgIH0gd2hpbGUgKHRydWUpO1xuXG4gICAgZmlyc3RPd25lckdyYXBoID0gZmlyc3RPd25lckdyYXBoLmdldFBhcmVudCgpLmdldE93bmVyKCk7XG4gIH0gd2hpbGUgKHRydWUpO1xuXG4gIHJldHVybiBmaXJzdE93bmVyR3JhcGg7XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5jYWxjSW5jbHVzaW9uVHJlZURlcHRocyA9IGZ1bmN0aW9uIChncmFwaCwgZGVwdGgpIHtcbiAgaWYgKGdyYXBoID09IG51bGwgJiYgZGVwdGggPT0gbnVsbCkge1xuICAgIGdyYXBoID0gdGhpcy5yb290R3JhcGg7XG4gICAgZGVwdGggPSAxO1xuICB9XG4gIHZhciBub2RlO1xuXG4gIHZhciBub2RlcyA9IGdyYXBoLmdldE5vZGVzKCk7XG4gIHZhciBzID0gbm9kZXMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHM7IGkrKylcbiAge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBub2RlLmluY2x1c2lvblRyZWVEZXB0aCA9IGRlcHRoO1xuXG4gICAgaWYgKG5vZGUuY2hpbGQgIT0gbnVsbClcbiAgICB7XG4gICAgICB0aGlzLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKG5vZGUuY2hpbGQsIGRlcHRoICsgMSk7XG4gICAgfVxuICB9XG59O1xuXG5MR3JhcGhNYW5hZ2VyLnByb3RvdHlwZS5pbmNsdWRlc0ludmFsaWRFZGdlID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIGVkZ2U7XG5cbiAgdmFyIHMgPSB0aGlzLmVkZ2VzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzOyBpKyspXG4gIHtcbiAgICBlZGdlID0gdGhpcy5lZGdlc1tpXTtcblxuICAgIGlmICh0aGlzLmlzT25lQW5jZXN0b3JPZk90aGVyKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCkpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvTEdyYXBoTWFuYWdlci5qcyIsImZ1bmN0aW9uIExHcmFwaE9iamVjdCh2R3JhcGhPYmplY3QpIHtcbiAgdGhpcy52R3JhcGhPYmplY3QgPSB2R3JhcGhPYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTEdyYXBoT2JqZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MR3JhcGhPYmplY3QuanMiLCJ2YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgUmFuZG9tU2VlZCA9IHJlcXVpcmUoJy4vUmFuZG9tU2VlZCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xuXG5mdW5jdGlvbiBMTm9kZShnbSwgbG9jLCBzaXplLCB2Tm9kZSkge1xuICAvL0FsdGVybmF0aXZlIGNvbnN0cnVjdG9yIDEgOiBMTm9kZShMR3JhcGhNYW5hZ2VyIGdtLCBQb2ludCBsb2MsIERpbWVuc2lvbiBzaXplLCBPYmplY3Qgdk5vZGUpXG4gIGlmIChzaXplID09IG51bGwgJiYgdk5vZGUgPT0gbnVsbCkge1xuICAgIHZOb2RlID0gbG9jO1xuICB9XG5cbiAgTEdyYXBoT2JqZWN0LmNhbGwodGhpcywgdk5vZGUpO1xuXG4gIC8vQWx0ZXJuYXRpdmUgY29uc3RydWN0b3IgMiA6IExOb2RlKExheW91dCBsYXlvdXQsIE9iamVjdCB2Tm9kZSlcbiAgaWYgKGdtLmdyYXBoTWFuYWdlciAhPSBudWxsKVxuICAgIGdtID0gZ20uZ3JhcGhNYW5hZ2VyO1xuXG4gIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IEludGVnZXIuTUlOX1ZBTFVFO1xuICB0aGlzLmluY2x1c2lvblRyZWVEZXB0aCA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB0aGlzLnZHcmFwaE9iamVjdCA9IHZOb2RlO1xuICB0aGlzLmVkZ2VzID0gW107XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gZ207XG5cbiAgaWYgKHNpemUgIT0gbnVsbCAmJiBsb2MgIT0gbnVsbClcbiAgICB0aGlzLnJlY3QgPSBuZXcgUmVjdGFuZ2xlRChsb2MueCwgbG9jLnksIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcbiAgZWxzZVxuICAgIHRoaXMucmVjdCA9IG5ldyBSZWN0YW5nbGVEKCk7XG59XG5cbkxOb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoT2JqZWN0LnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaE9iamVjdCkge1xuICBMTm9kZVtwcm9wXSA9IExHcmFwaE9iamVjdFtwcm9wXTtcbn1cblxuTE5vZGUucHJvdG90eXBlLmdldEVkZ2VzID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZWRnZXM7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5jaGlsZDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRPd25lciA9IGZ1bmN0aW9uICgpXG57XG4vLyAgaWYgKHRoaXMub3duZXIgIT0gbnVsbCkge1xuLy8gICAgaWYgKCEodGhpcy5vd25lciA9PSBudWxsIHx8IHRoaXMub3duZXIuZ2V0Tm9kZXMoKS5pbmRleE9mKHRoaXMpID4gLTEpKSB7XG4vLyAgICAgIHRocm93IFwiYXNzZXJ0IGZhaWxlZFwiO1xuLy8gICAgfVxuLy8gIH1cblxuICByZXR1cm4gdGhpcy5vd25lcjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRXaWR0aCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3Qud2lkdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0V2lkdGggPSBmdW5jdGlvbiAod2lkdGgpXG57XG4gIHRoaXMucmVjdC53aWR0aCA9IHdpZHRoO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldEhlaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QuaGVpZ2h0O1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpXG57XG4gIHRoaXMucmVjdC5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aCAvIDI7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Q2VudGVyWSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyO1xufTtcblxuTE5vZGUucHJvdG90eXBlLmdldENlbnRlciA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54ICsgdGhpcy5yZWN0LndpZHRoIC8gMixcbiAgICAgICAgICB0aGlzLnJlY3QueSArIHRoaXMucmVjdC5oZWlnaHQgLyAyKTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBuZXcgUG9pbnREKHRoaXMucmVjdC54LCB0aGlzLnJlY3QueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0UmVjdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RGlhZ29uYWwgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMucmVjdC53aWR0aCAqIHRoaXMucmVjdC53aWR0aCArXG4gICAgICAgICAgdGhpcy5yZWN0LmhlaWdodCAqIHRoaXMucmVjdC5oZWlnaHQpO1xufTtcblxuTE5vZGUucHJvdG90eXBlLnNldFJlY3QgPSBmdW5jdGlvbiAodXBwZXJMZWZ0LCBkaW1lbnNpb24pXG57XG4gIHRoaXMucmVjdC54ID0gdXBwZXJMZWZ0Lng7XG4gIHRoaXMucmVjdC55ID0gdXBwZXJMZWZ0Lnk7XG4gIHRoaXMucmVjdC53aWR0aCA9IGRpbWVuc2lvbi53aWR0aDtcbiAgdGhpcy5yZWN0LmhlaWdodCA9IGRpbWVuc2lvbi5oZWlnaHQ7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuc2V0Q2VudGVyID0gZnVuY3Rpb24gKGN4LCBjeSlcbntcbiAgdGhpcy5yZWN0LnggPSBjeCAtIHRoaXMucmVjdC53aWR0aCAvIDI7XG4gIHRoaXMucmVjdC55ID0gY3kgLSB0aGlzLnJlY3QuaGVpZ2h0IC8gMjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICh4LCB5KVxue1xuICB0aGlzLnJlY3QueCA9IHg7XG4gIHRoaXMucmVjdC55ID0geTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5tb3ZlQnkgPSBmdW5jdGlvbiAoZHgsIGR5KVxue1xuICB0aGlzLnJlY3QueCArPSBkeDtcbiAgdGhpcy5yZWN0LnkgKz0gZHk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0RWRnZUxpc3RUb05vZGUgPSBmdW5jdGlvbiAodG8pXG57XG4gIHZhciBlZGdlTGlzdCA9IFtdO1xuICB2YXIgZWRnZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHNlbGYuZWRnZXMuZm9yRWFjaChmdW5jdGlvbihlZGdlKSB7XG4gICAgXG4gICAgaWYgKGVkZ2UudGFyZ2V0ID09IHRvKVxuICAgIHtcbiAgICAgIGlmIChlZGdlLnNvdXJjZSAhPSBzZWxmKVxuICAgICAgICB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSFcIjtcblxuICAgICAgZWRnZUxpc3QucHVzaChlZGdlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBlZGdlTGlzdDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFZGdlc0JldHdlZW4gPSBmdW5jdGlvbiAob3RoZXIpXG57XG4gIHZhciBlZGdlTGlzdCA9IFtdO1xuICB2YXIgZWRnZTtcbiAgXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcblxuICAgIGlmICghKGVkZ2Uuc291cmNlID09IHNlbGYgfHwgZWRnZS50YXJnZXQgPT0gc2VsZikpXG4gICAgICB0aHJvdyBcIkluY29ycmVjdCBlZGdlIHNvdXJjZSBhbmQvb3IgdGFyZ2V0XCI7XG5cbiAgICBpZiAoKGVkZ2UudGFyZ2V0ID09IG90aGVyKSB8fCAoZWRnZS5zb3VyY2UgPT0gb3RoZXIpKVxuICAgIHtcbiAgICAgIGVkZ2VMaXN0LnB1c2goZWRnZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWRnZUxpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TmVpZ2hib3JzTGlzdCA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciBuZWlnaGJvcnMgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgZWRnZTtcbiAgXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5lZGdlcy5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2UpIHtcblxuICAgIGlmIChlZGdlLnNvdXJjZSA9PSBzZWxmKVxuICAgIHtcbiAgICAgIG5laWdoYm9ycy5hZGQoZWRnZS50YXJnZXQpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgaWYgKGVkZ2UudGFyZ2V0ICE9IHNlbGYpIHtcbiAgICAgICAgdGhyb3cgXCJJbmNvcnJlY3QgaW5jaWRlbmN5IVwiO1xuICAgICAgfVxuICAgIFxuICAgICAgbmVpZ2hib3JzLmFkZChlZGdlLnNvdXJjZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmVpZ2hib3JzO1xufTtcblxuTE5vZGUucHJvdG90eXBlLndpdGhDaGlsZHJlbiA9IGZ1bmN0aW9uICgpXG57XG4gIHZhciB3aXRoTmVpZ2hib3JzTGlzdCA9IG5ldyBTZXQoKTtcbiAgdmFyIGNoaWxkTm9kZTtcbiAgdmFyIGNoaWxkcmVuO1xuXG4gIHdpdGhOZWlnaGJvcnNMaXN0LmFkZCh0aGlzKTtcblxuICBpZiAodGhpcy5jaGlsZCAhPSBudWxsKVxuICB7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5jaGlsZC5nZXROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY2hpbGROb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZHJlbiA9IGNoaWxkTm9kZS53aXRoQ2hpbGRyZW4oKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24obm9kZSkge1xuICAgICAgICB3aXRoTmVpZ2hib3JzTGlzdC5hZGQobm9kZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aE5laWdoYm9yc0xpc3Q7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Tm9PZkNoaWxkcmVuID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5vT2ZDaGlsZHJlbiA9IDA7XG4gIHZhciBjaGlsZE5vZGU7XG5cbiAgaWYodGhpcy5jaGlsZCA9PSBudWxsKXtcbiAgICBub09mQ2hpbGRyZW4gPSAxO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHZhciBub2RlcyA9IHRoaXMuY2hpbGQuZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGNoaWxkTm9kZSA9IG5vZGVzW2ldO1xuXG4gICAgICBub09mQ2hpbGRyZW4gKz0gY2hpbGROb2RlLmdldE5vT2ZDaGlsZHJlbigpO1xuICAgIH1cbiAgfVxuICBcbiAgaWYobm9PZkNoaWxkcmVuID09IDApe1xuICAgIG5vT2ZDaGlsZHJlbiA9IDE7XG4gIH1cbiAgcmV0dXJuIG5vT2ZDaGlsZHJlbjtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRFc3RpbWF0ZWRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5lc3RpbWF0ZWRTaXplID09IEludGVnZXIuTUlOX1ZBTFVFKSB7XG4gICAgdGhyb3cgXCJhc3NlcnQgZmFpbGVkXCI7XG4gIH1cbiAgcmV0dXJuIHRoaXMuZXN0aW1hdGVkU2l6ZTtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5jYWxjRXN0aW1hdGVkU2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemUgPSAodGhpcy5yZWN0LndpZHRoICsgdGhpcy5yZWN0LmhlaWdodCkgLyAyO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRoaXMuZXN0aW1hdGVkU2l6ZSA9IHRoaXMuY2hpbGQuY2FsY0VzdGltYXRlZFNpemUoKTtcbiAgICB0aGlzLnJlY3Qud2lkdGggPSB0aGlzLmVzdGltYXRlZFNpemU7XG4gICAgdGhpcy5yZWN0LmhlaWdodCA9IHRoaXMuZXN0aW1hdGVkU2l6ZTtcblxuICAgIHJldHVybiB0aGlzLmVzdGltYXRlZFNpemU7XG4gIH1cbn07XG5cbkxOb2RlLnByb3RvdHlwZS5zY2F0dGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmFuZG9tQ2VudGVyWDtcbiAgdmFyIHJhbmRvbUNlbnRlclk7XG5cbiAgdmFyIG1pblggPSAtTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHZhciBtYXhYID0gTGF5b3V0Q29uc3RhbnRzLklOSVRJQUxfV09STERfQk9VTkRBUlk7XG4gIHJhbmRvbUNlbnRlclggPSBMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggK1xuICAgICAgICAgIChSYW5kb21TZWVkLm5leHREb3VibGUoKSAqIChtYXhYIC0gbWluWCkpICsgbWluWDtcblxuICB2YXIgbWluWSA9IC1MYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgdmFyIG1heFkgPSBMYXlvdXRDb25zdGFudHMuSU5JVElBTF9XT1JMRF9CT1VOREFSWTtcbiAgcmFuZG9tQ2VudGVyWSA9IExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSArXG4gICAgICAgICAgKFJhbmRvbVNlZWQubmV4dERvdWJsZSgpICogKG1heFkgLSBtaW5ZKSkgKyBtaW5ZO1xuXG4gIHRoaXMucmVjdC54ID0gcmFuZG9tQ2VudGVyWDtcbiAgdGhpcy5yZWN0LnkgPSByYW5kb21DZW50ZXJZXG59O1xuXG5MTm9kZS5wcm90b3R5cGUudXBkYXRlQm91bmRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICBpZiAodGhpcy5nZXRDaGlsZCgpLmdldE5vZGVzKCkubGVuZ3RoICE9IDApXG4gIHtcbiAgICAvLyB3cmFwIHRoZSBjaGlsZHJlbiBub2RlcyBieSByZS1hcnJhbmdpbmcgdGhlIGJvdW5kYXJpZXNcbiAgICB2YXIgY2hpbGRHcmFwaCA9IHRoaXMuZ2V0Q2hpbGQoKTtcbiAgICBjaGlsZEdyYXBoLnVwZGF0ZUJvdW5kcyh0cnVlKTtcblxuICAgIHRoaXMucmVjdC54ID0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgdGhpcy5yZWN0LnkgPSBjaGlsZEdyYXBoLmdldFRvcCgpO1xuXG4gICAgdGhpcy5zZXRXaWR0aChjaGlsZEdyYXBoLmdldFJpZ2h0KCkgLSBjaGlsZEdyYXBoLmdldExlZnQoKSk7XG4gICAgdGhpcy5zZXRIZWlnaHQoY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCkpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBjb21wb3VuZCBib3VuZHMgY29uc2lkZXJpbmcgaXRzIGxhYmVsIHByb3BlcnRpZXMgICAgXG4gICAgaWYoTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyl7XG4gICAgICAgIFxuICAgICAgdmFyIHdpZHRoID0gY2hpbGRHcmFwaC5nZXRSaWdodCgpIC0gY2hpbGRHcmFwaC5nZXRMZWZ0KCk7XG4gICAgICB2YXIgaGVpZ2h0ID0gY2hpbGRHcmFwaC5nZXRCb3R0b20oKSAtIGNoaWxkR3JhcGguZ2V0VG9wKCk7XG5cbiAgICAgIGlmKHRoaXMubGFiZWxXaWR0aCA+IHdpZHRoKXtcbiAgICAgICAgdGhpcy5yZWN0LnggLT0gKHRoaXMubGFiZWxXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuc2V0V2lkdGgodGhpcy5sYWJlbFdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5sYWJlbEhlaWdodCA+IGhlaWdodCl7XG4gICAgICAgIGlmKHRoaXMubGFiZWxQb3MgPT0gXCJjZW50ZXJcIil7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMubGFiZWxQb3MgPT0gXCJ0b3BcIil7XG4gICAgICAgICAgdGhpcy5yZWN0LnkgLT0gKHRoaXMubGFiZWxIZWlnaHQgLSBoZWlnaHQpOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEhlaWdodCh0aGlzLmxhYmVsSGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRJbmNsdXNpb25UcmVlRGVwdGggPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5pbmNsdXNpb25UcmVlRGVwdGggPT0gSW50ZWdlci5NQVhfVkFMVUUpIHtcbiAgICB0aHJvdyBcImFzc2VydCBmYWlsZWRcIjtcbiAgfVxuICByZXR1cm4gdGhpcy5pbmNsdXNpb25UcmVlRGVwdGg7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUudHJhbnNmb3JtID0gZnVuY3Rpb24gKHRyYW5zKVxue1xuICB2YXIgbGVmdCA9IHRoaXMucmVjdC54O1xuXG4gIGlmIChsZWZ0ID4gTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZKVxuICB7XG4gICAgbGVmdCA9IExheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWTtcbiAgfVxuICBlbHNlIGlmIChsZWZ0IDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIGxlZnQgPSAtTGF5b3V0Q29uc3RhbnRzLldPUkxEX0JPVU5EQVJZO1xuICB9XG5cbiAgdmFyIHRvcCA9IHRoaXMucmVjdC55O1xuXG4gIGlmICh0b3AgPiBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlkpXG4gIHtcbiAgICB0b3AgPSBMYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cbiAgZWxzZSBpZiAodG9wIDwgLUxheW91dENvbnN0YW50cy5XT1JMRF9CT1VOREFSWSlcbiAge1xuICAgIHRvcCA9IC1MYXlvdXRDb25zdGFudHMuV09STERfQk9VTkRBUlk7XG4gIH1cblxuICB2YXIgbGVmdFRvcCA9IG5ldyBQb2ludEQobGVmdCwgdG9wKTtcbiAgdmFyIHZMZWZ0VG9wID0gdHJhbnMuaW52ZXJzZVRyYW5zZm9ybVBvaW50KGxlZnRUb3ApO1xuXG4gIHRoaXMuc2V0TG9jYXRpb24odkxlZnRUb3AueCwgdkxlZnRUb3AueSk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnJlY3QueCArIHRoaXMucmVjdC53aWR0aDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5yZWN0Lnk7XG59O1xuXG5MTm9kZS5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMucmVjdC55ICsgdGhpcy5yZWN0LmhlaWdodDtcbn07XG5cbkxOb2RlLnByb3RvdHlwZS5nZXRQYXJlbnQgPSBmdW5jdGlvbiAoKVxue1xuICBpZiAodGhpcy5vd25lciA9PSBudWxsKVxuICB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdGhpcy5vd25lci5nZXRQYXJlbnQoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTE5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0xOb2RlLmpzIiwidmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSGFzaE1hcCA9IHJlcXVpcmUoJy4vSGFzaE1hcCcpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMRWRnZSA9IHJlcXVpcmUoJy4vTEVkZ2UnKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIFBvaW50RCA9IHJlcXVpcmUoJy4vUG9pbnREJyk7XG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9UcmFuc2Zvcm0nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnLi9FbWl0dGVyJyk7XG52YXIgSGFzaFNldCA9IHJlcXVpcmUoJy4vSGFzaFNldCcpO1xuXG5mdW5jdGlvbiBMYXlvdXQoaXNSZW1vdGVVc2UpIHtcbiAgRW1pdHRlci5jYWxsKCB0aGlzICk7XG5cbiAgLy9MYXlvdXQgUXVhbGl0eTogMDpwcm9vZiwgMTpkZWZhdWx0LCAyOmRyYWZ0XG4gIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gIC8vV2hldGhlciBsYXlvdXQgc2hvdWxkIGNyZWF0ZSBiZW5kcG9pbnRzIGFzIG5lZWRlZCBvciBub3RcbiAgdGhpcy5jcmVhdGVCZW5kc0FzTmVlZGVkID1cbiAgICAgICAgICBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DUkVBVEVfQkVORFNfQVNfTkVFREVEO1xuICAvL1doZXRoZXIgbGF5b3V0IHNob3VsZCBiZSBpbmNyZW1lbnRhbCBvciBub3RcbiAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xuICAvL1doZXRoZXIgd2UgYW5pbWF0ZSBmcm9tIGJlZm9yZSB0byBhZnRlciBsYXlvdXQgbm9kZSBwb3NpdGlvbnNcbiAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX09OX0xBWU9VVDtcbiAgLy9XaGV0aGVyIHdlIGFuaW1hdGUgdGhlIGxheW91dCBwcm9jZXNzIG9yIG5vdFxuICB0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9EVVJJTkdfTEFZT1VUO1xuICAvL051bWJlciBpdGVyYXRpb25zIHRoYXQgc2hvdWxkIGJlIGRvbmUgYmV0d2VlbiB0d28gc3VjY2Vzc2l2ZSBhbmltYXRpb25zXG4gIHRoaXMuYW5pbWF0aW9uUGVyaW9kID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQU5JTUFUSU9OX1BFUklPRDtcbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IGxlYWYgbm9kZXMgKG5vbi1jb21wb3VuZCBub2RlcykgYXJlIG9mIHVuaWZvcm0gc2l6ZXMuIFdoZW5cbiAgICogdGhleSBhcmUsIGJvdGggc3ByaW5nIGFuZCByZXB1bHNpb24gZm9yY2VzIGJldHdlZW4gdHdvIGxlYWYgbm9kZXMgY2FuIGJlXG4gICAqIGNhbGN1bGF0ZWQgd2l0aG91dCB0aGUgZXhwZW5zaXZlIGNsaXBwaW5nIHBvaW50IGNhbGN1bGF0aW9ucywgcmVzdWx0aW5nXG4gICAqIGluIG1ham9yIHNwZWVkLXVwLlxuICAgKi9cbiAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9XG4gICAgICAgICAgTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfVU5JRk9STV9MRUFGX05PREVfU0laRVM7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHVzZWQgZm9yIGNyZWF0aW9uIG9mIGJlbmRwb2ludHMgYnkgdXNpbmcgZHVtbXkgbm9kZXMgYW5kIGVkZ2VzLlxuICAgKiBNYXBzIGFuIExFZGdlIHRvIGl0cyBkdW1teSBiZW5kcG9pbnQgcGF0aC5cbiAgICovXG4gIHRoaXMuZWRnZVRvRHVtbXlOb2RlcyA9IG5ldyBIYXNoTWFwKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyID0gbmV3IExHcmFwaE1hbmFnZXIodGhpcyk7XG4gIHRoaXMuaXNMYXlvdXRGaW5pc2hlZCA9IGZhbHNlO1xuICB0aGlzLmlzU3ViTGF5b3V0ID0gZmFsc2U7XG4gIHRoaXMuaXNSZW1vdGVVc2UgPSBmYWxzZTtcblxuICBpZiAoaXNSZW1vdGVVc2UgIT0gbnVsbCkge1xuICAgIHRoaXMuaXNSZW1vdGVVc2UgPSBpc1JlbW90ZVVzZTtcbiAgfVxufVxuXG5MYXlvdXQuUkFORE9NX1NFRUQgPSAxO1xuXG5MYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRW1pdHRlci5wcm90b3R5cGUgKTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRHcmFwaE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlcjtcbn07XG5cbkxheW91dC5wcm90b3R5cGUuZ2V0QWxsTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5nZXRBbGxFZGdlcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLmdldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgTEdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdHcmFwaCA9IGZ1bmN0aW9uICh2R3JhcGgpXG57XG4gIHJldHVybiBuZXcgTEdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5uZXdOb2RlID0gZnVuY3Rpb24gKHZOb2RlKVxue1xuICByZXR1cm4gbmV3IExOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLm5ld0VkZ2UgPSBmdW5jdGlvbiAodkVkZ2UpXG57XG4gIHJldHVybiBuZXcgTEVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuTGF5b3V0LnByb3RvdHlwZS5jaGVja0xheW91dFN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICh0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkgPT0gbnVsbClcbiAgICAgICAgICB8fCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKS5sZW5ndGggPT0gMFxuICAgICAgICAgIHx8IHRoaXMuZ3JhcGhNYW5hZ2VyLmluY2x1ZGVzSW52YWxpZEVkZ2UoKTtcbn07XG5cbkxheW91dC5wcm90b3R5cGUucnVuTGF5b3V0ID0gZnVuY3Rpb24gKClcbntcbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gZmFsc2U7XG4gIFxuICBpZiAodGhpcy50aWxpbmdQcmVMYXlvdXQpIHtcbiAgICB0aGlzLnRpbGluZ1ByZUxheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pbml0UGFyYW1ldGVycygpO1xuICB2YXIgaXNMYXlvdXRTdWNjZXNzZnVsbDtcblxuICBpZiAodGhpcy5jaGVja0xheW91dFN1Y2Nlc3MoKSlcbiAge1xuICAgIGlzTGF5b3V0U3VjY2Vzc2Z1bGwgPSBmYWxzZTtcbiAgfVxuICBlbHNlXG4gIHtcbiAgICBpc0xheW91dFN1Y2Nlc3NmdWxsID0gdGhpcy5sYXlvdXQoKTtcbiAgfVxuICBcbiAgaWYgKExheW91dENvbnN0YW50cy5BTklNQVRFID09PSAnZHVyaW5nJykge1xuICAgIC8vIElmIHRoaXMgaXMgYSAnZHVyaW5nJyBsYXlvdXQgYW5pbWF0aW9uLiBMYXlvdXQgaXMgbm90IGZpbmlzaGVkIHlldC4gXG4gICAgLy8gV2UgbmVlZCB0byBwZXJmb3JtIHRoZXNlIGluIGluZGV4LmpzIHdoZW4gbGF5b3V0IGlzIHJlYWxseSBmaW5pc2hlZC5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGlmIChpc0xheW91dFN1Y2Nlc3NmdWxsKVxuICB7XG4gICAgaWYgKCF0aGlzLmlzU3ViTGF5b3V0KVxuICAgIHtcbiAgICAgIHRoaXMuZG9Qb3N0TGF5b3V0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMudGlsaW5nUG9zdExheW91dCkge1xuICAgIHRoaXMudGlsaW5nUG9zdExheW91dCgpO1xuICB9XG5cbiAgdGhpcy5pc0xheW91dEZpbmlzaGVkID0gdHJ1ZTtcblxuICByZXR1cm4gaXNMYXlvdXRTdWNjZXNzZnVsbDtcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcGVyZm9ybXMgdGhlIG9wZXJhdGlvbnMgcmVxdWlyZWQgYWZ0ZXIgbGF5b3V0LlxuICovXG5MYXlvdXQucHJvdG90eXBlLmRvUG9zdExheW91dCA9IGZ1bmN0aW9uICgpXG57XG4gIC8vYXNzZXJ0ICFpc1N1YkxheW91dCA6IFwiU2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gc3ViLWxheW91dCFcIjtcbiAgLy8gUHJvcGFnYXRlIGdlb21ldHJpYyBjaGFuZ2VzIHRvIHYtbGV2ZWwgb2JqZWN0c1xuICBpZighdGhpcy5pbmNyZW1lbnRhbCl7XG4gICAgdGhpcy50cmFuc2Zvcm0oKTtcbiAgfVxuICB0aGlzLnVwZGF0ZSgpO1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB1cGRhdGVzIHRoZSBnZW9tZXRyeSBvZiB0aGUgdGFyZ2V0IGdyYXBoIGFjY29yZGluZyB0b1xuICogY2FsY3VsYXRlZCBsYXlvdXQuXG4gKi9cbkxheW91dC5wcm90b3R5cGUudXBkYXRlMiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gdXBkYXRlIGJlbmQgcG9pbnRzXG4gIGlmICh0aGlzLmNyZWF0ZUJlbmRzQXNOZWVkZWQpXG4gIHtcbiAgICB0aGlzLmNyZWF0ZUJlbmRwb2ludHNGcm9tRHVtbXlOb2RlcygpO1xuXG4gICAgLy8gcmVzZXQgYWxsIGVkZ2VzLCBzaW5jZSB0aGUgdG9wb2xvZ3kgaGFzIGNoYW5nZWRcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbEVkZ2VzKCk7XG4gIH1cblxuICAvLyBwZXJmb3JtIGVkZ2UsIG5vZGUgYW5kIHJvb3QgdXBkYXRlcyBpZiBsYXlvdXQgaXMgbm90IGNhbGxlZFxuICAvLyByZW1vdGVseVxuICBpZiAoIXRoaXMuaXNSZW1vdGVVc2UpXG4gIHtcbiAgICAvLyB1cGRhdGUgYWxsIGVkZ2VzXG4gICAgdmFyIGVkZ2U7XG4gICAgdmFyIGFsbEVkZ2VzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbEVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcbi8vICAgICAgdGhpcy51cGRhdGUoZWRnZSk7XG4gICAgfVxuXG4gICAgLy8gcmVjdXJzaXZlbHkgdXBkYXRlIG5vZGVzXG4gICAgdmFyIG5vZGU7XG4gICAgdmFyIG5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBub2RlID0gbm9kZXNbaV07XG4vLyAgICAgIHRoaXMudXBkYXRlKG5vZGUpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSByb290IGdyYXBoXG4gICAgdGhpcy51cGRhdGUodGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKTtcbiAgfVxufTtcblxuTGF5b3V0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGlmIChvYmogPT0gbnVsbCkge1xuICAgIHRoaXMudXBkYXRlMigpO1xuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExOb2RlKSB7XG4gICAgdmFyIG5vZGUgPSBvYmo7XG4gICAgaWYgKG5vZGUuZ2V0Q2hpbGQoKSAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIHNpbmNlIG5vZGUgaXMgY29tcG91bmQsIHJlY3Vyc2l2ZWx5IHVwZGF0ZSBjaGlsZCBub2Rlc1xuICAgICAgdmFyIG5vZGVzID0gbm9kZS5nZXRDaGlsZCgpLmdldE5vZGVzKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB1cGRhdGUobm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBsLWxldmVsIG5vZGUgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgbm9kZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG4gICAgaWYgKG5vZGUudkdyYXBoT2JqZWN0ICE9IG51bGwpXG4gICAge1xuICAgICAgLy8gY2FzdCB0byBVcGRhdGFibGUgd2l0aG91dCBhbnkgdHlwZSBjaGVja1xuICAgICAgdmFyIHZOb2RlID0gbm9kZS52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdk5vZGUudXBkYXRlKG5vZGUpO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBMRWRnZSkge1xuICAgIHZhciBlZGdlID0gb2JqO1xuICAgIC8vIGlmIHRoZSBsLWxldmVsIGVkZ2UgaXMgYXNzb2NpYXRlZCB3aXRoIGEgdi1sZXZlbCBncmFwaCBvYmplY3QsXG4gICAgLy8gdGhlbiBpdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHYtbGV2ZWwgZWRnZSBpbXBsZW1lbnRzIHRoZVxuICAgIC8vIGludGVyZmFjZSBVcGRhdGFibGUuXG5cbiAgICBpZiAoZWRnZS52R3JhcGhPYmplY3QgIT0gbnVsbClcbiAgICB7XG4gICAgICAvLyBjYXN0IHRvIFVwZGF0YWJsZSB3aXRob3V0IGFueSB0eXBlIGNoZWNrXG4gICAgICB2YXIgdkVkZ2UgPSBlZGdlLnZHcmFwaE9iamVjdDtcblxuICAgICAgLy8gY2FsbCB0aGUgdXBkYXRlIG1ldGhvZCBvZiB0aGUgaW50ZXJmYWNlXG4gICAgICB2RWRnZS51cGRhdGUoZWRnZSk7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIExHcmFwaCkge1xuICAgIHZhciBncmFwaCA9IG9iajtcbiAgICAvLyBpZiB0aGUgbC1sZXZlbCBncmFwaCBpcyBhc3NvY2lhdGVkIHdpdGggYSB2LWxldmVsIGdyYXBoIG9iamVjdCxcbiAgICAvLyB0aGVuIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgdi1sZXZlbCBvYmplY3QgaW1wbGVtZW50cyB0aGVcbiAgICAvLyBpbnRlcmZhY2UgVXBkYXRhYmxlLlxuXG4gICAgaWYgKGdyYXBoLnZHcmFwaE9iamVjdCAhPSBudWxsKVxuICAgIHtcbiAgICAgIC8vIGNhc3QgdG8gVXBkYXRhYmxlIHdpdGhvdXQgYW55IHR5cGUgY2hlY2tcbiAgICAgIHZhciB2R3JhcGggPSBncmFwaC52R3JhcGhPYmplY3Q7XG5cbiAgICAgIC8vIGNhbGwgdGhlIHVwZGF0ZSBtZXRob2Qgb2YgdGhlIGludGVyZmFjZVxuICAgICAgdkdyYXBoLnVwZGF0ZShncmFwaCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHVzZWQgdG8gc2V0IGFsbCBsYXlvdXQgcGFyYW1ldGVycyB0byBkZWZhdWx0IHZhbHVlc1xuICogZGV0ZXJtaW5lZCBhdCBjb21waWxlIHRpbWUuXG4gKi9cbkxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIHRoaXMubGF5b3V0UXVhbGl0eSA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1FVQUxJVFk7XG4gICAgdGhpcy5hbmltYXRpb25EdXJpbmdMYXlvdXQgPSBMYXlvdXRDb25zdGFudHMuREVGQVVMVF9BTklNQVRJT05fRFVSSU5HX0xBWU9VVDtcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9QRVJJT0Q7XG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0FOSU1BVElPTl9PTl9MQVlPVVQ7XG4gICAgdGhpcy5pbmNyZW1lbnRhbCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMO1xuICAgIHRoaXMuY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gICAgdGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX1VOSUZPUk1fTEVBRl9OT0RFX1NJWkVTO1xuICB9XG5cbiAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyaW5nTGF5b3V0KVxuICB7XG4gICAgdGhpcy5hbmltYXRpb25PbkxheW91dCA9IGZhbHNlO1xuICB9XG59O1xuXG5MYXlvdXQucHJvdG90eXBlLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIChuZXdMZWZ0VG9wKSB7XG4gIGlmIChuZXdMZWZ0VG9wID09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMudHJhbnNmb3JtKG5ldyBQb2ludEQoMCwgMCkpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIGNyZWF0ZSBhIHRyYW5zZm9ybWF0aW9uIG9iamVjdCAoZnJvbSBFY2xpcHNlIHRvIGxheW91dCkuIFdoZW4gYW5cbiAgICAvLyBpbnZlcnNlIHRyYW5zZm9ybSBpcyBhcHBsaWVkLCB3ZSBnZXQgdXBwZXItbGVmdCBjb29yZGluYXRlIG9mIHRoZVxuICAgIC8vIGRyYXdpbmcgb3IgdGhlIHJvb3QgZ3JhcGggYXQgZ2l2ZW4gaW5wdXQgY29vcmRpbmF0ZSAoc29tZSBtYXJnaW5zXG4gICAgLy8gYWxyZWFkeSBpbmNsdWRlZCBpbiBjYWxjdWxhdGlvbiBvZiBsZWZ0LXRvcCkuXG5cbiAgICB2YXIgdHJhbnMgPSBuZXcgVHJhbnNmb3JtKCk7XG4gICAgdmFyIGxlZnRUb3AgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkudXBkYXRlTGVmdFRvcCgpO1xuXG4gICAgaWYgKGxlZnRUb3AgIT0gbnVsbClcbiAgICB7XG4gICAgICB0cmFucy5zZXRXb3JsZE9yZ1gobmV3TGVmdFRvcC54KTtcbiAgICAgIHRyYW5zLnNldFdvcmxkT3JnWShuZXdMZWZ0VG9wLnkpO1xuXG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdYKGxlZnRUb3AueCk7XG4gICAgICB0cmFucy5zZXREZXZpY2VPcmdZKGxlZnRUb3AueSk7XG5cbiAgICAgIHZhciBub2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgICAgIHZhciBub2RlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUudHJhbnNmb3JtKHRyYW5zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC5wcm90b3R5cGUucG9zaXRpb25Ob2Rlc1JhbmRvbWx5ID0gZnVuY3Rpb24gKGdyYXBoKSB7XG5cbiAgaWYgKGdyYXBoID09IHVuZGVmaW5lZCkge1xuICAgIC8vYXNzZXJ0ICF0aGlzLmluY3JlbWVudGFsO1xuICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0Um9vdCgpKTtcbiAgICB0aGlzLmdldEdyYXBoTWFuYWdlcigpLmdldFJvb3QoKS51cGRhdGVCb3VuZHModHJ1ZSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdmFyIGxOb2RlO1xuICAgIHZhciBjaGlsZEdyYXBoO1xuXG4gICAgdmFyIG5vZGVzID0gZ3JhcGguZ2V0Tm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIGxOb2RlID0gbm9kZXNbaV07XG4gICAgICBjaGlsZEdyYXBoID0gbE5vZGUuZ2V0Q2hpbGQoKTtcblxuICAgICAgaWYgKGNoaWxkR3JhcGggPT0gbnVsbClcbiAgICAgIHtcbiAgICAgICAgbE5vZGUuc2NhdHRlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2hpbGRHcmFwaC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICAgICAge1xuICAgICAgICBsTm9kZS5zY2F0dGVyKCk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhbmRvbWx5KGNoaWxkR3JhcGgpO1xuICAgICAgICBsTm9kZS51cGRhdGVCb3VuZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIGxpc3Qgb2YgdHJlZXMgd2hlcmUgZWFjaCB0cmVlIGlzIHJlcHJlc2VudGVkIGFzIGFcbiAqIGxpc3Qgb2YgbC1ub2Rlcy4gVGhlIG1ldGhvZCByZXR1cm5zIGEgbGlzdCBvZiBzaXplIDAgd2hlbjpcbiAqIC0gVGhlIGdyYXBoIGlzIG5vdCBmbGF0IG9yXG4gKiAtIE9uZSBvZiB0aGUgY29tcG9uZW50KHMpIG9mIHRoZSBncmFwaCBpcyBub3QgYSB0cmVlLlxuICovXG5MYXlvdXQucHJvdG90eXBlLmdldEZsYXRGb3Jlc3QgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZmxhdEZvcmVzdCA9IFtdO1xuICB2YXIgaXNGb3Jlc3QgPSB0cnVlO1xuXG4gIC8vIFF1aWNrIHJlZmVyZW5jZSBmb3IgYWxsIG5vZGVzIGluIHRoZSBncmFwaCBtYW5hZ2VyIGFzc29jaWF0ZWQgd2l0aFxuICAvLyB0aGlzIGxheW91dC4gVGhlIGxpc3Qgc2hvdWxkIG5vdCBiZSBjaGFuZ2VkLlxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0Tm9kZXMoKTtcblxuICAvLyBGaXJzdCBiZSBzdXJlIHRoYXQgdGhlIGdyYXBoIGlzIGZsYXRcbiAgdmFyIGlzRmxhdCA9IHRydWU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGlmIChhbGxOb2Rlc1tpXS5nZXRDaGlsZCgpICE9IG51bGwpXG4gICAge1xuICAgICAgaXNGbGF0ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIGVtcHR5IGZvcmVzdCBpZiB0aGUgZ3JhcGggaXMgbm90IGZsYXQuXG4gIGlmICghaXNGbGF0KVxuICB7XG4gICAgcmV0dXJuIGZsYXRGb3Jlc3Q7XG4gIH1cblxuICAvLyBSdW4gQkZTIGZvciBlYWNoIGNvbXBvbmVudCBvZiB0aGUgZ3JhcGguXG5cbiAgdmFyIHZpc2l0ZWQgPSBuZXcgSGFzaFNldCgpO1xuICB2YXIgdG9CZVZpc2l0ZWQgPSBbXTtcbiAgdmFyIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xuICB2YXIgdW5Qcm9jZXNzZWROb2RlcyA9IFtdO1xuXG4gIHVuUHJvY2Vzc2VkTm9kZXMgPSB1blByb2Nlc3NlZE5vZGVzLmNvbmNhdChhbGxOb2Rlcyk7XG5cbiAgLy8gRWFjaCBpdGVyYXRpb24gb2YgdGhpcyBsb29wIGZpbmRzIGEgY29tcG9uZW50IG9mIHRoZSBncmFwaCBhbmRcbiAgLy8gZGVjaWRlcyB3aGV0aGVyIGl0IGlzIGEgdHJlZSBvciBub3QuIElmIGl0IGlzIGEgdHJlZSwgYWRkcyBpdCB0byB0aGVcbiAgLy8gZm9yZXN0IGFuZCBjb250aW51ZWQgd2l0aCB0aGUgbmV4dCBjb21wb25lbnQuXG5cbiAgd2hpbGUgKHVuUHJvY2Vzc2VkTm9kZXMubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcbiAge1xuICAgIHRvQmVWaXNpdGVkLnB1c2godW5Qcm9jZXNzZWROb2Rlc1swXSk7XG5cbiAgICAvLyBTdGFydCB0aGUgQkZTLiBFYWNoIGl0ZXJhdGlvbiBvZiB0aGlzIGxvb3AgdmlzaXRzIGEgbm9kZSBpbiBhXG4gICAgLy8gQkZTIG1hbm5lci5cbiAgICB3aGlsZSAodG9CZVZpc2l0ZWQubGVuZ3RoID4gMCAmJiBpc0ZvcmVzdClcbiAgICB7XG4gICAgICAvL3Bvb2wgb3BlcmF0aW9uXG4gICAgICB2YXIgY3VycmVudE5vZGUgPSB0b0JlVmlzaXRlZFswXTtcbiAgICAgIHRvQmVWaXNpdGVkLnNwbGljZSgwLCAxKTtcbiAgICAgIHZpc2l0ZWQuYWRkKGN1cnJlbnROb2RlKTtcblxuICAgICAgLy8gVHJhdmVyc2UgYWxsIG5laWdoYm9ycyBvZiB0aGlzIG5vZGVcbiAgICAgIHZhciBuZWlnaGJvckVkZ2VzID0gY3VycmVudE5vZGUuZ2V0RWRnZXMoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvckVkZ2VzLmxlbmd0aDsgaSsrKVxuICAgICAge1xuICAgICAgICB2YXIgY3VycmVudE5laWdoYm9yID1cbiAgICAgICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKGN1cnJlbnROb2RlKTtcblxuICAgICAgICAvLyBJZiBCRlMgaXMgbm90IGdyb3dpbmcgZnJvbSB0aGlzIG5laWdoYm9yLlxuICAgICAgICBpZiAocGFyZW50cy5nZXQoY3VycmVudE5vZGUpICE9IGN1cnJlbnROZWlnaGJvcilcbiAgICAgICAge1xuICAgICAgICAgIC8vIFdlIGhhdmVuJ3QgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IuXG4gICAgICAgICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGN1cnJlbnROZWlnaGJvcikpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdG9CZVZpc2l0ZWQucHVzaChjdXJyZW50TmVpZ2hib3IpO1xuICAgICAgICAgICAgcGFyZW50cy5wdXQoY3VycmVudE5laWdoYm9yLCBjdXJyZW50Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFNpbmNlIHdlIGhhdmUgcHJldmlvdXNseSB2aXNpdGVkIHRoaXMgbmVpZ2hib3IgYW5kXG4gICAgICAgICAgLy8gdGhpcyBuZWlnaGJvciBpcyBub3QgcGFyZW50IG9mIGN1cnJlbnROb2RlLCBnaXZlblxuICAgICAgICAgIC8vIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHRyZWUsIGhlbmNlXG4gICAgICAgICAgLy8gaXQgaXMgbm90IGEgZm9yZXN0LlxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0ZvcmVzdCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlIGdyYXBoIGNvbnRhaW5zIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgdHJlZS4gRW1wdHlcbiAgICAvLyBwcmV2aW91c2x5IGZvdW5kIHRyZWVzLiBUaGUgbWV0aG9kIHdpbGwgZW5kLlxuICAgIGlmICghaXNGb3Jlc3QpXG4gICAge1xuICAgICAgZmxhdEZvcmVzdCA9IFtdO1xuICAgIH1cbiAgICAvLyBTYXZlIGN1cnJlbnRseSB2aXNpdGVkIG5vZGVzIGFzIGEgdHJlZSBpbiBvdXIgZm9yZXN0LiBSZXNldFxuICAgIC8vIHZpc2l0ZWQgYW5kIHBhcmVudHMgbGlzdHMuIENvbnRpbnVlIHdpdGggdGhlIG5leHQgY29tcG9uZW50IG9mXG4gICAgLy8gdGhlIGdyYXBoLCBpZiBhbnkuXG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciB0ZW1wID0gW107XG4gICAgICB2aXNpdGVkLmFkZEFsbFRvKHRlbXApO1xuICAgICAgZmxhdEZvcmVzdC5wdXNoKHRlbXApO1xuICAgICAgLy9mbGF0Rm9yZXN0ID0gZmxhdEZvcmVzdC5jb25jYXQodGVtcCk7XG4gICAgICAvL3VuUHJvY2Vzc2VkTm9kZXMucmVtb3ZlQWxsKHZpc2l0ZWQpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRlbXBbaV07XG4gICAgICAgIHZhciBpbmRleCA9IHVuUHJvY2Vzc2VkTm9kZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgdW5Qcm9jZXNzZWROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2aXNpdGVkID0gbmV3IEhhc2hTZXQoKTtcbiAgICAgIHBhcmVudHMgPSBuZXcgSGFzaE1hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmbGF0Rm9yZXN0O1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGR1bW15IG5vZGVzIChhbiBsLWxldmVsIG5vZGUgd2l0aCBtaW5pbWFsIGRpbWVuc2lvbnMpXG4gKiBmb3IgdGhlIGdpdmVuIGVkZ2UgKG9uZSBwZXIgYmVuZHBvaW50KS4gVGhlIGV4aXN0aW5nIGwtbGV2ZWwgc3RydWN0dXJlXG4gKiBpcyB1cGRhdGVkIGFjY29yZGluZ2x5LlxuICovXG5MYXlvdXQucHJvdG90eXBlLmNyZWF0ZUR1bW15Tm9kZXNGb3JCZW5kcG9pbnRzID0gZnVuY3Rpb24gKGVkZ2UpXG57XG4gIHZhciBkdW1teU5vZGVzID0gW107XG4gIHZhciBwcmV2ID0gZWRnZS5zb3VyY2U7XG5cbiAgdmFyIGdyYXBoID0gdGhpcy5ncmFwaE1hbmFnZXIuY2FsY0xvd2VzdENvbW1vbkFuY2VzdG9yKGVkZ2Uuc291cmNlLCBlZGdlLnRhcmdldCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlLmJlbmRwb2ludHMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICAvLyBjcmVhdGUgbmV3IGR1bW15IG5vZGVcbiAgICB2YXIgZHVtbXlOb2RlID0gdGhpcy5uZXdOb2RlKG51bGwpO1xuICAgIGR1bW15Tm9kZS5zZXRSZWN0KG5ldyBQb2ludCgwLCAwKSwgbmV3IERpbWVuc2lvbigxLCAxKSk7XG5cbiAgICBncmFwaC5hZGQoZHVtbXlOb2RlKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgZHVtbXkgZWRnZSBiZXR3ZWVuIHByZXYgYW5kIGR1bW15IG5vZGVcbiAgICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLmFkZChkdW1teUVkZ2UsIHByZXYsIGR1bW15Tm9kZSk7XG5cbiAgICBkdW1teU5vZGVzLmFkZChkdW1teU5vZGUpO1xuICAgIHByZXYgPSBkdW1teU5vZGU7XG4gIH1cblxuICB2YXIgZHVtbXlFZGdlID0gdGhpcy5uZXdFZGdlKG51bGwpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5hZGQoZHVtbXlFZGdlLCBwcmV2LCBlZGdlLnRhcmdldCk7XG5cbiAgdGhpcy5lZGdlVG9EdW1teU5vZGVzLnB1dChlZGdlLCBkdW1teU5vZGVzKTtcblxuICAvLyByZW1vdmUgcmVhbCBlZGdlIGZyb20gZ3JhcGggbWFuYWdlciBpZiBpdCBpcyBpbnRlci1ncmFwaFxuICBpZiAoZWRnZS5pc0ludGVyR3JhcGgoKSlcbiAge1xuICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlbW92ZShlZGdlKTtcbiAgfVxuICAvLyBlbHNlLCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBncmFwaFxuICBlbHNlXG4gIHtcbiAgICBncmFwaC5yZW1vdmUoZWRnZSk7XG4gIH1cblxuICByZXR1cm4gZHVtbXlOb2Rlcztcbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBiZW5kcG9pbnRzIGZvciBlZGdlcyBmcm9tIHRoZSBkdW1teSBub2Rlc1xuICogYXQgbC1sZXZlbC5cbiAqL1xuTGF5b3V0LnByb3RvdHlwZS5jcmVhdGVCZW5kcG9pbnRzRnJvbUR1bW15Tm9kZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgZWRnZXMgPSBbXTtcbiAgZWRnZXMgPSBlZGdlcy5jb25jYXQodGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsRWRnZXMoKSk7XG4gIGVkZ2VzID0gdGhpcy5lZGdlVG9EdW1teU5vZGVzLmtleVNldCgpLmNvbmNhdChlZGdlcyk7XG5cbiAgZm9yICh2YXIgayA9IDA7IGsgPCBlZGdlcy5sZW5ndGg7IGsrKylcbiAge1xuICAgIHZhciBsRWRnZSA9IGVkZ2VzW2tdO1xuXG4gICAgaWYgKGxFZGdlLmJlbmRwb2ludHMubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuZWRnZVRvRHVtbXlOb2Rlcy5nZXQobEVkZ2UpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspXG4gICAgICB7XG4gICAgICAgIHZhciBkdW1teU5vZGUgPSBwYXRoW2ldO1xuICAgICAgICB2YXIgcCA9IG5ldyBQb2ludEQoZHVtbXlOb2RlLmdldENlbnRlclgoKSxcbiAgICAgICAgICAgICAgICBkdW1teU5vZGUuZ2V0Q2VudGVyWSgpKTtcblxuICAgICAgICAvLyB1cGRhdGUgYmVuZHBvaW50J3MgbG9jYXRpb24gYWNjb3JkaW5nIHRvIGR1bW15IG5vZGVcbiAgICAgICAgdmFyIGVicCA9IGxFZGdlLmJlbmRwb2ludHMuZ2V0KGkpO1xuICAgICAgICBlYnAueCA9IHAueDtcbiAgICAgICAgZWJwLnkgPSBwLnk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBkdW1teSBub2RlLCBkdW1teSBlZGdlcyBpbmNpZGVudCB3aXRoIHRoaXNcbiAgICAgICAgLy8gZHVtbXkgbm9kZSBpcyBhbHNvIHJlbW92ZWQgKHdpdGhpbiB0aGUgcmVtb3ZlIG1ldGhvZClcbiAgICAgICAgZHVtbXlOb2RlLmdldE93bmVyKCkucmVtb3ZlKGR1bW15Tm9kZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCB0aGUgcmVhbCBlZGdlIHRvIGdyYXBoXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5hZGQobEVkZ2UsIGxFZGdlLnNvdXJjZSwgbEVkZ2UudGFyZ2V0KTtcbiAgICB9XG4gIH1cbn07XG5cbkxheW91dC50cmFuc2Zvcm0gPSBmdW5jdGlvbiAoc2xpZGVyVmFsdWUsIGRlZmF1bHRWYWx1ZSwgbWluRGl2LCBtYXhNdWwpIHtcbiAgaWYgKG1pbkRpdiAhPSB1bmRlZmluZWQgJiYgbWF4TXVsICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcbiAgICB7XG4gICAgICB2YXIgbWluVmFsdWUgPSBkZWZhdWx0VmFsdWUgLyBtaW5EaXY7XG4gICAgICB2YWx1ZSAtPSAoKGRlZmF1bHRWYWx1ZSAtIG1pblZhbHVlKSAvIDUwKSAqICg1MCAtIHNsaWRlclZhbHVlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIHZhciBtYXhWYWx1ZSA9IGRlZmF1bHRWYWx1ZSAqIG1heE11bDtcbiAgICAgIHZhbHVlICs9ICgobWF4VmFsdWUgLSBkZWZhdWx0VmFsdWUpIC8gNTApICogKHNsaWRlclZhbHVlIC0gNTApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBlbHNlIHtcbiAgICB2YXIgYSwgYjtcblxuICAgIGlmIChzbGlkZXJWYWx1ZSA8PSA1MClcbiAgICB7XG4gICAgICBhID0gOS4wICogZGVmYXVsdFZhbHVlIC8gNTAwLjA7XG4gICAgICBiID0gZGVmYXVsdFZhbHVlIC8gMTAuMDtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGEgPSA5LjAgKiBkZWZhdWx0VmFsdWUgLyA1MC4wO1xuICAgICAgYiA9IC04ICogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiAoYSAqIHNsaWRlclZhbHVlICsgYik7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtZXRob2QgZmluZHMgYW5kIHJldHVybnMgdGhlIGNlbnRlciBvZiB0aGUgZ2l2ZW4gbm9kZXMsIGFzc3VtaW5nXG4gKiB0aGF0IHRoZSBnaXZlbiBub2RlcyBmb3JtIGEgdHJlZSBpbiB0aGVtc2VsdmVzLlxuICovXG5MYXlvdXQuZmluZENlbnRlck9mVHJlZSA9IGZ1bmN0aW9uIChub2RlcylcbntcbiAgdmFyIGxpc3QgPSBbXTtcbiAgbGlzdCA9IGxpc3QuY29uY2F0KG5vZGVzKTtcblxuICB2YXIgcmVtb3ZlZE5vZGVzID0gW107XG4gIHZhciByZW1haW5pbmdEZWdyZWVzID0gbmV3IEhhc2hNYXAoKTtcbiAgdmFyIGZvdW5kQ2VudGVyID0gZmFsc2U7XG4gIHZhciBjZW50ZXJOb2RlID0gbnVsbDtcblxuICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxuICB7XG4gICAgZm91bmRDZW50ZXIgPSB0cnVlO1xuICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuICAgIHZhciBkZWdyZWUgPSBub2RlLmdldE5laWdoYm9yc0xpc3QoKS5zaXplKCk7XG4gICAgcmVtYWluaW5nRGVncmVlcy5wdXQobm9kZSwgbm9kZS5nZXROZWlnaGJvcnNMaXN0KCkuc2l6ZSgpKTtcblxuICAgIGlmIChkZWdyZWUgPT0gMSlcbiAgICB7XG4gICAgICByZW1vdmVkTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGVtcExpc3QgPSBbXTtcbiAgdGVtcExpc3QgPSB0ZW1wTGlzdC5jb25jYXQocmVtb3ZlZE5vZGVzKTtcblxuICB3aGlsZSAoIWZvdW5kQ2VudGVyKVxuICB7XG4gICAgdmFyIHRlbXBMaXN0MiA9IFtdO1xuICAgIHRlbXBMaXN0MiA9IHRlbXBMaXN0Mi5jb25jYXQodGVtcExpc3QpO1xuICAgIHRlbXBMaXN0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgdmFyIG5vZGUgPSBsaXN0W2ldO1xuXG4gICAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2Yobm9kZSk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZWlnaGJvdXJzID0gbm9kZS5nZXROZWlnaGJvcnNMaXN0KCk7XG5cbiAgICAgIE9iamVjdC5rZXlzKG5laWdoYm91cnMuc2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGopIHtcbiAgICAgICAgdmFyIG5laWdoYm91ciA9IG5laWdoYm91cnMuc2V0W2pdO1xuICAgICAgICBpZiAocmVtb3ZlZE5vZGVzLmluZGV4T2YobmVpZ2hib3VyKSA8IDApXG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgb3RoZXJEZWdyZWUgPSByZW1haW5pbmdEZWdyZWVzLmdldChuZWlnaGJvdXIpO1xuICAgICAgICAgIHZhciBuZXdEZWdyZWUgPSBvdGhlckRlZ3JlZSAtIDE7XG5cbiAgICAgICAgICBpZiAobmV3RGVncmVlID09IDEpXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGVtcExpc3QucHVzaChuZWlnaGJvdXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXMucHV0KG5laWdoYm91ciwgbmV3RGVncmVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlZE5vZGVzID0gcmVtb3ZlZE5vZGVzLmNvbmNhdCh0ZW1wTGlzdCk7XG5cbiAgICBpZiAobGlzdC5sZW5ndGggPT0gMSB8fCBsaXN0Lmxlbmd0aCA9PSAyKVxuICAgIHtcbiAgICAgIGZvdW5kQ2VudGVyID0gdHJ1ZTtcbiAgICAgIGNlbnRlck5vZGUgPSBsaXN0WzBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjZW50ZXJOb2RlO1xufTtcblxuLyoqXG4gKiBEdXJpbmcgdGhlIGNvYXJzZW5pbmcgcHJvY2VzcywgdGhpcyBsYXlvdXQgbWF5IGJlIHJlZmVyZW5jZWQgYnkgdHdvIGdyYXBoIG1hbmFnZXJzXG4gKiB0aGlzIHNldHRlciBmdW5jdGlvbiBncmFudHMgYWNjZXNzIHRvIGNoYW5nZSB0aGUgY3VycmVudGx5IGJlaW5nIHVzZWQgZ3JhcGggbWFuYWdlclxuICovXG5MYXlvdXQucHJvdG90eXBlLnNldEdyYXBoTWFuYWdlciA9IGZ1bmN0aW9uIChnbSlcbntcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9MYXlvdXQuanMiLCIvKlxuICpUaGlzIGNsYXNzIGlzIHRoZSBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBQb2ludC5qYXZhIGNsYXNzIGluIGpka1xuICovXG5mdW5jdGlvbiBQb2ludCh4LCB5LCBwKSB7XG4gIHRoaXMueCA9IG51bGw7XG4gIHRoaXMueSA9IG51bGw7XG4gIGlmICh4ID09IG51bGwgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHRoaXMueCA9IDA7XG4gICAgdGhpcy55ID0gMDtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgeCA9PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PSAnbnVtYmVyJyAmJiBwID09IG51bGwpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cbiAgZWxzZSBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHAgPSB4O1xuICAgIHRoaXMueCA9IHAueDtcbiAgICB0aGlzLnkgPSBwLnk7XG4gIH1cbn1cblxuUG9pbnQucHJvdG90eXBlLmdldFggPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLng7XG59XG5cblBvaW50LnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy55O1xufVxuXG5Qb2ludC5wcm90b3R5cGUuZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xufVxuXG5Qb2ludC5wcm90b3R5cGUuc2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoeCwgeSwgcCkge1xuICBpZiAoeC5jb25zdHJ1Y3Rvci5uYW1lID09ICdQb2ludCcgJiYgeSA9PSBudWxsICYmIHAgPT0gbnVsbCkge1xuICAgIHAgPSB4O1xuICAgIHRoaXMuc2V0TG9jYXRpb24ocC54LCBwLnkpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiB4ID09ICdudW1iZXInICYmIHR5cGVvZiB5ID09ICdudW1iZXInICYmIHAgPT0gbnVsbCkge1xuICAgIC8vaWYgYm90aCBwYXJhbWV0ZXJzIGFyZSBpbnRlZ2VyIGp1c3QgbW92ZSAoeCx5KSBsb2NhdGlvblxuICAgIGlmIChwYXJzZUludCh4KSA9PSB4ICYmIHBhcnNlSW50KHkpID09IHkpIHtcbiAgICAgIHRoaXMubW92ZSh4LCB5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnggPSBNYXRoLmZsb29yKHggKyAwLjUpO1xuICAgICAgdGhpcy55ID0gTWF0aC5mbG9vcih5ICsgMC41KTtcbiAgICB9XG4gIH1cbn1cblxuUG9pbnQucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbiAoeCwgeSkge1xuICB0aGlzLnggPSB4O1xuICB0aGlzLnkgPSB5O1xufVxuXG5Qb2ludC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKGR4LCBkeSkge1xuICB0aGlzLnggKz0gZHg7XG4gIHRoaXMueSArPSBkeTtcbn1cblxuUG9pbnQucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgaWYgKG9iai5jb25zdHJ1Y3Rvci5uYW1lID09IFwiUG9pbnRcIikge1xuICAgIHZhciBwdCA9IG9iajtcbiAgICByZXR1cm4gKHRoaXMueCA9PSBwdC54KSAmJiAodGhpcy55ID09IHB0LnkpO1xuICB9XG4gIHJldHVybiB0aGlzID09IG9iajtcbn1cblxuUG9pbnQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IFBvaW50KCkuY29uc3RydWN0b3IubmFtZSArIFwiW3g9XCIgKyB0aGlzLnggKyBcIix5PVwiICsgdGhpcy55ICsgXCJdXCI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L1BvaW50LmpzIiwiZnVuY3Rpb24gUmVjdGFuZ2xlRCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG5cbiAgaWYgKHggIT0gbnVsbCAmJiB5ICE9IG51bGwgJiYgd2lkdGggIT0gbnVsbCAmJiBoZWlnaHQgIT0gbnVsbCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cbn1cblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLng7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRYID0gZnVuY3Rpb24gKHgpXG57XG4gIHRoaXMueCA9IHg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLnNldFkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdGhpcy55ID0geTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5zZXRXaWR0aCA9IGZ1bmN0aW9uICh3aWR0aClcbntcbiAgdGhpcy53aWR0aCA9IHdpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0SGVpZ2h0ID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKGhlaWdodClcbntcbiAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRSaWdodCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0Qm90dG9tID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0O1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChhKVxue1xuICBpZiAodGhpcy5nZXRSaWdodCgpIDwgYS54KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMuZ2V0Qm90dG9tKCkgPCBhLnkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYS5nZXRSaWdodCgpIDwgdGhpcy54KVxuICB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGEuZ2V0Qm90dG9tKCkgPCB0aGlzLnkpXG4gIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldENlbnRlclggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNaW5YID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WCgpO1xufTtcblxuUmVjdGFuZ2xlRC5wcm90b3R5cGUuZ2V0TWF4WCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmdldFgoKSArIHRoaXMud2lkdGg7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRDZW50ZXJZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cblJlY3RhbmdsZUQucHJvdG90eXBlLmdldE1pblkgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5nZXRZKCk7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRNYXhZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuZ2V0WSgpICsgdGhpcy5oZWlnaHQ7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRXaWR0aEhhbGYgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aCAvIDI7XG59O1xuXG5SZWN0YW5nbGVELnByb3RvdHlwZS5nZXRIZWlnaHRIYWxmID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMuaGVpZ2h0IC8gMjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdGFuZ2xlRDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvUmVjdGFuZ2xlRC5qcyIsInZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm0oeCwgeSkge1xuICB0aGlzLmx3b3JsZE9yZ1ggPSAwLjA7XG4gIHRoaXMubHdvcmxkT3JnWSA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWCA9IDAuMDtcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IDAuMDtcbiAgdGhpcy5sd29ybGRFeHRYID0gMS4wO1xuICB0aGlzLmx3b3JsZEV4dFkgPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFggPSAxLjA7XG4gIHRoaXMubGRldmljZUV4dFkgPSAxLjA7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1ggPSBmdW5jdGlvbiAod294KVxue1xuICB0aGlzLmx3b3JsZE9yZ1ggPSB3b3g7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRPcmdZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkT3JnWTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZE9yZ1kgPSBmdW5jdGlvbiAod295KVxue1xuICB0aGlzLmx3b3JsZE9yZ1kgPSB3b3k7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WDtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFggPSBmdW5jdGlvbiAod2V4KVxue1xuICB0aGlzLmx3b3JsZEV4dFggPSB3ZXg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0V29ybGRFeHRZID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubHdvcmxkRXh0WTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXRXb3JsZEV4dFkgPSBmdW5jdGlvbiAod2V5KVxue1xuICB0aGlzLmx3b3JsZEV4dFkgPSB3ZXk7XG59XG5cbi8qIERldmljZSByZWxhdGVkICovXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlT3JnWCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VPcmdYO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZU9yZ1ggPSBmdW5jdGlvbiAoZG94KVxue1xuICB0aGlzLmxkZXZpY2VPcmdYID0gZG94O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmdldERldmljZU9yZ1kgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5sZGV2aWNlT3JnWTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5zZXREZXZpY2VPcmdZID0gZnVuY3Rpb24gKGRveSlcbntcbiAgdGhpcy5sZGV2aWNlT3JnWSA9IGRveTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5nZXREZXZpY2VFeHRYID0gZnVuY3Rpb24gKClcbntcbiAgcmV0dXJuIHRoaXMubGRldmljZUV4dFg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuc2V0RGV2aWNlRXh0WCA9IGZ1bmN0aW9uIChkZXgpXG57XG4gIHRoaXMubGRldmljZUV4dFggPSBkZXg7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuZ2V0RGV2aWNlRXh0WSA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiB0aGlzLmxkZXZpY2VFeHRZO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnNldERldmljZUV4dFkgPSBmdW5jdGlvbiAoZGV5KVxue1xuICB0aGlzLmxkZXZpY2VFeHRZID0gZGV5O1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnRyYW5zZm9ybVggPSBmdW5jdGlvbiAoeClcbntcbiAgdmFyIHhEZXZpY2UgPSAwLjA7XG4gIHZhciB3b3JsZEV4dFggPSB0aGlzLmx3b3JsZEV4dFg7XG4gIGlmICh3b3JsZEV4dFggIT0gMC4wKVxuICB7XG4gICAgeERldmljZSA9IHRoaXMubGRldmljZU9yZ1ggK1xuICAgICAgICAgICAgKCh4IC0gdGhpcy5sd29ybGRPcmdYKSAqIHRoaXMubGRldmljZUV4dFggLyB3b3JsZEV4dFgpO1xuICB9XG5cbiAgcmV0dXJuIHhEZXZpY2U7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUudHJhbnNmb3JtWSA9IGZ1bmN0aW9uICh5KVxue1xuICB2YXIgeURldmljZSA9IDAuMDtcbiAgdmFyIHdvcmxkRXh0WSA9IHRoaXMubHdvcmxkRXh0WTtcbiAgaWYgKHdvcmxkRXh0WSAhPSAwLjApXG4gIHtcbiAgICB5RGV2aWNlID0gdGhpcy5sZGV2aWNlT3JnWSArXG4gICAgICAgICAgICAoKHkgLSB0aGlzLmx3b3JsZE9yZ1kpICogdGhpcy5sZGV2aWNlRXh0WSAvIHdvcmxkRXh0WSk7XG4gIH1cblxuXG4gIHJldHVybiB5RGV2aWNlO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1YID0gZnVuY3Rpb24gKHgpXG57XG4gIHZhciB4V29ybGQgPSAwLjA7XG4gIHZhciBkZXZpY2VFeHRYID0gdGhpcy5sZGV2aWNlRXh0WDtcbiAgaWYgKGRldmljZUV4dFggIT0gMC4wKVxuICB7XG4gICAgeFdvcmxkID0gdGhpcy5sd29ybGRPcmdYICtcbiAgICAgICAgICAgICgoeCAtIHRoaXMubGRldmljZU9yZ1gpICogdGhpcy5sd29ybGRFeHRYIC8gZGV2aWNlRXh0WCk7XG4gIH1cblxuXG4gIHJldHVybiB4V29ybGQ7XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUuaW52ZXJzZVRyYW5zZm9ybVkgPSBmdW5jdGlvbiAoeSlcbntcbiAgdmFyIHlXb3JsZCA9IDAuMDtcbiAgdmFyIGRldmljZUV4dFkgPSB0aGlzLmxkZXZpY2VFeHRZO1xuICBpZiAoZGV2aWNlRXh0WSAhPSAwLjApXG4gIHtcbiAgICB5V29ybGQgPSB0aGlzLmx3b3JsZE9yZ1kgK1xuICAgICAgICAgICAgKCh5IC0gdGhpcy5sZGV2aWNlT3JnWSkgKiB0aGlzLmx3b3JsZEV4dFkgLyBkZXZpY2VFeHRZKTtcbiAgfVxuICByZXR1cm4geVdvcmxkO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLmludmVyc2VUcmFuc2Zvcm1Qb2ludCA9IGZ1bmN0aW9uIChpblBvaW50KVxue1xuICB2YXIgb3V0UG9pbnQgPVxuICAgICAgICAgIG5ldyBQb2ludEQodGhpcy5pbnZlcnNlVHJhbnNmb3JtWChpblBvaW50LngpLFxuICAgICAgICAgICAgICAgICAgdGhpcy5pbnZlcnNlVHJhbnNmb3JtWShpblBvaW50LnkpKTtcbiAgcmV0dXJuIG91dFBvaW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvVHJhbnNmb3JtLmpzIiwiZnVuY3Rpb24gVW5pcXVlSURHZW5lcmV0b3IoKSB7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRCA9IDA7XG5cblVuaXF1ZUlER2VuZXJldG9yLmNyZWF0ZUlEID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAoVW5pcXVlSURHZW5lcmV0b3IuaXNQcmltaXRpdmUob2JqKSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgaWYgKG9iai51bmlxdWVJRCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIG9iai51bmlxdWVJRDtcbiAgfVxuICBvYmoudW5pcXVlSUQgPSBVbmlxdWVJREdlbmVyZXRvci5nZXRTdHJpbmcoKTtcbiAgVW5pcXVlSURHZW5lcmV0b3IubGFzdElEKys7XG4gIHJldHVybiBvYmoudW5pcXVlSUQ7XG59XG5cblVuaXF1ZUlER2VuZXJldG9yLmdldFN0cmluZyA9IGZ1bmN0aW9uIChpZCkge1xuICBpZiAoaWQgPT0gbnVsbClcbiAgICBpZCA9IFVuaXF1ZUlER2VuZXJldG9yLmxhc3RJRDtcbiAgcmV0dXJuIFwiT2JqZWN0I1wiICsgaWQgKyBcIlwiO1xufVxuXG5VbmlxdWVJREdlbmVyZXRvci5pc1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgYXJnO1xuICByZXR1cm4gYXJnID09IG51bGwgfHwgKHR5cGUgIT0gXCJvYmplY3RcIiAmJiB0eXBlICE9IFwiZnVuY3Rpb25cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVW5pcXVlSURHZW5lcmV0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L1VuaXF1ZUlER2VuZXJldG9yLmpzIiwidmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xuXG5mdW5jdGlvbiBDb1NFQ29uc3RhbnRzKCkge1xufVxuXG4vL0NvU0VDb25zdGFudHMgaW5oZXJpdHMgc3RhdGljIHByb3BzIGluIEZETGF5b3V0Q29uc3RhbnRzXG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0Q29uc3RhbnRzKSB7XG4gIENvU0VDb25zdGFudHNbcHJvcF0gPSBGRExheW91dENvbnN0YW50c1twcm9wXTtcbn1cblxuQ29TRUNvbnN0YW50cy5ERUZBVUxUX1VTRV9NVUxUSV9MRVZFTF9TQ0FMSU5HID0gZmFsc2U7XG5Db1NFQ29uc3RhbnRzLkRFRkFVTFRfUkFESUFMX1NFUEFSQVRJT04gPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPTkVOVF9TRVBFUkFUSU9OID0gNjA7XG5Db1NFQ29uc3RhbnRzLlRJTEUgPSB0cnVlO1xuQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTCA9IDEwO1xuQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMID0gMTA7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUNvbnN0YW50cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvQ29TRUNvbnN0YW50cy5qcyIsInZhciBGRExheW91dEVkZ2UgPSByZXF1aXJlKCcuL0ZETGF5b3V0RWRnZScpO1xuXG5mdW5jdGlvbiBDb1NFRWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgRkRMYXlvdXRFZGdlLmNhbGwodGhpcywgc291cmNlLCB0YXJnZXQsIHZFZGdlKTtcbn1cblxuQ29TRUVkZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGRExheW91dEVkZ2UucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gRkRMYXlvdXRFZGdlKSB7XG4gIENvU0VFZGdlW3Byb3BdID0gRkRMYXlvdXRFZGdlW3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VFZGdlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0NvU0VFZGdlLmpzIiwidmFyIExHcmFwaCA9IHJlcXVpcmUoJy4vTEdyYXBoJyk7XG5cbmZ1bmN0aW9uIENvU0VHcmFwaChwYXJlbnQsIGdyYXBoTWdyLCB2R3JhcGgpIHtcbiAgTEdyYXBoLmNhbGwodGhpcywgcGFyZW50LCBncmFwaE1nciwgdkdyYXBoKTtcbn1cblxuQ29TRUdyYXBoLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEdyYXBoLnByb3RvdHlwZSk7XG5mb3IgKHZhciBwcm9wIGluIExHcmFwaCkge1xuICBDb1NFR3JhcGhbcHJvcF0gPSBMR3JhcGhbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29TRUdyYXBoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9Db1NFR3JhcGguanMiLCJ2YXIgTEdyYXBoTWFuYWdlciA9IHJlcXVpcmUoJy4vTEdyYXBoTWFuYWdlcicpO1xuXG5mdW5jdGlvbiBDb1NFR3JhcGhNYW5hZ2VyKGxheW91dCkge1xuICBMR3JhcGhNYW5hZ2VyLmNhbGwodGhpcywgbGF5b3V0KTtcbn1cblxuQ29TRUdyYXBoTWFuYWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExHcmFwaE1hbmFnZXIucHJvdG90eXBlKTtcbmZvciAodmFyIHByb3AgaW4gTEdyYXBoTWFuYWdlcikge1xuICBDb1NFR3JhcGhNYW5hZ2VyW3Byb3BdID0gTEdyYXBoTWFuYWdlcltwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFR3JhcGhNYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9Db1NFR3JhcGhNYW5hZ2VyLmpzIiwidmFyIEZETGF5b3V0Tm9kZSA9IHJlcXVpcmUoJy4vRkRMYXlvdXROb2RlJyk7XG52YXIgSU1hdGggPSByZXF1aXJlKCcuL0lNYXRoJyk7XG5cbmZ1bmN0aW9uIENvU0VOb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIEZETGF5b3V0Tm9kZS5jYWxsKHRoaXMsIGdtLCBsb2MsIHNpemUsIHZOb2RlKTtcbn1cblxuXG5Db1NFTm9kZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEZETGF5b3V0Tm9kZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgcHJvcCBpbiBGRExheW91dE5vZGUpIHtcbiAgQ29TRU5vZGVbcHJvcF0gPSBGRExheW91dE5vZGVbcHJvcF07XG59XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gKClcbntcblxuICAvLyBjbGVhcnMgdGhlIGZvcmNlcyBjYWxjdWxhdGVkIGZvciB0aGUgbm9kZVxuICB2YXIgY2xlYXJGb3JjZXMgPSBmdW5jdGlvbigpXG4gIHtcbiAgICB0aGlzLnNwcmluZ0ZvcmNlWCA9IDA7XG4gICAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICAgIHRoaXMucmVwdWxzaW9uRm9yY2VYID0gMDtcbiAgICB0aGlzLnJlcHVsc2lvbkZvcmNlWSA9IDA7XG4gICAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gICAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWSA9IDA7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSAwO1xuICB9XG5cbiAgdmFyIGxheW91dCA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldExheW91dCgpO1xuICB0aGlzLmRpc3BsYWNlbWVudFggPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VYICsgdGhpcy5yZXB1bHNpb25Gb3JjZVggKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VYKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqXG4gICAgICAgICAgKHRoaXMuc3ByaW5nRm9yY2VZICsgdGhpcy5yZXB1bHNpb25Gb3JjZVkgKyB0aGlzLmdyYXZpdGF0aW9uRm9yY2VZKSAvIHRoaXMubm9PZkNoaWxkcmVuO1xuXG5cbiAgaWYgKE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgPiBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50KVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRYID0gbGF5b3V0LmNvb2xpbmdGYWN0b3IgKiBsYXlvdXQubWF4Tm9kZURpc3BsYWNlbWVudCAqXG4gICAgICAgICAgICBJTWF0aC5zaWduKHRoaXMuZGlzcGxhY2VtZW50WCk7XG4gIH1cblxuICBpZiAoTWF0aC5hYnModGhpcy5kaXNwbGFjZW1lbnRZKSA+IGxheW91dC5jb29saW5nRmFjdG9yICogbGF5b3V0Lm1heE5vZGVEaXNwbGFjZW1lbnQpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFkgPSBsYXlvdXQuY29vbGluZ0ZhY3RvciAqIGxheW91dC5tYXhOb2RlRGlzcGxhY2VtZW50ICpcbiAgICAgICAgICAgIElNYXRoLnNpZ24odGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIC8vIHdoZXRoZXIgdG8gY2FuY2VsIGRpc3BsYWNlbWVudFxuICAvLyBkaXNjcGxhY2VtZW50IGNvdWxkIGJlIGNhbmNlbGVkIGlmIGFueSBvZiB0aGUgbWluL21heCBib3JkZXJzIGlzIGV4Y2VlZFxuICAvLyB2YXIgY2FuY2VsRGlzcGxhY2VtZW50WCA9IGZhbHNlO1xuICAvLyB2YXIgY2FuY2VsRGlzcGxhY2VtZW50WSA9IGZhbHNlO1xuXG4gIC8vIGNoZWNrIGhvcml6b250YWwgYm9yZGVyc1xuICBpZiAodGhpcy5taW5YICE9PSB1bmRlZmluZWQgfHwgdGhpcy5tYXhYICE9PSB1bmRlZmluZWQpXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGV4cGVjdGVkIFggY29vcmRpbmF0ZSBhZnRlciBkaXNwbGFjZW1lbnQgaXMgcGVyZm9ybWVkXG4gICAgdmFyIGV4cGVjdGVkWCA9IHRoaXMucmVjdC54ICsgdGhpcy5kaXNwbGFjZW1lbnRYO1xuXG4gICAgaWYgKCAoIHRoaXMubWF4WCAhPT0gdW5kZWZpbmVkICYmIGV4cGVjdGVkWCArIHRoaXMucmVjdC53aWR0aCA+IHRoaXMubWF4WCApXG4gICAgICAgICAgfHwgdGhpcy5taW5YICE9PSB1bmRlZmluZWQgJiYgZXhwZWN0ZWRYIDwgdGhpcy5taW5YICkge1xuXG4gICAgICAvLyBjYW5jZWxEaXNwbGFjZW1lbnRYID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcGxhY2VtZW50WCA9IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gY2hlY2sgdmVydGljYWwgYm9yZGVyc1xuICBpZiAodGhpcy5taW5ZICE9PSB1bmRlZmluZWQgfHwgdGhpcy5tYXhZICE9PSB1bmRlZmluZWQpXG4gIHtcbiAgICAvLyBjYWxjdWxhdGUgdGhlIGV4cGVjdGVkIFkgY29vcmRpbmF0ZSBhZnRlciBkaXNwbGFjZW1lbnQgaXMgcGVyZm9ybWVkXG4gICAgdmFyIGV4cGVjdGVkWSA9IHRoaXMucmVjdC55ICsgdGhpcy5kaXNwbGFjZW1lbnRZO1xuXG4gICAgaWYgKCAoIHRoaXMubWF4WSAhPT0gdW5kZWZpbmVkICYmIGV4cGVjdGVkWSArIHRoaXMucmVjdC53aWR0aCA+IHRoaXMubWF4WSApXG4gICAgICAgICAgfHwgdGhpcy5taW5ZICE9PSB1bmRlZmluZWQgJiYgZXhwZWN0ZWRZIDwgdGhpcy5taW5ZICkge1xuXG4gICAgICAvLyBjYW5jZWxEaXNwbGFjZW1lbnRZID0gdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcGxhY2VtZW50WSA9IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgZGlzcGxhY2VtZW50IGlzIGNhbmNlbGVkIGluIGJvdGggZGlyZWN0aW9ucyBqdXN0IGNsZWFyIHRoZSBmb3JjZXMgYW5kIHJldHVyblxuICAvLyBpZiAoIGNhbmNlbERpc3BsYWNlbWVudFggJiYgY2FuY2VsRGlzcGxhY2VtZW50WSApXG4gIC8vIHtcbiAgLy8gICAgIGNsZWFyRm9yY2VzLmNhbGwodGhpcyk7XG4gIC8vICAgICByZXR1cm47XG4gIC8vIH1cblxuICAvLyBhIHNpbXBsZSBub2RlLCBqdXN0IG1vdmUgaXRcbiAgaWYgKHRoaXMuY2hpbGQgPT0gbnVsbClcbiAge1xuICAgIHRoaXMubW92ZUJ5KHRoaXMuZGlzcGxhY2VtZW50WCwgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuICAvLyBhbiBlbXB0eSBjb21wb3VuZCBub2RlLCBhZ2FpbiBqdXN0IG1vdmUgaXRcbiAgZWxzZSBpZiAodGhpcy5jaGlsZC5nZXROb2RlcygpLmxlbmd0aCA9PSAwKVxuICB7XG4gICAgdGhpcy5tb3ZlQnkodGhpcy5kaXNwbGFjZW1lbnRYLCB0aGlzLmRpc3BsYWNlbWVudFkpO1xuICB9XG4gIC8vIG5vbi1lbXB0eSBjb21wb3VuZCBub2RlLCBwcm9wb2dhdGUgbW92ZW1lbnQgdG8gY2hpbGRyZW4gYXMgd2VsbFxuICBlbHNlXG4gIHtcbiAgICB0aGlzLnByb3BvZ2F0ZURpc3BsYWNlbWVudFRvQ2hpbGRyZW4odGhpcy5kaXNwbGFjZW1lbnRYLFxuICAgICAgICAgICAgdGhpcy5kaXNwbGFjZW1lbnRZKTtcbiAgfVxuXG4gIGxheW91dC50b3RhbERpc3BsYWNlbWVudCArPVxuICAgICAgICAgIE1hdGguYWJzKHRoaXMuZGlzcGxhY2VtZW50WCkgKyBNYXRoLmFicyh0aGlzLmRpc3BsYWNlbWVudFkpO1xuXG4gIGNsZWFyRm9yY2VzLmNhbGwodGhpcyk7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbiA9IGZ1bmN0aW9uIChkWCwgZFkpXG57XG4gIHZhciBub2RlcyA9IHRoaXMuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICB2YXIgbm9kZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICBpZiAobm9kZS5nZXRDaGlsZCgpID09IG51bGwpXG4gICAge1xuICAgICAgbm9kZS5tb3ZlQnkoZFgsIGRZKTtcbiAgICAgIG5vZGUuZGlzcGxhY2VtZW50WCArPSBkWDtcbiAgICAgIG5vZGUuZGlzcGxhY2VtZW50WSArPSBkWTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIG5vZGUucHJvcG9nYXRlRGlzcGxhY2VtZW50VG9DaGlsZHJlbihkWCwgZFkpO1xuICAgIH1cbiAgfVxufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLnNldFByZWQxID0gZnVuY3Rpb24gKHByZWQxKVxue1xuICB0aGlzLnByZWQxID0gcHJlZDE7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0UHJlZDEgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJlZDE7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuZ2V0UHJlZDIgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gcHJlZDI7XG59O1xuXG5Db1NFTm9kZS5wcm90b3R5cGUuc2V0TmV4dCA9IGZ1bmN0aW9uIChuZXh0KVxue1xuICB0aGlzLm5leHQgPSBuZXh0O1xufTtcblxuQ29TRU5vZGUucHJvdG90eXBlLmdldE5leHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gbmV4dDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5zZXRQcm9jZXNzZWQgPSBmdW5jdGlvbiAocHJvY2Vzc2VkKVxue1xuICB0aGlzLnByb2Nlc3NlZCA9IHByb2Nlc3NlZDtcbn07XG5cbkNvU0VOb2RlLnByb3RvdHlwZS5pc1Byb2Nlc3NlZCA9IGZ1bmN0aW9uICgpXG57XG4gIHJldHVybiBwcm9jZXNzZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvU0VOb2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9Db1NFTm9kZS5qcyIsInZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIEZETGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9GRExheW91dENvbnN0YW50cycpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0KCkge1xuICBMYXlvdXQuY2FsbCh0aGlzKTtcblxuICB0aGlzLnVzZVNtYXJ0SWRlYWxFZGdlTGVuZ3RoQ2FsY3VsYXRpb24gPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1VTRV9TTUFSVF9JREVBTF9FREdFX0xFTkdUSF9DQUxDVUxBVElPTjtcbiAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIO1xuICB0aGlzLnNwcmluZ0NvbnN0YW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEg7XG4gIHRoaXMucmVwdWxzaW9uQ29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1JFUFVMU0lPTl9TVFJFTkdUSDtcbiAgdGhpcy5ncmF2aXR5Q29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfU1RSRU5HVEg7XG4gIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEg7XG4gIHRoaXMuZ3Jhdml0eVJhbmdlRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1I7XG4gIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSA9ICgzLjAgKiBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIKSAvIDEwMDtcbiAgdGhpcy5jb29saW5nRmFjdG9yID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTDtcbiAgdGhpcy5pbml0aWFsQ29vbGluZ0ZhY3RvciA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUw7XG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMub2xkVG90YWxEaXNwbGFjZW1lbnQgPSAwLjA7XG4gIHRoaXMubWF4SXRlcmF0aW9ucyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TO1xufVxuXG5GRExheW91dC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIExheW91dCkge1xuICBGRExheW91dFtwcm9wXSA9IExheW91dFtwcm9wXTtcbn1cblxuRkRMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCkge1xuICBMYXlvdXQucHJvdG90eXBlLmluaXRQYXJhbWV0ZXJzLmNhbGwodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAodGhpcy5sYXlvdXRRdWFsaXR5ID09IExheW91dENvbnN0YW50cy5EUkFGVF9RVUFMSVRZKVxuICB7XG4gICAgdGhpcy5kaXNwbGFjZW1lbnRUaHJlc2hvbGRQZXJOb2RlICs9IDAuMzA7XG4gICAgdGhpcy5tYXhJdGVyYXRpb25zICo9IDAuODtcbiAgfVxuICBlbHNlIGlmICh0aGlzLmxheW91dFF1YWxpdHkgPT0gTGF5b3V0Q29uc3RhbnRzLlBST09GX1FVQUxJVFkpXG4gIHtcbiAgICB0aGlzLmRpc3BsYWNlbWVudFRocmVzaG9sZFBlck5vZGUgLT0gMC4zMDtcbiAgICB0aGlzLm1heEl0ZXJhdGlvbnMgKj0gMS4yO1xuICB9XG5cbiAgdGhpcy50b3RhbEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9IDA7XG5cbiAgdGhpcy51c2VGUkdyaWRWYXJpYW50ID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfUkVQVUxTSU9OX1JBTkdFX0NBTENVTEFUSU9OO1xuICBcbiAgdGhpcy5ncmlkID0gW107XG4gIC8vIHZhcmlhYmxlcyBmb3IgdHJlZSByZWR1Y3Rpb24gc3VwcG9ydFxuICB0aGlzLnBydW5lZE5vZGVzQWxsID0gW107XG4gIHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zID0gMDtcbiAgdGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgPSAwO1xuICB0aGlzLmlzVHJlZUdyb3dpbmcgPSBmYWxzZTtcbiAgdGhpcy5pc0dyb3d0aEZpbmlzaGVkID0gZmFsc2U7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0lkZWFsRWRnZUxlbmd0aHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlZGdlO1xuICB2YXIgbGNhRGVwdGg7XG4gIHZhciBzb3VyY2U7XG4gIHZhciB0YXJnZXQ7XG4gIHZhciBzaXplT2ZTb3VyY2VJbkxjYTtcbiAgdmFyIHNpemVPZlRhcmdldEluTGNhO1xuXG4gIHZhciBhbGxFZGdlcyA9IHRoaXMuZ2V0R3JhcGhNYW5hZ2VyKCkuZ2V0QWxsRWRnZXMoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxFZGdlcy5sZW5ndGg7IGkrKylcbiAge1xuICAgIGVkZ2UgPSBhbGxFZGdlc1tpXTtcblxuICAgIGVkZ2UuaWRlYWxMZW5ndGggPSB0aGlzLmlkZWFsRWRnZUxlbmd0aDtcblxuICAgIGlmIChlZGdlLmlzSW50ZXJHcmFwaClcbiAgICB7XG4gICAgICBzb3VyY2UgPSBlZGdlLmdldFNvdXJjZSgpO1xuICAgICAgdGFyZ2V0ID0gZWRnZS5nZXRUYXJnZXQoKTtcblxuICAgICAgc2l6ZU9mU291cmNlSW5MY2EgPSBlZGdlLmdldFNvdXJjZUluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpO1xuICAgICAgc2l6ZU9mVGFyZ2V0SW5MY2EgPSBlZGdlLmdldFRhcmdldEluTGNhKCkuZ2V0RXN0aW1hdGVkU2l6ZSgpO1xuXG4gICAgICBpZiAodGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uKVxuICAgICAge1xuICAgICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IHNpemVPZlNvdXJjZUluTGNhICsgc2l6ZU9mVGFyZ2V0SW5MY2EgLVxuICAgICAgICAgICAgICAgIDIgKiBMYXlvdXRDb25zdGFudHMuU0lNUExFX05PREVfU0laRTtcbiAgICAgIH1cblxuICAgICAgbGNhRGVwdGggPSBlZGdlLmdldExjYSgpLmdldEluY2x1c2lvblRyZWVEZXB0aCgpO1xuXG4gICAgICBlZGdlLmlkZWFsTGVuZ3RoICs9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggKlxuICAgICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SICpcbiAgICAgICAgICAgICAgKHNvdXJjZS5nZXRJbmNsdXNpb25UcmVlRGVwdGgoKSArXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmdldEluY2x1c2lvblRyZWVEZXB0aCgpIC0gMiAqIGxjYURlcHRoKTtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pbml0U3ByaW5nRW1iZWRkZXIgPSBmdW5jdGlvbiAoKSB7XG5cbiAgaWYgKHRoaXMuaW5jcmVtZW50YWwpXG4gIHtcbiAgICB0aGlzLm1heE5vZGVEaXNwbGFjZW1lbnQgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUFYX05PREVfRElTUExBQ0VNRU5UX0lOQ1JFTUVOVEFMO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHRoaXMuY29vbGluZ0ZhY3RvciA9IDEuMDtcbiAgICB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yID0gMS4wO1xuICAgIHRoaXMubWF4Tm9kZURpc3BsYWNlbWVudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5NQVhfTk9ERV9ESVNQTEFDRU1FTlQ7XG4gIH1cblxuICB0aGlzLm1heEl0ZXJhdGlvbnMgPVxuICAgICAgICAgIE1hdGgubWF4KHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGggKiA1LCB0aGlzLm1heEl0ZXJhdGlvbnMpO1xuXG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQgPVxuICAgICAgICAgIHRoaXMuZGlzcGxhY2VtZW50VGhyZXNob2xkUGVyTm9kZSAqIHRoaXMuZ2V0QWxsTm9kZXMoKS5sZW5ndGg7XG5cbiAgdGhpcy5yZXB1bHNpb25SYW5nZSA9IHRoaXMuY2FsY1JlcHVsc2lvblJhbmdlKCk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlcyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxFZGdlcyA9IHRoaXMuZ2V0QWxsRWRnZXMoKTtcbiAgdmFyIGVkZ2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsRWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBlZGdlID0gbEVkZ2VzW2ldO1xuXG4gICAgdGhpcy5jYWxjU3ByaW5nRm9yY2UoZWRnZSwgZWRnZS5pZGVhbExlbmd0aCk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjUmVwdWxzaW9uRm9yY2VzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgajtcbiAgdmFyIG5vZGVBLCBub2RlQjtcbiAgdmFyIGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHByb2Nlc3NlZE5vZGVTZXQ7XG5cbiAgaWYgKHRoaXMudXNlRlJHcmlkVmFyaWFudClcbiAgeyAgICAgICBcbiAgICBpZiAoKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuR1JJRF9DQUxDVUxBVElPTl9DSEVDS19QRVJJT0QgPT0gMSAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpKVxuICAgIHsgICAgICAgXG4gICAgICB0aGlzLnVwZGF0ZUdyaWQoKTsgIFxuICAgIH1cblxuICAgIHByb2Nlc3NlZE5vZGVTZXQgPSBuZXcgU2V0KCk7XG4gICAgXG4gICAgLy8gY2FsY3VsYXRlIHJlcHVsc2lvbiBmb3JjZXMgYmV0d2VlbiBlYWNoIG5vZGVzIGFuZCBpdHMgc3Vycm91bmRpbmdcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuICAgICAgdGhpcy5jYWxjdWxhdGVSZXB1bHNpb25Gb3JjZU9mQU5vZGUobm9kZUEsIHByb2Nlc3NlZE5vZGVTZXQpO1xuICAgICAgcHJvY2Vzc2VkTm9kZVNldC5hZGQobm9kZUEpO1xuICAgIH1cbiAgfVxuICBlbHNlXG4gIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgIG5vZGVBID0gbE5vZGVzW2ldO1xuXG4gICAgICBmb3IgKGogPSBpICsgMTsgaiA8IGxOb2Rlcy5sZW5ndGg7IGorKylcbiAgICAgIHtcbiAgICAgICAgbm9kZUIgPSBsTm9kZXNbal07XG5cbiAgICAgICAgLy8gSWYgYm90aCBub2RlcyBhcmUgbm90IG1lbWJlcnMgb2YgdGhlIHNhbWUgZ3JhcGgsIHNraXAuXG4gICAgICAgIGlmIChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpXG4gICAgICAgIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlKG5vZGVBLCBub2RlQik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyYXZpdGF0aW9uYWxGb3JjZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlO1xuICB2YXIgbE5vZGVzID0gdGhpcy5nZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbigpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2Uobm9kZSk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5tb3ZlTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIHZhciBub2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZSA9IGxOb2Rlc1tpXTtcbiAgICBub2RlLm1vdmUoKTtcbiAgfVxufVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1NwcmluZ0ZvcmNlID0gZnVuY3Rpb24gKGVkZ2UsIGlkZWFsTGVuZ3RoKSB7XG4gIHZhciBzb3VyY2VOb2RlID0gZWRnZS5nZXRTb3VyY2UoKTtcbiAgdmFyIHRhcmdldE5vZGUgPSBlZGdlLmdldFRhcmdldCgpO1xuXG4gIHZhciBsZW5ndGg7XG4gIHZhciBzcHJpbmdGb3JjZTtcbiAgdmFyIHNwcmluZ0ZvcmNlWDtcbiAgdmFyIHNwcmluZ0ZvcmNlWTtcblxuICAvLyBVcGRhdGUgZWRnZSBsZW5ndGhcbiAgaWYgKHRoaXMudW5pZm9ybUxlYWZOb2RlU2l6ZXMgJiZcbiAgICAgICAgICBzb3VyY2VOb2RlLmdldENoaWxkKCkgPT0gbnVsbCAmJiB0YXJnZXROb2RlLmdldENoaWxkKCkgPT0gbnVsbClcbiAge1xuICAgIGVkZ2UudXBkYXRlTGVuZ3RoU2ltcGxlKCk7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgZWRnZS51cGRhdGVMZW5ndGgoKTtcblxuICAgIGlmIChlZGdlLmlzT3ZlcmxhcGluZ1NvdXJjZUFuZFRhcmdldClcbiAgICB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbGVuZ3RoID0gZWRnZS5nZXRMZW5ndGgoKTtcblxuICAvLyBDYWxjdWxhdGUgc3ByaW5nIGZvcmNlc1xuICBzcHJpbmdGb3JjZSA9IHRoaXMuc3ByaW5nQ29uc3RhbnQgKiAobGVuZ3RoIC0gaWRlYWxMZW5ndGgpO1xuXG4gIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgc3ByaW5nRm9yY2VYID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhYIC8gbGVuZ3RoKTtcbiAgc3ByaW5nRm9yY2VZID0gc3ByaW5nRm9yY2UgKiAoZWRnZS5sZW5ndGhZIC8gbGVuZ3RoKTtcblxuICAvLyBBcHBseSBmb3JjZXMgb24gdGhlIGVuZCBub2Rlc1xuICBzb3VyY2VOb2RlLnNwcmluZ0ZvcmNlWCArPSBzcHJpbmdGb3JjZVg7XG4gIHNvdXJjZU5vZGUuc3ByaW5nRm9yY2VZICs9IHNwcmluZ0ZvcmNlWTtcbiAgdGFyZ2V0Tm9kZS5zcHJpbmdGb3JjZVggLT0gc3ByaW5nRm9yY2VYO1xuICB0YXJnZXROb2RlLnNwcmluZ0ZvcmNlWSAtPSBzcHJpbmdGb3JjZVk7XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvbkZvcmNlID0gZnVuY3Rpb24gKG5vZGVBLCBub2RlQikge1xuICB2YXIgcmVjdEEgPSBub2RlQS5nZXRSZWN0KCk7XG4gIHZhciByZWN0QiA9IG5vZGVCLmdldFJlY3QoKTtcbiAgdmFyIG92ZXJsYXBBbW91bnQgPSBuZXcgQXJyYXkoMik7XG4gIHZhciBjbGlwUG9pbnRzID0gbmV3IEFycmF5KDQpO1xuICB2YXIgZGlzdGFuY2VYO1xuICB2YXIgZGlzdGFuY2VZO1xuICB2YXIgZGlzdGFuY2VTcXVhcmVkO1xuICB2YXIgZGlzdGFuY2U7XG4gIHZhciByZXB1bHNpb25Gb3JjZTtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWDtcbiAgdmFyIHJlcHVsc2lvbkZvcmNlWTtcblxuICBpZiAocmVjdEEuaW50ZXJzZWN0cyhyZWN0QikpLy8gdHdvIG5vZGVzIG92ZXJsYXBcbiAge1xuICAgIC8vIGNhbGN1bGF0ZSBzZXBhcmF0aW9uIGFtb3VudCBpbiB4IGFuZCB5IGRpcmVjdGlvbnNcbiAgICBJR2VvbWV0cnkuY2FsY1NlcGFyYXRpb25BbW91bnQocmVjdEEsXG4gICAgICAgICAgICByZWN0QixcbiAgICAgICAgICAgIG92ZXJsYXBBbW91bnQsXG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC8gMi4wKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlWCA9IDIgKiBvdmVybGFwQW1vdW50WzBdO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IDIgKiBvdmVybGFwQW1vdW50WzFdO1xuICAgIFxuICAgIHZhciBjaGlsZHJlbkNvbnN0YW50ID0gbm9kZUEubm9PZkNoaWxkcmVuICogbm9kZUIubm9PZkNoaWxkcmVuIC8gKG5vZGVBLm5vT2ZDaGlsZHJlbiArIG5vZGVCLm5vT2ZDaGlsZHJlbik7XG4gICAgXG4gICAgLy8gQXBwbHkgZm9yY2VzIG9uIHRoZSB0d28gbm9kZXNcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVggLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQS5yZXB1bHNpb25Gb3JjZVkgLT0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWDtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVkgKz0gY2hpbGRyZW5Db25zdGFudCAqIHJlcHVsc2lvbkZvcmNlWTtcbiAgfVxuICBlbHNlLy8gbm8gb3ZlcmxhcFxuICB7XG4gICAgLy8gY2FsY3VsYXRlIGRpc3RhbmNlXG5cbiAgICBpZiAodGhpcy51bmlmb3JtTGVhZk5vZGVTaXplcyAmJlxuICAgICAgICAgICAgbm9kZUEuZ2V0Q2hpbGQoKSA9PSBudWxsICYmIG5vZGVCLmdldENoaWxkKCkgPT0gbnVsbCkvLyBzaW1wbHkgYmFzZSByZXB1bHNpb24gb24gZGlzdGFuY2Ugb2Ygbm9kZSBjZW50ZXJzXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gcmVjdEIuZ2V0Q2VudGVyWCgpIC0gcmVjdEEuZ2V0Q2VudGVyWCgpO1xuICAgICAgZGlzdGFuY2VZID0gcmVjdEIuZ2V0Q2VudGVyWSgpIC0gcmVjdEEuZ2V0Q2VudGVyWSgpO1xuICAgIH1cbiAgICBlbHNlLy8gdXNlIGNsaXBwaW5nIHBvaW50c1xuICAgIHtcbiAgICAgIElHZW9tZXRyeS5nZXRJbnRlcnNlY3Rpb24ocmVjdEEsIHJlY3RCLCBjbGlwUG9pbnRzKTtcblxuICAgICAgZGlzdGFuY2VYID0gY2xpcFBvaW50c1syXSAtIGNsaXBQb2ludHNbMF07XG4gICAgICBkaXN0YW5jZVkgPSBjbGlwUG9pbnRzWzNdIC0gY2xpcFBvaW50c1sxXTtcbiAgICB9XG5cbiAgICAvLyBObyByZXB1bHNpb24gcmFuZ2UuIEZSIGdyaWQgdmFyaWFudCBzaG91bGQgdGFrZSBjYXJlIG9mIHRoaXMuXG4gICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlWCkgPCBGRExheW91dENvbnN0YW50cy5NSU5fUkVQVUxTSU9OX0RJU1QpXG4gICAge1xuICAgICAgZGlzdGFuY2VYID0gSU1hdGguc2lnbihkaXN0YW5jZVgpICpcbiAgICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZVkpIDwgRkRMYXlvdXRDb25zdGFudHMuTUlOX1JFUFVMU0lPTl9ESVNUKVxuICAgIHtcbiAgICAgIGRpc3RhbmNlWSA9IElNYXRoLnNpZ24oZGlzdGFuY2VZKSAqXG4gICAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLk1JTl9SRVBVTFNJT05fRElTVDtcbiAgICB9XG5cbiAgICBkaXN0YW5jZVNxdWFyZWQgPSBkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVk7XG4gICAgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZGlzdGFuY2VTcXVhcmVkKTtcblxuICAgIHJlcHVsc2lvbkZvcmNlID0gdGhpcy5yZXB1bHNpb25Db25zdGFudCAqIG5vZGVBLm5vT2ZDaGlsZHJlbiAqIG5vZGVCLm5vT2ZDaGlsZHJlbiAvIGRpc3RhbmNlU3F1YXJlZDtcblxuICAgIC8vIFByb2plY3QgZm9yY2Ugb250byB4IGFuZCB5IGF4ZXNcbiAgICByZXB1bHNpb25Gb3JjZVggPSByZXB1bHNpb25Gb3JjZSAqIGRpc3RhbmNlWCAvIGRpc3RhbmNlO1xuICAgIHJlcHVsc2lvbkZvcmNlWSA9IHJlcHVsc2lvbkZvcmNlICogZGlzdGFuY2VZIC8gZGlzdGFuY2U7XG4gICAgIFxuICAgIC8vIEFwcGx5IGZvcmNlcyBvbiB0aGUgdHdvIG5vZGVzICAgIFxuICAgIG5vZGVBLnJlcHVsc2lvbkZvcmNlWCAtPSByZXB1bHNpb25Gb3JjZVg7XG4gICAgbm9kZUEucmVwdWxzaW9uRm9yY2VZIC09IHJlcHVsc2lvbkZvcmNlWTtcbiAgICBub2RlQi5yZXB1bHNpb25Gb3JjZVggKz0gcmVwdWxzaW9uRm9yY2VYO1xuICAgIG5vZGVCLnJlcHVsc2lvbkZvcmNlWSArPSByZXB1bHNpb25Gb3JjZVk7XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5jYWxjR3Jhdml0YXRpb25hbEZvcmNlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIG93bmVyR3JhcGg7XG4gIHZhciBvd25lckNlbnRlclg7XG4gIHZhciBvd25lckNlbnRlclk7XG4gIHZhciBkaXN0YW5jZVg7XG4gIHZhciBkaXN0YW5jZVk7XG4gIHZhciBhYnNEaXN0YW5jZVg7XG4gIHZhciBhYnNEaXN0YW5jZVk7XG4gIHZhciBlc3RpbWF0ZWRTaXplO1xuICBvd25lckdyYXBoID0gbm9kZS5nZXRPd25lcigpO1xuXG4gIG93bmVyQ2VudGVyWCA9IChvd25lckdyYXBoLmdldFJpZ2h0KCkgKyBvd25lckdyYXBoLmdldExlZnQoKSkgLyAyO1xuICBvd25lckNlbnRlclkgPSAob3duZXJHcmFwaC5nZXRUb3AoKSArIG93bmVyR3JhcGguZ2V0Qm90dG9tKCkpIC8gMjtcbiAgZGlzdGFuY2VYID0gbm9kZS5nZXRDZW50ZXJYKCkgLSBvd25lckNlbnRlclg7XG4gIGRpc3RhbmNlWSA9IG5vZGUuZ2V0Q2VudGVyWSgpIC0gb3duZXJDZW50ZXJZO1xuICBhYnNEaXN0YW5jZVggPSBNYXRoLmFicyhkaXN0YW5jZVgpICsgbm9kZS5nZXRXaWR0aCgpIC8gMjtcbiAgYWJzRGlzdGFuY2VZID0gTWF0aC5hYnMoZGlzdGFuY2VZKSArIG5vZGUuZ2V0SGVpZ2h0KCkgLyAyO1xuXG4gIGlmIChub2RlLmdldE93bmVyKCkgPT0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpKS8vIGluIHRoZSByb290IGdyYXBoXG4gIHtcbiAgICBlc3RpbWF0ZWRTaXplID0gb3duZXJHcmFwaC5nZXRFc3RpbWF0ZWRTaXplKCkgKiB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWDtcbiAgICAgIG5vZGUuZ3Jhdml0YXRpb25Gb3JjZVkgPSAtdGhpcy5ncmF2aXR5Q29uc3RhbnQgKiBkaXN0YW5jZVk7XG4gICAgfVxuICB9XG4gIGVsc2UvLyBpbnNpZGUgYSBjb21wb3VuZFxuICB7XG4gICAgZXN0aW1hdGVkU2l6ZSA9IG93bmVyR3JhcGguZ2V0RXN0aW1hdGVkU2l6ZSgpICogdGhpcy5jb21wb3VuZEdyYXZpdHlSYW5nZUZhY3RvcjtcblxuICAgIGlmIChhYnNEaXN0YW5jZVggPiBlc3RpbWF0ZWRTaXplIHx8IGFic0Rpc3RhbmNlWSA+IGVzdGltYXRlZFNpemUpXG4gICAge1xuICAgICAgbm9kZS5ncmF2aXRhdGlvbkZvcmNlWCA9IC10aGlzLmdyYXZpdHlDb25zdGFudCAqIGRpc3RhbmNlWCAqXG4gICAgICAgICAgICAgIHRoaXMuY29tcG91bmRHcmF2aXR5Q29uc3RhbnQ7XG4gICAgICBub2RlLmdyYXZpdGF0aW9uRm9yY2VZID0gLXRoaXMuZ3Jhdml0eUNvbnN0YW50ICogZGlzdGFuY2VZICpcbiAgICAgICAgICAgICAgdGhpcy5jb21wb3VuZEdyYXZpdHlDb25zdGFudDtcbiAgICB9XG4gIH1cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS5pc0NvbnZlcmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNvbnZlcmdlZDtcbiAgdmFyIG9zY2lsYXRpbmcgPSBmYWxzZTtcblxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPiB0aGlzLm1heEl0ZXJhdGlvbnMgLyAzKVxuICB7XG4gICAgb3NjaWxhdGluZyA9XG4gICAgICAgICAgICBNYXRoLmFicyh0aGlzLnRvdGFsRGlzcGxhY2VtZW50IC0gdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCkgPCAyO1xuICB9XG5cbiAgY29udmVyZ2VkID0gdGhpcy50b3RhbERpc3BsYWNlbWVudCA8IHRoaXMudG90YWxEaXNwbGFjZW1lbnRUaHJlc2hvbGQ7XG5cbiAgdGhpcy5vbGRUb3RhbERpc3BsYWNlbWVudCA9IHRoaXMudG90YWxEaXNwbGFjZW1lbnQ7XG5cbiAgcmV0dXJuIGNvbnZlcmdlZCB8fCBvc2NpbGF0aW5nO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFuaW1hdGlvbkR1cmluZ0xheW91dCAmJiAhdGhpcy5pc1N1YkxheW91dClcbiAge1xuICAgIGlmICh0aGlzLm5vdEFuaW1hdGVkSXRlcmF0aW9ucyA9PSB0aGlzLmFuaW1hdGlvblBlcmlvZClcbiAgICB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMgPSAwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5ub3RBbmltYXRlZEl0ZXJhdGlvbnMrKztcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBTZWN0aW9uOiBGUi1HcmlkIFZhcmlhbnQgUmVwdWxzaW9uIEZvcmNlIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY0dyaWQgPSBmdW5jdGlvbiAoZ3JhcGgpe1xuXG4gIHZhciBzaXplWCA9IDA7IFxuICB2YXIgc2l6ZVkgPSAwO1xuICBcbiAgc2l6ZVggPSBwYXJzZUludChNYXRoLmNlaWwoKGdyYXBoLmdldFJpZ2h0KCkgLSBncmFwaC5nZXRMZWZ0KCkpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzaXplWSA9IHBhcnNlSW50KE1hdGguY2VpbCgoZ3JhcGguZ2V0Qm90dG9tKCkgLSBncmFwaC5nZXRUb3AoKSkgLyB0aGlzLnJlcHVsc2lvblJhbmdlKSk7XG4gIFxuICB2YXIgZ3JpZCA9IG5ldyBBcnJheShzaXplWCk7XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKyl7XG4gICAgZ3JpZFtpXSA9IG5ldyBBcnJheShzaXplWSk7ICAgIFxuICB9XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgc2l6ZVg7IGkrKyl7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IHNpemVZOyBqKyspe1xuICAgICAgZ3JpZFtpXVtqXSA9IG5ldyBBcnJheSgpOyAgICBcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiBncmlkO1xufTtcblxuRkRMYXlvdXQucHJvdG90eXBlLmFkZE5vZGVUb0dyaWQgPSBmdW5jdGlvbiAodiwgbGVmdCwgdG9wKXtcbiAgICBcbiAgdmFyIHN0YXJ0WCA9IDA7XG4gIHZhciBmaW5pc2hYID0gMDtcbiAgdmFyIHN0YXJ0WSA9IDA7XG4gIHZhciBmaW5pc2hZID0gMDtcbiAgXG4gIHN0YXJ0WCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLnggLSBsZWZ0KSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLndpZHRoICsgdi5nZXRSZWN0KCkueCAtIGxlZnQpIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuICBzdGFydFkgPSBwYXJzZUludChNYXRoLmZsb29yKCh2LmdldFJlY3QoKS55IC0gdG9wKSAvIHRoaXMucmVwdWxzaW9uUmFuZ2UpKTtcbiAgZmluaXNoWSA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHYuZ2V0UmVjdCgpLmhlaWdodCArIHYuZ2V0UmVjdCgpLnkgLSB0b3ApIC8gdGhpcy5yZXB1bHNpb25SYW5nZSkpO1xuXG4gIGZvciAodmFyIGkgPSBzdGFydFg7IGkgPD0gZmluaXNoWDsgaSsrKVxuICB7XG4gICAgZm9yICh2YXIgaiA9IHN0YXJ0WTsgaiA8PSBmaW5pc2hZOyBqKyspXG4gICAge1xuICAgICAgdGhpcy5ncmlkW2ldW2pdLnB1c2godik7XG4gICAgICB2LnNldEdyaWRDb29yZGluYXRlcyhzdGFydFgsIGZpbmlzaFgsIHN0YXJ0WSwgZmluaXNoWSk7IFxuICAgIH1cbiAgfSAgXG5cbn07XG5cbkZETGF5b3V0LnByb3RvdHlwZS51cGRhdGVHcmlkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpO1xuICB2YXIgbm9kZUE7XG4gIHZhciBsTm9kZXMgPSB0aGlzLmdldEFsbE5vZGVzKCk7XG4gIFxuICB0aGlzLmdyaWQgPSB0aGlzLmNhbGNHcmlkKHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKSk7ICAgXG5cbiAgLy8gcHV0IGFsbCBub2RlcyB0byBwcm9wZXIgZ3JpZCBjZWxsc1xuICBmb3IgKGkgPSAwOyBpIDwgbE5vZGVzLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgbm9kZUEgPSBsTm9kZXNbaV07XG4gICAgdGhpcy5hZGROb2RlVG9HcmlkKG5vZGVBLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0TGVmdCgpLCB0aGlzLmdyYXBoTWFuYWdlci5nZXRSb290KCkuZ2V0VG9wKCkpO1xuICB9IFxuXG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY3VsYXRlUmVwdWxzaW9uRm9yY2VPZkFOb2RlID0gZnVuY3Rpb24gKG5vZGVBLCBwcm9jZXNzZWROb2RlU2V0KXtcbiAgXG4gIGlmICgodGhpcy50b3RhbEl0ZXJhdGlvbnMgJSBGRExheW91dENvbnN0YW50cy5HUklEX0NBTENVTEFUSU9OX0NIRUNLX1BFUklPRCA9PSAxICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZCkgfHwgKHRoaXMuZ3Jvd1RyZWVJdGVyYXRpb25zICUgMTAgPT0gMSAmJiB0aGlzLmlzVHJlZUdyb3dpbmcpIHx8ICh0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucyAlIDEwID09IDEgJiYgdGhpcy5pc0dyb3d0aEZpbmlzaGVkKSlcbiAge1xuICAgIHZhciBzdXJyb3VuZGluZyA9IG5ldyBTZXQoKTtcbiAgICBub2RlQS5zdXJyb3VuZGluZyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBub2RlQjtcbiAgICB2YXIgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICBcbiAgICBmb3IgKHZhciBpID0gKG5vZGVBLnN0YXJ0WCAtIDEpOyBpIDwgKG5vZGVBLmZpbmlzaFggKyAyKTsgaSsrKVxuICAgIHtcbiAgICAgIGZvciAodmFyIGogPSAobm9kZUEuc3RhcnRZIC0gMSk7IGogPCAobm9kZUEuZmluaXNoWSArIDIpOyBqKyspXG4gICAgICB7XG4gICAgICAgIGlmICghKChpIDwgMCkgfHwgKGogPCAwKSB8fCAoaSA+PSBncmlkLmxlbmd0aCkgfHwgKGogPj0gZ3JpZFswXS5sZW5ndGgpKSlcbiAgICAgICAgeyAgXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBncmlkW2ldW2pdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBub2RlQiA9IGdyaWRbaV1bal1ba107XG5cbiAgICAgICAgICAgIC8vIElmIGJvdGggbm9kZXMgYXJlIG5vdCBtZW1iZXJzIG9mIHRoZSBzYW1lIGdyYXBoLCBcbiAgICAgICAgICAgIC8vIG9yIGJvdGggbm9kZXMgYXJlIHRoZSBzYW1lLCBza2lwLlxuICAgICAgICAgICAgaWYgKChub2RlQS5nZXRPd25lcigpICE9IG5vZGVCLmdldE93bmVyKCkpIHx8IChub2RlQSA9PSBub2RlQikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgcmVwdWxzaW9uIGZvcmNlIGJldHdlZW5cbiAgICAgICAgICAgIC8vIG5vZGVBIGFuZCBub2RlQiBoYXMgYWxyZWFkeSBiZWVuIGNhbGN1bGF0ZWRcbiAgICAgICAgICAgIGlmICghcHJvY2Vzc2VkTm9kZVNldC5oYXMobm9kZUIpICYmICFzdXJyb3VuZGluZy5oYXMobm9kZUIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWCgpLW5vZGVCLmdldENlbnRlclgoKSkgLSBcbiAgICAgICAgICAgICAgICAgICAgKChub2RlQS5nZXRXaWR0aCgpLzIpICsgKG5vZGVCLmdldFdpZHRoKCkvMikpO1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gTWF0aC5hYnMobm9kZUEuZ2V0Q2VudGVyWSgpLW5vZGVCLmdldENlbnRlclkoKSkgLSBcbiAgICAgICAgICAgICAgICAgICAgKChub2RlQS5nZXRIZWlnaHQoKS8yKSArIChub2RlQi5nZXRIZWlnaHQoKS8yKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLy8gaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gbm9kZUEgYW5kIG5vZGVCIFxuICAgICAgICAgICAgICAvLyBpcyBsZXNzIHRoZW4gY2FsY3VsYXRpb24gcmFuZ2VcbiAgICAgICAgICAgICAgaWYgKChkaXN0YW5jZVggPD0gdGhpcy5yZXB1bHNpb25SYW5nZSkgJiYgKGRpc3RhbmNlWSA8PSB0aGlzLnJlcHVsc2lvblJhbmdlKSlcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vdGhlbiBhZGQgbm9kZUIgdG8gc3Vycm91bmRpbmcgb2Ygbm9kZUFcbiAgICAgICAgICAgICAgICBzdXJyb3VuZGluZy5hZGQobm9kZUIpO1xuICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgICAgIFxuICAgICAgfVxuICAgIH1cblxuICAgIG5vZGVBLnN1cnJvdW5kaW5nID0gWy4uLnN1cnJvdW5kaW5nXTtcblx0XG4gIH1cbiAgZm9yIChpID0gMDsgaSA8IG5vZGVBLnN1cnJvdW5kaW5nLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdGhpcy5jYWxjUmVwdWxzaW9uRm9yY2Uobm9kZUEsIG5vZGVBLnN1cnJvdW5kaW5nW2ldKTtcbiAgfVx0XG59O1xuXG5GRExheW91dC5wcm90b3R5cGUuY2FsY1JlcHVsc2lvblJhbmdlID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gMC4wO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFNlY3Rpb246IFRyZWUgUmVkdWN0aW9uIG1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWR1Y2UgdHJlZXMgXG5GRExheW91dC5wcm90b3R5cGUucmVkdWNlVHJlZXMgPSBmdW5jdGlvbiAoKVxue1xuICB2YXIgcHJ1bmVkTm9kZXNBbGwgPSBbXTtcbiAgdmFyIGNvbnRhaW5zTGVhZiA9IHRydWU7XG4gIHZhciBub2RlO1xuICBcbiAgd2hpbGUoY29udGFpbnNMZWFmKSB7XG4gICAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgICB2YXIgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wID0gW107XG4gICAgY29udGFpbnNMZWFmID0gZmFsc2U7XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZSA9IGFsbE5vZGVzW2ldO1xuICAgICAgaWYobm9kZS5nZXRFZGdlcygpLmxlbmd0aCA9PSAxICYmICFub2RlLmdldEVkZ2VzKClbMF0uaXNJbnRlckdyYXBoICYmIG5vZGUuZ2V0Q2hpbGQoKSA9PSBudWxsKXtcbiAgICAgICAgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wLnB1c2goW25vZGUsIG5vZGUuZ2V0RWRnZXMoKVswXSwgbm9kZS5nZXRPd25lcigpXSk7XG4gICAgICAgIGNvbnRhaW5zTGVhZiA9IHRydWU7XG4gICAgICB9ICBcbiAgICB9XG4gICAgaWYoY29udGFpbnNMZWFmID09IHRydWUpe1xuICAgICAgdmFyIHBydW5lZE5vZGVzSW5TdGVwID0gW107XG4gICAgICBmb3IodmFyIGogPSAwOyBqIDwgcHJ1bmVkTm9kZXNJblN0ZXBUZW1wLmxlbmd0aDsgaisrKXtcbiAgICAgICAgaWYocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdWzBdLmdldEVkZ2VzKCkubGVuZ3RoID09IDEpe1xuICAgICAgICAgIHBydW5lZE5vZGVzSW5TdGVwLnB1c2gocHJ1bmVkTm9kZXNJblN0ZXBUZW1wW2pdKTsgIFxuICAgICAgICAgIHBydW5lZE5vZGVzSW5TdGVwVGVtcFtqXVswXS5nZXRPd25lcigpLnJlbW92ZShwcnVuZWROb2Rlc0luU3RlcFRlbXBbal1bMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcnVuZWROb2Rlc0FsbC5wdXNoKHBydW5lZE5vZGVzSW5TdGVwKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsRWRnZXMoKTtcbiAgICB9XG4gIH1cbiAgdGhpcy5wcnVuZWROb2Rlc0FsbCA9IHBydW5lZE5vZGVzQWxsO1xufTtcblxuLy8gR3JvdyB0cmVlIG9uZSBzdGVwIFxuRkRMYXlvdXQucHJvdG90eXBlLmdyb3dUcmVlID0gZnVuY3Rpb24ocHJ1bmVkTm9kZXNBbGwpXG57XG4gIHZhciBsZW5ndGhPZlBydW5lZE5vZGVzSW5TdGVwID0gcHJ1bmVkTm9kZXNBbGwubGVuZ3RoOyBcbiAgdmFyIHBydW5lZE5vZGVzSW5TdGVwID0gcHJ1bmVkTm9kZXNBbGxbbGVuZ3RoT2ZQcnVuZWROb2Rlc0luU3RlcCAtIDFdOyAgXG5cbiAgdmFyIG5vZGVEYXRhOyAgXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBwcnVuZWROb2Rlc0luU3RlcC5sZW5ndGg7IGkrKyl7XG4gICAgbm9kZURhdGEgPSBwcnVuZWROb2Rlc0luU3RlcFtpXTtcblxuICAgIHRoaXMuZmluZFBsYWNlZm9yUHJ1bmVkTm9kZShub2RlRGF0YSk7XG4gICAgXG4gICAgbm9kZURhdGFbMl0uYWRkKG5vZGVEYXRhWzBdKTtcbiAgICBub2RlRGF0YVsyXS5hZGQobm9kZURhdGFbMV0sIG5vZGVEYXRhWzFdLnNvdXJjZSwgbm9kZURhdGFbMV0udGFyZ2V0KTtcbiAgfVxuXG4gIHBydW5lZE5vZGVzQWxsLnNwbGljZShwcnVuZWROb2Rlc0FsbC5sZW5ndGgtMSwgMSk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xufTtcblxuLy8gRmluZCBhbiBhcHByb3ByaWF0ZSBwb3NpdGlvbiB0byByZXBsYWNlIHBydW5lZCBub2RlLCB0aGlzIG1ldGhvZCBjYW4gYmUgaW1wcm92ZWRcbkZETGF5b3V0LnByb3RvdHlwZS5maW5kUGxhY2Vmb3JQcnVuZWROb2RlID0gZnVuY3Rpb24obm9kZURhdGEpe1xuICBcbiAgdmFyIGdyaWRGb3JQcnVuZWROb2RlOyAgXG4gIHZhciBub2RlVG9Db25uZWN0O1xuICB2YXIgcHJ1bmVkTm9kZSA9IG5vZGVEYXRhWzBdO1xuICBpZihwcnVuZWROb2RlID09IG5vZGVEYXRhWzFdLnNvdXJjZSl7XG4gICAgbm9kZVRvQ29ubmVjdCA9IG5vZGVEYXRhWzFdLnRhcmdldDtcbiAgfVxuICBlbHNlIHtcbiAgICBub2RlVG9Db25uZWN0ID0gbm9kZURhdGFbMV0uc291cmNlOyAgXG4gIH1cbiAgdmFyIHN0YXJ0R3JpZFggPSBub2RlVG9Db25uZWN0LnN0YXJ0WDtcbiAgdmFyIGZpbmlzaEdyaWRYID0gbm9kZVRvQ29ubmVjdC5maW5pc2hYO1xuICB2YXIgc3RhcnRHcmlkWSA9IG5vZGVUb0Nvbm5lY3Quc3RhcnRZO1xuICB2YXIgZmluaXNoR3JpZFkgPSBub2RlVG9Db25uZWN0LmZpbmlzaFk7IFxuICBcbiAgdmFyIHVwTm9kZUNvdW50ID0gMDtcbiAgdmFyIGRvd25Ob2RlQ291bnQgPSAwO1xuICB2YXIgcmlnaHROb2RlQ291bnQgPSAwO1xuICB2YXIgbGVmdE5vZGVDb3VudCA9IDA7XG4gIHZhciBjb250cm9sUmVnaW9ucyA9IFt1cE5vZGVDb3VudCwgcmlnaHROb2RlQ291bnQsIGRvd25Ob2RlQ291bnQsIGxlZnROb2RlQ291bnRdXG4gIFxuICBpZihzdGFydEdyaWRZID4gMCl7XG4gICAgZm9yKHZhciBpID0gc3RhcnRHcmlkWDsgaSA8PSBmaW5pc2hHcmlkWDsgaSsrICl7XG4gICAgICBjb250cm9sUmVnaW9uc1swXSArPSAodGhpcy5ncmlkW2ldW3N0YXJ0R3JpZFkgLSAxXS5sZW5ndGggKyB0aGlzLmdyaWRbaV1bc3RhcnRHcmlkWV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKGZpbmlzaEdyaWRYIDwgdGhpcy5ncmlkLmxlbmd0aCAtIDEpe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFk7IGkgPD0gZmluaXNoR3JpZFk7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMV0gKz0gKHRoaXMuZ3JpZFtmaW5pc2hHcmlkWCArIDFdW2ldLmxlbmd0aCArIHRoaXMuZ3JpZFtmaW5pc2hHcmlkWF1baV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKGZpbmlzaEdyaWRZIDwgdGhpcy5ncmlkWzBdLmxlbmd0aCAtIDEpe1xuICAgIGZvcih2YXIgaSA9IHN0YXJ0R3JpZFg7IGkgPD0gZmluaXNoR3JpZFg7IGkrKyApe1xuICAgICAgY29udHJvbFJlZ2lvbnNbMl0gKz0gKHRoaXMuZ3JpZFtpXVtmaW5pc2hHcmlkWSArIDFdLmxlbmd0aCArIHRoaXMuZ3JpZFtpXVtmaW5pc2hHcmlkWV0ubGVuZ3RoIC0gMSk7ICAgXG4gICAgfVxuICB9XG4gIGlmKHN0YXJ0R3JpZFggPiAwKXtcbiAgICBmb3IodmFyIGkgPSBzdGFydEdyaWRZOyBpIDw9IGZpbmlzaEdyaWRZOyBpKysgKXtcbiAgICAgIGNvbnRyb2xSZWdpb25zWzNdICs9ICh0aGlzLmdyaWRbc3RhcnRHcmlkWCAtIDFdW2ldLmxlbmd0aCArIHRoaXMuZ3JpZFtzdGFydEdyaWRYXVtpXS5sZW5ndGggLSAxKTsgICBcbiAgICB9XG4gIH1cbiAgdmFyIG1pbiA9IEludGVnZXIuTUFYX1ZBTFVFO1xuICB2YXIgbWluQ291bnQ7XG4gIHZhciBtaW5JbmRleDtcbiAgZm9yKHZhciBqID0gMDsgaiA8IGNvbnRyb2xSZWdpb25zLmxlbmd0aDsgaisrKXtcbiAgICBpZihjb250cm9sUmVnaW9uc1tqXSA8IG1pbil7XG4gICAgICBtaW4gPSBjb250cm9sUmVnaW9uc1tqXTtcbiAgICAgIG1pbkNvdW50ID0gMTtcbiAgICAgIG1pbkluZGV4ID0gajtcbiAgICB9ICBcbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zW2pdID09IG1pbil7XG4gICAgICBtaW5Db3VudCsrOyAgXG4gICAgfVxuICB9XG4gIFxuICBpZihtaW5Db3VudCA9PSAzICYmIG1pbiA9PSAwKXtcbiAgICBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDE7ICAgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDsgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMzsgIFxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1szXSA9PSAwKXtcbiAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjsgIFxuICAgIH1cbiAgfVxuICBlbHNlIGlmKG1pbkNvdW50ID09IDIgJiYgbWluID09IDApe1xuICAgIHZhciByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzFdID09IDApeztcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAwO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzBdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbMl0gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihjb250cm9sUmVnaW9uc1swXSA9PSAwICYmIGNvbnRyb2xSZWdpb25zWzNdID09IDApe1xuICAgICAgaWYocmFuZG9tID09IDApe1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDA7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IDM7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoY29udHJvbFJlZ2lvbnNbMV0gPT0gMCAmJiBjb250cm9sUmVnaW9uc1syXSA9PSAwKXtcbiAgICAgIGlmKHJhbmRvbSA9PSAwKXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAxO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgZ3JpZEZvclBydW5lZE5vZGUgPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGNvbnRyb2xSZWdpb25zWzFdID09IDAgJiYgY29udHJvbFJlZ2lvbnNbM10gPT0gMCl7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZihyYW5kb20gPT0gMCl7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMjtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGdyaWRGb3JQcnVuZWROb2RlID0gMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZihtaW5Db3VudCA9PSA0ICYmIG1pbiA9PSAwKXtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgZ3JpZEZvclBydW5lZE5vZGUgPSByYW5kb207ICBcbiAgfVxuICBlbHNlIHtcbiAgICBncmlkRm9yUHJ1bmVkTm9kZSA9IG1pbkluZGV4O1xuICB9XG4gIFxuICBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAwKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkgLSBub2RlVG9Db25uZWN0LmdldEhlaWdodCgpLzIgLSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIIC0gcHJ1bmVkTm9kZS5nZXRIZWlnaHQoKS8yKTsgIFxuICB9XG4gIGVsc2UgaWYoZ3JpZEZvclBydW5lZE5vZGUgPT0gMSkge1xuICAgIHBydW5lZE5vZGUuc2V0Q2VudGVyKG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWCgpICsgbm9kZVRvQ29ubmVjdC5nZXRXaWR0aCgpLzIgKyBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICsgcHJ1bmVkTm9kZS5nZXRXaWR0aCgpLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkpOyAgXG4gIH1cbiAgZWxzZSBpZihncmlkRm9yUHJ1bmVkTm9kZSA9PSAyKSB7XG4gICAgcHJ1bmVkTm9kZS5zZXRDZW50ZXIobm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvQ29ubmVjdC5nZXRDZW50ZXJZKCkgKyBub2RlVG9Db25uZWN0LmdldEhlaWdodCgpLzIgKyBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0VER0VfTEVOR1RIICsgcHJ1bmVkTm9kZS5nZXRIZWlnaHQoKS8yKTsgIFxuICB9XG4gIGVsc2UgeyBcbiAgICBwcnVuZWROb2RlLnNldENlbnRlcihub2RlVG9Db25uZWN0LmdldENlbnRlclgoKSAtIG5vZGVUb0Nvbm5lY3QuZ2V0V2lkdGgoKS8yIC0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCAtIHBydW5lZE5vZGUuZ2V0V2lkdGgoKS8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb0Nvbm5lY3QuZ2V0Q2VudGVyWSgpKTsgIFxuICB9XG4gIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvRkRMYXlvdXQuanMiLCJ2YXIgTEVkZ2UgPSByZXF1aXJlKCcuL0xFZGdlJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIEZETGF5b3V0RWRnZShzb3VyY2UsIHRhcmdldCwgdkVkZ2UpIHtcbiAgTEVkZ2UuY2FsbCh0aGlzLCBzb3VyY2UsIHRhcmdldCwgdkVkZ2UpO1xuICB0aGlzLmlkZWFsTGVuZ3RoID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSDtcbn1cblxuRkRMYXlvdXRFZGdlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTEVkZ2UucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMRWRnZSkge1xuICBGRExheW91dEVkZ2VbcHJvcF0gPSBMRWRnZVtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGRExheW91dEVkZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0ZETGF5b3V0RWRnZS5qcyIsInZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcblxuZnVuY3Rpb24gRkRMYXlvdXROb2RlKGdtLCBsb2MsIHNpemUsIHZOb2RlKSB7XG4gIC8vIGFsdGVybmF0aXZlIGNvbnN0cnVjdG9yIGlzIGhhbmRsZWQgaW5zaWRlIExOb2RlXG4gIExOb2RlLmNhbGwodGhpcywgZ20sIGxvYywgc2l6ZSwgdk5vZGUpO1xuICAvL1NwcmluZywgcmVwdWxzaW9uIGFuZCBncmF2aXRhdGlvbmFsIGZvcmNlcyBhY3Rpbmcgb24gdGhpcyBub2RlXG4gIHRoaXMuc3ByaW5nRm9yY2VYID0gMDtcbiAgdGhpcy5zcHJpbmdGb3JjZVkgPSAwO1xuICB0aGlzLnJlcHVsc2lvbkZvcmNlWCA9IDA7XG4gIHRoaXMucmVwdWxzaW9uRm9yY2VZID0gMDtcbiAgdGhpcy5ncmF2aXRhdGlvbkZvcmNlWCA9IDA7XG4gIHRoaXMuZ3Jhdml0YXRpb25Gb3JjZVkgPSAwO1xuICAvL0Ftb3VudCBieSB3aGljaCB0aGlzIG5vZGUgaXMgdG8gYmUgbW92ZWQgaW4gdGhpcyBpdGVyYXRpb25cbiAgdGhpcy5kaXNwbGFjZW1lbnRYID0gMDtcbiAgdGhpcy5kaXNwbGFjZW1lbnRZID0gMDtcblxuICAvL1N0YXJ0IGFuZCBmaW5pc2ggZ3JpZCBjb29yZGluYXRlcyB0aGF0IHRoaXMgbm9kZSBpcyBmYWxsZW4gaW50b1xuICB0aGlzLnN0YXJ0WCA9IDA7XG4gIHRoaXMuZmluaXNoWCA9IDA7XG4gIHRoaXMuc3RhcnRZID0gMDtcbiAgdGhpcy5maW5pc2hZID0gMDtcblxuICAvL0dlb21ldHJpYyBuZWlnaGJvcnMgb2YgdGhpcyBub2RlXG4gIHRoaXMuc3Vycm91bmRpbmcgPSBbXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTE5vZGUucHJvdG90eXBlKTtcblxuZm9yICh2YXIgcHJvcCBpbiBMTm9kZSkge1xuICBGRExheW91dE5vZGVbcHJvcF0gPSBMTm9kZVtwcm9wXTtcbn1cblxuRkRMYXlvdXROb2RlLnByb3RvdHlwZS5zZXRHcmlkQ29vcmRpbmF0ZXMgPSBmdW5jdGlvbiAoX3N0YXJ0WCwgX2ZpbmlzaFgsIF9zdGFydFksIF9maW5pc2hZKVxue1xuICB0aGlzLnN0YXJ0WCA9IF9zdGFydFg7XG4gIHRoaXMuZmluaXNoWCA9IF9maW5pc2hYO1xuICB0aGlzLnN0YXJ0WSA9IF9zdGFydFk7XG4gIHRoaXMuZmluaXNoWSA9IF9maW5pc2hZO1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZETGF5b3V0Tm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvRkRMYXlvdXROb2RlLmpzIiwidmFyIFVuaXF1ZUlER2VuZXJldG9yID0gcmVxdWlyZSgnLi9VbmlxdWVJREdlbmVyZXRvcicpO1xuXG5mdW5jdGlvbiBIYXNoTWFwKCkge1xuICB0aGlzLm1hcCA9IHt9O1xuICB0aGlzLmtleXMgPSBbXTtcbn1cblxuSGFzaE1hcC5wcm90b3R5cGUucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIHRoZUlkID0gVW5pcXVlSURHZW5lcmV0b3IuY3JlYXRlSUQoa2V5KTtcbiAgaWYgKCF0aGlzLmNvbnRhaW5zKHRoZUlkKSkge1xuICAgIHRoaXMubWFwW3RoZUlkXSA9IHZhbHVlO1xuICAgIHRoaXMua2V5cy5wdXNoKGtleSk7XG4gIH1cbn07XG5cbkhhc2hNYXAucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBba2V5XSAhPSBudWxsO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICB2YXIgdGhlSWQgPSBVbmlxdWVJREdlbmVyZXRvci5jcmVhdGVJRChrZXkpO1xuICByZXR1cm4gdGhpcy5tYXBbdGhlSWRdO1xufTtcblxuSGFzaE1hcC5wcm90b3R5cGUua2V5U2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5rZXlzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoTWFwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9IYXNoTWFwLmpzIiwiZnVuY3Rpb24gUmFuZG9tU2VlZCgpIHtcbn1cblJhbmRvbVNlZWQuc2VlZCA9IDE7XG5SYW5kb21TZWVkLnggPSAwO1xuXG5SYW5kb21TZWVkLm5leHREb3VibGUgPSBmdW5jdGlvbiAoKSB7XG4gIFJhbmRvbVNlZWQueCA9IE1hdGguc2luKFJhbmRvbVNlZWQuc2VlZCsrKSAqIDEwMDAwO1xuICByZXR1cm4gUmFuZG9tU2VlZC54IC0gTWF0aC5mbG9vcihSYW5kb21TZWVkLngpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSYW5kb21TZWVkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9SYW5kb21TZWVkLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGltZW5zaW9uRCA9IHJlcXVpcmUoJy4vRGltZW5zaW9uRCcpO1xudmFyIEhhc2hNYXAgPSByZXF1aXJlKCcuL0hhc2hNYXAnKTtcbnZhciBIYXNoU2V0ID0gcmVxdWlyZSgnLi9IYXNoU2V0Jyk7XG52YXIgSUdlb21ldHJ5ID0gcmVxdWlyZSgnLi9JR2VvbWV0cnknKTtcbnZhciBJTWF0aCA9IHJlcXVpcmUoJy4vSU1hdGgnKTtcbnZhciBJbnRlZ2VyID0gcmVxdWlyZSgnLi9JbnRlZ2VyJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL1BvaW50Jyk7XG52YXIgUG9pbnREID0gcmVxdWlyZSgnLi9Qb2ludEQnKTtcbnZhciBSYW5kb21TZWVkID0gcmVxdWlyZSgnLi9SYW5kb21TZWVkJyk7XG52YXIgUmVjdGFuZ2xlRCA9IHJlcXVpcmUoJy4vUmVjdGFuZ2xlRCcpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vVHJhbnNmb3JtJyk7XG52YXIgVW5pcXVlSURHZW5lcmV0b3IgPSByZXF1aXJlKCcuL1VuaXF1ZUlER2VuZXJldG9yJyk7XG52YXIgTEdyYXBoT2JqZWN0ID0gcmVxdWlyZSgnLi9MR3JhcGhPYmplY3QnKTtcbnZhciBMR3JhcGggPSByZXF1aXJlKCcuL0xHcmFwaCcpO1xudmFyIExFZGdlID0gcmVxdWlyZSgnLi9MRWRnZScpO1xudmFyIExHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0xHcmFwaE1hbmFnZXInKTtcbnZhciBMTm9kZSA9IHJlcXVpcmUoJy4vTE5vZGUnKTtcbnZhciBMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xudmFyIExheW91dENvbnN0YW50cyA9IHJlcXVpcmUoJy4vTGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXQgPSByZXF1aXJlKCcuL0ZETGF5b3V0Jyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXRFZGdlID0gcmVxdWlyZSgnLi9GRExheW91dEVkZ2UnKTtcbnZhciBGRExheW91dE5vZGUgPSByZXF1aXJlKCcuL0ZETGF5b3V0Tm9kZScpO1xudmFyIENvU0VDb25zdGFudHMgPSByZXF1aXJlKCcuL0NvU0VDb25zdGFudHMnKTtcbnZhciBDb1NFRWRnZSA9IHJlcXVpcmUoJy4vQ29TRUVkZ2UnKTtcbnZhciBDb1NFR3JhcGggPSByZXF1aXJlKCcuL0NvU0VHcmFwaCcpO1xudmFyIENvU0VHcmFwaE1hbmFnZXIgPSByZXF1aXJlKCcuL0NvU0VHcmFwaE1hbmFnZXInKTtcbnZhciBDb1NFTGF5b3V0ID0gcmVxdWlyZSgnLi9Db1NFTGF5b3V0Jyk7XG52YXIgQ29TRU5vZGUgPSByZXF1aXJlKCcuL0NvU0VOb2RlJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRyZWFkeWBcbiAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbiAgLy8gQ2FsbGVkIG9uIGBsYXlvdXRzdG9wYFxuICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIGluY2x1ZGUgbGFiZWxzIGluIG5vZGUgZGltZW5zaW9uc1xuICBub2RlRGltZW5zaW9uc0luY2x1ZGVMYWJlbHM6IGZhbHNlLFxuICAvLyBudW1iZXIgb2YgdGlja3MgcGVyIGZyYW1lOyBoaWdoZXIgaXMgZmFzdGVyIGJ1dCBtb3JlIGplcmt5XG4gIHJlZnJlc2g6IDMwLFxuICAvLyBXaGV0aGVyIHRvIGZpdCB0aGUgbmV0d29yayB2aWV3IGFmdGVyIHdoZW4gZG9uZVxuICBmaXQ6IHRydWUsXG4gIC8vIFBhZGRpbmcgb24gZml0XG4gIHBhZGRpbmc6IDEwLFxuICAvLyBXaGV0aGVyIHRvIGVuYWJsZSBpbmNyZW1lbnRhbCBtb2RlXG4gIHJhbmRvbWl6ZTogdHJ1ZSxcbiAgLy8gTm9kZSByZXB1bHNpb24gKG5vbiBvdmVybGFwcGluZykgbXVsdGlwbGllclxuICBub2RlUmVwdWxzaW9uOiA0NTAwLFxuICAvLyBJZGVhbCBlZGdlIChub24gbmVzdGVkKSBsZW5ndGhcbiAgaWRlYWxFZGdlTGVuZ3RoOiA1MCxcbiAgLy8gRGl2aXNvciB0byBjb21wdXRlIGVkZ2UgZm9yY2VzXG4gIGVkZ2VFbGFzdGljaXR5OiAwLjQ1LFxuICAvLyBOZXN0aW5nIGZhY3RvciAobXVsdGlwbGllcikgdG8gY29tcHV0ZSBpZGVhbCBlZGdlIGxlbmd0aCBmb3IgbmVzdGVkIGVkZ2VzXG4gIG5lc3RpbmdGYWN0b3I6IDAuMSxcbiAgLy8gR3Jhdml0eSBmb3JjZSAoY29uc3RhbnQpXG4gIGdyYXZpdHk6IDAuMjUsXG4gIC8vIE1heGltdW0gbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybVxuICBudW1JdGVyOiAyNTAwLFxuICAvLyBGb3IgZW5hYmxpbmcgdGlsaW5nXG4gIHRpbGU6IHRydWUsXG4gIC8vIFR5cGUgb2YgbGF5b3V0IGFuaW1hdGlvbi4gVGhlIG9wdGlvbiBzZXQgaXMgeydkdXJpbmcnLCAnZW5kJywgZmFsc2V9XG4gIGFuaW1hdGU6ICdlbmQnLFxuICAvLyBEdXJhdGlvbiBmb3IgYW5pbWF0ZTplbmRcbiAgYW5pbWF0aW9uRHVyYXRpb246IDUwMCxcbiAgLy8gUmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHRoZSB2ZXJ0aWNhbCBzcGFjZSB0byBwdXQgYmV0d2VlbiB0aGUgemVybyBkZWdyZWUgbWVtYmVycyBkdXJpbmcgdGhlIHRpbGluZyBvcGVyYXRpb24oY2FuIGFsc28gYmUgYSBmdW5jdGlvbilcbiAgdGlsaW5nUGFkZGluZ1ZlcnRpY2FsOiAxMCxcbiAgLy8gUmVwcmVzZW50cyB0aGUgYW1vdW50IG9mIHRoZSBob3Jpem9udGFsIHNwYWNlIHRvIHB1dCBiZXR3ZWVuIHRoZSB6ZXJvIGRlZ3JlZSBtZW1iZXJzIGR1cmluZyB0aGUgdGlsaW5nIG9wZXJhdGlvbihjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uKVxuICB0aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDogMTAsXG4gIC8vIEdyYXZpdHkgcmFuZ2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gIGdyYXZpdHlSYW5nZUNvbXBvdW5kOiAxLjUsXG4gIC8vIEdyYXZpdHkgZm9yY2UgKGNvbnN0YW50KSBmb3IgY29tcG91bmRzXG4gIGdyYXZpdHlDb21wb3VuZDogMS4wLFxuICAvLyBHcmF2aXR5IHJhbmdlIChjb25zdGFudClcbiAgZ3Jhdml0eVJhbmdlOiAzLjgsXG4gIC8vIEluaXRpYWwgY29vbGluZyBmYWN0b3IgZm9yIGluY3JlbWVudGFsIGxheW91dFxuICBpbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbDogMC41XG59O1xuXG5mdW5jdGlvbiBleHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gZGVmYXVsdHMpIHtcbiAgICBvYmpbaV0gPSBkZWZhdWx0c1tpXTtcbiAgfVxuXG4gIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgIG9ialtpXSA9IG9wdGlvbnNbaV07XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZnVuY3Rpb24gX0NvU0VMYXlvdXQoX29wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gZXh0ZW5kKGRlZmF1bHRzLCBfb3B0aW9ucyk7XG4gIGdldFVzZXJPcHRpb25zKHRoaXMub3B0aW9ucyk7XG59XG5cbnZhciBnZXRVc2VyT3B0aW9ucyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLm5vZGVSZXB1bHNpb24gIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9SRVBVTFNJT05fU1RSRU5HVEggPSBvcHRpb25zLm5vZGVSZXB1bHNpb247XG4gIGlmIChvcHRpb25zLmlkZWFsRWRnZUxlbmd0aCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9FREdFX0xFTkdUSCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPSBvcHRpb25zLmlkZWFsRWRnZUxlbmd0aDtcbiAgaWYgKG9wdGlvbnMuZWRnZUVsYXN0aWNpdHkgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfU1BSSU5HX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9TUFJJTkdfU1RSRU5HVEggPSBvcHRpb25zLmVkZ2VFbGFzdGljaXR5O1xuICBpZiAob3B0aW9ucy5uZXN0aW5nRmFjdG9yICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5QRVJfTEVWRUxfSURFQUxfRURHRV9MRU5HVEhfRkFDVE9SID0gRkRMYXlvdXRDb25zdGFudHMuUEVSX0xFVkVMX0lERUFMX0VER0VfTEVOR1RIX0ZBQ1RPUiA9IG9wdGlvbnMubmVzdGluZ0ZhY3RvcjtcbiAgaWYgKG9wdGlvbnMuZ3Jhdml0eSAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9HUkFWSVRZX1NUUkVOR1RIID0gb3B0aW9ucy5ncmF2aXR5O1xuICBpZiAob3B0aW9ucy5udW1JdGVyICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5NQVhfSVRFUkFUSU9OUyA9IEZETGF5b3V0Q29uc3RhbnRzLk1BWF9JVEVSQVRJT05TID0gb3B0aW9ucy5udW1JdGVyO1xuICBpZiAob3B0aW9ucy5ncmF2aXR5UmFuZ2UgIT0gbnVsbClcbiAgICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SID0gb3B0aW9ucy5ncmF2aXR5UmFuZ2U7XG4gIGlmKG9wdGlvbnMuZ3Jhdml0eUNvbXBvdW5kICE9IG51bGwpXG4gICAgQ29TRUNvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPTVBPVU5EX0dSQVZJVFlfU1RSRU5HVEggPSBvcHRpb25zLmdyYXZpdHlDb21wb3VuZDtcbiAgaWYob3B0aW9ucy5ncmF2aXR5UmFuZ2VDb21wb3VuZCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUiA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9SQU5HRV9GQUNUT1IgPSBvcHRpb25zLmdyYXZpdHlSYW5nZUNvbXBvdW5kO1xuICBpZiAob3B0aW9ucy5pbml0aWFsRW5lcmd5T25JbmNyZW1lbnRhbCAhPSBudWxsKVxuICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9DT09MSU5HX0ZBQ1RPUl9JTkNSRU1FTlRBTCA9IEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09PTElOR19GQUNUT1JfSU5DUkVNRU5UQUwgPSBvcHRpb25zLmluaXRpYWxFbmVyZ3lPbkluY3JlbWVudGFsO1xuXG4gIENvU0VDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gRkRMYXlvdXRDb25zdGFudHMuTk9ERV9ESU1FTlNJT05TX0lOQ0xVREVfTEFCRUxTID0gTGF5b3V0Q29uc3RhbnRzLk5PREVfRElNRU5TSU9OU19JTkNMVURFX0xBQkVMUyA9IG9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzO1xuICBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0lOQ1JFTUVOVEFMID0gTGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfSU5DUkVNRU5UQUwgPVxuICAgICAgICAgICEob3B0aW9ucy5yYW5kb21pemUpO1xuICBDb1NFQ29uc3RhbnRzLkFOSU1BVEUgPSBGRExheW91dENvbnN0YW50cy5BTklNQVRFID0gTGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPSBvcHRpb25zLmFuaW1hdGU7XG4gIENvU0VDb25zdGFudHMuVElMRSA9IG9wdGlvbnMudGlsZTtcbiAgQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTCA9IFxuICAgICAgICAgIHR5cGVvZiBvcHRpb25zLnRpbGluZ1BhZGRpbmdWZXJ0aWNhbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsLmNhbGwoKSA6IG9wdGlvbnMudGlsaW5nUGFkZGluZ1ZlcnRpY2FsO1xuICBDb1NFQ29uc3RhbnRzLlRJTElOR19QQURESU5HX0hPUklaT05UQUwgPSBcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMudGlsaW5nUGFkZGluZ0hvcml6b250YWwuY2FsbCgpIDogb3B0aW9ucy50aWxpbmdQYWRkaW5nSG9yaXpvbnRhbDtcbn07XG5cbl9Db1NFTGF5b3V0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZWFkeTtcbiAgdmFyIGZyYW1lSWQ7XG4gIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICB2YXIgaWRUb0xOb2RlID0gdGhpcy5pZFRvTE5vZGUgPSB7fTtcbiAgdmFyIGxheW91dCA9IHRoaXMubGF5b3V0ID0gbmV3IENvU0VMYXlvdXQoKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBcbiAgc2VsZi5zdG9wcGVkID0gZmFsc2U7XG5cbiAgdGhpcy5jeSA9IHRoaXMub3B0aW9ucy5jeTtcblxuICB0aGlzLmN5LnRyaWdnZXIoeyB0eXBlOiAnbGF5b3V0c3RhcnQnLCBsYXlvdXQ6IHRoaXMgfSk7XG5cbiAgdmFyIGdtID0gbGF5b3V0Lm5ld0dyYXBoTWFuYWdlcigpO1xuICB0aGlzLmdtID0gZ207XG5cbiAgdmFyIG5vZGVzID0gdGhpcy5vcHRpb25zLmVsZXMubm9kZXMoKTtcbiAgdmFyIGVkZ2VzID0gdGhpcy5vcHRpb25zLmVsZXMuZWRnZXMoKTtcblxuICB0aGlzLnJvb3QgPSBnbS5hZGRSb290KCk7XG4gIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdCh0aGlzLnJvb3QsIHRoaXMuZ2V0VG9wTW9zdE5vZGVzKG5vZGVzKSwgbGF5b3V0KTtcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgIHZhciBzb3VyY2VOb2RlID0gdGhpcy5pZFRvTE5vZGVbZWRnZS5kYXRhKFwic291cmNlXCIpXTtcbiAgICB2YXIgdGFyZ2V0Tm9kZSA9IHRoaXMuaWRUb0xOb2RlW2VkZ2UuZGF0YShcInRhcmdldFwiKV07XG4gICAgaWYoc291cmNlTm9kZS5nZXRFZGdlc0JldHdlZW4odGFyZ2V0Tm9kZSkubGVuZ3RoID09IDApe1xuICAgICAgdmFyIGUxID0gZ20uYWRkKGxheW91dC5uZXdFZGdlKCksIHNvdXJjZU5vZGUsIHRhcmdldE5vZGUpO1xuICAgICAgZTEuaWQgPSBlZGdlLmlkKCk7XG4gICAgfVxuICB9XG4gIFxuICAgdmFyIGdldFBvc2l0aW9ucyA9IGZ1bmN0aW9uKGVsZSwgaSl7XG4gICAgaWYodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgZWxlID0gaTtcbiAgICB9XG4gICAgdmFyIHRoZUlkID0gZWxlLmRhdGEoJ2lkJyk7XG4gICAgdmFyIGxOb2RlID0gc2VsZi5pZFRvTE5vZGVbdGhlSWRdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGxOb2RlLmdldFJlY3QoKS5nZXRDZW50ZXJYKCksXG4gICAgICB5OiBsTm9kZS5nZXRSZWN0KCkuZ2V0Q2VudGVyWSgpXG4gICAgfTtcbiAgfTtcbiAgXG4gIC8qXG4gICAqIFJlcG9zaXRpb24gbm9kZXMgaW4gaXRlcmF0aW9ucyBhbmltYXRlZGx5XG4gICAqL1xuICB2YXIgaXRlcmF0ZUFuaW1hdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaWdzIHRvIHBlcmZvcm0gYWZ0ZXIgbm9kZXMgYXJlIHJlcG9zaXRpb25lZCBvbiBzY3JlZW5cbiAgICB2YXIgYWZ0ZXJSZXBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3B0aW9ucy5maXQpIHtcbiAgICAgICAgb3B0aW9ucy5jeS5maXQob3B0aW9ucy5lbGVzLm5vZGVzKCksIG9wdGlvbnMucGFkZGluZyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmVhZHkpIHtcbiAgICAgICAgcmVhZHkgPSB0cnVlO1xuICAgICAgICBzZWxmLmN5Lm9uZSgnbGF5b3V0cmVhZHknLCBvcHRpb25zLnJlYWR5KTtcbiAgICAgICAgc2VsZi5jeS50cmlnZ2VyKHt0eXBlOiAnbGF5b3V0cmVhZHknLCBsYXlvdXQ6IHNlbGZ9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHZhciB0aWNrc1BlckZyYW1lID0gc2VsZi5vcHRpb25zLnJlZnJlc2g7XG4gICAgdmFyIGlzRG9uZTtcblxuICAgIGZvciggdmFyIGkgPSAwOyBpIDwgdGlja3NQZXJGcmFtZSAmJiAhaXNEb25lOyBpKysgKXtcbiAgICAgIGlzRG9uZSA9IHNlbGYuc3RvcHBlZCB8fCBzZWxmLmxheW91dC50aWNrKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGxheW91dCBpcyBkb25lXG4gICAgaWYgKGlzRG9uZSkge1xuICAgICAgLy8gSWYgdGhlIGxheW91dCBpcyBub3QgYSBzdWJsYXlvdXQgYW5kIGl0IGlzIHN1Y2Nlc3NmdWwgcGVyZm9ybSBwb3N0IGxheW91dC5cbiAgICAgIGlmIChsYXlvdXQuY2hlY2tMYXlvdXRTdWNjZXNzKCkgJiYgIWxheW91dC5pc1N1YkxheW91dCkge1xuICAgICAgICBsYXlvdXQuZG9Qb3N0TGF5b3V0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIElmIGxheW91dCBoYXMgYSB0aWxpbmdQb3N0TGF5b3V0IGZ1bmN0aW9uIHByb3BlcnR5IGNhbGwgaXQuXG4gICAgICBpZiAobGF5b3V0LnRpbGluZ1Bvc3RMYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0LnRpbGluZ1Bvc3RMYXlvdXQoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbGF5b3V0LmlzTGF5b3V0RmluaXNoZWQgPSB0cnVlO1xuICAgICAgXG4gICAgICBzZWxmLm9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhnZXRQb3NpdGlvbnMpO1xuICAgICAgXG4gICAgICBhZnRlclJlcG9zaXRpb24oKTtcbiAgICAgIFxuICAgICAgLy8gdHJpZ2dlciBsYXlvdXRzdG9wIHdoZW4gdGhlIGxheW91dCBzdG9wcyAoZS5nLiBmaW5pc2hlcylcbiAgICAgIHNlbGYuY3kub25lKCdsYXlvdXRzdG9wJywgc2VsZi5vcHRpb25zLnN0b3ApO1xuICAgICAgc2VsZi5jeS50cmlnZ2VyKHsgdHlwZTogJ2xheW91dHN0b3AnLCBsYXlvdXQ6IHNlbGYgfSk7XG5cbiAgICAgIGlmIChmcmFtZUlkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGZyYW1lSWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZWFkeSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB2YXIgYW5pbWF0aW9uRGF0YSA9IHNlbGYubGF5b3V0LmdldFBvc2l0aW9uc0RhdGEoKTsgLy8gR2V0IHBvc2l0aW9ucyBvZiBsYXlvdXQgbm9kZXMgbm90ZSB0aGF0IGFsbCBub2RlcyBtYXkgbm90IGJlIGxheW91dCBub2RlcyBiZWNhdXNlIG9mIHRpbGluZ1xuICAgIFxuICAgIC8vIFBvc2l0aW9uIG5vZGVzLCBmb3IgdGhlIG5vZGVzIHdob3NlIGlkIGRvZXMgbm90IGluY2x1ZGVkIGluIGRhdGEgKGJlY2F1c2UgdGhleSBhcmUgcmVtb3ZlZCBmcm9tIHRoZWlyIHBhcmVudHMgYW5kIGluY2x1ZGVkIGluIGR1bW15IGNvbXBvdW5kcylcbiAgICAvLyB1c2UgcG9zaXRpb24gb2YgdGhlaXIgYW5jZXN0b3JzIG9yIGR1bW15IGFuY2VzdG9yc1xuICAgIG9wdGlvbnMuZWxlcy5ub2RlcygpLnBvc2l0aW9ucyhmdW5jdGlvbiAoZWxlLCBpKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBlbGUgPSBpO1xuICAgICAgfVxuICAgICAgdmFyIHRoZUlkID0gZWxlLmlkKCk7XG4gICAgICB2YXIgcE5vZGUgPSBhbmltYXRpb25EYXRhW3RoZUlkXTtcbiAgICAgIHZhciB0ZW1wID0gZWxlO1xuICAgICAgLy8gSWYgcE5vZGUgaXMgdW5kZWZpbmVkIHNlYXJjaCB1bnRpbCBmaW5kaW5nIHBvc2l0aW9uIGRhdGEgb2YgaXRzIGZpcnN0IGFuY2VzdG9yIChJdCBtYXkgYmUgZHVtbXkgYXMgd2VsbClcbiAgICAgIHdoaWxlIChwTm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHBOb2RlID0gYW5pbWF0aW9uRGF0YVt0ZW1wLmRhdGEoJ3BhcmVudCcpXSB8fCBhbmltYXRpb25EYXRhWydEdW1teUNvbXBvdW5kXycgKyB0ZW1wLmRhdGEoJ3BhcmVudCcpXTtcbiAgICAgICAgYW5pbWF0aW9uRGF0YVt0aGVJZF0gPSBwTm9kZTtcbiAgICAgICAgdGVtcCA9IHRlbXAucGFyZW50KClbMF07XG4gICAgICAgIGlmKHRlbXAgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYocE5vZGUgIT0gbnVsbCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgeDogcE5vZGUueCxcbiAgICAgICAgICB5OiBwTm9kZS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGVsZS54LFxuICAgICAgICAgIHk6IGVsZS55XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhZnRlclJlcG9zaXRpb24oKTtcblxuICAgIGZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaXRlcmF0ZUFuaW1hdGVkKTtcbiAgfTtcbiAgXG4gIC8qXG4gICogTGlzdGVuICdsYXlvdXRzdGFydGVkJyBldmVudCBhbmQgc3RhcnQgYW5pbWF0ZWQgaXRlcmF0aW9uIGlmIGFuaW1hdGUgb3B0aW9uIGlzICdkdXJpbmcnXG4gICovXG4gIGxheW91dC5hZGRMaXN0ZW5lcignbGF5b3V0c3RhcnRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2VsZi5vcHRpb25zLmFuaW1hdGUgPT09ICdkdXJpbmcnKSB7XG4gICAgICBmcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGl0ZXJhdGVBbmltYXRlZCk7XG4gICAgfVxuICB9KTtcbiAgXG4gIGxheW91dC5ydW5MYXlvdXQoKTsgLy8gUnVuIGNvc2UgbGF5b3V0XG4gIFxuICAvKlxuICAgKiBJZiBhbmltYXRlIG9wdGlvbiBpcyBub3QgJ2R1cmluZycgKCdlbmQnIG9yIGZhbHNlKSBwZXJmb3JtIHRoZXNlIGhlcmUgKElmIGl0IGlzICdkdXJpbmcnIHNpbWlsYXIgdGhpbmdzIGFyZSBhbHJlYWR5IHBlcmZvcm1lZClcbiAgICovXG4gIGlmKHRoaXMub3B0aW9ucy5hbmltYXRlICE9PSBcImR1cmluZ1wiKXtcbiAgICBzZWxmLm9wdGlvbnMuZWxlcy5ub2RlcygpLm5vdChcIjpwYXJlbnRcIikubGF5b3V0UG9zaXRpb25zKHNlbGYsIHNlbGYub3B0aW9ucywgZ2V0UG9zaXRpb25zKTsgLy8gVXNlIGxheW91dCBwb3NpdGlvbnMgdG8gcmVwb3NpdGlvbiB0aGUgbm9kZXMgaXQgY29uc2lkZXJzIHRoZSBvcHRpb25zIHBhcmFtZXRlclxuICAgIHJlYWR5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5pbmdcbn07XG5cbi8vR2V0IHRoZSB0b3AgbW9zdCBvbmVzIG9mIGEgbGlzdCBvZiBub2Rlc1xuX0NvU0VMYXlvdXQucHJvdG90eXBlLmdldFRvcE1vc3ROb2RlcyA9IGZ1bmN0aW9uKG5vZGVzKSB7XG4gIHZhciBub2Rlc01hcCA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2Rlc01hcFtub2Rlc1tpXS5pZCgpXSA9IHRydWU7XG4gIH1cbiAgdmFyIHJvb3RzID0gbm9kZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGUsIGkpIHtcbiAgICAgIGlmKHR5cGVvZiBlbGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZWxlID0gaTtcbiAgICAgIH1cbiAgICAgIHZhciBwYXJlbnQgPSBlbGUucGFyZW50KClbMF07XG4gICAgICB3aGlsZShwYXJlbnQgIT0gbnVsbCl7XG4gICAgICAgIGlmKG5vZGVzTWFwW3BhcmVudC5pZCgpXSl7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQoKVswXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICByZXR1cm4gcm9vdHM7XG59O1xuXG5fQ29TRUxheW91dC5wcm90b3R5cGUucHJvY2Vzc0NoaWxkcmVuTGlzdCA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkcmVuLCBsYXlvdXQpIHtcbiAgdmFyIHNpemUgPSBjaGlsZHJlbi5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgdmFyIHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGNoaWxkcmVuX29mX2NoaWxkcmVuID0gdGhlQ2hpbGQuY2hpbGRyZW4oKTtcbiAgICB2YXIgdGhlTm9kZTsgICAgXG5cbiAgICB2YXIgZGltZW5zaW9ucyA9IHRoZUNoaWxkLmxheW91dERpbWVuc2lvbnMoe1xuICAgICAgbm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzOiB0aGlzLm9wdGlvbnMubm9kZURpbWVuc2lvbnNJbmNsdWRlTGFiZWxzXG4gICAgfSk7XG5cbiAgICBpZiAodGhlQ2hpbGQub3V0ZXJXaWR0aCgpICE9IG51bGxcbiAgICAgICAgICAgICYmIHRoZUNoaWxkLm91dGVySGVpZ2h0KCkgIT0gbnVsbCkge1xuICAgICAgdGhlTm9kZSA9IHBhcmVudC5hZGQobmV3IENvU0VOb2RlKGxheW91dC5ncmFwaE1hbmFnZXIsXG4gICAgICAgICAgICAgIG5ldyBQb2ludEQodGhlQ2hpbGQucG9zaXRpb24oJ3gnKSAtIGRpbWVuc2lvbnMudyAvIDIsIHRoZUNoaWxkLnBvc2l0aW9uKCd5JykgLSBkaW1lbnNpb25zLmggLyAyKSxcbiAgICAgICAgICAgICAgbmV3IERpbWVuc2lvbkQocGFyc2VGbG9hdChkaW1lbnNpb25zLncpLCBwYXJzZUZsb2F0KGRpbWVuc2lvbnMuaCkpKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhlTm9kZSA9IHBhcmVudC5hZGQobmV3IENvU0VOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyKSk7XG4gICAgfVxuICAgIC8vIEF0dGFjaCBpZCB0byB0aGUgbGF5b3V0IG5vZGVcbiAgICB0aGVOb2RlLmlkID0gdGhlQ2hpbGQuZGF0YShcImlkXCIpO1xuICAgIC8vIEF0dGFjaCB0aGUgcGFkZGluZ3Mgb2YgY3kgbm9kZSB0byBsYXlvdXQgbm9kZVxuICAgIHRoZU5vZGUucGFkZGluZ0xlZnQgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdUb3AgPSBwYXJzZUludCggdGhlQ2hpbGQuY3NzKCdwYWRkaW5nJykgKTtcbiAgICB0aGVOb2RlLnBhZGRpbmdSaWdodCA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIHRoZU5vZGUucGFkZGluZ0JvdHRvbSA9IHBhcnNlSW50KCB0aGVDaGlsZC5jc3MoJ3BhZGRpbmcnKSApO1xuICAgIFxuICAgIC8vQXR0YWNoIHRoZSBsYWJlbCBwcm9wZXJ0aWVzIHRvIGNvbXBvdW5kIGlmIGxhYmVscyB3aWxsIGJlIGluY2x1ZGVkIGluIG5vZGUgZGltZW5zaW9ucyAgXG4gICAgaWYodGhpcy5vcHRpb25zLm5vZGVEaW1lbnNpb25zSW5jbHVkZUxhYmVscyl7XG4gICAgICBpZih0aGVDaGlsZC5pc1BhcmVudCgpKXtcbiAgICAgICAgICB2YXIgbGFiZWxXaWR0aCA9IHRoZUNoaWxkLmJvdW5kaW5nQm94KHsgaW5jbHVkZUxhYmVsczogdHJ1ZSwgaW5jbHVkZU5vZGVzOiBmYWxzZSB9KS53OyAgICAgICAgICBcbiAgICAgICAgICB2YXIgbGFiZWxIZWlnaHQgPSB0aGVDaGlsZC5ib3VuZGluZ0JveCh7IGluY2x1ZGVMYWJlbHM6IHRydWUsIGluY2x1ZGVOb2RlczogZmFsc2UgfSkuaDtcbiAgICAgICAgICB2YXIgbGFiZWxQb3MgPSB0aGVDaGlsZC5jc3MoXCJ0ZXh0LWhhbGlnblwiKTtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsV2lkdGggPSBsYWJlbFdpZHRoO1xuICAgICAgICAgIHRoZU5vZGUubGFiZWxIZWlnaHQgPSBsYWJlbEhlaWdodDtcbiAgICAgICAgICB0aGVOb2RlLmxhYmVsUG9zID0gbGFiZWxQb3M7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIE1hcCB0aGUgbGF5b3V0IG5vZGVcbiAgICB0aGlzLmlkVG9MTm9kZVt0aGVDaGlsZC5kYXRhKFwiaWRcIildID0gdGhlTm9kZTtcblxuICAgIGlmIChpc05hTih0aGVOb2RlLnJlY3QueCkpIHtcbiAgICAgIHRoZU5vZGUucmVjdC54ID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaXNOYU4odGhlTm9kZS5yZWN0LnkpKSB7XG4gICAgICB0aGVOb2RlLnJlY3QueSA9IDA7XG4gICAgfVxuXG4gICAgLy8gdGhlIGJvdW5kcyBmb3IgdGhlIG5vZGUgdGhhdCBpbmNsdWRlcyBtaW5YLCBtaW5ZLCBtYXhYLiBtYXhZXG4gICAgdmFyIGJvdW5kcztcblxuICAgIC8vIGlmIG5vZGVCb3VuZHMgb3B0aW9uIGlzIGRlZmluZWQgc2V0IGJvdW5kcyBhY2NvcmRpbmdseVxuICAgIGlmICh0aGlzLm9wdGlvbnMubm9kZUJvdW5kcykge1xuICAgICAgYm91bmRzID0gdHlwZW9mIHRoaXMub3B0aW9ucy5ub2RlQm91bmRzID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLm5vZGVCb3VuZHMuY2FsbCh0aGlzLCB0aGVDaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLm5vZGVCb3VuZHM7XG4gICAgfVxuXG4gICAgLy8gaWYgYm91bmRzIGlzIHNldCB0cmFuc21pdCBlYWNoIGJvdW5kIHRvIHRoZSBub2RlXG4gICAgZm9yICh2YXIgcHJvcCBpbiBib3VuZHMpIHtcbiAgICAgIHRoZU5vZGVbcHJvcF0gPSBib3VuZHNbcHJvcF07XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuX29mX2NoaWxkcmVuICE9IG51bGwgJiYgY2hpbGRyZW5fb2ZfY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHRoZU5ld0dyYXBoO1xuICAgICAgdGhlTmV3R3JhcGggPSBsYXlvdXQuZ2V0R3JhcGhNYW5hZ2VyKCkuYWRkKGxheW91dC5uZXdHcmFwaCgpLCB0aGVOb2RlKTtcbiAgICAgIHRoaXMucHJvY2Vzc0NoaWxkcmVuTGlzdCh0aGVOZXdHcmFwaCwgY2hpbGRyZW5fb2ZfY2hpbGRyZW4sIGxheW91dCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBicmllZiA6IGNhbGxlZCBvbiBjb250aW51b3VzIGxheW91dHMgdG8gc3RvcCB0aGVtIGJlZm9yZSB0aGV5IGZpbmlzaFxuICovXG5fQ29TRUxheW91dC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9wcGVkID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpczsgLy8gY2hhaW5pbmdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0KGN5dG9zY2FwZSkge1xuICByZXR1cm4gX0NvU0VMYXlvdXQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9pbmRleC5qcyIsInZhciBGRExheW91dCA9IHJlcXVpcmUoJy4vRkRMYXlvdXQnKTtcbnZhciBDb1NFR3JhcGhNYW5hZ2VyID0gcmVxdWlyZSgnLi9Db1NFR3JhcGhNYW5hZ2VyJyk7XG52YXIgQ29TRUdyYXBoID0gcmVxdWlyZSgnLi9Db1NFR3JhcGgnKTtcbnZhciBDb1NFTm9kZSA9IHJlcXVpcmUoJy4vQ29TRU5vZGUnKTtcbnZhciBDb1NFRWRnZSA9IHJlcXVpcmUoJy4vQ29TRUVkZ2UnKTtcbnZhciBDb1NFQ29uc3RhbnRzID0gcmVxdWlyZSgnLi9Db1NFQ29uc3RhbnRzJyk7XG52YXIgRkRMYXlvdXRDb25zdGFudHMgPSByZXF1aXJlKCcuL0ZETGF5b3V0Q29uc3RhbnRzJyk7XG52YXIgTGF5b3V0Q29uc3RhbnRzID0gcmVxdWlyZSgnLi9MYXlvdXRDb25zdGFudHMnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vUG9pbnQnKTtcbnZhciBQb2ludEQgPSByZXF1aXJlKCcuL1BvaW50RCcpO1xudmFyIExheW91dCA9IHJlcXVpcmUoJy4vTGF5b3V0Jyk7XG52YXIgSW50ZWdlciA9IHJlcXVpcmUoJy4vSW50ZWdlcicpO1xudmFyIElHZW9tZXRyeSA9IHJlcXVpcmUoJy4vSUdlb21ldHJ5Jyk7XG52YXIgTEdyYXBoID0gcmVxdWlyZSgnLi9MR3JhcGgnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL1RyYW5zZm9ybScpO1xuXG5mdW5jdGlvbiBDb1NFTGF5b3V0KCkge1xuICBGRExheW91dC5jYWxsKHRoaXMpO1xuICBcbiAgdGhpcy50b0JlVGlsZWQgPSB7fTsgLy8gTWVtb3JpemUgaWYgYSBub2RlIGlzIHRvIGJlIHRpbGVkIG9yIGlzIHRpbGVkXG59XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShGRExheW91dC5wcm90b3R5cGUpO1xuXG5mb3IgKHZhciBwcm9wIGluIEZETGF5b3V0KSB7XG4gIENvU0VMYXlvdXRbcHJvcF0gPSBGRExheW91dFtwcm9wXTtcbn1cblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3R3JhcGhNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZ20gPSBuZXcgQ29TRUdyYXBoTWFuYWdlcih0aGlzKTtcbiAgdGhpcy5ncmFwaE1hbmFnZXIgPSBnbTtcbiAgcmV0dXJuIGdtO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3R3JhcGggPSBmdW5jdGlvbiAodkdyYXBoKSB7XG4gIHJldHVybiBuZXcgQ29TRUdyYXBoKG51bGwsIHRoaXMuZ3JhcGhNYW5hZ2VyLCB2R3JhcGgpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubmV3Tm9kZSA9IGZ1bmN0aW9uICh2Tm9kZSkge1xuICByZXR1cm4gbmV3IENvU0VOb2RlKHRoaXMuZ3JhcGhNYW5hZ2VyLCB2Tm9kZSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5uZXdFZGdlID0gZnVuY3Rpb24gKHZFZGdlKSB7XG4gIHJldHVybiBuZXcgQ29TRUVkZ2UobnVsbCwgbnVsbCwgdkVkZ2UpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuaW5pdFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIEZETGF5b3V0LnByb3RvdHlwZS5pbml0UGFyYW1ldGVycy5jYWxsKHRoaXMsIGFyZ3VtZW50cyk7XG4gIGlmICghdGhpcy5pc1N1YkxheW91dCkge1xuICAgIGlmIChDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEggPCAxMClcbiAgICB7XG4gICAgICB0aGlzLmlkZWFsRWRnZUxlbmd0aCA9IDEwO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgdGhpcy5pZGVhbEVkZ2VMZW5ndGggPSBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfRURHRV9MRU5HVEg7XG4gICAgfVxuXG4gICAgdGhpcy51c2VTbWFydElkZWFsRWRnZUxlbmd0aENhbGN1bGF0aW9uID1cbiAgICAgICAgICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9VU0VfU01BUlRfSURFQUxfRURHRV9MRU5HVEhfQ0FMQ1VMQVRJT047XG4gICAgdGhpcy5zcHJpbmdDb25zdGFudCA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX1NQUklOR19TVFJFTkdUSDtcbiAgICB0aGlzLnJlcHVsc2lvbkNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfUkVQVUxTSU9OX1NUUkVOR1RIO1xuICAgIHRoaXMuZ3Jhdml0eUNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfR1JBVklUWV9TVFJFTkdUSDtcbiAgICB0aGlzLmNvbXBvdW5kR3Jhdml0eUNvbnN0YW50ID1cbiAgICAgICAgICAgIEZETGF5b3V0Q29uc3RhbnRzLkRFRkFVTFRfQ09NUE9VTkRfR1JBVklUWV9TVFJFTkdUSDtcbiAgICB0aGlzLmdyYXZpdHlSYW5nZUZhY3RvciA9XG4gICAgICAgICAgICBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0dSQVZJVFlfUkFOR0VfRkFDVE9SO1xuICAgIHRoaXMuY29tcG91bmRHcmF2aXR5UmFuZ2VGYWN0b3IgPVxuICAgICAgICAgICAgRkRMYXlvdXRDb25zdGFudHMuREVGQVVMVF9DT01QT1VORF9HUkFWSVRZX1JBTkdFX0ZBQ1RPUjtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY3JlYXRlQmVuZHNBc05lZWRlZCA9IExheW91dENvbnN0YW50cy5ERUZBVUxUX0NSRUFURV9CRU5EU19BU19ORUVERUQ7XG4gIGlmIChjcmVhdGVCZW5kc0FzTmVlZGVkKVxuICB7XG4gICAgdGhpcy5jcmVhdGVCZW5kcG9pbnRzKCk7XG4gICAgdGhpcy5ncmFwaE1hbmFnZXIucmVzZXRBbGxFZGdlcygpO1xuICB9XG5cbiAgdGhpcy5sZXZlbCA9IDA7XG4gIHJldHVybiB0aGlzLmNsYXNzaWNMYXlvdXQoKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsYXNzaWNMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubm9kZXNXaXRoR3Jhdml0eSA9IHRoaXMuY2FsY3VsYXRlTm9kZXNUb0FwcGx5R3Jhdml0YXRpb25UbygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbih0aGlzLm5vZGVzV2l0aEdyYXZpdHkpO1xuICB0aGlzLmNhbGNOb09mQ2hpbGRyZW5Gb3JBbGxOb2RlcygpO1xuICB0aGlzLmdyYXBoTWFuYWdlci5jYWxjTG93ZXN0Q29tbW9uQW5jZXN0b3JzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmNhbGNJbmNsdXNpb25UcmVlRGVwdGhzKCk7XG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLmdldFJvb3QoKS5jYWxjRXN0aW1hdGVkU2l6ZSgpO1xuICB0aGlzLmNhbGNJZGVhbEVkZ2VMZW5ndGhzKCk7XG4gIFxuICBpZiAoIXRoaXMuaW5jcmVtZW50YWwpXG4gIHtcbiAgICB2YXIgZm9yZXN0ID0gdGhpcy5nZXRGbGF0Rm9yZXN0KCk7XG5cbiAgICAvLyBUaGUgZ3JhcGggYXNzb2NpYXRlZCB3aXRoIHRoaXMgbGF5b3V0IGlzIGZsYXQgYW5kIGEgZm9yZXN0XG4gICAgaWYgKGZvcmVzdC5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHRoaXMucG9zaXRpb25Ob2Rlc1JhZGlhbGx5KGZvcmVzdCk7XG4gICAgfVxuICAgIC8vIFRoZSBncmFwaCBhc3NvY2lhdGVkIHdpdGggdGhpcyBsYXlvdXQgaXMgbm90IGZsYXQgb3IgYSBmb3Jlc3RcbiAgICBlbHNlXG4gICAge1xuICAgICAgLy8gUmVkdWNlIHRoZSB0cmVlcyB3aGVuIGluY3JlbWVudGFsIG1vZGUgaXMgbm90IGVuYWJsZWQgYW5kIGdyYXBoIGlzIG5vdCBhIGZvcmVzdCBcbiAgICAgIHRoaXMucmVkdWNlVHJlZXMoKTtcbiAgICAgIC8vIFVwZGF0ZSBub2RlcyB0aGF0IGdyYXZpdHkgd2lsbCBiZSBhcHBsaWVkXG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5yZXNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKCk7XG4gICAgICB2YXIgYWxsTm9kZXMgPSBuZXcgU2V0KHRoaXMuZ2V0QWxsTm9kZXMoKSk7XG4gICAgICB2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcih4ID0+IGFsbE5vZGVzLmhhcyh4KSk7XG4gICAgICB0aGlzLmdyYXBoTWFuYWdlci5zZXRBbGxOb2Rlc1RvQXBwbHlHcmF2aXRhdGlvbihpbnRlcnNlY3Rpb24pO1xuICAgICAgXG4gICAgICB0aGlzLnBvc2l0aW9uTm9kZXNSYW5kb21seSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ2V0QWxsTm9kZXMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICB2YXIgbm9kZSA9IGFsbE5vZGVzW2ldO1xuXG4gICAgaWYgKG5vZGUuaWQgPT09ICdnbHlwaDknKSB7XG4gICAgICBjb25zb2xlLmxvZygnbm9kZSBmb3VuZCcpO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBub2RlIHBvc2l0aW9uIGlzIG5vdCBvYmV5aW5nIHRoZSBib3VuZHMgYWRqdXN0IGl0IGFjY29yZGluZ2x5XG4gICAgaWYgKG5vZGUubWluWCAmJiBub2RlLnJlY3QueCA8IG5vZGUubWluWCkge1xuICAgICAgbm9kZS5yZWN0LnggPSBub2RlLm1pblg7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4WCAmJiBub2RlLnJlY3QueCArIG5vZGUucmVjdC53aWR0aCA+IG5vZGUubWF4WCkge1xuICAgICAgbm9kZS5yZWN0LnggPSBub2RlLm1heFggLSBub2RlLnJlY3Qud2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWluWSAmJiBub2RlLnJlY3QueSA8IG5vZGUubWluWSkge1xuICAgICAgbm9kZS5yZWN0LnkgPSBub2RlLm1pblk7XG4gICAgfVxuXG4gICAgaWYgKG5vZGUubWF4WSAmJiBub2RlLnJlY3QueSArIG5vZGUucmVjdC5oZWlnaHQgPiBub2RlLm1heFkpIHtcbiAgICAgIG5vZGUucmVjdC55ID0gbm9kZS5tYXhZIC0gbm9kZS5yZWN0LmhlaWdodDtcbiAgICB9XG4gIH1cblxuICB0aGlzLmluaXRTcHJpbmdFbWJlZGRlcigpO1xuICB0aGlzLnJ1blNwcmluZ0VtYmVkZGVyKCk7XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudG90YWxJdGVyYXRpb25zKys7XG4gIFxuICBpZiAodGhpcy50b3RhbEl0ZXJhdGlvbnMgPT09IHRoaXMubWF4SXRlcmF0aW9ucyAmJiAhdGhpcy5pc1RyZWVHcm93aW5nICYmICF0aGlzLmlzR3Jvd3RoRmluaXNoZWQpIHtcbiAgICBpZih0aGlzLnBydW5lZE5vZGVzQWxsLmxlbmd0aCA+IDApe1xuICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgIH1cbiAgfVxuICBcbiAgaWYgKHRoaXMudG90YWxJdGVyYXRpb25zICUgRkRMYXlvdXRDb25zdGFudHMuQ09OVkVSR0VOQ0VfQ0hFQ0tfUEVSSU9EID09IDAgICYmICF0aGlzLmlzVHJlZUdyb3dpbmcgJiYgIXRoaXMuaXNHcm93dGhGaW5pc2hlZClcbiAge1xuICAgIGlmICh0aGlzLmlzQ29udmVyZ2VkKCkpXG4gICAge1xuICAgICAgaWYodGhpcy5wcnVuZWROb2Rlc0FsbC5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy5pc1RyZWVHcm93aW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgIFxuICAgICAgfSBcbiAgICB9XG5cbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSB0aGlzLmluaXRpYWxDb29saW5nRmFjdG9yICpcbiAgICAgICAgICAgICgodGhpcy5tYXhJdGVyYXRpb25zIC0gdGhpcy50b3RhbEl0ZXJhdGlvbnMpIC8gdGhpcy5tYXhJdGVyYXRpb25zKTtcbiAgICB0aGlzLmFuaW1hdGlvblBlcmlvZCA9IE1hdGguY2VpbCh0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgKiBNYXRoLnNxcnQodGhpcy5jb29saW5nRmFjdG9yKSk7XG4gIH1cbiAgLy8gT3BlcmF0aW9ucyB3aGlsZSB0cmVlIGlzIGdyb3dpbmcgYWdhaW4gXG4gIGlmKHRoaXMuaXNUcmVlR3Jvd2luZyl7XG4gICAgaWYodGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMgJSAxMCA9PSAwKXtcbiAgICAgIGlmKHRoaXMucHJ1bmVkTm9kZXNBbGwubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7XG4gICAgICAgIHRoaXMuZ3Jvd1RyZWUodGhpcy5wcnVuZWROb2Rlc0FsbCk7XG4gICAgICAgIC8vIFVwZGF0ZSBub2RlcyB0aGF0IGdyYXZpdHkgd2lsbCBiZSBhcHBsaWVkXG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXNUb0FwcGx5R3Jhdml0YXRpb24oKTtcbiAgICAgICAgdmFyIGFsbE5vZGVzID0gbmV3IFNldCh0aGlzLmdldEFsbE5vZGVzKCkpO1xuICAgICAgICB2YXIgaW50ZXJzZWN0aW9uID0gdGhpcy5ub2Rlc1dpdGhHcmF2aXR5LmZpbHRlcih4ID0+IGFsbE5vZGVzLmhhcyh4KSk7XG4gICAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnNldEFsbE5vZGVzVG9BcHBseUdyYXZpdGF0aW9uKGludGVyc2VjdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkKCk7IFxuICAgICAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMOyBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmlzVHJlZUdyb3dpbmcgPSBmYWxzZTsgIFxuICAgICAgICB0aGlzLmlzR3Jvd3RoRmluaXNoZWQgPSB0cnVlOyBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ncm93VHJlZUl0ZXJhdGlvbnMrKztcbiAgfVxuICAvLyBPcGVyYXRpb25zIGFmdGVyIGdyb3d0aCBpcyBmaW5pc2hlZFxuICBpZih0aGlzLmlzR3Jvd3RoRmluaXNoZWQpe1xuICAgIGlmICh0aGlzLmlzQ29udmVyZ2VkKCkpXG4gICAge1xuICAgICAgcmV0dXJuIHRydWU7ICBcbiAgICB9XG4gICAgaWYodGhpcy5hZnRlckdyb3d0aEl0ZXJhdGlvbnMgJSAxMCA9PSAwKXtcbiAgICAgIHRoaXMuZ3JhcGhNYW5hZ2VyLnVwZGF0ZUJvdW5kcygpO1xuICAgICAgdGhpcy51cGRhdGVHcmlkKCk7IFxuICAgIH1cbiAgICB0aGlzLmNvb2xpbmdGYWN0b3IgPSBGRExheW91dENvbnN0YW50cy5ERUZBVUxUX0NPT0xJTkdfRkFDVE9SX0lOQ1JFTUVOVEFMICogKCgxMDAgLSB0aGlzLmFmdGVyR3Jvd3RoSXRlcmF0aW9ucykgLyAxMDApO1xuICAgIHRoaXMuYWZ0ZXJHcm93dGhJdGVyYXRpb25zKys7XG4gIH1cbiAgXG4gIHRoaXMudG90YWxEaXNwbGFjZW1lbnQgPSAwO1xuICB0aGlzLmdyYXBoTWFuYWdlci51cGRhdGVCb3VuZHMoKTtcbiAgdGhpcy5jYWxjU3ByaW5nRm9yY2VzKCk7XG4gIHRoaXMuY2FsY1JlcHVsc2lvbkZvcmNlcygpO1xuICB0aGlzLmNhbGNHcmF2aXRhdGlvbmFsRm9yY2VzKCk7XG4gIHRoaXMubW92ZU5vZGVzKCk7XG4gIHRoaXMuYW5pbWF0ZSgpO1xuICBcbiAgcmV0dXJuIGZhbHNlOyAvLyBMYXlvdXQgaXMgbm90IGVuZGVkIHlldCByZXR1cm4gZmFsc2Vcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldFBvc2l0aW9uc0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFsbE5vZGVzID0gdGhpcy5ncmFwaE1hbmFnZXIuZ2V0QWxsTm9kZXMoKTtcbiAgdmFyIHBEYXRhID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcmVjdCA9IGFsbE5vZGVzW2ldLnJlY3Q7XG4gICAgdmFyIGlkID0gYWxsTm9kZXNbaV0uaWQ7XG4gICAgcERhdGFbaWRdID0ge1xuICAgICAgaWQ6IGlkLFxuICAgICAgeDogcmVjdC5nZXRDZW50ZXJYKCksXG4gICAgICB5OiByZWN0LmdldENlbnRlclkoKSxcbiAgICAgIHc6IHJlY3Qud2lkdGgsXG4gICAgICBoOiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cbiAgXG4gIHJldHVybiBwRGF0YTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnJ1blNwcmluZ0VtYmVkZGVyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2QgPSAyNTtcbiAgdGhpcy5hbmltYXRpb25QZXJpb2QgPSB0aGlzLmluaXRpYWxBbmltYXRpb25QZXJpb2Q7XG4gIHZhciBsYXlvdXRFbmRlZCA9IGZhbHNlO1xuICBcbiAgLy8gSWYgYW1pbmF0ZSBvcHRpb24gaXMgJ2R1cmluZycgc2lnbmFsIHRoYXQgbGF5b3V0IGlzIHN1cHBvc2VkIHRvIHN0YXJ0IGl0ZXJhdGluZ1xuICBpZiAoIEZETGF5b3V0Q29uc3RhbnRzLkFOSU1BVEUgPT09ICdkdXJpbmcnICkge1xuICAgIHRoaXMuZW1pdCgnbGF5b3V0c3RhcnRlZCcpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIElmIGFtaW5hdGUgb3B0aW9uIGlzICdkdXJpbmcnIHRpY2soKSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbiBpbmRleC5qc1xuICAgIHdoaWxlICghbGF5b3V0RW5kZWQpIHtcbiAgICAgIGxheW91dEVuZGVkID0gdGhpcy50aWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5ncmFwaE1hbmFnZXIudXBkYXRlQm91bmRzKCk7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGN1bGF0ZU5vZGVzVG9BcHBseUdyYXZpdGF0aW9uVG8gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlTGlzdCA9IFtdO1xuICB2YXIgZ3JhcGg7XG5cbiAgdmFyIGdyYXBocyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEdyYXBocygpO1xuICB2YXIgc2l6ZSA9IGdyYXBocy5sZW5ndGg7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKVxuICB7XG4gICAgZ3JhcGggPSBncmFwaHNbaV07XG5cbiAgICBncmFwaC51cGRhdGVDb25uZWN0ZWQoKTtcblxuICAgIGlmICghZ3JhcGguaXNDb25uZWN0ZWQpXG4gICAge1xuICAgICAgbm9kZUxpc3QgPSBub2RlTGlzdC5jb25jYXQoZ3JhcGguZ2V0Tm9kZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVMaXN0O1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY2FsY05vT2ZDaGlsZHJlbkZvckFsbE5vZGVzID0gZnVuY3Rpb24gKClcbntcbiAgdmFyIG5vZGU7XG4gIHZhciBhbGxOb2RlcyA9IHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbE5vZGVzKCk7XG4gIFxuICBmb3IodmFyIGkgPSAwOyBpIDwgYWxsTm9kZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICAgIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICAgIG5vZGUubm9PZkNoaWxkcmVuID0gbm9kZS5nZXROb09mQ2hpbGRyZW4oKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuY3JlYXRlQmVuZHBvaW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVkZ2VzID0gW107XG4gIGVkZ2VzID0gZWRnZXMuY29uY2F0KHRoaXMuZ3JhcGhNYW5hZ2VyLmdldEFsbEVkZ2VzKCkpO1xuICB2YXIgdmlzaXRlZCA9IG5ldyBIYXNoU2V0KCk7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuXG4gICAgaWYgKCF2aXNpdGVkLmNvbnRhaW5zKGVkZ2UpKVxuICAgIHtcbiAgICAgIHZhciBzb3VyY2UgPSBlZGdlLmdldFNvdXJjZSgpO1xuICAgICAgdmFyIHRhcmdldCA9IGVkZ2UuZ2V0VGFyZ2V0KCk7XG5cbiAgICAgIGlmIChzb3VyY2UgPT0gdGFyZ2V0KVxuICAgICAge1xuICAgICAgICBlZGdlLmdldEJlbmRwb2ludHMoKS5wdXNoKG5ldyBQb2ludEQoKSk7XG4gICAgICAgIGVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgdGhpcy5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyhlZGdlKTtcbiAgICAgICAgdmlzaXRlZC5hZGQoZWRnZSk7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgIHZhciBlZGdlTGlzdCA9IFtdO1xuXG4gICAgICAgIGVkZ2VMaXN0ID0gZWRnZUxpc3QuY29uY2F0KHNvdXJjZS5nZXRFZGdlTGlzdFRvTm9kZSh0YXJnZXQpKTtcbiAgICAgICAgZWRnZUxpc3QgPSBlZGdlTGlzdC5jb25jYXQodGFyZ2V0LmdldEVkZ2VMaXN0VG9Ob2RlKHNvdXJjZSkpO1xuXG4gICAgICAgIGlmICghdmlzaXRlZC5jb250YWlucyhlZGdlTGlzdFswXSkpXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZWRnZUxpc3QubGVuZ3RoID4gMSlcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBlZGdlTGlzdC5sZW5ndGg7IGsrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIG11bHRpRWRnZSA9IGVkZ2VMaXN0W2tdO1xuICAgICAgICAgICAgICBtdWx0aUVkZ2UuZ2V0QmVuZHBvaW50cygpLnB1c2gobmV3IFBvaW50RCgpKTtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVEdW1teU5vZGVzRm9yQmVuZHBvaW50cyhtdWx0aUVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2aXNpdGVkLmFkZEFsbChsaXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2aXNpdGVkLnNpemUoKSA9PSBlZGdlcy5sZW5ndGgpXG4gICAge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5wb3NpdGlvbk5vZGVzUmFkaWFsbHkgPSBmdW5jdGlvbiAoZm9yZXN0KSB7XG4gIC8vIFdlIHRpbGUgdGhlIHRyZWVzIHRvIGEgZ3JpZCByb3cgYnkgcm93OyBmaXJzdCB0cmVlIHN0YXJ0cyBhdCAoMCwwKVxuICB2YXIgY3VycmVudFN0YXJ0aW5nUG9pbnQgPSBuZXcgUG9pbnQoMCwgMCk7XG4gIHZhciBudW1iZXJPZkNvbHVtbnMgPSBNYXRoLmNlaWwoTWF0aC5zcXJ0KGZvcmVzdC5sZW5ndGgpKTtcbiAgdmFyIGhlaWdodCA9IDA7XG4gIHZhciBjdXJyZW50WSA9IDA7XG4gIHZhciBjdXJyZW50WCA9IDA7XG4gIHZhciBwb2ludCA9IG5ldyBQb2ludEQoMCwgMCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3Jlc3QubGVuZ3RoOyBpKyspXG4gIHtcbiAgICBpZiAoaSAlIG51bWJlck9mQ29sdW1ucyA9PSAwKVxuICAgIHtcbiAgICAgIC8vIFN0YXJ0IG9mIGEgbmV3IHJvdywgbWFrZSB0aGUgeCBjb29yZGluYXRlIDAsIGluY3JlbWVudCB0aGVcbiAgICAgIC8vIHkgY29vcmRpbmF0ZSB3aXRoIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBwcmV2aW91cyByb3dcbiAgICAgIGN1cnJlbnRYID0gMDtcbiAgICAgIGN1cnJlbnRZID0gaGVpZ2h0O1xuXG4gICAgICBpZiAoaSAhPSAwKVxuICAgICAge1xuICAgICAgICBjdXJyZW50WSArPSBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT047XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHRyZWUgPSBmb3Jlc3RbaV07XG5cbiAgICAvLyBGaW5kIHRoZSBjZW50ZXIgb2YgdGhlIHRyZWVcbiAgICB2YXIgY2VudGVyTm9kZSA9IExheW91dC5maW5kQ2VudGVyT2ZUcmVlKHRyZWUpO1xuXG4gICAgLy8gU2V0IHRoZSBzdGFyaW5nIHBvaW50IG9mIHRoZSBuZXh0IHRyZWVcbiAgICBjdXJyZW50U3RhcnRpbmdQb2ludC54ID0gY3VycmVudFg7XG4gICAgY3VycmVudFN0YXJ0aW5nUG9pbnQueSA9IGN1cnJlbnRZO1xuXG4gICAgLy8gRG8gYSByYWRpYWwgbGF5b3V0IHN0YXJ0aW5nIHdpdGggdGhlIGNlbnRlclxuICAgIHBvaW50ID1cbiAgICAgICAgICAgIENvU0VMYXlvdXQucmFkaWFsTGF5b3V0KHRyZWUsIGNlbnRlck5vZGUsIGN1cnJlbnRTdGFydGluZ1BvaW50KTtcblxuICAgIGlmIChwb2ludC55ID4gaGVpZ2h0KVxuICAgIHtcbiAgICAgIGhlaWdodCA9IE1hdGguZmxvb3IocG9pbnQueSk7XG4gICAgfVxuXG4gICAgY3VycmVudFggPSBNYXRoLmZsb29yKHBvaW50LnggKyBDb1NFQ29uc3RhbnRzLkRFRkFVTFRfQ09NUE9ORU5UX1NFUEVSQVRJT04pO1xuICB9XG5cbiAgdGhpcy50cmFuc2Zvcm0oXG4gICAgICAgICAgbmV3IFBvaW50RChMYXlvdXRDb25zdGFudHMuV09STERfQ0VOVEVSX1ggLSBwb2ludC54IC8gMixcbiAgICAgICAgICAgICAgICAgIExheW91dENvbnN0YW50cy5XT1JMRF9DRU5URVJfWSAtIHBvaW50LnkgLyAyKSk7XG59O1xuXG5Db1NFTGF5b3V0LnJhZGlhbExheW91dCA9IGZ1bmN0aW9uICh0cmVlLCBjZW50ZXJOb2RlLCBzdGFydGluZ1BvaW50KSB7XG4gIHZhciByYWRpYWxTZXAgPSBNYXRoLm1heCh0aGlzLm1heERpYWdvbmFsSW5UcmVlKHRyZWUpLFxuICAgICAgICAgIENvU0VDb25zdGFudHMuREVGQVVMVF9SQURJQUxfU0VQQVJBVElPTik7XG4gIENvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0KGNlbnRlck5vZGUsIG51bGwsIDAsIDM1OSwgMCwgcmFkaWFsU2VwKTtcbiAgdmFyIGJvdW5kcyA9IExHcmFwaC5jYWxjdWxhdGVCb3VuZHModHJlZSk7XG5cbiAgdmFyIHRyYW5zZm9ybSA9IG5ldyBUcmFuc2Zvcm0oKTtcbiAgdHJhbnNmb3JtLnNldERldmljZU9yZ1goYm91bmRzLmdldE1pblgoKSk7XG4gIHRyYW5zZm9ybS5zZXREZXZpY2VPcmdZKGJvdW5kcy5nZXRNaW5ZKCkpO1xuICB0cmFuc2Zvcm0uc2V0V29ybGRPcmdYKHN0YXJ0aW5nUG9pbnQueCk7XG4gIHRyYW5zZm9ybS5zZXRXb3JsZE9yZ1koc3RhcnRpbmdQb2ludC55KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspXG4gIHtcbiAgICB2YXIgbm9kZSA9IHRyZWVbaV07XG4gICAgbm9kZS50cmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgfVxuXG4gIHZhciBib3R0b21SaWdodCA9XG4gICAgICAgICAgbmV3IFBvaW50RChib3VuZHMuZ2V0TWF4WCgpLCBib3VuZHMuZ2V0TWF4WSgpKTtcblxuICByZXR1cm4gdHJhbnNmb3JtLmludmVyc2VUcmFuc2Zvcm1Qb2ludChib3R0b21SaWdodCk7XG59O1xuXG5Db1NFTGF5b3V0LmJyYW5jaFJhZGlhbExheW91dCA9IGZ1bmN0aW9uIChub2RlLCBwYXJlbnRPZk5vZGUsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBkaXN0YW5jZSwgcmFkaWFsU2VwYXJhdGlvbikge1xuICAvLyBGaXJzdCwgcG9zaXRpb24gdGhpcyBub2RlIGJ5IGZpbmRpbmcgaXRzIGFuZ2xlLlxuICB2YXIgaGFsZkludGVydmFsID0gKChlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpICsgMSkgLyAyO1xuXG4gIGlmIChoYWxmSW50ZXJ2YWwgPCAwKVxuICB7XG4gICAgaGFsZkludGVydmFsICs9IDE4MDtcbiAgfVxuXG4gIHZhciBub2RlQW5nbGUgPSAoaGFsZkludGVydmFsICsgc3RhcnRBbmdsZSkgJSAzNjA7XG4gIHZhciB0ZXRhID0gKG5vZGVBbmdsZSAqIElHZW9tZXRyeS5UV09fUEkpIC8gMzYwO1xuXG4gIC8vIE1ha2UgcG9sYXIgdG8gamF2YSBjb3JkaW5hdGUgY29udmVyc2lvbi5cbiAgdmFyIGNvc190ZXRhID0gTWF0aC5jb3ModGV0YSk7XG4gIHZhciB4XyA9IGRpc3RhbmNlICogTWF0aC5jb3ModGV0YSk7XG4gIHZhciB5XyA9IGRpc3RhbmNlICogTWF0aC5zaW4odGV0YSk7XG5cbiAgbm9kZS5zZXRDZW50ZXIoeF8sIHlfKTtcblxuICAvLyBUcmF2ZXJzZSBhbGwgbmVpZ2hib3JzIG9mIHRoaXMgbm9kZSBhbmQgcmVjdXJzaXZlbHkgY2FsbCB0aGlzXG4gIC8vIGZ1bmN0aW9uLlxuICB2YXIgbmVpZ2hib3JFZGdlcyA9IFtdO1xuICBuZWlnaGJvckVkZ2VzID0gbmVpZ2hib3JFZGdlcy5jb25jYXQobm9kZS5nZXRFZGdlcygpKTtcbiAgdmFyIGNoaWxkQ291bnQgPSBuZWlnaGJvckVkZ2VzLmxlbmd0aDtcblxuICBpZiAocGFyZW50T2ZOb2RlICE9IG51bGwpXG4gIHtcbiAgICBjaGlsZENvdW50LS07XG4gIH1cblxuICB2YXIgYnJhbmNoQ291bnQgPSAwO1xuXG4gIHZhciBpbmNFZGdlc0NvdW50ID0gbmVpZ2hib3JFZGdlcy5sZW5ndGg7XG4gIHZhciBzdGFydEluZGV4O1xuXG4gIHZhciBlZGdlcyA9IG5vZGUuZ2V0RWRnZXNCZXR3ZWVuKHBhcmVudE9mTm9kZSk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIGVkZ2VzLCBwcnVuZSB0aGVtIHVudGlsIHRoZXJlIHJlbWFpbnMgb25seSBvbmVcbiAgLy8gZWRnZS5cbiAgd2hpbGUgKGVkZ2VzLmxlbmd0aCA+IDEpXG4gIHtcbiAgICAvL25laWdoYm9yRWRnZXMucmVtb3ZlKGVkZ2VzLnJlbW92ZSgwKSk7XG4gICAgdmFyIHRlbXAgPSBlZGdlc1swXTtcbiAgICBlZGdlcy5zcGxpY2UoMCwgMSk7XG4gICAgdmFyIGluZGV4ID0gbmVpZ2hib3JFZGdlcy5pbmRleE9mKHRlbXApO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBuZWlnaGJvckVkZ2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGluY0VkZ2VzQ291bnQtLTtcbiAgICBjaGlsZENvdW50LS07XG4gIH1cblxuICBpZiAocGFyZW50T2ZOb2RlICE9IG51bGwpXG4gIHtcbiAgICAvL2Fzc2VydCBlZGdlcy5sZW5ndGggPT0gMTtcbiAgICBzdGFydEluZGV4ID0gKG5laWdoYm9yRWRnZXMuaW5kZXhPZihlZGdlc1swXSkgKyAxKSAlIGluY0VkZ2VzQ291bnQ7XG4gIH1cbiAgZWxzZVxuICB7XG4gICAgc3RhcnRJbmRleCA9IDA7XG4gIH1cblxuICB2YXIgc3RlcEFuZ2xlID0gTWF0aC5hYnMoZW5kQW5nbGUgLSBzdGFydEFuZ2xlKSAvIGNoaWxkQ291bnQ7XG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgICAgICAgYnJhbmNoQ291bnQgIT0gY2hpbGRDb3VudDtcbiAgICAgICAgICBpID0gKCsraSkgJSBpbmNFZGdlc0NvdW50KVxuICB7XG4gICAgdmFyIGN1cnJlbnROZWlnaGJvciA9XG4gICAgICAgICAgICBuZWlnaGJvckVkZ2VzW2ldLmdldE90aGVyRW5kKG5vZGUpO1xuXG4gICAgLy8gRG9uJ3QgYmFjayB0cmF2ZXJzZSB0byByb290IG5vZGUgaW4gY3VycmVudCB0cmVlLlxuICAgIGlmIChjdXJyZW50TmVpZ2hib3IgPT0gcGFyZW50T2ZOb2RlKVxuICAgIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBjaGlsZFN0YXJ0QW5nbGUgPVxuICAgICAgICAgICAgKHN0YXJ0QW5nbGUgKyBicmFuY2hDb3VudCAqIHN0ZXBBbmdsZSkgJSAzNjA7XG4gICAgdmFyIGNoaWxkRW5kQW5nbGUgPSAoY2hpbGRTdGFydEFuZ2xlICsgc3RlcEFuZ2xlKSAlIDM2MDtcblxuICAgIENvU0VMYXlvdXQuYnJhbmNoUmFkaWFsTGF5b3V0KGN1cnJlbnROZWlnaGJvcixcbiAgICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgICBjaGlsZFN0YXJ0QW5nbGUsIGNoaWxkRW5kQW5nbGUsXG4gICAgICAgICAgICBkaXN0YW5jZSArIHJhZGlhbFNlcGFyYXRpb24sIHJhZGlhbFNlcGFyYXRpb24pO1xuXG4gICAgYnJhbmNoQ291bnQrKztcbiAgfVxufTtcblxuQ29TRUxheW91dC5tYXhEaWFnb25hbEluVHJlZSA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gIHZhciBtYXhEaWFnb25hbCA9IEludGVnZXIuTUlOX1ZBTFVFO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKylcbiAge1xuICAgIHZhciBub2RlID0gdHJlZVtpXTtcbiAgICB2YXIgZGlhZ29uYWwgPSBub2RlLmdldERpYWdvbmFsKCk7XG5cbiAgICBpZiAoZGlhZ29uYWwgPiBtYXhEaWFnb25hbClcbiAgICB7XG4gICAgICBtYXhEaWFnb25hbCA9IGRpYWdvbmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYXhEaWFnb25hbDtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNhbGNSZXB1bHNpb25SYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gZm9ybXVsYSBpcyAyIHggKGxldmVsICsgMSkgeCBpZGVhbEVkZ2VMZW5ndGhcbiAgcmV0dXJuICgyICogKHRoaXMubGV2ZWwgKyAxKSAqIHRoaXMuaWRlYWxFZGdlTGVuZ3RoKTtcbn07XG5cbi8vIFRpbGluZyBtZXRob2RzXG5cbi8vIEdyb3VwIHplcm8gZGVncmVlIG1lbWJlcnMgd2hvc2UgcGFyZW50cyBhcmUgbm90IHRvIGJlIHRpbGVkLCBjcmVhdGUgZHVtbXkgcGFyZW50cyB3aGVyZSBuZWVkZWQgYW5kIGZpbGwgbWVtYmVyR3JvdXBzIGJ5IHRoZWlyIGR1bW1wIHBhcmVudCBpZCdzXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5ncm91cFplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIC8vIGFycmF5IG9mIFtwYXJlbnRfaWQgeCBvbmVEZWdyZWVOb2RlX2lkXVxuICB2YXIgdGVtcE1lbWJlckdyb3VwcyA9IHt9OyAvLyBBIHRlbXBvcmFyeSBtYXAgb2YgcGFyZW50IG5vZGUgYW5kIGl0cyB6ZXJvIGRlZ3JlZSBtZW1iZXJzXG4gIHRoaXMubWVtYmVyR3JvdXBzID0ge307IC8vIEEgbWFwIG9mIGR1bW15IHBhcmVudCBub2RlIGFuZCBpdHMgemVybyBkZWdyZWUgbWVtYmVycyB3aG9zZSBwYXJlbnRzIGFyZSBub3QgdG8gYmUgdGlsZWRcbiAgdGhpcy5pZFRvRHVtbXlOb2RlID0ge307IC8vIEEgbWFwIG9mIGlkIHRvIGR1bW15IG5vZGUgXG4gIFxuICB2YXIgemVyb0RlZ3JlZSA9IFtdOyAvLyBMaXN0IG9mIHplcm8gZGVncmVlIG5vZGVzIHdob3NlIHBhcmVudHMgYXJlIG5vdCB0byBiZSB0aWxlZFxuICB2YXIgYWxsTm9kZXMgPSB0aGlzLmdyYXBoTWFuYWdlci5nZXRBbGxOb2RlcygpO1xuXG4gIC8vIEZpbGwgemVybyBkZWdyZWUgbGlzdFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBhbGxOb2Rlc1tpXTtcbiAgICB2YXIgcGFyZW50ID0gbm9kZS5nZXRQYXJlbnQoKTtcbiAgICAvLyBJZiBhIG5vZGUgaGFzIHplcm8gZGVncmVlIGFuZCBpdHMgcGFyZW50IGlzIG5vdCB0byBiZSB0aWxlZCBpZiBleGlzdHMgYWRkIHRoYXQgbm9kZSB0byB6ZXJvRGVncmVzIGxpc3RcbiAgICBpZiAodGhpcy5nZXROb2RlRGVncmVlV2l0aENoaWxkcmVuKG5vZGUpID09PSAwICYmICggcGFyZW50LmlkID09IHVuZGVmaW5lZCB8fCAhdGhpcy5nZXRUb0JlVGlsZWQocGFyZW50KSApICkge1xuICAgICAgemVyb0RlZ3JlZS5wdXNoKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENyZWF0ZSBhIG1hcCBvZiBwYXJlbnQgbm9kZSBhbmQgaXRzIHplcm8gZGVncmVlIG1lbWJlcnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB6ZXJvRGVncmVlLmxlbmd0aDsgaSsrKVxuICB7XG4gICAgdmFyIG5vZGUgPSB6ZXJvRGVncmVlW2ldOyAvLyBaZXJvIGRlZ3JlZSBub2RlIGl0c2VsZlxuICAgIHZhciBwX2lkID0gbm9kZS5nZXRQYXJlbnQoKS5pZDsgLy8gUGFyZW50IGlkXG5cbiAgICBpZiAodHlwZW9mIHRlbXBNZW1iZXJHcm91cHNbcF9pZF0gPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID0gW107XG5cbiAgICB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXS5jb25jYXQobm9kZSk7IC8vIFB1c2ggbm9kZSB0byB0aGUgbGlzdCBiZWxvbmdzIHRvIGl0cyBwYXJlbnQgaW4gdGVtcE1lbWJlckdyb3Vwc1xuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIGF0IGxlYXN0IHR3byBub2RlcyBhdCBhIGxldmVsLCBjcmVhdGUgYSBkdW1teSBjb21wb3VuZCBmb3IgdGhlbVxuICBPYmplY3Qua2V5cyh0ZW1wTWVtYmVyR3JvdXBzKS5mb3JFYWNoKGZ1bmN0aW9uKHBfaWQpIHtcbiAgICBpZiAodGVtcE1lbWJlckdyb3Vwc1twX2lkXS5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZHVtbXlDb21wb3VuZElkID0gXCJEdW1teUNvbXBvdW5kX1wiICsgcF9pZDsgLy8gVGhlIGlkIG9mIGR1bW15IGNvbXBvdW5kIHdoaWNoIHdpbGwgYmUgY3JlYXRlZCBzb29uXG4gICAgICBzZWxmLm1lbWJlckdyb3Vwc1tkdW1teUNvbXBvdW5kSWRdID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXTsgLy8gQWRkIGR1bW15IGNvbXBvdW5kIHRvIG1lbWJlckdyb3Vwc1xuXG4gICAgICB2YXIgcGFyZW50ID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXVswXS5nZXRQYXJlbnQoKTsgLy8gVGhlIHBhcmVudCBvZiB6ZXJvIGRlZ3JlZSBub2RlcyB3aWxsIGJlIHRoZSBwYXJlbnQgb2YgbmV3IGR1bW15IGNvbXBvdW5kXG5cbiAgICAgIC8vIENyZWF0ZSBhIGR1bW15IGNvbXBvdW5kIHdpdGggY2FsY3VsYXRlZCBpZFxuICAgICAgdmFyIGR1bW15Q29tcG91bmQgPSBuZXcgQ29TRU5vZGUoc2VsZi5ncmFwaE1hbmFnZXIpO1xuICAgICAgZHVtbXlDb21wb3VuZC5pZCA9IGR1bW15Q29tcG91bmRJZDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ0xlZnQgPSBwYXJlbnQucGFkZGluZ0xlZnQgfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ1JpZ2h0ID0gcGFyZW50LnBhZGRpbmdSaWdodCB8fCAwO1xuICAgICAgZHVtbXlDb21wb3VuZC5wYWRkaW5nQm90dG9tID0gcGFyZW50LnBhZGRpbmdCb3R0b20gfHwgMDtcbiAgICAgIGR1bW15Q29tcG91bmQucGFkZGluZ1RvcCA9IHBhcmVudC5wYWRkaW5nVG9wIHx8IDA7XG4gICAgICBcbiAgICAgIHNlbGYuaWRUb0R1bW15Tm9kZVtkdW1teUNvbXBvdW5kSWRdID0gZHVtbXlDb21wb3VuZDtcbiAgICAgIFxuICAgICAgdmFyIGR1bW15UGFyZW50R3JhcGggPSBzZWxmLmdldEdyYXBoTWFuYWdlcigpLmFkZChzZWxmLm5ld0dyYXBoKCksIGR1bW15Q29tcG91bmQpO1xuICAgICAgdmFyIHBhcmVudEdyYXBoID0gcGFyZW50LmdldENoaWxkKCk7XG5cbiAgICAgIC8vIEFkZCBkdW1teSBjb21wb3VuZCB0byBwYXJlbnQgdGhlIGdyYXBoXG4gICAgICBwYXJlbnRHcmFwaC5hZGQoZHVtbXlDb21wb3VuZCk7XG5cbiAgICAgIC8vIEZvciBlYWNoIHplcm8gZGVncmVlIG5vZGUgaW4gdGhpcyBsZXZlbCByZW1vdmUgaXQgZnJvbSBpdHMgcGFyZW50IGdyYXBoIGFuZCBhZGQgaXQgdG8gdGhlIGdyYXBoIG9mIGR1bW15IHBhcmVudFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wTWVtYmVyR3JvdXBzW3BfaWRdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gdGVtcE1lbWJlckdyb3Vwc1twX2lkXVtpXTtcbiAgICAgICAgXG4gICAgICAgIHBhcmVudEdyYXBoLnJlbW92ZShub2RlKTtcbiAgICAgICAgZHVtbXlQYXJlbnRHcmFwaC5hZGQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgY2hpbGRHcmFwaE1hcCA9IHt9O1xuICB2YXIgaWRUb05vZGUgPSB7fTtcblxuICAvLyBHZXQgY29tcG91bmQgb3JkZXJpbmcgYnkgZmluZGluZyB0aGUgaW5uZXIgb25lIGZpcnN0XG4gIHRoaXMucGVyZm9ybURGU09uQ29tcG91bmRzKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbXBvdW5kT3JkZXIubGVuZ3RoOyBpKyspIHtcbiAgICBcbiAgICBpZFRvTm9kZVt0aGlzLmNvbXBvdW5kT3JkZXJbaV0uaWRdID0gdGhpcy5jb21wb3VuZE9yZGVyW2ldO1xuICAgIGNoaWxkR3JhcGhNYXBbdGhpcy5jb21wb3VuZE9yZGVyW2ldLmlkXSA9IFtdLmNvbmNhdCh0aGlzLmNvbXBvdW5kT3JkZXJbaV0uZ2V0Q2hpbGQoKS5nZXROb2RlcygpKTtcblxuICAgIC8vIFJlbW92ZSBjaGlsZHJlbiBvZiBjb21wb3VuZHNcbiAgICB0aGlzLmdyYXBoTWFuYWdlci5yZW1vdmUodGhpcy5jb21wb3VuZE9yZGVyW2ldLmdldENoaWxkKCkpO1xuICAgIHRoaXMuY29tcG91bmRPcmRlcltpXS5jaGlsZCA9IG51bGw7XG4gIH1cbiAgXG4gIHRoaXMuZ3JhcGhNYW5hZ2VyLnJlc2V0QWxsTm9kZXMoKTtcbiAgXG4gIC8vIFRpbGUgdGhlIHJlbW92ZWQgY2hpbGRyZW5cbiAgdGhpcy50aWxlQ29tcG91bmRNZW1iZXJzKGNoaWxkR3JhcGhNYXAsIGlkVG9Ob2RlKTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRpbGVkWmVyb0RlZ3JlZVBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2sgPSBbXTtcblxuICBPYmplY3Qua2V5cyh0aGlzLm1lbWJlckdyb3VwcykuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgIHZhciBjb21wb3VuZE5vZGUgPSBzZWxmLmlkVG9EdW1teU5vZGVbaWRdOyAvLyBHZXQgdGhlIGR1bW15IGNvbXBvdW5kXG5cbiAgICB0aWxlZFplcm9EZWdyZWVQYWNrW2lkXSA9IHNlbGYudGlsZU5vZGVzKHNlbGYubWVtYmVyR3JvdXBzW2lkXSwgY29tcG91bmROb2RlLnBhZGRpbmdMZWZ0ICsgY29tcG91bmROb2RlLnBhZGRpbmdSaWdodCk7XG5cbiAgICAvLyBTZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIGR1bW15IGNvbXBvdW5kIGFzIGNhbGN1bGF0ZWRcbiAgICBjb21wb3VuZE5vZGUucmVjdC53aWR0aCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLndpZHRoO1xuICAgIGNvbXBvdW5kTm9kZS5yZWN0LmhlaWdodCA9IHRpbGVkWmVyb0RlZ3JlZVBhY2tbaWRdLmhlaWdodDtcbiAgfSk7XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5yZXBvcHVsYXRlQ29tcG91bmRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gdGhpcy5jb21wb3VuZE9yZGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxDb21wb3VuZE5vZGUgPSB0aGlzLmNvbXBvdW5kT3JkZXJbaV07XG4gICAgdmFyIGlkID0gbENvbXBvdW5kTm9kZS5pZDtcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGxDb21wb3VuZE5vZGUucGFkZGluZ0xlZnQ7XG4gICAgdmFyIHZlcnRpY2FsTWFyZ2luID0gbENvbXBvdW5kTm9kZS5wYWRkaW5nVG9wO1xuXG4gICAgdGhpcy5hZGp1c3RMb2NhdGlvbnModGhpcy50aWxlZE1lbWJlclBhY2tbaWRdLCBsQ29tcG91bmROb2RlLnJlY3QueCwgbENvbXBvdW5kTm9kZS5yZWN0LnksIGhvcml6b250YWxNYXJnaW4sIHZlcnRpY2FsTWFyZ2luKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUucmVwb3B1bGF0ZVplcm9EZWdyZWVNZW1iZXJzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aWxlZFBhY2sgPSB0aGlzLnRpbGVkWmVyb0RlZ3JlZVBhY2s7XG4gIFxuICBPYmplY3Qua2V5cyh0aWxlZFBhY2spLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgY29tcG91bmROb2RlID0gc2VsZi5pZFRvRHVtbXlOb2RlW2lkXTsgLy8gR2V0IHRoZSBkdW1teSBjb21wb3VuZCBieSBpdHMgaWRcbiAgICB2YXIgaG9yaXpvbnRhbE1hcmdpbiA9IGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdDtcbiAgICB2YXIgdmVydGljYWxNYXJnaW4gPSBjb21wb3VuZE5vZGUucGFkZGluZ1RvcDtcblxuICAgIC8vIEFkanVzdCB0aGUgcG9zaXRpb25zIG9mIG5vZGVzIHdydCBpdHMgY29tcG91bmRcbiAgICBzZWxmLmFkanVzdExvY2F0aW9ucyh0aWxlZFBhY2tbaWRdLCBjb21wb3VuZE5vZGUucmVjdC54LCBjb21wb3VuZE5vZGUucmVjdC55LCBob3Jpem9udGFsTWFyZ2luLCB2ZXJ0aWNhbE1hcmdpbik7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZ2V0VG9CZVRpbGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5pZDtcbiAgLy9maXJzdGx5IGNoZWNrIHRoZSBwcmV2aW91cyByZXN1bHRzXG4gIGlmICh0aGlzLnRvQmVUaWxlZFtpZF0gIT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLnRvQmVUaWxlZFtpZF07XG4gIH1cblxuICAvL29ubHkgY29tcG91bmQgbm9kZXMgYXJlIHRvIGJlIHRpbGVkXG4gIHZhciBjaGlsZEdyYXBoID0gbm9kZS5nZXRDaGlsZCgpO1xuICBpZiAoY2hpbGRHcmFwaCA9PSBudWxsKSB7XG4gICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gY2hpbGRHcmFwaC5nZXROb2RlcygpOyAvLyBHZXQgdGhlIGNoaWxkcmVuIG5vZGVzXG5cbiAgLy9hIGNvbXBvdW5kIG5vZGUgaXMgbm90IHRvIGJlIHRpbGVkIGlmIGFsbCBvZiBpdHMgY29tcG91bmQgY2hpbGRyZW4gYXJlIG5vdCB0byBiZSB0aWxlZFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRoZUNoaWxkID0gY2hpbGRyZW5baV07XG5cbiAgICBpZiAodGhpcy5nZXROb2RlRGVncmVlKHRoZUNoaWxkKSA+IDApIHtcbiAgICAgIHRoaXMudG9CZVRpbGVkW2lkXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vcGFzcyB0aGUgY2hpbGRyZW4gbm90IGhhdmluZyB0aGUgY29tcG91bmQgc3RydWN0dXJlXG4gICAgaWYgKHRoZUNoaWxkLmdldENoaWxkKCkgPT0gbnVsbCkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbdGhlQ2hpbGQuaWRdID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZ2V0VG9CZVRpbGVkKHRoZUNoaWxkKSkge1xuICAgICAgdGhpcy50b0JlVGlsZWRbaWRdID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHRoaXMudG9CZVRpbGVkW2lkXSA9IHRydWU7XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gR2V0IGRlZ3JlZSBvZiBhIG5vZGUgZGVwZW5kaW5nIG9mIGl0cyBlZGdlcyBhbmQgaW5kZXBlbmRlbnQgb2YgaXRzIGNoaWxkcmVuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXROb2RlRGVncmVlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmFyIGlkID0gbm9kZS5pZDtcbiAgdmFyIGVkZ2VzID0gbm9kZS5nZXRFZGdlcygpO1xuICB2YXIgZGVncmVlID0gMDtcbiAgXG4gIC8vIEZvciB0aGUgZWRnZXMgY29ubmVjdGVkXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGVkZ2VzW2ldO1xuICAgIGlmIChlZGdlLmdldFNvdXJjZSgpLmlkICE9PSBlZGdlLmdldFRhcmdldCgpLmlkKSB7XG4gICAgICBkZWdyZWUgPSBkZWdyZWUgKyAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVncmVlO1xufTtcblxuLy8gR2V0IGRlZ3JlZSBvZiBhIG5vZGUgd2l0aCBpdHMgY2hpbGRyZW5cbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldE5vZGVEZWdyZWVXaXRoQ2hpbGRyZW4gPSBmdW5jdGlvbiAobm9kZSkge1xuICB2YXIgZGVncmVlID0gdGhpcy5nZXROb2RlRGVncmVlKG5vZGUpO1xuICBpZiAobm9kZS5nZXRDaGlsZCgpID09IG51bGwpIHtcbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG4gIHZhciBjaGlsZHJlbiA9IG5vZGUuZ2V0Q2hpbGQoKS5nZXROb2RlcygpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgZGVncmVlICs9IHRoaXMuZ2V0Tm9kZURlZ3JlZVdpdGhDaGlsZHJlbihjaGlsZCk7XG4gIH1cbiAgcmV0dXJuIGRlZ3JlZTtcbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnBlcmZvcm1ERlNPbkNvbXBvdW5kcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wb3VuZE9yZGVyID0gW107XG4gIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlModGhpcy5ncmFwaE1hbmFnZXIuZ2V0Um9vdCgpLmdldE5vZGVzKCkpO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUuZmlsbENvbXBleE9yZGVyQnlERlMgPSBmdW5jdGlvbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChjaGlsZC5nZXRDaGlsZCgpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsbENvbXBleE9yZGVyQnlERlMoY2hpbGQuZ2V0Q2hpbGQoKS5nZXROb2RlcygpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0VG9CZVRpbGVkKGNoaWxkKSkge1xuICAgICAgdGhpcy5jb21wb3VuZE9yZGVyLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4qIFRoaXMgbWV0aG9kIHBsYWNlcyBlYWNoIHplcm8gZGVncmVlIG1lbWJlciB3cnQgZ2l2ZW4gKHgseSkgY29vcmRpbmF0ZXMgKHRvcCBsZWZ0KS5cbiovXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5hZGp1c3RMb2NhdGlvbnMgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCB4LCB5LCBjb21wb3VuZEhvcml6b250YWxNYXJnaW4sIGNvbXBvdW5kVmVydGljYWxNYXJnaW4pIHtcbiAgeCArPSBjb21wb3VuZEhvcml6b250YWxNYXJnaW47XG4gIHkgKz0gY29tcG91bmRWZXJ0aWNhbE1hcmdpbjtcblxuICB2YXIgbGVmdCA9IHg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBvcmdhbml6YXRpb24ucm93c1tpXTtcbiAgICB4ID0gbGVmdDtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgbG5vZGUgPSByb3dbal07XG5cbiAgICAgIGxub2RlLnJlY3QueCA9IHg7Ly8gKyBsbm9kZS5yZWN0LndpZHRoIC8gMjtcbiAgICAgIGxub2RlLnJlY3QueSA9IHk7Ly8gKyBsbm9kZS5yZWN0LmhlaWdodCAvIDI7XG5cbiAgICAgIHggKz0gbG5vZGUucmVjdC53aWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZztcblxuICAgICAgaWYgKGxub2RlLnJlY3QuaGVpZ2h0ID4gbWF4SGVpZ2h0KVxuICAgICAgICBtYXhIZWlnaHQgPSBsbm9kZS5yZWN0LmhlaWdodDtcbiAgICB9XG5cbiAgICB5ICs9IG1heEhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGVDb21wb3VuZE1lbWJlcnMgPSBmdW5jdGlvbiAoY2hpbGRHcmFwaE1hcCwgaWRUb05vZGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnRpbGVkTWVtYmVyUGFjayA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGNoaWxkR3JhcGhNYXApLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAvLyBHZXQgdGhlIGNvbXBvdW5kIG5vZGVcbiAgICB2YXIgY29tcG91bmROb2RlID0gaWRUb05vZGVbaWRdO1xuXG4gICAgc2VsZi50aWxlZE1lbWJlclBhY2tbaWRdID0gc2VsZi50aWxlTm9kZXMoY2hpbGRHcmFwaE1hcFtpZF0sIGNvbXBvdW5kTm9kZS5wYWRkaW5nTGVmdCArIGNvbXBvdW5kTm9kZS5wYWRkaW5nUmlnaHQpO1xuXG4gICAgY29tcG91bmROb2RlLnJlY3Qud2lkdGggPSBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0ud2lkdGggKyAyMDtcbiAgICBjb21wb3VuZE5vZGUucmVjdC5oZWlnaHQgPSBzZWxmLnRpbGVkTWVtYmVyUGFja1tpZF0uaGVpZ2h0ICsgMjA7XG4gIH0pO1xufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsZU5vZGVzID0gZnVuY3Rpb24gKG5vZGVzLCBtaW5XaWR0aCkge1xuICB2YXIgdmVydGljYWxQYWRkaW5nID0gQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19WRVJUSUNBTDtcbiAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gQ29TRUNvbnN0YW50cy5USUxJTkdfUEFERElOR19IT1JJWk9OVEFMO1xuICB2YXIgb3JnYW5pemF0aW9uID0ge1xuICAgIHJvd3M6IFtdLFxuICAgIHJvd1dpZHRoOiBbXSxcbiAgICByb3dIZWlnaHQ6IFtdLFxuICAgIHdpZHRoOiAyMCxcbiAgICBoZWlnaHQ6IDIwLFxuICAgIHZlcnRpY2FsUGFkZGluZzogdmVydGljYWxQYWRkaW5nLFxuICAgIGhvcml6b250YWxQYWRkaW5nOiBob3Jpem9udGFsUGFkZGluZ1xuICB9O1xuXG4gIC8vIFNvcnQgdGhlIG5vZGVzIGluIGFzY2VuZGluZyBvcmRlciBvZiB0aGVpciBhcmVhc1xuICBub2Rlcy5zb3J0KGZ1bmN0aW9uIChuMSwgbjIpIHtcbiAgICBpZiAobjEucmVjdC53aWR0aCAqIG4xLnJlY3QuaGVpZ2h0ID4gbjIucmVjdC53aWR0aCAqIG4yLnJlY3QuaGVpZ2h0KVxuICAgICAgcmV0dXJuIC0xO1xuICAgIGlmIChuMS5yZWN0LndpZHRoICogbjEucmVjdC5oZWlnaHQgPCBuMi5yZWN0LndpZHRoICogbjIucmVjdC5oZWlnaHQpXG4gICAgICByZXR1cm4gMTtcbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBvcmdhbml6YXRpb24gLT4gdGlsZSBtZW1iZXJzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbE5vZGUgPSBub2Rlc1tpXTtcbiAgICBcbiAgICBpZiAob3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIDAsIG1pbldpZHRoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5jYW5BZGRIb3Jpem9udGFsKG9yZ2FuaXphdGlvbiwgbE5vZGUucmVjdC53aWR0aCwgbE5vZGUucmVjdC5oZWlnaHQpKSB7XG4gICAgICB0aGlzLmluc2VydE5vZGVUb1Jvdyhvcmdhbml6YXRpb24sIGxOb2RlLCB0aGlzLmdldFNob3J0ZXN0Um93SW5kZXgob3JnYW5pemF0aW9uKSwgbWluV2lkdGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW5zZXJ0Tm9kZVRvUm93KG9yZ2FuaXphdGlvbiwgbE5vZGUsIG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aCwgbWluV2lkdGgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hpZnRUb0xhc3RSb3cob3JnYW5pemF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBvcmdhbml6YXRpb247XG59O1xuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5pbnNlcnROb2RlVG9Sb3cgPSBmdW5jdGlvbiAob3JnYW5pemF0aW9uLCBub2RlLCByb3dJbmRleCwgbWluV2lkdGgpIHtcbiAgdmFyIG1pbkNvbXBvdW5kU2l6ZSA9IG1pbldpZHRoO1xuXG4gIC8vIEFkZCBuZXcgcm93IGlmIG5lZWRlZFxuICBpZiAocm93SW5kZXggPT0gb3JnYW5pemF0aW9uLnJvd3MubGVuZ3RoKSB7XG4gICAgdmFyIHNlY29uZERpbWVuc2lvbiA9IFtdO1xuXG4gICAgb3JnYW5pemF0aW9uLnJvd3MucHVzaChzZWNvbmREaW1lbnNpb24pO1xuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aC5wdXNoKG1pbkNvbXBvdW5kU2l6ZSk7XG4gICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodC5wdXNoKDApO1xuICB9XG5cbiAgLy8gVXBkYXRlIHJvdyB3aWR0aFxuICB2YXIgdyA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtyb3dJbmRleF0gKyBub2RlLnJlY3Qud2lkdGg7XG5cbiAgaWYgKG9yZ2FuaXphdGlvbi5yb3dzW3Jvd0luZGV4XS5sZW5ndGggPiAwKSB7XG4gICAgdyArPSBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG4gIH1cblxuICBvcmdhbml6YXRpb24ucm93V2lkdGhbcm93SW5kZXhdID0gdztcbiAgLy8gVXBkYXRlIGNvbXBvdW5kIHdpZHRoXG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggPCB3KSB7XG4gICAgb3JnYW5pemF0aW9uLndpZHRoID0gdztcbiAgfVxuXG4gIC8vIFVwZGF0ZSBoZWlnaHRcbiAgdmFyIGggPSBub2RlLnJlY3QuaGVpZ2h0O1xuICBpZiAocm93SW5kZXggPiAwKVxuICAgIGggKz0gb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICB2YXIgZXh0cmFIZWlnaHQgPSAwO1xuICBpZiAoaCA+IG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbcm93SW5kZXhdKSB7XG4gICAgZXh0cmFIZWlnaHQgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XTtcbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSA9IGg7XG4gICAgZXh0cmFIZWlnaHQgPSBvcmdhbml6YXRpb24ucm93SGVpZ2h0W3Jvd0luZGV4XSAtIGV4dHJhSGVpZ2h0O1xuICB9XG5cbiAgb3JnYW5pemF0aW9uLmhlaWdodCArPSBleHRyYUhlaWdodDtcblxuICAvLyBJbnNlcnQgbm9kZVxuICBvcmdhbml6YXRpb24ucm93c1tyb3dJbmRleF0ucHVzaChub2RlKTtcbn07XG5cbi8vU2NhbnMgdGhlIHJvd3Mgb2YgYW4gb3JnYW5pemF0aW9uIGFuZCByZXR1cm5zIHRoZSBvbmUgd2l0aCB0aGUgbWluIHdpZHRoXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5nZXRTaG9ydGVzdFJvd0luZGV4ID0gZnVuY3Rpb24gKG9yZ2FuaXphdGlvbikge1xuICB2YXIgciA9IC0xO1xuICB2YXIgbWluID0gTnVtYmVyLk1BWF9WQUxVRTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZ2FuaXphdGlvbi5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXSA8IG1pbikge1xuICAgICAgciA9IGk7XG4gICAgICBtaW4gPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByO1xufTtcblxuLy9TY2FucyB0aGUgcm93cyBvZiBhbiBvcmdhbml6YXRpb24gYW5kIHJldHVybnMgdGhlIG9uZSB3aXRoIHRoZSBtYXggd2lkdGhcbkNvU0VMYXlvdXQucHJvdG90eXBlLmdldExvbmdlc3RSb3dJbmRleCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIHIgPSAtMTtcbiAgdmFyIG1heCA9IE51bWJlci5NSU5fVkFMVUU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmdhbml6YXRpb24ucm93cy5sZW5ndGg7IGkrKykge1xuXG4gICAgaWYgKG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtpXSA+IG1heCkge1xuICAgICAgciA9IGk7XG4gICAgICBtYXggPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHI7XG59O1xuXG4vKipcbiogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgYWRkaW5nIGV4dHJhIHdpZHRoIHRvIHRoZSBvcmdhbml6YXRpb24gdmlvbGF0ZXNcbiogdGhlIGFzcGVjdCByYXRpbygxKSBvciBub3QuXG4qL1xuQ29TRUxheW91dC5wcm90b3R5cGUuY2FuQWRkSG9yaXpvbnRhbCA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24sIGV4dHJhV2lkdGgsIGV4dHJhSGVpZ2h0KSB7XG5cbiAgdmFyIHNyaSA9IHRoaXMuZ2V0U2hvcnRlc3RSb3dJbmRleChvcmdhbml6YXRpb24pO1xuXG4gIGlmIChzcmkgPCAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgbWluID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW3NyaV07XG5cbiAgaWYgKG1pbiArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZyArIGV4dHJhV2lkdGggPD0gb3JnYW5pemF0aW9uLndpZHRoKVxuICAgIHJldHVybiB0cnVlO1xuXG4gIHZhciBoRGlmZiA9IDA7XG5cbiAgLy8gQWRkaW5nIHRvIGFuIGV4aXN0aW5nIHJvd1xuICBpZiAob3JnYW5pemF0aW9uLnJvd0hlaWdodFtzcmldIDwgZXh0cmFIZWlnaHQpIHtcbiAgICBpZiAoc3JpID4gMClcbiAgICAgIGhEaWZmID0gZXh0cmFIZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nIC0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtzcmldO1xuICB9XG5cbiAgdmFyIGFkZF90b19yb3dfcmF0aW87XG4gIGlmIChvcmdhbml6YXRpb24ud2lkdGggLSBtaW4gPj0gZXh0cmFXaWR0aCArIG9yZ2FuaXphdGlvbi5ob3Jpem9udGFsUGFkZGluZykge1xuICAgIGFkZF90b19yb3dfcmF0aW8gPSAob3JnYW5pemF0aW9uLmhlaWdodCArIGhEaWZmKSAvIChtaW4gKyBleHRyYVdpZHRoICsgb3JnYW5pemF0aW9uLmhvcml6b250YWxQYWRkaW5nKTtcbiAgfSBlbHNlIHtcbiAgICBhZGRfdG9fcm93X3JhdGlvID0gKG9yZ2FuaXphdGlvbi5oZWlnaHQgKyBoRGlmZikgLyBvcmdhbml6YXRpb24ud2lkdGg7XG4gIH1cblxuICAvLyBBZGRpbmcgYSBuZXcgcm93IGZvciB0aGlzIG5vZGVcbiAgaERpZmYgPSBleHRyYUhlaWdodCArIG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG4gIHZhciBhZGRfbmV3X3Jvd19yYXRpbztcbiAgaWYgKG9yZ2FuaXphdGlvbi53aWR0aCA8IGV4dHJhV2lkdGgpIHtcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gZXh0cmFXaWR0aDtcbiAgfSBlbHNlIHtcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IChvcmdhbml6YXRpb24uaGVpZ2h0ICsgaERpZmYpIC8gb3JnYW5pemF0aW9uLndpZHRoO1xuICB9XG5cbiAgaWYgKGFkZF9uZXdfcm93X3JhdGlvIDwgMSlcbiAgICBhZGRfbmV3X3Jvd19yYXRpbyA9IDEgLyBhZGRfbmV3X3Jvd19yYXRpbztcblxuICBpZiAoYWRkX3RvX3Jvd19yYXRpbyA8IDEpXG4gICAgYWRkX3RvX3Jvd19yYXRpbyA9IDEgLyBhZGRfdG9fcm93X3JhdGlvO1xuXG4gIHJldHVybiBhZGRfdG9fcm93X3JhdGlvIDwgYWRkX25ld19yb3dfcmF0aW87XG59O1xuXG4vL0lmIG1vdmluZyB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGxvbmdlc3Qgcm93IGFuZCBhZGRpbmcgaXQgdG8gdGhlIGxhc3Rcbi8vcm93IG1ha2VzIHRoZSBib3VuZGluZyBib3ggc21hbGxlciwgZG8gaXQuXG5Db1NFTGF5b3V0LnByb3RvdHlwZS5zaGlmdFRvTGFzdFJvdyA9IGZ1bmN0aW9uIChvcmdhbml6YXRpb24pIHtcbiAgdmFyIGxvbmdlc3QgPSB0aGlzLmdldExvbmdlc3RSb3dJbmRleChvcmdhbml6YXRpb24pO1xuICB2YXIgbGFzdCA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aC5sZW5ndGggLSAxO1xuICB2YXIgcm93ID0gb3JnYW5pemF0aW9uLnJvd3NbbG9uZ2VzdF07XG4gIHZhciBub2RlID0gcm93W3Jvdy5sZW5ndGggLSAxXTtcblxuICB2YXIgZGlmZiA9IG5vZGUud2lkdGggKyBvcmdhbml6YXRpb24uaG9yaXpvbnRhbFBhZGRpbmc7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgZW5vdWdoIHNwYWNlIG9uIHRoZSBsYXN0IHJvd1xuICBpZiAob3JnYW5pemF0aW9uLndpZHRoIC0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdID4gZGlmZiAmJiBsb25nZXN0ICE9IGxhc3QpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbG9uZ2VzdCByb3dcbiAgICByb3cuc3BsaWNlKC0xLCAxKTtcblxuICAgIC8vIFB1c2ggaXQgdG8gdGhlIGxhc3Qgcm93XG4gICAgb3JnYW5pemF0aW9uLnJvd3NbbGFzdF0ucHVzaChub2RlKTtcblxuICAgIG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsb25nZXN0XSA9IG9yZ2FuaXphdGlvbi5yb3dXaWR0aFtsb25nZXN0XSAtIGRpZmY7XG4gICAgb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdID0gb3JnYW5pemF0aW9uLnJvd1dpZHRoW2xhc3RdICsgZGlmZjtcbiAgICBvcmdhbml6YXRpb24ud2lkdGggPSBvcmdhbml6YXRpb24ucm93V2lkdGhbaW5zdGFuY2UuZ2V0TG9uZ2VzdFJvd0luZGV4KG9yZ2FuaXphdGlvbildO1xuXG4gICAgLy8gVXBkYXRlIGhlaWdodHMgb2YgdGhlIG9yZ2FuaXphdGlvblxuICAgIHZhciBtYXhIZWlnaHQgPSBOdW1iZXIuTUlOX1ZBTFVFO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocm93W2ldLmhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgbWF4SGVpZ2h0ID0gcm93W2ldLmhlaWdodDtcbiAgICB9XG4gICAgaWYgKGxvbmdlc3QgPiAwKVxuICAgICAgbWF4SGVpZ2h0ICs9IG9yZ2FuaXphdGlvbi52ZXJ0aWNhbFBhZGRpbmc7XG5cbiAgICB2YXIgcHJldlRvdGFsID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSArIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF07XG5cbiAgICBvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xvbmdlc3RdID0gbWF4SGVpZ2h0O1xuICAgIGlmIChvcmdhbml6YXRpb24ucm93SGVpZ2h0W2xhc3RdIDwgbm9kZS5oZWlnaHQgKyBvcmdhbml6YXRpb24udmVydGljYWxQYWRkaW5nKVxuICAgICAgb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsYXN0XSA9IG5vZGUuaGVpZ2h0ICsgb3JnYW5pemF0aW9uLnZlcnRpY2FsUGFkZGluZztcblxuICAgIHZhciBmaW5hbFRvdGFsID0gb3JnYW5pemF0aW9uLnJvd0hlaWdodFtsb25nZXN0XSArIG9yZ2FuaXphdGlvbi5yb3dIZWlnaHRbbGFzdF07XG4gICAgb3JnYW5pemF0aW9uLmhlaWdodCArPSAoZmluYWxUb3RhbCAtIHByZXZUb3RhbCk7XG5cbiAgICB0aGlzLnNoaWZ0VG9MYXN0Um93KG9yZ2FuaXphdGlvbik7XG4gIH1cbn07XG5cbkNvU0VMYXlvdXQucHJvdG90eXBlLnRpbGluZ1ByZUxheW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoQ29TRUNvbnN0YW50cy5USUxFKSB7XG4gICAgLy8gRmluZCB6ZXJvIGRlZ3JlZSBub2RlcyBhbmQgY3JlYXRlIGEgY29tcG91bmQgZm9yIGVhY2ggbGV2ZWxcbiAgICB0aGlzLmdyb3VwWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgICAvLyBUaWxlIGFuZCBjbGVhciBjaGlsZHJlbiBvZiBlYWNoIGNvbXBvdW5kXG4gICAgdGhpcy5jbGVhckNvbXBvdW5kcygpO1xuICAgIC8vIFNlcGFyYXRlbHkgdGlsZSBhbmQgY2xlYXIgemVybyBkZWdyZWUgbm9kZXMgZm9yIGVhY2ggbGV2ZWxcbiAgICB0aGlzLmNsZWFyWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgfVxufTtcblxuQ29TRUxheW91dC5wcm90b3R5cGUudGlsaW5nUG9zdExheW91dCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoQ29TRUNvbnN0YW50cy5USUxFKSB7XG4gICAgdGhpcy5yZXBvcHVsYXRlWmVyb0RlZ3JlZU1lbWJlcnMoKTtcbiAgICB0aGlzLnJlcG9wdWxhdGVDb21wb3VuZHMoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb1NFTGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0xheW91dC9Db1NFTGF5b3V0LmpzIiwiZnVuY3Rpb24gRGltZW5zaW9uRCh3aWR0aCwgaGVpZ2h0KSB7XG4gIHRoaXMud2lkdGggPSAwO1xuICB0aGlzLmhlaWdodCA9IDA7XG4gIGlmICh3aWR0aCAhPT0gbnVsbCAmJiBoZWlnaHQgIT09IG51bGwpIHtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cbn1cblxuRGltZW5zaW9uRC5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy53aWR0aDtcbn07XG5cbkRpbWVuc2lvbkQucHJvdG90eXBlLnNldFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKVxue1xuICB0aGlzLndpZHRoID0gd2lkdGg7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbiAoKVxue1xuICByZXR1cm4gdGhpcy5oZWlnaHQ7XG59O1xuXG5EaW1lbnNpb25ELnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbiAoaGVpZ2h0KVxue1xuICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRGltZW5zaW9uRDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvRGltZW5zaW9uRC5qcyIsImZ1bmN0aW9uIEVtaXR0ZXIoKXtcbiAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbn1cblxudmFyIHAgPSBFbWl0dGVyLnByb3RvdHlwZTtcblxucC5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKCBldmVudCwgY2FsbGJhY2sgKXtcbiAgdGhpcy5saXN0ZW5lcnMucHVzaCh7XG4gICAgZXZlbnQ6IGV2ZW50LFxuICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICB9KTtcbn07XG5cbnAucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiggZXZlbnQsIGNhbGxiYWNrICl7XG4gIGZvciggdmFyIGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkgPj0gMDsgaS0tICl7XG4gICAgdmFyIGwgPSB0aGlzLmxpc3RlbmVyc1tpXTtcblxuICAgIGlmKCBsLmV2ZW50ID09PSBldmVudCAmJiBsLmNhbGxiYWNrID09PSBjYWxsYmFjayApe1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKCBpLCAxICk7XG4gICAgfVxuICB9XG59O1xuXG5wLmVtaXQgPSBmdW5jdGlvbiggZXZlbnQsIGRhdGEgKXtcbiAgZm9yKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmxpc3RlbmVycy5sZW5ndGg7IGkrKyApe1xuICAgIHZhciBsID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICBpZiggZXZlbnQgPT09IGwuZXZlbnQgKXtcbiAgICAgIGwuY2FsbGJhY2soIGRhdGEgKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9MYXlvdXQvRW1pdHRlci5qcyIsImNvbnN0IG5vZGVGcm9tID0gdmFsdWUgPT4gKHsgdmFsdWUsIG5leHQ6IG51bGwsIHByZXY6IG51bGwgfSk7XG5cbmNvbnN0IGFkZCA9ICggcHJldiwgbm9kZSwgbmV4dCwgbGlzdCApID0+IHtcbiAgaWYoIHByZXYgIT09IG51bGwgKXtcbiAgICBwcmV2Lm5leHQgPSBub2RlO1xuICB9IGVsc2Uge1xuICAgIGxpc3QuaGVhZCA9IG5vZGU7XG4gIH1cblxuICBpZiggbmV4dCAhPT0gbnVsbCApe1xuICAgIG5leHQucHJldiA9IG5vZGU7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC50YWlsID0gbm9kZTtcbiAgfVxuXG4gIG5vZGUucHJldiA9IHByZXY7XG4gIG5vZGUubmV4dCA9IG5leHQ7XG5cbiAgbGlzdC5sZW5ndGgrKztcblxuICByZXR1cm4gbm9kZTtcbn07XG5cbmNvbnN0IHJlbW92ZSA9ICggbm9kZSwgbGlzdCApID0+IHtcbiAgbGV0IHsgcHJldiwgbmV4dCB9ID0gbm9kZTtcblxuICBpZiggcHJldiAhPT0gbnVsbCApe1xuICAgIHByZXYubmV4dCA9IG5leHQ7XG4gIH0gZWxzZSB7XG4gICAgbGlzdC5oZWFkID0gbmV4dDtcbiAgfVxuXG4gIGlmKCBuZXh0ICE9PSBudWxsICl7XG4gICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgfSBlbHNlIHtcbiAgICBsaXN0LnRhaWwgPSBwcmV2O1xuICB9XG5cbiAgbm9kZS5wcmV2ID0gbm9kZS5uZXh0ID0gbnVsbDtcblxuICBsaXN0Lmxlbmd0aC0tO1xuXG4gIHJldHVybiBub2RlO1xufTtcblxuY2xhc3MgTGlua2VkTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCB2YWxzICl7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy50YWlsID0gbnVsbDtcblxuICAgIGlmKCB2YWxzICE9IG51bGwgKXtcbiAgICAgIHZhbHMuZm9yRWFjaCggdiA9PiB0aGlzLnB1c2godikgKTtcbiAgICB9XG4gIH1cblxuICBzaXplKCl7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgaW5zZXJ0QmVmb3JlKCB2YWwsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBub2RlRnJvbSh2YWwpLCBvdGhlck5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKCB2YWwsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZSwgbm9kZUZyb20odmFsKSwgb3RoZXJOb2RlLm5leHQsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydE5vZGVCZWZvcmUoIG5ld05vZGUsIG90aGVyTm9kZSApe1xuICAgIHJldHVybiBhZGQoIG90aGVyTm9kZS5wcmV2LCBuZXdOb2RlLCBvdGhlck5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIGluc2VydE5vZGVBZnRlciggbmV3Tm9kZSwgb3RoZXJOb2RlICl7XG4gICAgcmV0dXJuIGFkZCggb3RoZXJOb2RlLCBuZXdOb2RlLCBvdGhlck5vZGUubmV4dCwgdGhpcyApO1xuICB9XG5cbiAgcHVzaCggdmFsICl7XG4gICAgcmV0dXJuIGFkZCggdGhpcy50YWlsLCBub2RlRnJvbSh2YWwpLCBudWxsLCB0aGlzICk7XG4gIH1cblxuICB1bnNoaWZ0KCB2YWwgKXtcbiAgICByZXR1cm4gYWRkKCBudWxsLCBub2RlRnJvbSh2YWwpLCB0aGlzLmhlYWQsIHRoaXMgKTtcbiAgfVxuXG4gIHJlbW92ZSggbm9kZSApe1xuICAgIHJldHVybiByZW1vdmUoIG5vZGUsIHRoaXMgKTtcbiAgfVxuXG4gIHBvcCgpe1xuICAgIHJldHVybiByZW1vdmUoIHRoaXMudGFpbCwgdGhpcyApLnZhbHVlO1xuICB9XG5cbiAgcG9wTm9kZSgpe1xuICAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLnRhaWwsIHRoaXMgKTtcbiAgfVxuXG4gIHNoaWZ0KCl7XG4gICAgcmV0dXJuIHJlbW92ZSggdGhpcy5oZWFkLCB0aGlzICkudmFsdWU7XG4gIH1cblxuICBzaGlmdE5vZGUoKXtcbiAgICByZXR1cm4gcmVtb3ZlKCB0aGlzLmhlYWQsIHRoaXMgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmtlZExpc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTGF5b3V0L0xpbmtlZExpc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbi8vIHJlZ2lzdGVycyB0aGUgZXh0ZW5zaW9uIG9uIGEgY3l0b3NjYXBlIGxpYiByZWZcbnZhciBnZXRMYXlvdXQgPSByZXF1aXJlKCcuL0xheW91dCcpO1xuXG52YXIgcmVnaXN0ZXIgPSBmdW5jdGlvbiggY3l0b3NjYXBlICl7XG4gIHZhciBMYXlvdXQgPSBnZXRMYXlvdXQoIGN5dG9zY2FwZSApO1xuXG4gIGN5dG9zY2FwZSgnbGF5b3V0JywgJ2Nvc2UtYmlsa2VudCcsIExheW91dCk7XG59O1xuXG4vLyBhdXRvIHJlZyBmb3IgZ2xvYmFsc1xuaWYoIHR5cGVvZiBjeXRvc2NhcGUgIT09ICd1bmRlZmluZWQnICl7XG4gIHJlZ2lzdGVyKCBjeXRvc2NhcGUgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=