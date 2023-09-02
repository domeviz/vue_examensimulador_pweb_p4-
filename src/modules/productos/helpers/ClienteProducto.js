import axios from "axios";

export const ingresarProductoFachada=(producto,token)=>{
    ingresarProducto(producto,token);
}

const ingresarProducto=(producto,token)=>{
    const headers = {
        "Authorization": "Bearer " + token,
    }
    axios.post('http://localhost:8080/API/v1.0/Supermercado/productos',producto,{headers:headers}).then(r=>r.data);
}

export const buscarProductoCodigoBarrasYCantidadFachada=async(codigoBarras,producto,token)=>{
    return await buscarProductoCodigoBarrasYCantidad(codigoBarras,producto,token);
}

const buscarProductoCodigoBarrasYCantidad=async(codigoBarras,producto,token)=>{
    const headers = {
        "Authorization": "Bearer " + token,
    }
    const data= axios.put(`http://localhost:8080/API/v1.0/Supermercado/productos/${codigoBarras}`,producto,{headers:headers}).then(r=>r.data);
    return data;
}