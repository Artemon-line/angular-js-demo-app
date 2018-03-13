var loginPage = require('../po/login.page')
describe('registration and sign-in', function () {

    beforeEach(function () {
        browser.get('');
    })

    it('should bew able to register as new user ', function (done) {

        try {
            loginPage.registerUser("John Dou", "123456", "123456");
        } catch (error) {
            fail();
        }
        done();
    })

    it('should bew able to sign-in', function () {
        var user = { name: "Chuck Berry", pass: "123456" }
        loginPage.registerUser(user.name, user.pass, user.pass);
        loginPage.signIn(user.name, user.pass);
        expect(loginPage.getGreeting()).toEqual(`Welcome back, ${user.name}!`);
    })

});