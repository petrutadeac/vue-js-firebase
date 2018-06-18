<template>
<div>
  <nav-bar></nav-bar>
  <div>
    <div class="book__intro">
        <div>
          <img class="book__image" src="../assets/book1.png">
          <img class="book__image" src="../assets/book2.png">
          <img class="book__image" src="../assets/book3.png">
        </div>
        <h2 class="book__images_text">Latest books</h2>
    </div>
    <div class="panel-body">
      <h3>Personal library</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.uid">
          <td>{{book.title}}</td>
          <td>{{book.author}}</td>
          <td><button v-on:click="deleteBook(book)">Delete book</button></td>
          <td><button v-on:click="editBook(book),checkExpression='true'">Edit book</button></td>
        </tr>
      </tbody>
    </table>
    <button v-on:click='createBook' class="book__newBook"> New book</button>
  </div>
  <div class="panel-body" v-if="checkExpression==='true'">
         <form id="form" class="form-inline">
          <div class="form-group">
            <label for="bookTitle">Title:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
            <input type="hidden" id="bookKey" class="form-control" v-model="newBook.uid" >
          </div>
          <input v-on:click="updateBook(newBook)" type="submit" class="btn btn-primary" value="Update Book">
          <input v-on:click="checkExpression='false'" class="btn btn-primary" value="Cancel">
        </form>
      </div>
  </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      checkExpression: 'false',
      newBook: {
          title: '',
          author: '',
          uid: 'ff'
      },
      books: []
    }
  },
  methods: {
      createBook: function (){
        this.$router.replace('book');
      },

      deleteBook: function (book) {
        console.log('book delete',book)
        //booksRef.child(book['.key']).remove();
        axios.delete('http://localhost:8080/book/' + book.key)
              .then((result) => {
              this.$router.go();
      })
      .catch(e => {
        this.errors.push(e)
      })
      },

      editBook: function(book) {
        console.log("book edited",book);
       this.newBook.title=book.title;
       this.newBook.author=book.author;
       this.newBook.uid=book.key;
       console.log('book',book);
      
      },

       updateBook: function(book) {
        axios.put(`http://localhost:8080/book/` + this.newBook.uid, this.newBook)
          .then(response => {
            console.log(this.newBook);
            this.$router.go();
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
  },

   created () {
    axios.get(`http://localhost:8080/book`)
    .then(response => {
      this.books = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  components: {
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book__image {
  width: 20%;
}

.book__newBook {
margin-left: 1260px;
}
.panel-body {
  background-color: lightyellow;
}
</style>
