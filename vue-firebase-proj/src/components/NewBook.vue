<template>
  <div >
    <nav-bar></nav-bar>
    <form class="bookform__wrapper">
    <div class="form-group">
        <label for="bookName">Book title</label>
        <input v-model="newBook.title" class="form-control" id="bookTitle" aria-describedby="emailHelp" placeholder="Enter the book title">
    </div>
    <div class="form-group">
        <label for="author">Book author</label>
        <input v-model="newBook.author" type="bookAuthor" class="form-control" id="bookAuthor" placeholder="Author">
    </div>
    <button type="submit" class="btn btn-primary" v-on:click='insertBook'>Add new book</button>
     <button type="submit" class="btn btn-primary" v-on:click='cancel'>Cancel</button>
    </form>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      newBook: {
          title: '',
          author: '',
      }
    }
  },
  methods: {
        insertBook: function(){
                axios.post(`http://localhost:8080/book`, this.newBook)
                .then(response => {
                    this.$router.replace('hello')
                })
                .catch(e => {
                    this.errors.push(e)
                })
    },
        cancel: function(){
            this.$router.replace('hello')
         }
      },
  components: {
    NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookform__wrapper {
    width: 50%;
    position: relative;
    margin-left: 450px;
    margin-top: 40px;
    background-color: lightyellow;
    border: 50px;
    border-color: black;
}
</style>
