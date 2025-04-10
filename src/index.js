import "./index.css"

import { createRoot } from "react-dom/client";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";



const root = createRoot(document.getElementById("root"));

root.render(

  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro titulo="Segundo Componente" subtitulo="Muito Legal!"></ComParametro>
  </div>

);