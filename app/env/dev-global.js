/**
 * 测试环境下全局常量
 * @type {{}}
 */
let GLOBAL = {
    'ENV': 'DEV',
    // 是否开启全局调试
    'DEBUG': true,
    // 默认每页条数
    'SIZE': 20,
    // 默认系统显示语言
    'LANG': 'zh-cn'
};

window.GLOBAL = GLOBAL;
module.exports = GLOBAL;
