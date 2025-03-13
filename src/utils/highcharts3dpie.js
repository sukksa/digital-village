import Highcharts from 'highcharts';
export default (function (H) {
  Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, 'translate', function (proceed) {
    proceed.apply(this, [].slice.call(arguments, 1));
    if (!this.chart.is3d()) {
      return;
    }
    this.data.forEach(d => {
      // 修改 3
      if (d.options.depth && typeof d.options.depth === 'number') {
        d.shapeArgs.depth = d.shapeArgs.depth * 0.75 + d.options.depth;
      }
    });
  });
  var cos = Math.cos,
    sin = Math.sin,
    PI = Math.PI,
    dFactor = (4 * (Math.sqrt(2) - 1) / 3) / (PI / 2);

  function curveTo(cx, cy, rx, ry, start, end, dx, dy) {
    var result = [],
      arcAngle = end - start;
    if ((end > start) && (end - start > Math.PI / 2 + 0.0001)) {
      result = result.concat(curveTo(cx, cy, rx, ry, start, start + (Math.PI / 2), dx, dy));
      result = result.concat(curveTo(cx, cy, rx, ry, start + (Math.PI / 2), end, dx, dy));
      return result;
    }
    if ((end < start) && (start - end > Math.PI / 2 + 0.0001)) {
      result = result.concat(curveTo(cx, cy, rx, ry, start, start - (Math.PI / 2), dx, dy));
      result = result.concat(curveTo(cx, cy, rx, ry, start - (Math.PI / 2), end, dx, dy));
      return result;
    }
    return [
      [
        'C',
        cx + (rx * Math.cos(start)) -
        ((rx * dFactor * arcAngle) * Math.sin(start)) + dx,
        cy + (ry * Math.sin(start)) +
        ((ry * dFactor * arcAngle) * Math.cos(start)) + dy,
        cx + (rx * Math.cos(end)) +
        ((rx * dFactor * arcAngle) * Math.sin(end)) + dx,
        cy + (ry * Math.sin(end)) -
        ((ry * dFactor * arcAngle) * Math.cos(end)) + dy,
        cx + (rx * Math.cos(end)) + dx,
        cy + (ry * Math.sin(end)) + dy
      ]
    ];
  }
  Highcharts.SVGRenderer.prototype.arc3dPath = function (shapeArgs) {
    let cx = shapeArgs.x || 0, // x coordinate of the center
      cy = shapeArgs.y || 0, // y coordinate of the center
      start = shapeArgs.start || 0, // start angle
      end = (shapeArgs.end || 0) - 0.00001, // end angle
      r = shapeArgs.r || 0, // radius
      ir = shapeArgs.innerR || 0, // inner radius
      d = shapeArgs.depth || 0, // depth
      alpha = shapeArgs.alpha || 0, // alpha rotation of the chart
      beta = shapeArgs.beta || 0; // beta rotation of the chart
    // Derived Variables
    const cs = Math.cos(start), // cosinus of the start angle
      ss = Math.sin(start), // sinus of the start angle
      ce = Math.cos(end), // cosinus of the end angle
      se = Math.sin(end), // sinus of the end angle
      rx = r * Math.cos(beta), // x-radius
      ry = r * Math.cos(alpha), // y-radius
      irx = ir * Math.cos(beta), // x-radius (inner)
      iry = ir * Math.cos(alpha), // y-radius (inner)
      dx = d * Math.sin(beta), // distance between top and bottom in x
      dy = d * Math.sin(alpha); // distance between top and bottom in y
    // 修改 1
    cy -= dy;
    // TOP
    let top = [
      ['M', cx + (rx * cs), cy + (ry * ss)]
    ];
    top = top.concat(
      curveTo(cx, cy, rx, ry, start, end, 0, 0)
    );
    top.push([
      'L', cx + (irx * ce), cy + (iry * se)
    ]);
    top = top.concat(
      curveTo(cx, cy, irx, iry, end, start, 0, 0)
    );
    top.push(['Z']);
    // OUTSIDE
    const b = (beta > 0 ? Math.PI / 2 : 0),
      a = (alpha > 0 ? 0 : Math.PI / 2);
    const start2 = start > -b ? start : (end > -b ? -b : start),
      end2 = end < PI - a ? end : (start < PI - a ? PI - a : end),
      midEnd = 2 * PI - a;
    // When slice goes over bottom middle, need to add both, left and right
    // outer side. Additionally, when we cross right hand edge, create sharp
    // edge. Outer shape/wall:
    //
    //            -------
    //          /    ^    \
    //    4)   /   /   \   \  1)
    //        /   /     \   \
    //       /   /       \   \
    // (c)=> ====         ==== <=(d)
    //       \   \       /   /
    //        \   \<=(a)/   /
    //         \   \   /   / <=(b)
    //    3)    \    v    /  2)
    //            -------
    //
    // (a) - inner side
    // (b) - outer side
    // (c) - left edge (sharp)
    // (d) - right edge (sharp)
    // 1..n - rendering order for startAngle = 0, when set to e.g 90, order
    // changes clockwise (1->2, 2->3, n->1) and counterclockwise for
    // negative startAngle
    let out = [
      ['M', cx + (rx * cos(start2)), cy + (ry * sin(start2))]
    ];
    out = out.concat(
      curveTo(cx, cy, rx, ry, start2, end2, 0, 0)
    );
    // When shape is wide, it can cross both, (c) and (d) edges, when using
    // startAngle
    if (end > midEnd && start < midEnd) {
      // Go to outer side
      out.push([
        'L', cx + (rx * cos(end2)) + dx, cy + (ry * sin(end2)) + dy
      ]);
      // Curve to the right edge of the slice (d)
      out = out.concat(
        curveTo(cx, cy, rx, ry, end2, midEnd, dx, dy)
      );
      // Go to the inner side
      out.push([
        'L', cx + (rx * cos(midEnd)), cy + (ry * sin(midEnd))
      ]);
      // Curve to the true end of the slice
      out = out.concat(
        curveTo(cx, cy, rx, ry, midEnd, end, 0, 0)
      );
      // Go to the outer side
      out.push([
        'L', cx + (rx * cos(end)) + dx, cy + (ry * sin(end)) + dy
      ]);
      // Go back to middle (d)
      out = out.concat(
        curveTo(cx, cy, rx, ry, end, midEnd, dx, dy)
      );
      out.push([
        'L', cx + (rx * cos(midEnd)), cy + (ry * sin(midEnd))
      ]);
      // Go back to the left edge
      out = out.concat(
        curveTo(cx, cy, rx, ry, midEnd, end2, 0, 0)
      );
      // But shape can cross also only (c) edge:
    } else if (end > PI - a && start < PI - a) {
      // Go to outer side
      out.push([
        'L',
        cx + (rx * Math.cos(end2)) + dx,
        cy + (ry * Math.sin(end2)) + dy
      ]);
      // Curve to the true end of the slice
      out = out.concat(
        curveTo(cx, cy, rx, ry, end2, end, dx, dy)
      );
      // Go to the inner side
      out.push([
        'L', cx + (rx * Math.cos(end)), cy + (ry * Math.sin(end))
      ]);
      // Go back to the artifical end2
      out = out.concat(
        curveTo(cx, cy, rx, ry, end, end2, 0, 0)
      );
    }
    out.push([
      'L',
      cx + (rx * Math.cos(end2)) + dx,
      cy + (ry * Math.sin(end2)) + dy
    ]);
    out = out.concat(
      curveTo(cx, cy, rx, ry, end2, start2, dx, dy)
    );
    out.push(['Z']);
    // INSIDE
    let inn = [
      ['M', cx + (irx * cs), cy + (iry * ss)]
    ];
    inn = inn.concat(
      curveTo(cx, cy, irx, iry, start, end, 0, 0)
    );
    inn.push([
      'L',
      cx + (irx * Math.cos(end)) + dx,
      cy + (iry * Math.sin(end)) + dy
    ]);
    inn = inn.concat(
      curveTo(cx, cy, irx, iry, end, start, dx, dy)
    );
    inn.push(['Z']);
    // SIDES
    const side1 = [
      ['M', cx + (rx * cs), cy + (ry * ss)],
      ['L', cx + (rx * cs) + dx, cy + (ry * ss) + dy],
      ['L', cx + (irx * cs) + dx, cy + (iry * ss) + dy],
      ['L', cx + (irx * cs), cy + (iry * ss)],
      ['Z']
    ];
    const side2 = [
      ['M', cx + (rx * ce), cy + (ry * se)],
      ['L', cx + (rx * ce) + dx, cy + (ry * se) + dy],
      ['L', cx + (irx * ce) + dx, cy + (iry * se) + dy],
      ['L', cx + (irx * ce), cy + (iry * se)],
      ['Z']
    ];
    // correction for changed position of vanishing point caused by alpha
    // and beta rotations
    let angleCorr = Math.atan2(dy, -dx),
      angleEnd = Math.abs(end + angleCorr),
      angleStart = Math.abs(start + angleCorr),
      angleMid = Math.abs((start + end) / 2 + angleCorr);
    /**
     * set to 0-PI range
     * @private
     */
    function toZeroPIRange(angle) {
      angle = angle % (2 * Math.PI);
      if (angle > Math.PI) {
        angle = 2 * Math.PI - angle;
      }
      return angle;
    }
    angleEnd = toZeroPIRange(angleEnd);
    angleStart = toZeroPIRange(angleStart);
    angleMid = toZeroPIRange(angleMid);
    // *1e5 is to compensate pInt in zIndexSetter
    const incPrecision = 1e5,
      a1 = angleMid * incPrecision,
      a2 = angleStart * incPrecision,
      a3 = angleEnd * incPrecision;
    let result = {
      top: top,
      // max angle is PI, so this is always higher
      zTop: Math.PI * incPrecision + 1,
      out: out,
      zOut: Math.max(a1, a2, a3),
      inn: inn,
      zInn: Math.max(a1, a2, a3),
      side1: side1,
      // to keep below zOut and zInn in case of same values
      zSide1: a3 * 0.99,
      side2: side2,
      zSide2: a2 * 0.99
    };
    // 修改 2
    result.zTop = (result.zOut + 0.5) / 100;
    return result;
  }
}(Highcharts));