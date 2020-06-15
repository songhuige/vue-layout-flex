import col from './directives/col';
import row from './directives/row';
import colRvs from './directives/col-rvs';
import rowRvs from './directives/row-rvs';
import colFlow from './directives/col-flow';
import rowFlow from './directives/row-flow';
import self from './directives/self';

const install = function (Vue) {
    if (install.installed) return
    install.installed = true

    Vue.directive('col', col);
    Vue.directive('row', row);
    Vue.directive('col-rvs', colRvs);
    Vue.directive('row-rvs', rowRvs);
    Vue.directive('col-flow', colFlow);
    Vue.directive('row-flow', rowFlow);
    Vue.directive('self', self);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}