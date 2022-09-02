


compra = prompt(`que quieres comprar? \n 1-vacio $1000 \n 2-costilla $1100 \n 3-costeleta $800 \n 4-abandonar \n 5-ver carrito`);

let carrito = " "
let total = Number(0)



function vender() { while(compra != "4"){
    switch(compra){
        case "1":
            console.log("a seleccionado vacio")
            carrito += "vacio \n"
            total = total + 1000
            break;
        case "2":
            console.log("a seleccionado costilla")
            carrito += "costilla \n"
            total = total + 1100
            break;
        case "3":
            console.log("a seleccionado costeleta")
            carrito += "costeleta \n"
            total = total + 800
            break;
        case "5":
            let pagar = prompt(`${carrito} \n total a pagar : $${total} \n 1-confirmar compra \n 2-seguir comprando`)
            if(pagar == 1){
                alert(`a comprado: \n${carrito} a $${total}`)
                
            } else if(pagar == 2){
                break;
            } else{
                continue
            }

            break;
        default:
            console.log("no tenemos esa opcion")
    }

compra = prompt(`que quieres comprar? \n 1-vacio $1000 \n 2-costilla $1100 \n 3-costeleta $800 \n 4-abandonar \n 5-ver carrito`);

    }
}

if(compra != "4"){
    vender();
}



