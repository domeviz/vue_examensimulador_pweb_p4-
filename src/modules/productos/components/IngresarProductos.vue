<template>
    <div class="formulario_guardar">
        <label for="">Código de Barras</label>
        <input v-model="codigoBarras" type="text">
        <label for="">Nombre</label>
        <input v-model="nombre" type="text">
        <label>Categoría</label>
        <input v-model="categoria" type="text">
        <label>Stock</label>
        <input v-model="stock" type="text">
        <label>Precio Unitario</label>
        <input v-model="precio" type="text">
        <button @click="guardar">Guardar</button>
    </div>
</template>

<script>
import { ingresarProductoFachada } from '../helpers/ClienteProducto';
import { obtenerTokenFachada } from '../../../helpers/ClienteToken'

export default {
    data() {
        return {
            codigoBarras: null,
            nombre: null,
            categoria: null,
            stock: null,
            precio: null,
        }
    },
    methods: {
        async guardar() {
            const data = {
                codigoBarras: this.codigoBarras,
                nombre: this.nombre,
                categoria: this.categoria,
                stock: this.stock,
                precio: this.precio
            }
            const user={
                username:"dome",
                password:"123"
            }
            const token=await obtenerTokenFachada(user);
            ingresarProductoFachada(data,token);
            this.reset()
        },
        reset() {
            this.codigoBarras = null
            this.nombre = null
            this.categoria = null
            this.stock = null
            this.precio = null
        }
    }
}
</script>

<style>
.formulario_guardar {
    display: grid;
}
</style>