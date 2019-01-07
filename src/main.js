import { Entry, Journal } from './journal';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var journal = new Journal();
var entryTest = new Entry("title","content","date");
journal.addEntry(entryTest);
$('.blog-posts').append('<div class="well"><h2>' + entryTest.title + entryTest.date + '</h2><p>' + entryTest.content + '</p></div>');

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
  $('.blog-posts').append('<div class="card container"><h2>' + newEntry.title + newEntry.date + '</h2><p>' + newEntry.content + '</p></div>');


  $('#flashMessage')
    .slideDown(500)
    .delay(3000)
    .slideUp(500);
});
