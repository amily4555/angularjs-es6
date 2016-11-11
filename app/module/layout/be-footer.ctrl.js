class BeFooterCtrl {

    constructor(C, $translate) {
        this.lang = localStorage[C.STORAGE_LANG];
        this.$translate = $translate;
        this.C = C;
    }

    selectLang() {
        this.$translate.use(this.lang);
        localStorage.setItem(this.C.STORAGE_LANG, this.lang);
    }
}

export default BeFooterCtrl;
