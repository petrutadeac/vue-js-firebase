<template>
  <div class="signup__wrapper">
    <h3>Sign up</h3>
    <input type="text" placeholder="Email" class="signup__email" v-model="email"><br>
    <input type="password" placeholder="Password" class="signup__password" v-model="password"><br>
    <button class="signup__button" v-on:click="signUp">Sign up</button>
    <p><router-link to="login"> to Login</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data () {
    return {
        email:'',
        password:''
    }
  },
  methods: {
      signUp: function () {
          console.log('------');
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(
                function (user) {
                    alert("Your account has been created succesfully");
                },
                function(err)
                {
                    alert(err.message);
                }
            )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
