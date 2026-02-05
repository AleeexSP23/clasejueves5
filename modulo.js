import {
  Usuario,
  GeneradorDeReportes,
  Perro,
  Gato,
  Pajaro,
  AveAcuatica,
  AveVoladora,
  Tienda,
} from "./solid.js";

const usuario = new Usuario("Alex", "asdfqef@pinga.es");

const reporte = new GeneradorDeReportes();

console.log(reporte.imprimirReporteHTML(usuario));

/////////////////

const perro = new Perro();
const gato = new Gato();
const pajaro = new Pajaro();

perro.hablar();
gato.hablar();
pajaro.hablar();

/////////////////////

const aveagua = new AveAcuatica();
const aveaire = new AveVoladora();

aveaire.volar();
aveagua.nadar();
aveagua.ponerHuevos();

//////////////////////////

const tienda = new Tienda();

tienda.HacerPago();

/////////////////////////
