import "./index.css"

import { createRoot } from "react-dom/client";
import React from "react";
import Primeiro from "./components/basicos/Primeiro.js"



const root = createRoot(document.getElementById("root"));

root.render(

  <div>
    <Primeiro></Primeiro>
  </div>

);