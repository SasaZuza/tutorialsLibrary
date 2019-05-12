<template>
  <div>
    <h1>Register</h1>
    <!-- Adding input field and button for registration - email and password -->
    <!-- 'v-model' bind inputed data in 'data()' method bellow -->
    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <!-- Adding onClick listener to this button -->
    <button @click="register">Register</button>
  </div>
</template>

<script>
// Importing AuthenticationService from this path
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    // Calling register method added to 'Register' button
    async register() {
      // Calling 'register' from this file and adding email and password to registration
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      // Loging data to console
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
