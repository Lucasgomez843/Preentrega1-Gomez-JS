//funcion para saludar
function bienvenida() {
  let name = prompt("Ingrese su nombre");
  alert(name + " Te damos la bienvenida a la Tienda de ropa Loovs");
}
//funcion para agregar items
function addItem() {
  item = prompt(
    "Elija entre nuestros productos para sumar al carro \n 1: Remera Social Club  \n 2: Remera Angel \n 3: Remera LTDS \n 4: Remera Galaxy \n 5: Remera Loovs"
  );
   
  if (item === "1") {
    alert("Has añadido una Remera Social Club al Carrito");
  } else if (item === "2") {
    alert("Has añadido una Remera Angel al Carrito");
  } else if (item === "3") {
    alert("Has añadido una Remera LTDS al Carrito");
  } else if (item === "4") {
    alert("Has añadido una Remera Galaxy al Carrito");
  } else if (item === "5") {
    alert("Has añadido una Remera Loovs al Carrito");
  }
  
  if ((item === "1", "2", "3", "4", "5")) {
    cantidadCarrito++;
    alert("Su carrito ahora tiene " + cantidadCarrito + " producto/s");
  }
  envio = prompt(
    "Donde desea recibir su pedido \n 1: Cordoba \n De lo contrario digite el nombre de su provincia"
  );
  if (envio != "1") {
    alert("Le enviaremos su producto a " + envio)
    remeraAngel = remeraAngel+envioPais
    remeraGalaxy = remeraGalaxy+envioPais
    remeraSocialClub = remeraSocialClub+envioPais
    remeraLoovs = remeraLoovs+envioPais
    remeraLTDS = remeraLTDS+envioPais ;
  } else if (envio === "1") {
    alert("Le enviaremos su producto a Cordoba");
    remeraAngel = remeraAngel+envioEnCba
    remeraGalaxy = remeraGalaxy+envioEnCba
    remeraSocialClub = remeraSocialClub+envioEnCba
    remeraLoovs = remeraLoovs+envioEnCba
    remeraLTDS = remeraLTDS+envioEnCba ;
  }
  opcion = prompt("2: Mostrar Precios Finales \n3: Terminar ")
}
//funcion para mostrar montos finales
function final() {
  
  if(item === "1"){
    alert("El monto final de su remera + envio es de: $" +remeraSocialClub)
  }
    else if(item === "2"){
      alert("El monto final de su remera + envio es de : $" +remeraAngel)
    }
    else if(item === "3"){
      alert("El monto final de su remera + envio es de : $" +remeraLTDS)
    }
    else if(item === "4"){
      alert("El monto final de su remera + envio es de : $" +remeraGalaxy)
    }
    else if(item === "5"){
      alert("El monto final de su remera + envio es de : $" +remeraLoovs)
    }

}
function valoranos(){
  let valoracion = prompt("Ingrese su valoracion del rendimiento del sitio web del 1 al 5")
   if (valoracion >= 4){
    alert("Muchas Gracias, seguimos trabajando para satisfacerlo")
   }else if (valoracion <= 3){
    alert("Diganos en que podriamos mejorar \n Contactese al mail: loovs@gmail.com")
   }
}
//Global Vars
let precioF;
let cantidadCarrito = 0;
let item;
let remeraSocialClub = 11500;
let remeraAngel = 10500;
let remeraLTDS = 11900;
let remeraGalaxy = 8500;
let remeraLoovs = 13500;
let envioEnCba = 1500;
let envioPais = 3000;
let provincia;


//Open Page
bienvenida();
let opcion = prompt("Usted acaba de ingresar a la tienda nro 1 en ropa a la moda en Cba desea comprar una nuestras remeras? Seleccione un numero \n 1: Si \n 2: Mostrar Precios Finales \n 3: Salir")
while(opcion !=="3"){
  if (opcion === "1"){
    addItem()
  }
  if(opcion ==="2"){
    final()
    opcion = "3" 
  }
}
alert("Gracias por elegirnos una vez mas")
valoranos();