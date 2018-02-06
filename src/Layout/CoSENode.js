var FDLayoutNode = require('./FDLayoutNode');
var IMath = require('./IMath');

function CoSENode(gm, loc, size, vNode) {
  FDLayoutNode.call(this, gm, loc, size, vNode);
}


CoSENode.prototype = Object.create(FDLayoutNode.prototype);
for (var prop in FDLayoutNode) {
  CoSENode[prop] = FDLayoutNode[prop];
}

CoSENode.prototype.move = function ()
{

  // clears the forces calculated for the node
  var clearForces = function()
  {
    this.springForceX = 0;
    this.springForceY = 0;
    this.repulsionForceX = 0;
    this.repulsionForceY = 0;
    this.gravitationForceX = 0;
    this.gravitationForceY = 0;
    this.displacementX = 0;
    this.displacementY = 0;
  }

  var layout = this.graphManager.getLayout();
  this.displacementX = layout.coolingFactor *
          (this.springForceX + this.repulsionForceX + this.gravitationForceX) / this.noOfChildren;
  this.displacementY = layout.coolingFactor *
          (this.springForceY + this.repulsionForceY + this.gravitationForceY) / this.noOfChildren;


  if (Math.abs(this.displacementX) > layout.coolingFactor * layout.maxNodeDisplacement)
  {
    this.displacementX = layout.coolingFactor * layout.maxNodeDisplacement *
            IMath.sign(this.displacementX);
  }

  if (Math.abs(this.displacementY) > layout.coolingFactor * layout.maxNodeDisplacement)
  {
    this.displacementY = layout.coolingFactor * layout.maxNodeDisplacement *
            IMath.sign(this.displacementY);
  }

  // whether to cancel displacement
  // discplacement could be canceled if any of the min/max borders is exceed
  var cancelDisplacement = false;

  // check horizontal borders
  if (this.minX !== undefined || this.maxX !== undefined)
  {
    // calculate the expected X coordinate after displacement is performed
    var expectedX = this.rect.x + this.displacementX;

    if ( ( this.maxX !== undefined && expectedX + this.rect.width > this.maxX )
          || this.minX !== undefined && expectedX < this.minX ) {

      cancelDisplacement = true;
    }
  }

  // check vertical borders
  if (this.minY !== undefined || this.maxY !== undefined)
  {
    // calculate the expected Y coordinate after displacement is performed
    var expectedY = this.rect.y + this.displacementY;

    if ( ( this.maxY !== undefined && expectedY + this.rect.width > this.maxY )
          || this.minY !== undefined && expectedY < this.minY ) {

      cancelDisplacement = true;
    }
  }

  // if displacement is canceled just clear the forces and return
  if ( cancelDisplacement )
  {
      clearForces.call(this);
      return;
  }

  // a simple node, just move it
  if (this.child == null)
  {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // an empty compound node, again just move it
  else if (this.child.getNodes().length == 0)
  {
    this.moveBy(this.displacementX, this.displacementY);
  }
  // non-empty compound node, propogate movement to children as well
  else
  {
    this.propogateDisplacementToChildren(this.displacementX,
            this.displacementY);
  }

  layout.totalDisplacement +=
          Math.abs(this.displacementX) + Math.abs(this.displacementY);

  clearForces.call(this);
};

CoSENode.prototype.propogateDisplacementToChildren = function (dX, dY)
{
  var nodes = this.getChild().getNodes();
  var node;
  for (var i = 0; i < nodes.length; i++)
  {
    node = nodes[i];
    if (node.getChild() == null)
    {
      node.moveBy(dX, dY);
      node.displacementX += dX;
      node.displacementY += dY;
    }
    else
    {
      node.propogateDisplacementToChildren(dX, dY);
    }
  }
};

CoSENode.prototype.setPred1 = function (pred1)
{
  this.pred1 = pred1;
};

CoSENode.prototype.getPred1 = function ()
{
  return pred1;
};

CoSENode.prototype.getPred2 = function ()
{
  return pred2;
};

CoSENode.prototype.setNext = function (next)
{
  this.next = next;
};

CoSENode.prototype.getNext = function ()
{
  return next;
};

CoSENode.prototype.setProcessed = function (processed)
{
  this.processed = processed;
};

CoSENode.prototype.isProcessed = function ()
{
  return processed;
};

module.exports = CoSENode;
