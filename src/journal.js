export function Entry(title, content) {
    this.title = title,
    this.content = content;
  }

  var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "y", "Y"];
  var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z", "q", "Q"];


export function Journal() {
  this.entries = [];
  this.currentId = 0;
}

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries.push(entry);
}
