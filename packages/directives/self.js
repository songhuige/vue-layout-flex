
const alignSelfArr = ["center", "start", "end", "stretch", "baseline"];

const alignClass = alignSelfArr.map(align => `fx-self-${align}`);

const handler = (el, { arg }) => {
  arg = arg || "auto";

  if (alignSelfArr.includes(arg)) {
    if (!el.classList.contains(`fx-self-${arg}`)) {
      el.classList.remove(...alignClass);
      el.classList.add(`fx-self-${arg}`);
    }
  } else {
    el.classList.remove(...alignClass);
  }
};

const self = {
  bind: handler,
  update: handler
};

export default self;
