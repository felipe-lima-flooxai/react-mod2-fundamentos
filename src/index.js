import "./index.css"

import { createRoot } from "react-dom/client";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";



const root = createRoot(document.getElementById("root"));

root.render(

  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!"></ComParametro>
    <Fragmento></Fragmento>
  </div>

);