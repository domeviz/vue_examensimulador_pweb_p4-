<template>
    <div class="formulario_guardar">
        <label for="">Número Venta</label>
        <input v-model="numeroVenta" type="text">
        <label for="">Cédula Cliente</label>
        <input v-model="cedulaCliente" type="text">
        <!-- <label for="">Productos</label>
        <input v-model="productos" type="text"> -->
        <button @click="ingresarVenta">Guardar</button>
    </div>
    <div class="form">
        <div class="form-input">
            <label for="">Codigo Barras</label>
            <input type="text" v-model="codigoBarras" />
        </div>
        <div class="form-input">
            <label for="">Cantidad</label>
            <input type="number" v-model="cantidad" />
        </div>
        <div class="form-button">
            <button @click="agregarProducto">Ingresar</button>
        </div>
    </div>
    <div class="tabla">
        <item>Total: {{ total.toFixed(2) }}</item> 
        <table border="2" v-if="productos">
            <tr>
                <th>C. Barras</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
            </tr>
            <tr v-for="item in productos" :key="item.codigoBarras">
                <td>{{ item.codigoBarras }}</td>
                <td>{{ item.nombre }}</td>
                <td>{{ item.cantidad }}</td>
                <td>{{ item.precio.toFixed(2) }}</td>
                <td>{{ item.subtotal.toFixed(2) }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { buscarProductoCodigoBarrasYCantidadFachada } from '@/modules/productos/helpers/ClienteProducto';
import { ingresarVentaFachada } from '../helpers/ClienteVentas';

export default {
    data() {
        return {
            numeroVenta: null,
            cedulaCliente: null,
            productos: [],
            codigoBarras: null,
            cantidad: null,
            total:0
        }
    },
    methods: {
        async ingresarVenta() {
            const data = {
                numeroVenta: this.numeroVenta,
                cedulaCliente: this.cedulaCliente,
                productos: this.productos
            }
            ingresarVentaFachada(data);
            this.reset()
        },
        reset() {
            this.numeroVenta = null
            this.cedulaCliente = null
            this.productos = []
            this.codigoBarras=null
            this.cantidad=null
            this.total=0
        },
        async agregarProducto() {
            const data = {
                cantidad: this.cantidad
            }
            var a= await buscarProductoCodigoBarrasYCantidadFachada(this.codigoBarras, data);
            if(a.cantidad==null){
                alert('Producto no disponible')
            } else{
                a.subtotal=a.cantidad*a.precio;
                this.productos.push(a);
                this.total+=a.subtotal
            }
        }
    }
}
</script>

<style>
.formulario_guardar {
    display: grid;
}
.tabla{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
*{
    margin: 5px;
}
</style>