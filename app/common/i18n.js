import angular from 'angular';
import ngTranslate from 'angular-translate/dist/angular-translate';
import ngTranslateLoader from 'angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files';

/**
 * 国际化配置
 */

let i18n = angular.module('i18n', [
    ngTranslate,
    ngTranslateLoader
])
    .config(['$translateProvider', 'C', ($translateProvider, C) => {
        var lang = window.localStorage[C.STORAGE_LANG] || C.LANG;
        localStorage.setItem(C.STORAGE_LANG, lang);

        $translateProvider.useStaticFilesLoader({
            prefix: '/i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage(lang);
        $translateProvider.useSanitizeValueStrategy('escapeParameters');
    }]);

export default i18n;

