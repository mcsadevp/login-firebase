<template>
  <div class="registerClass">
    <h2>Registro</h2>
    <label for="email">Email</label>
    <input v-model="email" type="email" id="email" placeholder="Ingrese su correo..." />
    <br />
    <label for="password">Contraseña</label>
    <input v-model="password" type="password" id="password" placeholder="Ingrese su contraseña..." />
    <br />
    <button @click="register">Registrarse</button>
  </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword } from "../config/firebaseConfig";

export default {
  name: "NewUser",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("Credenciales", userCredential);
        const user = userCredential.user;

        console.log("Usuario registrado", user);
      } catch (error) {
        console.log("Error en el registro", error);
      }
    },
  },
};
</script>

<style scoped>
.registerClass {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-bottom: 20px;
  color: #42b983;
}

label {
  display: block;
  margin: 10px 0 5px;
  color: #333;
}

input {
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #42b983;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #36a371;
}
</style>
