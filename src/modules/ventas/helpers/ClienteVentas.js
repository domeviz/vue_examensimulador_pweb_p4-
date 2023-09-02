import axios from "axios";

export const ingresarVentaFachada=(venta,token)=>{
    ingresarVenta(venta,token);
}

const ingresarVenta=(venta,token)=>{
    const headers = {
        "Authorization": "Bearer " + token,
    }
    axios.post('http://localhost:8080/API/v1.0/Supermercado/ventas',venta,{headers:headers}).then(r=>r.data);
}