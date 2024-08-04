<template>
  <div class="singUp">
    <h2>Sing Up!</h2>
    <NewUser/>
  </div>
</template>

<script>
import NewUser from '../components/NewUser.vue'; 

export default {
  name: "SingUpView",
  components: {
   NewUser
  }
};
</script>