const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const btnAgregar = document.getElementById("btnAgregar");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertValidaciones = document.getElementById("alertValidaciones");
const contadorProductos = document.getElementById("contadorProductos");
const precioTotal = document.getElementById("precioTotal");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
//esto sirve para obtener el cuerpo de la tabla donde se van a agregar los productos.
const productosTotal = document.getElementById("productosTotal");
//esto sirve para mostrar la cantidad total de productos agregados.


let cont = 0;
//esto sirve para contar la cantidad de productos agregados.
let totalEnProductos = 0;
//esto sirve para sumar la cantidad de productos agregados.
let costoTotal = 0;
//esto sirve para sumar el costo total de los productos agregados.
let precioProducto = 0;
//esto sirve para almacenar el precio de cada producto agregado.

function validarCantidad(cantidad) {
    if (cantidad.length == 0) {
        return false;
    }//length == 0 esto significa que el campo esta vacio.
    if (isNaN(cantidad)) {
        return false;
    }//isNaN significa "is Not a Number" o "no es un numero".
    if (Number(cantidad) <= 0) {
        return false;
    }//<0 significa que el numero es negativo o cero.
    return true;
}//validarCantidad

function getPrecio() {
    return Math.round(Math.random() * 10000) / 100;
}//getPrecio genera un precio aleatorio entre 0 y 100.00

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    let isValid = true;
    txtName.style.border = "";
    txtNumber.style.border = "";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    //esto significa que al dar click en el boton se limpian las validaciones anteriores.

    if (txtName.value.length < 3) {
        txtName.style.border = "solid thin red";
        alertValidacionesTexto.innerHTML = "<stron>El nombre es obligatorio.</stron><br>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }// en caso de que el nombre sea menor a 3 caracteres aparece la alerta.

    if (!validarCantidad(txtNumber.value)) {
        txtNumber.style.border = "solid thin red";
        alertValidacionesTexto.innerHTML += "<stron>La cantidad es obligatoria.</stron>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }// en caso de que la cantidad no sea valida aparece la alerta.  

    if (isValid) {
        let precio = getPrecio();
        cont++;
        let row = `<tr>
        <td>${cont}</td>
        <td>${txtName.value}</td>
        <td>${txtNumber.value}</td>
        <td>${precio}</td>
        </tr>`;
        //esto sirve para crear una fila en la tabla con los datos del producto agregado.
        console.log(getPrecio);

        totalEnProductos += Number(txtNumber.value);
        //Esto sirve para sumar la cantidad de productos agregados.
        costoTotal += precio * Number(txtNumber.value);
        //Esto sirve para sumar el costo total de los productos agregados.

        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        contadorProductos.innerText = cont;
        //esto sirve para mostrar la cantidad de productos agregados.
        productosTotal.innerText = totalEnProductos;
        //esto sirve para mostrar la cantidad total de productos agregados.
        precioTotal.innerText = new Intl.NumberFormat("es-MX",
            { style: "currency", currency: "MXN" }).format(costoTotal);
        //esto sirve para mostrar el costo total de los productos agregados y para darle formato de moneda MXN.

        txtName.value = "";
        txtNumber.value = "";
        //esto sirve para limpiar los campos de texto despues de agregar un producto.
        txtName.focus();
        //esto sirve para poner el foco en el campo de texto del nombre despues de agregar un producto.

    }

    console.log(txtName.value);

});
