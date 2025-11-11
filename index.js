import fs from 'fs';
import { subscribePOSTEvent, subscribeGETEvent, startServer } from "soquetic"
let pedidos = JSON.parse(fs.readFileSync("./data/pedidos.json", "utf-8"));
let sabores = JSON.parse(fs.readFileSync("./data/sabores.json", "utf-8"));
let productos = JSON.parse(fs.readFileSync("./data/productos.json", "utf-8"));

function prod() {
  return productos
}

function sab() {
  return sabores
}

function ped(pedido){
    pedidos.push(pedido)
    fs.writeFileSync("./data/pedidos.json", JSON.stringify(pedidos, null, 2), "utf-8");
    return {ok: true};
}

function list(){
    return pedidos
}

subscribeGETEvent("productos", prod)
subscribeGETEvent("sabores", sab)
subscribePOSTEvent("pedido", ped)
subscribeGETEvent("lista", list)
startServer()