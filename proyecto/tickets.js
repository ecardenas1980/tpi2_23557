function montoPagar() {

    Event.preventDefault();    

let cantidad = parseInt(document.getElementById("input-cantidad").value);
let categoria = document.getElementById("select-tickets").value;

const valor = 200;
valorT = 0;

    if (cantidad > 0 && categoria > 0 && categoria <= 4) {

        /* El valor 1 del select representa al primer elemento Estudiante */
        if (categoria == 1) {
            valorEntrada = valor * 0.2;
            valorT = valorEntrada * cantidad;
        
        /* El valor 2 del select representa al segundo elemento Trainee */    
        }else if(categoria == 2) {
            valorEntrada = valor * 0.5;
            valorT = valorEntrada * cantidad;
        }
        
        /* El valor 3 del select representa al tercer elemento Junior */    
        else if(categoria == 3) {
            valorEntrada = valor * 0.85;
            valorT = valorEntrada * cantidad;
        
        } else if (categoria == 4) {
            valorEntrada = valor;
            valorT = valorEntrada * cantidad;
        }    
    } else {

            swal.fire({
            title: 'Error!',
            text: 'No se ha completado un campo o se ha ingresado un valor inválido',
            icon: "error",
            width: '330px'
        });
    }  
    

     
    document.getElementById("input-total-pagar").value='Total a pagar: $' + valorT;
}

