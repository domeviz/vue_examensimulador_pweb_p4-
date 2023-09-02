<template>
  <!-- <IngresarProductosVue/> -->
  <!-- <IngresarVentasVue/> -->
  <router-link to="/productos"><button>Productos</button></router-link>
  <router-link to="/ventas"><button>Ventas</button></router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import IngresarProductosVue from './modules/productos/components/IngresarProductos.vue'
import IngresarVentasVue from './modules/ventas/components/IngresarVentas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    IngresarProductosVue,
    IngresarVentasVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
