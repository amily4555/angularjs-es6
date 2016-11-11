import angular from "angular";
import beFooterCmp from "./be-footer.cmp";


let LayoutModule = angular.module('layout.module', [])

    .component('feFooter', beFooterCmp);

export default LayoutModule;
