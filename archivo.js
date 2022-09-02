


let compra = prompt("que quieres comprar? \n 1-vacio  \n 2-costilla \n 3-costeleta \n 4-abandonar");

function vender() { while(compra != "4"){
    switch(compra){
        case "1":
            console.log("usted a comprado vacio")
            break;
        case "2":
            console.log("usted a comprado costilla")
            break;
        case "3":
            console.log("usted a comprado costeleta")
            break;
        default:
            console.log("no tenemos esa opcion")
    }

compra = prompt("que quieres comprar? \n 1-vacio  \n 2-costilla \n 3-costeleta \n 4-abandonar");

   }
}


if(compra != "4"){
    vender();
}



