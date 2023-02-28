import { createStore } from "redux";
import azul from "./img/azul.png";
import sirenita from "./img/sirenita.jpg";
import PikaFeliz from "./img/PikaFeliz.jpg";
import garfield_gato from "./img/garfield_gato.webp";
import dragonzul from "./img/dragonzul.jpg";
import zorro from "./img/zorro.png";
import pio from "./img/pio.webp";
import cano from "./img/cano.png";
import mono from "./img/mono.png";
import tractor from "./img/tractor.png";
import flor from "./img/flor.jpg";
import koala from "./img/koala.jpg";
import muped from "./img/muped.jpg";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Brian Brown",
      foto: azul,
    },

    {
      id: 2,
      nombre: "Wilson",
      foto: sirenita,
    },
    {
      id: 3,
      nombre: "Andres",
      foto: PikaFeliz,
    },
    {
      id: 4,
      nombre: "Claudio",
      foto: garfield_gato,
    },
    {
      id: 5,
      nombre: "Chano",
      foto: dragonzul,
    },
    {
      id: 6,
      nombre: "Javier",
      foto: zorro,
    },
    {
      id: 7,
      nombre: "Pio",
      foto: pio,
    },
    {
      id: 8,
      nombre: "Cano",
      foto: cano,
    },
    {
      id: 9,
      nombre: "Fabian",
      foto: mono,
    },
    {
      id: 10,
      nombre: "extra 1",
      foto: tractor,
    },
    {
      id: 11,
      nombre: "extra 2",
      foto: flor,
    },
    {
      id: 12,
      nombre: "extra 3",
      foto: koala,
    },
    {
      id: 13,
      nombre: "extra 4",
      foto: muped,
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  if (action.type === "AGREGAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "AGREGAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
    };
  }
  if (action.type === "QUITAR_TITULAR") {
    return {
      ...state,
      titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  if (action.type === "QUITAR_SUPLENTE") {
    return {
      ...state,
      suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
      jugadores: state.jugadores.concat(action.jugador),
    };
  }
  return state;
};

export default createStore(reducerEntrenador);
