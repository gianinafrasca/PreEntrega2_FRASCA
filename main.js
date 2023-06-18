// PRE ENTREGA 2 - FRASCA GIANINA
// Sitio de Compra de Entradas a Recitales

const carrito = []

const entradas = [{codigo: 1, nombre: "Entrada Taylor Swift", precio: 80000},
                 {codigo: 2, nombre: "Entrada Bruno Mars", precio: 85000},
                 {codigo: 3, nombre: "Entrada Red Hot Chili Peppers", precio: 55000},
                 {codigo: 4, nombre: "Entrada Tan Biónica", precio: 30000},
                 {codigo: 5, nombre: "Entrada Evanescence", precio: 95000},
                 {codigo: 6, nombre: "Entrada Billie Eilish", precio: 55000}]

function buscarEntrada(codigo) {
  let entradaAbuscar = entradas.find((entrada) => {
    return entrada.codigo === parseInt(codigo)
  })
  return entradaAbuscar
}

function finalizarCompra() {
    const shopping = new Compra(carrito)
    alert('👍 El importe total a pagar es $ ' + shopping.obtenerSubtotal())
}

function comprarEntrada() {
    let codigo = prompt('Ingresa el código de tu entrada a comprar:')
    console.log('Código ingresado:', codigo);

    let entradaElegida = buscarEntrada(codigo)
    console.log('Entrada elegida:', entradaElegida);

    if (entradaElegida !== undefined) {
        carrito.push(entradaElegida)
        alert('✅ ' + entradaElegida.nombre + ' se agregó al carrito.')
        let respuesta = confirm('¿Deseas elegir otra entrada?')
        if (respuesta === true) {
            comprarEntrada()
        } else {
            console.table(carrito)
            finalizarCompra()
        }
    } else {
        alert('⛔️ Error en el código ingresado.')
        comprarEntrada()
    }
}