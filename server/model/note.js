class Note {
  constructor(id, user, section, text) {
    this.id = id;
    this.user = user;
    this.section = section;
    this.text = text;
    this.time = new Date();
  }

  getNote() {
    return {
      id: this.id,
      user: this.user,
      section: this.section,
      text: this.text,
      time: this.time
    };
  }

  setSection(sec) {
    this.section = sec;
    this.time = new Date();
  }
  setText(txt) {
    this.text = txt;
    this.time = new Date();
  }
}

module.exports = Note;
