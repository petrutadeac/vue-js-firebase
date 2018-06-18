<template>
  <div class="login__wrapper">
    <img src="../assets/logo.png" class="login__image">
    <h3>Welcome to BookSteria</h3>
    <input type="text" placeholder="Email" class="login__form" v-model="email"><br>
    <input type="password" placeholder="Password" class="login__form" v-model="password"><br>
    <button class="login__button" v-on:click="logIn">Log in</button>
    <p><router-link to="/signup">Don't you have an account? Create one!</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase';


export default {
  name: 'login',
  data () {
    return {
        email:'',
        password:''
    }
  },
  methods: {
      logIn : function () {
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
            (user)=> {
                this.$router.replace('hello');
            },
            (err)=> {
                alert (err.message);
            }
        )
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login__image {
  width: 25%;
}

.login__form {
    width: 10%;
    text-align: center;
    padding: 5px;
    margin-top: 5px;
}
.login__button {
    width: 7%;
    margin-top: 20px;
    color: black;
}
</style>
