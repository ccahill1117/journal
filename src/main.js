import { Entry, Journal } from './journal';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var journal = new Journal();
// var entryTest = new Entry("title","this is some content. And some more content. Swiggity.","date");
// journal.addEntry(entryTest);
// $('.blog-posts').append('<div class="well"><h2>' + entryTest.title + entryTest.date + '</h2><p>' + entryTest.content + '</p></div>');

$('#postButton').click(function() {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();
  let today = new Date;
  console.log(today);
  let yyyy = today.getFullYear();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let date = (dd + "/" + mm + "/" + yyyy);
  console.log(date);
  let newEntry = new Entry(title, content, date);
  journal.addEntry(newEntry);
  console.log(journal.entries);
  let vowelCount = newEntry.vowelCount();
  let consonantCount = newEntry.consonantCount();
  let getTeaser = newEntry.getTeaser();
  $('.blog-posts').append('<div class="card container"><h2>' + newEntry.title + "</h2><h3>" + newEntry.date + "</h3><h4> Lil Teaser: " + getTeaser + "</h4><p>" + newEntry.content + "</p><p><strong>Vowel Count:</strong> " + vowelCount + "</p><p><strong>Consonant Count:</strong> " + consonantCount + "</p></div>");


  $('#flashMessage')
    .slideDown(500)
    .delay(3000)
    .slideUp(500);
});
