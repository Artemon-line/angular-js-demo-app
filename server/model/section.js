class Sections {
  constructor(id, title, user) {
    this.title = title;
    this.user = user;
    this.id = id;
  }
  getSectionTitle() {
    return this.title;
  }
  getSectionUser() {
    return this.user;
  }
  getSectionId() {
    return this.id;
  }
}

module.exports = Sections;
