class stock {
    constructor(corte, precio){
        this.corte =  corte
        this.precio = precio
    }
}


const vacio = new stock("vacio", 1000)
const costilla = new stock("costilla", 1100)
const costeleta = new stock("costeleta", 800)


const arrayStock = [vacio, costilla, costeleta]

compra = prompt(`que quieres comprar? \n 1-vacio $1000 \n 2-costilla $1100 \n 3-costeleta $800 \n 4-abandonar \n 5-ver carrito`);

let carrito = []
let total = Number(0)
let enzo = true



function vender() { while(compra != "4" && enzo == true){
    switch(compra){
        case "1":
            console.log("a seleccionado vacio")
            carrito.push(vacio.corte)
            total = total + vacio.precio
            break;
        case "2":
            console.log("a seleccionado costilla")
            carrito.push(costilla.corte)
            total = total + costilla.precio
            break;
        case "3":
            console.log("a seleccionado costeleta")
            carrito.push(costeleta.corte)
            total = total + costeleta.precio
            break;
        case "5":
            let pagar = prompt(`${carrito} \n total a pagar : $${total} \n 1-confirmar compra \n 2-seguir comprando`)
            if(pagar == 1){
                alert(`a comprado: \n${carrito} a $${total}`)
                enzo = false ;
            } else if(pagar == 2){
                break;
            } else{
                continue
            }

            break;
        default:
            console.log("no tenemos esa opcion")
    }

if (enzo == true){compra = prompt(`que quieres comprar? \n 1-vacio $1000 \n 2-costilla $1100 \n 3-costeleta $800 \n 4-abandonar \n 5-ver carrito`);}

    }
}

if(compra != "4"){
    vender();
}



