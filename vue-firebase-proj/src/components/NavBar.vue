<template>
<div class="nav__wrapper">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><img class="nav__image " src="../assets/logo.png">BookSteria</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="" v-on:clikc="signOut">Sign out</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Latest books</a></li>
      <li><a href="#">More..</a></li>
    </ul>
  </div>
  </nav>  
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'navBar',
  data () {
    return {
    }
  },
  methods: {
      signOut: function(){
          firebase.signOut();
          this.$router.replace('login')
      }
  }

}
</script>

<style>
.nav__image {
    width: 40px;
}
.container-fluid {
    background-color: lightyellow 
}

</style>
