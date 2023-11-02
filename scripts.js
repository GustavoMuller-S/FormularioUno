/* operaciones con el selector de planes de seguro */

let seleccion = document.querySelector("select"); 
let resultado = document.querySelector("p");

seleccion.addEventListener('change', tipoSeguro);

function tipoSeguro(){
        let eleccion = seleccion.value;

        if (eleccion==="basico"){
            resultado.textContent ="El seguro es de $500";
        }else if (eleccion==="inter"){
            resultado.textContent ="El seguro es de $1000";
        }else if (eleccion==="premium"){
            resultado.textContent ="El seguro es de $1500";
        }
};

