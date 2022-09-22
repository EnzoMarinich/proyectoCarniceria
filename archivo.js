class Stock {
    constructor(id, corte, precio, img){
        this.id= id
        this.corte =  corte
        this.precio = precio
        this.imagen = img
    }
    mostrarInfo(){
        return `corte: ${this.corte}  precio: $${this.precio} x kg.`
    }
}

const arrayStock = []
arrayStock.push(new Stock(1, "vacio", 1250, "img/a4460b_103ba30945f4425b8981c0d4336718de_mv2.jpg")) 
arrayStock.push(new Stock(2, "costilla", 1100, "img/costilla-cortepreferido-paraguayos-infoganaderia2-medium-size.jpg"))
arrayStock.push(new Stock(3, "costeleta", 800, "img/costeleta.jpg"))
arrayStock.push(new Stock(4, "matambre", 900, "img/Corte-matambre-de-res.jpg"))
arrayStock.push(new Stock(5, "cuadril", 950, "img/cuadril.jpg"))




// compra = prompt(`que quieres comprar? \n 1-${vacio.mostrarInfo()} \n 2-${costilla.mostrarInfo()} \n 3-${costeleta.mostrarInfo()} \n 4-abandonar \n 5-ver carrito`);


let sect = document.querySelector("section")
let temp = sect.querySelector("template")
let card = temp.content.querySelector("div")
let carrito = []
let total = Number(0)
let enzo = true
let carritoDeCompras = document.querySelector(".carrito")
let carritoModal = document.querySelector(".carritoModal")
let contadorCarrito = document.getElementById("contadorCarrito")


arrayStock.forEach((prod)=>{
    let cardClonada = card.cloneNode(true)
    sect.appendChild(cardClonada)
    cardClonada.children[0].src = prod.imagen
    cardClonada.children[1].innerText = prod.corte
    cardClonada.children[2].innerText = `$${prod.precio} por KG`
    cardClonada.children[3].classList.add(`button${prod.id}`)

    let buttonComprar = document.querySelector(`.button${prod.id}`)

    buttonComprar.addEventListener("click", ()=>{
    sumarAlCarrito(prod.id)
    contarCarrito()
    })
})

function contarCarrito(){
    contadorCarrito.innerText = `carrito ${carrito.length}`
}


function sumarAlCarrito (prodID){
    eleccion = arrayStock.find((prod)=> prod.id === prodID)
    carrito.push(eleccion)
}

const eliminarDelCarrito = (prodID)=>{
    let item = carrito.find((prod)=> prod.id === prodID)
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
    contarCarrito()
}

const actualizarCarrito = ()=>{
    carritoModal.innerHTML = ""

    carrito.forEach((prod)=>{
        const div = document.createElement("div")
        div.classList.add("producto__carrito")
        div.innerHTML= `
        <p>${prod.corte}        precio: $${prod.precio}</p>
        <button class="botonEliminar" onclick="eliminarDelCarrito(${prod.id})"  >eliminar</button>
        `
        carritoModal.appendChild(div)
        
    })
}

carritoDeCompras.addEventListener("click", ()=>{
    actualizarCarrito()
})




// function sumarAlCarrito(x, y){
//     let eleccion = x
//     carrito.push(eleccion.corte)
//     total = total + (eleccion.precio * y)
// }

// function vender() { while(compra != "4" && enzo == true){
//     switch(compra){
//         case "1":
//             let cantidadVacio =prompt("cuantos kg. desea?")
//             alert(`a agregado al carrito ${cantidadVacio}kg. de vacio`)
//             sumarAlCarrito(vacio, cantidadVacio)
//             break;
//         case "2":
//             let cantidadCostilla =prompt("cuantos kg. desea?")
//             alert(`a agregado al carrito ${cantidadCostilla}kg. de costilla`)
//             sumarAlCarrito(costilla, cantidadCostilla)
//             break;
//         case "3":
//             let cantidadCosteleta =prompt("cuantos kg. desea?")
//             alert(`a agregado al carrito ${cantidadCosteleta}kg. de costeleta`)
//             sumarAlCarrito(costeleta, cantidadCosteleta)
//             break;
//         case "5":
//             let selec = carrito.join(`\n`)
//             let pagar = prompt(`${selec} \n total a pagar : $${total} \n 1-confirmar compra \n 2-seguir comprando`)
//             if(pagar == 1){
//                 alert(`a comprado: \n${selec} \n a $${total}`)
//                 enzo = false ;
//             } else if(pagar == 2){
//                 break;
//             } else{
//                 continue
//             }

//             break;
//         default:
//             console.log("no tenemos esa opcion")
//     }

// if (enzo == true){compra = prompt(`que quieres comprar? \n 1-vacio $1000 \n 2-costilla $1100 \n 3-costeleta $800 \n 4-abandonar \n 5-ver carrito`);}

//     }
// }

// if(compra != "4"){
//     vender();
// }



