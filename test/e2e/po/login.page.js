var LoginPage = function() {
  var login = {
    userName: element(by.model("usic.username")),
    password: element(by.model("usic.password")),
    loginButton: element(by.buttonText("Login")),
    registerButton: element(by.cssContainingText("a", "Register")),
    userGreeting: element(by.id("greeting")),
    logout: element(by.buttonText("Logout"))
  };

  var regForm = {
    username: element(by.model("uc.user.username")),
    password: element(by.model("uc.user.password")),
    repeatPassword: element(by.model("uc.user.repeatPassword")),
    submitButton: element(by.buttonText("Submit"))
  };

  this.login = function(username, password) {
    login.userName.sendKeys(username);
    login.password.sendKeys(password);
    login.loginButton.click();
  };

  this.logout = function() {
    login.logout.click();
  };

  this.registerUser = function(username, password, repeatPassword) {
    login.registerButton.click();
    regForm.username.sendKeys(username);
    regForm.password.sendKeys(password);
    regForm.repeatPassword.sendKeys(repeatPassword);
    regForm.submitButton.click();
  };

  this.isloginedIn = function() {
    return login.logout.isDisplayed();
  };

  this.getGreeting = function() {
    return login.userGreeting.getText();
  };
};

module.exports = new LoginPage();
