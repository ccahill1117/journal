import { Entry, Journal } from './journal';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var journal = new Journal();
var entryTest = new Entry("title","body");
journal.addEntry(entryTest);


// $(document).ready(function() {
//     event.preventDefault();
//   const title = $('#blogTitleInput').val();
//   const content = $('#blogContentInput').val();
//   var entry = new Entry(title, content);
//   debugger
//
//   });
// });

$('#postButton').click(function() {
 const title = $('#blogTitleInput').val();
 const content = $('#blogContentInput').val();
 let newEntry = new Entry(title, content);
 journal.addEntry(newEntry);
 console.log(journal.entries);
 $('.blog-posts').append('<div class="well"<h2>' + newEntry.title + '</h2><p>' + newEntry.content + '</p></div>');


  $('#flashMessage')
  .slideDown(500)
  .delay(3000)
  .slideUp(500);
});
