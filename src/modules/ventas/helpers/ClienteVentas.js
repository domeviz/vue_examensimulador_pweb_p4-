import axios from "axios";

export const ingresarVentaFachada=(venta)=>{
    ingresarVenta(venta);
}

const ingresarVenta=(venta)=>{
    axios.post('http://localhost:8080/API/v1.0/Supermercado/ventas',venta).then(r=>r.data);
}