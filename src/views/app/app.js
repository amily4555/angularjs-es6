"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {$$NoteDirec} from '../common/directive/mNote.direc';
var global_1 = require('../common/global');
// import { Header } from '../layout';
/**
 * Component 元数据(matadata)
 *
 * selector    string    自定义组件的标签，用于匹配元素
 * inputs    string[]    指定组件的输入属性
 * outputs    string[]    指定组件的输出属性
 * host    {[key: string]: string;}    指定指令/组件的事件、动作和属性等
 * providers    any[]    指定该组件及其所有子组件（含 ContentChildren）可用的服务
 * exportAs    string    给指令分配一个变量，使得可以在模板中调用
 * moduleId    string    包含该组件模块的 id，它被用于解析模版和样式的相对路径
 * queries    {[key: string]: any;}    设置需要被注入到组件的查询
 * viewProviders    any[]    指定该组件及其所有子组件（不含 ContentChildren）可用的服务
 * changeDetection    ChangeDetectionStrategy    指定使用的变化检测策略
 * templateUrl    string    指定组件模板所在的路径
 * template    string    指定组件的内联模板
 * styleUrls    string[]    指定组件引用的样式文件
 * styles    string[]    指定组件使用的内联样式
 * animations    AnimationEntryMetadata[]
 * directives    Array    指定该组件需要依赖的其他指令，或组件
 * pipes    Array    指定该组件需要注入的管道
 * encapsulation    ViewEncapsulation    设置组件的视图包装选项
 * interpolation    [string, string]
 */
var AppCpt = (function () {
    function AppCpt(G) {
        this.G = G;
    }
    AppCpt = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'views/layout/layout.html',
            animations: [
                core_1.trigger('mnote', [
                    core_1.state('hide', core_1.style({
                        display: 'none'
                    })),
                    core_1.state('show', core_1.style({
                        display: 'none'
                    })),
                    core_1.transition('hide => show', [
                        core_1.animate('500ms 1500ms ease-in', core_1.style({
                            'background-color': 'rgba(18, 61, 64, .8)',
                            top: '-100px'
                        }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [global_1.GLOBAL])
    ], AppCpt);
    return AppCpt;
}());
exports.AppCpt = AppCpt;
//# sourceMappingURL=app.js.map