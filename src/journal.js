export function Entry(title, content, date) {
  this.title = title,
  this.content = content;
  this.date = date;
}

var vowelArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "y", "Y"];
var consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "V", "W", "X", "Z", "q", "Q"];

Entry.prototype.vowelCount = function() {
  var counter = 0;
  var array = this.content.split("");
  console.log(array)
    for (var i = 0; i <= array.length; i++) {
      if (vowelArray.includes(array[i]))
      {
      counter ++
      }
    }
  return counter;
}

Entry.prototype.consonantCount = function() {
  var counter = 0;
  var array = this.content.split("");
  console.log(array)
    for (var i = 0; i <= array.length; i++) {
      if (consonantArray.includes(array[i]))
      {
      counter ++
      }
    }
  return counter;
}

export function Journal() {
  this.entries = [];
  this.currentId = 0;
}

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Journal.prototype.addEntry = function(entry) {
  entry.id = this.assignId();
  this.entries.push(entry);
};
