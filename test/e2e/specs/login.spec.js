var loginPage = require("../po/login.page");
describe("registration and sign-in", function() {
  beforeEach(function() {
    browser.get("");
  });
  afterEach(function() {
    loginPage.isloginedIn().then(x => {
      if (x) loginPage.logout();
    });
  });

  it("should be able to register as new user ", function(done) {
    try {
      loginPage.registerUser("John Dou", "123456", "123456");
      expect(loginPage.isloginedIn()).toBeFalsy();
    } catch (error) {
      fail();
    }
    done();
  });

  it("should be able to sign-in", function() {
    var user = { name: "Chuck Berry", pass: "123456" };
    loginPage.registerUser(user.name, user.pass, user.pass);
    loginPage.login(user.name, user.pass);
    expect(loginPage.getGreeting()).toEqual(`Welcome back, ${user.name}!`);
  });

  it("should be able to logout", function() {
    var user = { name: "John Dou", pass: "123456" };
    loginPage.login(user.name, user.pass);
    expect(loginPage.isloginedIn()).toBeTruthy();
    loginPage.logout();
    expect(loginPage.isloginedIn()).toBeFalsy();
  });
});
