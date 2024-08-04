<template>
  <div id="app">
    <nav>
      <router-link to="/">Login</router-link>
      <router-link to="/register">Registro</router-link>
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  background-color: #42b983;
  padding: 20px;
}

nav a {
  color: white;
  font-weight: bold;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #d1e1e8;
}

nav a.router-link-exact-active {
  color: #d1e1e8;
}
</style>
