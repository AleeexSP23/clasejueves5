export class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  obtenerDatos() {
    return `${this.nombre} (${this.email})`;
  }
}

export class GeneradorDeReportes {
  imprimirReporteHTML(usuario) {
    return ` ${usuario.nombre} ${usuario.email} `;
  }
}

///////////////////

class Animal {
  hablar() {}
}

export class Perro extends Animal {
  hablar() {
    console.log("Guau");
  }
}

export class Gato extends Animal {
  hablar() {
    console.log("Miau");
  }
}

export class Pajaro extends Animal {
  hablar() {
    console.log("Pio");
  }
}

//////////////////////

class Ave {
  ponerHuevos() {
    console.log("Mira mi huevo");
  }
}

export class AveAcuatica extends Ave {
  nadar() {
    console.log("Ave usó Surf");
  }
}

export class AveVoladora extends Ave {
  volar() {
    console.log("Ave usó vuelo");
  }
}

////////////////////////

class Paypal {
  pagar() {
    console.log("Pagar con Paypal");
  }
}

class Stripe {
  pagar() {
    console.log("Pagar con Stripe");
  }
}
class klarna {
  pagar() {
    console.log("Pagar con klarna");
  }
}

export class Tienda {
  constructor() {
    this.metodoPago = new Paypal();
  }
  HacerPago() {
    this.metodoPago.pagar();
  }
}

///////////////////////////

class Producto {
    constructor(nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    
}
