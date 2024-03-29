const { userAPI } = require('../api'),
    { wrapAsync } = require('../infra');

module.exports = app => {

    app.route('/user/login')
        .post(wrapAsync(userAPI.login));

    app.route('/user/signup')
        .post(wrapAsync(userAPI.register)); 
        
    app.route('/user/exists/:userName')
        .get(wrapAsync(userAPI.checkUserNameTaken));
    
    app.route('/user/delete')
        .post(wrapAsync(userAPI.delete));
};