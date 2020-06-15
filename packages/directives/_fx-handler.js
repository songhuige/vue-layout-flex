const fxClass = ["fx-col", "fx-col-rvs", "fx-row", "fx-row-rvs"];

const justifyArr = ["center", "end", "start", "between", "around"];

const alignArr = ["center", "start", "end", "stretch", "baseline"];

const alignContentArr = [
    "center",
    "end",
    "start",
    "between",
    "around",
    "stretch"
];

const wrapClassArr = [];

wrapClassArr.push(...alignContentArr.map(align => `fx-wrap-${align}`));
wrapClassArr.push(...alignContentArr.map(align => `fx-wrap-rvs-${align}`));
wrapClassArr.push("fx-wrap-no");

const cartesian = (arr) =>
    arr.reduce(
        (a, b) =>
            a.map(x => b.map(y => x.concat(y))).reduce((a, b) => a.concat(b), []),
        [[]]
    );

const layoutCartesian = cartesian([justifyArr, alignArr]).map(
    arr => `fx-${arr[0]}-${arr[1]}`
);

/**
 * 添加warp属性产生的class
 * @param el HTMLElement
 * @param wrap 
 */
const addWrapClass = (el, wrap,) => {

    const [align, reverse] = wrap?.split?.(" ").filter?.(attr => attr !== "") ?? [];

    align === "no" && el.classList.add(`fx-wrap-no`);

    if (align && alignContentArr.includes(align)) {
        const reverseStr = reverse ? "-rvs" : "";
        el.classList.add(`fx-wrap${reverseStr}-${align}`);
    }
};

/**
 * 删除wrap属性产生的class
 * @param el HTMLElement
 * @param layout 
 */
const addLayoutClass = (el, layout) => {
    const [justify, align] = layout
        ?.split
        ?.(" ")
        .filter?.((attr) => attr !== "")
        ?? [];

    const layoutClass = justify && align && `fx-${justify}-${align}`;
    layoutClass && layoutCartesian.includes(layoutClass) && el.classList.add(layoutClass);
}


/**
 * 删除warp属性产生的class.
 * @param el HTMLElement
 */
const removeWrapClass = (el) => {
    el.classList.add(`fx-wrap-no`);
    el.classList.remove(...wrapClassArr);
};




/**
 * 删除layout属性产生的class.
 * @param el HTMLElement
 */
const removeLayoutClass = (el) => el.classList.remove(...layoutCartesian);



export default (el, { name }, { data }, { data: oldData }) => {
    const fxClassName = "fx-" + name;

    if (!el.classList.contains(fxClassName)) {
        el.classList.remove(...fxClass);
        el.classList.add(fxClassName);
    }

    const { layout, wrap } = data?.attrs ?? {};
    const { layout: oldLayout, wrap: oldWrap } = oldData?.attrs ?? {}

    if (layout !== oldLayout) {
        removeLayoutClass(el)
        addLayoutClass(el, layout)
    }

    if (wrap !== oldWrap) {
        removeWrapClass(el);
        addWrapClass(el, wrap);
    }

}
