class Plato {
    constructor(nombrePlato, precio){
        this.nombrePlato = nombrePlato;
        this.precio = precio;
    }
}
 class Carro {
    constructor(){
        this.platos = [];
        this.seleccionados = [];
    }


mostrarMenu(){
        let mensaje = " MENÚ DEL RESTAURANTE: "
        for (let index = 0; index < this.platos.length; index++) {
            const platos = this.platos[index]; //rescato los productos
            mensaje += `${index + 1}. ${platos.nombrePlato} - $${platos.precio}`
        }
        console.log(mensaje)
    }

elegirplato() {
        let seguir = true;
        while (seguir) {
            let mensaje = "Elegí un número del menú:\n";
            for (let index = 0; index < this.platos.length; index++) {
                const plato = this.platos[index];
                mensaje += `${index + 1}. ${plato.nombrePlato} - $${plato.precio}\n`;
            }
    
            let opcion = parseInt(prompt(mensaje)) - 1;
    
            if (opcion >= 0 && opcion < this.platos.length) {
                let platoElegido = this.platos[opcion];
                this.seleccionados.push(platoElegido);
                alert(`✅ Agregaste: ${platoElegido.nombrePlato}`);
            } else {
                alert("❌ Opción inválida");
            }
    
            seguir = confirm("¿Querés elegir otro plato?");
        }

        this.mostrarPedidoFinal();
    }
mostrarPedidoFinal(){ //mostrar total a pagar y nota de pedido
        let resumen = " Tu pedido es: ";
        let total = 0;
        for (let plato of this.seleccionados) {
            resumen += ` - ${plato.nombrePlato} - $${plato.precio}`;
            total += plato.precio;
        }
        resumen +=`Total: $${total}`;
        alert(resumen);
        console.log(resumen);
    }
 }
 const Menu = [
    {
        nombrePlato: "Hamburgesa con queso",
        precio: 1000,
    },
    {
        nombrePlato: "Fideos con tuco",
        precio: 1300,
    },
    {
        nombrePlato: "Rissoto",
        precio: 1400,
    },
    {
        nombrePlato: "Milanesas a caballo",
        precio: 1200,
    },
    {
        nombrePlato: "Hamburgesa con queso",
        precio: 1430,
    },
    
 ]

const carro = new Carro();
carro.platos = Menu.map(p => new Plato(p.nombrePlato, p.precio)); //recorre un array y devuelve otro array nuevo

carro.mostrarMenu();

carro.elegirplato();





