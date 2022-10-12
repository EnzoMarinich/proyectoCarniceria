async function fetchProductos(){
    const response = await fetch(`./data.json`)
    return await response.json()
} 

let arrayStock = []

fetchProductos().then(productos=> {arrayStock = productos})

fetchProductos()
                .then(productos=>{
                    arrayStock = productos
                    pintarProd()
                })





let sect = document.querySelector("section")
let temp = sect.querySelector("template")
let card = temp.content.querySelector("div")
let carrito = []
let total = Number(0)
let enzo = true
let carritoDeCompras = document.querySelector(".carrito")
let carritoModal = document.querySelector(".carritoModal")
let contadorCarrito = document.getElementById("contadorCarrito")
let cerrarCarrito = document.querySelector(".closeCarrito")
let totalAPagar = 0




// pintamos cada producto en el dom
function pintarProd (){
    arrayStock.forEach((prod)=>{
    let cardClonada = card.cloneNode(true)
    sect.appendChild(cardClonada)
    cardClonada.children[0].src = prod.img
    cardClonada.children[1].innerText = prod.corte
    cardClonada.children[2].innerText = `$${prod.precio} por KG`
    cardClonada.children[3].classList.add(`button${prod.id}`)


    let buttonComprar = document.querySelector(`.button${prod.id}`)

    buttonComprar.addEventListener("click", ()=>{
    sumarAlCarrito(prod.id)
    toast(prod.id)
    contarCarrito()
    })
})
}
// para que el numerito alado del carrito vaya acorde a los productos que elegimos
function contarCarrito(){
    contadorCarrito.innerText = `carrito ${carrito.length}`
}

// funcion para sumar producto al carrito
function sumarAlCarrito (prodID){
    existe = carrito.some(prod=> prod.id === prodID)

    if(existe){
        const prod = carrito.map(prod=>{
            if(prod.id === prodID){
                prod.cantidad++
            }
        })
            
    } else {
        eleccion = arrayStock.find((prod)=> prod.id === prodID)
        eleccion.cantidad = 1
        carrito.push(eleccion)       
}
totalAPagar += eleccion.precio
guardarCarrito()
}

//funcion para guardar carrito en localstorage
function guardarCarrito(){
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
}

// funcion para eliminar producto del carito

const eliminarDelCarrito = (prodID)=>{
    let item = carrito.find((prod)=> prod.id === prodID)
    let indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    totalAPagar = totalAPagar - (item.precio * item.cantidad)
    item.cantidad = 1
    guardarCarrito()
    actualizarCarrito()
    contarCarrito()
}

// creamos y mostramos el carrito que se visualizara en el dom
const actualizarCarrito = ()=>{
    carritoModal.innerHTML = ""
    carrito.forEach((prod)=>{
        const div = document.createElement("div")
        div.classList.add("producto__carrito")
        div.innerHTML= `
        <div class="carrito__detalles">
            <p>${prod.corte}</p>
            <p>$${prod.precio}</p>
            <p>x${prod.cantidad}kg</p>
        </div>
        <button class="botonEliminar" onclick="eliminarDelCarrito(${prod.id})">-</button>
        `
        carritoModal.appendChild(div)

        
    })
    // creamos para que se vea el total en el carrito
    const totalCarrito = document.createElement("div")
    totalCarrito.innerHTML= `<p>Total = $${totalAPagar}</p>`
    carritoModal.appendChild(totalCarrito)

    //creamos el boton vaciar carrito y finalizar compra
    const botonVaciarCarrito = document.createElement("button")
    botonVaciarCarrito.classList.add("boton__vaciar")
    botonVaciarCarrito.innerText = "vaciar carrito"
    carritoModal.appendChild(botonVaciarCarrito)



    const finalizarCompra = document.createElement("button")
    finalizarCompra.classList.add("boton__finalizar")
    finalizarCompra.innerText = "finalizar compra"
    carritoModal.appendChild(finalizarCompra)
    finalizarCompra.addEventListener("click", ()=>{
        const { value: email } =  Swal.fire({
            title: 'Confirmando compra',
            input: 'email',
            inputLabel: 'Ingrese su email. Luego nos comunicaremos a este para finalizar con unos pequeños detalles de la compra. Gracias!  ',
            inputPlaceholder: 'Enter your email address'
          })
    })

    // cambiamos de display none a flex para que se visualize en la pantalla
    document.querySelector(".section__carrito").style.display = "flex"

    //vaciar carrito
    botonVaciarCarrito.addEventListener("click", ()=>{
        carrito = []
        totalAPagar = 0
        guardarCarrito()
        actualizarCarrito()
        contarCarrito()
    })

}

carritoDeCompras.addEventListener("click", ()=>{
    actualizarCarrito()
})

cerrarCarrito.addEventListener("click", ()=>{
    document.querySelector(".section__carrito").style.display = "none"
})


//funcion para que aparezca el toast cuando agreamos al carrito algun producto
const toast = (prodID)=>{
    const x = arrayStock.find((prod)=>prod.id === prodID)
    Toastify({

        text: `Has agregado al carrito ${x.corte} `,
        duration: 3000,
        }).showToast();

}





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



