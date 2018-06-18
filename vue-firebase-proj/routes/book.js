var express = require('express');
var router = express.Router();
var firebase = require('firebase');

var config =
{   apiKey: "AIzaSyDsqnwyY5p3T7sS9KmZ2_ndbROvFFH5j94",
    authDomain: "uni-project-c3b29.firebaseapp.com",
    databaseURL: "https://uni-project-c3b29.firebaseio.com",
    projectId: "uni-project-c3b29",
    storageBucket: "",
    messagingSenderId: "58512999093"
}

var firebaseApp = firebase.initializeApp(config);
var books = new Array();
var booksRef = firebaseApp.database().ref('books');

function book(author, title, key) {
    this.author = author;
    this.title = title;
    this.key = key;
}

function bookInsert(author, title) {
    this.author = author;
    this.title = title;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send(firebaseApp.database().ref('books').val());
  firebaseApp.database().ref('books').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var bookKey = childSnapshot.key;
      var bookTitle = childSnapshot.val().title;
      var bookAuthor = childSnapshot.val().author;
      console.log ('key', bookKey);
      console.log ('autho', bookAuthor);
      console.log ('title', bookTitle);
      books.push(new book(bookAuthor, bookTitle, bookKey));
    });
    res.send(JSON.stringify(books));
  });  
 
  books=[];
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
   
    booksRef.child(req.params.id).remove().then(
        function(succes){
            res.json({message: "succesfully deleted"});
        },
        function(err)
        {
            res.send(err.message);
        }
    );
  });

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {

    var book = new bookInsert(req.body.author, req.body.title);
    console.log('book:  ',book);
    booksRef.child(req.params.id).set(book).then(
        function(succes){
            res.json({message: "succesfully updated"});
        },
        function(err)
        {
            res.send(err.message);
        }
    );

        res.json({message: "succesfully updated"});
  });


  /* SAVE BOOK */
router.post('/', function(req, res, next) {

        
    var book = new bookInsert(req.body.author, req.body.title)
    console.log('book:  ',book);
    booksRef.push(book).then (
        (succeded)=> {
            res.json({message: "succesfully inserted"});
        },
        (err)=>{
            alert(err.message)
        }
    )
   
    
  });

module.exports = router;