const DEFAULT_AXIS_MIN = "none";
const DEFAULT_AXIS_MAX = "none";
const DEFAULT_CROSS_MIN = "none";
const DEFAULT_CROSS_MAX = "none";
const DEFAULT_BASIS = "auto";
const DEFAULT_CROSS = "auto";
const DEFAULT_GROW = "0";
const DEFAULT_SHRINK = "1";
const DEFAULT_FLOW = `${DEFAULT_GROW} ${DEFAULT_SHRINK} ${DEFAULT_BASIS}`;

const getDefaultOrValue = (value, defaultValue) => {
  if (value === null || value === "" || value === undefined) {
    return defaultValue;
  }
  return value.trim();
};

const unitRepair = (value, unit = "px") => {
  if (!Number.isNaN(Number(value))) {
    return value + unit;
  }
  return value;
};

const handler = (el, { arg, expression, name }, _, { data: oldData }) => {


  const oldDirective = oldData?.directives?.find(d => d.name === name);
  const { arg: oldArg, expression: oldExpression } = oldDirective ?? {};

  if (arg === oldArg && expression === oldExpression) {
    return;
  }

  const crossAttrName = name === "row-flow" ? "height" : "width";
  const axisAttrMaxName = name === "row-flow" ? "maxWidth" : "maxHeight";
  const axisAttrMinName = name === "row-flow" ? "minWidth" : "minHeight";
  const crossAttrMaxName = name === "row-flow" ? "maxHeight" : "maxWidth";
  const crossAttrMinName = name === "row-flow" ? "minHeight" : "minWidth";

  let [grow, shrink] = expression?.split("-").filter(v => !!v) ?? [];

  const args = arg?.split(":") ?? [];

  let [basis, cross] = args;

  const [, , axisRange, crossRange] = args;

  let [axisMin, axisMax] = axisRange?.split("-") ?? [];

  let [crossMin, crossMax] = crossRange?.split("-") ?? [];

  if (shrink === undefined && grow && grow.trim() === "0") {
    shrink = "0";
  }

  axisMin = getDefaultOrValue(axisMin, DEFAULT_AXIS_MIN);
  axisMax = getDefaultOrValue(axisMax, DEFAULT_AXIS_MAX);
  crossMin = getDefaultOrValue(crossMin, DEFAULT_CROSS_MIN);
  crossMax = getDefaultOrValue(crossMax, DEFAULT_CROSS_MAX);
  basis = getDefaultOrValue(basis, DEFAULT_BASIS);
  cross = getDefaultOrValue(cross, DEFAULT_CROSS);
  grow = getDefaultOrValue(grow, DEFAULT_GROW);
  shrink = getDefaultOrValue(shrink, DEFAULT_SHRINK);

  basis = unitRepair(basis);
  cross = unitRepair(cross);
  axisMin = unitRepair(axisMin);
  axisMax = unitRepair(axisMax);
  crossMin = unitRepair(crossMin);
  crossMax = unitRepair(crossMax);

  const flex = `${grow} ${shrink} ${basis}`;

  el.style.flex = flex === DEFAULT_FLOW ? "" : flex;
  el.style[crossAttrName] = cross === DEFAULT_CROSS ? "" : cross;
  el.style[axisAttrMinName] = axisMin === DEFAULT_AXIS_MIN ? "" : axisMin;
  el.style[axisAttrMaxName] = axisMax === DEFAULT_AXIS_MAX ? "" : axisMax;
  el.style[crossAttrMinName] = crossMin === DEFAULT_CROSS_MIN ? "" : crossMin;
  el.style[crossAttrMaxName] = crossMax === DEFAULT_CROSS_MAX ? "" : crossMax;
};

export default handler;
