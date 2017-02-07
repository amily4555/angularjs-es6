export default class userDetailCtrl {
    constructor($stateParams, $R) {
        $R.users.get({}, (rst) => {
            this.user = rst.data.find((o) => {
                return o.userId === +$stateParams.userId;
            });
        });

        // DEMO, 错误请求
        // $R.users.post({}, (rst) => {
        // });
    }
}


