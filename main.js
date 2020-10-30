var resultados = document.querySelector("#resultados");
var resultadosInv = document.querySelector("#resultadosInv");
var busquedaResult = document.querySelector("#busquedaResult");
var acciones = document.querySelector("#acciones");

var btnAgregar = document.querySelector("#btnAgregar");
var btnBorrar = document.querySelector("#btnBorrar");
var btnBuscar = document.querySelector("#btnBuscar");
var btnListar = document.querySelector("#btnListar");
var btnListarInv = document.querySelector("#btnListarInv");
var btnInsertarPos = document.querySelector("#btnInsertarPos");

class Producto{
    constructor(nom, cod, desc, cant, cost){
        this.nom = nom;
        this.cod = cod;
        this.desc = desc;
        this.cant = cant;
        this.cost = cost;
        this.valorM = parseFloat(cant)*parseFloat(cost);
    }
}
class Productos{
    constructor(){
        this.Productos = [];
    }
    añadirPro(nuevoPro){
        let ultimoElemento = this.Productos.length;
        this.Productos[ultimoElemento] = nuevoPro;
    }
    llamadoProductos(){
        return this.Productos;
    }
    borrarProducto(codigoBorrar){
        let indice = null;
        for (let i = 0; i < this.Productos.length; i++){
          if (this.Productos[i].cod == codigoBorrar){
            indice = i;
          }
        }
    
        if (indice !== null){
          this.Productos.splice(indice, 1);
          return true;
        }
        return false;
      }
    buscarProducto(codigoBuscar){
        let productoEncontrado = null;
        for(let i = 0; i < this.Productos.length; i++){
          if(this.Productos[i].cod == codigoBuscar){
            productoEncontrado = this.Productos[i];
          }
        }
        return productoEncontrado;
      }
    insertarEn(producto, indice){
        if (this.Productos.length<20){
          this.Productos.splice(indice, 0, producto);
          return true;
        }
        return false;
      }
} 
    var todosPro = new Productos();

btnAgregar.addEventListener("click", function(){
    if(todosPro.llamadoProductos().length<20){
        let nom = document.querySelector("#nom").value;
        let cod = document.querySelector("#cod").value;
        let desc = document.querySelector("#desc").value;
        let cant = document.querySelector("#cant").value;
        let cost = document.querySelector("#cost").value;
  
        let productoNuevo = new Producto(nom, cod, desc, cant, cost);
        todosPro.añadirPro(productoNuevo);
        acciones.innerHTML += "<p>Se agrego un nuevo producto</p>";
        return;
    }
    return alert("Limite de productos alcanzado");
  })

btnListar.addEventListener("click", function(){
    resultados.innerHTML = " ";
    let proTotales = todosPro.llamadoProductos();
    proTotales.forEach(function(pro){
        resultados.innerHTML += "<ul style='border: 1px solid'><li>Nombre: "+ pro.nom +"</li><li>Codigo: "+ pro.cod +"</li>"+
        "<li>Descripcion: "+ pro.desc +"</li><li>Cantidad: "+ pro.cant +"</li><li>Costo: "+ pro.cost +"</li><li>Valor mercancia: "+ pro.valorM +"</li></ul>";
    });
});
btnListarInv.addEventListener("click", function(){
    resultadosInv.innerHTML = " ";
    let proTotales = todosPro.llamadoProductos();
    let proTotalesInv = proTotales.reverse();
    proTotalesInv.forEach(function(pro){
        resultadosInv.innerHTML += "<ul style='border: 1px solid'><li>Nombre: "+ pro.nom +"</li><li>Codigo: "+ pro.cod +"</li>"+
        "<li>Descripcion: "+ pro.desc +"</li><li>Cantidad: "+ pro.cant +"</li><li>Costo: "+ pro.cost +"</li><li>Valor mercancia: "+ pro.valorM +"</li></ul>";
    });
});
btnBorrar.addEventListener("click", function(){
    let codigoBorrar = document.querySelector("#borrarCodigo").value;
    let fueborrado = todosPro.borrarProducto(codigoBorrar);
    if(fueborrado){
        acciones.innerHTML += "<p>Se elimino un producto</p>";
    }
    else{
        alert("Codigo no encontrado");
    }
})
btnBuscar.addEventListener("click", function(){ 
    let codigoBuscar = document.querySelector("#buscarPorCodigo").value;
    let proEncontrado = todosPro.buscarProducto(codigoBuscar);
    if(proEncontrado){
        acciones.innerHTML += "<p>Se encontro el producto buscado</p>";
        busquedaResult.innerHTML = "<ul style='border: 1px solid'><li>Nombre: "+ proEncontrado.nom +"</li><li>Codigo: "+ proEncontrado.cod +"</li>"+
        "<li>Descripcion: "+ proEncontrado.desc +"</li><li>Cantidad: "+ proEncontrado.cant +"</li><li>Costo: "+ proEncontrado.cost +"</li><li>Valor mercancia: "+ proEncontrado.valorM +"</li></ul>";
    }
    else{
        alert("Codigo no encontrado");
    }
})
btnInsertarPos.addEventListener("click", function(){
    let nom = document.querySelector("#nom").value;
    let cod = document.querySelector("#cod").value;
    let desc = document.querySelector("#desc").value;
    let cant = document.querySelector("#cant").value;
    let cost = document.querySelector("#cost").value;
    let posicion = document.querySelector("#indicar").value;
  
    let productoNuevo = new Producto(nom, cod, desc, cant, cost);
    let fueInsertado = todosPro.insertarEn(productoNuevo, posicion);
    if(fueInsertado){
        acciones.innerHTML += "<p>Se agrego un nuevo producto con la posicion deseada</p>";
    }
    else{
        alert("Limite de elementos alcanzado")
    }
})