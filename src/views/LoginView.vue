<template>
  <div class="login">
    <h2>Login</h2>
    <LoginUser/>
  </div>
</template>

<script>
import LoginUser from '../components/LoginUser.vue'; 

export default {
  name: "LoginView",
  components: {
    LoginUser
  }
};
</script>