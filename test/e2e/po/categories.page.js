var CategoriesPage = function () {

    var category = {
        activeSectionLink: element(by.binding('sc.activeSection')),
        buttonAdd: element(by.buttonText('Add')),
        input: element(by.model('sc.newSection')),
        list: element.all(by.repeater('section in sc.readSections()'))
    };
    //Categories
    this.addCategory = function (params) {
        category.input.sendKeys(params)
            .then(() => {
                category.buttonAdd.click();
            })
    }

    this.getCategories = function () {
        return category.list.map((c) => {
            return { name: c.$('div').getText(), count: c.$('span').getText() };
        })
    }

    this.selectCategory = function (name) {
        category.list
            .filter((elem, index) => {
                return elem.$('div').getText().then((text) =>
                    text === name
                );
            })
            .first().click();
    }

    this.getURL = function () {
        return browser.getCurrentUrl();
    }

    this.filterActiveSection = function () {
        category.activeSectionLink.click();
    }
}
module.exports = new CategoriesPage();