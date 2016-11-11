// let usersCtrl = function ($R) {
//
//     var vm = this;
//
//     $R.users.get({}, function(rst){
//         vm.users = rst.data;
//     });
//
//     return vm;
// };
//
// export default usersCtrl;


import mu from 'mzmu';

export default class usersCtrl {
    constructor($R){
        this.$R = $R;

        $R.users.get({
            __errorHandle__: mu.noop,
            __beforeErrorHandle__: mu.noop,
            __afterErrorHandle__: mu.noop,
            __header__: {}
        }, (rst) => {
            this.users = rst.data;
        });
    }

    removeUser(user) {
        let index = this.users.findIndex(function(o){
            return o.userId === user.userId;
        });

        this.users.splice(index, 1);
    }

}

