
function ocultarSeccion() {
    let ocultar = document.getElementById('seccion').style.display = "none";
    return ocultar
}

function mostrarSeccion(mostrar) {
    mostrar = document.getElementById('seccion').style.display = "block";
    return mostrar;
}

function limpiarInputs() {
    let limpiar = document.getElementById('btnLimpiar');
    limpiar.addEventListener('click', function () {
        document.getElementById('ValorDescuento').value = "";
        document.getElementById('total').value = "";
        document.getElementById('valorCompra').value = "";
        let descuento = document.getElementById('descuento')
        descuento.innerHTML = ("");
    })
    return limpiar;
}

let boton = document.getElementById('btnEnviar');
ocultarSeccion();
limpiarInputs();
boton.addEventListener('click', () => {
    mostrarSeccion();
    let nombre1 = document.getElementById('nombre').value;
    let apellido1 = document.getElementById('apellido').value;
    let cant = Number(document.getElementById('cantidad').value);
    let valor= parseInt(document.getElementById('valorCompra').value=(`${820000*cant}$`));
    let descuento = document.getElementById("descuento");
    if ((valor > 0) && (valor < 1640000)) {
        descuento.innerHTML = (`Tienes un descuento del 0% señorit@ ${nombre1} ${apellido1}`);
        ValorDescuento = document.getElementById("ValorDescuento").value = ("No hay descuento")
        total = document.getElementById("total").value = (`${valor}$`)
    }
    else if ((valor >= 1640000) && (valor <= 3280000)) {
        descuento.innerHTML = (`Tienes un descuento del 15% señorit@ ${nombre1} ${apellido1}`);
        ValorDescuento = parseInt(document.getElementById("ValorDescuento").value = (`${(valor/100)*15}$`));
        total = parseInt(document.getElementById("total").value = (`${valor-ValorDescuento}$`));
    }
    else if ((valor > 3280000) && (valor <= 6560000)) {
        descuento.innerHTML = (`Tienes un descuento del 25% señorit@ ${nombre1} ${apellido1}`);
        ValorDescuento = parseInt(document.getElementById("ValorDescuento").value = (`${(valor/100)*25}$`));
        total = parseInt(document.getElementById("total").value = (`${valor-ValorDescuento}$`));
    }
    else if ((valor > 6560000) && (valor <= 9840000)) {
        descuento.innerHTML = (`Tienes un descuento del 35% señorit@ ${nombre1} ${apellido1}`);
        ValorDescuento = parseInt(document.getElementById("ValorDescuento").value = (`${(valor/100)*35}$`));
        total = parseInt(document.getElementById("total").value = (`${valor-ValorDescuento}$`));
    }
    else if (valor >= 9840000) {
        descuento.innerHTML = (`Tienes un descuento del 0% señorit@ ${nombre1} ${apellido1}`);
        ValorDescuento = parseInt(document.getElementById("ValorDescuento").value = (`No tiene descuento`));
        total = parseInt(document.getElementById("total").value = (`${valor}$s`));
    }
    else {
        ocultarSeccion();
        alert('Hazlo otra vez')
        }
})








































































