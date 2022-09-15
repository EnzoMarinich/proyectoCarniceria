class stock {
    constructor(corte, precio){
        this.corte =  corte
        this.precio = precio
    }
    mostrarInfo(){
        return `corte: ${this.corte}  precio: $${this.precio} x kg.`
    }
}


const vacio = new stock("vacio", 1000)
const costilla = new stock("costilla", 1100)
const costeleta = new stock("costeleta", 800)


const arrayStock = [vacio, costilla, costeleta]

compra = prompt(`que quieres comprar? \n 1-${vacio.mostrarInfo()} \n 2-${costilla.mostrarInfo()} \n 3-${costeleta.mostrarInfo()} \n 4-abandonar \n 5-ver carrito`);

let carrito = []
let total = Number(0)
let enzo = true

function sumarAlCarrito(x, y){
    let eleccion = x
    carrito.push(eleccion.corte)
    total = total + (eleccion.precio * y)
}

function vender() { while(compra != "4" && enzo == true){
    switch(compra){
        case "1":
            let cantidadVacio =prompt("cuantos kg. desea?")
            alert(`a agregado al carrito ${cantidadVacio}kg. de vacio`)
            sumarAlCarrito(vacio, cantidadVacio)
            break;
        case "2":
            let cantidadCostilla =prompt("cuantos kg. desea?")
            alert(`a agregado al carrito ${cantidadCostilla}kg. de costilla`)
            sumarAlCarrito(costilla, cantidadCostilla)
            break;
        case "3":
            let cantidadCosteleta =prompt("cuantos kg. desea?")
            alert(`a agregado al carrito ${cantidadCosteleta}kg. de costeleta`)
            sumarAlCarrito(costeleta, cantidadCosteleta)
            break;
        case "5":
            let selec = carrito.join(`\n`)
            let pagar = prompt(`${selec} \n total a pagar : $${total} \n 1-confirmar compra \n 2-seguir comprando`)
            if(pagar == 1){
                alert(`a comprado: \n${selec} \n a $${total}`)
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



