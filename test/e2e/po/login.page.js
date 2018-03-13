var LoginPage = function () {

    var login = {
        userName: element(by.model('usic.username')),
        password: element(by.model('usic.password')),
        signinButton: element(by.buttonText('Sign in')),
        registerButton: element(by.cssContainingText('a', 'Register')),
        userGreeting: element(by.id('greeting'))
    }

    var regForm = {
        username: element(by.model('ufc.user.username')),
        password: element(by.model('ufc.user.password')),
        repeatPassword: element(by.model('ufc.user.repeatPassword')),
        submitButton: element(by.buttonText('Submit'))
    }

    this.signIn = function (username, password) {
        login.userName.sendKeys(username);
        login.password.sendKeys(password);
        login.signinButton.click();
    }

    this.registerUser = function (username, password, repeatPassword) {
        login.registerButton.click();
        regForm.username.sendKeys(username);
        regForm.password.sendKeys(password);
        regForm.repeatPassword.sendKeys(repeatPassword);
        regForm.submitButton.click();
    }

    this.getGreeting = function () {
        return login.userGreeting.getText();
    }
}

module.exports = new LoginPage();