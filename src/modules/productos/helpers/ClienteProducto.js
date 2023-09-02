import axios from "axios";

export const ingresarProductoFachada=(producto)=>{
    ingresarProducto(producto);
}

const ingresarProducto=(producto)=>{
    axios.post('http://localhost:8080/API/v1.0/Supermercado/productos',producto).then(r=>r.data);
}

export const buscarProductoCodigoBarrasYCantidadFachada=async(codigoBarras,producto)=>{
    return await buscarProductoCodigoBarrasYCantidad(codigoBarras,producto);
}

const buscarProductoCodigoBarrasYCantidad=async(codigoBarras,producto)=>{
    const data= axios.put(`http://localhost:8080/API/v1.0/Supermercado/productos/${codigoBarras}`,producto).then(r=>r.data);
    return data;
}